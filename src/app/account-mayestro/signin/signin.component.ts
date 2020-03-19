import { Component, OnInit } from '@angular/core';
import { AccountMayestroService } from '../account-mayestro.service';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errMsg:string
  user: SocialUser;

  constructor(private accService:AccountMayestroService,private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
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
