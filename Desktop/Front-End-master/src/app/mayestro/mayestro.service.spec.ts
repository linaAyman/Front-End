import { TestBed } from '@angular/core/testing';

import { MayestroService } from './mayestro.service';

describe('MayestroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MayestroService = TestBed.get(MayestroService);
    expect(service).toBeTruthy();
  });
});
