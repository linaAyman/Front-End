import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  
  URL='http://jsonplaceholder.typicode.com/albums';
constructor(private http : HttpClient, private auth:AuthService){

}
  getTracks() {
    return this.http.get(this.auth.URL+'/player/play');
  }
 }
