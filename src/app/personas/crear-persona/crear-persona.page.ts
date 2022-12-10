import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.page.html',
  styleUrls: ['./crear-persona.page.scss'],
})

export class CrearPersonaPage implements OnInit {

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  constructor(
    private router: Router,
    private database: DatabaseService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  /**
   * METODO PARA DESPLEGAR ALERTA DE GUARDAR PERSONAS
   */
  async alertaGuardarPersona(){//INICIO MÉTODO ALERTAGUARDARPERSONA
    const alert = await this.alertController.create({
      header: "Insertar Nueva Persona",
      message: "Está seguro de que desea insertar una nueva persona con esos datos?",
      buttons: [
        {
          text: 'Si',
          handler: () => {//SI
            console.log("Se inserta persona");
            this.database.create("personas", this.persona).then(res => {
              console.log(res);
            }).catch(err => {
              console.log("error en registro de persona: ", err);
            });
          }//SI
        },
        {
          text: 'No',
          handler: () => {
            console.log("No se inserta persona");
          }
        }
    ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }//FIN METODO ALERTAGUARDARPERSONA

}
