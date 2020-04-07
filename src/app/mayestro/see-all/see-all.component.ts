import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../mayestro.service';
import { ICard } from '../card/card.interface';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {
requestSeeAll:string;
category={
  type:"",
  name:""
}
cards:Array<ICard>=[];
cardsArray:Array<any>;
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.requestSeeAll=p['name'];
      console.log(p['name']);
      console.log(this.requestSeeAll);
    })
    this.mystro.getSeeAll(this.requestSeeAll).subscribe((res:any)=>{
      this.category.name=res.category.name;
      if(res.category.playlists){
        // console.log(res.category.playlists)
        this.cardsArray=res.category.playlists;
        // console.log(this.cardsArray)
        this.category.type="playlists";
      }
     else if(res.category.albums){
      this.cardsArray=res.category.albums;
      this.category.type="albums";
     }
     else if(res.category.artists){
      this.cardsArray=res.category.artists;
      this.category.type="artists";
     }

     console.log(this.cardsArray)
    this.cardsArray.forEach((crd:any)=>{
      console.log(crd)
      let desc:string;
      if(this.category.type=="playlists"){
        desc=crd.description;
      }
      else if(this.category.type=="albums"){
        desc='';
        crd.artists.forEach(art=>{
          desc+=art.name+','
        })
        desc=desc.slice(0,desc.length-1)
      }
      else if(this.category.type=="artists"){
        desc=crd.artist_name;
      }
      const c:ICard={
        name:crd.name,
        description:desc,
        imgUrl:crd.image,
        ID:crd.id,
        type:crd.type
      }
      this.cards.push(c);
    })
    console.log(this.cards)
    });
    
  }

}
