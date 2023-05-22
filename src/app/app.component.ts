import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Categorias', url: '/folder/Categorias', icon: 'pricetags' },
    { title: 'Productos', url: '/folder/Productos', icon: 'basket' },
    { title: 'Carro', url: '/folder/Carro', icon: 'cart' },
    { title: 'Mis Datos', url: '/folder/Datos', icon: 'person' },
    { title: 'Login', url: '/folder/Login', icon: 'log-in' },
  ];
  public labels = ['Promociones', 'Descuentos', 'Descuentos-Flash'];
  constructor() {}
}
