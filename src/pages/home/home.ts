import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecepieView } from '../recepie/recepie';
import { AddRecepie } from '../addRecepie/add';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


import { Recepie } from '../../models/recepieModel';

import { Store } from "@ngrx/store";
import * as RecepieActions from "../../actions/recepie.actions";
import { AppState } from '../../services/state';  
import { Observable } from "rxjs/Observable";

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

	public recepies: Recepie[];
	public state$: Observable<AppState>;
	public categories = Categories;

	constructor(	
		public navCtrl: NavController, 
		public http: Http,  
		private store: Store<AppState>, 
	) {
		this.state$ = this.store.select(state => state);
		
		// this.store.select(state => state).subscribe(data => console.log(data))
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

				this.store.dispatch(new RecepieActions.InitialData(responseData.receipts));
				
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
				this.store.dispatch(new RecepieActions.setSelected(data));
				this.navCtrl.push(RecepieView)
				break;
			case 'add-recepie':
				this.navCtrl.push(AddRecepie)
				// let test
				// this.recepies$.subscribe(data => test = data)
				// this.store.dispatch(new RecepieActions.AddRecepie(test[0]))
				break;
		}	
	}

}
