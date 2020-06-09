import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-help',
  templateUrl: './reset-password-help.component.html',
  styleUrls: ['./reset-password-help.component.css']
})
export class ResetPasswordHelpComponent implements OnInit {
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
