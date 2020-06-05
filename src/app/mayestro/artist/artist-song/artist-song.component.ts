import { IASong } from './artist-song.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-song',
  templateUrl: './artist-song.component.html',
  styleUrls: ['./artist-song.component.css']
})

/**
 * Artist song component
 */

export class ArtistSongComponent implements OnInit {
  isPlaying=false;
  /**
   * object of type IASong contain song information
   */
  @Input() song: IASong;
  constructor() { }

  ngOnInit() {
  }
  /**
   * check if the song is played
   */
  play()
  {
    console.log("playing");
    if(this.isPlaying==true)
       this.isPlaying=false;
    else this.isPlaying=true;
  } 

}
