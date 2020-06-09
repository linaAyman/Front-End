import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingQueueComponent } from './playing-queue.component';

describe('PlayingQueueComponent', () => {
  let component: PlayingQueueComponent;
  let fixture: ComponentFixture<PlayingQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
