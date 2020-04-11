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
  /**
   * to toggle the like button color based on the button click
   */
  like()
  {
    if(this.isliked==true)
    this.isliked=false;
  
    else this.isliked=true;
    
  }  
   /**
   * to play the audio based on the play button click
   */
  play(){
        this.player=false;
        this.x.play();  
        console.log("played"); 
       
  }
   /**
   * to pause the audio based on the pause button click
   */
  pause()
  { 
     this.player=true;
      this.x.pause();
      console.log("paused");
    
  }
 /**
   * to play the next audio based on the next button click 
   * when it comes to the last element in array and next button is clicked it begins again to play the first audio 
   */
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
 /**
   * to play the previous audio based on the previous button click
   * when it comes to the first element in array and previous button is click it begins again to play the last audio 
   */
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
/**
 * to mute the audio
 */
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
/**
 * change time position according to slider 
 * @param pos 
 */
  setPos(pos){
   this.x.currentTime= pos;

  }
 /**
  * set volume range 
  * @param volume
  */
  setvolume(volume)
  {
    this.x.volume=volume;
    this.vol=volume;
  }
  /**
 * to repeat the audio based on repeat button click and toggle the color
 */
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
   /**
 * to randomize the array of urls  
 * @param myarray
 */
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
/**
 *  toggle the shuffle button color 
 */
  shuffle(){
    if(this.isshuffled)
    {
  this.isshuffled=false;
    }
    else this.isshuffled=true;
  }
}

