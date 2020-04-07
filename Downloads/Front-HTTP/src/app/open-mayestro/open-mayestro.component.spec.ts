import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMayestroComponent } from './open-mayestro.component';

describe('OpenMayestroComponent', () => {
  let component: OpenMayestroComponent;
  let fixture: ComponentFixture<OpenMayestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMayestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMayestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
