import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarPersonaPage } from './eliminar-persona.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarPersonaPageRoutingModule {}
