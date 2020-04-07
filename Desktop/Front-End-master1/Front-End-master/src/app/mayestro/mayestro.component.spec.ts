import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayestroComponent } from './mayestro.component';

describe('MayestroComponent', () => {
  let component: MayestroComponent;
  let fixture: ComponentFixture<MayestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
