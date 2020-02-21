import { Component } from "@angular/core";
import { BankIDService } from "./services/bank-id.service";
import { MainService } from "./services/main.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [BankIDService, MainService]
})
export class AppComponent {
  title = "frontend-webb";
}
