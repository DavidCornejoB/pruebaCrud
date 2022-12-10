import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.page.html',
  styleUrls: ['./editar-persona.page.scss'],
})
export class EditarPersonaPage implements OnInit {

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  searchedUser: any;
  listaPersonas: any = [];

  constructor(private database: DatabaseService) { }

  ngOnInit() {//METODO ONINIT

    this.database.getAll('personas').then(firebaseResponse => {
      firebaseResponse.subscribe(listaPersonasRef => {

        this.listaPersonas = listaPersonasRef.map(personaRef =>{
          let persona = personaRef.payload.doc.data();
          persona['id'] = personaRef.payload.doc.id;
          return persona;
        })
        console.log(this.listaPersonas);
        this.searchedUser = this.listaPersonas;
      })
    })

  }//METODO ONINIT

  searchCustomer(event){
    const text = event.target.value;
    this.searchedUser = this.listaPersonas;
    if (text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((persona: any) =>{
        return (persona.apellidos.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
