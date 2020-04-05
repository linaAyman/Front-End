import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./services/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { fakeBackendProvider } from "./mock-server/mock-server.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule]
})
export class SharedModule {}
