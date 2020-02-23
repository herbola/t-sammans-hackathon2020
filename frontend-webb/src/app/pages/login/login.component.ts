import { Component, OnInit } from "@angular/core";
import { BankIDService } from "src/app/services/bank-id.service";
import { AuthResponse, CollectResponse } from "src/app/models/bankid.model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ActivityService } from "src/app/services/activity.service";
import { Activity, ActivityTest } from "src/app/models/activity.model";
import { Router } from "@angular/router";
import { Auth } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [
    `
      button {
        width: 100%;
      }
      mat-form-field {
        width: 100%;
      }
      input: {
        width: 100%;
      }
      .ccc {
        position: fixed;
        top: 40%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
      }
      .cccc {
        position: fixed;
        top: 80%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
      }
      .label {
        color: white;
        font-size: 40px;
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        text-shadow: 2px 2px black;
      }
      .btn {
        margin-top: 30px;
      }
    `
  ],
  providers: []
})
export class LoginComponent implements OnInit {
  public loading = false;
  ngOnInit(): void {
    this.init();
  }
  loginFormGroup: FormGroup;
  constructor(
    private bankIdService: BankIDService,
    private fb: FormBuilder,
    private router: Router,
    private as: ActivityService,
    private auth: Auth
  ) {}

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
    this.loading = true;
    const personalNumber = this.loginFormGroup.controls.personalNumber.value;
    this.bankIdService.auth(
      personalNumber,
      (response: AuthResponse) => {
        this.bankIdService.collect(
          response.orderRef,
          (response: CollectResponse) => {
            console.log(response.user);
            this.auth.setUser(response.user);
            this.router.navigate(["/activity"]);
            this.loading = false;
          },
          error => {
            this.loading = false;
          }
        );
      },
      error => {
        this.loading = false;
      }
    );
  }
}
