import { ArtistComponent } from './artist/artist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [ 
    {path:'',pathMatch:'full',redirectTo:'home'},
    { path: 'artist', component: ArtistComponent },
    {path:'home',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
