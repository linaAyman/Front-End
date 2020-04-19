import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from './category.interface';
import { ICard } from '../card/card.interface';

@Component({
  selector: "mini-card-viewer",
  templateUrl: "./mini-card-viewer.component.html",
  styleUrls: ["./mini-card-viewer.component.css"]
})
/** Mini-Card-Viewer class */
export class MiniCardViewerComponent implements OnInit {
 
/**Input if type ICategory */
  @Input() category: ICategory;
/** cards array of type ICard */
  cards:Array<ICard>=[];
  constructor() { }

/** 
 *  assign each playlist/album/artist into the cards array.
 * Filter the description of each card based on the card type.
*/
  ngOnInit() {
    this.category.cards.forEach(card=>{
      let desc:string;
      if(this.category.type=="playlists"){
        desc=card.description;
      }
      else if(this.category.type=="albums"){
        desc='';
        card.artists.forEach(art=>{
          desc+=art.name+','
        })
        desc=desc.slice(0,desc.length-1)
      }
      else if(this.category.type=="artists"){
        desc=card.artist_name;
      }
      const crd:ICard={
        name:card.name,
        description:desc,
        imgUrl:card.image,
        ID:card.id,
        type:card.type
      }
      this.cards.push(crd);
    })
  }

}
