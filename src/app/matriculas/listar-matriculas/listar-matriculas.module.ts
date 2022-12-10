import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMatriculasPageRoutingModule } from './listar-matriculas-routing.module';

import { ListarMatriculasPage } from './listar-matriculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMatriculasPageRoutingModule
  ],
  declarations: [ListarMatriculasPage]
})
export class ListarMatriculasPageModule {}
