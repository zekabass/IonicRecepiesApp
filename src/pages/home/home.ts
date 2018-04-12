import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecepieView } from '../recepie/recepie';
import { AddRecepie } from '../addRecepie/add';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { Observable } from "rxjs/Rx";

// Data Models
import { Recepie } from '../../models/recepieModel';

// Store
import { Store } from "@ngrx/store";
import { AppState } from '../../services/state';  

// Actions
import * as RecepieActions from "../../actions/recepie.actions";
import * as AppActions from "../../actions/app.actions";

import { ToastController } from 'ionic-angular';

enum Categories {
	Dessert ,
	Lunch ,
	Dinner ,
}

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

	shouldShowCancel:boolean = false;
	searchText:string;

	public recepies$: Observable<Recepie[]>;
	public mainState$: Observable<object>;
	public categories = Categories;

	constructor(	
		public navCtrl: NavController, 
		public http: Http,  
		private store: Store<AppState>, 
		private toastCtrl: ToastController
	) {
		this.recepies$ = store.select<any>("recepies");
		this.mainState$ = store.select<any>("mainState");
		 
		this.mainState$.subscribe(data => console.log(data))
	}

	ngOnInit() {
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

	onCancel() {

	}

	onInput(event) {

	}

	showCancelButton(event) {

	}

	changePage(page, data){
		switch(page) {
			case 'recepie-view':
				this.store.dispatch(new AppActions.SetSelected(data));
				this.navCtrl.push(RecepieView)
				break;
			case 'add-recepie':
				this.navCtrl.push(AddRecepie)
				break;
		}	
	}

	removeRecepie(recepie){
		this.store.dispatch(new RecepieActions.RemoveRecepie(recepie.id));
		let toast = this.toastCtrl.create({
			message: `${recepie.title} was deleted`,
			duration: 3000,
			position: 'bottom'
		});
		toast.present();
	}

}
