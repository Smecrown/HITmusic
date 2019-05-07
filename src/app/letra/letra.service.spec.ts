import { TestBed } from '@angular/core/testing';

import { LetraService } from './letra.service';

describe('LetraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetraService = TestBed.get(LetraService);
    expect(service).toBeTruthy();
  });
});
