import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroForArtistsComponent } from './mayestro-for-artists.component';


const routes: Routes = [{
  path:"",component: MayestroForArtistsComponent, // base template component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroForArtistsRoutingModule { }
