import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMayestroComponent } from './account-mayestro.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '',
  component: AccountMayestroComponent, // base template component
  children: [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: 'login' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountMayestroRoutingModule { }
