import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from "angularx-social-login";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})

/**
 * signin component
 */
export class SigninComponent implements OnInit {
  /**
   * error message that display to user if username or password invalid
   */
  errMsg: string;
  user: SocialUser;
  /**
   * constructor
   *
   * @param accService account service that include login requests
   * @param authService facebook authentication service
   */
  constructor(
    private accService: AccountMayestroService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.authService.signOut();
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  /**
   * submit method of login form and send it to server to check if user exist
   *
   * @param f form values to send to server
   */
  submit(f) {
    this.accService.login(f.value).subscribe(
      res => {
        console.log("object");
      },
      err => {
        console.log(err);
        this.errMsg = "Incorrect username or password.";
      }
    );
  }
}
