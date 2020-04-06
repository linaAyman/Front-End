import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-card-viewer',
  templateUrl: './mini-card-viewer.component.html',
  styleUrls: ['./mini-card-viewer.component.css']
})
export class MiniCardViewerComponent implements OnInit {

  cards=[
    {
      name: "Happy Hits",
      imgurl: "https://i.scdn.co/image/ab67706f000000022996a2205776213536c3df03",
      description:" This is a paragraph that is useless and has no meaning .. just like my life.."
    },
    {
      name: "Happy Hits",
      imgurl: "https://i.scdn.co/image/ab67706f000000022996a2205776213536c3df03",
      description:" This is a paragraph that is useless and has no meaning .. just like my life.."
    },
    {
      name: "Happy Hits",
      imgurl: "https://i.scdn.co/image/ab67706f000000022996a2205776213536c3df03",
      description:" This is a paragraph that is useless and has no meaning .. just like my life.."
    },
    {
      name: "Happy Hits",
      imgurl: "https://i.scdn.co/image/ab67706f000000022996a2205776213536c3df03",
      description:" This is a paragraph that is useless and has no meaning .. just like my life.."
    }

  ]
  constructor() { }


  ngOnInit() {
  }

}
