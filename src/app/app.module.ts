import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecepieView } from '../pages/recepie/recepie';
import { AddRecepie } from '../pages/addRecepie/add';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './../reducers/wrapper';

/* Components */
import { Card } from '../app/components/card.component';

/* Services */ 
import { MainService } from '../services/main.service';

/* Ngrx dev tool imports*/
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Pipes */ 
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { ObjKeys } from '../pipes/objKeys.pipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecepieView,
    AddRecepie,
    FilterPipe,
    SortPipe,
    ObjKeys,
    Card
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot( ROOT_REDUCER ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    }),
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
