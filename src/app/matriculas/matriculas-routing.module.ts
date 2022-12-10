import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatriculasPage } from './matriculas.page';

const routes: Routes = [
  {
    path: '',
    component: MatriculasPage
  },
  {
    path: 'crear-matricula',
    loadChildren: () => import('./crear-matricula/crear-matricula.module').then( m => m.CrearMatriculaPageModule)
  },
  {
    path: 'editar-matricula',
    loadChildren: () => import('./editar-matricula/editar-matricula.module').then( m => m.EditarMatriculaPageModule)
  },
  {
    path: 'eliminar-matricula',
    loadChildren: () => import('./eliminar-matricula/eliminar-matricula.module').then( m => m.EliminarMatriculaPageModule)
  },
  {
    path: 'listar-matriculas',
    loadChildren: () => import('./listar-matriculas/listar-matriculas.module').then( m => m.ListarMatriculasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculasPageRoutingModule {}
