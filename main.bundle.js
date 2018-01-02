webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api-keys.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return masterFirebaseConfig; });
// Ben's Firebase Keys
// export var masterFirebaseConfig = {
//   apiKey: "AIzaSyD-Uss1YSk2wCnmXkPcRORPNuIs8LabMKE",
//   authDomain: "pokemon-adventure-7be5c.firebaseapp.com",
//   databaseURL: "https://pokemon-adventure-7be5c.firebaseio.com",
//   projectId: "pokemon-adventure-7be5c",
//   storageBucket: "pokemon-adventure-7be5c.appspot.com",
//   messagingSenderId: "510736037365"
// };
// Jonathan's Firebase Keys
var masterFirebaseConfig = {
    apiKey: "AIzaSyBc-19lVxrCn0Gsloi8Aea6j-P8gdYrM7Q",
    authDomain: "pokemon-adventure-77e36.firebaseapp.com",
    databaseURL: "https://pokemon-adventure-77e36.firebaseio.com",
    projectId: "pokemon-adventure-77e36",
    storageBucket: "pokemon-adventure-77e36.appspot.com",
    messagingSenderId: "807377239226"
};
//Mike's Firebase Key
// export var masterFirebaseConfig = {
//   apiKey: "AIzaSyD7cez5BQL7Es4cIOOwrqxQkE5EBV-3MFI",
//   authDomain: "hiking-eefb9.firebaseapp.com",
//   databaseURL: "https://hiking-eefb9.firebaseio.com",
//   projectId: "hiking-eefb9",
//   storageBucket: "hiking-eefb9.appspot.com",
//   messagingSenderId: "692723711417"
//
// };
//# sourceMappingURL=api-keys.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n\tcolor: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.title = 'POKEMON';
        this.authService.user.subscribe(function (user) {
            if (user == null) {
                _this.isLoggedIn = false;
                //this.router.navigate(['getPokemon']);
            }
            else {
                _this.isLoggedIn = true;
                _this.userName = user.displayName;
                _this.router.navigate([]);
            }
        });
    }
    AppComponent.prototype.login = function () {
        this.authService.login();
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_keys__ = __webpack_require__("../../../../../src/app/api-keys.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_pokemon_my_pokemon_component__ = __webpack_require__("../../../../../src/app/my-pokemon/my-pokemon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__habitat_habitat_component__ = __webpack_require__("../../../../../src/app/habitat/habitat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/tutorial/tutorial.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_5__api_keys__["a" /* masterFirebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_5__api_keys__["a" /* masterFirebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_5__api_keys__["a" /* masterFirebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_5__api_keys__["a" /* masterFirebaseConfig */].storageBucket
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__["a" /* BattleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_13__my_pokemon_my_pokemon_component__["a" /* MyPokemonComponent */],
            __WEBPACK_IMPORTED_MODULE_14__habitat_habitat_component__["a" /* HabitatComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tutorial_tutorial_component__["a" /* TutorialComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__habitat_habitat_component__ = __webpack_require__("../../../../../src/app/habitat/habitat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/tutorial/tutorial.component.ts");






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'battle',
        component: __WEBPACK_IMPORTED_MODULE_1__battle_battle_component__["a" /* BattleComponent */]
    },
    {
        path: 'map',
        component: __WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]
    },
    {
        path: 'habitat/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__habitat_habitat_component__["a" /* HabitatComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'tutorial',
        component: __WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial_component__["a" /* TutorialComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthenticationService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthenticationService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block {\r\n  text-align: center;\r\n}\r\n\r\n.card-title {\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n.btn-block{\r\n  width: 100%;\r\n}\r\n.card-img-top {\r\n  height: 200px;\r\n  width: 200px;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n.pokeballImg{\r\n  width: 30px;\r\n}\r\n\r\n.health {\r\n  background-color: green;\r\n}\r\n\r\n.stats {\r\n  background-color: #F8FCAC;\r\n}\r\n\r\n.pokemon-level {\r\n  text-align: left;\r\n}\r\n\r\n.level-type {\r\n  background-color: #FFE6CB;\r\n}\r\n\r\n.card {\r\n  width: 300px;\r\n  max-width: 100\r\n}\r\n\r\nbutton {\r\n  width: 130px;\r\n  height: 50px;\r\n  font-size: .95em;\r\n\r\n}\r\n.btn-center{\r\n  text-align: center;\r\nmargin: 10px;\r\n}\r\n.btn-warning{\r\n    background-color: #fffad6;\r\n}\r\nbutton:hover {\r\n  background-color: #caccce;\r\n  cursor: pointer;\r\n}\r\n\r\n#end-battle {\r\n  text-align: center;\r\n  font-size: 6em;\r\n  color: white;\r\n   text-shadow: 2px 2px 4px black;\r\n   margin-top: 50px;\r\n}\r\n\r\n#end-battle-caught {\r\n  text-align: center;\r\n  font-size: 4em;\r\n  color: white;\r\n   text-shadow: 2px 2px 4px black;\r\n   margin-top: 50px;\r\n}\r\n\r\n.xp-gained {\r\n  padding: 0px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.myProgress {\r\n  width: 100%;\r\n  background-color: #bbe6a9;\r\n}\r\n\r\n#myBar {\r\n  height: 30px;\r\n  background-color: #4CAF50;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  color: white;\r\n  max-width: 100%;\r\n}\r\n\r\n\r\n.enemyProgress {\r\n  width: 100%;\r\n  background-color: #bbe6a9;\r\n}\r\n\r\n#enemyProgressBar {\r\n  height: 30px;\r\n  background-color: #4CAF50;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  color: white;\r\n  max-width: 100%;\r\n}\r\n\r\n.player-log {\r\n  float: left;\r\n}\r\n.opponent-log {\r\n  float: right;\r\n\r\n}\r\n\r\n.progress-text {\r\n  position: absolute;\r\n  text-align: center;\r\n  line-height: 20px; /* line-height should be equal to bar height */\r\n  overflow: hidden;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.xp-bar {\r\n  background: gray;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  text-align: left;\r\n}\r\n\r\n.level-gain {\r\n  font-weight: bold;\r\n}\r\n\r\n.level-gain-stats {\r\n  font-size: .9em;\r\n}\r\n.progress-text-health {\r\n  position: absolute;\r\n  text-align: center;\r\n  line-height: 30px; /* line-height should be equal to bar height */\r\n  overflow: hidden;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"battling\" class=\"container\">\r\n\r\n  <div class=\"p-2\"><button class=\"btn btn-warning\" (click)=\"backToMap()\">Flee</button></div>\r\n  <div class=\"d-flex justify-content-center\">\r\n\r\n    <div [@flyInFromSide]=\"'in'\" class=\"p-5\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3 class=\"card-title\" *ngIf=\"battlingPokemon.currentHP>0\">{{battlingPokemon?.name}}</h3>\r\n          <h3 class=\"card-title\" *ngIf=\"battlingPokemon.currentHP===0\">{{battlingPokemon?.name}} (Fainted)</h3>\r\n\r\n          <img class=\"card-img-top\" src=\"{{battlingPokemon?.sprites[1]}}\" alt=\"Card image cap\">\r\n          <!-- <div class=\"health\">{{battlingPokemon?.currentHP}}/{{battlingPokemon?.maxHP}}</div> -->\r\n\r\n          <div class=\"myProgress\">\r\n            <div id=\"myBar\" [style.width.%]=\"(battlingPokemon?.currentHP/battlingPokemon?.maxHP)*100\">\r\n              <div class=\"progress-text-health\">\r\n                {{battlingPokemon?.currentHP}}/{{battlingPokemon?.maxHP}} hp\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"d-flex justify-content-around stats\">\r\n            <div class=\"p-1\">Speed</div>\r\n            <div class=\"p-1\">Attack</div>\r\n            <div class=\"p-1\">Defense</div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-around stats\">\r\n            <div class=\"p-1\">{{battlingPokemon?.speed}}</div>\r\n            <div class=\"p-1\">{{battlingPokemon?.attack}}</div>\r\n            <div class=\"p-1\">{{battlingPokemon?.defense}}</div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-between level-type\">\r\n            <div class=\"p-1\">Lvl. {{battlingPokemon?.level}}</div>\r\n            <div class=\"p-1\"><span *ngFor=\"let type of battlingPokemon?.types\" class=\"pokemon-type\">{{type.type.name}} </span></div>\r\n          </div>\r\n            <div class=\"progress xp-bar\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width.%]=\"(battlingPokemon?.currentLevelXP/battlingPokemon?.totalLevelXP)*100\">\r\n          </div>\r\n          <div class=\"progress-text\">\r\n            {{battlingPokemon?.currentLevelXP}}/{{battlingPokemon?.totalLevelXP}} xp\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"battlingPokemon.currentHP>0\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <div class=\"p-2\"><button (click)=\"battle(0)\">{{battlingPokemon.activeMoves[0].name}}</button></div>\r\n            <div *ngIf=\"battlingPokemon.activeMoves.length > 1\" class=\"p-2\"><button (click)=\"battle(1)\">{{battlingPokemon.activeMoves[1].name}}</button></div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <div *ngIf=\"battlingPokemon.activeMoves.length > 2\" class=\"p-2\"><button (click)=\"battle(2)\">{{battlingPokemon.activeMoves[2].name}}</button></div>\r\n            <div *ngIf=\"battlingPokemon.activeMoves.length > 3\" class=\"p-2\"><button (click)=\"battle(3)\">{{battlingPokemon.activeMoves[3].name}}</button></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"battlingPokemon.currentHP===0\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <p>Fainted</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d flex-box justify-content-center center-log\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div></div>\r\n              <div class=\"player-log\">{{playerLog}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  <div [@flyInFromRightSide]=\"'in'\" class=\"p-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h3 class=\"card-title\">{{opponent?.name}}</h3>\r\n        <img class=\"card-img-top\" src=\"{{opponent.sprites[0]}}\" alt=\"Card image cap\">\r\n        <!-- <div class=\"health\">{{opponent?.currentHP}}/{{opponent?.maxHP}}</div> -->\r\n\r\n        <div class=\"enemyProgress\">\r\n          <div id=\"enemyProgressBar\" [style.width.%]=\"(opponent?.currentHP/opponent?.maxHP)*100\">\r\n            <div class=\"progress-text-health\">\r\n              {{opponent?.currentHP}}/{{opponent?.maxHP}} hp\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"d-flex justify-content-around stats\">\r\n          <div class=\"p-1\">Speed</div>\r\n          <div class=\"p-1\">Attack</div>\r\n          <div class=\"p-1\">Defense</div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-around stats\">\r\n          <div class=\"p-1\">{{opponent?.speed}}</div>\r\n          <div class=\"p-1\">{{opponent?.attack}}</div>\r\n          <div class=\"p-1\">{{opponent?.defense}}</div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between level-type\">\r\n          <div class=\"p-1\">Lvl. {{opponent?.level}}</div>\r\n          <div class=\"p-1\"><span *ngFor=\"let type of opponent?.types\" class=\"pokemon-type\">{{type.type.name}} </span></div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"opponent?.currentHP < opponent?.maxHP/2\"class=\"d-flex justify-content-center\">\r\n        <div class=\"p-2\"><button class=\"btn-block\" (click)=\"catchPokemon()\"><img class=\"pokeballImg\" src=\"https://cdn.iconscout.com/public/images/icon/free/png-512/pokemon-pokeball-game-go-3d4d7b6a9453829b-512x512.png\" alt=\"\">Throw Pokeball</button></div>\r\n      </div>\r\n      <div *ngIf=\"opponent?.currentHP >= opponent?.maxHP/2\"class=\"d-flex justify-content-center\">\r\n        <div class=\"p-2\"><p alt=\"\">Weaken to throw a Pokeball</p></div>\r\n      </div>\r\n      <div class=\"d flex-box justify-content-center center-log\">\r\n        <div class=\"card\">\r\n          <div class=\"card-block\">\r\n            <div></div>\r\n            <div class=\"opponent-log\">{{opponentLog}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"(battleWon || !battleWon) && !battling\">\r\n  <h1 id=\"end-battle\">The Battle Is Over!</h1>\r\n\r\n  <div *ngIf=\"pokemonCaught\">\r\n    <h2 id=\"end-battle-caught\">You caught {{opponent.name}}!</h2>\r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n\r\n    <div class=\"p-5\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\" *ngIf=\"battleWon\">\r\n          <h3 class=\"card-title\">{{battlingPokemon?.name}} won!</h3>\r\n          <img class=\"card-img-top\" src=\"{{battlingPokemon?.sprites[0]}}\" alt=\"Card image cap\">\r\n\r\n          <div class=\"xp-gained\">\r\n            {{this.battlingPokemon.name}} gained {{opponent?.level * 5}} xp!\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div *ngIf=\"showLevelUp\">\r\n              <ul>\r\n              <li class=\"level-gain\">{{this.battlingPokemon.name}} gained a level!</li>\r\n              <li class=\"level-gain-stats\">{{this.battlingPokemon.name}} gained 5 hp!</li>\r\n              <li class=\"level-gain-stats\">{{this.battlingPokemon.name}} gained 2 speed!</li>\r\n              <li class=\"level-gain-stats\">{{this.battlingPokemon.name}} gained 2 attack!</li>\r\n                <li class=\"level-gain-stats\">{{this.battlingPokemon.name}} gained 2 defense!</li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"progress xp-bar\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width.%]=\"(battlingPokemon?.currentLevelXP/battlingPokemon?.totalLevelXP)*100\">\r\n        </div>\r\n        <div class=\"progress-text\">\r\n          {{battlingPokemon?.currentLevelXP}}/{{battlingPokemon?.totalLevelXP}} xp\r\n        </div>\r\n\r\n        </div>\r\n\r\n          <!-- <div class=\"health\">{{battlingPokemon?.currentHP}}/{{battlingPokemon?.maxHP}}</div> -->\r\n          <div class=\"d-flex justify-content-between level-type\">\r\n            <div class=\"p-1\">Lvl. {{battlingPokemon?.level}}</div>\r\n            <div class=\"p-1\"><span *ngFor=\"let type of battlingPokemon?.types\" class=\"pokemon-type\">{{type.type.name}} </span></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\" *ngIf=\"!battleWon\">\r\n          <h3 class=\"card-title\">{{battlingPokemon?.name}} lost!</h3>\r\n          <img class=\"card-img-top\" src=\"{{battlingPokemon?.sprites[0]}}\" alt=\"Card image cap\">\r\n\r\n          <div class=\"d-flex justify-content-between level-type\">\r\n            <div class=\"p-1\">Lvl. {{battlingPokemon?.level}}</div>\r\n            <div class=\"p-1\"><span *ngFor=\"let type of battlingPokemon?.types\" class=\"pokemon-type\">{{type.type.name}} </span></div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"btn-center\">\r\n          <button type=\"button\" name=\"button\" class=\"btn btn-warning \" (click)=\"backToMap()\">Back to Map</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"(battling)\">\r\n  <app-my-pokemon [battling]=\"battling\" (switchPokemonSender)=\"switchPokemon($event)\"></app-my-pokemon>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_model__ = __webpack_require__("../../../../../src/app/pokemon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BattleComponent = (function () {
    function BattleComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.equippedPokemon = [];
        this.turn = 0;
        this.playerAction = null;
        this.equippedPokemon = this.pokemonService.getEquippedPokemon();
        this.battling = true;
        this.battleWon = null;
        this.battlingPokemon = this.equippedPokemon[0];
        if (this.checkAllEquippedPokemonUnconscious()) {
            this.battlingPokemon = this.equippedPokemon[0];
            this.battling = false;
            this.battleWon = false;
        }
        else {
            for (var i = 0; i < this.equippedPokemon.length; i++) {
                if (this.equippedPokemon[i].currentHP > 0) {
                    this.battlingPokemon = this.equippedPokemon[i];
                    break;
                }
            }
        }
    }
    BattleComponent.prototype.ngOnInit = function () {
        this.pokemonService.playSong("../assets/music/battle.mp3");
    };
    BattleComponent.prototype.backToMap = function () {
        this.stopSong();
        this.router.navigate(['map']);
    };
    BattleComponent.prototype.stopSong = function () {
        this.pokemonService.stopSong();
    };
    BattleComponent.prototype.battle = function (selection) {
        this.turn++;
        //console.log("number of equipped pokemon: " + this.equippedPokemon.length);
        // this.equippedPokemon = this.pokemonService.getEquippedPokemon();
        if (this.isPlayerFirstToGo()) {
            this.playerAttack(selection);
            if (this.opponent.currentHP > 0) {
                this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
                if (this.battlingPokemon.currentHP <= 0) {
                    if (this.checkAllEquippedPokemonUnconscious()) {
                        // the false argument denotes that the player lost
                        this.battleOver(false);
                    }
                    else {
                        //  alert("UPPER BLOCK");
                        // alert(this.battlingPokemon.name + ' has fainted! Pick a new pokemon to battle!');
                    }
                }
            }
            else {
                // the true argument denotes that the player won
                this.battleOver(true);
            }
        }
        else {
            this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
            if (this.battlingPokemon.currentHP > 0) {
                this.playerAttack(selection);
                if (this.opponent.currentHP <= 0) {
                    this.battleOver(true);
                }
            }
            else {
                if (this.checkAllEquippedPokemonUnconscious()) {
                    this.battleOver(false);
                }
                else {
                    //alert("LOWER BLOCK");
                    // alert(this.battlingPokemon.name + ' has fainted! Pick a new pokemon to battle!');
                }
            }
        }
    };
    BattleComponent.prototype.checkFainted = function () {
        if (this.battlingPokemon.currentHP === 0) {
            return "btn-danger";
        }
    };
    BattleComponent.prototype.isPlayerFirstToGo = function () {
        if (this.battlingPokemon.speed >= this.opponent.speed) {
            return true;
        }
        else {
            return false;
        }
    };
    BattleComponent.prototype.playerAttack = function (selection) {
        var damageDealt = this.battlingPokemon.attack - this.opponent.defense;
        if (damageDealt <= 5) {
            damageDealt = 5;
        }
        this.opponent.currentHP -= damageDealt;
        if (this.opponent.currentHP <= 0) {
            this.opponent.currentHP = 0;
        }
        this.playerLog = this.battlingPokemon.name + ' used ' + this.battlingPokemon.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.opponent.name + '!';
    };
    BattleComponent.prototype.opponentAttack = function (selection) {
        var damageDealt = this.opponent.attack - this.battlingPokemon.defense;
        if (damageDealt <= 5) {
            damageDealt = 5;
        }
        this.battlingPokemon.currentHP -= damageDealt;
        if (this.battlingPokemon.currentHP <= 0) {
            this.battlingPokemon.currentHP = 0;
        }
        this.pokemonService.updateStats(this.battlingPokemon);
        this.equippedPokemon = this.pokemonService.getEquippedPokemon();
        this.opponentLog = this.opponent.name + ' used ' + this.opponent.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.battlingPokemon.name + '!';
    };
    BattleComponent.prototype.switchPokemon = function (pokemonToSwitch) {
        if (pokemonToSwitch.currentHP > 0) {
            this.battlingPokemon = pokemonToSwitch;
        }
        else {
            alert(pokemonToSwitch.name + ' has already fainted!');
        }
    };
    BattleComponent.prototype.battleOver = function (victor) {
        this.battling = false;
        this.stopSong();
        this.pokemonService.playSong("../assets/music/victory.mp3");
        if (victor) {
            this.battleWon = true;
            this.battlingPokemon.currentLevelXP += this.opponent.level * 5;
            if (this.battlingPokemon.currentLevelXP >= this.battlingPokemon.totalLevelXP) {
                this.showLevelUp = true;
            }
            this.pokemonService.updateXP(this.battlingPokemon);
        }
        else {
            this.battleWon = false;
        }
    };
    BattleComponent.prototype.checkAllEquippedPokemonUnconscious = function () {
        var unconsciousCount = 0;
        this.equippedPokemon.forEach(function (pokemon) {
            if (pokemon.currentHP <= 0) {
                unconsciousCount++;
            }
            else {
                return false;
            }
        });
        if (unconsciousCount === this.equippedPokemon.length) {
            return true;
        }
    };
    BattleComponent.prototype.catchPokemon = function () {
        // if(this.opponent.currentHP < (this.opponent.maxHP / 4)) {
        //
        // }
        if (this.equippedPokemon.length < 6) {
            this.opponent.equipped = true;
            this.pokemonService.catchPokemon(this.opponent);
        }
        else {
            this.pokemonService.catchPokemon(this.opponent);
        }
        this.pokemonCaught = true;
        this.battleOver(true);
    };
    return BattleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_model__["a" /* Pokemon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_model__["a" /* Pokemon */]) === "function" && _a || Object)
], BattleComponent.prototype, "opponent", void 0);
BattleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-battle',
        template: __webpack_require__("../../../../../src/app/battle/battle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/battle/battle.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__pokemon_service__["a" /* PokemonService */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('flyInFromTop', [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ transform: 'translateY(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(".9s ease", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('flyInFromSide', [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])("0s 0s", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(".7s 0s ease", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('flyInFromRightSide', [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])("0s 0s", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(".7s 1s ease", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pokemon_service__["a" /* PokemonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BattleComponent);

var _a, _b, _c;
//# sourceMappingURL=battle.component.js.map

/***/ }),

/***/ "../../../../../src/app/habitat/habitat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backgroundImage{\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: -1;\r\n  height: 100%;\r\n  width: auto;\r\n\r\n}\r\n.back{\r\n\r\n}\r\n.habitatName{\r\n  font-size: 6em;\r\n  color: white;\r\n  padding: 50px;\r\n    text-shadow: 2px 2px 4px black;\r\n}\r\n.search{\r\n  font-size: 2em;\r\n  padding: 20px;\r\n  margin: 40px;\r\n}\r\n.btn:hover{\r\n  cursor: pointer;\r\n}\r\n.habitatName button{\r\n  font-size: .3em;\r\n  margin-left: 50px;\r\n}\r\n.habitatName button:hover{\r\n  cursor: pointer;\r\n}\r\n.searching{\r\n  margin-top: 30%;\r\n  color: white;\r\n  text-align: center;\r\n  font-size: 2em;\r\n  text-shadow: 2px 2px 4px black;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/habitat/habitat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"habitatToDisplay\">\r\n\r\n  <div *ngIf=\"habitatToDisplay.name==='cave'\">\r\n    <img src=\"https://i.redd.it/6axfm8uck3oy.png\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='forest'\">\r\n    <img src=\"http://renatures.com/wp-content/uploads/2017/03/forests-pretty-nature-art-pixel-forest-wallpaper-photos.jpg\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='mountain'\">\r\n    <img src=\"http://i.imgur.com/MdNGOsU.png\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='grassland'\">\r\n    <img src=\"https://i.redd.it/tgrcdqrbfjwy.gif\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='rough-terrain'\">\r\n    <img src=\"https://steamuserimages-a.akamaihd.net/ugc/100603690261120555/3288949BD5D35B3BCFA9DE0B65FAADE54BBD701C/\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='sea'\">\r\n    <img src=\"http://wallup.net/wp-content/uploads/2016/05/26/356350-pixel_art-sea-beach-rocks-digital_art.jpg\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='urban'\">\r\n    <img src=\"https://orig00.deviantart.net/792a/f/2017/061/6/0/landscape_city_pixel_art_by_metalbrasier2x0-db0y5pj.gif\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='waters-edge'\">\r\n    <img src=\"http://wallup.net/wp-content/uploads/2016/03/10/341369-digital_art-pixel_art-pixels-Moon-horizon-blue-reflection-nature-sea-clouds-hills-mountains-night-stars-landscape.jpg\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n  <div *ngIf=\"habitatToDisplay.name==='rare'\">\r\n    <img src=\"http://hexa.party/wp-content/uploads/2016/03/8-bit-Mountains.jpg\" alt=\"\" class=\"backgroundImage\">\r\n  </div>\r\n\r\n  <div *ngIf=\"isSearching &&!newPokemon\" >\r\n    <h1 class=\"searching\">Searching for Pokemon...</h1>\r\n  </div>\r\n\r\n  <div *ngIf=\"!isSearching\">\r\n    <div *ngIf=\"!newPokemon || !isSearching\">\r\n\r\n    <button type=\"button\" (click)=\"stopSong()\" routerLink=\"/map\" class=\"btn btn-warning back\">Back to map</button>\r\n\r\n    <h1 class=\"habitatName\" [@flyInFromTop]=\"'in'\">{{habitatToDisplay.name.toUpperCase()}} </h1>\r\n\r\n    <button (click)=\"stopSong()\" [@flyInFromSide]=\"'in'\"type=\"button\" name=\"button\" class=\"searchEasy search btn btn-success\" (click)=\"searchHabitat(habitatToDisplay, 'easy')\">Search - Easy</button>\r\n\r\n    <button (click)=\"stopSong()\" [@flyInFromSide]=\"'in'\" type=\"button\" name=\"button\" class=\"searchMedium search btn btn-warning\" (click)=\"searchHabitat(habitatToDisplay, 'medium')\">Search - Medium</button>\r\n\r\n    <button (click)=\"stopSong()\" [@flyInFromSide]=\"'in'\" type=\"button\" name=\"button\" class=\"searchHard search btn btn-danger\" (click)=\"searchHabitat(habitatToDisplay, 'hard')\">Search - Hard</button>\r\n      </div>\r\n\r\n  </div>\r\n  </div>\r\n\r\n<div *ngIf=\"newPokemon\"><app-battle [opponent]=\"newPokemon\"></app-battle></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/habitat/habitat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabitatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pokemon_model__ = __webpack_require__("../../../../../src/app/pokemon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HabitatComponent = (function () {
    function HabitatComponent(route, location, pokemonService) {
        this.route = route;
        this.location = location;
        this.pokemonService = pokemonService;
        this.newPokemon = null;
        this.apiURL = "http://pokeapi.co/api/v2/";
        this.equippedPokemon = [];
        this.allPokemon = [];
        this.isSearching = false;
    }
    HabitatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (urlParameters) {
            _this.habitatId = urlParameters['id'];
        });
        this.pokemonService.getHabitatById(this.habitatId).subscribe(function (dataLastEmittedFromObserver) {
            _this.habitatToDisplay = dataLastEmittedFromObserver;
        });
        this.pokemonService.getAllPokemon().subscribe(function (allPokemonFromFirebase) {
            _this.allPokemon = (allPokemonFromFirebase);
            _this.populateEquippedPokemonArray();
        });
        if (this.habitatId === "1") {
            this.pokemonService.playSong("../assets/music/cave.mp3");
        }
        else if (this.habitatId === "2") {
            this.pokemonService.playSong("../assets/music/habitat.mp3");
        }
        else if (this.habitatId === "3") {
            this.pokemonService.playSong("../assets/music/grassland.mp3");
        }
        else if (this.habitatId === "4") {
            this.pokemonService.playSong("../assets/music/mountain.mp3");
        }
        else if (this.habitatId === "5") {
            this.pokemonService.playSong("../assets/music/rare.mp3");
        }
        else if (this.habitatId === "6") {
            this.pokemonService.playSong("../assets/music/rough-terrain.mp3");
        }
        else if (this.habitatId === "7") {
            this.pokemonService.playSong("../assets/music/sea.mp3");
        }
        else if (this.habitatId === "8") {
            this.pokemonService.playSong("../assets/music/urban.mp3");
        }
        else if (this.habitatId === "9") {
            this.pokemonService.playSong("../assets/music/water-side.mp3");
        }
    };
    HabitatComponent.prototype.populateEquippedPokemonArray = function () {
        this.equippedPokemon = [];
        for (var i = 0; i < this.allPokemon.length; i++) {
            if (this.allPokemon[i].equipped) {
                this.equippedPokemon.push(this.allPokemon[i]);
            }
        }
    };
    HabitatComponent.prototype.stopSong = function () {
        this.pokemonService.stopSong();
    };
    HabitatComponent.prototype.buildPokemon = function (pokemonToBuild) {
        var activeMoves = [];
        var movesNumber = 2;
        if (this.difficulty === "easy") {
            movesNumber = 2;
        }
        else if (this.difficulty === "medium") {
            movesNumber = 3;
        }
        else if (this.difficulty === "hard") {
            movesNumber = 4;
        }
        for (var i = 0; i < movesNumber; i++) {
            activeMoves[i] = pokemonToBuild.moves[Math.floor(Math.random() * (pokemonToBuild.moves.length))].move;
        }
        var name = pokemonToBuild.name;
        var sprites = [pokemonToBuild.sprites.front_default, pokemonToBuild.sprites.back_default];
        var types = pokemonToBuild.types;
        var level = this.difficulty;
        var currentLevelXP = 0;
        var totalLevelXP = level * 20;
        var totalAccruedXP = 0;
        var currentHP = pokemonToBuild.stats[5].base_stat + (level * 2);
        var maxHP = pokemonToBuild.stats[5].base_stat + (level * 2);
        var speed = pokemonToBuild.stats[0].base_stat + level;
        var attack = pokemonToBuild.stats[4].base_stat + level;
        var defense = pokemonToBuild.stats[3].base_stat + level;
        var allMoves = pokemonToBuild.moves;
        var equipped = false;
        this.newPokemon = new __WEBPACK_IMPORTED_MODULE_4__pokemon_model__["a" /* Pokemon */](name, sprites, types, level, currentLevelXP, totalLevelXP, totalAccruedXP, currentHP, maxHP, speed, attack, defense, activeMoves, allMoves, equipped);
        //this.pokemonService.catchPokemon(this.newPokemon);
    };
    HabitatComponent.prototype.apiCall = function () {
        var _this = this;
        this.pokemonService.getData(this.apiURL).subscribe(function (returnedJSON) {
            _this.returnedData = returnedJSON;
        }, function (returnedJSON) {
            console.log("ERROR: ", returnedJSON);
        }, function () {
            // console.log(this.returnedData);
            _this.buildPokemon(_this.returnedData);
        });
    };
    HabitatComponent.prototype.searchHabitat = function (habitatToSearch, difficulty) {
        this.isSearching = true;
        var randomPokemon = Math.floor(Math.random() * habitatToSearch.pokemon_species.length);
        //console.log(habitatToSearch.pokemon_species[randomPokemon].name)
        this.apiURL = habitatToSearch.pokemon_species[randomPokemon].url;
        if (difficulty === "easy") {
            this.difficulty = Math.floor(Math.random() * (3 - 1) + 1);
            console.log(this.difficulty);
        }
        else if (difficulty === "medium") {
            this.difficulty = Math.floor(Math.random() * (30 - 10) + 10);
            console.log(this.difficulty);
        }
        else if (difficulty === "hard") {
            this.difficulty = Math.floor(Math.random() * (70 - 30) + 30);
            console.log(this.difficulty);
        }
        this.apiCall();
    };
    return HabitatComponent;
}());
HabitatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-habitat',
        template: __webpack_require__("../../../../../src/app/habitat/habitat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/habitat/habitat.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__pokemon_service__["a" /* PokemonService */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* trigger */])('flyInFromTop', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ transform: 'translateY(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])(".9s ease", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* trigger */])('flyInFromSide', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])("0s 0s", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])(".7s 1s ease", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pokemon_service__["a" /* PokemonService */]) === "function" && _c || Object])
], HabitatComponent);

var _a, _b, _c;
//# sourceMappingURL=habitat.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n  background-image: url(\"/pokemon-adventure/../assets/images/pokeball_bg.jpg\");\r\n  background-size: cover ;\r\npadding-bottom: 800px;\r\nbackground-repeat: no-repeat;\r\ntext-align: center;\r\nbackground-position: center;\r\n}\r\n.title{\r\n  letter-spacing: 5px;\r\n  color: white;\r\n   text-shadow: 2px 2px 4px black;\r\n   font-size: 6em;\r\n\r\n}\r\n.nav{\r\n  text-align: center;\r\n\r\n}\r\n.btnplay{\r\n  margin-top: 100px;\r\n  font-size: 2em;\r\n}\r\n.credits{\r\n  bottom: 0;\r\n  position: fixed;\r\n}\r\n.backToLogin{\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n#anonymousIcon{\r\n\theight: 48px;\r\n}\r\nimg#anonymousIcon:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n\r\na:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n\tcolor: green;\r\n}\r\n.delete{\r\nmargin: 20px;\r\n}\r\n.btn:hover{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- <a (click)=\"googleLogout()\">Log out  <img id=\"anonymousIcon\" src=\"./../assets/images/user.jpg\" alt=\"user\"></a> -->\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"title\">Pokemon Adventure</h1>\r\n\r\n    <h1><button type=\"button\" name=\"button\" class=\"btn btn-warning btnplay\" (click) = \"goToGame()\" >Play!</button></h1>\r\n\r\n    <button type=\"button\" name=\"button\" (click)=\"deleteAllPokemon()\" class=\"btn btn-danger delete\">Delete Pokemon</button>\r\n    <p class=\"credits\">By: Ben, Michael, Robert, Kim, and Jonathan</p>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(pokemonService, authService, router) {
        this.pokemonService = pokemonService;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getAllPokemon().subscribe(function (allPokemonFromFirebase) {
            _this.amountOfPokemon = (allPokemonFromFirebase.length);
        });
        this.pokemonService.playSong("../assets/music/opening.mp3");
    };
    HomeComponent.prototype.deleteAllPokemon = function () {
        var r = confirm("Are you sure you want to clear the database of Pokemon?");
        if (r) {
            this.pokemonService.deleteAllPokemon();
            alert('Pokemon cleared');
        }
        else {
        }
    };
    HomeComponent.prototype.goToGame = function () {
        this.pokemonService.stopSong();
        if (this.amountOfPokemon === 0) {
            this.router.navigate(['tutorial']);
        }
        else {
            this.router.navigate(['map']);
        }
    };
    HomeComponent.prototype.googleLogout = function () {
        this.authService.logout();
        this.router.navigate(['']);
        this.pokemonService.stopSong();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n\tcolor: green;\r\n}\r\n#googleIcon{\r\n\theight: 48px;\r\n}\r\nimg#googleIcon:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n\r\n#anonymousIcon{\r\n\theight: 48px;\r\n}\r\nimg#anonymousIcon:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n\r\n#btnSignIn, #btnSignup{\r\n\twidth: 100%;\r\n}\r\n\r\n#btnSignIn:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n\r\n#btnSignup:hover{\r\n\tcursor: pointer;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n/*\r\nspan.badge{\r\n\tcolor: #ca3f3f;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n   <div class=\"container-fluid\">\r\n     <!-- <div class=\"navbar-header\">\r\n       <a class=\"navbar-brand\" routerLink=\"battle\">Battle</a>\r\n        <a class=\"navbar-brand\" routerLink=\"getPokemon\">get-pokemon</a>\r\n     </div> -->\r\n     <ul class=\"nav navbar-nav navbar-right\">\r\n       <li *ngIf=\"user\">\r\n         <!-- <a>{{userName}}</a> <br>\r\n         <span class=\"badge badge-success\">{{(currentUser | async).pokemons.length}}</span> -->\r\n         <a (click)=\"googleLogout()\">Log out  <img id=\"googleIcon\" src=\"./../assets/images/user.jpg\" alt=\"user\"></a>\r\n          <!-- <a (click)=\"startPlaying()\"> Start Playing </a> -->\r\n       </li>\r\n     </ul>\r\n   </div>\r\n </nav>\r\n\r\n\r\n<button *ngIf=\"user\" type=\"button\" name=\"button\" ><h1 routerLink = \"/map\" >Map</h1></button>\r\n\r\n\r\n\r\n <div *ngIf=\"!user\" class=\"card container\" style=\"width: 20rem;\">\r\n   <div>\r\n     <img class=\"card-img-top\" src=\"./../assets/images/pokemon.jpg\" alt=\"pokemon\">\r\n     <br><br><br>\r\n   </div>\r\n   <div class=\"card-block \">\r\n     <div class=\"form-group\">\r\n       <label>Email</label>\r\n       <input class=\"form-control\"  #email type=\"email\">\r\n     </div>\r\n     <div class=\"form-group\">\r\n       <label>Password</label>\r\n       <input class=\"form-control\" #password type=\"password\">\r\n     </div>\r\n     <div class=\"form-group\">\r\n       <button id=\"btnSignup\" (click)=\"signUp(email.value, password.value)\" class=\"btn btn-primary\">Sign Up</button>\r\n     </div>\r\n     <div class=\"form-group\">\r\n       <button id=\"btnSignIn\" (click)=\"signIn(email.value, password.value)\"  class=\"btn btn-default\">Sign In</button>\r\n     </div>\r\n     <div *ngIf =\"!user\">\r\n       <a (click)=\"googleLogin()\">  <img id=\"googleIcon\" src=\"./../assets/images/googleIcon.png\" alt=\"googleIcon\"> Log in with Google</a>\r\n       <br><br>\r\n     </div>\r\n     <div *ngIf =\"!user\">\r\n       <a (click)=\"anonymousLogin()\">  <img id=\"anonymousIcon\" src=\"./../assets/images/anonymous.jpg\" alt=\"anonimousIcon\">Anonymous Login</a>\r\n       <br><br><br>\r\n     </div>\r\n\r\n   </div>\r\n </div>\r\n\r\n <!-- <div *ngIf=\"isLoggedIn && notPlayedBefore\" class=\"card container\" style=\"width: 20rem;\">\r\n   <div>\r\n     <img class=\"card-img-top\" src=\"./../assets/images/pokemon.jpg\" alt=\"pokemon\">\r\n     <br><br><br>\r\n   </div>\r\n   <div class=\"card-block \">\r\n     <div class=\"form-group\">\r\n       <label>Name</label>\r\n       <input  #name>\r\n     </div>\r\n      <div>\r\n       <button (click)=\"startCreatingPlayer(name.value); name.value='';\" class=\"btn btn-primary\"> Submit </button>\r\n       <br><br><br>\r\n     </div>\r\n   </div>\r\n </div> -->\r\n\r\n <!-- <router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, pokemonService, router) {
        this.authService = authService;
        this.pokemonService = pokemonService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngDoCheck = function () {
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        this.authService.login();
        this.isLoggedIn = true;
        setTimeout(function () {
            _this.router.navigate(['home']);
        }, 2000);
    };
    LoginComponent.prototype.googleLogout = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.signUp = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorMessage = error.message;
            if (!errorMessage) {
                this.router.navigate(['home']);
            }
            else {
                alert(error.message);
                //this.isLoggedIn = true;
            }
        });
    };
    LoginComponent.prototype.signIn = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorMessage = error.message;
            if (errorMessage) {
                alert(error.message);
            }
            else {
                this.router.navigate(['home']);
                alert("you have successfully signed in");
            }
        });
    };
    LoginComponent.prototype.anonymousLogin = function () {
        this.router.navigate(['home']);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInAnonymously().catch(function (error) {
            var errorMessage = error.message;
            if (errorMessage) {
                alert(error.message);
            }
            else {
                this.router.navigate(['home']);
                alert("you have successfully signed in");
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-size: 100%;\r\n  background-color: #e2f9ff;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n.home{\r\n  height: 30px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.absoluteContainer {\r\n  position: absolute;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n\r\n}\r\n.btn:hover{\r\n  cursor: pointer;\r\n}\r\n.habitat {\r\n  position: relative;\r\n  float: left;\r\n  z-index: 1;\r\n  width: 60%;\r\n  padding-left: 0px;\r\n  max-height: 1000px;\r\n  margin-left: 20%;\r\n}\r\n\r\nh1 {\r\n  font-size: 3vh;\r\n  font-size: 3.2vw;\r\n  font-family: \"Berkshire-Swash\";\r\n  color:white;\r\n  text-shadow: 3px 5px 3px black;\r\n  padding-left: 20px;\r\n}\r\n\r\nh1:hover {\r\n  text-decoration: underline;\r\n  color: #f4bda1;\r\n  -webkit-transform: scale(1.02);\r\n          transform: scale(1.02);\r\n  cursor: pointer;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Berkshire-Swash\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/BerkshireSwash-Regular.ttf") + ");\r\n}\r\n\r\n.app-my-pokemon {\r\n  /*position: absolute;\r\n  padding-top: 50px;*/\r\n}\r\n\r\n.map-face {\r\n  max-width: 700em;\r\n}\r\n.app-my-pokemon{\r\n  margin-top: 50px;\r\n}\r\n\r\n.needHealing{\r\n  padding-top: 30px;\r\n}\r\n.needHealing h2{\r\n    font-size: 5em;\r\n    color: red;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"map-face\">\r\n  <div class=\"absoluteContainer\">\r\n    <img src=\"../assets/images/map.jpg\" alt=\"\">\r\n    <div *ngIf=\"needHealing\" class=\"d-flex justify-content-center needHealing\">\r\n      <h2>Heal your pokemon!</h2>\r\n    </div>\r\n    <div class=\"app-my-pokemon\">\r\n\r\n      <app-my-pokemon (healPokemonSender) = \"healedPokemon($event)\"></app-my-pokemon>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"habitat\" *ngIf=\"habitats\">\r\n    <div class=\"row\">\r\n          <button type=\"button\" name=\"button\" class=\"btn btn-warning home\" (click)=\"stopSong()\" routerLink=\"/home\">Go Home</button>\r\n      <div class=\"col-md-6\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[4])\">{{habitats[4].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[5])\">{{habitats[5].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[8])\">{{habitats[8].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[2])\">{{habitats[2].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[7])\">{{habitats[7].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[3])\">{{habitats[3].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[0])\">{{habitats[0].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[1])\">{{habitats[1].name}}</h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <h1 (click)=\"goToHabitat(habitats[6])\">{{habitats[6].name}}</h1>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- <div>\r\n  <div *ngFor=\"let habitat of habitats\" >\r\n    <h1 (click)=\"goToHabitat(habitat)\">{{habitat.name}}</h1>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(router, pokemonService) {
        this.router = router;
        this.pokemonService = pokemonService;
        this.habitats = null;
        this.needHealing = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getHabitats().subscribe(function (habitats) {
            _this.habitats = (habitats);
            //console.log(this.habitats)
        });
        this.pokemonService.playSong("../assets/music/map.mp3");
    };
    MapComponent.prototype.healedPokemon = function () {
        this.needHealing = false;
    };
    MapComponent.prototype.stopSong = function () {
        this.pokemonService.stopSong();
    };
    MapComponent.prototype.goToHabitat = function (clickedHabitat) {
        this.needHealing = false;
        var allowed = false;
        this.pokemonService.stopSong();
        this.pokemonService.getEquippedPokemon().forEach(function (pokemon) {
            if (pokemon.currentHP > 0) {
                allowed = true;
            }
        });
        if (allowed) {
            this.router.navigate(['habitat', clickedHabitat.id]);
        }
        else {
            this.needHealing = true;
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-pokemon/my-pokemon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".equipped-pokemon{\r\n\r\n  background-color: #d1d1d1;\r\n\r\n  z-index: -1;\r\n\r\n}\r\n\r\n.bgFainted{\r\n  background-color: red;\r\n}\r\n\r\n.card{\r\n  display: inline-block;\r\n  padding: 15px;\r\n  margin: 5px;\r\n  width: 180px;\r\n  top: 0;\r\n  background-color:#ededed;\r\n  height: 310px;\r\n}\r\n.card-title{\r\n  text-align: center;\r\n  font-size: 1em;\r\n}\r\n.card:hover{\r\n  border: 1px solid grey;\r\n}\r\n.trainerHeader{\r\n  background-color: silver;\r\n\r\n  text-align: center;\r\n}\r\n.card-img-top{\r\n  height: 130px;\r\n}\r\n.trainerImg{\r\n  height: 150px;\r\n  padding-left: 30px;\r\n}\r\n.card-equipped{\r\n  max-width: 180px;\r\n}\r\n.isEquipped{\r\n  background-color: #fffde2;\r\n  text-align: center;\r\n}\r\n.swap{\r\n  background-color: #d1e2ff;\r\n  text-align: center;\r\n}\r\n.swap:hover{\r\n  background-color: #94bbfc;\r\n}\r\n.notEquipped{\r\n  background-color: #e2ffe2;\r\n}\r\n.isEquipped:hover{\r\n    cursor: pointer;\r\n}\r\n.notEquipped:hover{\r\n    cursor: pointer;\r\n}\r\n.equipped-header{\r\n  font-size: 1em;\r\n  margin: 10px;\r\n}\r\n.show-all-btn{\r\n  font-size: 2em;\r\n  text-align: center;\r\n  display: block;\r\n}\r\n.btns{\r\n  padding: 5px;\r\n}\r\n.btn:hover{\r\n  cursor: pointer;\r\n}\r\n.swap{\r\n\r\n}\r\n\r\nh1 {\r\n\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-pokemon/my-pokemon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row buffer\"></div>\r\n\r\n<div class=\"container equipped-pokemon\">\r\n  <div class=\"row trainerHeader\">\r\n      <h1><img src=\"https://vignette3.wikia.nocookie.net/pokemon/images/5/56/Red_%28game%29.png/revision/latest?cb=20090815115503\" alt=\"\" class=\"trainerImg\"><span class=\"equipped-header\">Equipped Pokemon {{equippedPokemon.length}}/6</span>\r\n        <span *ngIf=\"!battling\">\r\n          <button (click) = \"healPokemon()\" type=\"button\" class=\"btn btn-success\" name=\"button\">Heal My Pokemon</button>\r\n        </span>\r\n      </h1>\r\n\r\n    </div>\r\n\r\n    <div class=\"card-deck\" *ngIf=\"!battling\">\r\n    <div [@flyInFromTop]=\"'in'\" class=\"card card-equipped\" *ngFor=\"let pokemon of equippedPokemon\" >\r\n      <img class=\"card-img-top\" src='{{pokemon.sprites[0]}}' alt=\"Card image cap\">\r\n      <div class=\"card-block\">\r\n        <h4 *ngIf=\"pokemon.currentHP>0\" class=\"card-title\" >{{pokemon.name}}</h4>\r\n        <h4 *ngIf=\"pokemon.currentHP===0\" class=\"card-title\" >{{pokemon.name}} (Fainted)</h4>\r\n        <p class=\"card-text\"></p>\r\n      </div>\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">Level: {{pokemon.level}}</li>\r\n        <li class=\"list-group-item\">HP: {{pokemon.currentHP}}/{{pokemon.maxHP}}</li>\r\n      </ul>\r\n      <div *ngIf=\"pokemon.equipped\" class=\"isEquipped\" (click)=\"unequip(pokemon)\">\r\n        Click to Unequip\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-deck\" *ngIf=\"battling\">\r\n  <div class=\"card card-equipped\" *ngFor=\"let pokemon of equippedPokemon\" >\r\n    <img class=\"card-img-top\" src='{{pokemon.sprites[0]}}' alt=\"Card image cap\">\r\n    <div class=\"card-block\">\r\n      <h4 *ngIf=\"pokemon.currentHP>0\" class=\"card-title\" >{{pokemon.name}}</h4>\r\n      <h4 *ngIf=\"pokemon.currentHP===0\" class=\"card-title\" >{{pokemon.name}} (Fainted)</h4>\r\n      <p class=\"card-text\"></p>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Level: {{pokemon.level}}</li>\r\n      <li class=\"list-group-item\">HP: {{pokemon.currentHP}}/{{pokemon.maxHP}}</li>\r\n    </ul>\r\n    <div *ngIf=\"pokemon.currentHP>0\"(click)=\"switchPokemon(pokemon)\" class=\"swap\">\r\n      Swap!\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n  <div class=\"btns\" *ngIf=\"!battling\">\r\n    <button *ngIf=\"!showAllPokemonBool\" type=\"button\" name=\"button\" class=\"btn btn-info show-all-btn\" (click)=\"showAllPokemon()\">Show All Pokemon</button>\r\n    <button *ngIf=\"showAllPokemonBool\" type=\"button\" name=\"button\" class=\"btn btn-info show-all-btn\" (click)=\"showAllPokemon()\">Hide All Pokemon</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"container all-pokemon\" *ngIf=\"showAllPokemonBool\">\r\n  <h1>All Pokemon</h1>\r\n    <div  class=\"card all-pokemon-card\" *ngFor=\"let pokemon of allPokemon\" (click)=equip(pokemon) >\r\n      <img class=\"card-img-top\" src='{{pokemon.sprites[0]}}' alt=\"Card image cap\">\r\n      <div class=\"card-block\">\r\n        <h4 *ngIf=\"pokemon.currentHP>0\" class=\"card-title\" >{{pokemon.name}}</h4>\r\n        <h4 *ngIf=\"pokemon.currentHP===0\" class=\"card-title\" >{{pokemon.name}} (Fainted)</h4>\r\n        <p class=\"card-text\"></p>\r\n      </div>\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">Level: {{pokemon.level}}</li>\r\n        <li class=\"list-group-item\">HP: {{pokemon.currentHP}}/{{pokemon.maxHP}}</li>\r\n      </ul>\r\n      <div *ngIf=\"pokemon.equipped\" class=\"isEquipped\">\r\n        Equipped\r\n      </div>\r\n      <div *ngIf=\"!pokemon.equipped\" class=\"notEquipped\">\r\n        Click to Equip\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/my-pokemon/my-pokemon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPokemonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPokemonComponent = (function () {
    function MyPokemonComponent(router, pokemonService) {
        this.router = router;
        this.pokemonService = pokemonService;
        this.switchPokemonSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.healPokemonSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.allPokemon = null;
        this.equippedPokemon = [];
        this.showAllPokemonBool = false;
    }
    MyPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getAllPokemon().subscribe(function (allPokemonFromFirebase) {
            _this.allPokemon = (allPokemonFromFirebase);
            _this.populateEquippedPokemonArray();
        });
    };
    MyPokemonComponent.prototype.healPokemon = function () {
        this.pokemonService.healPokemon();
        this.healPokemonSender.emit();
    };
    MyPokemonComponent.prototype.populateEquippedPokemonArray = function () {
        this.equippedPokemon = [];
        for (var i = 0; i < this.allPokemon.length; i++) {
            if (this.allPokemon[i].equipped) {
                this.equippedPokemon.push(this.allPokemon[i]);
            }
        }
    };
    MyPokemonComponent.prototype.stopSong = function () {
        this.pokemonService.stopSong();
    };
    MyPokemonComponent.prototype.unequip = function (pokemonToUnequip) {
        if (this.equippedPokemon.length > 1) {
            this.pokemonService.unequipPokemon(pokemonToUnequip);
            this.populateEquippedPokemonArray();
        }
        else {
            alert("You must have at least one pokemon equipped!");
        }
    };
    MyPokemonComponent.prototype.equip = function (pokemonToEquip) {
        if (this.equippedPokemon.length < 6) {
            this.pokemonService.equipPokemon(pokemonToEquip);
            this.populateEquippedPokemonArray();
        }
        else {
            alert("Maximun of six pokemon can be equipped at a time!");
        }
    };
    MyPokemonComponent.prototype.showAllPokemon = function () {
        if (this.showAllPokemonBool === false) {
            this.showAllPokemonBool = true;
        }
        else {
            this.showAllPokemonBool = false;
        }
    };
    MyPokemonComponent.prototype.switchPokemon = function (pokemonToSwitch) {
        this.switchPokemonSender.emit(pokemonToSwitch);
        ///  console.log(pokemonToSwitch);
    };
    return MyPokemonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], MyPokemonComponent.prototype, "battling", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], MyPokemonComponent.prototype, "switchPokemonSender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], MyPokemonComponent.prototype, "healPokemonSender", void 0);
MyPokemonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-pokemon',
        template: __webpack_require__("../../../../../src/app/my-pokemon/my-pokemon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-pokemon/my-pokemon.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('flyInFromTop', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ transform: 'translateY(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(".9s ease", Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('flyInFromSide', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])("0s 0s", Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(".7s 1s ease", Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]) === "function" && _b || Object])
], MyPokemonComponent);

var _a, _b;
//# sourceMappingURL=my-pokemon.component.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon; });
var Pokemon = (function () {
    function Pokemon(name, sprites, types, level, currentLevelXP, totalLevelXP, totalAccruedXP, currentHP, maxHP, speed, attack, defense, activeMoves, allMoves, equipped) {
        this.name = name;
        this.sprites = sprites;
        this.types = types;
        this.level = level;
        this.currentLevelXP = currentLevelXP;
        this.totalLevelXP = totalLevelXP;
        this.totalAccruedXP = totalAccruedXP;
        this.currentHP = currentHP;
        this.maxHP = maxHP;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.activeMoves = activeMoves;
        this.allMoves = allMoves;
        this.equipped = equipped;
    }
    return Pokemon;
}());

//# sourceMappingURL=pokemon.model.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonService = (function () {
    function PokemonService(http, database) {
        this.http = http;
        this.database = database;
        this.audio = new Audio();
        this.allPokemon = database.list('allPokemon');
        this.habitats = database.list('habitats');
    }
    PokemonService.prototype.healPokemon = function () {
        var allPokemon;
        this.getAllPokemon().subscribe(function (allPokemonFromFirebase) {
            allPokemon = (allPokemonFromFirebase);
        });
        for (var i = 0; i < allPokemon.length; i++) {
            allPokemon[i].currentHP = allPokemon[i].maxHP;
            var pokemonEntryInFirebase = this.getPokemonById(allPokemon[i]);
            pokemonEntryInFirebase.update({ currentHP: allPokemon[i].currentHP });
        }
    };
    PokemonService.prototype.deleteAllPokemon = function () {
        var allPokemon = this.database.object('allPokemon/');
        allPokemon.remove();
    };
    PokemonService.prototype.playSong = function (song) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.loop = true;
        this.audio.src = song;
        this.audio.load();
        this.audio.play();
    };
    PokemonService.prototype.stopSong = function () {
        this.audio.pause();
        this.audio.currentTime = 0;
    };
    PokemonService.prototype.getData = function (apiURL) {
        return this.http.get(apiURL)
            .map(this.extractData);
    };
    PokemonService.prototype.extractData = function (res) {
        return res.json();
    };
    PokemonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    PokemonService.prototype.getHabitats = function () {
        return this.habitats;
    };
    PokemonService.prototype.catchPokemon = function (pokemonToAdd) {
        this.allPokemon.push(pokemonToAdd);
    };
    PokemonService.prototype.getPokemonById = function (pokemon) {
        return this.database.object('/allPokemon/' + pokemon.$key);
    };
    PokemonService.prototype.getAllPokemon = function () {
        //console.log(this.allPokemon);
        return this.allPokemon;
    };
    PokemonService.prototype.unequipPokemon = function (pokemonToUnequip) {
        var pokemonEntryInFirebase = this.getPokemonById(pokemonToUnequip);
        pokemonEntryInFirebase.update({ equipped: false });
    };
    PokemonService.prototype.equipPokemon = function (pokemonToEquip) {
        var pokemonEntryInFirebase = this.getPokemonById(pokemonToEquip);
        pokemonEntryInFirebase.update({ equipped: true });
    };
    PokemonService.prototype.updateStats = function (pokemon) {
        var pokemonEntryInFirebase = this.getPokemonById(pokemon);
        pokemonEntryInFirebase.update({ currentHP: pokemon.currentHP });
    };
    PokemonService.prototype.updateXP = function (pokemon) {
        var pokemonEntryInFirebase = this.getPokemonById(pokemon);
        if (pokemon.currentLevelXP >= pokemon.totalLevelXP) {
            pokemon.level++;
            console.log(pokemon.level);
            pokemon.currentLevelXP -= pokemon.totalLevelXP;
            pokemon.totalLevelXP = Math.floor(pokemon.totalLevelXP * 1.2);
            pokemon.speed += 2;
            pokemon.attack += 2;
            pokemon.defense += 2;
            pokemon.maxHP += 5;
            pokemonEntryInFirebase.update({ level: pokemon.level });
            pokemonEntryInFirebase.update({ totalLevelXP: pokemon.totalLevelXP });
            pokemonEntryInFirebase.update({ speed: pokemon.speed });
            pokemonEntryInFirebase.update({ attack: pokemon.attack });
            pokemonEntryInFirebase.update({ defense: pokemon.defense });
            pokemonEntryInFirebase.update({ maxHP: pokemon.maxHP });
        }
        pokemonEntryInFirebase.update({ currentLevelXP: pokemon.currentLevelXP });
    };
    PokemonService.prototype.getHabitatById = function (habitatId) {
        habitatId -= 1;
        var returnedHabitat = this.database.object('habitats/' + habitatId);
        //  console.log(returnedHabitat);
        return returnedHabitat;
    };
    PokemonService.prototype.getEquippedPokemon = function () {
        var equippedPokemon = [];
        this.getAllPokemon().subscribe(function (allPokemonFromFirebase) {
            var allPokemon = (allPokemonFromFirebase);
            for (var i = 0; i < allPokemon.length; i++) {
                if (allPokemon[i].equipped) {
                    equippedPokemon.push(allPokemon[i]);
                }
            }
        });
        return equippedPokemon;
    };
    return PokemonService;
}());
PokemonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], PokemonService);

var _a, _b;
//# sourceMappingURL=pokemon.service.js.map

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".oakText{\r\n\r\n  margin-top: 50px;\r\n  font-size: 3em;\r\n\r\n}\r\n.oak img{\r\n  width: 400px;\r\n}\r\n.starters{\r\n  text-align: center;\r\n}\r\n.starter{\r\n  width: 200px;\r\n  background-color: #f4f4f4;\r\n\r\n}\r\nbody{\r\n  background-color: #fffcf2;\r\n}\r\n.btn{\r\n  margin: 10px;\r\n  font-size: 1.5em;\r\n}\r\n.map{\r\n  width: 400px;\r\n}\r\n.searching{\r\n  color: green;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-4 oak\">\r\n        <img src=\"http://33.media.tumblr.com/tumblr_ljypvr4kPz1qg0dcvo1_500.gif\" alt=\"\">\r\n\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"oakText\">\r\n          <p *ngIf=\"line===0\">Ah! I see you are new here! Welcome to Pokemon Adventure.</p>\r\n          <p *ngIf=\"line===1\">There is a lot to learn on your journey to become a Pokemon master!</p>\r\n          <p *ngIf=\"line===2\">First, select your starter Pokemon!</p>\r\n          <p *ngIf=\"line===3\">Great choice! You can view your pokemon below. Although you can only have 6 equipped at a time, you can choose which ones to equip from the Map screen.</p>\r\n          <div *ngIf=\"line===4\">\r\n            <p >On the map, you can select where to travel.  </p>\r\n          </div>\r\n\r\n          <p *ngIf=\"line===5\">Once you travel to a location, you can SEARCH for Pokemon, and fight them!</p>\r\n          <p *ngIf=\"line===6\">Good luck out there!</p>\r\n\r\n        </div>\r\n        <button *ngIf=\"line<=1 || line>=3\" type=\"button\" name=\"button\" class=\"btn btn-warning\" (click)=\"next()\">Next</button>\r\n\r\n      <div *ngIf=\"searching && line===2\">\r\n        <h1 class=\"searching\">Hatching your Pokemon...</h1>\r\n      </div>\r\n\r\n        <div class=\"row\" *ngIf=\"!searching\">\r\n          <div class=\"starters\" *ngIf=\"line===2\">\r\n            <div class=\"card-deck\" >\r\n              <div class=\"card starter\">\r\n                <img class=\"card-img-top starter\" src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png\" alt=\"Card image cap\">\r\n                <div class=\"card-block\">\r\n                  <button (click)=\"squirtle()\" class=\"btn btn-primary\">Squirtle</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"card starter\">\r\n                <img class=\"card-img-top starter\" src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png\" alt=\"Card image cap\">\r\n                <div class=\"card-block\">\r\n                  <button  (click)=\"bulbasaur()\" class=\"btn btn-success\">Bulbasaur</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"card starter\">\r\n                <img class=\"card-img-top starter\" src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png\" alt=\"Card image cap\">\r\n                <div class=\"card-block\">\r\n                  <button (click)=\"charmander()\" class=\"btn btn-danger\">Charmander</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"line===3\">\r\n    <app-my-pokemon></app-my-pokemon>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon_model__ = __webpack_require__("../../../../../src/app/pokemon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialComponent = (function () {
    function TutorialComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.searching = false;
        this.line = 0;
    }
    TutorialComponent.prototype.ngOnInit = function () {
        this.pokemonService.playSong("../assets/music/tutorial.mp3");
    };
    TutorialComponent.prototype.next = function () {
        this.line++;
        if (this.line === 7) {
            this.pokemonService.stopSong();
            this.router.navigate(['map']);
        }
    };
    TutorialComponent.prototype.buildPokemon = function (pokemonToBuild) {
        var activeMoves = [];
        var movesNumber = 2;
        for (var i = 0; i < movesNumber; i++) {
            activeMoves[i] = pokemonToBuild.moves[Math.floor(Math.random() * (pokemonToBuild.moves.length))].move;
        }
        var name = pokemonToBuild.name;
        var sprites = [pokemonToBuild.sprites.front_default, pokemonToBuild.sprites.back_default];
        var types = pokemonToBuild.types;
        var level = 1;
        var currentLevelXP = 0;
        var totalLevelXP = level * 20;
        var totalAccruedXP = 0;
        var currentHP = pokemonToBuild.stats[5].base_stat + (level * 30);
        var maxHP = pokemonToBuild.stats[5].base_stat + (level * 30);
        var speed = pokemonToBuild.stats[0].base_stat + level + 15;
        var attack = pokemonToBuild.stats[4].base_stat + level + 15;
        var defense = pokemonToBuild.stats[3].base_stat + level + 15;
        var allMoves = pokemonToBuild.moves;
        var equipped = true;
        pokemonToBuild = new __WEBPACK_IMPORTED_MODULE_2__pokemon_model__["a" /* Pokemon */](name, sprites, types, level, currentLevelXP, totalLevelXP, totalAccruedXP, currentHP, maxHP, speed, attack, defense, activeMoves, allMoves, equipped);
        //  console.log(pokemonToBuild);
        this.pokemonService.catchPokemon(pokemonToBuild);
        //console.log(pokemonToBuild);
    };
    TutorialComponent.prototype.bulbasaur = function () {
        this.apiUrl = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";
        this.apiCall();
    };
    TutorialComponent.prototype.squirtle = function () {
        this.apiUrl = "https://pokeapi.co/api/v2/pokemon/squirtle/";
        this.apiCall();
    };
    TutorialComponent.prototype.charmander = function () {
        this.apiUrl = "https://pokeapi.co/api/v2/pokemon/charmander/";
        this.apiCall();
    };
    TutorialComponent.prototype.apiCall = function () {
        var _this = this;
        this.searching = true;
        this.pokemonService.getData(this.apiUrl).subscribe(function (returnedJSON) {
            _this.returnedData = returnedJSON;
        }, function (returnedJSON) {
            //  console.log("ERROR: ",returnedJSON);
        }, function () {
            // console.log(this.returnedData);
            _this.buildPokemon(_this.returnedData);
            _this.next();
        });
    };
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tutorial',
        template: __webpack_require__("../../../../../src/app/tutorial/tutorial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tutorial/tutorial.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TutorialComponent);

var _a, _b;
//# sourceMappingURL=tutorial.component.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/BerkshireSwash-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BerkshireSwash-Regular.57791017495a68cc0596.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map