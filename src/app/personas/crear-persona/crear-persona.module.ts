import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPersonaPageRoutingModule } from './crear-persona-routing.module';

import { CrearPersonaPage } from './crear-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearPersonaPageRoutingModule
  ],
  declarations: [CrearPersonaPage]
})
export class CrearPersonaPageModule {}
