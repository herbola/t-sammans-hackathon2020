import { Request, Response, Express, NextFunction } from "express";
import fs from "fs";
import https from "https";
import fetch from "node-fetch";
import { resolve } from "path";
import { User, IUser } from "../models/user.model";

enum hintCodes {
  expiredTransaction = "expiredTransaction",
  certificateErr = "certificateErr",
  userCancel = "userCancel",
  cancelled = "cancelled",
  startFailed = "startFailed"
}

export class BankIDService {
  private agent: https.Agent;
  private readonly baseUrl = "https://appapi2.test.bankid.com/rp/v5/";
  constructor() {
    this.agent = new https.Agent({
      pfx: fs.readFileSync(
        __dirname + "/../security/FPTestcert2_20150818_102329.pfx"
      ),
      passphrase: "qwerty123",
      ca: fs.readFileSync(__dirname + "/../security/BankID.cer")
    });
  }
  public async auth(request: Request, response: Response, next: NextFunction) {
    if (request.query.personalNumber === undefined) {
      next();
    }
    var clientIp =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let data = await fetch(`${this.baseUrl}/auth`, {
      method: "POST",
      body: JSON.stringify({
        personalNumber: request.query.personalNumber,
        endUserIp: clientIp
      }),
      headers: {
        "content-type": "application/json"
      },
      agent: this.agent
    });

    var json = await data.json();

    let orderRef;
    if (json.orderRef) orderRef = json.orderRef;

    // if (json.errorCode !== undefined) {
    //   console.log("error", json);
    //   next();
    // } else {
    response.json({
      message: "auth initiated, please open bankid to authenticate" + orderRef,
      orderRef: orderRef
    });
    //}
  }

  public async collect(request: Request, response: Response) {
    let orderRef = request.query.orderRef;
    let data = (await this.callCollect(orderRef)) as any;
    let personalNumber = data.completionData.user.personalNumber;
    let firstname = data.completionData.user.givenName;
    let surnname = data.completionData.user.surname;
    User.findOne({ personalNumber: personalNumber }, (error: Error, user) => {
      if (error) {
        const user = new User({
          firstname: firstname,
          surname: surnname,
          personalNumber: personalNumber
        });
        user.save((error: Error, user: IUser) => {
          response.json({
            status: data.status,
            completionData: data.completionData,
            user: user
          });
        });
      } else {
        response.json({
          status: data.status,
          completionData: data.completionData,
          user: user
        });
      }
    });
  }

  private async callCollect(orderRef: string): Promise<any> {
    let data: any = await fetch(`${this.baseUrl}/collect`, {
      method: "POST",
      body: JSON.stringify({
        orderRef: orderRef
      }),
      headers: {
        "content-type": "application/json"
      },
      agent: this.agent
    });

    data = await data.json();
    if (data.hintCode) {
      if (
        data.hintCode !== hintCodes.expiredTransaction &&
        data.hintCode !== hintCodes.certificateErr &&
        data.hintCode !== hintCodes.userCancel &&
        data.hintCode !== hintCodes.cancelled &&
        data.hintCode !== hintCodes.startFailed
      ) {
        return await this.sleep(this.callCollect.bind(this), orderRef);
      } else {
        // fail, return
        console.log("fail, return"); // msg RFA22
        return data;
      }
    } else {
      return data;
    }
  }
  private timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private async sleep(fn: (...args: any[]) => void, ...args: any[]) {
    await this.timeout(2000);
    return await fn(...args);
  }
}
