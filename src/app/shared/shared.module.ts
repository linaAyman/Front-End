import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HomeArtistCardComponent } from '../mayestro/home-artist-card/home-artist-card.component';


@NgModule({
  declarations: [HomeArtistCardComponent],
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
