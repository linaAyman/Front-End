import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map'
import 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AccountMayestroService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  login(user){
    return this.http.post(this.auth.URL+'/users/login',user).pipe(map((res:any)=>{
      this.auth.token=res.token
      localStorage.setItem('token',res.token)
    }))
  }
  signup(user){
    return this.http.post(this.auth.URL+'/user',user).pipe(map((res:any)=>{
      this.auth.token=res.token
      localStorage.setItem('token',res.token)
    }))
  }
}
