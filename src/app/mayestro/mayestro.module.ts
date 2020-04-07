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
import { SeeAllComponent } from './see-all/see-all.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TrackComponent } from './track/track.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import{ MatSliderModule,MatFormFieldModule,MatInputModule,MatIconModule} from '@angular/material';



@NgModule({
  declarations: [MayestroComponent, HeaderComponent, SideBarComponent, PlayerComponent, MiniCardViewerComponent, CardComponent, HomeComponent, SeeAllComponent, SearchCardComponent, SearchComponent, PlaylistComponent, TrackComponent,AlbumsComponent,ArtistsComponent,PlaylistsComponent],
  imports: [
    MatMenuModule,
    CommonModule,
    MayestroRoutingModule,
    SharedModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MayestroModule {}
