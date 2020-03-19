import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayestroRoutingModule } from './mayestro-routing.module';
import { MayestroComponent } from './mayestro.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MayestroComponent, HeaderComponent, SideBarComponent, PlayerComponent],
  imports: [
    CommonModule,
    MayestroRoutingModule,
    SharedModule
  ]
})
export class MayestroModule { }
