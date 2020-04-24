import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.css']
})
export class AboutArtistComponent implements OnInit {
  artistinfo:any;
  id:any;
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param["id"];
    console.log( param["id"]);
    console.log( this.id);
    });
    
    this.mystro.getAboutArtist(this.id).subscribe((res:any)=>{
      console.log("response")
      console.log(res);
      this.artistinfo=res.about;
    })
  }

}
