import { TemplateService } from "../services/template.service";
import { Application } from "express";
import { ActivityService } from "../services/activity.service";

export class ActivityController {
  private activityService: ActivityService;
  constructor(private app: Application) {
    this.activityService = new ActivityService();
    this.routes();
  }

  public routes() {
    this.app.route("/activity").get(this.activityService.getAllActivities);

    this.app.route("/activity").post(this.activityService.addActivity);

    this.app
      .route("/activity/:id")
      .delete(this.activityService.deleteActivity)
      .put(this.activityService.updateActivity)
      .get(this.activityService.getOneActivity);
  }
}
