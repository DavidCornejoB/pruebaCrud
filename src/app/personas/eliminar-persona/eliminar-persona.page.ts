import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.page.html',
  styleUrls: ['./eliminar-persona.page.scss'],
})
export class EliminarPersonaPage implements OnInit {

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  users: any = []; //PARA JSON
  listaPersonas = []; //PARA FIREBASE

  constructor(
    private database: DatabaseService
  ) { }

  ngOnInit() {

    //DESDE FIREBASE:
    this.database.getAll('personas').then(firebaseResponse => {
      firebaseResponse.subscribe(listaPersonasRef => {

        this.listaPersonas = listaPersonasRef.map(personaRef =>{
          let persona = personaRef.payload.doc.data();
          persona['id'] = personaRef.payload.doc.id;
          return persona;
        })
        console.log(this.listaPersonas);
      })
    })
  }

  eliminarPersona(id){
    this.database.delete('personas', id).then(res =>{
      alert("Se eliminó persona");
    }).catch(err =>{
      console.log("Error al eliminar persona: ", err);
    })
  }

}
