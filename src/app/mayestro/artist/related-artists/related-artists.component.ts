import { ICard } from './../../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';

@Component({
  selector: 'app-related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.css']
})
export class RelatedArtistsComponent implements OnInit {
 id:any;
 relaredArray:Array<ICard>=[];
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param["id"];
    console.log( param["id"]);
    console.log( this.id);
    });

    this.mystro.getRelatedArtists(this.id).subscribe((res: any) => {
      console.log("realated res");
      console.log(res)
      res.artists.forEach((element:any) => {
        const card:ICard={
          name: element.name,
          description: "",
          imgUrl:element.imgage,
          ID: element.id,
          type:element.type
        }
        this.relaredArray.push(card);
      });
    });

  }

}
