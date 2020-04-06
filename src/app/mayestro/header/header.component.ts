import { Component, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private loc: Location) {
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
