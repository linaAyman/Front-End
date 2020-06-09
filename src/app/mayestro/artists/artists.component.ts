import { Component, OnInit,Input } from '@angular/core';
import { MayestroService } from '../mayestro.service';
// import { ArtistService } from '../artist/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  isFollowed=true;
  isPalyed=true;
    name:any;
    id:any;
    img:any;
    followers:any;
   type:any;
  constructor( private route:ActivatedRoute,private mayestro:MayestroService) { }

  ngOnInit() {
  
    }
follow()
{
  console.log(this.id);
   //this.data.isFollowed(this.id,"artists").subscribe(res => {
   // console.log(res);
    if(this.isFollowed==true)
    this.isFollowed=false;
 else this.isFollowed=true;
   //})

}

}
