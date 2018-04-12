webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recepie_recepie__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addRecepie_add__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_main_service__ = __webpack_require__(200);
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
    function HomePage(navCtrl, toastCtrl, _mainSrv) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this._mainSrv = _mainSrv;
        this.shouldShowCancel = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this._mainSrv.recepies$.subscribe(function (data) { return _this.recepies = data; });
        this._mainSrv.mainState$.subscribe(function (data) { return _this.mainState = data; });
        this.categories = this._mainSrv.categories;
    };
    HomePage.prototype.onCancel = function () {
    };
    HomePage.prototype.onInput = function (event) {
    };
    HomePage.prototype.showCancelButton = function (event) {
    };
    HomePage.prototype.changePage = function (page, recepie) {
        switch (page) {
            case 'recepie-view':
                this._mainSrv.selectRecepie(recepie);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recepie_recepie__["a" /* RecepieView */]);
                break;
            case 'add-recepie':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addRecepie_add__["a" /* AddRecepie */]);
                break;
        }
    };
    HomePage.prototype.removeRecepie = function (recepie) {
        // this.store.dispatch(new RecepieActions.RemoveRecepie(recepie.id));
        var toast = this.toastCtrl.create({
            message: recepie.title + " was deleted",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Recepies App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" padding>\n	<ion-fab class="add-new-btn" right bottom #fab1>\n		<button ion-fab (click)="changePage(\'add-recepie\')" ><ion-icon name="add"></ion-icon></button>	\n	</ion-fab>\n\n	<ion-searchbar\n		[(ngModel)]="myInput"\n		[showCancelButton]="shouldShowCancel"\n		(ionInput)="onInput($event)"\n		(ionCancel)="onCancel($event)">\n	</ion-searchbar>\n\n	<ion-card *ngFor="let recepie of recepies">\n		<div class="card-wrapper" [style.backgroundImage]="\'url(\' + recepie.imageUrl + \')\'">\n\n			<div class="background-over" ></div>\n\n			<ion-chip color="secondary">\n				<ion-label color="dark">{{categories[recepie.category]}}</ion-label>\n			</ion-chip>\n\n			<div class="card-title clickable" (click)="changePage(\'recepie-view\', recepie)">{{recepie.title}}</div>\n		\n			<ion-fab left bottom #fabDelete>\n					<button ion-fab color="danger" mini (click)="removeRecepie(recepie)"><ion-icon class="delete-icon clickable" name="ios-trash-outline"></ion-icon></button>	\n			</ion-fab>\n		</div>	\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_main_service__["a" /* MainService */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecepieView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__(200);
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

var RecepieView = /** @class */ (function () {
    function RecepieView(navCtrl, _mainSrv) {
        this.navCtrl = navCtrl;
        this._mainSrv = _mainSrv;
    }
    RecepieView.prototype.ngOnInit = function () {
        var _this = this;
        this._mainSrv.recepies$.subscribe(function (data) { return _this.recepies = data; });
        this._mainSrv.mainState$.subscribe(function (data) { return _this.mainState = data; });
    };
    RecepieView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recepie-view',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/recepie/recepie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Recepies App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h1>{{mainState.selectedRecepie.title}}</h1>	\n	<img src="{{mainState.selectedRecepie.imageUrl}}" alt="">\n	<p>{{mainState.selectedRecepie.description}}</p>\n	\n	<p>We Recommend:</p>\n	\n	<ion-slides>\n		<ion-slide>\n			<h1>Slide 1</h1>\n		</ion-slide>\n		<ion-slide>\n			<h1>Slide 2</h1>\n		</ion-slide>\n		<ion-slide>\n			<h1>Slide 3</h1>\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/recepie/recepie.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]) === "function" && _b || Object])
    ], RecepieView);
    return RecepieView;
    var _a, _b;
}());

//# sourceMappingURL=recepie.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRecepie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddRecepie = /** @class */ (function () {
    function AddRecepie(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddRecepie = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-recepie',template:/*ion-inline-start:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/addRecepie/add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Recepies App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h1>Add new Recepie</h1>		\n  \n</ion-content>\n'/*ion-inline-end:"/home/dejan/DejanZec/IonicTest/IonicRecepiesApp/src/pages/addRecepie/add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AddRecepie);
    return AddRecepie;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_recepie_actions__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_app_actions__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Store

// Actions


var Categories;
(function (Categories) {
    Categories[Categories["Dessert"] = 0] = "Dessert";
    Categories[Categories["Lunch"] = 1] = "Lunch";
    Categories[Categories["Dinner"] = 2] = "Dinner";
})(Categories || (Categories = {}));
var MainService = /** @class */ (function () {
    function MainService(http, store) {
        this.http = http;
        this.store = store;
        this.categories = Categories;
        this.recepies$ = store.select("recepies");
        this.mainState$ = store.select("mainState");
        this.initialize();
    }
    MainService.prototype.initialize = function () {
        /* Fetch recepies data */
        this.getRecepies();
    };
    MainService.prototype.getRecepies = function () {
        var _this = this;
        var path = 'https://demo2194120.mockable.io/receipts';
        var encodedPath = encodeURI(path);
        var timeoutMS = 10000;
        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_recepie_actions__["b" /* AddRecepie */](responseData.receipts));
        }, function (err) {
            console.log('error fetching data');
        });
    };
    MainService.prototype.selectRecepie = function (recepie) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_app_actions__["b" /* SetSelected */](recepie));
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]) === "function" && _b || Object])
    ], MainService);
    return MainService;
    var _a, _b;
}());

//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_RECEPIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_RECEPIE; });
/* unused harmony export RemoveRecepie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddRecepie; });
var ADD_RECEPIE = "ADD_RECEPIE";
var REMOVE_RECEPIE = "INITIAL";
var RemoveRecepie = /** @class */ (function () {
    function RemoveRecepie(payload) {
        this.payload = payload;
        this.type = REMOVE_RECEPIE;
    }
    return RemoveRecepie;
}());

var AddRecepie = /** @class */ (function () {
    function AddRecepie(payload) {
        this.payload = payload;
        this.type = ADD_RECEPIE;
    }
    return AddRecepie;
}());

//# sourceMappingURL=recepie.actions.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recepie_recepie__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addRecepie_add__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers_wrapper__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_main_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recepie_recepie__["a" /* RecepieView */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addRecepie_add__["a" /* AddRecepie */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__reducers_wrapper__["a" /* ROOT_REDUCER */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recepie_recepie__["a" /* RecepieView */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addRecepie_add__["a" /* AddRecepie */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_main_service__["a" /* MainService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT_REDUCER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_recepie_reducer__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_app_reducer__ = __webpack_require__(303);


var ROOT_REDUCER = {
    recepies: __WEBPACK_IMPORTED_MODULE_0__reducers_recepie_reducer__["a" /* RecepieReducer */],
    mainState: __WEBPACK_IMPORTED_MODULE_1__reducers_app_reducer__["a" /* AppReducer */]
};
//# sourceMappingURL=wrapper.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RecepieReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__ = __webpack_require__(205);

function RecepieReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__["a" /* ADD_RECEPIE */]:
            return state.concat(action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_recepie_actions__["c" /* REMOVE_RECEPIE */]:
            return state.filter(function (recepie) { return recepie.id !== action.payload; });
        default:
            return state;
    }
}
//# sourceMappingURL=recepie.reducer.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AppReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__ = __webpack_require__(304);
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__["a" /* SET_SELECTED */]:
            return __assign({}, state, { selectedRecepie: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetSelected; });
var SET_SELECTED = "SET_SELECTED";
var SetSelected = /** @class */ (function () {
    function SetSelected(payload) {
        this.payload = payload;
        this.type = SET_SELECTED;
    }
    return SetSelected;
}());

//# sourceMappingURL=app.actions.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map