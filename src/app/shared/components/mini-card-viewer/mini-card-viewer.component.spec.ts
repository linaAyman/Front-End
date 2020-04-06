import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardViewerComponent } from './mini-card-viewer.component';

describe('MiniCardViewerComponent', () => {
  let component: MiniCardViewerComponent;
  let fixture: ComponentFixture<MiniCardViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCardViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
