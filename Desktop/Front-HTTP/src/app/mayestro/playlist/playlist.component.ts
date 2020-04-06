import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  
  isLiked=true;
  isPlaying=true;
  album:any[];
  title:string;
  date:string;
  artist:string;
  ID:any;
  type:any;
  imageURL:any;
  constructor( private MayestroService: MayestroService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param=>this.ID=param["id"],
    param=>this.type=param["type"])
    this.MayestroService.getAlbum(this.ID)
      .subscribe(
        (data:any) =>{
          this.title=(data.name);
          this.date=(data.releaseDate);
          this.artist=(data.artist[0].name);
          this.imageURL=(data.image.url);
        });
    
      
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
