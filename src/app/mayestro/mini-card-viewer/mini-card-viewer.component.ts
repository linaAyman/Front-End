import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from './category.interface';

@Component({
  selector: 'mini-card-viewer',
  templateUrl: './mini-card-viewer.component.html',
  styleUrls: ['./mini-card-viewer.component.css']
})
export class MiniCardViewerComponent implements OnInit {

  @Input() category: ICategory;
  constructor() { }


  ngOnInit() {
  }

}
