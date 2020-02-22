import { UserService } from "../services/user.service";
import { Application } from "express";
export class UserController {
  private userService: UserService;
  constructor(private app: Application) {
    this.userService = new UserService();
    this.routes();
  }

  public routes() {
    this.app.route("/user/add-activity/:id").put(this.userService.updateUser);

    this.app.route("/user").get(this.userService.getAllUsers);
  }
}
