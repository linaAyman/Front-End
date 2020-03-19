import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountMayestroRoutingModule } from './account-mayestro-routing.module';
import { AccountMayestroComponent } from './account-mayestro.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { fakeBackendProvider } from '../shared/mock-server/mock-server.service';




@NgModule({
  declarations: [AccountMayestroComponent, SigninComponent, SignupComponent, HeaderComponent],
  imports: [
    CommonModule,
    AccountMayestroRoutingModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AccountMayestroModule { }
