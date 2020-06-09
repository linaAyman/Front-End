import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../../mini-card-viewer/category.interface';
import { ICard } from '../../card/card.interface';

@Component({
  selector: 'recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  @Input() card: ICard;
  @Input() recent:boolean;
  category:ICategory;
  constructor() { }

  ngOnInit() {
    
  }

}
