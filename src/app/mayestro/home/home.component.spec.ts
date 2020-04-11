import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MayestroService } from '../mayestro.service';
import { Observable } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mystro:MayestroService;

  beforeEach(async(() => {
   
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mystro=new MayestroService(null,null);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component=new HomeComponent(mystro);
    fixture.detectChanges();
  });

  it('should set mystro property with items returned from te server', () => {
    let homeObject={Home:[{name:"",id:"",url:"",description:"",
      playlists:[{name:'',id:'',image:"",description:"",url:"",type:""}]},
      {name:"",id:"",url:"",description:"",
      albums:[{name:'',id:'',image:"",artists:[{name:"",id:""}],url:"",type:""}]},
      {name:"",id:"",url:"",description:"",
      artists:[{name:'',id:'',image:"",url:"",type:""}]},
      ]}
    spyOn(mystro,'getHome').and.callFake(()=>{
      return Observable.from([homeObject]);
    })
    
    component.ngOnInit();

    expect(component.categories.length).toBeGreaterThan(0);
  });
});
