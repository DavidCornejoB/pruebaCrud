import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-formulario-editar-persona',
  templateUrl: './formulario-editar-persona.page.html',
  styleUrls: ['./formulario-editar-persona.page.scss'],
})
export class FormularioEditarPersonaPage implements OnInit {
  id: any;

  persona: any = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  constructor( 
    private activatedRoute: ActivatedRoute,
    private database: DatabaseService          
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

    this.database.getById('personas', this.id).then(res =>{
      res.subscribe(docRef =>{
        this.persona = docRef.data();
        this.persona['id'] = docRef.id;
        console.log(this.persona);
      })
    })

  }

  editarPersona(){
    this.database.update('personas', this.persona['id'], this.persona).then(res => {
      alert("Se modificó a la persona");
    }).catch(err => {
      console.log("Error al modificar: ", err);
    })
  }

}
