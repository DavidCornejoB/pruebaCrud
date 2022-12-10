import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMatriculaPageRoutingModule } from './crear-matricula-routing.module';

import { CrearMatriculaPage } from './crear-matricula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMatriculaPageRoutingModule
  ],
  declarations: [CrearMatriculaPage]
})
export class CrearMatriculaPageModule {}
