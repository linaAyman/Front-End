import { TestBed } from '@angular/core/testing';

import { MystroService } from './mystro.service';

describe('MystroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MystroService = TestBed.get(MystroService);
    expect(service).toBeTruthy();
  });
});
