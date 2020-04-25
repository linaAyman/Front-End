import { ICard } from './../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../mayestro.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id:any;
  user={
    image:"",
    name:""
  };
  image:any;
  playlistarray:Array<ICard>=[];
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.id=p['id'];
   
    })

    this.mystro.getUser(this.id).subscribe((res:any)=>{
     
      this.user.name=res.name;
      this.user.image=res.image;
    })

    this.mystro.getUserPLaylist(this.id).subscribe((res:any)=>{
      res.playlists.forEach(element => {
        const card:ICard={
          name: element.name,
          description: element.description,
          imgUrl:element.image,
          ID: element.id,
          type:"playlists"
        }
        this.playlistarray.push(card);
      }
      );
    })

  }

}
