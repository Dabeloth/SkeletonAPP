import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInventario } from 'src/app/interfaces/iinventario';
import { SInventarioService } from 'src/app/servicios/sinventario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newInventario:IInventario = {
    nombre: "Inventario nuevo",
    detalle: "Descripción nueva"
  }

  constructor(
    private inventarioServ:SInventarioService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  crearInventario(){
    this.inventarioServ.crearInventario(this.newInventario).subscribe()
    this.router.navigateByUrl("/listado")
  }

}
