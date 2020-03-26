import { Component, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  constructor(private loc:Location) {
    loc.onUrlChange((res,state)=>{
      console.log(res);
    })
   }

  ngOnInit() {
  }
  ngOnChanges(){
  }

}
