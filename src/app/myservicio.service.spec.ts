import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MyservicioService } from './myservicio.service';
import { HttpClient } from '@angular/common/http';
describe('MyservicioService', () => {
  let service: MyservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpClientModule ],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
