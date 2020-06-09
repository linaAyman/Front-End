import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/mayestro/player.service";
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';
import { LikeAndFollowService } from '../like-and-follow.service';
import { ActivatedRoute } from "@angular/router";
import { MayestroService } from '../mayestro.service';
import { combineAll } from 'rxjs/operators';
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  muted = false;
  vol = 1;
  isActive = true;
  soundon = false;
  repeated = false;
  isliked = true;
  isrepeated = true;
  isshuffled = true;
  first = true;
  value: any;
  end: any;
  LikedSongs: any[];
  TempLikeSong: any[];

  constructor(
    public playerservice: PlayerService, private liked: LikeAndFollowService, private router: ActivatedRoute, private service: MayestroService
  ) {
  }

  ngOnInit() {


    this.liked.GetLikedSongs()
      .subscribe(
        (data: any[]) => {
          this.LikedSongs = data;
          this.playerservice.TempSongs = [...this.LikedSongs];
        }
      );
    this.value = this.playerservice.value;
    this.playerservice.x.addEventListener("play", () => {
      //this.end = this.playerservice.songs[this.playerservice.checkindex].duration;

    })
    this.playerservice.x.addEventListener("playing", () => {
      this.value += this.playerservice.value + 0.05;

    }
    )
    // this.playerservice.x.addEventListener("seeking", () => {
    // if( this.end==this.playerservice.x.currentTime)
    // {
    //   console.log(this.playerservice.x.currentTime);
    //   console.log(this.end);
    //   this.value=0; 
    //   this.checkindex++;
    //   this.playerservice.x.src = this.playerservice.songs[this.checkindex].url;
    //   this.playerservice.name=this.playerservice.songs[this.checkindex].name;
    //   this.playerservice.x.play();
    // }
    // if (this.playerservice.songs.length == 1) {
    //   this.playerservice.player = true;
    // }
    // });
    this.playerservice.x.addEventListener("ended", () => {
      this.value = 0;
      // this.end=this.playerservice.songs[this.checkindex].duration;
      if (this.playerservice.array == 1) {
        this.playerservice.player = true;
      }
      if (this.isshuffled == false) {
        this.playerservice.random(this.playerservice.songs);
        console.log("Shuffle");
        console.log(this.playerservice.songs);
      }
      this.next();
      // this.playerservice.x.src=this.
      //this.end=this.playerservice.songs[this.checkindex].duration;
    });

  }
  /**
   * to toggle the like button color based on the button click
   */
  like() {


    if (this.isliked == true) {
      this.isliked = false;
      this.likesong();
    }
    else {
      this.isliked = true;
      this.delete();
    }

  }
  /**
   * to play the audio based on the play button click
   */
  play() {
    this.playerservice.random(this.playerservice.songs);
    console.log("Shuffle");
    if (this.first) {
      if (this.playerservice.x.src == null) {
        this.playerservice.playing = false;
        console.log("No track");
      }

      this.first = false;
    }
    else
      // this.playerservice.playing=true;
      this.playerservice.play();
  }
  /**
   * to pause the audio based on the pause button click
   */
  pause() {
    if (this.playerservice.x.src == " ") {
      this.playerservice.playing = false;
      console.log("No track");
    }
    else
      this.playerservice.pause();
  }
  /**
   * to play the next audio based on the next button click
   * when it comes to the last element in array and next button is clicked it begins again to play the first audio
   */
  next() {
    if (this.service.playlistbuttonpressed = true) {
      this.playerservice.nextsong = true;
    }
    else {
      this.playerservice.tracksong = true;
    }
    // if (this.service.playlistbuttonpressed == false) {
    //   console.log("No next track");
    // }
    // else {
      this.playerservice.checkindex = this.playerservice.checkindex + 1;
      if (this.playerservice.checkindex < this.playerservice.array && this.playerservice.array != 1) {
        this.playerservice.x.pause();
        this.value = 0;
        this.playerservice.x.src = this.playerservice.songs[this.playerservice.checkindex].url;
        this.playerservice.artist = this.playerservice.songs[this.playerservice.checkindex].artists[0].name;
        this.playerservice.name = this.playerservice.songs[this.playerservice.checkindex].name;
        this.playerservice.player = false;
        this.end = this.playerservice.songs[this.playerservice.checkindex].duration;
        this.playerservice.x.play();
      }
      else {
        this.playerservice.checkindex = 0;
        this.value = 0;
        this.playerservice.x.src = this.playerservice.songs[this.playerservice.checkindex].url;
        this.playerservice.artist = this.playerservice.songs[this.playerservice.checkindex].artists[0].name;
        this.playerservice.name = this.playerservice.songs[this.playerservice.checkindex].name;
        this.playerservice.player = false;
        this.end = this.playerservice.songs[this.playerservice.checkindex].duration;
        this.playerservice.x.play();
      }
    // }
  }
  /**
   * to play the previous audio based on the previous button click
   * when it comes to the first element in array and previous button is click it begins again to play the last audio
   */
  previous() {
    if (this.service.playlistbuttonpressed = true) {
      this.playerservice.nextsong = true;
    }
    else {
      this.playerservice.tracksong = true;
    }
    // if (this.playerservice.id == null) {
    //   console.log("No previous track");
    // }
      if (this.playerservice.nextsong == true && this.service.playlistbuttonpressed == true) {
      this.playerservice.checkindex = this.playerservice.checkindex - 1;
      if (this.playerservice.checkindex < this.playerservice.array && this.playerservice.checkindex >= 0) {
        this.value = 0;
        this.playerservice.x.src = this.playerservice.songs[this.playerservice.checkindex].url;
        this.playerservice.artist = this.playerservice.songs[this.playerservice.checkindex].artists[0].name;
        this.playerservice.name = this.playerservice.songs[this.playerservice.checkindex].name;
        this.playerservice.player = false;
        this.end = this.playerservice.songs[this.playerservice.checkindex].duration;
        this.playerservice.x.play();
      } else {
        this.value = 0;
        this.playerservice.checkindex = this.playerservice.array - 1;
        this.playerservice.x.src = this.playerservice.songs[this.playerservice.checkindex].url;
        this.playerservice.artist = this.playerservice.songs[this.playerservice.checkindex].artists[0].name;
        this.playerservice.name = this.playerservice.songs[this.playerservice.checkindex].name;
        this.playerservice.player = false;
        this.end = this.playerservice.songs[this.playerservice.checkindex].duration;
        this.playerservice.x.play();
      }
     }
  }
  /**
   * to mute the audio
  */
  mute() {
    this.playerservice.mute();
    this.soundon = this.playerservice.soundon;
  }
  /**
   * change time position according to slider
   * @param pos
   */
  setPos(pos) {
    this.playerservice.x.currentTime = pos * 65;

  }
  /**
   * set volume range
   * @param volume
   */
  setvolume(volume) {
    if (volume >= 0 && volume <= 1) {
      this.playerservice.x.volume = volume;
    }
    else this.playerservice.x.volume = 0;
    if (volume == 0) {
      this.soundon = true;
    }
    else this.soundon = false;
  }
  /**
   * to repeat the audio based on repeat button click and toggle the color
   */
  repeat() {
    if (this.repeated) {
      this.isrepeated = true;
      this.playerservice.x.loop = false;
      this.repeated = false;
    } else {
      this.isrepeated = false;
      this.playerservice.x.loop = true;
      this.repeated = true;
    }
  }
  /**
   *  toggle the shuffle button color
   */
  shuffle() {
    if (this.isshuffled) {
      this.value = 0;
      this.isshuffled = false;
    } else this.isshuffled = true;
    this.value = 0;
  }
  /**
   * add song to LikedSongs
   */
  likesong() {
    this.liked.LikeSong(this.playerservice.songs[this.playerservice.checkindex].id).subscribe(
      response => {
        this.LikedSongs[0].tracks.push(this.playerservice.songs[this.playerservice.checkindex]);

      }

    );
  }
  /**
   *  get index of song
   */
  Sendsong() {
    this.playerservice.index = this.playerservice.checkindex;
  }
  /**
   * Unlike Songs
   */
  delete() {
    this.playerservice.index = this.LikedSongs.indexOf(this.playerservice.songs[this.playerservice.checkindex]);
    this.liked.UnLikeSong(this.playerservice.ID).subscribe(
      response => {
        this.LikedSongs[0].tracks.splice(this.playerservice.index, 1);
      })
  }
}