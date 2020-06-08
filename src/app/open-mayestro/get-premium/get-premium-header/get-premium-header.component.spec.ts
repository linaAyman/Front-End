import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPremiumHeaderComponent } from './get-premium-header.component';

describe('GetPremiumHeaderComponent', () => {
  let component: GetPremiumHeaderComponent;
  let fixture: ComponentFixture<GetPremiumHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPremiumHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPremiumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
