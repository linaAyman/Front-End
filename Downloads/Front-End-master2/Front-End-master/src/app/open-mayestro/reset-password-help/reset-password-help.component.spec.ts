import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordHelpComponent } from './reset-password-help.component';

describe('ResetPasswordHelpComponent', () => {
  let component: ResetPasswordHelpComponent;
  let fixture: ComponentFixture<ResetPasswordHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
