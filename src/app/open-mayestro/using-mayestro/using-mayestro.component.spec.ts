import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingMayestroComponent } from './using-mayestro.component';

describe('UsingMayestroComponent', () => {
  let component: UsingMayestroComponent;
  let fixture: ComponentFixture<UsingMayestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingMayestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingMayestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
