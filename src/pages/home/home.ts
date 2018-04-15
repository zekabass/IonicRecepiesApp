import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddRecepie } from '../addRecepie/add';
import { RecepieView } from '../../pages/recepie/recepie';

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

	constructor(	
		public navCtrl: NavController, 
		private _mainSrv: MainService
	) {}

	ngOnInit(){
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);
	}

	changePage(page, recepie){
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

	removeRecepie(recepie){
		this._mainSrv.deleteRecepie(recepie);
	}
}
