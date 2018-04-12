import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecepieView } from '../recepie/recepie';
import { AddRecepie } from '../addRecepie/add';

// Data Models
import { Recepie } from '../../models/recepieModel';

// Services
import { MainService } from '../../services/main.service';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

	shouldShowCancel:boolean = false;
	searchText:string;

	public categories;
	public recepies:Recepie[];
	public mainState:object;

	constructor(	
		public navCtrl: NavController, 
		private _mainSrv: MainService
	) {}

	ngOnInit(){
		this._mainSrv.recepies$.subscribe((data)=>this.recepies = data);
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);
		this.categories = this._mainSrv.categories;
	}

	onCancel() {

	}

	onInput(event) {

	}

	showCancelButton(event) {

	}

	changePage(page, recepie){
		switch(page) {
			case 'recepie-view':
				this._mainSrv.selectRecepie(recepie);
				this.navCtrl.push(RecepieView)
				break;
			case 'add-recepie':
				this.navCtrl.push(AddRecepie)
				break;
		}	
	}

	removeRecepie(recepie){
		this._mainSrv.deleteRecepie(recepie);
	}

}
