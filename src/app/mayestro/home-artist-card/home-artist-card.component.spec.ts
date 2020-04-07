import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtistCardComponent } from './home-artist-card.component';

describe('HomeArtistCardComponent', () => {
  let component: HomeArtistCardComponent;
  let fixture: ComponentFixture<HomeArtistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
