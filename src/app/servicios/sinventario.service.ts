import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInventarios } from '../interfaces/iinventarios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IInventario } from '../interfaces/iinventario';

@Injectable({
  providedIn: 'root'
})
export class SInventarioService {

  constructor(private http:HttpClient) { }

  listarInventario():Observable<IInventarios>{
    return this.http.get<IInventarios>(`${environment.apiURL}/inventarios`)
  }

  crearInventario(newInventario:IInventario):Observable<IInventario>{
    return this.http.post<IInventario>(`${environment.apiURL}/inventarios`, newInventario)
  }

  getInventarioByID(id:Number):Observable<IInventarios>{
    return this.http.get<IInventarios>(`${environment.apiURL}/inventarios/?id=${id}`)
  }

  actualizarInventario(inventario:any):Observable<IInventarios>{
    return this.http.put<IInventarios>(`${environment.apiURL}/inventarios/${inventario.id}`, inventario)
  }

  eliminarInventario(inventario:any):Observable<IInventarios>{
    return this.http.delete<IInventarios>(`${environment.apiURL}/inventarios/${inventario.id}`)
  }

}
