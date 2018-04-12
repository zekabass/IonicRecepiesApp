
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

// Data Models
import { Recepie } from '../models/recepieModel';

// Store
import { Store } from "@ngrx/store";
import { AppState } from '../services/state';  

// Actions
import * as RecepieActions from "../actions/recepie.actions";
import * as AppActions from "../actions/app.actions";

import { Observable } from "rxjs/Rx";

enum Categories {
	Dessert ,
	Lunch ,
	Dinner ,
}

@Injectable()

export class MainService {
	public categories = Categories;
	public recepies$: Observable<Recepie[]>;
	public mainState$: Observable<object>;
  
	constructor(
		public http: Http,  
		private store: Store<AppState>, 
	) { 
		this.recepies$ = store.select<any>("recepies");
		this.mainState$ = store.select<any>("mainState");
				
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

}