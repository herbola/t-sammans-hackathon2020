import * as mongoose from "mongoose";

import * as increment from "mongoose-auto-increment";
import { Activity, IActivity } from "./activity.model";

export type UserSchema = IUser & mongoose.Document;

export interface IUser {
  _id: Number;
  firstname: string;
  surname: string;
  personalNumber: string;
  activityIds: string[];
}

export const User: mongoose.Model<UserSchema> = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    personalNumber: { type: String, required: true },
    activityIds: [{ type: String }]
  })
);
