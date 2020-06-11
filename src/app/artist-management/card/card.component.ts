import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ChartComponent } from "../chart/chart.component";
import { IArtistCard } from "../artist-card";
import { ArtistManagementService } from "../artist-management.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: IArtistCard;
  @Input() type;
  editeMode = false;
  allSongs = [];
  albumSongs = [];
  newName;
  newDescription;

  constructor(
    private dialog: MatDialog,
    private service: ArtistManagementService
  ) {}

  ngOnInit() {
    this.newName = this.card.name;
    this.newDescription = this.card.description;
  }

  openChart() {
    this.dialog
      .open(ChartComponent, {
        data:
          this.type == "s"
            ? this.service.getArtistSongCharts(this.card._id)
            : this.service.getArtistAlbumCharts(this.card._id),
      })
      .updateSize("1000px", "500px");
  }
  openEdite() {
    if (this.type == "s") {
      let newSong: IArtistCard = {
        ...this.card,
        name: this.newName,
        description: this.newDescription,
      };
      this.service.editeSong(newSong).subscribe((res) => {
        this.card = newSong;
        this.editeMode = false;
      });
    } else {
      let newAlbum: IArtistCard = {
        ...this.card,
        name: this.newName,
        description: this.newDescription,
        songs: this.albumSongs,
      };
      this.service.editeAlbum(newAlbum).subscribe((res) => {
        this.card = newAlbum;
        this.albumSongs = [];
        this.allSongs = [];
        this.editeMode = false;
      });
    }
  }

  openDelete() {
    if (this.type == "s") {
      this.service.deleteSong(this.card._id).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.service.deleteAlbum(this.card._id).subscribe((res) => {
        console.log(res);
      });
    }
  }

  selectSong(songs) {
    this.albumSongs.push(this.allSongs.find((s) => s.id == songs.value));
    this.allSongs.splice(
      this.allSongs.findIndex((s) => s.id == songs.value),
      1
    );
  }

  enableEditeMode() {
    if (this.type == "a") {
      this.albumSongs = this.card.songs.slice();
      this.service.getArtistSongs().subscribe((res: any) => {
        res.songs.forEach((s) => {
          const song = {
            name: s.name,
            id: s._id,
          };
          this.allSongs.push(song);
        });
        this.editeMode = true;
      });
    } else {
      this.editeMode = true;
    }
  }
}
