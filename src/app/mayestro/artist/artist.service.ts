import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  id:any;
  constructor(private httpClient: HttpClient, private auth:AuthService) { }

  getArtist(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}`);
  }
  getAboutArtist(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/about`);
  }
  getArtistTopTracks(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/top-tracks`)
  }
  getArtistAlbums(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/albums`)
  }
  getMoreAlbums(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/more-albums`)
  }
  getArtistSingles(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/singles`)
  }
  getAppearsOn(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/appears-on`)
  }
  getRelatedArtists(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/related-artists`)
  }

}
