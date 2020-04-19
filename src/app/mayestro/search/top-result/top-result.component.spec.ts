import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopResultComponent } from './top-result.component';

describe('TopResultComponent', () => {
  let component: TopResultComponent;
  let fixture: ComponentFixture<TopResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
