import { Injectable } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ArtistManagementService {
  constructor(private auth: AuthService, private http: HttpClient) {}

  uploadSongImg(img, songId) {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("id", songId);
    return this.http.post(`${this.auth.URL}/artist/addSongImg`, formData);
  }
  uploadSongData(data, songId) {
    const formData = new FormData();
    formData.append("song", data);
    formData.append("id", songId);
    return this.http.post(`${this.auth.URL}/artist/addSongData`, formData);
  }
  postSong(song) {
    return this.http.post(`${this.auth.URL}/artist/new-song`, song);
  }

  uploadAlbumImg(img, albumId) {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("id", albumId);
    return this.http.post(`${this.auth.URL}/artist/addAlbumImg`, formData);
  }

  postAlbum(album) {
    return this.http.post(`${this.auth.URL}/artist/new-album`, album);
  }

  getArtistSongs() {
    return this.http.get(`${this.auth.URL}/artist/getSongs`);
  }
  getArtist() {
    return this.http.get(`${this.auth.URL}/artist`);
  }
  getArtistAlbums() {
    return this.http.get(`${this.auth.URL}/artist/getAlbums`);
  }
  getArtistSongCharts(id) {
    return this.http.get(`${this.auth.URL}/artist/getSongCharts/${id}`);
  }
  getArtistAlbumCharts(id) {
    return this.http.get(`${this.auth.URL}/artist/getSongCharts/${id}`);
  }
  editeSong(newSong) {
    return this.http.put(`${this.auth.URL}/artist/editeSong`, newSong);
  }
  editeAlbum(newAlbum) {
    return this.http.put(`${this.auth.URL}/artist/editeAlbum`, newAlbum);
  }
  deleteSong(id) {
    return this.http.delete(`${this.auth.URL}/artist/deleteSong/${id}`);
  }
  deleteAlbum(id) {
    return this.http.delete(`${this.auth.URL}/artist/deleteAlbum/${id}`);
  }
}
