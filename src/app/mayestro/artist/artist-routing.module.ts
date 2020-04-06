import { AboutArtistComponent } from './about-artist/about-artist.component';

import { RelatedArtistsComponent } from './related-artists/related-artists.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { MayestroComponent } from '../mayestro.component';

const routes: Routes=[
  {path: '',
  component: MayestroComponent, // base template component
  children: [ 
    {path: '',pathMatch:'full',redirectTo:'artist'},
    {path:'artist' ,component:ArtistComponent},
    {path:'related',component:RelatedArtistsComponent},
    {path:'about',component:AboutArtistComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtistRoutingModule { }
