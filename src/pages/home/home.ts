import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddRecepie } from '../addRecepie/add';
import { RecepieView } from '../../pages/recepie/recepie';

// Services
import { MainService } from '../../services/main.service';
import { Recepie } from '../../models/recepieModel';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage {

	public shouldShowCancel:boolean = false;
	public mainState:object;
	public term:string;

	constructor(	
		public navCtrl: NavController, 
		private _mainSrv: MainService
	) {}

	ngOnInit(){
		/* Subscribe to the mainState object */
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);
	}

	/**
    * Method changes page for the given page name .
    * @param page - Page name.
	* @param recepie - Recipe object.
    */
	changePage(page:string, recepie:Recepie){
		switch(page) {
			case 'add-recepie':
				this.navCtrl.push(AddRecepie)
				break;

			case 'recepie-view':
                this._mainSrv.selectRecepie(recepie);
                this.navCtrl.push(RecepieView);
                break;
		}	
	}

	/**
    * Method removes recipe from the app state.
	* @param recepie - Recipe object.
    */
	removeRecepie(recepie:Recepie){
		this._mainSrv.deleteRecepie(recepie);
	}
}
