import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/mayestro/player.service";
import { ActivatedRoute } from "@angular/router";
import { MayestroService } from "src/app/mayestro/mayestro.service";
import { LikeAndFollowService } from "../like-and-follow.service";
@Component({
  selector: "app-likedsongs",
  templateUrl: "./likedsongs.component.html",
  styleUrls: ["./likedsongs.component.css"],
})
export class LikedsongsComponent implements OnInit {
  songs: any[];
  isPlaying = false;
  id: any;
  type: string;
  constructor(
    private playerservice: PlayerService,
    private like: LikeAndFollowService,
    private route: ActivatedRoute,
    private service: MayestroService
  ) { }

  ngOnInit() {
    this.like.UnLikeSong("this.playerservice.ID");
    this.like.GetLikedSongs().subscribe((data: any[]) => {
      this.songs = data[0].tracks;
      console.log(this.songs);
    });
  }
}
