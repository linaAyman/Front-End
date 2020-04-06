import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { RelatedArtistsComponent } from './related-artists/related-artists.component';
import { AboutArtistComponent } from './about-artist/about-artist.component';



@NgModule({
  declarations: [RelatedArtistsComponent, AboutArtistComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule
  ]

})
export class ArtistModule { }
