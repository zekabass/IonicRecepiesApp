import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecepieView } from '../recepie/recepie';
import { AddRecepie } from '../addRecepie/add';

// Services
import { MainService } from '../../services/main.service';


@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

	public shouldShowCancel:boolean = false;
	public mainState:object;
	public term:string;
	public categories = this._mainSrv.categories

	constructor(	
		public navCtrl: NavController, 
		private _mainSrv: MainService
	) {}

	ngOnInit(){
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);
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
