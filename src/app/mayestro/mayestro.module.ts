import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayestroRoutingModule } from './mayestro-routing.module';
import { MayestroComponent } from './mayestro.component';


@NgModule({
  declarations: [MayestroComponent],
  imports: [
    CommonModule,
    MayestroRoutingModule
  ]
})
export class MayestroModule { }
