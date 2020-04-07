import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  songs:any[]
  isPlaying=false;
  id:any;
  type:string;
  constructor(private service: MayestroService, private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.route.params.subscribe(param=>this.id=param["id"],
    param=>this.type=param["type"])
    if(this.type=="album"){
      this.service.getTracks(this.id)
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
        });
    }
    if(this.type=="playlist"){
      this.service.getPlaylistTracks(this.id)
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
        });
    }
    
  }
  play()
  {
    console.log("playing");
    if(this.isPlaying==true)
       this.isPlaying=false;
    else this.isPlaying=true;
  }  
}
