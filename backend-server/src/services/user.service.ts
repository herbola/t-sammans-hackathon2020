import { Request, Response } from "express";

import { User, IUser } from "../models/user.model";

export class UserService {
  public updateUser(request: Request, response: Response) {
    const userId = request.params.id;
    User.findOneAndUpdate(
      { _id: userId },
      request.body,
      (error: Error, user) => {
        console.log(error, user);
        if (error) {
          response.send(error);
        }
      }
    ).then(() => {
      User.findOne({ _id: userId }, (error, user) => {
        if (error) {
          response.send(error);
        } else {
          response.status(200).json(user);
        }
      });
    });
  }
  public getAllUsers(request: Request, response: Response) {
    User.find({}, (error: Error, templates: IUser[]) => {
      error ? response.send(error) : response.json(templates);
    });
  }
}
