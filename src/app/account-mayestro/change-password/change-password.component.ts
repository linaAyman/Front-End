import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  message = "";
  messageStatus = true;

  constructor(private accService: AccountMayestroService) {}

  ngOnInit() {}

  invalid(oldPassword, newPassword, confirmedPassword) {
    return !(
      oldPassword.valid &&
      newPassword.valid &&
      confirmedPassword.valid &&
      newPassword.value === confirmedPassword.value
    );
  }

  submit(oldPassword, newPassword, confirmedPassword) {
    if (this.invalid(oldPassword, newPassword, confirmedPassword)) return;
    const pass = {
      oldPassword,
      newPassword,
      confirmedPassword
    };
    this.accService.changePassword(pass).subscribe(
      res => {
        this.message = "Password updated";
        this.messageStatus = true;
      },
      err => {
        this.message = err.error.message;
        this.messageStatus = false;
      }
    );
  }
}
