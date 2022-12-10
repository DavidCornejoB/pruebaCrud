import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { environment } from '../environments/environment';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from "@angular/fire/auth";

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, HttpClientModule, 
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig)],

  providers: [BarcodeScanner, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
