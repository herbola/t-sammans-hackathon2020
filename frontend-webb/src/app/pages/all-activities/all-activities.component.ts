import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Activity } from "src/app/models/activity.model";
import { ActivityService } from "src/app/services/activity.service";

@Component({
  selector: "app-activities",
  templateUrl: "./all-activities.component.html",
  styles: [
    `
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
export class AllActivitiesComponent implements OnInit {
  public activities: Activity[];

  ngOnInit(): void {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private as: ActivityService
  ) {
    this.as.getAllActivities(activities => {
      this.activities = activities;
    });
  }
  create() {
    this.router.navigate(["/create-activity"]);
  }
}
