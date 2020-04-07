import { Component, OnInit } from "@angular/core";
import { AssetsService } from "src/app/shared/assets/assets.service";
import { AccountMayestroService } from "../account-mayestro.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})

/**
 * signup component
 */
export class SignupComponent implements OnInit {
  /**
   * Day in number
   */
  Day;
  /**
   * Month in number
   */
  Month;
  /**
   * Year in number
   */
  Year;
  /**
   * array of MonthNames that used in Month Dropdown list
   */
  monthNames: Array<string>;
  /**
   *mail error message if its used befor
   */
  mailExist = "";

  /**
   *
   * @param assets assets service that include helper method to generat array of MonthNames
   * @param accService account service that send requests to server
   */
  constructor(
    private assets: AssetsService,
    private accService: AccountMayestroService
  ) {}

  /**
   * generate monthNames array
   */
  ngOnInit() {
    this.monthNames = this.assets.Monthes();
  }

  checkEmail(email) {
    this.accService.checkEmailExist(email).subscribe(
      res => (this.mailExist = ""),
      err => (this.mailExist = "We're sorry, that email is taken.")
    );
  }

  /**
   * submit method of signup form and send it to server to add user to database
   * @param f form values to send to server
   */
  submit(f) {
    f.value["birthDate"] = new Date(this.Year, this.Month, this.Day);
    this.accService.signup(f.value).subscribe(
      res => {},
      err => {}
    );
  }
}
