import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/mayestro/player.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
 

export class PlayerComponent implements OnInit {
isliked=false;
isplayed=true;
muted = false;
vol=1;
isActive=true;
player=true;
soundon=false;
repeated=false;
checkindex;
tunes = [
  "/assets/door.mp3",
  "/assets/bayenhabit.mp3",
  "/assets/Yetalemo.mp3"
]
srcnew=0;
src=this.tunes[this.srcnew];
 x :HTMLAudioElement= new Audio(this.src);

  constructor(public service: PlayerService ) { 
    // listen to stream state
  }
 
  like()
  {
    if(this.isliked==true)
    this.isliked=false;
  
    else this.isliked=true;
    
  }  
  ngOnInit() {

  }
  play() {
  
    for(let i = 0; i <= this.tunes.length;i++)
    {
 if(this.x.played)
 {
       this.player=false;
       this.x.play();    
        console.log("ended");
       this.x.autoplay=true;
       this.x.load();
      }   
else {
   this.player=true;
    this.x.pause();
    console.log("paused");
  }
}
}
 pause()
 {
  if(!this.x.paused){
    this.player=true;
       this.x.pause();
       console.log("paused");
    
     } else {
       this.player=false;
        this.x.play();
        console.log("played");
     }
 }
 Next(){
 
 this.checkindex=2;
 if(this.checkindex <= this.tunes.length)
 {
this.x.pause();
this.src=this.tunes[1];
console.log(this.src);
this.play();
 }
}
  setPos(pos){
   this.x.currentTime= pos;

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
 console.log("mute");
    }
  }
  setvolume(volume)
  {
    this.x.volume=volume;
    this.vol=volume;
  }
  repeat(){
    if(this.repeated)
    {
    this.x.loop=false;
    console.log("notrepeated");
    this.repeated=false;
    }
    else {
      this.x.loop=true;
      console.log("repeatedone");
      this.repeated=true;
  
    }
  }
  randomArrayShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  shuffle(){
  this.randomArrayShuffle(this.tunes);
  console.log("Shuffle");
  }
}

