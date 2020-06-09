import { ICard } from './../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../mayestro.service';
import "rxjs";
// import "rxjs-compat/add/observable/combineLatest"
// import "rxjs-compat/add/operator/switchMap"
// import { Observable } from 'rxjs';
import {combineLatest} from "rxjs";
import {switchMap} from "rxjs/operators";


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
  playListArray:Array<ICard>=[];
  constructor(private route:ActivatedRoute,private mystro:MayestroService) { }

  ngOnInit() {
   
    this.route.params.pipe(
    switchMap(param=>{
      this.id=param['id']
      return combineLatest([
        this.mystro.getUser(this.id),
        this.mystro.getUserPLaylist(this.id)
      ]); 
    })
    )
    .subscribe((comp:any)=>{
      this.user.name=comp[0].name;
      this.user.image=comp[0].image;
     
      comp[1].playlists.forEach(element => {
        const card:ICard={
          name: element.name,
          description: element.description,
          imgUrl:element.image,
          ID: element.id,
          type:"playlists"
        }
        this.playListArray.push(card);
      }
      );
    });

  }

}
