import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMayestroComponent } from './account-mayestro.component';


const routes: Routes = [
  {path: '',
  component: AccountMayestroComponent, // base template component
  children: [
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountMayestroRoutingModule { }
