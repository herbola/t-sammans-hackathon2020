import { Component, ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import { BankIDService } from "./services/bank-id.service";
import { ActivityService } from "./services/activity.service";
import { Router } from "@angular/router";
import { MediaMatcher } from "@angular/cdk/layout";
import { PreviousRouteService } from "./services/prev-routing.servie";
import { Auth } from "./services/auth.service";
import { LoginGuard } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
  providers: [BankIDService, ActivityService, PreviousRouteService, UserService]
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private auth: Auth
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router.events.subscribe(val => {});
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  get isAuth() {
    return this.auth.isAuthenticated();
  }
  get user() {
    return this.auth.getUser();
  }
  profile() {
    this.router.navigate(["/profile"]);
  }
}
