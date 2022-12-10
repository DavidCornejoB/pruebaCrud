import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarPersonaPageRoutingModule } from './eliminar-persona-routing.module';

import { EliminarPersonaPage } from './eliminar-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarPersonaPageRoutingModule
  ],
  declarations: [EliminarPersonaPage]
})
export class EliminarPersonaPageModule {}
