import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayestroRoutingModule } from './mayestro-routing.module';
import { MayestroComponent } from './mayestro.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { MiniCardViewerComponent } from './mini-card-viewer/mini-card-viewer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [MayestroComponent, HeaderComponent, SideBarComponent, PlayerComponent, MiniCardViewerComponent, CardComponent, HomeComponent],
  imports: [
    MatMenuModule,
    CommonModule,
    MayestroRoutingModule,
    SharedModule
  ]
})
export class MayestroModule { }
