import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEditarPersonaPage } from './formulario-editar-persona.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEditarPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEditarPersonaPageRoutingModule {}
