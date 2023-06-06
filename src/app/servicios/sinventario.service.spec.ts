import { TestBed } from '@angular/core/testing';

import { SInventarioService } from './sinventario.service';

describe('SInventarioService', () => {
  let service: SInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
