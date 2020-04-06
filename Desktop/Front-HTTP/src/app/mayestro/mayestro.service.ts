import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class MayestroService {
  id:any;
  constructor(private httpClient: HttpClient, private auth:AuthService) { }

  getAlbum(id){
    return this.httpClient.get(this.auth.URL+`/albums/${id}`);
  }
  getTracks(id){
    return this.httpClient.get(this.auth.URL+`/albums/${id}`);
  }
  
}
