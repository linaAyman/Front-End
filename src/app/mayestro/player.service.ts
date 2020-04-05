import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  
  URL='http://jsonplaceholder.typicode.com/albums';
constructor(private http : HttpClient){

}
  getTrack() {
    return this.http.get(this.URL);
  }
  
}
