import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHelpComponent } from './notification-help.component';

describe('NotificationHelpComponent', () => {
  let component: NotificationHelpComponent;
  let fixture: ComponentFixture<NotificationHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
