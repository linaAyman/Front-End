import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './shared/mock-server/mock-server.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MystroService } from './mayestro/mystro.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers:[
    fakeBackendProvider,
    MystroService
  ]
})
export class AppModule { }
