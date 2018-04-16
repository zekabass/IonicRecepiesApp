import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/* Data Models */
import { Recepie } from '../../models/recepieModel';
/* Services */
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
	public pageLoaded:boolean = true;

	constructor(
		public navCtrl: NavController,
		private _mainSrv: MainService,
	) {}

	ngOnInit(){
		/* Subscribe to the mainState object */
		this._mainSrv.mainState$.subscribe((data)=>this.mainState = data);

		/* Subscribe to the recepies object */
		this._mainSrv.recepies$.subscribe((data)=> {
			/* Filter recipes for the recommended recipes */
			let current = this.mainState.selectedRecepie
			this.filterRecepies(data, current.category, current.id);
		});		
	}

	/**
    * Method filters recipes by category ID.
    * @param all - All recipes array.
	* @param category - Category ID.
	* @param currentId - Id of the current recepie page.
    */
	filterRecepies(all:Recepie[], category:number, currentId:number){
		this.recommended = all.filter((recepie)=>{
			return (
				(recepie.category === category && recepie.id !== currentId) && 
					recepie
			)
		})
	}

	/**
    * Method that change page on recommended recipe click.
    * @param recepie - Recipe object.
    */
	changePage(recepie:Recepie){
		/* Set page loaded to false so we can hide content while animate to the next view */
		this.pageLoaded = false;

		/* Change selected recipe in the state */
		this._mainSrv.selectRecepie(recepie);
		
		/* Change view */
		this.navCtrl.push(RecepieView).then(() => {	
			let index = 1;
			/* Remove previous viwed recipe so we prevent building infinit stack of pages */
			this.navCtrl.remove(index);
		});		
	}
}
