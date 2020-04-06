import { MiniCardViewerComponent } from './components/mini-card-viewer/mini-card-viewer.component';
import { ArtistHeaderComponent } from './components/artist-header/artist-header.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { fakeBackendProvider } from './mock-server/mock-server.service';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [CardComponent,ArtistHeaderComponent,MiniCardViewerComponent],
  providers:[AuthService,fakeBackendProvider],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[
    CardComponent,
    ArtistHeaderComponent,
    MiniCardViewerComponent
    
  ]
})
export class SharedModule { }
