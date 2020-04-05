import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators/map";
import { JwtHelper, tokenNotExpired } from "angular2-jwt/angular2-jwt";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  /**
   * server URL
   */
  URL = "";

  constructor() {}

  isLoggedIn() {
    return tokenNotExpired("token");
  }
  get currentUser() {
    const jwt = new JwtHelper();
    const user = jwt.decodeToken(localStorage.getItem("token"));
    return user;
  }
}
