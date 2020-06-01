import { Component, OnInit, ɵɵqueryRefresh } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.css"]
})
export class TrackComponent implements OnInit {
  songs: any[];
  isPlaying = false;
  id: any;
  ID:any; /////id of track clicked on to be added or removed
  type: string;
  menuData:any;
  MyPlaylist:any[];
  index:any;
  Pname:string;///playlist name
  Pindex:any;

  constructor(
    private service: MayestroService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}
   /**
    * gets id of chosen playlist
    * @param item chosen playlist
    */
  SendID(item){
    this.Pindex=this.MyPlaylist.indexOf(item);
    this.Pname= this.MyPlaylist[this.Pindex].name;//playlist name
    console.log(this.Pname);
  }

  Sendsong(song){
    console.log("gowa")
    this.index=this.songs.indexOf(song);
    this.ID= this.songs[this.index].id;//song id
  }
  add(){
    
    let snack= this.snackbar.open("added to "+this.Pname,'',{duration:500})
    this.service.putTrack(this.ID).subscribe(
      response =>{
        this.MyPlaylist[this.Pindex].tracks.push(this.songs[this.index]);
      }
    );
  }

  remove(){
    this.service.deleteTrack(this.ID).subscribe(
      response =>{
        this.songs.splice(this.index,1);
      }
      
    );
  }
  ngOnInit() {
    
    this.service.deleteTrack("this.ID");

    this.service.getMyPlaylists()
      .subscribe(
        (data:any[]) =>{
          this.MyPlaylist=data;
        }
      );
    
    this.route.params.subscribe(param => {
      this.id = param["id"];
      this.route.params.subscribe(param => {
        this.type = param["type"];
     if(this.type=="album"){
       this.service.getTracks(this.id)
       .subscribe(
         (data:any[]) =>{
           this.songs=data;
         });
     }
     if(this.type=="myplaylist"){
       this.service.getMytracks(this.id)
       .subscribe(
          (data:any[])=>{
            this.songs=data;
          }
       );
     }
     if(this.type=="playlist"){
      
       this.service.getPlaylistTracks(this.id)
       .subscribe(
         (data:any[]) =>{
           this.songs=data;
          
         });
     }
    });
  });
  }
  play(song) {///to be colled in (click) of li
    console.log("playing");
    if (this.isPlaying == true) this.isPlaying = false;
    else this.isPlaying = true;
  }
}
