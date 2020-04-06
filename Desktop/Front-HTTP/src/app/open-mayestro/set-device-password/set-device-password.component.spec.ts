import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDevicePasswordComponent } from './set-device-password.component';

describe('SetDevicePasswordComponent', () => {
  let component: SetDevicePasswordComponent;
  let fixture: ComponentFixture<SetDevicePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDevicePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDevicePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
