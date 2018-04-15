
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Observable } from "rxjs/Rx";
// Data Models
import { Recepie } from '../models/recepieModel';
import { Categories } from '../models/categories';  
// Store
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
		this.recepies$ = store.select<any>("recepies");
		this.mainState$ = store.select<any>("mainState");
		this.recepies$.subscribe((data)=>{
			this.recepiesCount = data.length;
		})

		this.initialize();
	}

	initialize() {
		/* Fetch recepies data */
		this.getRecepies();
	}

	getRecepies() {
		let path = 'https://demo2194120.mockable.io/receipts';
		let encodedPath = encodeURI(path);
		let timeoutMS = 10000;

		this.http.get(encodedPath)
			.timeout(timeoutMS)
			.map(res => res.json()).subscribe(data => {
				let responseData = data;
				this.store.dispatch(new RecepieActions.AddRecepie(responseData.receipts));			
			},
			err => {
				console.log('error fetching data');
			});
	}

	selectRecepie(recepie){
		this.store.dispatch(new AppActions.SetSelected(recepie));
	}

	deleteRecepie(recepie) {
		this.doConfirm(recepie);
	}

	doConfirm(recepie) {
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

	addNewRecepie(recepie) {
		this.store.dispatch(new RecepieActions.AddRecepie(recepie));
		this.triggerToast( `${recepie.title} Added`, 'success')
	}

	triggerToast(message, cssClass){
		let toast = this.toastCtrl.create({
			message,
			duration: 3000,
			position: 'bottom',
			cssClass
		});
		toast.present();
	}
}