import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from './category.interface';
import { ICard } from '../card/card.interface';

@Component({
  selector: 'mini-card-viewer',
  templateUrl: './mini-card-viewer.component.html',
  styleUrls: ['./mini-card-viewer.component.css']
})
export class MiniCardViewerComponent implements OnInit {

  @Input() category: ICategory;
  cards:Array<ICard>=[];
  constructor() { }


  ngOnInit() {
    this.category.cards.forEach((card)=>{
      let desc:string;
      if(this.category.type=="playlists"){
        desc=card.description;
      }
      else if(this.category.type=="albums"){
        desc=card.artist_name;
      }
      else if(this.category.type=="artists"){
        desc=card.artist_name;
      }
      const crd:ICard={
        name:card.name,
        description:desc,
        imgUrl:card.imgUrl,
        ID:card.ID,
        type:card.type
      }
      this.cards.push(crd);
    })
  }

}
