import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  template: `
    <div class="ccc" align="center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="106.96"
        height="106.96"
        viewBox="0 0 106.96 106.96"
      >
        <defs>
          <style>
            .a {
              fill: rgba(0, 0, 0, 0);
            }
            .b {
              fill: #fff;
            }
          </style>
        </defs>
        <path class="a" d="M0,0H106.96V106.96H0Z" />
        <path
          class="b"
          d="M43.11,2A8.913,8.913,0,1,1,34.2,10.913,8.94,8.94,0,0,1,43.11,2ZM83.22,33.2H56.48V91.133H47.567V64.393H38.653v26.74H29.74V33.2H3V24.283H83.22Z"
          transform="translate(10 6.913)"
        />
      </svg>
      <br />
      <mat-label class="label"> Sammans</mat-label>
    </div>
    <div class="cccc" align="center" (click)="login()">
      <button class="main-button btn">Logga in med BankID</button>
    </div>
  `,
  styles: [
    `
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
  ]
})
export class HomeComponent {
  ngOnInit(): void {}
  constructor(private router: Router) {}
  login() {
    this.router.navigate(["/login"]);
  }
}
