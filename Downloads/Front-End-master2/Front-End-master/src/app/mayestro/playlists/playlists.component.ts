import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MayestroService } from '../mayestro.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private service: MayestroService,private dialog: MatDialog) {   }

  songs:any[];

  ngOnInit() {
    this.service.getMyPlaylists()
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
        }
      );
      
    }

    openDialog() {

      this.dialog.open(DialogComponent);
  
    }



 
}
