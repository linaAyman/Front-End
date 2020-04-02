import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  myLabel:String;
  constructor() { 
  }

  ngOnInit() {
    this.myLabel="Follow";
  }
  Follow() {
    this.myLabel = 'unfollow';
  }

}
