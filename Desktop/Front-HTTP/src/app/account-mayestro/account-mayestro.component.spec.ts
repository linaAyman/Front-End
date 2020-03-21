import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMayestroComponent } from './account-mayestro.component';

describe('AccountMayestroComponent', () => {
  let component: AccountMayestroComponent;
  let fixture: ComponentFixture<AccountMayestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMayestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMayestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
