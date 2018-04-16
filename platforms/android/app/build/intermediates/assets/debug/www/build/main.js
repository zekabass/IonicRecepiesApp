webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addRecepie_add__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recepie_recepie__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_main_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _mainSrv) {
        this.navCtrl = navCtrl;
        this._mainSrv = _mainSrv;
        this.shouldShowCancel = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        /* Subscribe to the mainState object */
        this._mainSrv.mainState$.subscribe(function (data) { return _this.mainState = data; });
    };
    /**
    * Method changes page for the given page name .
    * @param page - Page name.
    * @param recepie - Recipe object.
    */
    HomePage.prototype.changePage = function (page, recepie) {
        switch (page) {
            case 'add-recepie':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addRecepie_add__["a" /* AddRecepie */]);
                break;
            case 'recepie-view':
                this._mainSrv.selectRecepie(recepie);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_recepie_recepie__["a" /* RecepieView */]);
                break;
        }
    };
    /**
    * Method removes recipe from the app state.
    * @param recepie - Recipe object.
    */
    HomePage.prototype.removeRecepie = function (recepie) {
        this._mainSrv.deleteRecepie(recepie);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Listing\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" padding>\n	<ion-fab class="add-new-btn" right bottom #fab1>\n		<button ion-fab (click)="changePage(\'add-recepie\')" ><ion-icon name="add"></ion-icon></button>	\n	</ion-fab>\n	\n	<div class="app-title">\n		<img src="../../assets/imgs/chef.png" alt="">\n		<h2>Cooking LikeABoss</h2>\n	</div>\n	\n	<ion-searchbar [(ngModel)]="term"> </ion-searchbar>\n\n	<p *ngIf="term" class="search-info">\n		{{\n			(_mainSrv.recepies$ | async | filter:term).length  + \n			((_mainSrv.recepies$ | async | filter:term).length !== 1 ? \' recipes\' : \' recipe\')\n		}} \n		found\n	</p>\n\n	<ion-card *ngFor="let recepie of _mainSrv.recepies$ | async | filter:term | sort">\n		<recipe-card [recepie]=recepie (onRemove)="removeRecepie($event)" (onPageChange)="changePage($event.page, $event.recepie)"></recipe-card>\n	</ion-card>\n	\n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_main_service__["a" /* MainService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRecepie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_check_spaces_directive__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services

/* Custom Validators */

var AddRecepie = /** @class */ (function () {
    function AddRecepie(navCtrl, _mainSrv, formBuilder) {
        this.navCtrl = navCtrl;
        this._mainSrv = _mainSrv;
        this.formBuilder = formBuilder;
        /* Set Initial recipe object */
        this.recepie = {
            id: undefined,
            category: undefined,
            created: undefined,
            description: undefined,
            /* Added default img url for the testing purposes */
            imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
            title: undefined
        };
        this.categories = this._mainSrv.categories;
    }
    AddRecepie.prototype.ngOnInit = function () {
        /* Create form on init */
        this.createForm();
    };
    /* Method that creates Angular form */
    AddRecepie.prototype.createForm = function () {
        this.addForm = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__shared_check_spaces_directive__["a" /* checkSpacesValidator */],
            ]),
            category: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            image: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
            ]),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__shared_check_spaces_directive__["a" /* checkSpacesValidator */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)
            ]),
        });
    };
    /* Method that adds new recepie to the state on form submit */
    AddRecepie.prototype.submitAdd = function () {
        var _this = this;
        /* Check if form is valid */
        if (this.addForm.valid) {
            this.recepie.id = this._mainSrv.recepiesCount + 1; //Not the best way to generate id. For testing purposes only!
            this.recepie.category = this.getCategoryId(this.selectedCategory);
            this.recepie.created = new Date();
            this.recepie.title = this.recepie.title.trim();
            /* Adding object to the state */
            this._mainSrv.addNewRecepie(this.recepie);
            /* Get back to the home page */
            this.navCtrl.pop();
        }
        else {
            /* Form is not valid - trigger taost info */
            this._mainSrv.triggerToast('Enter all requred data', 'danger');
            /* Touch all fields so we can see errors msgs */
            Object.keys(this.addForm.controls).forEach(function (field) {
                var control = _this.addForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    /**
    * Method returns category id number .
    * @param category - The category enum object.
    * @return category ID.
    */
    AddRecepie.prototype.getCategoryId = function (category) {
        return Number(this.categories[category]);
    };
    AddRecepie = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-recepie',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/addRecepie/add.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Create\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h1 class="centered"><ion-icon name="restaurant"></ion-icon> Add new Recepie</h1>	\n	<form  [formGroup]="addForm" (ngSubmit)="submitAdd()">\n		<ion-item>\n			<ion-label floating>Title</ion-label>		\n			<ion-input type="text" [(ngModel)]="recepie.title" name="title" formControlName="title"></ion-input>		\n		</ion-item>\n		<p class="form-error">\n			<span *ngIf="!addForm.controls.title.valid && addForm.controls.title.touched">\n				Title fild is required!\n			</span>	\n		</p>\n\n		<ion-item>\n			<ion-label floating>Category</ion-label>\n			<ion-select [(ngModel)]="selectedCategory" name="category" formControlName="category">\n				<ion-option *ngFor="let category of categories | keys" [value]="category">{{category}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<p class="form-error">\n			<span *ngIf="!addForm.controls.category.valid && addForm.controls.category.touched">\n				Category fild is required!\n			</span>	\n		</p>\n\n		<ion-item>\n			<ion-label floating>Image Url</ion-label>\n			<ion-input type="text" [(ngModel)]="recepie.imageUrl" name="image" formControlName="image"></ion-input>\n		</ion-item>\n		<p class="form-error">\n			<span *ngIf="!addForm.controls.image.valid && (addForm.controls.image.dirty || addForm.controls.image.touched)">\n				<span *ngIf="addForm.controls.image.errors.required">Image URL fild is required!</span>\n				<span *ngIf="addForm.controls.image.errors.pattern">Url is not valid!</span>\n			</span>\n			\n		</p>\n\n		<ion-item>\n			<ion-label floating>Description</ion-label>\n			<ion-textarea [(ngModel)]="recepie.description" name="description" formControlName="description"></ion-textarea>\n		</ion-item>\n		<p class="form-error">\n			<span *ngIf="!addForm.controls.description.valid && (addForm.controls.description.dirty || addForm.controls.description.touched)">\n				<span *ngIf="addForm.controls.description.errors.minlength && !addForm.controls.description.errors.emptyString">Enter at least {{10 - recepie.description.length}} characters</span>\n				<span *ngIf="addForm.controls.description.errors.required || addForm.controls.description.errors.emptyString">Description fild is required!</span>	\n			</span>	\n		</p>\n\n		<button ion-button class="submit-btn" type="submit" block>Add Recepie</button>\n	</form>	\n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/addRecepie/add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddRecepie);
    return AddRecepie;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* Recipes categories */
var Categories;
(function (Categories) {
    Categories[Categories["Dessert"] = 0] = "Dessert";
    Categories[Categories["Lunch"] = 1] = "Lunch";
    Categories[Categories["Dinner"] = 2] = "Dinner";
})(Categories || (Categories = {}));
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_RECEPIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_RECEPIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveRecepie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddRecepie; });
var ADD_RECEPIE = "ADD_RECEPIE";
var REMOVE_RECEPIE = "INITIAL";
/* Action for recepie removal from the state */
var RemoveRecepie = /** @class */ (function () {
    function RemoveRecepie(payload) {
        this.payload = payload;
        this.type = REMOVE_RECEPIE;
    }
    return RemoveRecepie;
}());

/* Action for adding recepie to the state */
var AddRecepie = /** @class */ (function () {
    function AddRecepie(payload) {
        this.payload = payload;
        this.type = ADD_RECEPIE;
    }
    return AddRecepie;
}());

//# sourceMappingURL=recepie.actions.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetSelected; });
var SET_SELECTED = "SET_SELECTED";
/* Action for recepie selection on the home page */
var SetSelected = /** @class */ (function () {
    function SetSelected(payload) {
        this.payload = payload;
        this.type = SET_SELECTED;
    }
    return SetSelected;
}());

//# sourceMappingURL=app.actions.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecepieView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_categories__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Services */


var RecepieView = /** @class */ (function () {
    function RecepieView(navCtrl, _mainSrv) {
        this.navCtrl = navCtrl;
        this._mainSrv = _mainSrv;
        this.categories = __WEBPACK_IMPORTED_MODULE_3__models_categories__["a" /* Categories */];
        this.pageLoaded = true;
    }
    RecepieView_1 = RecepieView;
    RecepieView.prototype.ngOnInit = function () {
        var _this = this;
        /* Subscribe to the mainState object */
        this._mainSrv.mainState$.subscribe(function (data) { return _this.mainState = data; });
        /* Subscribe to the recepies object */
        this._mainSrv.recepies$.subscribe(function (data) {
            /* Filter recipes for the recommended recipes */
            var current = _this.mainState.selectedRecepie;
            _this.filterRecepies(data, current.category, current.id);
        });
    };
    /**
    * Method filters recipes by category ID.
    * @param all - All recipes array.
    * @param category - Category ID.
    * @param currentId - Id of the current recepie page.
    */
    RecepieView.prototype.filterRecepies = function (all, category, currentId) {
        this.recommended = all.filter(function (recepie) {
            return ((recepie.category === category && recepie.id !== currentId) &&
                recepie);
        });
    };
    /**
    * Method that change page on recommended recipe click.
    * @param recepie - Recipe object.
    */
    RecepieView.prototype.changePage = function (recepie) {
        var _this = this;
        /* Set page loaded to false so we can hide content while animate to the next view */
        this.pageLoaded = false;
        /* Change selected recipe in the state */
        this._mainSrv.selectRecepie(recepie);
        /* Change view */
        this.navCtrl.push(RecepieView_1).then(function () {
            var index = 1;
            /* Remove previous viwed recipe so we prevent building infinit stack of pages */
            _this.navCtrl.remove(index);
        });
    };
    RecepieView = RecepieView_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recepie-view',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/recepie/recepie.html"*/'<ion-header >\n	<ion-navbar >\n		<ion-title>\n			Details\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div *ngIf="pageLoaded">\n		<div class="centered">\n			<h1>{{mainState.selectedRecepie.title}}</h1>\n			<ion-grid >\n				<ion-row>\n					<ion-col col-6 class="header-text"><p><ion-icon ios="ios-calendar-outline" name="calendar"></ion-icon> {{mainState.selectedRecepie.created | date}}</p></ion-col>\n					<ion-col col-1><p>|</p></ion-col>\n					<ion-col col-5 class="header-text"><p> {{categories[mainState.selectedRecepie.category]}}</p></ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<img src="{{mainState.selectedRecepie.imageUrl}}" alt="">\n		</div>\n		<p>{{mainState.selectedRecepie.description}}</p>\n		\n		<div class="recommendations">\n			<p> <strong>We Recommend: </strong> </p>\n			\n			<ion-slides >\n				<ion-slide loop="true" *ngFor="let recepie of recommended">\n				<div class="wrapper-slide">\n					<recipe-card [recepie]=recepie [viewMode]=true (onPageChange)="changePage($event.recepie)"></recipe-card>\n				</div>\n				</ion-slide>\n			</ion-slides>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/recepie/recepie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]])
    ], RecepieView);
    return RecepieView;
    var RecepieView_1;
}());

//# sourceMappingURL=recepie.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_recepie_recepie__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_addRecepie_add__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers_wrapper__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_card_card_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_main_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_sort_pipe__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_objKeys_pipe__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/* Page components */




/* Main reducer */

/* Custom Components */

/* Custom Services */

/* Pipes */



/* Ngrx dev tool imports*/

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recepie_recepie__["a" /* RecepieView */],
                __WEBPACK_IMPORTED_MODULE_11__pages_addRecepie_add__["a" /* AddRecepie */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_objKeys_pipe__["a" /* ObjKeys */],
                __WEBPACK_IMPORTED_MODULE_13__components_card_card_component__["a" /* Card */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__reducers_wrapper__["a" /* ROOT_REDUCER */]),
                __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25,
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recepie_recepie__["a" /* RecepieView */],
                __WEBPACK_IMPORTED_MODULE_11__pages_addRecepie_add__["a" /* AddRecepie */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_main_service__["a" /* MainService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkSpacesValidator;
/**
*  Function that validates string
*  Checks if string contains just spaces.
*/
function checkSpacesValidator(control) {
    if (control.value && typeof (control.value) == 'string') {
        var string = control.value;
        if (string.trim() == '') {
            return {
                emptyString: {
                    msg: 'Input contains only spaces'
                }
            };
        }
    }
    return null;
}
//# sourceMappingURL=check-spaces.directive.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT_REDUCER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_recepie_reducer__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_app_reducer__ = __webpack_require__(306);


/* Wrapp all reducers */
var ROOT_REDUCER = {
    recepies: __WEBPACK_IMPORTED_MODULE_0__reducers_recepie_reducer__["a" /* RecepieReducer */],
    mainState: __WEBPACK_IMPORTED_MODULE_1__reducers_app_reducer__["a" /* AppReducer */]
};
//# sourceMappingURL=wrapper.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RecepieReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__ = __webpack_require__(214);

function RecepieReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        /* Add new recipe to the state */
        case __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__["a" /* ADD_RECEPIE */]:
            return state.concat(action.payload);
        /* Removing recipe from the state */
        case __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__["c" /* REMOVE_RECEPIE */]:
            return state.filter(function (recepie) { return recepie.id !== action.payload; });
        default:
            return state;
    }
}
//# sourceMappingURL=recepie.reducer.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AppReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__ = __webpack_require__(215);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var InitialState = {
    selectedRecepie: undefined
};
function AppReducer(state, action) {
    if (state === void 0) { state = InitialState; }
    switch (action.type) {
        /* Set selected recipe */
        case __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__["a" /* SET_SELECTED */]:
            return __assign({}, state, { selectedRecepie: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Services */

var Card = /** @class */ (function () {
    function Card(navCtrl, _mainSrv) {
        this.navCtrl = navCtrl;
        this._mainSrv = _mainSrv;
        /* Component Outputs */
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.categories = this._mainSrv.categories;
    }
    /**
    * Method triggers remove recepie event .
    * @param recepie - The recepie object.
    */
    Card.prototype.removeRecepie = function (recepie) {
        this.onRemove.emit(recepie);
    };
    /**
    *  Method triggers remove recepie event .
    * @param page - Page name.
    * @param recepie - The recepie object.
    */
    Card.prototype.changePage = function (page, recepie) {
        this.onPageChange.emit({ page: page, recepie: recepie });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('recepie'),
        __metadata("design:type", Object)
    ], Card.prototype, "recepie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('viewMode'),
        __metadata("design:type", Boolean)
    ], Card.prototype, "viewMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], Card.prototype, "onRemove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], Card.prototype, "onPageChange", void 0);
    Card = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recipe-card',
            styleUrls: ['/src/components/card/card.css'],template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/components/card/card.html"*/'\n<div class="card-wrapper" [style.backgroundImage]="\'url(\' + recepie.imageUrl + \')\'">\n\n    <div class="background-over" ></div>\n\n    <ion-chip class="category-chip">\n        <ion-label>{{categories[recepie.category]}}</ion-label>\n    </ion-chip>\n\n    <div class="card-title clickable" (click)="changePage(\'recepie-view\', recepie)">{{recepie.title}}</div>\n\n    <ion-fab *ngIf="!viewMode" left bottom #fabDelete>\n        <button ion-fab class="fab-del" mini (click)="removeRecepie(recepie)"><ion-icon class="delete-icon clickable" name="ios-trash-outline"></ion-icon></button>	\n    </ion-fab>\n    \n</div>	\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/components/card/card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]])
    ], Card);
    return Card;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
    * Filter passed array by title that contains given string.
    * @param recepies - All recipes array.
    * @param term - Search word
    */
    FilterPipe.prototype.transform = function (recepies, term) {
        if (term === undefined)
            return recepies;
        return recepies.filter(function (recepie) {
            return recepie.title.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
    * Sort array of object by id. Descending
    * @param recepies - Recepies array.
    */
    SortPipe.prototype.transform = function (recepies) {
        var sorted = recepies.sort(function (a, b) { return a.id - b.id; });
        /* Reverse array so we can get descending order */
        return sorted.reverse();
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjKeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjKeys = /** @class */ (function () {
    function ObjKeys() {
    }
    /**
    * Returns enum string values by given number key.
    * @param value - Enum object.
    * @param args - passed arguments
    */
    ObjKeys.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        var keys = Object.keys(value);
        return keys.slice(keys.length / 2);
    };
    ObjKeys = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        })
    ], ObjKeys);
    return ObjKeys;
}());

//# sourceMappingURL=objKeys.pipe.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_categories__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_recepie_actions__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_app_actions__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/* Store */

/* Actions */


var MainService = /** @class */ (function () {
    function MainService(http, store, toastCtrl, alertCtrl) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.categories = __WEBPACK_IMPORTED_MODULE_5__models_categories__["a" /* Categories */];
        /* Get recipes array form the app state */
        this.recepies$ = store.select("recepies");
        /* Get mainState object form the app state */
        this.mainState$ = store.select("mainState");
        /* Subscribe to the recipes observable */
        this.recepies$.subscribe(function (data) {
            _this.recepiesCount = data.length;
        });
        this.initialize();
    }
    MainService.prototype.initialize = function () {
        /* Fetch recepies data */
        this.getRecepies();
    };
    /* Get recipes data from the server */
    MainService.prototype.getRecepies = function () {
        var _this = this;
        var path = 'https://demo2194120.mockable.io/receipts';
        var encodedPath = encodeURI(path);
        var timeoutMS = 10000;
        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            /* Add recipes fromt the server to the app state */
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_recepie_actions__["b" /* AddRecepie */](responseData.receipts));
        }, function (err) {
            console.log('error fetching data');
        });
    };
    /**
    * Save selected recipe to the app state
    * @param recepie - Recepie object.
    */
    MainService.prototype.selectRecepie = function (recepie) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_app_actions__["b" /* SetSelected */](recepie));
    };
    /**
    * Delete recipe from the app state
    * @param recepie - Recepie object.
    */
    MainService.prototype.deleteRecepie = function (recepie) {
        /* Open confirmation window */
        this.doConfirm(recepie);
    };
    /**
    * If user confirms remove recipe from the states
    * @param recepie - Recepie object.
    */
    MainService.prototype.doConfirm = function (recepie) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Recipe?',
            message: "Are you shure you want to delete " + recepie.title + "?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_recepie_actions__["d" /* RemoveRecepie */](recepie.id));
                        _this.triggerToast(recepie.title + " was deleted", 'danger');
                    }
                },
                {
                    text: 'No',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    /**
    * Method that add new given recipe object to the app state
    * @param recepie - Recepie object.
    */
    MainService.prototype.addNewRecepie = function (recepie) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_recepie_actions__["b" /* AddRecepie */](recepie));
        this.triggerToast(recepie.title + " Added", 'success');
    };
    /**
    * Method that shows app toast
    * @param message - Message text to show.
    * @param cssClass - Css Class to apply to the toast container.
    */
    MainService.prototype.triggerToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom',
            cssClass: cssClass
        });
        toast.present();
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MainService);
    return MainService;
}());

//# sourceMappingURL=main.service.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map