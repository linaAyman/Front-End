import { ChangePlanComponent } from './get-premium/change-plan/change-plan.component';
import { GetPremiumComponent } from './get-premium/get-premium.component';
import { PremiumComponent } from './premium/premium.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OpenMayestroComponent } from "./open-mayestro.component";
import { OverviewComponent } from "./overview/overview.component";
import { ProfileComponent } from "./profile/profile.component";
import { NotificationComponent } from "./notification/notification.component";
import { SetDevicePasswordComponent } from "./set-device-password/set-device-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: OpenMayestroComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "overview" },
      { path: "overview", component: OverviewComponent },
      { path: "notification", component: NotificationComponent },
      { path: "profile", component: ProfileComponent },
      { path: "set-device-password", component: SetDevicePasswordComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "premium",component: PremiumComponent},
      { path:"getpremium" , component:GetPremiumComponent},
      { path:"changeplan",component:ChangePlanComponent},
      { path: "**", component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenMayestroRoutingModule {}
