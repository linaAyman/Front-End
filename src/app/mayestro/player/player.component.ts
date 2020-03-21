import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  isliked=false;
  constructor() { }

  ngOnInit() {
  }
  like()
  {
    if(this.isliked==true)
    this.isliked=false;
   
   
    else this.isliked=true;
    
  }
  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
}
