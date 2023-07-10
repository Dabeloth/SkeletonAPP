import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPage } from './listado.page';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('ListadoPage', () => {
  let component: ListadoPage;
  let fixture: ComponentFixture<ListadoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpClientModule],
    });
    fixture = TestBed.createComponent(ListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
