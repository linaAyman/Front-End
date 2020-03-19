import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenMayestroRoutingModule } from './open-mayestro-routing.module';
import { OpenMayestroComponent } from './open-mayestro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OpenMayestroComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    OpenMayestroRoutingModule,
    SharedModule
  ]
})
export class OpenMayestroModule { }
