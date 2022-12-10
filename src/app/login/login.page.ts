import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: "",
    password: ""
  }
  constructor(private database:DatabaseService) { }

  ngOnInit() {
  }

  /**
   * METODO PARA INICIAR SESIÓN EN LA APLICACION
   */
  iniciarSesion(){// METODO INICIAR SESION
    this.database.create('usuarios', this.usuario).then(res => {
      console.log(res);
    }).catch(err => {
      console.log("error en login: ", err);
    });

  }// METODO INICIAR SESION

}
