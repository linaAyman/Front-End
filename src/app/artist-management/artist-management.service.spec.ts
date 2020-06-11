import { TestBed } from '@angular/core/testing';

import { ArtistManagementService } from './artist-management.service';

describe('ArtistManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistManagementService = TestBed.get(ArtistManagementService);
    expect(service).toBeTruthy();
  });
});
