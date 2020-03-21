import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  isLiked=true;
  isPlaying=true;
  album:any;
  constructor( private http: HttpClient) {}

  ngOnInit() {
  }
 
  getAlbum(){
    this.album=this.http.get('https://jsonplaceholder.typicode.com/albums/id=1/title')
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
