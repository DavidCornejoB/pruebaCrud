import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEditarPersonaPageRoutingModule } from './formulario-editar-persona-routing.module';

import { FormularioEditarPersonaPage } from './formulario-editar-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEditarPersonaPageRoutingModule
  ],
  declarations: [FormularioEditarPersonaPage]
})
export class FormularioEditarPersonaPageModule {}
