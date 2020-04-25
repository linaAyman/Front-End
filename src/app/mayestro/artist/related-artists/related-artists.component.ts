import { ArtistService } from './../artist.service';
import { ICard } from './../../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.css']
})
export class RelatedArtistsComponent implements OnInit {
 id:any;
 relaredArray:Array<ICard>=[];
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }

  ngOnInit() {
    
    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return this.artist.getRelatedArtists(this.id)
       
      })
      )
      .subscribe((comp:any)=>{
        comp.artists.forEach((element:any) => {
          const card:ICard={
            name: element.name,
            description: "Artist",
            imgUrl:element.image,
            ID: element.id,
            type:element.type
          }
          this.relaredArray.push(card);
        });
      });

  }

}
