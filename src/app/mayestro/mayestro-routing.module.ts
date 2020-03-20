import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';
import { HomeComponent } from './home/home.component';
import{PlaylistsComponent} from './playlists/playlists.component';
import{AlbumsComponent} from './albums/albums.component';
import{ArtistsComponent} from './artists/artists.component';



const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:HomeComponent},
    {path:'yourlibrary/playlists',component:PlaylistsComponent},
    {path:'yourlibrary/artist',component:ArtistsComponent},
    {path:'yourlibrary/album',component:AlbumsComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
