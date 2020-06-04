import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"mayestro" },
  {path:'mayestro',loadChildren: () => import(`./mayestro/mayestro.module`).then(m => m.MayestroModule) },
  {path:'account.mayestro',loadChildren: () => import(`./account-mayestro/account-mayestro.module`).then(m => m.AccountMayestroModule) },
  {path:'open.mayestro',loadChildren: () => import(`./open-mayestro/open-mayestro.module`).then(m => m.OpenMayestroModule) },
  {path:'mayestro.forartists',loadChildren: () => import(`./mayestro-for-artists/mayestro-for-artists.module`).then(m => m.MayestroForArtistsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
