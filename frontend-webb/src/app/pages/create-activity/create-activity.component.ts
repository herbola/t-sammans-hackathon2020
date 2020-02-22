import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ActivityService } from "src/app/services/activity.service";
import { Activity } from "src/app/models/activity.model";
import { Auth } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-component",
  templateUrl: "create-activity.component.html",
  styles: [
    `
      form {
        width: 90%;
      }
      mat-form-field {
        width: 90%;
      }
      button {
        width: 90%;
      }
    `
  ]
})
export class CreateActivityComponent {
  public formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private as: ActivityService,
    private auth: Auth,
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      label: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      minSpots: new FormControl("", [Validators.required]),
      maxSpots: new FormControl("", [Validators.required]),
      address: new FormControl("", Validators.required)
    });
  }

  public get valid() {
    return this.formGroup.valid;
  }
  public submit() {
    var activity = new Activity({
      label: this.formGroup.controls.label.value,
      price: this.formGroup.controls.price.value,
      description: this.formGroup.controls.description.value,
      date: this.formGroup.controls.date.value,
      minSpots: this.formGroup.controls.minSpots.value,
      maxSpots: this.formGroup.controls.maxSpots.value,
      address: this.formGroup.controls.address.value,
      users: [this.auth.getUser()],
      owner: this.auth.getUser()
    });

    this.as.addActivity(activity, activity => {
      this.router.navigate(["/activity"]);
    });
  }
}
