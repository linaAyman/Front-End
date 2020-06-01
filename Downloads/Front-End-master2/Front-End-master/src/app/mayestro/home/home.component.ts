import { Component, OnInit } from '@angular/core';
import { ICategory } from '../mini-card-viewer/category.interface';
import { MayestroService } from '../mayestro.service';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
/** Hoe Component class */
export class HomeComponent implements OnInit {
  /** categories array of type ICategory interface */
  categories:Array<ICategory>=[];
  /** category of tyoe ICategory */
  c:ICategory;
  
  constructor(private mystro:MayestroService) {

  }

/**
 * get categories from the server,then pushing each category in categories array based on their type
 */
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
