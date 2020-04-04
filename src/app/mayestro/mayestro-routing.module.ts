import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MayestroComponent } from "./mayestro.component";
import { HomeComponent } from "./home/home.component";
import { PlayerComponent } from "./player/player.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

const routes: Routes = [
  {
    path: "",
    component: MayestroComponent, // base template component
    children: [
      { path: "", pathMatch: "full", redirectTo: "home" },
      { path: "home", component: HomeComponent },
      { path: "player", component: PlayerComponent },
      { path: "side", component: SideBarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule {}
