import { Injectable } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators/map";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountMayestroService {
  /**
   *
   * @param http httpClient to send requests
   * @param auth authentication service
   */
  constructor(private http: HttpClient, private auth: AuthService) {}

  /**
   * login method takes a user and send it to server to check if exist or not
   * @param user user body
   */
  login(user) {
    return this.http.post(this.auth.URL + "/user/login", user).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }

  /**
   * signup method to creat new user and send it to server
   * @param user user body
   */
  signup(user) {
    return this.http.post(this.auth.URL + "/user", user).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }

  checkEmailExist(email) {
    return this.http.get(`${this.auth.URL}/user/mailExist/${email}`);
  }

  forgetPassword(email) {
    return this.http.get(`${this.auth.URL}/user/forgetPassword/${email}`);
  }

  resetPassword(pass, hash) {
    return this.http.post(
      `${this.auth.URL}/user/resetPassword?id=${hash}`,
      pass
    );
  }

  changePassword(pass) {
    return this.http.post(`${this.auth.URL}/user/changePassword`, pass, {
      headers: { token: localStorage.getItem("token") }
    });
  }
}
