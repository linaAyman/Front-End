import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHeaderComponent } from './artist-header.component';

describe('ArtistHeaderComponent', () => {

  var followed: ArtistHeaderComponent;
  beforeEach(()=>{
    followed=new ArtistHeaderComponent();
  });
      it('should change isfollowed vaule to false if input true',()=>{
        followed.isfollowed=true;
        followed.Follow()
        console.log(followed.isfollowed)
        expect(followed.isfollowed).toBeFalsy();
      })
      it('should change isplayed vaule to false if input true',()=>{
        followed.ispalyed=true;
        followed.PLay()
        console.log(followed.ispalyed)
        expect(followed.ispalyed).toBeFalsy();
      })
});
