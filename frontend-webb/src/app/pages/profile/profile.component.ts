import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Activity } from "src/app/models/activity.model";
import { ActivityService } from "src/app/services/activity.service";
import { Auth } from "src/app/services/auth.service";

@Component({
  selector: "app-profile",
  template: `
    <div class="row activities" align="center">
      <app-activity
        style="margin: 0 auto;"
        *ngFor="let activity of activities"
        class="col activity"
        [activity]="activity"
      ></app-activity>
    </div>
    <div align="center" (click)="logout()">
      <button class="main-button btn">Logga ut</button>
    </div>
  `,
  styles: [
    `
      .label {
        color: white;
        font-size: 40px;
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        text-shadow: 2px 2px black;
      }
      ,
      .activity {
        max-width: 400px !important;
      }
      .activities {
        margin-top: 20px;
      }

      .second-button {
        margin-top: -40px !important;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    console.log("init");
    this.activities = [];
    var user = this.auth.getUser();
    if (user) {
      user.activityIds.forEach(id => {
        this.as.getActivity(id, activity => {
          this.activities.push(activity);
        });
      });
    }
  }
  public activities = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private as: ActivityService,
    private auth: Auth
  ) {}

  logout() {
    this.auth.setUser(null);
    this.router.navigate(["/profile"]);
  }
}
