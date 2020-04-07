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
    return this.httpClinet.get(this.auth.URL+'/user/profile',{headers:{token:this.auth.token}});
  }
  getEmail(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{headers:{token:this.auth.token}});
  }
  getDate(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{headers:{token:this.auth.token}});
  }
  getCountry(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{headers:{token:this.auth.token}});  
  }
  getGender(){
    return this.httpClinet.get(this.auth.URL+'/user/profile',{headers:{token:this.auth.token}});  
  }
  UpdateUser(user:any){
   return this.httpClinet.put(this.auth.URL+'/user/editprofile',user,{headers:{token:this.auth.token}}).pipe(map((res:any)=>{
    this.auth.token=res.token
    localStorage.setItem('token',res.token)}))

  }
}
