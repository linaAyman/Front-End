import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  songs:any[];
  constructor(private service: MayestroService) { }

  
  
  ngOnInit() {
    this.service.GetLibraryAlbums()
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
        }
      );
    
  }

}
