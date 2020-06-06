import { ArtistService } from './../artist.service';
import { IASong } from './../artist-song/artist-song.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IACard } from '../artist-card/artist-card.interface';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.css']
})

/**
 * Artist overview component
 */
export class ArtistOverviewComponent implements OnInit {
  /**
   * array of sonsgs of type ISong
   */
  songs:Array<IASong>=[];
  /**
   * array of albums of type IACard
   */
  albums:Array<IACard>=[];
  moreAlbums:Array<IACard>=[];
  /**
   * array of singles of type IACard
  */
  singles:Array<IACard>=[];
  /**
   * array of Appears on of type IACard
  */
  appearsOn:Array<IACard>=[];
  id:any;
  /**
   * boolean if there it more button
   */
  more=true;
  
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }

  /**
   * get data(artist singles,songs,albums) from the server and push it to the arrays(singles,albums,songs)
   */
  ngOnInit() {
    
    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return combineLatest([
          this.artist.getArtistTopTracks(this.id),
          this.artist.getArtistAlbums(this.id),
          // this.artist.getMoreAlbums(this.id),
          this.artist.getArtistSingles(this.id),
          this.artist.getAppearsOn(this.id)
        ]); 
      })
      )
      .subscribe((comp:any)=>{
        console.log("hhhhhhh")
        console.log(comp[3])
        comp[0].tracks.forEach((element:any) => {
          const song:IASong={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            url:element.url
          }
          this.songs.push(song)
        });
        comp[1].albums.forEach((element:any) => {
          const album:IACard={
            name: element.name,
            duration:0,
            image:element.image,
            isLiked:false,
            id:element.id,
            totalTracks:element.totalTracks,
            type:"album"
          }
          this.albums.push(album);
        });
        // comp[2].albums.forEach((element:any) => {
        //   const album:IACard={
        //     name: element.name,
        //     duration:0,
        //     image:element.image,
        //     isLiked:false,
        //     id:element.id,
        //     totalTracks:element.totalTracks
        //   }
        //   this.moreAlbums.push(album);
        // });
        comp[2].tracks.forEach((element:any) => {
          const single:IACard={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            totalTracks:0,
            type:"album"
          }
          this.singles.push(single);
        });
        comp[3].albums.forEach((element:any) => {
          const appearOn:IACard={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            totalTracks:0,
            type:"album"
          }
          this.appearsOn.push(appearOn);
        });
      });
   
  }

  moreFunc(){
    if(this.albums.length<12)
      this.more=false;
    else 
      this.more=true;
  }

}
