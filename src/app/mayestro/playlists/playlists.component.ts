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
  length:any;
  ngOnInit() {
    /**
     * gets playlists that made by user
     */
    this.service.getMyPlaylists()
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
          this.length=data.length;
        }
      );
      
    }
    /**
     * opens create playlist dialog box
     */
    openDialog() {

      this.dialog.open(DialogComponent);
  
    }



 
}
