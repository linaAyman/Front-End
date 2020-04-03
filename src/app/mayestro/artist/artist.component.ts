import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  isfollowed=true;
  constructor() { 
  }

  ngOnInit() {
    
  }
  
  Follow()
  {
    
    if(this.isfollowed==true)
       this.isfollowed=false;
    else this.isfollowed=true;
  }

}
