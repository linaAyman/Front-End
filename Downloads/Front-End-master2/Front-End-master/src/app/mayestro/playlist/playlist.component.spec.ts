import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaylistComponent } from "./playlist.component";
import { MayestroService } from "../mayestro.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

describe("PlaylistComponent", () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let service: MayestroService;

  beforeEach(() => {
    service = new MayestroService(null, null);
    component = new PlaylistComponent(service, null);
  });
  // it("put things in component", () => {
  //   spyOn(service, "getPlaylist").and.callFake(() => {
  //     return Observable.from([1, 2, 3]);
  //   });
  //   component.ngOnInit();

  //   expect(component.album.length).toBeGreaterThan(0);
  // });
});
