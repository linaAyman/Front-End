import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {
@Input() requestSeeAll:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.requestSeeAll=param['name'];
      console.log(param)
    })
    console.log(this.requestSeeAll)
  }

}
