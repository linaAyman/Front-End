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
import { Observable, of, throwError, from, concat } from "rxjs";
import {
  delay,
  mergeMap,
  materialize,
  dematerialize,
  map
} from "rxjs/operators";
import { stringify } from 'querystring';

@Injectable()
export class MockServerService implements HttpInterceptor {
  users: any;
  hashId = [];
  albums: any;
  homePlaylists: any;
  mytracks: any;
  categories: any;
  myPlaylists:any;
  constructor() {
    
    this.categories = {
      Home: [
        {
          playlists: [
            {
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnz",
              image:
                "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
              name: "Comfort Zone",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "someone"
                }
              ],
              tracks: [
                {
                  name: "helm omry",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "khaled selim"
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
              ]
            },
            {
              type: "playlist",
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDn0",
              image:
                "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
              name: "Relaxtion",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "sara"
                }
              ],
              tracks: [
                {
                  name: "kol mara",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "tamer hosny"
                    }
                  ]
                },
                {
                  name: "law",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "elissa"
                    }
                  ]
                }
              ]
            },
            {
              type: "playlist",
              description: "get a Peacful Mind with our playlist",
              id: "4qrimFUz8KFC8W6WrDiDn1",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "Peacful Mind",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "omar"
                }
              ],
              tracks: [
                {
                  name: "shady",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "fayrouz"
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
                },
                {
                  name: "sabah w masa",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "fayrouz"
                    }
                  ]
                },
                {
                  name: "i will always love you",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "whitney huston"
                    }
                  ]
                }
              ]
            },
            {
              type: "playlist",
              description: "Take A Rest",
              id: "4qrimFUz8KFC8W6WrDiDn2",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Rest",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "shady"
                }
              ],
              tracks: [
                {
                  name: "shady",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "fayrouz"
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
              ]
            },
            {
              type: "playlist",
              description: "Make a good and Sweet Moments",
              id: "4qrimFUz8KFC8W6WrDiDng",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Sweet Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            },
            {
              type: "playlist",
              description: "Good hours to spend with music",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "Sweet Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            },
            {
              type: "playlist",
              description: "Time to chill out with perfect songs",
              id: "4qrimFUz8KFC8W6WrDiDni",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "chill songs",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            },
            {
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            },
            {
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ]
            }
          ],
          name: "Chill"
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "Time to chill out with perfect songs",
              id: "4qrimFUz8KFC8W6WrDiDni",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "chill songs"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "May be Happy now",
              id: "4qrimFUz8KFC8W6WrDiDmf",
              image:
                "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
              name: "HAPPY PERSON"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "New Songs Mood Adjust ",
              id: "4qrimFUz8KFC8W6WrDiDmb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Keep Up"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description:
                "playlist from the including all songs in if i stay movie",
              id: "4qrimQUz8KFC8W6WrDiDnc",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "If i stay(soundtrack)"
            }
          ],
          name: "WorkOut"
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "New Songs Mood Adjust ",
              id: "4qrimFUz8KFC8W6WrDiDmb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Keep Up"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnd",
              image:
                "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
              name: "Comfort Zone"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "playlist Exclusive Amr Diab",
              id: "4qrimFUz8KFC8W6WrDiDnc",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "New Songs Amr Diab"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDne",
              image:
                "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
              name: "Relaxtion"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy"
            }
          ],
          name: "Happy"
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "get a Peacful Mind with our playlist",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "Peacful Mind"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "May be Happy now",
              id: "4qrimFUz8KFC8W6WrDiDmf",
              image:
                "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
              name: "HAPPY PERSON"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "Take A Rest",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Rest"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me"
                }
              ],
              tracks: [
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
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy"
            }
          ],
          description: "Most popular around world",
          name: "Most Popular Playlists"
        },
        {
          albums: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              tracks: [
                {
                  name: "thousand years",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "Christina Perri"
                    }
                  ]
                },
                {
                  name: "jar of hearts",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "Christina Perri"
                    }
                  ]
                }
              ],
              artists: [
                {
                  id: "7H55rcKCfwqkyDFH9wpKM6",
                  name: "Christina Perri"
                }
              ],
              type: "album",
              id: "3xl0OvcSlc9Mwe5ToaFtD3",
              image:
                "https://i.scdn.co/image/ab67616d00001e02d32c61683be0aed19bafcf99",
              name: "songs for carmella: lullabies & sing-a-longs"
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              artist: [
                {
                  name: "amrdiab"
                }
              ],
              tracks: [
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
              ],
              artists: [
                {
                  id: "04gDigrS5kc9YWfZHwBETP",
                  name: "Marron 5"
                }
              ],
              type: "album",
              id: "75iQSBSaztFIAun9qLLCnb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0234ce9a9dde9c057225509276",
              name: "Girls Like You (feat. Cardi B)"
            }
          ],
          description: "Newest Albums Released with your artits",
          name: "Released Albums"
        },
        {
          artists: [
            {
              type: "artist",
              id: "3xl0OvcSlc9Mwe5ToaFtD3",
              image:
                "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
              name: "Amr Diab"
            },
            {
              type: "artist",
              id: "75iQSBSaztFIAun9qLLCnb",
              image:
                "https://i.scdn.co/image/ab67616d0000b2732b737b0411be58583293e17e",
              name: "Tamer Hosni"
            }
          ],
          description: "Artists",
          name: "popular Artists"
        }
      ]
    };
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
    this.myPlaylists=[
      {
        type: "myplaylist",
        description: "Some Comfort Tracks to relax",
        id: "2qrimFUz8KFC8W6WrDiDnd",
        image:
          "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
        name: "Comfort Zone",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me"
          }
        ],
        tracks: [
          {
            name: "Hawy",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "MassarEgbary"
              }
            ]
          },
          {
            name: "Liar",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "CamilaCabello"
              }
            ]
          }
        ]
      },
      {
        type: "myplaylist",
        description: "Relax your Mind",
        id: "2qrimFUz8KFC8W6WrDiDne",
        image:
          "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
        name: "Relaxtion",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me"
          }
        ],
        tracks: [
          {
            name: "Stitches",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "ShawnMendes"
              }
            ]
          },
          {
            name: "Fire on fire",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "SamSmith"
              }
            ]
          }
        ]
      } 
    ]; 
    this.homePlaylists =[
    {
      type: "playlist",
      description: "Some Comfort Tracks to relax",
      id: "4qrimFUz8KFC8W6WrDiDnz",
      image:
        "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
      name: "Comfort Zone",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "someone"
        }
      ],
      tracks: [
        {
          name: "helm omry",
          trackNumber: 1,
          id: 1,
          duration: 2,
          artists: [
            {
              name: "khaled selim"
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
      ]
    },
    {
      type: "playlist",
      description: "Relax your Mind",
      id: "4qrimFUz8KFC8W6WrDiDn0",
      image:
        "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
      name: "Relaxtion",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "sara"
        }
      ],
      tracks: [
        {
          name: "kol mara",
          trackNumber: 1,
          id: 1,
          duration: 2,
          artists: [
            {
              name: "tamer hosny"
            }
          ]
        },
        {
          name: "law",
          trackNumber: 2,
          id: 2,
          duration: 2,
          artists: [
            {
              name: "elissa"
            }
          ]
        }
      ]
    },
    {
      type: "playlist",
      description: "get a Peacful Mind with our playlist",
      id: "4qrimFUz8KFC8W6WrDiDn1",
      image:
        "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
      name: "Peacful Mind",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "omar"
        }
      ],
      tracks: [
        {
          name: "shady",
          trackNumber: 1,
          id: 1,
          duration: 2,
          artists: [
            {
              name: "fayrouz"
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
        },
        {
          name: "sabah w masa",
          trackNumber: 1,
          id: 1,
          duration: 2,
          artists: [
            {
              name: "fayrouz"
            }
          ]
        },
        {
          name: "i will always love you",
          trackNumber: 2,
          id: 2,
          duration: 2,
          artists: [
            {
              name: "whitney huston"
            }
          ]
        }
      ]
    },
    {
      type: "playlist",
      description: "Take A Rest",
      id: "4qrimFUz8KFC8W6WrDiDn2",
      image:
        "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
      name: "Rest",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "shady"
        }
      ],
      tracks: [
        {
          name: "shady",
          trackNumber: 1,
          id: 1,
          duration: 2,
          artists: [
            {
              name: "fayrouz"
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
      ]
    },
    {
      type: "playlist",
      description: "Make a good and Sweet Moments",
      id: "4qrimFUz8KFC8W6WrDiDng",
      image:
        "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
      name: "Sweet Moments",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "me"
        }
      ],
      tracks: [
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
      ]
    },
    {
      type: "playlist",
      description: "Good hours to spend with music",
      id: "4qrimFUz8KFC8W6WrDiDnh",
      image:
        "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
      name: "Sweet Moments",
      totalTracks: 2,
      releaseDate:
        "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
      owner: [
        {
          name: "me"
        }
      ],
      tracks: [
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
    let playlists = this.homePlaylists;
    let mytracks = this.mytracks;
    let categories = this.categories;
    let myPlaylists= this.myPlaylists;
    const { url, method, headers, body } = request;
    console.log(method);
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
        case url.endsWith("/home") && method === "GET":
          return home();
        case url.match(/\/home\/[\S\s]+$/) && method === "GET":
          return seeAll();
        case url.match(
          /\/user\/mailExist\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return checkEmail();
        case url.match(
          /\/user\/forgetPassword\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return forgetPassword();
        case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
          return viewalbumtracks();
        case url.match(/\/albums\/\S+$/) && method === "GET":
          return viewalbum();
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return viewplaylisttracks();
        case url.match(/\/me\/playlists\/\S+\/tracks$/) && method === "GET":
          return viewmytracks();
        case url.match(/\/playlist\/\S+$/) && method === "GET":
          return viewplaylist();
        case url.match(/\/me\/playlists\/\S+$/) && method === "GET":
          return viewmyplaylist();
        case url.match("/me\/playlists") && method === "DELETE":
          return removetrack();
        case url.endsWith("/me\/playlists") && method === "PUT":
          return addtrack();
        case url.endsWith("/me/playlists") && method === "GET":
          return viewmyplaylists();
        case url.endsWith("/me/playlists") && method === "POST":
          return createplaylist();
        case url.endsWith("/me/playlist") && method === "GET":
          return viewHomePlaylists();
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
      }
    }
    
    function createplaylist(){
      const { name } = body;
      const _id = Math.floor(Math.random() * 100000);
      JSON.stringify(_id);
      const type="myplaylist";
      let list={
        type: "myplaylist",
        id:"1sdgiwgdkfcjab",
        image:
          "https://us.123rf.com/450wm/soloviivka/soloviivka1606/soloviivka160600065/59688813-music-note-vector-icon-white-on-black-background.jpg?ver=6",
        name,
        totalTracks: 0,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me"
          }
        ],
        tracks: []
      }
      myPlaylists.push(list);
      console.log(myPlaylists)
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      });
    }

    function viewmyplaylists() {
     /// if(!isLoggedIn()) return unauthorized();
     console.log(myPlaylists);
      return ok(myPlaylists);
    } 


    function viewplaylist() {
      const id = idFromUrl();
      let playlist;
      categories.Home.forEach(cat => {
        if (cat.playlists) {
          cat.playlists.forEach(pl => {
            if (pl.id === id) playlist = pl;
          });
        }
      });
      if (playlist) return ok(playlist);
      return error("no playlist found with this id");
    }
    function viewHomePlaylists() {
      
       return ok(playlists);
    }

    function viewmyplaylist() {
      /// if(!isLoggedIn()) return unauthorized();
      const id=idFromUrl();
      let playlist ;
      myPlaylists.forEach(pl=> {
        if (pl.id === id) playlist = pl;
      } );
      if(playlist) return ok(playlist);
      return error("no album found with this id");
      
    } 

    function viewmytracks() {
      /// if(!isLoggedIn()) return unauthorized();
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let playlist ;
      myPlaylists.forEach(pl=> {
        if (pl.id === id) playlist = pl;
      } );
      if(playlist) return ok(playlist.tracks);
      return error("no album found with this id");
      
    } 

    function viewalbum() {
      const id = idFromUrl();
      let album;
      categories.Home.forEach(cat => {
        if (cat.albums) {
          cat.albums.forEach(pl => {
            if (pl.id === id) album = pl;
          });
        }
      });
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

    function viewalbumtracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let album;
      categories.Home.forEach(cat => {
        if (cat.albums) {
          cat.albums.forEach(pl => {
            if (pl.id === id) album = pl;
          });
        }
      });
      if (album) return ok(album.tracks);
      return error("no album found with this id");
    }

    function removetrack(){
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      });
    }

    function addtrack(){
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      });
    }

    function viewplaylisttracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let playlist;
      categories.Home.forEach(cat => {
        if (cat.playlists) {
          cat.playlists.forEach(pl => {
            if (pl.id === id) playlist = pl;
          });
        }
      });

      console.log(playlist);
      if (playlist) return ok(playlist.tracks);
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
        return ok({ hash });
      }
      return error("no user");
    }

    function resetPassword() {
      const { newPassword, confirmedPassword } = body;
      if (newPassword !== confirmedPassword)
        return error("passwords not match");
      const hash = url.split("=")[1];
      const checkHashExists = hashId.find(h => h.hash == hash);
      if (checkHashExists) {
        const user = users.find(user => user._id === checkHashExists._id);
        user.password = newPassword;
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
        });
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

    function home() {
      return ok(categories);
    }

    function seeAll() {
      const name = idFromUrl()
        .split("%20")
        .join(" ");
      let cat = categories.Home.find(cat => `'${cat.name}'` == name);
      return ok({ category: cat });
    }

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
