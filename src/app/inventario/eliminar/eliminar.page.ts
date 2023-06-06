import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SInventarioService } from 'src/app/servicios/sinventario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage {

  inventario = {
    id: 0,
    nombre : "",
    detalle : ""
  }

  constructor(private router:Router, private inventarioServ:SInventarioService) { }

  ionViewWillEnter(){
    this.getInventarioByID(this.getIdFromURL())
    }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }

  getInventarioByID(inventarioID:Number){
    this.inventarioServ.getInventarioByID(inventarioID).subscribe(
      (resp:any) => {
        this.inventario = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          detalle: resp[0].detalle
        }
      }
    )
  }

  eliminarInventario(){
    this.inventarioServ.eliminarInventario(this.inventario).subscribe()
    this.router.navigateByUrl("/listado")
  }

}
