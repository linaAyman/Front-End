import { NotificationComponent } from './../../../open-mayestro/notification/notification.component';
import { IASong } from './../artist-song/artist-song.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';
import { IACard } from '../artist-card/artist-card.interface';

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.css']
})
export class ArtistOverviewComponent implements OnInit {
  Songs:Array<IASong>=[];
  albums:Array<IACard>=[];
  singles:Array<IACard>=[];
  id:any;
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param["id"];
    });
    this.mystro.getArtistTopTracks(this.id).subscribe((res: any) => {
      res.tracks.forEach((element:any) => {
        const song:IASong={
          name: element.name,
          duration:element.duration,
          image:element.image,
          isLiked:element.isLiked,
          id:element.id,
          url:element.url
        }
        this.Songs.push(song)
      });
    });

    this.mystro.getArtistAlbums(this.id).subscribe((res:any)=>{
      res.albums.forEach((element:any) => {
        const album:IACard={
          name: element.name,
          duration:0,
          image:element.image,
          isLiked:false,
          id:element.id,
          totalTracks:element.totalTracks
        }
        this.albums.push(album);
      });

    })

    this.mystro.getArtistSingles(this.id).subscribe((res:any)=>{
   
      res.tracks.forEach((element:any) => {
        const single:IACard={
          name: element.name,
          duration:element.duration,
          image:element.image,
          isLiked:element.isLiked,
          id:element.id,
          totalTracks:0
        }
        this.singles.push(single);
      });
    })
    

  }

}
