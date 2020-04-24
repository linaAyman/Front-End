import { Component, OnInit, Input,HostBinding  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  isfollowed=true;
  ispalyed=true;
  artistinfo={
    name:'',
    id:'',
    img:'',
    followers:''
  };
  id: any;
  imgurl:any;
 
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }
  
  ngOnInit() {

    this.route.params.subscribe(param => {
      this.id = param["id"];

    });
    this.mystro.getArtist(this.id).subscribe((res: any) => {
      this.artistinfo.id=res.id;
      this.artistinfo.name=res.name;
      this.artistinfo.img=res.image;
      this.isfollowed=res.isFollowed;
      // res.forEach(element => {
      //   if(this.id==element.artistID){
      //     this.artistinfo.name=element.name;
      //     this.artistinfo.id=element.artistID;
      //     this.artistinfo.img=element.Images[0].URL;
      //     this.artistinfo.followers=element.followers[0].total;
      //   }
      // });
    });
    
    

  }
  /**   
   * change follow button label
   */

  Follow()
  {
    if(this.isfollowed==true)
       this.isfollowed=false;
    else this.isfollowed=true;
  }

  /**
   *change play button label 
  */

  PLay(){
    
    if(this.ispalyed==true)
       this.ispalyed=false;
    else this.ispalyed=true;
  }

  // @HostBinding('style.backgroundImage')
  //  getBackgroundImageUrl() {
  //    document.getElementById("backimg").style.backgroundImage = "url('this.artistinfo.img')";
  // }
}
