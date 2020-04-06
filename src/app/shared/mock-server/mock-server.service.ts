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
            // case url.endsWith('/artist') && method === 'GET':
            //     return signup();
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
