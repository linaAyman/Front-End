import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenMayestroComponent } from './open-mayestro.component';


const routes: Routes = [
  {path:'',
  component:OpenMayestroComponent,
  children:[
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenMayestroRoutingModule { }
