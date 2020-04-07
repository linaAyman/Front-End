import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"]
})
export class ForgetPasswordComponent implements OnInit {
  Email: string;
  reset = false;
  errMessage = false;
  hash = "";

  constructor(private accService: AccountMayestroService) {}

  ngOnInit() {}

  send(email) {
    if (email.invalid) return;
    this.accService.forgetPassword(email.value).subscribe(
      (res: any) => {
        this.reset = true;
        this.hash = res.hash ? res.hash : "";
      },
      err => {
        this.errMessage = true;
      }
    );
  }
}
