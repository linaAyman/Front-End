import { Component, OnInit } from "@angular/core";
import { ArtistManagementService } from "../artist-management.service";
import { switchMap } from "rxjs/operators";
import { combineLatest } from "rxjs";

@Component({
  selector: "app-create-song",
  templateUrl: "./create-song.component.html",
  styleUrls: ["./create-song.component.css"],
})
export class CreateSongComponent implements OnInit {
  image;
  song;
  imgUrl;
  constructor(private service: ArtistManagementService) {}

  ngOnInit() {}

  uploadImg(event) {
    this.image = event[0];
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
  }
  uploadSong(event) {
    this.song = event[0];
  }
  submit(f) {
    this.service
      .postSong(f.value)
      .pipe(
        switchMap((res: any) => {
          return combineLatest([
            this.service.uploadSongImg(this.image, res.song._id),
            this.service.uploadSongData(this.song, res.song._id),
          ]);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
