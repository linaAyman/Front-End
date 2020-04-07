import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, map } from 'rxjs/operators';

@Injectable()
export class MockServerService implements HttpInterceptor {
  users:any
  albums:any
  tracks:any
  playlists:any
  constructor() { 
    this.users=[
      {
        email: "ahmed@gmail.com",
        password: "12345678",
        name: "Ahmed Helmy",
        gender: "male",
        country:"Egypt",
        birthDate:"Wed May 01 1999 00:00:00 GMT+0200 (Eastern European Standard Time)",
        image:"https://i.scdn.co/image/ab67616d0000b2738b989426c336c1d1cf89502a"
        
      }
    ]
    this.playlists=[{
      totalTracks:2,
      name:"top 20",
      _id:1234,
      releaseDate:"Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      image:{
        url:'https://i4.aroq.com/3/2016-12-15-10-59-top20toplist_cropped_90.jpg'
      },
      owner:[
        {
          name:"me"
        }
      ]
    }]
    this.albums=[{
      totalTracks:2,
      name:"sahran",
      _id:1234,
      releaseDate:"Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      image:{
        url:'https://i.scdn.co/image/ab67616d0000b2738b989426c336c1d1cf89502a'
      },
      artist:[
        {
          name:"amrdiab"
        }
      ]
    }]
    this.tracks=[{
      name:"amarain",
      trackNumber:1,
      id:1,
      duration:2,
      artists:[{
        name:"amrdiab"
      }]},
      {
        name:"sahran",
      trackNumber:2,
      id:2,
      duration:2,
      artists:[{
        name:"amrdiab"
      }]
     }]
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let users=this.users
    let albums=this.albums
    let tracks=this.tracks
    let playlists=this.playlists
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize());

    function handleRoute() {
        switch (true) {
            case url.endsWith('/user/login') && method === 'POST':
                return login();
            case url.endsWith('/user') && method === 'POST':
                return signup();
            case url.endsWith('/user/profile') && method === 'GET':
                return viewuser();
            case url.endsWith('/user/editprofile') && method === 'PUT':
                return edituser();
            case url.match(/\/albums\/\S+$/) && method === 'GET':
                return viewalbum();
            case url.match(/\/albums\/\S+\/tracks$/) && method === 'GET':
                return viewtracks();
            case url.match(/\/playlist\/\S+$/) && method === 'GET':
              return viewplaylist();
            case url.match(/\/playlist\/\S+\/tracks$/) && method === 'GET':
                return viewtracks();
        //     case url.endsWith('/users/authenticate') && method === 'POST':
        //         return authenticate();
        //     case url.endsWith('/users') && method === 'GET':
        //         return getUsers();
        //     case url.match(/\/users\/\d+$/) && method === 'GET':
        //         return getUserById();
        //     case url.match(/\/users\/\d+$/) && method === 'DELETE':
        //         return deleteUser();
        //     default:
        //         // pass through any requests not handled above
                // return next.handle(request);
        }

    }
    
    function viewplaylist(){
      
      const id=idFromUrl();
      const playlist = playlists.find(al=> al._id === id);
      if(playlist) return ok(playlist);
      return error("no album found with this id");

    }

    function viewalbum(){
      
      const id=idFromUrl();
      const album = albums.find(al=> al._id === id);
      if(album) return ok(album);
      return error("no album found with this id");

    }
    function edituser(){
      //if(!isLoggedIn()) return unauthorized();
      
      return ok({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE'})
      
    }
    function viewtracks(){
      const id=idFromUrl();
      const album = albums.find(al=> al._id === id);
      if(album) return ok(tracks);
      return error("no album found with this id");
    }
    function viewuser(){
      //if(!isLoggedIn()) return unauthorized();
      return ok(users[0]);
    }

    function login(){
      const {email , password}=body
      let user=users.find(x=>(x.email===email || x.name===email) &&  x.password===password)
      if (!user) return error('Incorrect username or password.')
      return ok({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE'})
    }

    function signup() {
      console.log(body);
      let {email,password,name,gender,birthDate}=body
      switch (gender) {
        case 0:
          gender="Mail"
          break;
        case 1:
          gender="Femail"
          break;
        
        default:
          break;
      }
      if (email && password && name && gender && birthDate) {
        let user = users.find(x =>x.email===email );
        if( user) return error("We're sorry, that email is taken.")
        user={
          email,
          password,
          name,
          gender,
          birthDate
        }
        users.push(user)
        return ok({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE'})

      }
      
    }
    // helper functions

    function ok(body?) {
      console.log("success");
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      console.log("err");
        return throwError({ error: { message } });
    }

    function isLoggedIn() {
        return headers.get('token') === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE';
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockServerService,
  multi: true
};
