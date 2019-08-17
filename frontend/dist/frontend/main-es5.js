(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/cat.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/cat.service.ts ***!
  \******************************************/
/*! exports provided: CatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatService", function() { return CatService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CatService = /** @class */ (function () {
    function CatService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.urlCat = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_cat; // URL to web api
    }
    CatService.prototype.getCats = function () {
        return this.http.get(this.urlCat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return ''; }));
    };
    CatService.prototype.getCat = function (id) {
        var url = this.urlCat + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return ''; }));
    };
    CatService.prototype.getCatMatchup = function (unusedId) {
        if (unusedId === void 0) { unusedId = null; }
        var url = this.urlCat + "/matchup";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return ''; }));
    };
    CatService.prototype.postMatchupVote = function (idWinner, idLoser) {
        var url = this.urlCat + "/matchup/vote";
        return this.http.post(url, { winner: idWinner, loser: idLoser }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return ''; }));
    };
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    CatService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " erreur: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a MEDDService message with the MessageService */
    CatService.prototype.log = function (message) {
        this.messageService.add("AMRService: " + message);
    };
    CatService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function CatService_Factory() { return new CatService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); }, token: CatService, providedIn: "root" });
    return CatService;
}());



/***/ }),

/***/ "./src/app/_services/message.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });
    return MessageService;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".cardbox[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n  margin-bottom: 20px;\r\n  padding: 0px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cardbox[_ngcontent-%COMP%]   .cardbox-heading[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  margin: 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 1em;\r\n  top:0.4em;\r\n}\r\n\r\n.hbg[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 2px;\r\n  background-color: black;\r\n  margin-bottom: 0.3em;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUEsb0NBQW9DOztBQUNwQztvQ0FDb0M7O0FBQ3BDO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUdBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9COztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkYm94IHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDYXJkYm94IEhlYWRpbmdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2FyZGJveCAuY2FyZGJveC1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbiNtZW51e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxZW07XHJcbiAgdG9wOjAuNGVtO1xyXG59XHJcblxyXG5cclxuLmhiZ3tcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxuICBcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "row shadow-lg bg-white"], ["id", "title-app"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [["id", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["mat-button", ""]], [[1, "aria-expanded", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]], { menu: [0, "menu"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 0, "div", [["class", "hbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 0, "div", [["class", "hbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 0, "div", [["class", "hbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 14, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View__MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _allItems: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 3, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["routerLink", "/"]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Match"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 3, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["routerLink", "/leaderboard"]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["LeaderBoard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" CATMASH "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9); _ck(_v, 3, 0, currVal_3); _ck(_v, 9, 0); var currVal_10 = "/"; _ck(_v, 16, 0, currVal_10); var currVal_17 = "/leaderboard"; _ck(_v, 20, 0, currVal_17); _ck(_v, 26, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).menuOpen || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).role; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._highlighted; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._triggersSubmenu; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._getTabIndex(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled.toString(); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null); _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).role; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._highlighted; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._triggersSubmenu; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._getTabIndex(); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled.toString(); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); _ck(_v, 19, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _vote_vote_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vote/vote.component.ngfactory */ "./src/app/vote/vote.component.ngfactory.js");
/* harmony import */ var _leaderboard_leaderboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaderboard/leaderboard.component.ngfactory */ "./src/app/leaderboard/leaderboard.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _vote_vote_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["VoteComponentNgFactory"], _leaderboard_leaderboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_14__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵb23"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], { enableTracing: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () { return [[{ path: "", component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_23__["VoteComponent"] }, { path: "leaderboard", component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_24__["LeaderboardComponent"] }, { path: "**", component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_23__["VoteComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");



var appRoutes = [
    { path: '', component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_1__["VoteComponent"] },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__["LeaderboardComponent"] },
    { path: '**', component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_1__["VoteComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".example-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header[_ngcontent-%COMP%] {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  #table-score[_ngcontent-%COMP%]{\r\n      margin-top: 4em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUdBO01BQ0ksZUFBZTtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gICN0YWJsZS1zY29yZXtcclxuICAgICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gIH1cclxuICAiXX0= */"];



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_LeaderboardComponent, View_LeaderboardComponent_0, View_LeaderboardComponent_Host_0, LeaderboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeaderboardComponent", function() { return RenderType_LeaderboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaderboardComponent_0", function() { return View_LeaderboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaderboardComponent_Host_0", function() { return View_LeaderboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponentNgFactory", function() { return LeaderboardComponentNgFactory; });
/* harmony import */ var _leaderboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.component.css.shim.ngstyle */ "./src/app/leaderboard/leaderboard.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/table/typings/index.ngfactory */ "./node_modules/@angular/material/table/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _leaderboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _services_cat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/cat.service */ "./src/app/_services/cat.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_LeaderboardComponent = [_leaderboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeaderboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeaderboardComponent, data: {} });

function View_LeaderboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["mat-sort-header", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" RANK "]))], null, null); }
function View_LeaderboardComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.rank; _ck(_v, 2, 0, currVal_0); }); }
function View_LeaderboardComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" NAME "]))], null, null); }
function View_LeaderboardComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.name)); _ck(_v, 2, 0, currVal_0); }); }
function View_LeaderboardComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" GENDER "]))], null, null); }
function View_LeaderboardComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.gender)); _ck(_v, 2, 0, currVal_0); }); }
function View_LeaderboardComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" MATCHES "]))], null, null); }
function View_LeaderboardComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.nbMatch; _ck(_v, 2, 0, currVal_0); }); }
function View_LeaderboardComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SCORE "]))], null, null); }
function View_LeaderboardComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.score; _ck(_v, 2, 0, currVal_0); }); }
function View_LeaderboardComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatHeaderRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], [], null, null)], null, null); }
function View_LeaderboardComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], [], null, null)], null, null); }
function View_LeaderboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { paginator: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 81, "div", [["class", "offset-sm-1 col-sm-10 offset-md-2 col-md-8 col-lg-6 offset-lg-3 mat-elevation-z4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 77, "table", [["class", "col-12 mat-table"], ["id", "table-score"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatTable_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]], { dataSource: [0, "dataSource"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _contentFooterRowDefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[6, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[12, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[18, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_LeaderboardComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"], ["showFirstLastButtons", ""]], null, null, null, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 245760, [[1, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { pageSize: [0, "pageSize"], showFirstLastButtons: [1, "showFirstLastButtons"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](83, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataSource; _ck(_v, 5, 0, currVal_0); var currVal_1 = "position"; _ck(_v, 12, 0, currVal_1); var currVal_2 = "name"; _ck(_v, 25, 0, currVal_2); var currVal_3 = "gender"; _ck(_v, 38, 0, currVal_3); var currVal_4 = "nbMatch"; _ck(_v, 51, 0, currVal_4); var currVal_5 = "score"; _ck(_v, 64, 0, currVal_5); var currVal_6 = _co.displayedColumns; _ck(_v, 76, 0, currVal_6); var currVal_7 = _co.displayedColumns; _ck(_v, 79, 0, currVal_7); var currVal_8 = _ck(_v, 83, 0, 10); var currVal_9 = ""; _ck(_v, 82, 0, currVal_8, currVal_9); }, null); }
function View_LeaderboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leaderboard", [], null, null, null, View_LeaderboardComponent_0, RenderType_LeaderboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leaderboard_component__WEBPACK_IMPORTED_MODULE_10__["LeaderboardComponent"], [_services_cat_service__WEBPACK_IMPORTED_MODULE_11__["CatService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeaderboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leaderboard", _leaderboard_component__WEBPACK_IMPORTED_MODULE_10__["LeaderboardComponent"], View_LeaderboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");



var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(catservice) {
        this.catservice = catservice;
        this.displayedColumns = ['position', 'name', 'gender', 'nbMatch', 'score'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catservice.getCats().subscribe(function (data) {
            data.forEach(function (element, index) {
                element.rank = index + 1;
            });
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/vote-img/vote-img.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/vote-img/vote-img.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".card-headion-title[_ngcontent-%COMP%]{\r\n\r\n    font-family: 'Libre Caslon Text', serif;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-variant: revert;\r\n    font-size: large;\r\n    color: #505555;\r\n    padding: 0.5em;\r\n\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%]{\r\ndisplay: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.cardbox[_ngcontent-%COMP%]{\r\n  transition: all 0.5s ease;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS1pbWcvdm90ZS1pbWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYzs7QUFFbEI7OztBQUdBO0FBQ0EsY0FBYztFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92b3RlLWltZy92b3RlLWltZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkLWhlYWRpb24tdGl0bGV7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBDYXNsb24gVGV4dCcsIHNlcmlmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXZhcmlhbnQ6IHJldmVydDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogIzUwNTU1NTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG5cclxufVxyXG5cclxuXHJcbi5jZW50ZXJ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmRib3h7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/vote-img/vote-img.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/vote-img/vote-img.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_VoteImgComponent, View_VoteImgComponent_0, View_VoteImgComponent_Host_0, VoteImgComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VoteImgComponent", function() { return RenderType_VoteImgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VoteImgComponent_0", function() { return View_VoteImgComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VoteImgComponent_Host_0", function() { return View_VoteImgComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteImgComponentNgFactory", function() { return VoteImgComponentNgFactory; });
/* harmony import */ var _vote_img_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vote-img.component.css.shim.ngstyle */ "./src/app/vote-img/vote-img.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vote_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vote-img.component */ "./src/app/vote-img/vote-img.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_VoteImgComponent = [_vote_img_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VoteImgComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VoteImgComponent, data: {} });

function View_VoteImgComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "cardbox  bg-white "]], null, [[null, "mouseout"], [null, "mouseover"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseout" === en)) {
        var pd_0 = ((_co.hover = false) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = ((_co.hover = true) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.voteEmitter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "mat-elevation-z9": 0, "mat-elevation-z3": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "cardbox-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", " card-headion-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "cardbox-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["alt", "Image"], ["class", "img-fluid center"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "div", [["class", "cardbox-base"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "cardbox  bg-white "; var currVal_1 = _ck(_v, 4, 0, _co.hover, !_co.hover); _ck(_v, 3, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.cat.name)); _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.cat.url; _ck(_v, 10, 0, currVal_3); }); }
function View_VoteImgComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-vote-img", [], null, null, null, View_VoteImgComponent_0, RenderType_VoteImgComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _vote_img_component__WEBPACK_IMPORTED_MODULE_3__["VoteImgComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VoteImgComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-vote-img", _vote_img_component__WEBPACK_IMPORTED_MODULE_3__["VoteImgComponent"], View_VoteImgComponent_Host_0, { cat: "cat" }, { vote: "vote" }, []);



/***/ }),

/***/ "./src/app/vote-img/vote-img.component.ts":
/*!************************************************!*\
  !*** ./src/app/vote-img/vote-img.component.ts ***!
  \************************************************/
/*! exports provided: VoteImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteImgComponent", function() { return VoteImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var VoteImgComponent = /** @class */ (function () {
    function VoteImgComponent() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hover = false;
    }
    VoteImgComponent.prototype.ngOnInit = function () {
        this.cat = null;
    };
    VoteImgComponent.prototype.voteEmitter = function () {
        this.vote.emit(this.cat.id);
    };
    return VoteImgComponent;
}());



/***/ }),

/***/ "./src/app/vote/vote.component.css.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/vote/vote.component.css.shim.ngstyle.js ***!
  \*********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".hero[_ngcontent-%COMP%] {\r\n  padding: 6.25rem 0px !important;\r\n  margin: 0px !important;\r\n}\r\n\r\n\r\n@media screen and (max-width: 720px) {\r\n  #versus-circle[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 720px) {\r\n  #versus-circle[_ngcontent-%COMP%]{\r\n    margin-top: 110px;\r\n  }\r\n}\r\n\r\n\r\n#versus-circle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n \r\n}\r\n\r\n\r\n#versus-circle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 10px;\r\n  width: 67px;\r\n  height: 67px;\r\n  background-color: #595959;\r\n  border-radius: 50%;\r\n  color: white;\r\n  font-family: 'Patua One', cursive;\r\n  font-size: xx-large;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsbUJBQW1COztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3ZvdGUvdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xyXG4gIHBhZGRpbmc6IDYuMjVyZW0gMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgI3ZlcnN1cy1jaXJjbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgI3ZlcnN1cy1jaXJjbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICB9XHJcbn1cclxuXHJcbiN2ZXJzdXMtY2lyY2xlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIFxyXG59XHJcblxyXG4jdmVyc3VzLWNpcmNsZSBwIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDY3cHg7XHJcbiAgaGVpZ2h0OiA2N3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuXHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/vote/vote.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/vote/vote.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_VoteComponent, View_VoteComponent_0, View_VoteComponent_Host_0, VoteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VoteComponent", function() { return RenderType_VoteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VoteComponent_0", function() { return View_VoteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VoteComponent_Host_0", function() { return View_VoteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponentNgFactory", function() { return VoteComponentNgFactory; });
/* harmony import */ var _vote_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vote.component.css.shim.ngstyle */ "./src/app/vote/vote.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vote_img_vote_img_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vote-img/vote-img.component.ngfactory */ "./src/app/vote-img/vote-img.component.ngfactory.js");
/* harmony import */ var _vote_img_vote_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vote-img/vote-img.component */ "./src/app/vote-img/vote-img.component.ts");
/* harmony import */ var _vote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _services_cat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/cat.service */ "./src/app/_services/cat.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_VoteComponent = [_vote_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VoteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VoteComponent, data: {} });

function View_VoteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "section", [["class", "hero"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "col-md-5  col-lg-4 offset-lg-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-vote-img", [], null, [[null, "vote"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("vote" === en)) {
        var pd_0 = (_co.onVote($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _vote_img_vote_img_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_VoteImgComponent_0"], _vote_img_vote_img_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_VoteImgComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _vote_img_vote_img_component__WEBPACK_IMPORTED_MODULE_3__["VoteImgComponent"], [], { cat: [0, "cat"] }, { vote: "vote" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "col-lg-2 col-md-1"], ["id", "versus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" VS "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "col-md-5  col-lg-4 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-vote-img", [], null, [[null, "vote"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("vote" === en)) {
        var pd_0 = (_co.onVote($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _vote_img_vote_img_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_VoteImgComponent_0"], _vote_img_vote_img_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_VoteImgComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _vote_img_vote_img_component__WEBPACK_IMPORTED_MODULE_3__["VoteImgComponent"], [], { cat: [0, "cat"] }, { vote: "vote" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.catA; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.catB; _ck(_v, 11, 0, currVal_1); }, null); }
function View_VoteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-vote", [], null, null, null, View_VoteComponent_0, RenderType_VoteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _vote_component__WEBPACK_IMPORTED_MODULE_4__["VoteComponent"], [_services_cat_service__WEBPACK_IMPORTED_MODULE_5__["CatService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VoteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-vote", _vote_component__WEBPACK_IMPORTED_MODULE_4__["VoteComponent"], View_VoteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var VoteComponent = /** @class */ (function () {
    function VoteComponent(catservice) {
        this.catservice = catservice;
    }
    VoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catservice.getCatMatchup().subscribe(function (data) {
            _this.catA = data[0];
            _this.catB = data[1];
            console.log(data);
        });
    };
    VoteComponent.prototype.onVote = function (event) {
        var _this = this;
        var loser = event === this.catA.id ? this.catB.id : this.catB.id;
        this.catservice.postMatchupVote(event, loser).subscribe(function (data) {
            if (data[0].id === _this.catA.id)
                _this.catB = data[1];
            else
                _this.catA = data[1];
        });
    };
    return VoteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url_api: 'http://phpstack-312483-957091.cloudwaysapps.com/api/',
    url_cat: 'cat',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\catmash\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map