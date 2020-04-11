import { Component, OnInit, OnChanges } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "src/app/shared/services/auth.service";
import { AccountMayestroService } from "src/app/account-mayestro/account-mayestro.service";
import{Router}from '@angular/router'
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  logIn: boolean;
  constructor(
   
    private loc: Location,
    private auth: AuthService,
    private acc: AccountMayestroService,
    public router: Router
    )
  {
    // console.log(loc.getState());
  }
  
  /** 
   * Check if the user is logged in or not
   */
  loggedIn() {
    return this.auth.isLoggedIn();
  }

  /**
   * assign the logIn boolean to isLoggedIn property of AuthService
   */
  ngOnInit() {
    this.loc.onUrlChange((res, state) => {
      console.log(res);
    });
    this.logIn = this.auth.isLoggedIn();
  }

  /**
   * Testing the location class
   */
  back() {
    this.loc.back();
  }
  ngOnChanges() {}
}
