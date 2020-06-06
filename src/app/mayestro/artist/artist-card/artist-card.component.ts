import { Component, OnInit, Input } from '@angular/core';
import { IACard } from './artist-card.interface';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() aCard: IACard;
  album:"album";
  constructor() { }

  ngOnInit() {
  }
  // navigate() {
  //   this.router.navigate([["/playlist", this.card.ID, this.card.type]]);
  // }

}
