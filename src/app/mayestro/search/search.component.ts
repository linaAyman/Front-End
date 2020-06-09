import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
import { SearchInputService } from '../header/search-input.service';
import { ICategory } from '../mini-card-viewer/category.interface';
import { PlayerComponent } from '../player/player.component';
import { ICard } from '../card/card.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  top:any;
  browse: any;
  input:any;
  recentsearch:boolean;
  rec={playlists:[],albums:[],artists:[]};
  recent: ICategory;
  cards:Array<ICard>=[]; 
  playlists: ICategory;
  albums: ICategory;
  artists: ICategory;
  constructor(private mystro:MayestroService, private search: SearchInputService) { }

  ngOnInit() {
    let c= new ICategory;
    let arr;
    this.mystro.getBrowse().subscribe(res=>{
      this.browse=res["Browse"];
      let j=res["albums"].length + res["artists"].length;
      
      for(let i=0; i < res["playlists"].length; i++){
        this.rec["playlists"][i]=res["playlists"][i];
      }
      c.cards=res["playlists"];
      for (let k=0; k<res["albums"].length ;k++){
      c.cards.push(res["albums"][k]);
      }
      for (let k=0; k<res["artists"].length ;k++){
        c.cards.push(res["artists"][k]);
        }
     c.name="Recent searches";
     this.recent={
       name:c.name,
       ID: "ay 7aga ",
       description:"",
       cards:c.cards,
       type: "Everytype"
     }

     c.cards.forEach(card=>{
      let desc:string;
      if(card.type=="playlist"){
        desc=card.description;
      }
      else if(card.type=="album"){
        desc='';
        card.artists.forEach(art=>{
          desc+=art.name+','
        })
        desc=desc.slice(0,desc.length-1)
      }
      else if(card.type=="artist"){
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

      // res["albums"].forEach(el => {
      //   this.recent.cards.push(el);
      //   arr.push(el);
      // });
      // arr.push(res["playlists"]);
      
      // this.recent["playlists"]=res["playlists"]; 
      // this.recent["albums"]=res["albums"];
      // this.recent["artists"]=res["artists"];
      // if(res["playlists"]){
      //   res["playlists"].forEach((el) => {
      //     arr[i]=el;
      //     i=i+1;
          // this.recent.cards.push(el);
        });
      
    //   if(res["albums"]){
    //     res["albums"].forEach(el => {
    //       this.recent.cards.push(el);
    //       arr.push(el);
    //       console.log(el);
    //       console.log(arr);
    //     });
    //   }
    //   if(res["artists"]){
    //     res["artists"].forEach(el => {
    //       this.recent.cards.push(el);
    //     });
    //   }
    //   console.log(this.recent.cards)
    // })
    
    // this.mystro.getRecentSearch().subscribe(res=>{
    //   this.recent=res["artists"];
    //   console.log(this.recent);
    // })
    this.search.text.subscribe(resp=>{
      console.log(resp);
      this.input=resp;
      this.mystro.getSearch(resp).subscribe(res=>{
        console.log(res);
        this.top=res["topResult"];
        if(res["playlists"]){
          this.playlists.name="Playlists";
          this.playlists.cards=res["playlists"];
          
      }
        if(res["albums"])
        {this.albums.name="Albums";}
        if(res["artists"]){
        this.artists.name="Artists"}
    })
    // this.search.text.subscribe(res=>{
    
    });
  }

}
