import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenMayestroRoutingModule } from './open-mayestro-routing.module';
import { OpenMayestroComponent } from './open-mayestro.component';


@NgModule({
  declarations: [OpenMayestroComponent],
  imports: [
    CommonModule,
    OpenMayestroRoutingModule
  ]
})
export class OpenMayestroModule { }
