import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpenMayestroRoutingModule } from "./open-mayestro-routing.module";
import { OpenMayestroComponent } from "./open-mayestro.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { OverviewComponent } from "./overview/overview.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile/profile.component";
import { SetDevicePasswordComponent } from "./set-device-password/set-device-password.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { TrackComponent } from "./track/track.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { fakeBackendProvider } from "../shared/mock-server/mock-server.service";
import { UserService } from "./user.service";

@NgModule({
  declarations: [
    OpenMayestroComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    NotificationComponent,
    ProfileComponent,
    SetDevicePasswordComponent,
    SidebarComponent,
    ChangePasswordComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    OpenMayestroRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
  // providers:[fakeBackendProvider,UserService]
})
export class OpenMayestroModule {}
