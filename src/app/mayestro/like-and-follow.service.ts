import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map'
@Injectable({
  providedIn: 'root'
})
export class LikeAndFollowService {

  constructor(private auth:AuthService,private httpClient:HttpClient) { }
/**
   * adds a song to a likedSongs
   * @param id id of the song to be added to the LikedSongs
   */
  LikeSong(id){
    return this.httpClient.put(this.auth.URL+'/me/tracks',id).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }
/**
 * return LikedSongs
 */
  GetLikedSongs()
  {
    return this.httpClient.get(this.auth.URL+"/me/tracks",{
      headers: { token: localStorage.getItem("token") }
    });
  }
  /**
   * deletes song from LikedSongs
   * @param id id of song to be deleted
   */
  UnLikeSong(id)
  {
    return this.httpClient.delete(this.auth.URL+'/me/tracks',id).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }
  FollowArtist(id,type){
    return this.httpClient.put(this.auth.URL+'/me/tracks',{id,type}).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }
  /**
   * return the FollowedArtists
   */
  GetFollowedArtists()
{
   return this.httpClient.get(this.auth.URL+'/me/follow');
}
}
