import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Template } from "../models/template.model";
import { Activity } from "../models/activity.model";

@Injectable()
export class ActivityService {
  private readonly url = `http://localhost:3000/activity`;

  constructor(private httpClient: HttpClient) {}

  public addActivity(
    activity: Activity,
    callback: (activity: Activity) => any
  ) {
    this.httpClient
      .post<Activity>(this.url, activity)
      .subscribe(callback, error => console.error(error));
  }

  public getActivity(id: string, callback: (activity: Activity) => any) {
    this.httpClient
      .get<Activity>(`${this.url}/${id}`)
      .subscribe(callback, error => console.error(error));
  }

  public updateActivity(
    activity: Activity,
    callback: (activity: Activity) => any
  ) {
    this.httpClient
      .put(`${this.url}/${activity._id}`, activity)
      .subscribe(callback, error => console.error(error));
  }

  public deleteActivity(activity: Activity, callback: () => any) {
    this.httpClient
      .delete(`${this.url}/${activity._id}`)
      .subscribe(callback, error => console.error(error));
  }

  public getAllActivities(callback: (activities: Activity[]) => any) {
    this.httpClient
      .get<Activity[]>(this.url)
      .subscribe(callback, error => console.error(error));
  }
}
