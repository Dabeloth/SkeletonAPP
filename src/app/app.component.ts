import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Iniciar Sesión', url: 'login', icon: 'log-in' },
    { title: 'Crear Cuenta', url: 'register', icon: 'person-add' },
    { title: 'Listado', url: 'listado', icon: 'folder-open' },
  ];
  public labels = ['Promociones', 'Descuentos', 'Descuentos-Flash'];
  constructor() {}
}
