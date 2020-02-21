import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "login" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes /**, { enableTracing: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
