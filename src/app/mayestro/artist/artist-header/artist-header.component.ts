import { MaystroService } from './../../maystro.service';
import { Component, OnInit, Input } from '@angular/core';
import { Iartist } from '../artist.interface';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  isfollowed=true;
  ispalyed=true;
  @Input() artist:Iartist
  constructor( private maysrtoService:MaystroService) { }

  ngOnInit() {
    this.maysrtoService.getArtist(123).subscribe((res:any)=>{
      res.forEach((art:any) => {
        
      });
    })

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
