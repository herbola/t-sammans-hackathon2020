import { Component, OnInit } from "@angular/core";
import { BankIDService } from "src/app/services/bank-id.service";
import { AuthResponse, CollectResponse } from "src/app/models/bankid.model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
  providers: []
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.init();
  }
  loginFormGroup: FormGroup;
  constructor(private bankIdService: BankIDService, private fb: FormBuilder) {}

  private init() {
    this.loginFormGroup = this.fb.group({
      personalNumber: new FormControl("", [
        Validators.maxLength(12),
        Validators.minLength(12),
        Validators.required
      ])
    });
  }
  public get valid() {
    return this.loginFormGroup.valid;
  }
  public login() {
    const personalNumber = this.loginFormGroup.controls.personalNumber.value;
    this.bankIdService.auth(personalNumber, (response: AuthResponse) => {
      this.bankIdService.collect(
        response.orderRef,
        (response: CollectResponse) => {
          console.log(response);
        }
      );
    });
  }
}
