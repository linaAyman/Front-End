import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClinet: HttpClient,private auth:AuthService) { }
  getUsername(){
    return this.httpClinet.get(this.auth.URL+'/user',{headers:{token:this.auth.token}});
  }
  getEmail(){
    return this.httpClinet.get(this.auth.URL+'/user',{headers:{token:this.auth.token}});
  }
  getDate(){
    return this.httpClinet.get(this.auth.URL+'/user',{headers:{token:this.auth.token}});
  }
  getCountry(){
    return this.httpClinet.get(this.auth.URL+'/user',{headers:{token:this.auth.token}});  
  }
  getGender(){
    return this.httpClinet.get(this.auth.URL+'/user',{headers:{token:this.auth.token}});  
  }
  UpdateMobile(num:any){
   return this.httpClinet.put(this.auth.URL+'/user',JSON.stringify({num}),{headers:{token:this.auth.token}});
  }
}
