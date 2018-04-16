import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

// Data Models
import { Recepie } from '../../models/recepieModel';
// Services
import { MainService } from '../../services/main.service';
/* Custom Validators */
import {checkSpacesValidator} from '../../shared/check-spaces.directive';

@Component({
  	selector: 'add-recepie',
  	templateUrl: 'add.html'
})

export class AddRecepie {
	/* Set Initial recipe object */
	public recepie:Recepie = {
		id:undefined,
		category:undefined,
		created: undefined,
		description:undefined,
		/* Added default img url for the testing purposes */
		imageUrl:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
		title:undefined
	};

	public categories = this._mainSrv.categories;
	public selectedCategory:string;
	public addForm: FormGroup;
	
	constructor(
		public navCtrl: NavController,
		private _mainSrv: MainService,
		public formBuilder: FormBuilder
	) {}

	ngOnInit() {
		/* Create form on init */
		this.createForm();
	}

	/* Method that creates Angular form */
	createForm(){
		this.addForm = this.formBuilder.group({
			title: new FormControl('', [ 
				Validators.required,
				checkSpacesValidator,
			]),
			category: new FormControl('', [
				Validators.required
			]),
			image: new FormControl('', [
				Validators.required,
				Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
			]),
			description: new FormControl('', [
				Validators.required,
				checkSpacesValidator,
				Validators.minLength(10)
			]),
		});
	}

	/* Method that adds new recepie to the state on form submit */
	submitAdd(){
		/* Check if form is valid */
		if (this.addForm.valid) {
			
			this.recepie.id = this._mainSrv.recepiesCount +  Math.floor(Math.random() * 100); //Not the best way to generate id. For testing purposes only!
			this.recepie.category = this.getCategoryId(this.selectedCategory)
			this.recepie.created = new Date().toISOString();
			this.recepie.title = this.recepie.title.trim();

			/* Adding object to the state */
			this._mainSrv.addNewRecepie(this.recepie);

			/* Get back to the home page */
			this.navCtrl.pop();
		} else {

			/* Form is not valid - trigger taost info */
			this._mainSrv.triggerToast('Enter all requred data', 'danger');

			/* Touch all fields so we can see errors msgs */
			Object.keys(this.addForm.controls).forEach(field => { 
				const control = this.addForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}	
	}

	/**
    * Method returns category id number .
    * @param category - The category enum object.
	* @return category ID.
    */
	getCategoryId(category:string) {
		return Number(this.categories[category])
	}

}
