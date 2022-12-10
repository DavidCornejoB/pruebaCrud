import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasPage } from './personas.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasPage
  },
  {
    path: 'crear-persona',
    loadChildren: () => import('./crear-persona/crear-persona.module').then( m => m.CrearPersonaPageModule)
  },
  {
    path: 'editar-persona',
    loadChildren: () => import('./editar-persona/editar-persona.module').then( m => m.EditarPersonaPageModule)
  },
  {
    path: 'listar-personas',
    loadChildren: () => import('./listar-personas/listar-personas.module').then( m => m.ListarPersonasPageModule)
  },
  {
    path: 'eliminar-persona',
    loadChildren: () => import('./eliminar-persona/eliminar-persona.module').then( m => m.EliminarPersonaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasPageRoutingModule {}
