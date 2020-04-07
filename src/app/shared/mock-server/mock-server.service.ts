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
  albums: any;
  tracks: any;
  playlists: any;
  mytracks: any;
  constructor() {
    this.users = [
      {
        _id: "1234567890",
        email: "ahmed@gmail.com",
        password: "12345678",
        name: "Ahmed Helmy",
        gender: "male",
        birthDate:
          "Wed Feb 01 1999 00:00:00 GMT+0200 (Eastern European Standard Time)",
        image:
          "https://i.scdn.co/image/ab67616d0000b2738b989426c336c1d1cf89502a",
        country: "Egypt"
      }
    ];
    this.playlists = [
      {
        totalTracks: 2,
        name: "top 20",
        _id: "1234",
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        image: {
          url:
            "https://i4.aroq.com/3/2016-12-15-10-59-top20toplist_cropped_90.jpg"
        },
        owner: [
          {
            name: "me"
          }
        ]
      }
    ];
    this.albums = [
      {
        totalTracks: 2,
        name: "sahran",
        _id: "1234",
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        image: {
          url:
            "https://i.scdn.co/image/ab67616d0000b2738b989426c336c1d1cf89502a"
        },
        artist: [
          {
            name: "amrdiab"
          }
        ]
      }
    ];
    this.tracks = [
      {
        name: "amarain",
        trackNumber: 1,
        id: 1,
        duration: 2,
        artists: [
          {
            name: "amrdiab"
          }
        ]
      },
      {
        name: "sahran",
        trackNumber: 2,
        id: 2,
        duration: 2,
        artists: [
          {
            name: "amrdiab"
          }
        ]
      }
    ];

    this.mytracks = [
      {
        artists: [
          {
            id: "19gmxCK2V3jLMi5fDYyKtS",
            name: "Willamette Stone"
          }
        ],
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        image:
          "https://i.scdn.co/image/ab67616d00001e0219ab0403aa0de6ee32b101ff",
        id: "3JOF9NzQVkUXtCcJbEQuAb",
        name: "Heart Like Yours",
        previewUrl:
          "https://p.scdn.co/mp3-preview/b5fbda2874c09a249989b9570381537e8dee59c1?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"
      },
      {
        artists: [
          {
            id: "19gmxCK2V3jLMi5fDYyKtS",
            name: "Willamette Stone"
          }
        ],
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        image:
          "https://i.scdn.co/image/ab67616d00001e0219ab0403aa0de6ee32b101ff",
        id: "3cdyjNKFN0tWP9Z8icNvcf",
        name: "Never Coming Down",
        previewUrl:
          "https://p.scdn.co/mp3-preview/c8628766a22440f0e355d7221caf7a1f0cbe79fb?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"
      },
      {
        id: "4qrimQUz8KFC8W6WrDiDnc"
      }
    ];
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let users = this.users;
    let hashId = this.hashId;
    let albums = this.albums;
    let tracks = this.tracks;
    let playlists = this.playlists;
    let mytracks = this.mytracks;

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
        case url.endsWith("/user/signup") && method === "POST":
          return signup();
        case url.endsWith("/home/most-popular") && method === "GET":
          return mostPopular();
        case url.match(
          /\/user\/mailExist\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return checkEmail();
        case url.match(
          /\/user\/forgetPassword\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return forgetPassword();
        case url.match(/\/albums\/\S+$/) && method === "GET":
          return viewalbum();
        case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
          return viewtracks();
        case url.match(/\/playlist\/\S+$/) && method === "GET":
          return viewplaylist();
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return viewtracks();
        case url.endsWith("/user/profile") && method === "GET":
          return viewuser();
        case url.endsWith("/user/editprofile") && method === "PUT":
          return edituser();
        case url.match(/\/user\/resetPassword\?id=\S+$/) && method === "POST":
          return resetPassword();
        case url.endsWith("/user/changePassword") && method == "POST":
          return changePassword();
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return track();
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

    function viewplaylist() {
      console.log("album");
      const id = idFromUrl();
      const playlist = playlists.find(al => al._id === id);
      if (playlist) return ok(playlist);
      return error("no album found with this id");
    }

    function viewalbum() {
      console.log("her");
      const id = idFromUrl();
      const album = albums.find(al => al._id === id);
      if (album) return ok(album);
      return error("no album found with this id");
    }
    function edituser() {
      //if(!isLoggedIn()) return unauthorized();

      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      });
    }
    function viewtracks() {
      const id = idFromUrl();
      const album = albums.find(al => al._id === id);
      if (album) return ok(tracks);
      return error("no album found with this id");
    }
    function viewuser() {
      //if(!isLoggedIn()) return unauthorized();
      return ok(users[0]);
    }

    function login() {
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
      const user = users.find(user => user._id === token._id);
      if (user.password !== oldPassword)
        return error("enter correct old password");
      if (newPassword === oldPassword)
        return error("please enter another password");
      user.password = newPassword;
      return ok();
    }
    function mostPopular() {
      const categories = {
        Home: [
          {
            ID: "12345",
            name: "Most popular playLists",
            description: "",
            type: "playlists",
            playlists: [
              {
                ID: "1",
                name: "test1",
                description: "test1 test1 test1 test1 test1 test1 test1 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "2",
                name: "test2",
                description: "test2 test2 test2 test2 test2 test2 test2 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "3",
                name: "test3",
                description: "test3 test3 test3 test3 test3 test3 test3 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "4",
                name: "test4",
                description: "test4 test4 test4 test4 test4 test4 test4 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "5",
                name: "test5",
                description: "test5 test5 test5 test5 test5 test5 test5 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "6",
                name: "test6",
                description: "test6 test6 test6 test6 test6 test6 test6 ",
                type: "playlist",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              }
            ]
          },
          {
            ID: "1234567",
            name: "Most popular Albums",
            description: "Albums blablabla",
            type: "albums",
            albums: [
              {
                ID: "7",
                name: "Album1",
                artist_name: "Hamaki",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "8",
                name: "Album2",
                artist_name: "Amr Diab",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "9",
                name: "Album3",
                artist_name: "Charlie Puth",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "10",
                name: "Album4",
                artist_name: "ColdPlay",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "11",
                name: "Album5",
                artist_name: "Frank Sinatra",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              },
              {
                ID: "12",
                name: "Album6",
                artist_name: "Rihanna",
                type: "album",
                imgUrl:
                  "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
              }
            ]
          }
        ]
      };

      return ok(categories);
    }

    
  // function artist(){
  //   if(!isLoggedIn()) return unauthorized()
  //   const artists=[{
  //     followers : [ {
  //       total : 5
  //     } ],
  //     Images : [ {
  //       URL : "https://cdn.ome.lt/9LBvp96wbthUZEMZqrzdnioAMYk=/fit-in/837x500/smart/uploads/conteudo/fotos/Adeleheader.jpg"
  //     }],
  //     name : "adele",
  //     artistID : "123"
  //     },
  //     {
  //       followers : [ {
  //         total : 10 
  //       } ],
  //       Images : [ {
  //         URL : "https://thevintagevines.files.wordpress.com/2015/01/bfxi4ifcmaa2vwq.jpg"
  //       }],
  //       name : "Ed Sheeran ",
  //       artistID : "154"
  //     }
  //   ]
  //   }
    function track() {
      const id = url.split("/")[url.length - 2];
      const track = mytracks.find(tr => tr._id === id);
      if (track) return ok(track);
      return error("no track found with this id");
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
