import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  isfollowed=true;
  constructor() { }

  ngOnInit() {
  }

  Follow()
  {
    
    if(this.isfollowed==true)
       this.isfollowed=false;
    else this.isfollowed=true;
  }

}
