import { ArtistService } from './../artist.service';
import { Component, OnInit, Input,HostBinding  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  isFollowed=true;
  isPalyed=true;
  artistInfo={
    name:'',
    id:'',
    img:'',
    followers:''
  };
  id: any;
 
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }
  
  ngOnInit() {

    this.route.params.subscribe(param => {
      this.id = param["id"];

    });
    this.artist.getArtist(this.id).subscribe((res: any) => {

      this.artistInfo.id=res.id;
      this.artistInfo.name=res.name;
      this.artistInfo.img=res.image;
      this.isFollowed=res.isFollowed;
      
    });
  }

  /**
   * change follow button label
   */

  Follow()
  {
    if(this.isFollowed==true)
       this.isFollowed=false;
    else this.isFollowed=true;
  }

  /**
   * change play button label 
   */

  PLay(){
    
    if(this.isPalyed==true)
       this.isPalyed=false;
    else this.isPalyed=true;
  }

  // @HostBinding('style.backgroundImage')
  //  getBackgroundImageUrl() {
  //    document.getElementById("backimg").style.backgroundImage = "url('this.artistinfo.img')";
  // }
}
