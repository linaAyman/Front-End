import { Component, OnInit, Input } from '@angular/core';
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
    img:''
  };
  id: any;
  MayestroService: any;
  
 
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }
  
  ngOnInit() {
    // this.maysrtoService.getArtist(123).subscribe((res:any)=>{
    //   res.forEach((art:any) => {
        
    //   });
    // })
    this.route.params.subscribe(param => {
      this.id = param["id"];
    console.log( param["id"]);
    console.log( this.id);

    });
    this.MayestroService.getArtist(this.id).subscribe((res: any) => {
      
      this.artistinfo.id=res.artistID;
      this.artistinfo.img=res.Images[0].URL;
      this.artistinfo.name=res.name;
      
      console.log(res);
    });
    console.log(this.artistinfo.name)

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

}
