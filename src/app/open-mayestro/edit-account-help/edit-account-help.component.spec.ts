import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountHelpComponent } from './edit-account-help.component';

describe('EditAccountHelpComponent', () => {
  let component: EditAccountHelpComponent;
  let fixture: ComponentFixture<EditAccountHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
