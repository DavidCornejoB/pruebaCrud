import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMatriculasPage } from './listar-matriculas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMatriculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMatriculasPageRoutingModule {}
