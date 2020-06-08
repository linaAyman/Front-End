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
  playlists: any;
  mytracks: any;
  categories: any;
  constructor() {
    this.categories = {
      Home: [
        {
          playlists: [
            {
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnd",
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
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDne",
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
              description: "get a Peacful Mind with our playlist",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "Peacful Mind",
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
              description: "Take A Rest",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Rest",
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
    let playlists = this.playlists;
    let mytracks = this.mytracks;
    let categories = this.categories;

    const { url, method, headers, body } = request;

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
        case url.endsWith("/search") && method == "GET":
          return browse();
        case url.endsWith("/search") && method == "GET":
          return recentSearch();
        case url.match(/\/search\/\S+$/) && method == "GET":
          return search();
        case url.match(
          /\/user\/mailExist\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return checkEmail();
        case url.match(
          /\/user\/forgetPassword\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return forgetPassword();
        case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
          return viewtracks();
        case url.match(/\/albums\/\S+$/) && method === "GET":
          return viewalbum();
        case url.match(/\/artists\/\S+\/about$/) && method === "GET":
          return viewaboutartist();
        case url.match(/\/artists\/\S+\/top-tracks$/) && method === "GET":
          return artisttop();
        case url.match(/\/artists\/\S+\/albums$/) && method === "GET":
          return artistAlbums();
        case url.match(/\/artists\/\S+\/singles$/) && method === "GET":
          return artistSingles();
        case url.match(/\/artists\/\S+\/related-artists$/) && method === "GET":
          return relatedartists();
        case url.match(/\/artists\/\S+$/) && method === "GET":
          return viewartist();
        case url.match(/\/users\/\S+\/playlists$/) && method === "GET":
          return getUserPLaylist();
        case url.match(/\/users\/\S+$/) && method === "GET":
          return getUser();
         
        // case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return viewtracks();
        case url.match(/\/playlist\/\S+$/) && method === "GET":
          return viewplaylist();
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

    function viewtracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      if (type === "albums") {
        const album = albums.find(al => al._id === id);
        if (album) return ok(album.tracks);
        return error("no album found with this idd");
      } else {
        const playlist = playlists.find(al => al._id === id);
        if (playlist) return ok(playlist.tracks);
        return error("no playlist found with this idd");
      }
    }

    function viewuser() {
      //if(!isLoggedIn()) return unauthorized();
      return ok(users[0]);
    }

    function browse(){
      let browse ={
          playlists: [
            {
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnd",
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
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDne",
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
            }],
            albums: [
              {
                totalTracks: 2,
                releaseDate:
                  "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
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
        Browse: [{
        color: 'rgb(245, 155, 35)',
        name: "Podcast",
        cardUrl: 'hanshof',
        imgUrl: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg"
        },
        {
        color: 'rgb(75, 145, 125)',
        name: "Charts",
        cardUrl: 'hanshof',
        imgUrl: "https://t.scdn.co/images/4b7472015a274eadbc00119f5141e548.jpeg"
        },
        {
            color: 'rgb(180, 155, 200)',
            name: "Discover",
            cardUrl: 'hanshof',
            imgUrl: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"
        },
        {
            color: 'rgb(160,195,210)',
            name: "Made For You",
            cardUrl: 'hanshof',
            imgUrl: "https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg"
        },
        {
            color: 'rgb(160,195,210)',
            name: "New Releases",
            cardUrl: 'hanshof',
            imgUrl: "https://t.scdn.co/images/acc7b5d7b1264d0593ec05c020d0a689.jpeg"
        },
        {
            color: 'rgb(245, 155, 35)',
            name: "Podcast",
            cardUrl: 'hanshof',
            imgUrl: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg"
        },
        {
            color: 'rgb(245, 155, 35)',
            name: "Podcast",
            cardUrl: 'hanshof',
            imgUrl: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg"
        },
            
    
    ]
     
    };
    return ok(browse);
    }

    function search(){
      let text=idFromUrl()
      let artists=[];
      let albums=[];
      let playlists=[];
      categories.Home.forEach(el=>{
        if(el["playlists"] && playlists.length<6){
          el.playlists.forEach(pl=>{
            if(pl.name.startsWith(text) || pl.name.startsWith(text.toUpperCase())) playlists.push(pl);
          })
        }
        if(el["albums"] && albums.length<6){
          el.albums.forEach(al=>{
            if(al.name.startsWith(text) || al.name.startsWith(text.toUpperCase()) || al.name==text) albums.push(al);
          })
        }
        if(el["artists"] && artists.length<6){
          el.artists.forEach(al=>{
            if(al.name.startsWith(text) || al.name.startsWith(text.toUpperCase()) || al.name==text) artists.push(al);
          })
        }
      })
      let searchResult={topResult:[],playlists:[],albums:[],artists:[]};
      searchResult["topResult"]=albums[0];
      searchResult["playlists"]=playlists;
      searchResult["albums"]=albums;
      searchResult["artists"]=artists;
      return ok(searchResult);
    }

    function recentSearch(){
      let recent={
        playlists: [
          {
            type: "playlist",
            description: "Some Comfort Tracks to relax",
            id: "4qrimFUz8KFC8W6WrDiDnd",
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
            description: "Relax your Mind",
            id: "4qrimFUz8KFC8W6WrDiDne",
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
          }],
          albums: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
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
          ]
        }
        return ok(recent);
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

    function viewartist(){
      const artists={
          id: "3xl0OvcSlc9Mwe5ToaFtD3",
          type: "Artist",
          name: "Amr Diab",
          isFollowed: true,
          image: "https://i.scdn.co/image/5ac491f3bf789a7a1491b20de5e83006e0ef2ba0"
        }    
      console.log("viewArtist")
      return ok(artists) ; 

    }
    function viewaboutartist(){
      const info={about : "Amr Diab is a pop singer and songwriter from Egypt. He has won a record seven World Music Awards to date, and is considered the all-time best-selling musical artist from the Middle East. He is the creator of his own genre; he calls his meld of Arabic harmony and Western rhythms 'Mediterranean Music,' and it has influenced many subsequent artists."} 
      console.log("viewAboutArtist")
      return ok(info);
    }

    function artisttop() {
      const artistTracks={
        tracks:[{
          image:"https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
          duration:5,
          name:"Nour Eloyon",
          isLiked: true,
          id:"123",
          Url:"lmskmdlkm"
        },
        {
          image:"https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
          duration:4,
          name:"Kamaren",
          isLiked: true,
          id:"123",
          Url:"lmskmdlkm"
        },{
          image:"https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
          duration:3,
          name:"Tamali maak",
          isLiked: true,
          id:"123",
          Url:"lmskmdlkm"
        },
        {
          image:"https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
          duration:2,
          name:"Bayen Habeit",
          isLiked: true,
          id:"123",
          Url:"lmskmdlkm"
        },
        {
          image:"https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
          duration:4,
          name:"Alby Etmannah",
          isLiked: true,
          id:"123",
          Url:"lmskmdlkm"
        }]
      }
      return ok(artistTracks)
    }

    function artistAlbums(){
      const artistAlbums={
        albums:[
          {
          id: "1234",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "Sahran",
          totalTracks: 10
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla1",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla2",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla3",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla4",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla5",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla6",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla7",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla8",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla9",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla10",
          totalTracks: 8
          },
          {
          id: "1235",
          image: "https://i1.sndcdn.com/artworks-000685259938-at3rot-t500x500.jpg",
          name: "BlaBla11",
          totalTracks: 8
          }
        ]
      }
      return ok(artistAlbums)
    }

    function artistSingles(){
      const singles={
        tracks: [
          {
            name: "name 1",
            id: "1234",
            image: "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
            duration: 5,
            isLiked: true
          },
          {
            name: "name 2",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 3",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 4",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 5",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 6",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 7",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 8",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 9",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 10",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 11",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          },
          {
            name: "name 12",
            id: "124",
            image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true
          }
        ]
      }
      return ok(singles)
    }

    function relatedartists(){
      const related={
        artists: [
          {
            name: "Tamer",
            id: "548",
            image: "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist"
          },
          {
          name: "Assala",
            id: "48",
            image: "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
            type: "artist"
          }, 
          {
            name: "Tamer",
            id: "548",
            image: "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist"
          },  
          {
            name: "Assala",
              id: "48",
              image: "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
              type: "artist"
          },
          {
            name: "Tamer",
            id: "548",
            image: "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist"
          },  
          {
            name: "Assala",
              id: "48",
              image: "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
              type: "artist"
          },
          {
            name: "Tamer",
            id: "548",
            image: "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist"
          },
          {
            name: "Assala",
              id: "48",
              image: "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
              type: "artist"
          },
          {
            name: "Tamer",
            id: "548",
            image: "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist"
          },
        ]
      }
      return ok(related)
    }

    function getUser(){
      const user ={
        followersCount: 0,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8oDIkGmHQwugDVW0WKOvBjJdfJGDIgr7Ys7Y-18BDflD3DfoI&usqp=CAU",
        isPremium: true,
        _id: "123",
        name: "mohsen",
  
      }
      return ok (user)
    }
    
    function getUserPLaylist(){
      const userplaylist={
        playlists: [
          {
            name: "playList1",
            id: "1",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla",
            followersCount: 30
          },
          {
            name: "playList2",
            id: "2",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla2",
            followersCount: 30
          },
          {
            name: "playList3",
            id: "3",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla3",
            followersCount: 30
          },
          {
            name: "playList4",
            id: "4",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla4",
            followersCount: 30
          },
          {
            name: "playList5",
            id: "5",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla5",
            followersCount: 30
          },
          {
            name: "playList6",
            id: "6",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla6",
            followersCount: 30
          },
          {
            name: "playList7",
            id: "7",
            image: "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "samir",
            description: "blabla7",
            followersCount: 30
          }
        ],
        totalPlaylists: 7
      }
      return ok(userplaylist)
    }
    // helper functions

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