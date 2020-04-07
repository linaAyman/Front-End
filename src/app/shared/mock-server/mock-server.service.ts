import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError, from } from "rxjs";
import {
  delay,
  mergeMap,
  materialize,
  dematerialize,
  map
} from "rxjs/operators";

@Injectable()
export class MockServerService implements HttpInterceptor {
  users: any;
  hashId = [];

  constructor() {
    this.users = [
      {
        _id: "1234567890",
        email: "ahmed@gmail.com",
        password: "12345678",
        name: "Ahmed Helmy",
        gender: "0",
        birthDate:
          "Wed Feb 01 1950 00:00:00 GMT+0200 (Eastern European Standard Time)"
      }
    ];
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let users = this.users;
    let hashId = this.hashId;
    const { url, method, headers, body } = request;

    console.log(url);
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/user/login") && method === "POST":
          return login();
        case url.endsWith("/user") && method === "POST":
          return signup();
        case url.endsWith('/home') && method === 'GET':
          return mostPopular();
        case url.endsWith('/home/Chill') && method === 'GET':
          return category();
        case url.match(
          /\/user\/mailExist\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return checkEmail();
        case url.match(
          /\/user\/forgetPassword\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
          ) && method === "GET":
          return forgetPassword();
        case url.match(/\/user\/resetPassword\?id=\S+$/) && method === "POST":
          return resetPassword();
        case url.endsWith("/user/changePassword") && method == "POST":
          return changePassword();

      }
    }
    function login() {
      console.log("object");
      const { email, password } = body;
      let user = users.find(
        x => (x.email === email || x.name === email) && x.password === password
      );
      if (!user) return error("Incorrect username or password.");
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      });
    }
    function signup() {
      console.log(body);
      let { email, password, name, gender, birthDate } = body;
      switch (gender) {
        case 0:
          gender = "Mail";
          break;
        case 1:
          gender = "Femail";
          break;

        default:
          break;
      }
      if (email && password && name && gender && birthDate) {
        let user = users.find(x => x.email === email);
        if (user) return error("We're sorry, that email is taken.");
        const _id = Math.floor(Math.random() * 100000);
        user = {
          _id,
          email,
          password,
          name,
          gender,
          birthDate
        };
        users.push(user);
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
        });
      }
    }
    function checkEmail() {
      const urlSplit = url.split("/");
      const email = urlSplit[urlSplit.length - 1];
      const user = users.find(user => user.email === email);
      return user ? error("user Exist") : ok();
    }
    function forgetPassword() {
      const email = idFromUrl();
      let user = users.find(user => user.email === email);
      if (user) {
        const hash = String(Math.floor(Math.random() * 100000000000));
        const _id = user._id;
        hashId.push({ hash, _id });
        console.log(hashId);
        return ok({ hash });
      }
      return error("no user");
    }
    function resetPassword() {
      const { newPassword, confirmedPassword } = body;
      if (newPassword !== confirmedPassword)
        return error("passwords not match");
      const hash = url.split("=")[1];
      console.log(hashId, hash);
      const checkHashExists = hashId.find(h => h.hash == hash);
      if (checkHashExists) {
        const user = users.find(user => user._id === checkHashExists._id);
        user.password = newPassword;
        console.log(users);
        return ok();
      }
      return error("no hash key matchs");
    }
    function changePassword() {
      if (!isLoggedIn()) return unauthorized();
      const { oldPassword, newPassword, confirmedPassword } = body;
      const token = dataFromToken();
      console.log(token);
      const user = users.find(user => user._id === token._id);
      if (user.password !== oldPassword)
        return error("enter correct old password");
      if (newPassword === oldPassword)
        return error("please enter another password");
      user.password = newPassword;
      return ok();
    }
    function mostPopular(){
      const categories={
        "Home": [
            {
                "playlists": [
                    {
                        "type": "playlist",
                        "description": "Some Comfort Tracks to relax",
                        "id": "4qrimFUz8KFC8W6WrDiDnd",
                        "image": "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
                        "name": "Comfort Zone"
                    },
                    {
                        "type": "playlist",
                        "description": "Relax your Mind",
                        "id": "4qrimFUz8KFC8W6WrDiDne",
                        "image": "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
                        "name": "Relaxtion"
                    },
                    {
                        "type": "playlist",
                        "description": "get a Peacful Mind with our playlist",
                        "id": "4qrimFUz8KFC8W6WrDiDnf",
                        "image": "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
                        "name": "Peacful Mind"
                    },
                    {
                        "type": "playlist",
                        "description": "Take A Rest",
                        "id": "4qrimFUz8KFC8W6WrDiDnf",
                        "image": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
                        "name": "Rest"
                    },
                    {
                        "type": "playlist",
                        "description": "Make a good and Sweet Moments",
                        "id": "4qrimFUz8KFC8W6WrDiDng",
                        "image": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
                        "name": "Sweet Moments"
                    },
                    {
                        "type": "playlist",
                        "description": "Good hours to spend with music",
                        "id": "4qrimFUz8KFC8W6WrDiDnh",
                        "image": "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
                        "name": "Sweet Moments"
                    },
                    {
                        "type": "playlist",
                        "description": "Time to chill out with perfect songs",
                        "id": "4qrimFUz8KFC8W6WrDiDni",
                        "image": "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
                        "name": "chill songs"
                    }
                ],
                "name": "Chill"
            },
            {
                "playlists": [
                    {
                        "type": "playlist",
                        "description": "New Songs Exclusive Happy and chill",
                        "id": "4qrimFUz8KFC8W6WrDiDma",
                        "image": "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
                        "name": "Moments"
                    },
                    {
                        "type": "playlist",
                        "description": "get yourself some energy",
                        "id": "4qrimFUz8KFC8W6WrDiDnj",
                        "image": "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
                        "name": "Energy"
                    },
                    {
                        "type": "playlist",
                        "description": "Time to chill out with perfect songs",
                        "id": "4qrimFUz8KFC8W6WrDiDni",
                        "image": "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
                        "name": "chill songs"
                    },
                    {
                        "type": "playlist",
                        "description": "May be Happy now",
                        "id": "4qrimFUz8KFC8W6WrDiDmf",
                        "image": "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
                        "name": "HAPPY PERSON"
                    },
                    {
                        "type": "playlist",
                        "description": "do some excerise",
                        "id": "4qrimFUz8KFC8W6WrDiDme",
                        "image": "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
                        "name": "Sport Music"
                    },
                    {
                        "type": "playlist",
                        "description": "New Songs Mood Adjust ",
                        "id": "4qrimFUz8KFC8W6WrDiDmb",
                        "image": "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
                        "name": "Keep Up"
                    },
                    {
                        "type": "playlist",
                        "description": "playlist from the including all songs in if i stay movie",
                        "id": "4qrimQUz8KFC8W6WrDiDnc",
                        "image": "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
                        "name": "If i stay(soundtrack)"
                    }
                ],
                "name": "WorkOut"
            },
            {
                "playlists": [
                    {
                        "type": "playlist",
                        "description": "New Songs Mood Adjust ",
                        "id": "4qrimFUz8KFC8W6WrDiDmb",
                        "image": "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
                        "name": "Keep Up"
                    },
                    {
                        "type": "playlist",
                        "description": "do some excerise",
                        "id": "4qrimFUz8KFC8W6WrDiDme",
                        "image": "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
                        "name": "Sport Music"
                    },
                    {
                        "type": "playlist",
                        "description": "get yourself some energy",
                        "id": "4qrimFUz8KFC8W6WrDiDnj",
                        "image": "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
                        "name": "Energy"
                    },
                    {
                        "type": "playlist",
                        "description": "Some Comfort Tracks to relax",
                        "id": "4qrimFUz8KFC8W6WrDiDnd",
                        "image": "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
                        "name": "Comfort Zone"
                    },
                    {
                        "type": "playlist",
                        "description": "playlist Exclusive Amr Diab",
                        "id": "4qrimFUz8KFC8W6WrDiDnc",
                        "image": "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
                        "name": "New Songs Amr Diab"
                    },
                    {
                        "type": "playlist",
                        "description": "Relax your Mind",
                        "id": "4qrimFUz8KFC8W6WrDiDne",
                        "image": "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
                        "name": "Relaxtion"
                    },
                    {
                        "type": "playlist",
                        "description": "get yourself some energy",
                        "id": "4qrimFUz8KFC8W6WrDiDnh",
                        "image": "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
                        "name": "Energy"
                    }
                ],
                "name": "Happy"
            },
            {
                "playlists": [
                    {
                        "type": "playlist",
                        "description": "get a Peacful Mind with our playlist",
                        "id": "4qrimFUz8KFC8W6WrDiDnf",
                        "image": "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
                        "name": "Peacful Mind"
                    },
                    {
                        "type": "playlist",
                        "description": "May be Happy now",
                        "id": "4qrimFUz8KFC8W6WrDiDmf",
                        "image": "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
                        "name": "HAPPY PERSON"
                    },
                    {
                        "type": "playlist",
                        "description": "New Songs Exclusive Happy and chill",
                        "id": "4qrimFUz8KFC8W6WrDiDma",
                        "image": "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
                        "name": "Moments"
                    },
                    {
                        "type": "playlist",
                        "description": "do some excerise",
                        "id": "4qrimFUz8KFC8W6WrDiDme",
                        "image": "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
                        "name": "Sport Music"
                    },
                    {
                        "type": "playlist",
                        "description": "Take A Rest",
                        "id": "4qrimFUz8KFC8W6WrDiDnf",
                        "image": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
                        "name": "Rest"
                    },
                    {
                        "type": "playlist",
                        "description": "get yourself some energy",
                        "id": "4qrimFUz8KFC8W6WrDiDnh",
                        "image": "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
                        "name": "Energy"
                    }
                ],
                "description": "Most popular around world",
                "name": "Most Popular Playlists"
            },
            {
                "albums": [
                    {
                        "artists": [
                            {
                                "id": "7H55rcKCfwqkyDFH9wpKM6",
                                "name": "Christina Perri"
                            }
                        ],
                        "type": "album",
                        "id": "3xl0OvcSlc9Mwe5ToaFtD3",
                        "image": "https://i.scdn.co/image/ab67616d00001e02d32c61683be0aed19bafcf99",
                        "name": "songs for carmella: lullabies & sing-a-longs"
                    },
                    {
                        "artists": [
                            {
                                "id": "04gDigrS5kc9YWfZHwBETP",
                                "name": "Marron 5"
                            }
                        ],
                        "type": "album",
                        "id": "75iQSBSaztFIAun9qLLCnb",
                        "image": "https://i.scdn.co/image/ab67616d00001e0234ce9a9dde9c057225509276",
                        "name": "Girls Like You (feat. Cardi B)"
                    }
                ],
                "description": "Newest Albums Released with your artits",
                "name": "Released Albums"
            }
        ]
    }
      return ok(categories);
    }

    function category(){
      const category={
        "category": {
            "playlists": [
                {
                    "description": "Some Comfort Tracks to relax",
                    "id": "4qrimFUz8KFC8W6WrDiDnd",
                    "image": "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
                    "name": "Comfort Zone"
                },
                {
                    "description": "Relax your Mind",
                    "id": "4qrimFUz8KFC8W6WrDiDne",
                    "image": "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
                    "name": "Relaxtion"
                },
                {
                    "description": "get a Peacful Mind with our playlist",
                    "id": "4qrimFUz8KFC8W6WrDiDnf",
                    "image": "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
                    "name": "Peacful Mind"
                },
                {
                    "description": "Take A Rest",
                    "id": "4qrimFUz8KFC8W6WrDiDnf",
                    "image": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
                    "name": "Rest"
                },
                {
                    "description": "Make a good and Sweet Moments",
                    "id": "4qrimFUz8KFC8W6WrDiDng",
                    "image": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
                    "name": "Sweet Moments"
                },
                {
                    "description": "Good hours to spend with music",
                    "id": "4qrimFUz8KFC8W6WrDiDnh",
                    "image": "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
                    "name": "Sweet Moments"
                },
                {
                    "description": "Time to chill out with perfect songs",
                    "id": "4qrimFUz8KFC8W6WrDiDni",
                    "image": "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
                    "name": "chill songs"
                },
                {
                    "description": "get yourself some energy",
                    "id": "4qrimFUz8KFC8W6WrDiDnj",
                    "image": "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
                    "name": "Energy"
                },
                {
                    "description": "get yourself some energy",
                    "id": "4qrimFUz8KFC8W6WrDiDnh",
                    "image": "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
                    "name": "Energy"
                },
                {
                    "description": "New Songs Exclusive Happy and chill",
                    "id": "4qrimFUz8KFC8W6WrDiDma",
                    "image": "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
                    "name": "Moments"
                }
            ],
            "name": "Chill"
        }
    }
    }
    // helper functions

    function ok(body?) {
      console.log("successMock");
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function dataFromToken() {
      const jwt = new JwtHelper();
      return jwt.decodeToken(headers.get("token"));
    }

    function error(message) {
      console.log("errMock");
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return (
        headers.get("token") ===
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      );
    }

    function idFromUrl() {
      const urlParts = url.split("/");
      return urlParts[urlParts.length - 1];
    }
  }
}
export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockServerService,
  multi: true
};
