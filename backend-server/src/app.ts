import path from "path";
import express from "express";
import bodyParser from "body-parser";
import { Application } from "express";
import mongoose from "mongoose";
import { TemplateRoutes } from "./routes/template.routes";
import { TemplateController } from "./controllers/template.controller";
import { MONGO_URL, PORT } from "./constants";
import { BankIDController } from "./controllers/bank-id.controller";

class App {
  public app: Application;

  /**
   * use someone of these, not both, they have different meaning, so change their name
   * @param templateRoutes is for default routes.
   * @param templateController is for routes, but where mongodb crud events happens.
   */
  // public templateRoutes: TemplateRoutes = new TemplateRoutes();
  public templateController: TemplateController;
  public bankIdController: BankIDController;

  private readonly mongoUrl: string = MONGO_URL;
  private readonly PORT = PORT;

  constructor() {
    this.app = express();
    this.config();
    this.templateController = new TemplateController(this.app);
    this.bankIdController = new BankIDController(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Set port number
    this.app.set("port", process.env.PORT || this.PORT);

    // Add headers
    this.app.use(function(req, res, next) {
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.setHeader("Content-Type", "application/json");

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      // Request headers you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", "true");

      // Pass to next layer of middleware
      next();
    });
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log(`successfully connected to  ${this.mongoUrl}`))
      .catch(error => console.error("failed to connect to mongodb" + error));
  }
}

export default new App().app;
