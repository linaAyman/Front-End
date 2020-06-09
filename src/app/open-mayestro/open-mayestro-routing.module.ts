import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OpenMayestroComponent } from "./open-mayestro.component";
import { OverviewComponent } from "./overview/overview.component";
import { ProfileComponent } from "./profile/profile.component";
import { NotificationComponent } from "./notification/notification.component";
import { SetDevicePasswordComponent } from "./set-device-password/set-device-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";
import { HomeComponent } from './home/home.component';
import { LoginHelpComponent } from './login-help/login-help.component';
import { EditAccountHelpComponent } from './edit-account-help/edit-account-help.component';
import { NotificationHelpComponent } from './notification-help/notification-help.component';
import { ResetPasswordHelpComponent } from './reset-password-help/reset-password-help.component';
import { ChangeEmailHelpComponent } from './change-email-help/change-email-help.component';
import { AccountHelpComponent } from './account-help/account-help.component';
import { UsingMayestroComponent } from './using-mayestro/using-mayestro.component';

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
      { path: "home", component: HomeComponent},
      { path: "login-help", component: LoginHelpComponent},
      { path: "edit-profile-help", component: EditAccountHelpComponent},
      { path: "notification-help", component: NotificationHelpComponent},
      { path: "reset-password-help", component: ResetPasswordHelpComponent},
      { path: "change-email-help", component: ChangeEmailHelpComponent},
      { path: "account-help", component: AccountHelpComponent},
      { path: "using-mayestro", component: UsingMayestroComponent},
      { path: "**", component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenMayestroRoutingModule {}
