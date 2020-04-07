import { Component, OnInit } from '@angular/core';
import { AccountMayestroService } from '../account-mayestro.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errMsg:string

  constructor(private accService:AccountMayestroService) { }

  ngOnInit() {
  }

  submit(f){
    this.accService.login(f.value).subscribe(res=>{
      console.log("object");
    },err=>{
      console.log(err);
      // this.errMsg='Incorrect username or password.'
    })
  }

}
