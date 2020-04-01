import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './card.interface';
import { IPlaylist } from '../mini-card-viewer/playlists.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() playlist: IPlaylist;
  
  constructor() { }

  ngOnInit() {
    console.log(this.playlist)
  }

}
