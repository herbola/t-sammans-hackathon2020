import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Template } from "../models/template.model";
import { Activity } from "../models/activity.model";
import { IUser, User } from "../models/user.model";

@Injectable()
export class UserService {
  private readonly url = `http://localhost:3000/user/add-activity`;

  constructor(private httpClient: HttpClient) {}

  public updateUser(user: IUser, callback: (user: IUser) => any) {
    this.httpClient
      .put(`${this.url}/${user._id}`, user)
      .subscribe(callback, error => console.error(error));
  }
  public getAllUsers(callback: (ysers: User[]) => any) {
    this.httpClient
      .get<IUser[]>(this.url)
      .subscribe(callback, error => console.error(error));
  }
}
