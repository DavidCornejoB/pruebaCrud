import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMatriculaPage } from './crear-matricula.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMatriculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMatriculaPageRoutingModule {}
