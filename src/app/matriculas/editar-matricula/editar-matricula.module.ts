import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMatriculaPageRoutingModule } from './editar-matricula-routing.module';

import { EditarMatriculaPage } from './editar-matricula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMatriculaPageRoutingModule
  ],
  declarations: [EditarMatriculaPage]
})
export class EditarMatriculaPageModule {}
