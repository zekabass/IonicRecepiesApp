import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecepieView } from '../recepie/recepie';
import { AddRecepie } from '../addRecepie/add';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

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

	recepies:any = [];
	shouldShowCancel:boolean = false;
	searchText:string;

	public categories = Categories;

	constructor(public navCtrl: NavController, public http: Http) {

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
				console.log(responseData);
				this.recepies = responseData.receipts;
			},
			err => {
				console.log('error in ETPhoneHome');
			});
	}

	onCancel() {

	}

	onInput(event) {

	}

	showCancelButton(event) {

	}

	changePage(page){
		switch(page) {
			case 'recepie-view':
				this.navCtrl.push(RecepieView)
				break;
			case 'add-recepie':
				this.navCtrl.push(AddRecepie)
				break;
		}	
	}

}
