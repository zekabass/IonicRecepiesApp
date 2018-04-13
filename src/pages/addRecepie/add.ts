import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Data Models
import { Recepie } from '../../models/recepieModel';
// Services
import { MainService } from '../../services/main.service';

@Component({
  	selector: 'add-recepie',
  	templateUrl: 'add.html'
})


export class AddRecepie {
	public recepie:Recepie = {
		id:undefined,
		category:undefined,
		created: undefined,
		description:undefined,
		imageUrl:undefined,
		title:undefined
	};

	public categories = this._mainSrv.categories;
	public selectedCategory:string;
	
	constructor(
		public navCtrl: NavController,
		private _mainSrv: MainService
	) {

	}

	submitAdd(){
		this.recepie.id = this._mainSrv.recepiesCount;
		this.recepie.category = this.getCategoryId(this.selectedCategory)
		this.recepie.created = new Date();
		this.recepie.title = this.recepie.title[0].toLocaleUpperCase()+this.recepie.title.slice(1);
		this._mainSrv.addNewRecepie(this.recepie);

		this.navCtrl.pop();
	}

	getCategoryId(category) {
		return Number(this.categories[category])
	}

}
