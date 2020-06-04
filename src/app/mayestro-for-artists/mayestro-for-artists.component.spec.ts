import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayestroForArtistsComponent } from './mayestro-for-artists.component';

describe('MayestroForArtistsComponent', () => {
  let component: MayestroForArtistsComponent;
  let fixture: ComponentFixture<MayestroForArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayestroForArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayestroForArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
