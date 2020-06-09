import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MayestroService } from "../mayestro.service";
import { ICard } from "../card/card.interface";

@Component({
  selector: "app-see-all",
  templateUrl: "./see-all.component.html",
  styleUrls: ["./see-all.component.css"]
})
/** See All Component class */
export class SeeAllComponent implements OnInit {
  /** properity represents the name of the category */
  requestSeeAll: string;
  /** category object includes the name and type of the current category */
  category = {
    type: "",
    name: ""
  };
  /** Cards array of type ICard */
  cards: Array<ICard> = [];
  /** array of type any */
  cardsArray: Array<any>;
  completed=false;
  color;
  browse;
  constructor(private route: ActivatedRoute, private mystro: MayestroService) {}


  /** 
   *   get the current category name
   *   call getSeeAll method to get the data from the server
   *   filter each category into playlists/albums/artists
   *   push filtered data into the cards array
   */
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.requestSeeAll = p["name"];
      this.browse=p["browse"];
      if(p["color"]){
        this.color=p["color"];
      }
      this.completed=true;
      // console.log(p["name"]);
      
      // console.log(this.color);
      // console.log(this.browse? this.color:'rgb(18,18,18)');
      // console.log(this.requestSeeAll);
      this.mystro.getSeeAll(this.requestSeeAll).subscribe((res: any) => {
        this.category.name = res.category.name;
        if (res.category.playlists) {
          this.cardsArray = res.category.playlists;
          this.category.type = "playlists";
        } 
        else if (res.category.albums) {
          this.cardsArray = res.category.albums;
          this.category.type = "albums";
        } 
        else if (res.category.artists) {
          this.cardsArray = res.category.artists;
          this.category.type = "artists";
        }
        this.cardsArray.forEach((crd: any) => {
          let desc: string;
          if (this.category.type == "playlists") {
            desc = crd.description;
          } 
          else if (this.category.type == "albums") {
            desc = "";
            crd.artists.forEach(art => {
              desc += art.name + ",";
            });
            desc = desc.slice(0, desc.length - 1);
          }
           else if (this.category.type == "artists") {
            desc = crd.artist_name;
          }
          const c: ICard = {
            name: crd.name,
            description: desc,
            imgUrl: crd.image,
            ID: crd.id,
            type: crd.type
          };
          this.cards.push(c);
        });
        console.log(this.cards);
      });
    });
  }
}
