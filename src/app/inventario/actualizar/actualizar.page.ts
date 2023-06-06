import { Component, OnInit } from '@angular/core';
import { SInventarioService } from 'src/app/servicios/sinventario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage  {

  inventario = {
    id: 0,
    nombre: "",
    detalle: ""
  }

  constructor(private inventarioServ:SInventarioService, private router:Router) { }

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

  updateInventario(){
    this.inventarioServ.actualizarInventario(this.inventario).subscribe()
    this.router.navigateByUrl("/listado")
  }

}
