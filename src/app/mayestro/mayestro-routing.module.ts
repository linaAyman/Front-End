import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayestroComponent } from './mayestro.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',
  component: MayestroComponent, // base template component
  children: [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:HomeComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule { }
