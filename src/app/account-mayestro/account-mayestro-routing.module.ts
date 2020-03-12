import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMayestroComponent } from './account-mayestro.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:AccountMayestroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountMayestroRoutingModule { }
