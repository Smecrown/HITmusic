import { TestBed } from '@angular/core/testing';

import { LetraDadosService } from './letra-dados.service';

describe('LetraDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetraDadosService = TestBed.get(LetraDadosService);
    expect(service).toBeTruthy();
  });
});
