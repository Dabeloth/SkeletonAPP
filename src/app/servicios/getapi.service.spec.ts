import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetapiService } from './getapi.service';

describe('GetapiService', () => {
  let service: GetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GetapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

