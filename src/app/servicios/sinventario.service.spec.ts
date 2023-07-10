import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SInventarioService } from './sinventario.service';

describe('SInventarioService', () => {
  let service: SInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
