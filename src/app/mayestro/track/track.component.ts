import { Component, OnInit, ɵɵqueryRefresh } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material';
import { PlayerService } from '../player.service';


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
  queueindex=0;
  firstqueue=true;
  length:any;
  constructor(
    private service: MayestroService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private playerservice: PlayerService
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
           this.length=data.length;
         });
     }
     if(this.type=="myplaylist"){
       this.service.getMytracks(this.id)
       .subscribe(
          (data:any[])=>{
            this.songs=data;
            this.length=data.length;
            console.log(this.songs);
          }
       );
     }
     if(this.type=="playlist"){
      
       this.service.getPlaylistTracks(this.id)
       .subscribe(
         (data:any[]) =>{
           this.songs=data;
          this.length=data.length;
         });
     }
    });
  });
  }
  play(song) {///to be colled in (click) of li
    // this.playerservice.tracksong=true;
    console.log("playing");
    if (this.isPlaying == true) 
    {
      this.isPlaying = false;
      this.index=this.songs.indexOf(song);
      this.service.mayestrourl=this.playerservice.x.src=this.songs[this.index].url;
      this.service.mayestroname=this.playerservice.name=this.songs[this.index].name;
      this.service.mayestroartist=this.playerservice.artist=this.songs[this.index].artists[0].name;
      this.playerservice.imageURL=this.service.playlistimage;
      this.playerservice.checkindex=this.index;
      this.playerservice.array=this.length;
      this.playerservice.songs=this.service.songs;
      console.log( this.index);
      this.playerservice.play();
    }
    else this.isPlaying = true;

  }
  addtoqueue()
  {
    if(this.firstqueue)
    {
   this.playerservice.TempSongs.splice(0,this.playerservice.array);
   this.firstqueue=false;
    }
   this.playerservice.queueexist=true;
   console.log(this.songs[this.index]);
   this.playerservice.TempSongs.splice(this.queueindex,0,this.songs[this.index]);
   this.playerservice.urls=this.songs[this.index].url;
   console.log(this.playerservice.urls);
   this.queueindex++;
  }
}
