import { Component, OnInit } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { SearchInputService } from "../header/search-input.service";
import { ICategory } from "../mini-card-viewer/category.interface";
import { PlayerComponent } from "../player/player.component";
import { ICard } from "../card/card.interface";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  top: any;
  browse: any;
  input: any;
  recentsearch: boolean;
  rec = { playlists: [], albums: [], artists: [] };
  recent: ICategory;
  cards: Array<ICard> = [];
  playlists = new ICategory();
  albums = new ICategory();
  artists = new ICategory();
  constructor(
    private mystro: MayestroService,
    private search: SearchInputService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.loading.loading.next(true);
    setTimeout(() => {
      let c = new ICategory();
      let arr;
      this.mystro.getBrowse().subscribe(
        (res) => {
          this.browse = res["Browse"];
        },
        (err) => {},
        () => {
          this.loading.loading.next(false);
        }
      );
      this.search.text.subscribe((resp) => {
        this.input = resp;
        console.log(resp);
        this.mystro.getSearch(resp ? resp : "%20").subscribe((res: any) => {
          this.artists = new ICategory();
          this.albums = new ICategory();
          this.playlists = new ICategory();
          this.top = res["topResult"];
          if (res.albums.length > 0) {
            this.albums = {
              ID: "",
              name: "Albumes",
              type: "albume",
              description: "",
              cards: res.albums,
            };
          }
          if (res.playlists.length > 0) {
            this.playlists = {
              ID: "",
              name: "Playlists",
              type: "playlist",
              description: "",
              cards: res.playlists,
            };
          }
          if (res.artists.length > 0) {
            this.artists = {
              ID: "",
              name: "Artists",
              type: "artist",
              description: "",
              cards: res.artists,
            };
          }
        });
      });
    }, 3000);
  }
}
