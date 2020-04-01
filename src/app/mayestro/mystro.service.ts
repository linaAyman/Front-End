import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MystroService {
  private url="https://someurl";

  

  constructor(private http: HttpClient) { 
  }
  getCategories(){
    return this.http.get(this.url);
  }
}
