import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class MystroService {
  
  

  constructor(private http: HttpClient,private auth:AuthService) { 
  }
  getCategories(){
    // return this.http.get(this.url);
  }

  getMostPopular(){
    return this.http.get(this.auth.URL+'/home/most-popular');
  }
}
