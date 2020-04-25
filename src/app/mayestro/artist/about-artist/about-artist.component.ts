import { ArtistService } from './../artist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.css']
})
export class AboutArtistComponent implements OnInit {
  artistInfo:any;
  id:any;
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }

  ngOnInit() {

    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return this.artist.getAboutArtist(this.id)
      })
      )
      .subscribe((comp:any)=>{
        this.artistInfo=comp.about;
      });
  }

}
