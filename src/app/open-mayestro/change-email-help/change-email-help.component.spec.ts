import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailHelpComponent } from './change-email-help.component';

describe('ChangeEmailHelpComponent', () => {
  let component: ChangeEmailHelpComponent;
  let fixture: ComponentFixture<ChangeEmailHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEmailHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmailHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
