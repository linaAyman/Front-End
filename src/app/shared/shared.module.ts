import { MiniCardViewerComponent } from '../mayestro/mini-card-viewer/mini-card-viewer.component';
import { ArtistHeaderComponent } from '../mayestro/artist/artist-header/artist-header.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { fakeBackendProvider } from './mock-server/mock-server.service';
import { CardComponent } from '../mayestro/card/card.component';
import { HomeArtistCardComponent } from '../mayestro/home-artist-card/home-artist-card.component';




@NgModule({
  declarations: [CardComponent,MiniCardViewerComponent, HomeArtistCardComponent],
  providers:[AuthService,fakeBackendProvider],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[
    CardComponent,
    MiniCardViewerComponent,
    HomeArtistCardComponent
    
  ]
})
export class SharedModule {}
