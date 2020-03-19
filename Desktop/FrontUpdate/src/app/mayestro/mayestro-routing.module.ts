import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';
import { PlaylistComponent } from './playlist/playlist.component';


const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [
    {path:'playlist',component:PlaylistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
