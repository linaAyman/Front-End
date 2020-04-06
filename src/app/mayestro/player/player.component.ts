import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "src/app/account-mayestro/account-mayestro.service";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  constructor(private acc: AccountMayestroService) {}

  ngOnInit() {
    this.acc
      .checkEmailExist("ahmed@gmail.com")
      .subscribe(console.log, console.log);
  }
}
