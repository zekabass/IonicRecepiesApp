
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Observable } from "rxjs/Rx";

/* Data Models */
import { Recepie } from '../models/recepieModel';
import { Categories } from '../models/categories';  
/* Store */
import { Store } from "@ngrx/store";
import { AppState } from '../services/state';  
/* Actions */
import * as RecepieActions from "../actions/recepie.actions";
import * as AppActions from "../actions/app.actions";


@Injectable()

export class MainService {
	public categories = Categories;
	public recepies$: Observable<Recepie[]>;
	public mainState$: Observable<object>;
	public recepiesCount:number;
  
	constructor(
		public http: Http,  
		private store: Store<AppState>, 
		private toastCtrl: ToastController,
		private alertCtrl: AlertController
	) { 
		/* Get recipes array form the app state */
		this.recepies$ = store.select<any>("recepies");

		/* Get mainState object form the app state */
		this.mainState$ = store.select<any>("mainState");

		/* Subscribe to the recipes observable */
		this.recepies$.subscribe((data)=>{
			this.recepiesCount = data.length;
		})

		this.initialize();
	}

	initialize() {
		/* Fetch recepies data */
		this.getRecepies();
	}

	/* Get recipes data from the server */
	getRecepies() {
		let path = 'https://demo2194120.mockable.io/receipts';
		let encodedPath = encodeURI(path);
		let timeoutMS = 10000;

		this.http.get(encodedPath)
			.timeout(timeoutMS)
			.map(res => res.json()).subscribe(data => {
				let responseData = data;

				/* Add recipes fromt the server to the app state */
				this.store.dispatch(new RecepieActions.AddRecepie(responseData.receipts));			
			},
			err => {
				console.log('error fetching data');
			});
	}

	/**
    * Save selected recipe to the app state
    * @param recepie - Recepie object.
    */
	selectRecepie(recepie:Recepie){
		this.store.dispatch(new AppActions.SetSelected(recepie));
	}

	/**
    * Delete recipe from the app state
    * @param recepie - Recepie object.
    */
	deleteRecepie(recepie:Recepie) {
		/* Open confirmation window */
		this.doConfirm(recepie);
	}

	/**
    * If user confirms remove recipe from the states
    * @param recepie - Recepie object.
    */
	doConfirm(recepie:Recepie) {
		let alert = this.alertCtrl.create({
			title: 'Delete Recipe?',
			message: `Are you shure you want to delete ${recepie.title}?`,
			buttons: [
				{
					text: 'Yes',
					handler: () => {
						this.store.dispatch(new RecepieActions.RemoveRecepie(recepie.id));
						this.triggerToast( `${recepie.title} was deleted`, 'danger')
					}
				},
				{
					text: 'No',
					handler: () => {}
				}
			]
		});
		alert.present();
	}

	/**
    * Method that add new given recipe object to the app state
    * @param recepie - Recepie object.
    */
	addNewRecepie(recepie:Recepie) {
		this.store.dispatch(new RecepieActions.AddRecepie(recepie));
		this.triggerToast( `${recepie.title} Added`, 'success')
	}

	/**
    * Method that shows app toast
    * @param message - Message text to show.
	* @param cssClass - Css Class to apply to the toast container.
    */
	triggerToast(message:string, cssClass:string){
		let toast = this.toastCtrl.create({
			message,
			duration: 3000,
			position: 'bottom',
			cssClass
		});
		toast.present();
	}
}