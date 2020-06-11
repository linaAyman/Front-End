import { Component, OnInit, Input } from "@angular/core";
import { ICategory } from "../../mini-card-viewer/category.interface";
import { ICard } from "../../card/card.interface";
import { MayestroService } from "../../mayestro.service";

@Component({
  selector: "recent-search",
  templateUrl: "./recent-search.component.html",
  styleUrls: ["./recent-search.component.css"],
})
export class RecentSearchComponent implements OnInit {
  recent: ICategory;
  constructor(private service: MayestroService) {}

  ngOnInit() {
    this.service.getRecentSearch().subscribe((res: Array<any>) => {
      console.log(res);
      this.recent = {
        cards: res,
        ID: "recent",
        description: "",
        type: "recent",
        name: "Recent Search",
      };
    });
  }
}
