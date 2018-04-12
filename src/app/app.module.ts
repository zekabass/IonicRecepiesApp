import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecepieView } from '../pages/recepie/recepie';
import { AddRecepie } from '../pages/addRecepie/add';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './../reducers/wrapper';

// Services
import { MainService } from '../services/main.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecepieView,
    AddRecepie
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot( ROOT_REDUCER )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecepieView,
    AddRecepie
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainService
  ]
})
export class AppModule {}
