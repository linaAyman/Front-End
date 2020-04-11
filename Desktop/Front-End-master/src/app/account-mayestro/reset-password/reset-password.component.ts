import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AccountMayestroService } from "../account-mayestro.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  hash: any;

  constructor(
    private route: ActivatedRoute,
    private accService: AccountMayestroService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((p: any) => {
      this.hash = p.params["hashKey"];
      console.log(this.hash);
    });
  }
  disabled(pass, repeat) {
    return !(pass.valid && repeat.valid && pass.value === repeat.value);
  }
  send(newPassword, confirmedPassword) {
    if (this.disabled(newPassword, confirmedPassword)) return;
    const pass = {
      newPassword: newPassword.value,
      confirmedPassword: confirmedPassword.value
    };
    this.accService.resetPassword(pass, this.hash).subscribe(res => {
      console.log("success reset");
    });
  }
}
