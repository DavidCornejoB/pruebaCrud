import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.page.html',
  styleUrls: ['./listar-personas.page.scss'],
})
export class ListarPersonasPage implements OnInit {

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  //users: any = []; //PARA JSON
  searchedUser: any;
  listaPersonas: any = []; //PARA FIREBASE

  constructor(
    private router: Router,
    private database: DatabaseService,
    private http: HttpClient) { }

  ngOnInit() {//METODO NGONINIT

    // DESDE ARCHIVO .JSON:
    /*
    this.getUsers().subscribe(res=>{
      console.log("Res", res)
      this.users = res;
    });
    */

    //DESDE FIREBASE:
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
  }//METODO NGONINIT

  //METODO GET USERS DESDE JSON
  /*getUsers(){
    return this.http
    .get("assets/files/datos.json")
    .pipe(
      map((res:any) =>{
        return res.personas;
      })
    )
  }*/

  //METODO PARA BUSCAR USUARIOS
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