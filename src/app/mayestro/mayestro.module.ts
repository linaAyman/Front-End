import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayestroRoutingModule } from './mayestro-routing.module';
import { MayestroComponent } from './mayestro.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PlayerComponent } from './player/player.component';
import { ArtistComponent } from './artist/artist.component';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { MiniCardViewerComponent } from './mini-card-viewer/mini-card-viewer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongComponent } from './song/song.component';
import { ArtistSongComponent } from './artist-song/artist-song.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistModule } from './artist/artist.module';

@NgModule({
  declarations: [MayestroComponent, HeaderComponent, SideBarComponent, PlayerComponent, MiniCardViewerComponent, CardComponent, HomeComponent,ArtistComponent, PlaylistComponent,SongComponent, ArtistSongComponent, ArtistCardComponent],
  imports: [
    MatMenuModule,
    ArtistModule,
    CommonModule,
    MayestroRoutingModule,
    SharedModule
  ]
})
export class MayestroModule { }
