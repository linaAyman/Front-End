import { Component, OnInit } from '@angular/core';
import { MystroService } from '../mystro.service';
import { IPlaylist } from '../mini-card-viewer/playlists.interface';
import { ICategory } from '../mini-card-viewer/category.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:Array<ICategory>=[];
  // playlists=Array<IPlaylist>;
  constructor(private mystro:MystroService) {

  }

  ngOnInit() {
    this.mystro.getMostPopular().subscribe((res:any)=>{
      const category: ICategory={
        name:res.name,
        description: res.description,
        ID: res.ID,
        playlists:res.playlists
      }
      this.categories.push(category);
      this.categories.push(category);

    } );
  
  }

}
