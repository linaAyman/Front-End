import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  artistInfo={
    name:'Mohsen Lotfy',
    id:'123',
    img:'https://i.scdn.co/image/5ac491f3bf789a7a1491b20de5e83006e0ef2ba0',
    followers:'123456789456123'
  };

  constructor() { }

  ngOnInit() {
  }

}
