import { Component, OnInit } from '@angular/core';
import { MystroService } from '../mystro.service';
import { IPlaylist } from '../mini-card-viewer/playlists.interface';
import { ICategory } from '../mini-card-viewer/category.interface';
import { ICard } from '../card/card.interface';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categories:Array<ICategory>=[];
  c:ICategory;
  // playlists=Array<IPlaylist>;
  constructor(private mystro:MystroService) {

  }

  ngOnInit() {
    this.mystro.getHome().subscribe((res:any)=>{
      res.Home.forEach((ctg:any)=>{
       let cards,type:any;
        if(ctg['albums']){
          cards=ctg.albums;
          type="albums";
        }
        else if(ctg['playlists']){
          cards=ctg.playlists
          type="playlists"
        }
        else if(ctg['artists']){
          cards=ctg.artists;
          type="artists"
        }
        const category: ICategory={
          name:ctg.name,
          ID: ctg.id,
          type,
          description:ctg.description,
          cards
      }
        this.categories.push(category);
      })
    } );
  }
}
