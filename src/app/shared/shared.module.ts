import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HomeArtistCardComponent } from '../mayestro/home-artist-card/home-artist-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [HomeArtistCardComponent, NotFoundComponent],
  providers:[],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[
    HomeArtistCardComponent
  ]
})
export class SharedModule {}
