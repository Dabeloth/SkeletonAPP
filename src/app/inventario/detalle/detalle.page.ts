import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SInventarioService } from 'src/app/servicios/sinventario.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {

  inventario = {
    id: 0,
    nombre: "inventario",
    detalle: "descripción del detalle"
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

}
