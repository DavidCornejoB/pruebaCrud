import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosPage } from './vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosPage
  },
  {
    path: 'crear-vehiculo',
    loadChildren: () => import('./crear-vehiculo/crear-vehiculo.module').then( m => m.CrearVehiculoPageModule)
  },
  {
    path: 'editar-vehiculo',
    loadChildren: () => import('./editar-vehiculo/editar-vehiculo.module').then( m => m.EditarVehiculoPageModule)
  },
  {
    path: 'eliminar-vehiculo',
    loadChildren: () => import('./eliminar-vehiculo/eliminar-vehiculo.module').then( m => m.EliminarVehiculoPageModule)
  },
  {
    path: 'listar-vehiculos',
    loadChildren: () => import('./listar-vehiculos/listar-vehiculos.module').then( m => m.ListarVehiculosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosPageRoutingModule {}
