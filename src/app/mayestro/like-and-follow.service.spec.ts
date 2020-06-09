import { TestBed } from '@angular/core/testing';

import { LikeAndFollowService } from './like-and-follow.service';

describe('LikeAndFollowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikeAndFollowService = TestBed.get(LikeAndFollowService);
    expect(service).toBeTruthy();
  });
});
