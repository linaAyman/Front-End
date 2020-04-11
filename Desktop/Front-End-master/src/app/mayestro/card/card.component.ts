import { Component, OnInit, Input } from "@angular/core";
import { ICard } from "./card.interface";
import { IPlaylist } from "../mini-card-viewer/playlists.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() card: ICard;

  constructor(private router: Router) {}

  ngOnInit() {
    // console.log(this.card);
  }
  navigate() {
    this.router.navigate([["/playlist", this.card.ID, this.card.type]]);
  }
}
