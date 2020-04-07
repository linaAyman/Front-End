import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  isfollowed=true;
  ispalyed=true;
  constructor() { }

  ngOnInit() {
  }

  Follow()
  {
    if(this.isfollowed==true)
       this.isfollowed=false;
    else this.isfollowed=true;
  }
  PLay(){
    
    if(this.ispalyed==true)
       this.ispalyed=false;
    else this.ispalyed=true;
  }

}
