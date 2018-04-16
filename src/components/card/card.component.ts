import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

/* Services */
import { MainService } from '../../services/main.service';
/* Data Models */
import { Recepie } from '../../models/recepieModel';

@Component({
    selector: 'recipe-card',
    styleUrls: ['/src/components/card/card.css'],
    templateUrl: 'card.html',
})

export class Card {
    /* Component Inputs */
    @Input('recepie') recepie: Recepie;
    @Input('viewMode') viewMode: boolean;

    /* Component Outputs */
    @Output() onRemove = new EventEmitter<Recepie>();
    @Output() onPageChange = new EventEmitter<object>();

    public categories = this._mainSrv.categories;

	constructor(	
		public navCtrl: NavController, 
		private _mainSrv: MainService
	) {}

    /**
    * Method triggers remove recepie event .
    * @param recepie - The recepie object.
    */
    removeRecepie(recepie) {
        this.onRemove.emit(recepie);
    }

    /**
    *  Method triggers remove recepie event .
    * @param page - Page name.
    * @param recepie - The recepie object.
    */
    changePage(page, recepie){
        this.onPageChange.emit({page, recepie});
    }
}

