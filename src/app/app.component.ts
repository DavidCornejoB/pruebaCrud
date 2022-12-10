import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Personas', url: 'personas', icon: 'people' },
    { title: 'Vehiculos', url: 'vehiculos', icon: 'car' },
    { title: 'Matrículas', url: 'matriculas', icon: 'document' },
    { title: 'Escaner', url: 'scanner', icon: 'barcode' },
    { title: 'Salir', url: 'login', icon: 'exit' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
