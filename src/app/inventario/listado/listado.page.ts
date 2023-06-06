import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SInventarioService } from 'src/app/servicios/sinventario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage  {

  inventarios = []

  constructor(private inventariosServ: SInventarioService, private LoadingCtrL:LoadingController) { }

  ionViewWillEnter(){
    this.loadInventarios()
  }

  async loadInventarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtrL.create({
       message: "Cargando...",
       spinner: "bubbles"
      }
    );
    await loading.present();

    this.inventariosServ.listarInventario().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.inventarios = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )

  }

}
