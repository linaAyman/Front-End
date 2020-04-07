import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { map } from 'rxjs/operators/map'
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClinet: HttpClient,private auth:AuthService) { }
  getUsername(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{
      headers: { token: localStorage.getItem("token") }
    });
  }
  getEmail(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{
      headers: { token: localStorage.getItem("token") }
    });
  }
  getDate(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{
      headers: { token: localStorage.getItem("token") }
    });
  }
  getCountry(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{
      headers: { token: localStorage.getItem("token") }
    });
  }
  getGender(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{
      headers: { token: localStorage.getItem("token") }
    });  
  }
  UpdateUser(user:any){
   return this.httpClinet.put(this.auth.URL+'/user/editprofile',user).pipe(
    map((res: any) => {
      console.log("res", res);
      localStorage.setItem("token", res.token);
    })
  );

  }
}
