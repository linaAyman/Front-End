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
    return this.httpClient.get(this.auth.URL+`/albums/${id}/tracks`);
  }
  getPlaylist(id){
    return this.httpClient.get(this.auth.URL+`/playlist/${id}`);
  }
  getPlaylistTracks(id){
    return this.httpClient.get(this.auth.URL+`/playlist/${id}/tracks`);
  }
  getHome(){
    return this.httpClient.get(this.auth.URL+'/home');
  }
  getSeeAll(name){
    return this.httpClient.get(this.auth.URL+`/home/${name}`);
  }
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
  getArtistSingles(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/singles`)
  }
  getRelatedArtists(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/related-artists`)
  }
  getUser(id){
    return this.httpClient.get(this.auth.URL+`/users/${id}`)
  }
  getUserPLaylist(id){
    return this.httpClient.get(this.auth.URL+`/users/${id}/playlists`)
  }
}
