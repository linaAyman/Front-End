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
   * confirmEmail value
   */
  ConfirmEmail = "";

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
   * disabled signup button if validations == false
   * @param f form value
   */

  invalid(f) {
    return !(
      f.valid &&
      !this.mailExist &&
      this.Day <= 31 &&
      this.Day >= 1 &&
      this.Year >= 1950 &&
      this.Year <= 2020 &&
      this.Month &&
      f.value.email === this.ConfirmEmail
    );
  }

  /**
   * submit method of signup form and send it to server to add user to database
   * @param f form values to send to server
   */
  submit(f) {
    if (this.invalid(f)) return;
    f.value["birthDate"] = new Date(this.Year, this.Month, this.Day);
    console.log(f.value);
    this.accService.signup(f.value).subscribe(
      res => {},
      err => {
        console.log(err);
      }
    );
  }
}
