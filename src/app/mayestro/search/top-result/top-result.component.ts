import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchInputService } from "../../header/search-input.service";
import { MayestroService } from "../../mayestro.service";

@Component({
  selector: "top-result",
  templateUrl: "./top-result.component.html",
  styleUrls: ["./top-result.component.css"],
})
export class TopResultComponent implements OnInit {
  @Input() topResult;
  result = {
    name: "",
    descpription: "",
    type: "",
    id: "",
    imgUrl: "",
  };
  constructor(
    private mystro: MayestroService,
    private auth: AuthService,
    private http: HttpClientModule,
    private search: SearchInputService
  ) {}

  ngOnInit() {
    let desc: any;
    console.log(this.topResult.type);
    if (this.topResult) {
      this.result.imgUrl = this.topResult.image;
      if (this.topResult.type == "playlist") {
        this.result.descpription = this.topResult.owner;
        this.result.type = "playlist";
        this.result.name = this.topResult.name;
      } else if (this.topResult.type == "album") {
        this.topResult.artists.forEach((el) => {
          desc = "";
          desc += el.name + ",";
        });
        desc = desc.slice(0, desc.length - 1);
        this.result.descpription = desc;
        this.result.type = "album";
        this.result.name = this.topResult.name;
      } else if (this.topResult.type == "song") {
        this.topResult.artists.forEach((el) => {
          desc = "";
          desc += el.name + ",";
        });
        desc = desc.slice(0, desc.length - 1);
        this.result.descpription = desc;
        this.result.type = "song";
        this.result.name = this.topResult.name;
      } else if (this.topResult.type == "artist") {
        this.result.descpription = null;
        this.result.type = "artist";
        this.result.name = this.topResult.name;
      } else if (this.topResult.type == "user") {
        this.result.descpription = null;
        this.result.type = "people";
        this.result.name = this.topResult.name;
      }
    }
  }
}
