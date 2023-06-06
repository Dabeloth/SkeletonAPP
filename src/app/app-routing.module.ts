import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./inventario/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./inventario/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./inventario/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./inventario/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./inventario/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}