import { IASong } from './artist-song.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-song',
  templateUrl: './artist-song.component.html',
  styleUrls: ['./artist-song.component.css']
})
export class ArtistSongComponent implements OnInit {
  isPlaying=false;
  @Input() song: IASong;
  constructor() { }

  ngOnInit() {
  }

  play()
  {
    console.log("playing");
    if(this.isPlaying==true)
       this.isPlaying=false;
    else this.isPlaying=true;
  } 

}
