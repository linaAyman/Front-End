import { Component, OnInit } from "@angular/core";
import { ArtistManagementService } from "../artist-management.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-create-album",
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.css"],
})
export class CreateAlbumComponent implements OnInit {
  image;
  imgUrl;
  allSongs = [];
  albumSongs = [];
  constructor(private service: ArtistManagementService) {}

  ngOnInit() {
    this.service.getArtistSongs().subscribe((res: any) => {
      res.songs.forEach((s) => {
        const song = {
          name: s.name,
          id: s._id,
        };
        this.allSongs.push(song);
      });
    });
  }
  uploadImg(event) {
    this.image = event[0];
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
  }
  selectSong(songs) {
    this.albumSongs.push(this.allSongs.find((s) => s.id == songs.value));
    this.allSongs.splice(
      this.allSongs.findIndex((s) => s.id == songs.value),
      1
    );
  }
  deleteSonge(id) {
    this.allSongs.push(this.albumSongs.find((s) => s.id == id));
    this.albumSongs.splice(
      this.albumSongs.findIndex((s) => s.id == id),
      1
    );
  }
  submit(f) {
    const album = {
      ...f["value"],
      songs: this.albumSongs,
    };
    this.service
      .postAlbum(album)
      .pipe(
        switchMap((res: any) => {
          return this.service.uploadAlbumImg(this.image, res.album._id);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
