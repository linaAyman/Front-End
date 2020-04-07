import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { fakeBackendProvider } from './mock-server/mock-server.service';
import { PlayerService } from '../mayestro/player.service';




@NgModule({
  declarations: [],
  providers:[AuthService,PlayerService,fakeBackendProvider],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
