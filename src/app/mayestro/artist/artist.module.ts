import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { RelatedArtistsComponent } from './related-artists/related-artists.component';



@NgModule({
  declarations: [RelatedArtistsComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
