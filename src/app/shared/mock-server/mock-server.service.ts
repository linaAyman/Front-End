import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, map } from 'rxjs/operators';

@Injectable()
export class MockServerService implements HttpInterceptor {
  users:any

  constructor() { 
    this.users=[
      {
        email: "ahmed@gmail.com",
        password: "12345678",
        name: "Ahmed Helmy",
        gender: "0",
        birthDate:"Wed Feb 01 1950 00:00:00 GMT+0200 (Eastern European Standard Time)"
      }
    ]
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let users=this.users
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
                case url.endsWith('/player/play') && method === 'GET':
                   return track();
        }

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
    
    function track() {
    const tracks = [
        {
            artists: [
                {
                    id: "19gmxCK2V3jLMi5fDYyKtS",
                    name: "Willamette Stone"
                }
            ],
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            image: "https://i.scdn.co/image/ab67616d00001e0219ab0403aa0de6ee32b101ff",
            id: "3JOF9NzQVkUXtCcJbEQuAb",
            name: "Heart Like Yours",
            previewUrl: "https://p.scdn.co/mp3-preview/b5fbda2874c09a249989b9570381537e8dee59c1?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"
        },
        {
            artists: [
                {
                    id: "19gmxCK2V3jLMi5fDYyKtS",
                    name: "Willamette Stone"
                }
            ],
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            image: "https://i.scdn.co/image/ab67616d00001e0219ab0403aa0de6ee32b101ff",
            id: "3cdyjNKFN0tWP9Z8icNvcf",
            name: "Never Coming Down",
            previewUrl: "https://p.scdn.co/mp3-preview/c8628766a22440f0e355d7221caf7a1f0cbe79fb?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"
        }
        
      ];
  return ok(tracks);
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
