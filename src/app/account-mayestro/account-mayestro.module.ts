import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountMayestroRoutingModule } from './account-mayestro-routing.module';
import { AccountMayestroComponent } from './account-mayestro.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AccountMayestroComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AccountMayestroRoutingModule
  ]
})
export class AccountMayestroModule { }
