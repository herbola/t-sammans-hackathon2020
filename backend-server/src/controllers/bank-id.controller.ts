import { BankIDService } from "../services/bank-id.service";
import { Application } from "express";

export class BankIDController {
  private bankIDService: BankIDService;
  constructor(private app: Application) {
    this.bankIDService = new BankIDService();
    this.routes();
  }

  public routes() {
    this.app
      .route("/bank-id/auth")
      .get(this.bankIDService.auth.bind(this.bankIDService));
    this.app
      .route("/bank-id/collect")
      .get(this.bankIDService.collect.bind(this.bankIDService));
  }
}
