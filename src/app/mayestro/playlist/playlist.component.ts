import { Component, OnInit } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"]
})
export class PlaylistComponent implements OnInit {
  day;
  month;
  year;

  isLiked = true;
  isPlaying = true;
  album: any[];
  title: string;
  date: Date;
  artist: string;
  id: any;
  type: any;
  imageURL: any;
  totalTracks: number;
  tracks: [];
  constructor(
    private MayestroService: MayestroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param["id"];
      this.route.params.subscribe(param => {
        this.type = param["type"];
        if (this.type == "album") {
          this.MayestroService.getAlbum(this.id).subscribe((data: any) => {
            this.title = data.name;
            this.date = data.releaseDate;
            this.artist = data.artists[0].name;
            this.imageURL = data.image;
            this.totalTracks = data.totalTracks;
            this.date = new Date(this.date);
            this.year = this.date.getFullYear();
            this.MayestroService.getTracks(this.id).subscribe((res: any) => {
              this.tracks = res;
            });
          });
        }
        if (this.type == "playlist") {
          this.MayestroService.getPlaylist(this.id).subscribe((data: any) => {
            this.title = data.name;
            this.date = data.releaseDate;
            this.artist = data.owner[0].name;
            this.imageURL = data.image;
            this.totalTracks = data.totalTracks;
            this.date = new Date(this.date);
            this.year = this.date.getFullYear();
            this.MayestroService.getPlaylistTracks(this.id).subscribe(
              (res: any) => {
                this.tracks = res;
              }
            );
          });
        }
      });
    });
  }
/**
 * function to change state of playlist to liked or not
 */
  like() {
    console.log("liked");
    if (this.isLiked == true) this.isLiked = false;
    else this.isLiked = true;
  }
/**
 * function to change state of song to liked or not
 */
  play() {
    console.log("playing");
    if (this.isPlaying == true) this.isPlaying = false;
    else this.isPlaying = true;
  }
}
