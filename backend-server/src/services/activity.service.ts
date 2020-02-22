import { Request, Response } from "express";
import { Activity, IActivity } from "../models/activity.model";

export class ActivityService {
  public getAllActivities(request: Request, response: Response) {
    Activity.find({}, (error: Error, templates: IActivity[]) => {
      error ? response.send(error) : response.json(templates);
    });
  }
  public addActivity(request: Request, response: Response) {
    const newActivity = new Activity(request.body);

    newActivity.save((error: Error, template: IActivity) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.json(template);
      }
    });
  }
  public deleteActivity(request: Request, response: Response) {
    const activityId = request.params.id;
    Activity.findByIdAndDelete(activityId, (error: Error) => {
      if (error) {
        response.send(error);
        console.log(error);
      } else {
        const message = "Deleted successfully";
        //const message = template ? "Deleted successfully" : `failed to delete template with id ${templateId}`;
        response.status(200).json(message);
      }
    });
  }

  public updateActivity(request: Request, response: Response) {
    const activityId = request.params.id;
    Activity.findByIdAndUpdate(activityId, request.body, (error: Error) => {
      if (error) {
        response.send(error);
      } else {
        response.json(`didnt find template with id ${activityId}`);
      }
    });
  }
  public getOneActivity(request: Request, response: Response) {
    const activityId = request.params.id;
    Activity.findById(activityId, (error, activity) => {
      if (error) {
        response.send(error);
      } else {
        response.status(200).json(activity);
      }
    });
  }
}
