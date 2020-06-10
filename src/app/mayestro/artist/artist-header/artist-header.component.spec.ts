import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHeaderComponent } from './artist-header.component';

describe('ArtistHeaderComponent', () => {

  var followed: ArtistHeaderComponent;
  beforeEach(()=>{
    var followed: ArtistHeaderComponent;
  });
      it('should change isfollowed vaule to false if input true',()=>{
        followed.isFollowed=true;
        followed.follow()
        expect(followed.isFollowed).toBeFalsy();
      })
      it('should change isplayed vaule to false if input true',()=>{
        followed.isPalyed=true;
        followed.pLay()
        expect(followed.isPalyed).toBeFalsy();
      })
});
