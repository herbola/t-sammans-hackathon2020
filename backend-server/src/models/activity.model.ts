import * as mongoose from "mongoose";

import * as increment from "mongoose-auto-increment";
import { IUser, UserSchema, User } from "./user.model";

type ActivitySchema = IActivity & mongoose.Document;

export interface IActivity {
  _id: Number;
  owner: IUser;
  label: String;
  price: String;
  users: IUser[];
  description: String;
  address: String;
  date: Date;
  minSpots: Number;
  maxSpots: Number;
}

export const Activity: mongoose.Model<ActivitySchema> = mongoose.model(
  "Activity",
  new mongoose.Schema({
    owner: User.schema,
    label: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, required: true },
    users: [User.schema],
    minSpots: { type: Number },
    maxSpots: { type: Number }
  })
);
