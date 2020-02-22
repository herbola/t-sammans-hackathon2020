import { Activity } from "./activity.model";

export class User implements IUser {
  _id?: string;
  firstname: string;
  surname: string;
  personalNumber: string;
  activityIds: string[];
  constructor(iUser: IUser) {
    this.firstname = iUser.firstname;
    this.surname = iUser.surname;
    this.personalNumber = iUser.personalNumber;
    this.activityIds = iUser.activityIds || [];
    this._id = iUser._id;
  }
}

export interface IUser {
  _id?: string;
  firstname: string;
  surname: string;
  personalNumber: string;
  activityIds: string[];
}
