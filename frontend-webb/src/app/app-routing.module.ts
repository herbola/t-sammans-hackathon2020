import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { ActivityComponent } from "./pages/activity/activity.component";
import { AllActivitiesComponent } from "./pages/all-activities/all-activities.component";
import { CreateActivityComponent } from "./pages/create-activity/create-activity.component";
import { LoginGuard } from "./services/auth-guard.service";
import { Auth } from "./services/auth.service";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HomeComponent } from "./pages/home/home.component";
import { ShowMembersComponent } from "./pages/show-members/show-members";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "activity",
    component: AllActivitiesComponent,
    canActivate: [LoginGuard]
  },
  { path: "home", component: HomeComponent },
  {
    path: "activity/:id",
    component: ActivityComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "show-members/:id",
    component: ShowMembersComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [LoginGuard]
  },

  {
    path: "create-activity",
    component: CreateActivityComponent,
    canActivate: [LoginGuard]
  },

  { path: "**", redirectTo: "home" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes /**, { enableTracing: true } */)],
  exports: [RouterModule],
  providers: [LoginGuard, Auth]
})
export class AppRoutingModule {}
