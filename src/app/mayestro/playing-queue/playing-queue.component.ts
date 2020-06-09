import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-playing-queue',
  templateUrl: './playing-queue.component.html',
  styleUrls: ['./playing-queue.component.css']
})
export class PlayingQueueComponent implements OnInit {
  name: any;
  artist: any;
  duration: any;
  id: any;
  songs: any[];
  type: string;
  checkindex;
  queuesongs: any[];
  constructor(public playerservice: PlayerService, private service: MayestroService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.playerservice.queue == true) {
      this.name = this.playerservice.songs[this.playerservice.checkindex].name;
      this.artist = this.playerservice.artist;
      this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
      this.checkindex = this.playerservice.checkindex;
      this.songs = [...this.playerservice.songs];
      this.songs.splice(this.checkindex, 1);
      console.log(this.songs);
      console.log(this.playerservice.songs);
      this.playerservice.x.addEventListener("ended", () => {
        this.checkindex++;
        if (this.checkindex <= this.playerservice.array - 1 && this.playerservice.queueexist == false) {
          console.log(this.checkindex);
          this.name = this.playerservice.songs[this.playerservice.checkindex].name;
          this.artist = this.playerservice.artist;
          this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
          this.songs = [...this.playerservice.songs];
          this.songs.splice(this.checkindex, 1);
          console.log(this.checkindex);

        } else if (this.playerservice.queueexist == true) {
          this.playerservice.x.pause();
          console.log(this.playerservice.urls);
          this.playerservice.x.src = this.playerservice.urls;
          this.playerservice.name = this.name = this.playerservice.TempSongs[0].name;
          this.playerservice.artist = this.artist = this.playerservice.TempSongs[0].artists[0].name;
          //this.queuesongs.splice(0,0,this.queuesongs);
        }
        else {
          this.checkindex = 0;
          this.name = this.playerservice.songs[this.playerservice.checkindex].name;
          this.artist = this.playerservice.artist;
          this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
          this.songs = [...this.playerservice.songs];
          this.songs.splice(this.checkindex, 1);
          console.log(this.checkindex);
        }
      })
      if (this.playerservice.queueexist == true) {
        this.queuesongs = [...this.playerservice.TempSongs];
      }
    }
  }
}