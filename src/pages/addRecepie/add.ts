import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

// Data Models
import { Recepie } from '../../models/recepieModel';
// Services
import { MainService } from '../../services/main.service';
/* Validators */
import {checkSpacesValidator} from '../../shared/check-spaces.directive';

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
		/* Added default img url for testing purpose */
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
		this.createForm();
	
	}

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

	submitAdd(){
		if (this.addForm.valid) {
			this.recepie.id = this._mainSrv.recepiesCount + 1;
			this.recepie.category = this.getCategoryId(this.selectedCategory)
			this.recepie.created = new Date();
			this.recepie.title = this.recepie.title.trim();
			this._mainSrv.addNewRecepie(this.recepie);
			this.navCtrl.pop();
		} else {
			this._mainSrv.triggerToast('Enter all requred data', 'danger');
			Object.keys(this.addForm.controls).forEach(field => { 
				const control = this.addForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}	
	}

	getCategoryId(category) {
		return Number(this.categories[category])
	}

}
