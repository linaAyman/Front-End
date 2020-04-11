import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/mayestro/player.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
 

export class PlayerComponent implements OnInit {
isliked=true;
isplayed=true;
muted = false;
vol=1;
isActive=true;
player=true;
soundon=false;
repeated=false;
checkindex=0;
isrepeated=true;
isshuffled=true;
shuffling=false;
urls:string;
name:string;
artist:string;
array;
imageURL:any;
ID:any;
srcnew=0;
 x :HTMLAudioElement= new Audio();
  constructor(public playerservice: PlayerService ,private route: ActivatedRoute) { 

  }
 
  ngOnInit() {
    
    this.playerservice.getTracks(this.ID).subscribe( (data:any) =>{
      this.urls=data.url;
        console.log(data.length);
        this.x.src=this.urls;
            })
    this.x.addEventListener('ended', ()=> {
 
      this.srcnew++;
      this.x.src=this.urls[this.srcnew];
      this.play();
      if(this.urls.length==1)
      {
    this.player=true;
      }
      if(this.isshuffled==false)
      {
        this.random(this.urls);
        console.log("Shuffle");
        console.log(this.urls);
        this.play();
      }
    })
    this.x.addEventListener('load',()=>
    { 
      console.log("Loading");
    })
  }
  like()
  {
    if(this.isliked==true)
    this.isliked=false;
  
    else this.isliked=true;
    
  }  
  play(){
        this.player=false;
        this.x.play();  
        console.log("played"); 
       
  }
  pause()
  { 
     this.player=true;
      this.x.pause();
      console.log("paused");
    
  }

 next(){
 
  this.checkindex=this.checkindex+1;
  console.log(this.checkindex);
  if((this.checkindex < this.array) && this.array!=1)
   {
    this.x.pause();
    this.srcnew=this.checkindex;
    this.x.src=this.urls;
    this.x.load();
    this.x.play();
 }
 else {
    this.checkindex=0;
    this.srcnew=this.checkindex;
    this.x.src=this.urls[this.srcnew];
    this.play();
      }
}
previous(){
  this.checkindex=this.checkindex-1;
  if((this.checkindex < this.array) && this.checkindex >= 0 )
  {
 this.x.src=this.urls[this.checkindex];
 this.play();
console.log(this.checkindex);
  }
  else {
 this.checkindex=this.array-1;
 console.log(this.checkindex)
; this.x.src=this.urls[this.checkindex];
 this.play();
  }
}
mute(){
  if(this.muted){
this.soundon=false;
    this.x.volume=this.vol;
    this.muted=false;

  } 
  else {
    this.soundon=true;
    this.x.volume = 0;
    this.muted=true;
  }
}
  setPos(pos){
   this.x.currentTime= pos;

  }
 
  setvolume(volume)
  {
    this.x.volume=volume;
    this.vol=volume;
  }
  repeat(){
    if(this.repeated)
    {
      this.isrepeated=true;
    this.x.loop=false;
    console.log("notrepeated");
    this.repeated=false;
    }
    else {
      this.isrepeated=false;
      this.x.loop=true;
      console.log("repeatedone");
      this.repeated=true;
  
    }
  }
   random(myarray) {
    let ctr = myarray.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = myarray[ctr];
        myarray[ctr] = myarray[index];
        myarray[index] = temp;
    }
    return myarray;
}
  shuffle(){
    if(this.isshuffled)
    {
  this.isshuffled=false;
    }
    else this.isshuffled=true;
  }
}

