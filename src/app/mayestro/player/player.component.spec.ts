import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerComponent } from "./player.component";
import { PlayerService } from "src/app/mayestro/player.service";
import { Observable } from "rxjs";
import "rxjs/add/observable/from";
describe("PlayerComponent", () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let service: PlayerService;

  // beforeEach(() => {
  //   service = new PlayerService(null, null);
  //   component = new PlayerComponent(service, null);
  // });

  // it("should set GetTracksProperty with items returned from the server ", () => {
  //   let urls = [];
  //   spyOn(service, "getTracks").and.callFake(() => {
  //     return Observable.from([urls]);
  //   });
  //   component.ngOnInit();
  //   expect(component.urls).toBe(urls);
  // });
});
