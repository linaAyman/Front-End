import { Iartist } from './artist.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artist:Iartist
  constructor() { 
  }
  ngOnInit() {
    
  }
  
}
