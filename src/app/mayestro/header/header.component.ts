import { Component, OnInit, OnChanges } from "@angular/core";
import { Location } from "@angular/common";
import{Router}from '@angular/router'
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private loc: Location,public router: Router) {
    // console.log(loc.getState());
  }

  ngOnInit() {
    this.loc.onUrlChange((res, state) => {
      console.log(res);
    });
  }

  back() {
    this.loc.back();
  }
  ngOnChanges() {}
}
