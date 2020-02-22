import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Activity } from "src/app/models/activity.model";
import { ActivityService } from "src/app/services/activity.service";
import { dynamicHeight } from "../../animation/dynamic-height.animation";
import { UserService } from "src/app/services/user.service";
import { Auth } from "src/app/services/auth.service";
import { IUser } from "src/app/models/user.model";
import { deepCopyClone } from "src/app/utlity/utility";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  encapsulation: ViewEncapsulation.None,
  animations: [dynamicHeight()],
  styles: [``]
})
export class ActivityComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.auth.getUser());
  }
  @Input() activity: Activity;
  public src = "https://picsum.photos/300/100?" + Math.random();
  showMore: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private as: ActivityService,
    private us: UserService,
    private auth: Auth
  ) {}

  public get placesLeft() {
    return this.activity.maxSpots - this.activity.users.length;
  }
  public toggleShowMore() {
    this.showMore = !this.showMore;
  }
  public showMembers() {
    this.router.navigate(["/show-members", this.activity._id]);
  }
  public getDate() {
    var date = new Date(this.activity.date);
    var day;
    switch (date.getDay()) {
      case 0: {
        day = "Måndag";
        break;
      }
      case 1: {
        day = "Tisdag";
        break;
      }
      case 2: {
        day = "Onsdag";
        break;
      }
      case 3: {
        day = "Torsdag";
        break;
      }
      case 4: {
        day = "Fredag";
        break;
      }
      case 5: {
        day = "Lördag";
        break;
      }
      case 7: {
        day = "Söndag";
        break;
      }
    }
    var _date = date.getDate();
    var month;
    switch (date.getMonth()) {
      case 0: {
        month = "Januari";
        break;
      }
      case 1: {
        month = "Februari";
        break;
      }
      case 2: {
        month = "Mars";
        break;
      }
      case 3: {
        month = "April";
        break;
      }
      case 4: {
        month = "Maj";
        break;
      }
      case 5: {
        month = "Juni";
        break;
      }
      case 6: {
        month = "Juli";
        break;
      }
      case 7: {
        month = "Augusti";
        break;
      }
      case 8: {
        month = "September";
        break;
      }
      case 9: {
        month = "Oktober";
        break;
      }
      case 10: {
        month = "November";
        break;
      }
      case 11: {
        month = "December";
        break;
      }
    }
    return day + " " + _date + ":e " + month;
  }
  public getTime() {
    return new Date(this.activity.date).getHours() + ":00";
  }
  public addActivityToUser() {
    var user = deepCopyClone(this.auth.getUser());
    user.activityIds = user.activityIds ? user.activityIds : [];
    user.activityIds.push(this.activity._id);
    this.updateUser(user);
  }
  private updateUser(user: IUser) {
    this.us.updateUser(user, _user => {
      this.auth.setUser(_user);
      console.log("user", _user);
    });
  }
  public removeActivityFromUser() {
    var user = deepCopyClone(this.auth.getUser());
    console.log("user before", deepCopyClone(user));
    var index = user.activityIds.findIndex(id => id === this.activity._id);
    (user.activityIds as []).splice(index, 1);
    console.log("user after", deepCopyClone(user));
    this.updateUser(user);
  }
  public get haveActivity() {
    var user = this.auth.getUser();

    return user.activityIds
      ? user.activityIds.some(id => id === this.activity._id)
      : false;
  }
}
