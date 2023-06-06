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
    { title: 'Agregar', url: 'agregar', icon: 'save' },
    { title: 'Eliminar', url: 'eliminar/:id', icon: 'trash' },
    { title: 'Actualizar', url: 'actualizar/:id', icon: 'folder-open' },
    { title: 'Detalle', url: 'detalle/:id', icon: 'folder-open' },
    { title: 'Listado', url: 'listado', icon: 'folder-open' },
    { title: 'Agregar Tarea', url: 'inicio', icon: 'aperture' },
  ];
  public labels = ['Promociones', 'Descuentos', 'Descuentos-Flash'];
  constructor() {}
}
