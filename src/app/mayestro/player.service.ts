import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  
constructor(private http : HttpClient, private auth:AuthService){

}
  getTracks(id) {
      return this.http.get(this.auth.URL+`/playlist/${id}/tracks`); 
  }
 }
