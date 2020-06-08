import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
@Input() browseCards;
cards={
  img:"",
  bgColor:"",
  name:""
};
browse=true;
  constructor(private auth:AuthService,private http:HttpClientModule) { }

  ngOnInit() {
    if(this.browseCards){
      this.cards.bgColor=this.browseCards.color;
      this.cards.img=this.browseCards.imgUrl;
      this.cards.name=this.browseCards.name;
    }
  }
}
