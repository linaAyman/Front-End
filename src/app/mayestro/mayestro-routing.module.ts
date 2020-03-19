import { ArtistComponent } from './artist/artist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';


const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [ 
    { path: '', redirectTo: 'artist' },
    { path: 'artist', component: ArtistComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
