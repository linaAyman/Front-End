import { Component, OnInit } from "@angular/core";
import { ArtistManagementService } from "../artist-management.service";
import { combineLatest } from "rxjs";
import { LoadingService } from "src/app/shared/services/loading.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  songs;
  albums;
  artist;
  constructor(
    private service: ArtistManagementService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.loading.loading.next(true);
    setTimeout(() => {
      combineLatest([
        this.service.getArtistSongs(),
        this.service.getArtistAlbums(),
        this.service.getArtist(),
      ]).subscribe(
        (res: any) => {
          this.songs = res[0].songs;
          this.albums = res[1].albums;
          this.artist = res[2].artist;
        },
        (err) => {},
        () => {
          this.loading.loading.next(false);
        }
      );
    }, 1000);
  }
}
