import { TestBed } from '@angular/core/testing';

import { AccountMayestroService } from './account-mayestro.service';

describe('AccountMayestroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountMayestroService = TestBed.get(AccountMayestroService);
    expect(service).toBeTruthy();
  });
});
