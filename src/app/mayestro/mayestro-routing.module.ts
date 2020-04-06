import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';


const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [ 
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:HomeComponent},
    {path:'playlist',component:PlaylistComponent},
    {path:'artist',loadChildren: () => import(`./artist/artist.module`).then(m => m.ArtistModule) },
    {path:'profile',component:UserProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
