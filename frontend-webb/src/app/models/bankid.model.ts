import { User } from "./user.model";

export type AuthResponse = { message: string; orderRef: string };

export type CollectResponse = {
  status: string;
  user: User;
  completionData: {};
};
