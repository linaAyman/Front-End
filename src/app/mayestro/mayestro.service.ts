import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../shared/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class MayestroService {
  id: any;
  constructor(private httpClient: HttpClient, private auth: AuthService) {}
 /**
  * gets an album 
  * @param id  album id
  */
  getAlbum(id) {
    return this.httpClient.get(this.auth.URL + `/albums/${id}`);
  }
  /**
  * gets tacks of an album 
  * @param id  album id
  */
  getTracks(id) {
    console.log("aaaa");
    return this.httpClient.get(this.auth.URL + `/albums/${id}/tracks`);
  }

   /**
  * gets a playlist 
  * @param id  playlist id
  */
  getPlaylist(id) {
    return this.httpClient.get(this.auth.URL + `/playlist/${id}`);
  }

  /**
  * gets tacks of a playlist 
  * @param id  playlist id
  */
  getPlaylistTracks(id) {
    return this.httpClient.get(this.auth.URL + `/playlist/1234/tracks`);
  }

  /**
   * get home categories
   */
  getHome() {
    return this.httpClient.get(this.auth.URL + "/home");
  }
  /**
   * gets a category by its name
   * @param name category name
   */
  getSeeAll(name) {
    return this.httpClient.get(this.auth.URL + `/home/'${name}'`);
  }
}
