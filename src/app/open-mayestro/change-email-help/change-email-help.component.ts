import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-email-help',
  templateUrl: './change-email-help.component.html',
  styleUrls: ['./change-email-help.component.css']
})
export class ChangeEmailHelpComponent implements OnInit {
  EmailAddress=false;
  Password=false;
  Link=false;
  constructor() { }

  ngOnInit() {
  }

  First(){
    this.EmailAddress=!this.EmailAddress;
  }

  Second(){
    this.Password=!this.Password;
  }

  Third(){
    this.Link=!this.Link;
  }
  

}
