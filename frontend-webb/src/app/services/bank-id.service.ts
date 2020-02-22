import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthResponse, CollectResponse } from "../models/bankid.model";
import { config } from "../config/config";
@Injectable()
export class BankIDService {
  private readonly AUTH_URL =
    config.BASE_URL + config.SERVLET_ENTRIES.BANKID_AUTH;
  private readonly COLLECT_URL =
    config.BASE_URL + config.SERVLET_ENTRIES.BANKID_COLLECT;
  constructor(private httpClient: HttpClient) {}
  public auth(
    personalNumber: string,
    callback: (response: AuthResponse) => void,
    error?: CallableFunction
  ) {
    this.httpClient
      .get<AuthResponse>(this.AUTH_URL, {
        params: new HttpParams().set("personalNumber", personalNumber)
      })
      .subscribe(callback, error => error(error));
  }

  public collect(
    orderRef: string,
    callback: (CollectResponse) => void,
    error?: CallableFunction
  ) {
    this.httpClient
      .get<CollectResponse>(this.COLLECT_URL, {
        params: new HttpParams().set("orderRef", orderRef)
      })
      .subscribe(callback, error => error(error));
  }
}
