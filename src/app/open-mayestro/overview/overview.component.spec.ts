import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OverviewComponent } from "./overview.component";
import { UserService } from "../user.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
describe("OverviewComponent", () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null, null);
    component = new OverviewComponent(service);
  });

  // it("put things in component", () => {
  //   spyOn(service, "getUsername").and.callFake(() => {
  //     return Observable.from([1, 2, 3]);
  //   });
  //   component.ngOnInit();

  //   expect(component.username.length).toBeGreaterThan(0);
  // });
});
