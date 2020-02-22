import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable()
export class Auth {
  private user: User;
  constructor(private router: Router) {}
  setUser(user: User) {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }

  isAuthenticated() {
    return !!this.user;
  }
}
