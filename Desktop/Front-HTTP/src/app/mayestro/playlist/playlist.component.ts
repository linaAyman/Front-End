import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  day
  month
  year
  
  isLiked=true;
  isPlaying=true;
  album:any[];
  title:string;
  date: Date;
  artist:string;
  ID:any;
  Type:any;
  imageURL:any;
  tracks:number;
  constructor( private MayestroService: MayestroService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param=>this.ID=param["id"])
    this.route.params.subscribe(param=>this.Type=param["type"])
   
    if(this.Type=="album"){
      this.MayestroService.getAlbum(this.ID)
      .subscribe(
        (data:any) =>{
          this.title=(data.name);
          this.date=(data.releaseDate);
          this.artist=(data.artist[0].name);
          this.imageURL=(data.image.url);
          this.tracks=(data.totalTracks);
          this.date=new Date(this.date);
          this.year=this.date.getFullYear();
        });
    }
    if(this.Type=="playlist"){
      this.MayestroService.getPlaylist(this.ID)
      .subscribe(
        (data:any) =>{
          this.title=(data.name);
          this.date=(data.releaseDate);
          this.artist=(data.owner[0].name);
          this.imageURL=(data.image.url);
          this.tracks=(data.totalTracks);
          this.date=new Date(this.date);
          this.year=this.date.getFullYear();
        });
    }
     
  }
 
  like()
  {
    console.log("liked");
    if(this.isLiked==true)
       this.isLiked=false;
    else this.isLiked=true;
  }

  play()
  {
    console.log("playing");
    if(this.isPlaying==true)
       this.isPlaying=false;
    else this.isPlaying=true;
  }  
}
