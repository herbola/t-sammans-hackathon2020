import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Activity } from "src/app/models/activity.model";
import { ActivityService } from "src/app/services/activity.service";
import { Auth } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "show-members",
  template: `
    <div *ngIf="activity" style="margin-top: 10px" align="center">
      <div
        class="activity-item col "
        style="padding:10px; "
        *ngFor="let user of activity.users"
      >
        <h6>{{ user.firstname + " " + user.surname }}</h6>
        <p>{{ user.personalName }}</p>
      </div>
    </div>
  `,
  styles: [``]
})
export class ShowMembersComponent implements OnInit {
  public activity: Activity;
  constructor(
    private us: UserService,
    private as: ActivityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.as.getActivity(params["id"], activity => {
          this.activity = activity;
        });
      }
    });
  }
}
