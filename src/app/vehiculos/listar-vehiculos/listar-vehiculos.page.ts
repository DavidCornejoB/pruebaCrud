import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.page.html',
  styleUrls: ['./listar-vehiculos.page.scss'],
})
export class ListarVehiculosPage implements OnInit {

  vehiculos: any = [];
  searchedCar: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getCars().subscribe(res=>{
      console.log("Res", res)
      this.vehiculos = res;
    });
  }

  getCars(){
    return this.http
    .get("assets/files/datos.json")
    .pipe(
      map((res:any) =>{
        return res.vehiculos;
      })
    )
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Función en desarrollo",
      message: "Esta función aun se encuentra en desarrollo.",
      buttons: ["Ok"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
