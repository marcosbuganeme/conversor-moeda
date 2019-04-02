import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve criar uma moeda service', () => {
    const service: MoedaService = TestBed.get(MoedaService);
    expect(service).toBeTruthy();
  });
});
