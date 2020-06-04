import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayestroForArtistsRoutingModule } from './mayestro-for-artists-routing.module';
import { MayestroForArtistsComponent } from './mayestro-for-artists.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [MayestroForArtistsComponent, HeaderComponent, BodyComponent],
  imports: [
    CommonModule,
    MayestroForArtistsRoutingModule
  ]
})
export class MayestroForArtistsModule { }
