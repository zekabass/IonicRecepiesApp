import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Data Models
import { Recepie } from '../../models/recepieModel';
// Services
import { MainService } from '../../services/main.service';

@Component({
  	selector: 'recepie-view',
  	templateUrl: 'recepie.html'
})


export class RecepieView {
	public recepies:Recepie[];
	public mainState:object;

	constructor(
		public navCtrl: NavController,
		private _mainSrv: MainService
	) {
		
	}

	ngOnInit(){
		this._mainSrv.recepies$.subscribe((data)=>this.recepies = data)
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data)
	}
}
