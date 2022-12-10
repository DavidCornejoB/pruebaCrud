import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMatriculaPage } from './editar-matricula.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMatriculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMatriculaPageRoutingModule {}
