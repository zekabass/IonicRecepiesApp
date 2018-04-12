import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// Data Models
import { Recepie } from '../../models/recepieModel';
// Services
import { MainService } from '../../services/main.service';

import { Categories } from '../../models/categories';  

@Component({
  	selector: 'recepie-view',
  	templateUrl: 'recepie.html'
})


export class RecepieView {
	public recepies:Recepie[];
	public mainState:any;
	public categories = Categories;
	public recommended:Recepie[];

	constructor(
		public navCtrl: NavController,
		private _mainSrv: MainService
	) {
		
	}

	ngOnInit(){
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);
		
		this._mainSrv.recepies$.subscribe((data)=> {
			this.filterRecepies(data);
		});		
	}

	filterRecepies(all){
		let selRecepie = this.mainState.selectedRecepie;
		this.recommended = all.filter((recepie)=>{
			return (
				recepie.category === selRecepie.category && recepie.id !== selRecepie.id ? 
					recepie
					: ''
			)
		})
	}
}
