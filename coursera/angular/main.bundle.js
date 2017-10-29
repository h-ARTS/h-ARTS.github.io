webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"column\"\nfxLayoutGap=\"10px\">\n\n<div fxFlex>\n       <div>\n          <h3>About Us</h3>\n          <hr>\n       </div>\n</div>\n\n <div fxFlex>\n   <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n     <div fxFlex=\"70\">\n         <h2>Our History</h2>\n         <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n         <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n     </div>\n     <div fxFlex=\"30\">\n         <md-card>\n           <md-card-header>\n             <md-card-title>\n             <h2>Facts At a Glance</h2>\n             </md-card-title>\n           </md-card-header>\n           <md-card-content>\n                   <dl>\n                       <dt>Started</dt>\n                       <dd>3 Feb. 2013</dd>\n                       <dt>Major Stake Holder</dt>\n                       <dd>HK Fine Foods Inc.</dd>\n                       <dt>Last Year's Turnover</dt>\n                       <dd>$1,250,375</dd>\n                       <dt>Employees</dt>\n                       <dd>40</dd>\n                  </dl>\n           </md-card-content>\n         </md-card>\n     </div>\n   </div>\n </div>\n \n  <div fxFlex>\n    <md-card>\n        <blockquote>\n            <h3>You better cut the pizza in four pieces because\n                I'm not hungry enough to eat six.</h3>\n            <footer>-- Yogi Berra,\n              <cite>The Wit and Wisdom of Yogi Berra,\n                P. Pepe, Diversion Books, 2014</cite>\n            </footer>\n        </blockquote>\n    </md-card>\n  </div>\n\n\n   <div *ngIf=\"leaders\" fxFlex [@expand]>\n     <h2>Corporate Leadership</h2>\n     <md-list>\n       <md-list-item *ngFor=\"let leader of leaders\">\n        <img md-list-avatar src=\"{{BaseURL + leader.image}}\">\n        <p md-line >{{leader.name}} {{leader.abbr}}</p>\n        <p md-line>{{leader.designation}}</p>\n        <p md-line>{{leader.description}}</p>\n       </md-list-item>\n     </md-list>\n  </div>\n  <div [hidden]=\"leaders || leadersErrMsg\" fxFlex>\n    <md-spinner></md-spinner> <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"leadersErrMsg\">\n    <h2>Error</h2>\n    <h4>{{ leadersErrMsg }}</h4>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = (function () {
    function AboutComponent(leaderservice, BaseURL) {
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (leaderserrmsg) { return _this.leadersErrMsg = leaderserrmsg; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */]) === "function" && _a || Object, Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/app.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["c"] = visibility;
/* harmony export (immutable) */ __webpack_exports__["a"] = flyInOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expand;

function visibility() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('visibility', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyInOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('expand', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-50%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=app.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'menu',
        component: __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */]
    },
    {
        path: 'dishdetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__["a" /* DishdetailComponent */]
    },
    {
        path: 'aboutus',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'contactus',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_restConfig__ = __webpack_require__("../../../../../src/app/shared/restConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_highlight_directive__ = __webpack_require__("../../../../../src/app/directives/highlight.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_22__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__directives_highlight_directive__["a" /* HighlightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_21__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_restangular__["RestangularModule"].forRoot(__WEBPACK_IMPORTED_MODULE_25__shared_restConfig__["a" /* RestangularConfigFactory */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__login_login_component__["a" /* LoginComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_dish_service__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_17__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_18__services_leader_service__["a" /* LeaderService */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_23__shared_baseurl__["a" /* baseURL */] },
            __WEBPACK_IMPORTED_MODULE_19__services_process_httpmsg_service__["a" /* ProcessHTTPMsgService */],
            __WEBPACK_IMPORTED_MODULE_20__services_feedback_service__["a" /* FeedbackService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"column\"\nfxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Contact Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n  <h3>Location Information</h3> \n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n            <h4>Our Address</h4>\n            <address>\n              121, Clear Water Bay Road<br>\n              Clear Water Bay, Kowloon<br>\n              HONG KONG<br>\n              <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n              <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n              <i class=\"fa fa-envelope\"></i>: \n                    <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n            </address>\n            <p></p>\n            <div>\n                <a md-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n                <a md-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n                <a md-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n            </div>\n        </div>\n      <div fxFlex=\"40\">\n            <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\" *ngIf=\"!isSubmitting && !isVisible\" [@expand]>\n    <h3>Send us your Feedback</h3>\n\n    <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n        <p>\n          <md-input-container class=\"half-width\"\n           dividerColor=\"{{(formErrors.firstname) ? 'warn' : 'primary'}}\">\n            <input mdInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n            <md-hint>\n              <span [hidden]=\"!(formErrors.firstname)\">\n                {{formErrors.firstname}}</span>\n            </md-hint>\n          </md-input-container>\n          <md-input-container class=\"half-width\"\n           dividerColor=\"{{(formErrors.lastname) ? 'warn' : 'primary'}}\">\n            <input mdInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n            <md-hint>\n              <span [hidden]=\"!(formErrors.lastname)\">\n                {{formErrors.lastname}}</span>\n            </md-hint>\n          </md-input-container>\n        </p>\n        <p>\n          <md-input-container class=\"half-width\"\n           dividerColor=\"{{(formErrors.telnum) ? 'warn' : 'primary'}}\">\n            <input mdInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n            <md-hint>\n              <span [hidden]=\"!(formErrors.telnum)\">\n                {{formErrors.telnum}}</span>\n            </md-hint>\n          </md-input-container>\n          <md-input-container class=\"half-width\"\n           dividerColor=\"{{(formErrors.email) ? 'warn' : 'primary'}}\">\n            <input mdInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n            <md-hint>\n              <span [hidden]=\"!(formErrors.email)\">\n                {{formErrors.email}}</span>\n            </md-hint>\n          </md-input-container>\n        </p>\n        <table class=\"form-size\">\n          <td>\n          <md-slide-toggle formControlName=\"agree\">May we contact you?</md-slide-toggle>\n          </td>\n          <td>\n          <md-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <md-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n              {{ ctype }}\n            </md-option>\n          </md-select>\n          </td>\n          </table>\n        <p>\n          <md-input-container class=\"full-width\">\n            <textarea mdInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n          </md-input-container>\n        </p>\n        <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n      </form>\n    </div>\n    <div [hidden]=\"!isSubmitting || errMsg\">\n        <h3>Submitting Feedback</h3>\n        <md-spinner></md-spinner>\n    </div>\n    <div *ngIf=\"errMsg\">\n      <h2>Error</h2>\n      <h4>{{ errMsg }}</h4>\n    </div>\n    <div *ngIf=\"isVisible\">\n      <h2>Your Submission</h2>\n      <p>First name: {{ submittedFeedback.firstname }}</p>\n      <p>Last name: {{ submittedFeedback.lastname }}</p>\n      <p>Tel. Number: {{ submittedFeedback.telnum}}</p>\n      <p>Email: {{ submittedFeedback.email }}</p>\n      <p>Contact You?: {{ submittedFeedback.agree }}</p>\n      <p>How?: {{ submittedFeedback.contacttype }}</p>\n      <p>Feedback: {{ submittedFeedback.message }}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(fb, feedbackService) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.submittedFeedback = null;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.isSubmitting = false;
        this.isVisible = false;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            }
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)]],
            telnum: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error messages if any..
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    // tslint:disable-next-line:forin
                    for (var key in control.errors) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        this.feedback = this.feedbackForm.value;
        this.feedbackService.submitFeedback(this.feedback)
            .subscribe(function (feedback) {
            _this.submittedFeedback = feedback;
            _this.isSubmitting = false;
            _this.isVisible = true;
        }, function (errMsg) { return _this.errMsg = errMsg; });
        setTimeout(function () {
            _this.isVisible = false;
            _this.feedbackForm.reset({
                firstname: '',
                lastname: '',
                telnum: '',
                email: '',
                agree: false,
                contactType: 'None',
                message: ''
            });
        }, 5000);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appHighlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], HighlightDirective);

var _a, _b;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\"\n    fxLayoutGap=\"10px\" \n    fxLayoutGap.xs=\"0\">\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <md-card>\n      <md-card-header>\n        <md-card-title>\n          <h3>{{dish.name | uppercase}}</h3>  \n        </md-card-title>\n      </md-card-header>\n      <img md-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n      <md-card-content>\n        <p>{{dish.description}}</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n        <button md-button (click)=\"goBack()\">BACK</button>\n        <button md-button>LIKE</button>\n        <button md-button>SHARE</button>\n        <button md-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n      </md-card-actions>\n    </md-card>\n  </div>\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <h3>Comments</h3>\n    <md-list>\n      <md-list-item *ngFor=\"let review of dish.comments\">\n        <p md-line>{{review.comment}}</p>\n        <p md-line>{{review.rating + (review.rating === 1 ? ' Star' : ' Stars')}}</p>\n        <p md-line>\n          <span>-- {{review.author}}</span> \n          <span>{{review.date | date}}</span>\n        </p>\n      </md-list-item>\n    </md-list>\n    \n    <md-list>\n      <md-list-item *ngIf=\"!(commentForm.value.comment === '') || !(commentForm.value.author === '')\">\n        <p md-line>{{commentForm.value.comment}}</p>\n        <p md-line>{{commentForm.value.rating + (commentForm.value.rating === 1 ? ' Star' : ' Stars')}}</p>\n        <p md-line>-- {{commentForm.value.author}}</p>\n      </md-list-item>\n    </md-list>\n\n    <form novalidate [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <md-input-container class=\"full-width\" dividerColor=\"{{ (formErrors.author) ? 'warn' : 'primary' }}\">\n          <input mdInput type=\"text\" formControlName=\"author\" placeholder=\"Name\">\n          <md-hint>\n            <span [hidden]=\"!(formErrors.author)\">\n              {{ formErrors.author }}\n            </span>\n          </md-hint>\n        </md-input-container><br>\n\n        <md-slider min=\"1\" max=\"5\" step=\"1\" value=\"5\" formControlName=\"rating\" thumbLabel tickInterval=\"1\"></md-slider><br>\n\n        <md-input-container class=\"full-width\" dividerColor=\"{{ (formErrors.comment) ? 'warn' : 'primary' }}\">\n          <textarea mdInput type=\"text\" rows=12 formControlName=\"comment\" placeholder=\"Your Comment\"></textarea>\n          <md-hint>\n            <span [hidden]=\"!(formErrors.comment)\">\n              {{ formErrors.comment }}              \n            </span>\n          </md-hint>\n        </md-input-container>\n      </p>\n      <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"commentForm.invalid\">Submit</button>\n    </form>\n  </div>\n\n  <div [hidden]=\"dish || errMsg\" fxFlexFill>\n    <md-spinner></md-spinner> <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"errMsg\">\n    <h2>Error</h2>\n    <h4>{{ errMsg }}</h4>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DishdetailComponent = (function () {
    function DishdetailComponent(dishService, route, location, fb, BaseURL) {
        this.dishService = dishService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.dishcopy = null;
        this.visibility = 'shown';
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationMessages = {
            'author': {
                'required': 'Author Name is required!',
                'minlength': 'Author Name must be at least 2 characters long!'
            },
            'comment': {
                'required': 'Comment is required!'
            }
        };
        this.createCommentForm();
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params
            .switchMap(function (params) {
            _this.visibility = 'hidden';
            return _this.dishService.getDish(+params['id']);
        })
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.dishcopy = dish;
            _this.setPrevNext(dish.id);
            _this.visibility = 'shown';
        }, function (errmsg) { return _this.errMsg = errmsg; });
    };
    DishdetailComponent.prototype.createCommentForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(2)]],
            rating: 5,
            comment: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            date: new Date()
        });
        this.commentForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            // This if statement has been added to remove the tslint error hints
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (key) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.dish.comments.push(this.commentForm.value);
        this.dishcopy.comments.push(this.commentForm.value);
        this.dishcopy.save().subscribe(function (dish) { return _this.dish = dish; });
        this.commentForm.reset({
            author: '',
            rating: 5,
            comment: '',
            date: new Date().toISOString()
        });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        // tslint:disable-next-line:prefer-const
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dishdetail',
        template: __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["c" /* visibility */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object, Object])
], DishdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dishdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.xs=\"start center\"\n     fxLayoutAlign.sm=\"start center\"\n     fxLayoutAlign.gt-sm=\"center center\"\n     fxLayoutWrap\n     fxLayoutGap=\"10px\">\n     <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div fxLayout=\"row\">\n        <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n          <h4>Links</h4>\n          <md-list>\n            <md-list-item><a md-button routerLink=\"home\">Home</a></md-list-item>\n            <md-list-item><a md-button routerLink=\"aboutus\">About</a></md-list-item>\n            <md-list-item><a md-button routerLink=\"menu\">Menu</a></md-list-item>\n            <md-list-item><a md-button routerLink=\"contactus\">Contact</a></md-list-item>\n          </md-list>\n        </div>\n        <div fxFlex=\"50\">\n          <h4>Our Address</h4>\n          <address style=\"text-size: 80%;\">\n            121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n            <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n            <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n            <i class=\"fa fa-envelope\"></i>:\n            <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n          </address>\n        </div>\n      </div>\n     </div>\n     <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n      <div style=\"text-align:center;\">\n        <a md-icon-button class=\"btn-google-plus\"><i class=\"fa fa-lg fa-google-plus\"></i></a>\n        <a md-icon-button class=\"btn-facebook\"><i class=\"fa fa-lg fa-facebook\"></i></a>\n        <a md-icon-button class=\"btn-linkedin\"><i class=\"fa fa-lg fa-linkedin\"></i></a>\n        <a md-icon-button class=\"btn-twitter\"><i class=\"fa fa-lg fa-twitter\"></i></a>\n        <a md-icon-button class=\"btn-youtube\"><i class=\"fa fa-lg fa-youtube\"></i></a>\n        <a md-icon-button class=\"btn-mail\"><i class=\"fa fa-lg fa-envelope-o\"></i></a>\n      </div>\n     </div>\n     <div fxFlex=\"100\" fxFlexAlign=\"center center\">\n      <div style=\"text-align:center;\">\n        <p>© Copyright 2015 Ristorante Con Fusion</p>\n      </div>\n     </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" alt=\"Ristorante con Fuison\" height=\"30\" width=\"41\"></span>\n  <a md-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a md-button routerLink=\"/aboutus\" routerLinkActive=\"active\" \n  ><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a md-button routerLink=\"/menu\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a md-button routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a md-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</md-toolbar>\n\n<div class=\"container jumbotron\" \n     fxLayout=\"row\" \n     fxLayout.sm=\"column\" \n     fxLayout.xs=\"column\" \n     fxLayoutAlign.xs=\"start center\"\n     fxLayoutAlign.sm=\"start center\" \n     fxLayoutAlign.gt-sm=\"center center\" \n     fxLayoutGap=\"10px\">\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background-color: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], {
            width: '500px',
            height: '450px'
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\"\n  fxLayoutGap=\"10px\">\n\n  <md-card *ngIf=\"dish\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{dish.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n    <md-card-content>\n      <p>{{dish.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"dish || dishErrMsg\">\n    <md-spinner></md-spinner> <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"dishErrMsg\">\n    <h2>Error</h2>\n    <h4>{{ dishErrMsg }}</h4>\n  </div>\n\n  <md-card *ngIf=\"promotion\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{promotion.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + promotion.image}}\" alt={{promotion.name}}>\n    <md-card-content>\n      <p>{{promotion.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"promotion || promoErrMsg\">\n    <md-spinner></md-spinner> <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"promoErrMsg\">\n    <h2>Error</h2>\n    <h4>{{ promoErrMsg }}</h4>\n  </div>\n\n  <md-card *ngIf=\"leader\" fxFlex [@expand]>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{leader.name | uppercase}} {{leader.abbr}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + leader.image}}\" alt={{leader.name}}>\n    <md-card-content>\n      <p>{{leader.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"leader || leaderErrMsg\">\n    <md-spinner></md-spinner> <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"leaderErrMsg\">\n    <h2>Error</h2>\n    <h4>{{ leaderErrMsg }}</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = (function () {
    function HomeComponent(dishservice, promotionserivce, leaderservice, BaseURL) {
        this.dishservice = dishservice;
        this.promotionserivce = promotionserivce;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (disherrmsg) { return _this.dishErrMsg = disherrmsg; });
        this.promotionserivce.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (promoerrmsg) { return _this.promoErrMsg = promoerrmsg; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (leadererrmsg) { return _this.leaderErrMsg = leadererrmsg; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */]) === "function" && _c || Object, Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar md-dialog-title color=\"primary\">\n  Login\n  <span class=\"flex-spacer\"></span>\n  <button md-button md-dialog-close>&times;</button>\n</md-toolbar>\n\n<p>{{ user | json }}</p>\n\n<form novalidate (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n  <md-dialog-content>\n    <p>\n      <md-input-container dividerColor=\"{{ username.invalid && !username.pristine ? 'warn' : 'primary' }}\">\n        <input type=\"text\" mdInput name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" #username=\"ngModel\" required>\n        <md-hint>\n          <span [hidden]=\"username.pristine\">\n            <span [hidden]=\"!username.errors?.required\">username is required!</span>\n          </span>\n        </md-hint>\n      </md-input-container>\n      <md-input-container dividerColor=\"{{ password.invalid && !password.pristine ? 'warn' : 'primary' }}\">\n        <input type=\"password\" mdInput name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" #password=\"ngModel\" required>\n        <md-hint>\n          <span [hidden]=\"password.pristine\">\n            <span [hidden]=\"!password.errors?.required\">password is required!</span>\n          </span>\n        </md-hint>\n      </md-input-container>\n      <md-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</md-checkbox>\n    </p>\n  </md-dialog-content>\n  <md-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button md-button md-dialog-close>Cancel</button>\n    <button md-button type=\"submit\" class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </md-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = {
            username: '',
            password: '',
            remember: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User: ', this.user);
        this.dialogRef.close();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Menu</h3>\n      <hr>\n    </div>\n  </div>\n  \n  <div fxFlex *ngIf=\"dishes\" [@expand]>\n    <md-grid-list cols=\"2\" rowHeight=\"200px\">\n      <md-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\" appHighlight>\n        <img height=\"200px\" src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n        <md-grid-tile-footer>\n          <h1 md-line>{{ dish.name | uppercase }}</h1>\n        </md-grid-tile-footer>\n      </md-grid-tile>\n    </md-grid-list>\n  </div>\n  <div [hidden]=\"dishes || errMsg\">\n    <md-spinner></md-spinner><h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf=\"errMsg\">\n    <h2>Error</h2>\n    <h4>{{ errMsg }}</h4>\n  </div>\n  \n  <!--<app-dishdetail [dish]=\"selectedDish\"></app-dishdetail>-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuComponent = (function () {
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmsg) { return _this.errMsg = errmsg; });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/dish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DishService = (function () {
    function DishService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.restangular.all('dishes').getList().delay(2000);
    };
    DishService.prototype.getDish = function (id) {
        return this.restangular.one('dishes', id).get().delay(2000);
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.restangular.all('dishes').getList({ featured: true })
            .map(function (dishes) { return dishes[0]; }).delay(2000);
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes().map(function (dishes) { return dishes.map(function (dish) { return dish.id; }); })
            .catch(function (error) { return error; });
    };
    return DishService;
}());
DishService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]) === "function" && _b || Object])
], DishService);

var _a, _b;
//# sourceMappingURL=dish.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackService = (function () {
    function FeedbackService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    FeedbackService.prototype.submitFeedback = function (feedback) {
        return this.restangular.all('feedback').post(feedback).delay(2000);
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]) === "function" && _b || Object])
], FeedbackService);

var _a, _b;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/leader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderService = (function () {
    function LeaderService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.restangular.all('leaders').getList().delay(2000);
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.restangular.one('leaders', id).get().delay(2000);
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.restangular.all('leaders').getList({ featured: true })
            .map(function (leaders) { return leaders[0]; }).delay(2000);
    };
    return LeaderService;
}());
LeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]) === "function" && _b || Object])
], LeaderService);

var _a, _b;
//# sourceMappingURL=leader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/process-httpmsg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHTTPMsgService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessHTTPMsgService = (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.extractData = function (res) {
        // tslint:disable-next-line:prefer-const
        var body = res.json();
        console.log(body);
        return body || {};
    };
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ProcessHTTPMsgService;
}());
ProcessHTTPMsgService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProcessHTTPMsgService);

//# sourceMappingURL=process-httpmsg.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionService = (function () {
    function PromotionService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.restangular.all('promotions').getList().delay(2000);
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.restangular.one('promotions', id).get().delay(2000);
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.restangular.all('promotions').getList({ featured: true })
            .map(function (promotions) { return promotions[0]; }).delay(2000);
    };
    return PromotionService;
}());
PromotionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]) === "function" && _b || Object])
], PromotionService);

var _a, _b;
//# sourceMappingURL=promotion.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Email', 'Tel'];
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ "../../../../../src/app/shared/restConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = RestangularConfigFactory;

function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseurl__["a" /* baseURL */]);
}
//# sourceMappingURL=restConfig.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map