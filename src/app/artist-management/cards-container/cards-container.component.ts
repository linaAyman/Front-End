import { Component, OnInit, Input } from "@angular/core";
import { IArtistCard } from "../artist-card";
@Component({
  selector: "app-cards-container",
  templateUrl: "./cards-container.component.html",
  styleUrls: ["./cards-container.component.css"],
})
export class CardsContainerComponent implements OnInit {
  @Input() cards: Array<IArtistCard>;
  @Input() title;
  @Input() type;
  end = 3;
  constructor() {}

  ngOnInit() {}

  showMore() {
    this.end += 3;
  }
}
