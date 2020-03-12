import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountMayestroRoutingModule } from './account-mayestro-routing.module';
import { AccountMayestroComponent } from './account-mayestro.component';


@NgModule({
  declarations: [AccountMayestroComponent],
  imports: [
    CommonModule,
    AccountMayestroRoutingModule
  ]
})
export class AccountMayestroModule { }
