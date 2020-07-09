function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _me_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./me/me.component */
    "./src/app/me/me.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kurssit/kurssit.component */
    "./src/app/kurssit/kurssit.component.ts");
    /* harmony import */


    var _picstocker_picstocker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./picstocker/picstocker.component */
    "./src/app/picstocker/picstocker.component.ts");
    /* harmony import */


    var _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lintukoto/lintukoto.component */
    "./src/app/lintukoto/lintukoto.component.ts");

    var routes = [{
      path: 'profile',
      component: _me_me_component__WEBPACK_IMPORTED_MODULE_2__["MeComponent"]
    }, {
      path: 'portfolio',
      component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
    }, {
      path: 'kurssit',
      component: _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_4__["KurssitComponent"]
    }, {
      path: 'picstocker',
      component: _picstocker_picstocker_component__WEBPACK_IMPORTED_MODULE_5__["PicstockerComponent"]
    }, {
      path: 'lintukoto',
      component: _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_6__["LintukotoComponent"]
    }, {
      path: '',
      component: _me_me_component__WEBPACK_IMPORTED_MODULE_2__["MeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck2(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent(router) {
      _classCallCheck2(this, AppComponent);

      this.router = router;
      this.title = 'porfolio';
      this.router.events.subscribe(function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
          gtag('config', 'UA-155311762-1', {
            page_path: event.urlAfterRedirects
          });
        }
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _me_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./me/me.component */
    "./src/app/me/me.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _upper_wave_upper_wave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upper-wave/upper-wave.component */
    "./src/app/upper-wave/upper-wave.component.ts");
    /* harmony import */


    var _botom_wave_botom_wave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./botom-wave/botom-wave.component */
    "./src/app/botom-wave/botom-wave.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./kurssit/kurssit.component */
    "./src/app/kurssit/kurssit.component.ts");
    /* harmony import */


    var _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lintukoto/lintukoto.component */
    "./src/app/lintukoto/lintukoto.component.ts");
    /* harmony import */


    var _picstocker_picstocker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./picstocker/picstocker.component */
    "./src/app/picstocker/picstocker.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck2(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _me_me_component__WEBPACK_IMPORTED_MODULE_4__["MeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _upper_wave_upper_wave_component__WEBPACK_IMPORTED_MODULE_6__["UpperWaveComponent"], _botom_wave_botom_wave_component__WEBPACK_IMPORTED_MODULE_7__["BotomWaveComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__["KurssitComponent"], _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_11__["LintukotoComponent"], _picstocker_picstocker_component__WEBPACK_IMPORTED_MODULE_12__["PicstockerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _me_me_component__WEBPACK_IMPORTED_MODULE_4__["MeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _upper_wave_upper_wave_component__WEBPACK_IMPORTED_MODULE_6__["UpperWaveComponent"], _botom_wave_botom_wave_component__WEBPACK_IMPORTED_MODULE_7__["BotomWaveComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__["KurssitComponent"], _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_11__["LintukotoComponent"], _picstocker_picstocker_component__WEBPACK_IMPORTED_MODULE_12__["PicstockerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/botom-wave/botom-wave.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/botom-wave/botom-wave.component.ts ***!
    \****************************************************/

  /*! exports provided: BotomWaveComponent */

  /***/
  function srcAppBotomWaveBotomWaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotomWaveComponent", function () {
      return BotomWaveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BotomWaveComponent = /*#__PURE__*/function () {
      function BotomWaveComponent() {
        _classCallCheck2(this, BotomWaveComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(BotomWaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BotomWaveComponent;
    }();

    BotomWaveComponent.ɵfac = function BotomWaveComponent_Factory(t) {
      return new (t || BotomWaveComponent)();
    };

    BotomWaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotomWaveComponent,
      selectors: [["app-botom-wave"]],
      decls: 1,
      vars: 1,
      consts: [["id", "wave", "alt", "wave-image", 3, "src"]],
      template: function BotomWaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["#wave[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90b20td2F2ZS9ib3RvbS13YXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYm90b20td2F2ZS9ib3RvbS13YXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotomWaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-botom-wave',
          templateUrl: './botom-wave.component.html',
          styleUrls: ['./botom-wave.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck2(this, FooterComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 17,
      vars: 0,
      consts: [[1, "main-container"], [1, "info-container"], [1, "inlineb"], ["placement", "top", "ngbTooltip", "HTML5", 1, "fab", "fa-html5", "tekniikka", "fa-2x", 2, "color", "#f16259", "opacity", "0.7"], ["placement", "top", "ngbTooltip", "CSS", 1, "fab", "fa-css3-alt", "tekniikka", "fa-2x", 2, "color", "#2965f1", "opacity", "0.7"], ["placement", "top", "ngbTooltip", "Javascript", 1, "fab", "fa-js-square", "tekniikka", "fa-2x", 2, "color", "#f0db4f", "opacity", "0.7"], ["placement", "top", "ngbTooltip", "Angular", 1, "fab", "fa-angular", "tekniikka", "fa-2x", 2, "color", "#dd1b16", "opacity", "0.7"], ["placement", "top", "ngbTooltip", "React", 1, "fab", "fa-react", "tekniikka", "fa-2x"], ["placement", "top", "ngbTooltip", "Nodejs", 1, "fab", "fa-node-js", "tekniikka", "fa-2x", 2, "color", "#68a063"], ["id", "social"], ["id", "socialh2"], ["href", "https://github.com/henripar"], [1, "fab", "fa-github", "fa-2x"], ["href", "https://www.linkedin.com/in/henri-parviainen-b79044176/"], [1, "fab", "fa-linkedin-in", "fa-2x"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sosiaalinen media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n  background-color: #273036;\n  color: #00acc1;\n  height: 230px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n}\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-content: center;\n}\nspan[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.tekniikka[_ngcontent-%COMP%] {\n  margin: 0 0.3em;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\ni[_ngcontent-%COMP%]:hover {\n  opacity: 1 !important;\n  cursor: pointer;\n}\n.inlineb[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  vertical-align: middle;\n  text-align: center;\n  padding-top: 2.3em !important;\n}\n.profilepic[_ngcontent-%COMP%] {\n  width: 90px;\n}\n#socialh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n}\n.main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline;\n  padding-top: 1.5em;\n}\n#wave[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: 35px;\n}\n#social[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  justify-content: center;\n  text-align: center;\n}\n.sijainti[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  vertical-align: middle;\n  margin-bottom: 10px;\n}\na[_ngcontent-%COMP%] {\n  display: inline-table;\n  width: 32px;\n  margin: 0.5em 1em;\n  color: whitesmoke;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n}\n@media screen and (max-width: 650px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-top: 0em;\n  }\n  .main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    text-align: center;\n    padding: 1.5em;\n  }\n  #social[_ngcontent-%COMP%] {\n    padding-top: 1em;\n    margin-left: 0;\n    padding-bottom: 2em;\n  }\n}\n@media screen and (max-width: 379px) {\n  .inlineb[_ngcontent-%COMP%] {\n    padding: 1.5em 0.5em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLCtCQUErQjtFQUNqQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzAzNjtcbiAgY29sb3I6ICMwMGFjYzE7XG4gIGhlaWdodDogMjMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50ZWtuaWlra2Ege1xuICBtYXJnaW46IDAgMC4zZW07XG59XG5cbi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pOmhvdmVyIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5saW5lYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyLjNlbSAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGVwaWMge1xuICB3aWR0aDogOTBweDtcbn1cbiNzb2NpYWxoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5oMSxcbmgyIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xufVxuaDIge1xuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbn1cbi5tYWluLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbiN3YXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzNXB4O1xufVxuXG4jc29jaWFsIHtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWphaW50aSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5hIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luOiAwLjVlbSAxZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBhY2MxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgfVxuICAjc29jaWFsIHtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3OXB4KSB7XG4gIC5pbmxpbmViIHtcbiAgICBwYWRkaW5nOiAxLjVlbSAwLjVlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kurssit/kurssit.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kurssit/kurssit.component.ts ***!
    \**********************************************/

  /*! exports provided: KurssitComponent */

  /***/
  function srcAppKurssitKurssitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KurssitComponent", function () {
      return KurssitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var KurssitComponent = /*#__PURE__*/function () {
      function KurssitComponent() {
        _classCallCheck2(this, KurssitComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(KurssitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KurssitComponent;
    }();

    KurssitComponent.ɵfac = function KurssitComponent_Factory(t) {
      return new (t || KurssitComponent)();
    };

    KurssitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KurssitComponent,
      selectors: [["app-kurssit"]],
      decls: 76,
      vars: 11,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"], ["id", "wave", "alt", "wave-image", 3, "src"], [1, "top-container"], [1, "upper-container"], [1, "img-container", 2, "width", "30%"], [1, "project-img", 3, "src"], [1, "lower-container"], ["alt", "", 1, "tech-logo", 3, "src"], ["method", "get", "action", "https://certificates.mooc.fi/validate/j6q9fb3i04"], ["type", "submit", 1, "btn", "blue-grey", "darken-4"], [2, "width", "75%"], ["id", "toinen", 1, "upper-container"], ["id", "longh1"], ["id", "shorth1"], [1, "btn", "blue-grey", "darken-4"], ["id", "kolmas", 1, "upper-container"], ["method", "get", "action", "https://www.udemy.com/certificate/UC-93e568f3-e48a-4e53-bb7a-e077211aeff5/"], [1, "project-img", "border-img", 3, "src"], ["type", "submit", "disabled", "", 1, "btn", "blue-grey", "darken-4"], [1, "big-h1"], [1, "lower-container-koulutus"], [1, "font-weight-bolder"], ["alt", "", 1, "tech-logo-big", 3, "src"], ["id", "wave2", "alt", "wave-image", 3, "src"]],
      template: function KurssitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Elements of AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Helsingin Yliopiston ja Reaktorin j\xE4rjest\xE4m\xE4 kurssi teko\xE4lyn perusteisiin. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SERTIFIKAATTI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Angular 9 - The Complete Quide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Angular 9 - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The Complete Quide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Maximillian Shwartzmullerin Udemy kurssi, joka k\xE4y perusteellisesti l\xE4pi Angularin perusteet. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SERTIFIKAATTI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Advanced CSS and Sass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Jonas Schedtmannin Udemy kurssi, joka keskittyy edistyneempiin CSS tekniikoihin ja Sass kirjaston k\xE4ytt\xF6\xF6n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " SERTIFIKAATTI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fullstack open 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Helsingin yliopiston websovelluskehitys kurssi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kurssi on parhaillaan ty\xF6n alla (7/2020)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " SERTIFIKAATTI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Muu koulutus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tradenomi, Tietojenk\xE4sittelyn tutkinto-ohjelma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Aloitan syksyll\xE4 kolmannen vuoden tietojenk\xE4sittelyn tradenomin opintoja Jyv\xE4skyl\xE4n ammattikorkeakoulussa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Valmistumisajankohta - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Joulukuu 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (3).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/EOAIhero.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/helsinkiuni.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/Angular-8.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/udemy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/advcssandsass.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/udemy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/fullstack_2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/helsinkiuni.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/JAMKlogo.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background: whitesmoke !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.border-img[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: solid black 4px;\n  box-sizing: border-box;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 212px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 25px !important;\n  position: relative;\n  bottom: -5px;\n}\n\n.white-bgc[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.upper-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-animation: fadeInFromNone 1s;\n          animation: fadeInFromNone 1s;\n}\n\n.lower-container[_ngcontent-%COMP%] {\n  padding-left: 2em;\n  text-align: center;\n  width: 30% !important;\n}\n\n.lower-container-koulutus[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 30% !important;\n  margin: 0 auto;\n}\n\n.lower-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.lower-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 220px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #00bcd4 !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n\n#toinen[_ngcontent-%COMP%] {\n  -webkit-animation: fadeInFromNone 1.1s ease-in;\n          animation: fadeInFromNone 1.1s ease-in;\n}\n\n#kolmas[_ngcontent-%COMP%] {\n  -webkit-animation: fadeInFromNone 1.6s ease-in;\n          animation: fadeInFromNone 1.6s ease-in;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  width: 30%;\n  margin: 0 2em;\n  background-color: whitesmoke;\n  height: 100%;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n@-webkit-keyframes example {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes example {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#2632383f, whitesmoke) !important;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  min-height: 10vh;\n  position: relative;\n  top: -200px;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n  box-shadow: inset 0px 0px 10px black;\n  box-sizing: border-box;\n  border-bottom-right-radius: 27px;\n  border-bottom-left-radius: 27px;\n}\n\n.tech-logo[_ngcontent-%COMP%] {\n  width: 160px;\n  vertical-align: middle;\n  margin: 0.3em;\n}\n\n.tech-logo-big[_ngcontent-%COMP%] {\n  width: 220px;\n  vertical-align: middle;\n  margin: 0.3em;\n}\n\n#lintukoto[_ngcontent-%COMP%] {\n  background-color: powderblue;\n  bottom: -5px;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n}\n\n.big-h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-top: 0.5em;\n  color: black;\n  position: relative;\n  font-size: 1.5em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-variant: all-small-caps;\n  margin-bottom: 1em;\n  color: black;\n  font-size: 1.8em;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-variant-caps: normal;\n  margin-top: 0.7em;\n  margin-bottom: 0;\n  font-size: 1.4em;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 1em auto;\n}\n\n .medium {\n  width: 100%;\n}\n\n  .card-content {\n  height: 400px;\n}\n\n  .card {\n  border-radius: 25px !important;\n  -webkit-animation-name: fadeInFromNone !important;\n          animation-name: fadeInFromNone !important;\n  -webkit-animation-duration: 1s !important;\n          animation-duration: 1s !important;\n}\n\n#delay[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.8s !important;\n          animation-duration: 1.8s !important;\n  -webkit-animation-name: fadeInFromNone !important;\n          animation-name: fadeInFromNone !important;\n  opacity: 1;\n}\n\n@-webkit-keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n#wave[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  top: -34px;\n  z-index: -1;\n}\n\n#wave2[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: -5px;\n  display: block;\n  z-index: -1;\n}\n\n#shorth1[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1233px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 65%;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 40vh;\n    top: -160px;\n  }\n  #longh1[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #shorth1[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 1052px) {\n  .top-container[_ngcontent-%COMP%] {\n    top: -120px;\n  }\n}\n\n@media (max-width: 1000px) {\n  .lower-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    padding-left: 0;\n    width: auto !important;\n  }\n  .upper-container[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  .img-container[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 350px !important;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    min-height: 100vh;\n  }\n  button[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media (max-width: 978px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -25px;\n  }\n}\n\n@media (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    top: -100px;\n  }\n}\n\n@media (max-width: 793px) {\n  .lower-container-koulutus[_ngcontent-%COMP%] {\n    width: 74% !important;\n  }\n}\n\n@media (max-width: 734px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -15px;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -80px;\n  }\n}\n\n@media screen and (max-width: 556px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 1em 0;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -50px;\n    min-height: 120vh;\n  }\n  .lower-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n}\n\n@media (max-width: 450px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -1px;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -30px;\n    min-height: 140vh;\n  }\n}\n\n@media (max-width: 400px) {\n  .img-container[_ngcontent-%COMP%] {\n    width: 91% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  .top-container[_ngcontent-%COMP%] {\n    min-height: 155vh;\n  }\n}\n\n@media (max-width: 340px) {\n  .top-container[_ngcontent-%COMP%] {\n    min-height: 180vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3Vyc3NpdC9rdXJzc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDBCQUF1QjtLQUF2Qix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjtBQUNGOztBQW9DQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9rdXJzc2l0L2t1cnNzaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi9kZWVwL2h0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2UgIWltcG9ydGFudDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5ib3JkZXItaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01cHg7XG59XG4ud2hpdGUtYmdjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi51cHBlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxcztcbn1cbi5sb3dlci1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG59XG4ubG93ZXItY29udGFpbmVyLWtvdWx1dHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmxvd2VyLWNvbnRhaW5lciBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG93ZXItY29udGFpbmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMjBweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XG59XG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMmVtO1xufVxuI3RvaW5lbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMS4xcyBlYXNlLWluO1xufVxuI2tvbG1hcyB7XG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMS42cyBlYXNlLWluO1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyNjMyMzgzZiwgd2hpdGVzbW9rZSkgIWltcG9ydGFudDtcbn1cblxuLnRvcC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMDBweDtcbn1cbi5wcm9qZWN0LWluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggYmxhY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyN3B4O1xufVxuXG4udGVjaC1sb2dvIHtcbiAgd2lkdGg6IDE2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAuM2VtO1xufVxuLnRlY2gtbG9nby1iaWcge1xuICB3aWR0aDogMjIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMC4zZW07XG59XG4jbGludHVrb3RvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcG93ZGVyYmx1ZTtcbiAgYm90dG9tOiAtNXB4O1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5iaWctaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5oMiB7XG4gIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuaDMge1xuICBmb250LXZhcmlhbnQtY2Fwczogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAwLjdlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbnAge1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuL2RlZXAvLm1lZGl1bSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuL2RlZXAvIC5jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuL2RlZXAvIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRnJvbU5vbmUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcyAhaW1wb3J0YW50O1xufVxuI2RlbGF5IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Gcm9tTm9uZSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRnJvbU5vbmUge1xuICAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMSUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuI3dhdmUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zNHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbiN3YXZlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IC0xO1xufVxuI3Nob3J0aDEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjMzcHgpIHtcbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB9XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogNDB2aDtcbiAgICB0b3A6IC0xNjBweDtcbiAgfVxuICAjbG9uZ2gxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNzaG9ydGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTJweCkge1xuICAudG9wLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMTIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubG93ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVwcGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvcC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NzhweCkge1xuICAjd2F2ZSB7XG4gICAgdG9wOiAtMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLnRvcC1jb250YWluZXIge1xuICAgIHRvcDogLTEwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3OTNweCkge1xuICAubG93ZXItY29udGFpbmVyLWtvdWx1dHVzIHtcbiAgICB3aWR0aDogNzQlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzRweCkge1xuICAjd2F2ZSB7XG4gICAgdG9wOiAtMTVweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtODBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTZweCkge1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gIH1cbiAgLnRvcC1jb250YWluZXIge1xuICAgIHRvcDogLTUwcHg7XG4gICAgbWluLWhlaWdodDogMTIwdmg7XG4gIH1cbiAgLmxvd2VyLWNvbnRhaW5lciBwIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgI3dhdmUge1xuICAgIHRvcDogLTFweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMzBweDtcbiAgICBtaW4taGVpZ2h0OiAxNDB2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTElICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNTV2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxODB2aDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KurssitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kurssit',
          templateUrl: './kurssit.component.html',
          styleUrls: ['./kurssit.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lintukoto/lintukoto.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/lintukoto/lintukoto.component.ts ***!
    \**************************************************/

  /*! exports provided: LintukotoComponent */

  /***/
  function srcAppLintukotoLintukotoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LintukotoComponent", function () {
      return LintukotoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function LintukotoComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.url, "assets/kirjautumissivushot.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LintukotoComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.url, "assets/kalenteri.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LintukotoComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.url, "assets/aktiiviset.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LintukotoComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r3.url, "assets/suoritetut.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var LintukotoComponent = /*#__PURE__*/function () {
      // Or with jQuery
      function LintukotoComponent() {
        _classCallCheck2(this, LintukotoComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        this.options = {
          fullWidth: true
        };
      }

      _createClass2(LintukotoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LintukotoComponent;
    }();

    LintukotoComponent.ɵfac = function LintukotoComponent_Factory(t) {
      return new (t || LintukotoComponent)();
    };

    LintukotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LintukotoComponent,
      selectors: [["app-lintukoto"]],
      decls: 212,
      vars: 16,
      consts: [["id", "wave", "alt", "wave-image", 3, "src"], [1, "main-container"], ["href", "http://lintukoto.s3-website-us-east-1.amazonaws.com/", 1, "btn", "btn-dark", 2, "color", "white"], [3, "interval"], ["ngbAutofocus", "", 2, "display", "none"], ["ngbSlide", ""], ["id", "svg2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#273036", "fill-opacity", "1", "d", "M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,138.7C672,139,768,213,864,229.3C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"], [1, "teknologia-container"], [1, "tech-images-holder"], ["alt", "", 1, "tech-logo", 3, "src"], ["id", "express"], ["alt", "ng-bootstrap logo", 1, "tech-logo2", 3, "src"], ["alt", "bootstraplogo", 1, "tech-logo2", 3, "src"], ["alt", "mongoose logo", 1, "tech-logo3", 3, "src"], ["alt", "Syncfuison logo", 1, "tech-logo3", 2, "background-color", "whitesmoke", 3, "src"], ["id", "svg3", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#273036", "fill-opacity", "1", "d", "M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,186.7C672,192,768,128,864,117.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"], [1, "yleista-container"], [2, "width", "100%", "display", "block", "margin", "0 auto"], ["id", "oppimiset-lista"], ["id", "svg1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#273036", "fill-opacity", "1", "d", "M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,192C672,160,768,128,864,133.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"], ["alt", "Angular logo", 1, "otsikkologo", 3, "src"], [1, "angular"], [1, "osaamisdiv"], [1, "osaamislista"], [2, "font", "Roboto, sans-serif"], ["alt", "", 1, "otsikkologo", 3, "src"], ["alt", "MongoDB logo", 1, "otsikkologo2", 3, "src"], ["alt", "Git logo", 1, "otsikkologo", 3, "src"], ["id", "lastone", 1, "angular"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#273036", "fill-opacity", "1", "d", "M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,181.3C672,160,768,96,864,64C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"], [1, "reflektiodiv"], ["id", "parannettavaa"], ["width", "75%", "controls", "", 2, "margin-bottom", "1em"], ["type", "video/mp4", 3, "src"], ["width", "75%", "controls", ""], [2, "text-align", "center"], ["id", "wave2", "alt", "wave-image", 3, "src"], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 1, "big-cover-image", 3, "src"], ["alt", "Random second slide", 1, "big-cover-image", 3, "src"], ["alt", "Random third slide", 1, "big-cover-image", 3, "src"]],
      template: function LintukotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lintukoto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SIIRRY SOVELLUKSEEN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-carousel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "lol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LintukotoComponent_ng_template_9_Template, 4, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LintukotoComponent_ng_template_10_Template, 2, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LintukotoComponent_ng_template_11_Template, 2, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LintukotoComponent_ng_template_12_Template, 2, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Teknologiat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Yleist\xE4 projektista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lintukoto projektin tavoitteena oli luoda sovellus helpottamaan opiskelijoiden arkea tarjoamalla ty\xF6kaluja ajanhallintaan. Fyysisten toteutettavien tavoitteiden lis\xE4ksi projektin oppimistavoitteena oli oppia SCRUM k\xE4yt\xE4nteit\xE4, sek\xE4 projektin hallintaa ja ryhm\xE4ty\xF6taitoja. Lis\xE4ksi omana oppimistavoitteenani oli syvent\xE4\xE4 osaamista Angular, MongoDB, NodeJS ja Express teknologioissa. Mielest\xE4ni n\xE4iss\xE4 tavoitteissa onnistuttiin hyivn. T\xE4m\xE4 oli my\xF6s meille kaikille ensimm\xE4inen isompi web- projekti ja ensimm\xE4inen projekti, jossa ty\xF6skenteltiin mainituilla teknologioilla. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Oma rooli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Itse toimin projektissa p\xE4\xE4toimisena koodarina. Olin mm. mukana tekem\xE4ss\xE4 p\xE4\xE4t\xF6ksi\xE4 teknologia valintojen suhteen ja vastasin koko backendin toteutuksesta. Lis\xE4ksi tein my\xF6s frontendin niihin toimimintoihin, jotka vaativat yhteytt\xE4 tietokantaan. Tein my\xF6s projektin ensimm\xE4iset pari viikkoa pelkk\xE4\xE4 front endi\xE4. Seuraavassa listassa on muutamia toiminnallisuuksia, joita koodasin projektiin. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sis\xE4\xE4nkirjautuminen, rekister\xF6ityminen ja autenktikaatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Kalenterimerkint\xF6jen tallentuminen kantaan ja hakeminen kannsta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Muistiinpanojen tallentaminen, muokkaus, ja poisto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Kurssien lis\xE4\xE4minen k\xE4ytt\xE4j\xE4lle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Kurssien merkkaaminen suoritetuksi ja siirto suoritetut kurssit sivulle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Teht\xE4vien lis\xE4\xE4minen ja hakeminen kannasta & tehdyksi merkkaaminen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Asetusten tallentaminen ja haku tietokannasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Tietokantarakenteen suunnittelu ja toteutus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sovelluksen julkaisu (AWS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Mit\xE4 opin?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ty\xF6skentely produktiossa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Kuten aiemmin totesin, t\xE4m\xE4 on ensimm\xE4inen produktio, jossa olen ty\xF6skennellyt. Sain arvokasta kokemusta produktiossa ty\xF6skentelyst\xE4, jossa kaikki tiimin j\xE4senet tekev\xE4t yhdess\xE4 t\xF6it\xE4 yhteisen p\xE4\xE4m\xE4\xE4r\xE4n eteen. Opin tekemeen t\xF6it\xE4 yhdess\xE4 erilaisten osaajien kanssa. Jokaisella tiimin j\xE4senell\xE4 oli omat vastuualueensa ja yhteisty\xF6 oli toimivaa. My\xF6s erilaiset SCRUM seremoniat tulivat tutuiksi ja ne todettiin hy\xF6dyllisksi. K\xE4ytt\xE4mi\xE4mme SCRUM k\xE4yt\xE4nteit\xE4 olivat p\xE4ivitt\xE4iset daily scrumit, viikkopalaverit, planning dayt ja retrospektiivit. Mielest\xE4ni scrum k\xE4yt\xE4nteist\xE4 oli erityisesti hy\xF6ty\xE4 tavoitteiden asettamisessa, niiden seurannassa ja tavoitteista kiinni pit\xE4misess\xE4, sek\xE4 virheista oppimisessa. Tavoitteiden ja teht\xE4vien seurantaan k\xE4ytimme my\xF6s GitHubin ZenHub ty\xF6kalua, jonka avulla pystyimme seuraamaan mit\xE4 kukin tekee, ja miten projekti etenee. Koin ZenHubin k\xE4yt\xF6n vaivattomaksi ja eritt\xE4in t\xE4rke\xE4ksi osaksi profuktiossa ty\xF6skentely\xE4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Et\xE4ty\xF6skentely");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Kesken projektin siirryimme maaliskuussa koronavirustilanteen vuoksi pysyv\xE4sti et\xE4t\xF6ihin. Koin my\xF6s t\xE4m\xE4n arvokkaana kokemuksena ja totesin my\xF6s et\xE4ty\xF6n sopivan minulle eritt\xE4in hyvin ja huomasin olevani et\xE4t\xF6iss\xE4 jopa tehokkaampi kuin toimistolla, jossa jatkuvasti ymp\xE4rill\xE4 tapahtuva h\xE4lin\xE4 s\xF6i osin keskittymist\xE4ni. Et\xE4t\xF6iss\xE4 siirsimme palaverit k\xE4yt\xE4v\xE4ksi Microsoftin Teams palvelun videopuheluiden v\xE4lityksell\xE4. T\xE4m\xE4 osoittautui toimivaksi ratkaisuksi. Muita yhteydenpito keinoja olivat et\xE4ty\xF6aikana perinteiset puhelut, WhatsApp, s\xE4hk\xF6posti, GitHub, sek\xE4 perustamamme Teams ryhm\xE4, jossa oli mahdollista vapaasti keskustella. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Et\xE4ty\xF6skentelyss\xE4 oli toki my\xF6s omat haasteensa. Fyysisen l\xE4sn\xE4olon puute vaikutti tiimihenkeen ja s\xF6i yhteenkuuluvuuden tunnetta. Lis\xE4ksi osa tiimin j\xE4senist\xE4 koki et\xE4t\xF6iden tekemisess\xE4 muita haasteita. Kaikki kuitenkin jaksoivat tehd\xE4 ahkerasti t\xF6it\xE4 my\xF6s et\xE4n\xE4 ja projektia saatiin hyvin eteenp\xE4in. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Itseohjautuva oppiminen ja ongelmien ratkaiseminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Kun projektiin l\xE4hdettiin, olimme kaikki noviiseja web sovelluskehityksess\xE4, ja osasimme vain perusteet angularista. Kokemus nodejs, express ja mongodb teknologioissa oli hyvin rajallista eli opittavaa oli paljon. T\xE4m\xE4 tarjosi mahdollissuden kehitt\xE4\xE4 omaa osaamistani ja oppia uutta. Osaamista tuli kehitetty\xE4 aina sit\xE4 mukaa kun projekti vaati jonkin uuden asian osaamista. Projektin alkuvaiheessa syv\xE4nsin osaamista Angularissa, sek\xE4 opettelin projektimme kalenteriin tarvittavaa SyncFusion Angular Scheduler komponentin integrointia ja k\xE4ytt\xF6\xE4 Syncfusionin dokumentaatiosta. Sen j\xE4lkeen otin itselle uutena asiana haltuun Express frameworkin ja MongoDB:n. Sen j\xE4lkeen opettelin tietokannan hallintaan k\xE4ytett\xE4v\xE4\xE4 mongoose kirjastoa. Se on ns. ODM eli Object Data Modelling kirjasto, joka helpottaa MongoDB tietokannan hallintaa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Kehtysty\xF6n aikana on tullut vastaan my\xF6s monia ongelmia. Koen, ett\xE4 oma ongelman ratkaisukyky on kehittynyt kev\xE4\xE4n aikana valtavasti, kun kokemusta on kertynyt lis\xE4\xE4. Onglemanratkaisuprosessi, jota olen k\xE4ytt\xE4nyt on muotoontunut jokseenkin seuraavanlaiseksi: 1. Yrit\xE4 keksi\xE4 ongelmaan itse ratkaisun miettim\xE4ll\xE4 erilaisia ratkaisuvaihtoehtoja, jotka voisivat ratkaista ongelman. 2. Jos en keksi mit\xE4\xE4n toimivaa ratkaisua itse, yrit\xE4n googlata ongelmaan ratkaisun. 3. Jos ongelma on niin harvinaislaatuinen, ett\xE4 googlesta ei l\xF6ydy mit\xE4\xE4n ratkaisua, jota ongelmaan voi soveltaa, tarkistan l\xF6tyyk\xF6 onglemaan liittyv\xE4n teknologian dokumentaatiosta apua. 4. Jos mik\xE4\xE4n yll\xE4mainituista ei tuota tulosta, kysyn ongelmaan ratkaisua Stackoverflow foorumilta. 5. Viimeisen\xE4 keinona voin kysy\xE4 apua kurssin opettajilta. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " T\xE4m\xE4 ongelmanratkaisumenetelm\xE4 on todettu varsin tehokkaaksi ja kun kokemusta on tullut lis\xE4\xE4 ongelemat ovat ratkenneet nopeammin, ja entist\xE4 useammin jo ensimm\xE4isess\xE4 vaiheessa. Yksi hyv\xE4 keino ongelmanratkaisuun on my\xF6s ollut ottaa pieni aikalis\xE4 ja tehd\xE4 hetken aikaa jotain aivan muuta. Kun palaan ongelman pariin huomaan, ett\xE4 aivot ovat prosessoineet sit\xE4 taustalla ja ratkaisu l\xF6ytyykin hetkess\xE4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Tuutorointi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Pidin my\xF6s projektin aikana er\xE4\xE4lle ryhm\xE4n j\xE4senelle yksityisesti koodaus tuutorointia/opetusta. Koin sen positiivisena ja palkitsevana kokemuksena. Oli mukava huomata, ett\xE4 voi olla jollekin avuksi ja samalla sai itse syvent\xE4\xE4 ja testata omaa osaamista. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Teknologiat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Syvennetty osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Routing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Servicet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Direktiivit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Angular Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Komponenttien v\xE4linen kommunikointi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "HTML, CSS, Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Uusi hankittu osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "HTTP pyynn\xF6t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Autentikaatio ja authGuard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Lomakkeiden validointi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Pipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Environment variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " express && ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Syvennetty osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Express perusteet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "MVC arkkitehtuuri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Hankittu uusi osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Autentikaatio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "JWT & bcrypt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "CRUD toiminnot & tietokannan kanssa kommunikointi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Hankittu uusi osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "MongoDB perusteet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "MongoDB Atlas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Dokumenttien lis\xE4ys, muokkaus ja poisto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Hankittu uusi osaaminen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Githubin k\xE4ytt\xF6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "git terminaalikomennot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Zenhubin k\xE4ytt\xF6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "svg", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Mit\xE4 parannettavaa j\xE4i?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Tiedostojen rakenne ja nime\xE4miset olisi voinut tehd\xE4 selke\xE4mm\xE4ksi. Esim. CSS tiedostoissa ei t\xE4ll\xE4 hetkell\xE4 ole juurikaan loogista rakennetta. Niihin asiat olisi voinut j\xE4rjestell\xE4 selke\xE4mmin. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Projektissa k\xE4ytettyj\xE4 erilaisia tyylikirjastoja olisi voinut k\xE4ytt\xE4\xE4 keskitetymmin. Projektissa k\xE4ytettiin Bootstrapia, ng-bootstrapia ja Angular Materialia. N\xE4ist\xE4 olisi luultavasti voinut karsia kaksi pois ja t\xE4ll\xF6in olisi voitu hieman selkeytt\xE4\xE4 projektia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Varsinainen kehitysty\xF6 pys\xE4htyi kuin sein\xE4\xE4n noin 3 viikkoa ennen TC:n loppua. T\xE4m\xE4 johtui monesta eri tekij\xE4st\xE4 (Monilla tiimin j\xE4senill\xE4 oli vapaap\xE4ivi\xE4 pit\xE4m\xE4tt\xE4 ja ne ajoittuivat tuohon viimeiseen 3 viikkoon, lis\xE4ksi samaan aikaan teht\xE4v\xE4listalle tulivat kaikkien portfoliot, sek\xE4 ylim\xE4\xE4r\xE4inen mainosvideon tekeminen ja viimeiseen demoon valmistautuminen). T\xE4t\xE4 emme osanneet ennakoida tarpeeksi hyvin ja sovellus j\xE4i siksi joiltain osin vajaavaiseksi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Tarkempi katsaus tekemiini toiminnallisuuksiin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Autenktikaatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "video", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "source", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Your browser does not support HTML5 video. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Muistiinpanojen lis\xE4ys, muokkaus & poisto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "video", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "source", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Your browser does not support HTML5 video. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Reflektio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Voin todeta, ett\xE4 projekti on ollut todella opettavainen kokemus. Olen saanut paljon lis\xE4\xE4 tietoa web-kehitys ty\xF6st\xE4 ja itsevarmuus ongelmien ratkaisemiseen on kasvanut. Koen, ett\xE4 t\xE4m\xE4n projektin j\xE4lkeen olen valmis ty\xF6skentelem\xE4\xE4n koodarina web- tai mobiilisovellus- projekteissa. Se on suuri harppaus siihen tilanteeseen, jossa olin ennen kurssia, sill\xE4 k\xE4yt\xE4nn\xF6ss\xE4 silloin osasin ainoastaan HTML, CSS ja javascriptin perusteet, sek\xE4 angularin perusteet. Koen my\xF6s, ett\xE4 valmius oppia uusia teknologioita tulevaisuudessa on kehittynyt kurssin my\xF6t\xE4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Angularin perusteet ovat my\xF6s vahvistuneet ja ne alkavat jo tulla selk\xE4rangasta ilman, ett\xE4 googlesta t\xE4ytyy aina tarkistaa, ett\xE4 miten jokin asia tehtiink\xE4\xE4n. My\xF6s Express perusteet onnistuu hyvin ilman internetin apuja. Lis\xE4ksi kehityst\xE4 tapahtui tiedonhaussa ongelmatilanteissa. Projektin my\xF6t\xE4 on tullut parempi k\xE4sitys siit\xE4, mist\xE4 kuhunkin ongelmaan kannattaa l\xE4hte\xE4 hakemaan apua. Joissain tapauksissa j\xE4rkevint\xE4 on tarkastella kyseisen teknologian dokumentaatiota, joskus taas on parempi etsi\xE4 vastausta googlesta, Stackoverflowsta, Discord ryhmist\xE4 jne. Suurin muutos t\xE4ss\xE4 asiassa verrattuna aiempaan on ymm\xE4rrys siit\xE4, ett\xE4 Google ei v\xE4ltt\xE4m\xE4tt\xE4 aina ole paras paikka l\xF6yt\xE4\xE4 ratkaisua ongelmaan (vaikka usein n\xE4in onkin). T\xE4m\xE4 ymm\xE4rrys auttaa nopeuttamaan eteenp\xE4in p\xE4\xE4sy\xE4 ongelmatilanteissa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Koin projekti luonteisen oppimistyylin tehokkaana ja palkitsevana tapana oppia uusia asioita. Joissain tapauksissa oppiminen saattoi j\xE4\xE4d\xE4 pintapuoliseksi, mutta projektia tekem\xE4ll\xE4 sai kuitenkin hyvin kokonaiskuvaa siit\xE4, mink\xE4laisia asioita vaaditaan, jotta projekti saadaan maaliin asti. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Loppusanat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Kaiken kaikkiaan projekti oli hieno ja opettavainen kokemus ja tulen varmasti jatkossakin tekem\xE4\xE4n erilaisia web projekteja. T\xE4m\xE4 oli hyv\xE4 ensimm\xE4inen kosketus projektity\xF6skentelyn pariin. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Ty\xF6tunteja kertyi itselle 4 kuukauden aikana yhteens\xE4 391. (Tilanne 24.4.) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 40);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (3).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 20000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/angular.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/nodejs-new-pantone-white.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/MongoDark.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/ngbootstrap.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/bootstrap-solid.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/mongoose2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/Syncfusion_Logo_Image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/angular.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/nodejs-new-pantone-white.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/MongoDark2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/Git-Logo-White.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/sisaankirjautuminenaut.mp4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/Muistiinpanonlisaysuokkauspoisto.mp4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]],
      styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background: whitesmoke !important;\n}\n  .carousel-control-next-icon {\n  color: blue !important;\n}\nngb-carousel[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-top: 0.8em;\n  margin-left: auto;\n  margin-right: auto;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n  text-decoration: none;\n}\n  .carousel-indicators li {\n  background-color: black;\n}\n.yleista-container[_ngcontent-%COMP%] {\n  width: 85%;\n  text-align: center;\n  margin: 0 auto;\n  position: relative;\n  top: -40px;\n}\n.teknologia-container[_ngcontent-%COMP%] {\n  background-color: #273036;\n}\n.teknologia-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  margin: 0;\n}\n.teknologia-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.teknologia-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.teknologia-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.reflektiodiv[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 1em auto;\n  position: relative;\n  top: -100px;\n}\nh1[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  position: relative;\n  top: -170px;\n  -webkit-animation: fromBlack 0.9s ease-out;\n          animation: fromBlack 0.9s ease-out;\n}\n@-webkit-keyframes fromBlack {\n  from {\n    color: #273036;\n  }\n  to {\n    color: whitesmoke;\n  }\n}\n@keyframes fromBlack {\n  from {\n    color: #273036;\n  }\n  to {\n    color: whitesmoke;\n  }\n}\np[_ngcontent-%COMP%] {\n  text-align: left;\n  color: black;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 1.6em;\n  margin-bottom: 0.2em;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  color: black;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  top: -170px;\n}\n.big-cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n}\n#wave2[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: -5px;\n  display: block;\n}\n[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n.tech-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-logo2[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 40px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-logo3[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 120px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-images-holder[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 97%;\n  margin: 0 auto;\n}\n#express[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-style: thin 100;\n  font-size: xx-large;\n  display: inline-block;\n  margin: 0 0.4em;\n}\nul[_ngcontent-%COMP%] {\n  display: block;\n  width: 50%;\n  text-align: left;\n  margin: 0 auto;\n  padding: 1.5em;\n  border-radius: 25px;\n  text-align: center;\n}\nli[_ngcontent-%COMP%] {\n  list-style: disc;\n  color: #00acc1;\n  margin: 0 auto;\n  width: 84%;\n}\n#oppimiset-lista[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: #273036;\n}\n#parannettavaa[_ngcontent-%COMP%] {\n  width: 75%;\n}\n#parannettavaa[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: black;\n  text-align: left;\n}\n#lastone[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.otsikkologo[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 0.3em;\n}\n.otsikkologo2[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.angular[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: center;\n  margin: 1em auto;\n  display: flex;\n  text-align: center;\n}\n.osaamislista[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  padding: 0;\n}\n.osaamisdiv[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 2em;\n  margin: 1em auto;\n  border-radius: 25px;\n  box-shadow: inset 0 0 30px grey;\n}\n#svg1[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -3px;\n}\n#svg2[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -3px;\n}\n#svg3[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\nsvg[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\npath[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.osaamislista[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #1d7382; \n}\n[_ngcontent-%COMP%]::selection {\n  background: #1d7382; \n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #1d7382; \n}\n@media (max-width: 1655px) {\n  h1[_ngcontent-%COMP%] {\n    top: -150px;\n  }\n}\n@media (max-width: 1500px) {\n  h1[_ngcontent-%COMP%] {\n    top: -120px;\n  }\n}\n@media (max-width: 1381px) {\n  h1[_ngcontent-%COMP%] {\n    top: -100px;\n  }\n}\n@media (max-width: 1251px) {\n  h1[_ngcontent-%COMP%] {\n    top: -80px;\n  }\n}\n@media (max-width: 1135px) {\n  h1[_ngcontent-%COMP%] {\n    top: -60px;\n  }\n}\n@media (max-width: 1008px) {\n  h1[_ngcontent-%COMP%] {\n    top: -40px;\n  }\n}\n@media (max-width: 987px) {\n  #parannettavaa[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .reflektiodiv[_ngcontent-%COMP%] {\n    top: -30px;\n  }\n  #oppimiset-lista[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 918px) {\n  h1[_ngcontent-%COMP%] {\n    top: -20px;\n  }\n}\n@media (max-width: 845px) {\n  ul[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  h1[_ngcontent-%COMP%] {\n    top: 0px;\n    font-size: 1.6em;\n  }\n}\n@media (max-width: 800px) {\n  .main-container[_ngcontent-%COMP%] {\n    top: -100px;\n  }\n  h1[_ngcontent-%COMP%] {\n    top: -55px;\n  }\n}\n@media (max-width: 738px) {\n  h1[_ngcontent-%COMP%] {\n    top: -40px;\n  }\n}\n@media (max-width: 614px) {\n  h1[_ngcontent-%COMP%] {\n    top: -20px;\n  }\n  #lastone[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n  }\n}\n@media (max-width: 524px) {\n  h1[_ngcontent-%COMP%] {\n    top: 0px;\n    color: black;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -50px;\n  }\n}\n@media (max-width: 415px) {\n  .picsum-img-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .big-cover-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .angular[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .osaamisdiv[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 88%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGludHVrb3RvL2xpbnR1a290by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7QUFDQTs7OztFQUlFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdB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QUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saW50dWtvdG8vbGludHVrb3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvZGVlcC8gaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDAuOGVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBhY2MxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ueWxlaXN0YS1jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG59XG5cbi50ZWtub2xvZ2lhLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzMwMzY7XG59XG4udGVrbm9sb2dpYS1jb250YWluZXIgaDIge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luOiAwO1xufVxuLnRla25vbG9naWEtY29udGFpbmVyIGgzIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4udGVrbm9sb2dpYS1jb250YWluZXIgaDQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi50ZWtub2xvZ2lhLWNvbnRhaW5lciBoNSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnJlZmxla3Rpb2RpdiB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTcwcHg7XG4gIGFuaW1hdGlvbjogZnJvbUJsYWNrIDAuOXMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZyb21CbGFjayB7XG4gIGZyb20ge1xuICAgIGNvbG9yOiAjMjczMDM2O1xuICB9XG4gIHRvIHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxufVxucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMS42ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xufVxuaDIsXG5oMyxcbmg0LFxuaDUge1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTcwcHg7XG59XG4uYmlnLWNvdmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI3dhdmUyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4udGVjaC1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuXG4udGVjaC1sb2dvMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuLnRlY2gtbG9nbzMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5cbi50ZWNoLWltYWdlcy1ob2xkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTclO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiNleHByZXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogdGhpbiAxMDA7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAuNGVtO1xufVxudWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5saSB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIGNvbG9yOiAjMDBhY2MxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDg0JTtcbn1cbiNvcHBpbWlzZXQtbGlzdGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDM2O1xufVxuI3BhcmFubmV0dGF2YWEge1xuICB3aWR0aDogNzUlO1xufVxuI3BhcmFubmV0dGF2YWEgbGkge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNsYXN0b25lIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm90c2lra29sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuM2VtO1xufVxuXG4ub3RzaWtrb2xvZ28yIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYW5ndWxhciB7XG4gIHdpZHRoOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3NhYW1pc2xpc3RhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5vc2FhbWlzZGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAyZW07XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzMHB4IGdyZXk7XG59XG4jc3ZnMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtM3B4O1xufVxuI3N2ZzIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTNweDtcbn1cbiNzdmczIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5zdmcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5wYXRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ub3NhYW1pc2xpc3RhIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxZDczODI7IC8qIFdlYktpdC9CbGluayBTZWxhaW1ldCAqL1xufVxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxZDczODI7IC8qIEdlY2tvIFNlbGFpbWV0ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTY1NXB4KSB7XG4gIGgxIHtcbiAgICB0b3A6IC0xNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICBoMSB7XG4gICAgdG9wOiAtMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgxcHgpIHtcbiAgaDEge1xuICAgIHRvcDogLTEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI1MXB4KSB7XG4gIGgxIHtcbiAgICB0b3A6IC04MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTEzNXB4KSB7XG4gIGgxIHtcbiAgICB0b3A6IC02MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwOHB4KSB7XG4gIGgxIHtcbiAgICB0b3A6IC00MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODdweCkge1xuICAjcGFyYW5uZXR0YXZhYSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAucmVmbGVrdGlvZGl2IHtcbiAgICB0b3A6IC0zMHB4O1xuICB9XG4gICNvcHBpbWlzZXQtbGlzdGEge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MThweCkge1xuICBoMSB7XG4gICAgdG9wOiAtMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODQ1cHgpIHtcbiAgdWwge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgaDEge1xuICAgIHRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHRvcDogLTEwMHB4O1xuICB9XG4gIGgxIHtcbiAgICB0b3A6IC01NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM4cHgpIHtcbiAgaDEge1xuICAgIHRvcDogLTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MTRweCkge1xuICBoMSB7XG4gICAgdG9wOiAtMjBweDtcbiAgfVxuICAjbGFzdG9uZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUyNHB4KSB7XG4gIGgxIHtcbiAgICB0b3A6IDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICB0b3A6IC01MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJpZy1jb3Zlci1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hbmd1bGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5vc2FhbWlzZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LintukotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lintukoto',
          templateUrl: './lintukoto.component.html',
          styleUrls: ['./lintukoto.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/me/me.component.ts":
  /*!************************************!*\
    !*** ./src/app/me/me.component.ts ***!
    \************************************/

  /*! exports provided: MeComponent */

  /***/
  function srcAppMeMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeComponent", function () {
      return MeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var MeComponent = /*#__PURE__*/function () {
      function MeComponent() {
        _classCallCheck2(this, MeComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(MeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeComponent;
    }();

    MeComponent.ɵfac = function MeComponent_Factory(t) {
      return new (t || MeComponent)();
    };

    MeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeComponent,
      selectors: [["app-me"]],
      decls: 23,
      vars: 3,
      consts: [[1, "greater-container"], [1, "main-container"], [1, "profile-img-container", "profilepic", "cirlce"], [1, "prof", "front-prof"], ["alt", "", 1, "profile-img", 3, "src"], [1, "prof", "back-prof"], ["alt", "", 1, "loca", 3, "src"], [1, "m199"], [1, "infos"], [2, "text-align", "center", "padding", "1em"], ["href", "https://github.com/henripar"], [1, "fab", "fa-github", "fa-2x", "social-icon"], ["href", "https://www.linkedin.com/in/henri-parviainen-b79044176"], [1, "fab", "fa-linkedin-in", "fa-2x", "small-gap", "social-icon"], ["href", "mailto:henri.parviainen@icloud.com?"], [1, "fas", "fa-envelope", "fa-2x", "social-icon", "small-gap"], ["id", "wave2", "alt", "wave-image", 3, "src"]],
      template: function MeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jyv\xE4skyl\xE4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Henri Parviainen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "< Web Developer >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/22.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/location.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["html body {\n  background-color: whitesmoke;\n  height: auto;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n  color: black;\n}\nh1[_ngcontent-%COMP%] {\n  padding-top: 0.6em;\n  margin-bottom: 0;\n  font-size: 2.4em;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 0.2em;\n  margin-bottom: 0.2em;\n  font-size: 1.5em;\n}\ndiv[_ngcontent-%COMP%] {\n  color: black;\n}\n#wave[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  z-index: -1;\n}\n#wave2[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: -20px;\n}\n.profilepic[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 230px;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.greater-container[_ngcontent-%COMP%] {\n  background-image: url('wave (3).svg');\n  background-repeat: no-repeat;\n  background-position: top;\n  position: relative;\n  background-size: 100%;\n}\n@-webkit-keyframes fadeInFromNone1 {\n  0% {\n    display: none;\n    opacity: 0;\n    left: -200px;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n    left: -200px;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n    left: 0px;\n  }\n}\n@keyframes fadeInFromNone1 {\n  0% {\n    display: none;\n    opacity: 0;\n    left: -200px;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n    left: -200px;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n    left: 0px;\n  }\n}\n.main-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto 0 auto;\n  text-align: center;\n  position: relative;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  -webkit-animation: fadeInFromNone1 1.1s;\n          animation: fadeInFromNone1 1.1s;\n  height: 400px;\n  overflow: hidden;\n  transform: translateY(57%);\n}\n.profilepic[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.infos[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: translateY(11%);\n  margin-left: 2em;\n}\ni[_ngcontent-%COMP%] {\n  color: #273036;\n}\n.para[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: auto;\n  padding: 1em;\n  vertical-align: middle;\n  bottom: 0.5em;\n}\n.small-gap[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n}\n.social-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.profile-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 1400px) {\n  .main-container[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n    height: 460px;\n  }\n  .infos[_ngcontent-%COMP%] {\n    transform: translateY(9%);\n  }\n}\n@media (max-width: 1065px) {\n  .main-container[_ngcontent-%COMP%] {\n    height: 450px;\n    margin-bottom: 4em;\n  }\n}\n@media (max-width: 850px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-bottom: 6em;\n  }\n}\n@media (max-width: 781px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(25%);\n  }\n  #wave2[_ngcontent-%COMP%] {\n    bottom: -10px;\n  }\n  .infos[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 0;\n    transform: translateY(0px);\n    position: absolute;\n    bottom: -20%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n  }\n  .profile-img-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n}\n@media (max-width: 734px) {\n  #wave[_ngcontent-%COMP%] {\n    top: 35px;\n  }\n}\n@media (max-width: 665px) {\n  i[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .fas[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .infos[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 0;\n  }\n  .profilepic[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  h1[_ngcontent-%COMP%] {\n    margin-top: 0.5em;\n  }\n}\n@media (max-width: 510px) {\n  .main-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  h1[_ngcontent-%COMP%] {\n    margin-top: 0.5em;\n  }\n  .fas[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .infos[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 0;\n  }\n  .profilepic[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  #wave[_ngcontent-%COMP%] {\n    top: 40px;\n  }\n}\n.profilepic[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.image-info-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-bottom: 3rem;\n}\n.profile-img-container[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  position: relative;\n  perspective: 1500px;\n  -moz-perspective: 1500px;\n  height: 230px;\n  width: 230px;\n  z-index: 20;\n  margin-bottom: 1000px;\n  -webkit-animation-fill-mode: backwards !important;\n          animation-fill-mode: backwards !important;\n}\n.back-prof[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n  border: solid black 8px;\n  border-radius: 100%;\n  transition: all 1s ease;\n  -webkit-animation-fill-mode: backwards !important;\n          animation-fill-mode: backwards !important;\n  width: 100%;\n}\n.profile-img-container[_ngcontent-%COMP%]:hover   .front-prof[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.profile-img-container[_ngcontent-%COMP%]:hover   .back-prof[_ngcontent-%COMP%] {\n  transform: rotateY(0);\n}\n.profile-img-container[_ngcontent-%COMP%]:hover   .loca[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n  top: 40%;\n  left: 50%;\n}\n.profile-img-container[_ngcontent-%COMP%]:hover   .m199[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.7);\n  -webkit-transform: scale(1.7);\n  -moz-transform: scale(1.7);\n  margin-top: 9.5rem;\n  visibility: visible;\n}\n.prof[_ngcontent-%COMP%] {\n  transition: all 2s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  width: 230px;\n  height: 230px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.loca[_ngcontent-%COMP%] {\n  height: 50%;\n  position: absolute;\n  top: -38%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 1s ease-in;\n  transition-delay: 0.6s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.m199[_ngcontent-%COMP%] {\n  margin-top: 9.5rem;\n  transition: all 1s ease 1.5s;\n  opacity: 0;\n  transform: scale(0);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transition: all 1s ease 1.5s;\n  -moz-transition: all 1s ease 1.5s;\n  -o-transition: all 1s ease 1.5s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWUvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7QUFDQTs7O0VBR0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUNBQWtEO0VBQ2xELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0VBQ1g7QUFDRjtBQWxCQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0Y7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMEJB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QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0Isc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9tZS9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvaHRtbCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaDEsXG5oMixcbmgzIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBjb2xvcjogYmxhY2s7XG59XG5oMSB7XG4gIHBhZGRpbmctdG9wOiAwLjZlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyLjRlbTtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMC4yZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuZGl2IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuI3dhdmUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuI3dhdmUyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMjBweDtcbn1cblxuLnByb2ZpbGVwaWMge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ncmVhdGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy93YXZlICgzKS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lMSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG5cbiAgMSUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZTEgMS4xcztcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDU3JSk7XG59XG4ucHJvZmlsZXBpYyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pbmZvcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExJSk7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbmkge1xuICBjb2xvcjogIzI3MzAzNjtcbn1cbi5wYXJhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3R0b206IDAuNWVtO1xufVxuXG4uc21hbGwtZ2FwIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG4uc29jaWFsLWljb246aG92ZXIge1xuICBjb2xvcjogIzAwYWNjMTtcbn1cbi5zb2NpYWwtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgaGVpZ2h0OiA0NjBweDtcbiAgfVxuICAuaW5mb3Mge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5JSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNjVweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODFweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xuICB9XG4gICN3YXZlMiB7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgfVxuICAuaW5mb3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0yMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLnByb2ZpbGUtaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzM0cHgpIHtcbiAgI3dhdmUge1xuICAgIHRvcDogMzVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5mYXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmluZm9zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAucHJvZmlsZXBpYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgfVxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUxMHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gIH1cbiAgLmZhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaW5mb3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5wcm9maWxlcGljIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG4gICN3YXZlIHtcbiAgICB0b3A6IDQwcHg7XG4gIH1cbn1cbi5wcm9maWxlcGljIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uaW1hZ2UtaW5mby1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnByb2ZpbGUtaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTUwMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMjMwcHg7XG4gIHotaW5kZXg6IDIwO1xuICBtYXJnaW4tYm90dG9tOiAxMDAwcHg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcyAhaW1wb3J0YW50O1xufVxuXG4uYmFjay1wcm9mIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcyAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtaW1nLWNvbnRhaW5lcjpob3ZlciAuZnJvbnQtcHJvZiB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLnByb2ZpbGUtaW1nLWNvbnRhaW5lcjpob3ZlciAuYmFjay1wcm9mIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xufVxuXG4ucHJvZmlsZS1pbWctY29udGFpbmVyOmhvdmVyIC5sb2NhIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG59XG4ucHJvZmlsZS1pbWctY29udGFpbmVyOmhvdmVyIC5tMTk5IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS43KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gIG1hcmdpbi10b3A6IDkuNXJlbTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnByb2Yge1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG59XG5cbi5sb2NhIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzglO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuXG4ubTE5OSB7XG4gIG1hcmdpbi10b3A6IDkuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMS41cztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMS41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAxLjVzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAxLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-me',
          templateUrl: './me.component.html',
          styleUrls: ['./me.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/profile"];
    };

    var _c1 = function _c1() {
      return ["/portfolio"];
    };

    var _c2 = function _c2() {
      return ["/kurssit"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck2(this, NavbarComponent);
      }

      _createClass2(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 11,
      vars: 6,
      consts: [[1, "topnav"], [1, "nav-container"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "border-btm"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MIN\xC4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PORTFOLIO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " KURSSIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n body {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.router-link-active[_ngcontent-%COMP%]   .border-btm[_ngcontent-%COMP%] {\n  border-bottom: 3px #00bcd4 solid !important;\n  transition: ease 0.5s;\n  border-width: 100%;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n  width: 33%;\n  align-self: center;\n  justify-content: center;\n  position: relative;\n  display: inline-flex;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background-color: #273036;\n  margin: 0;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.border-btm[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0;\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .border-btm[_ngcontent-%COMP%] {\n  border-bottom: 3px #00bcd4 solid !important;\n  transition: ease 0.3s;\n  border-width: 100%;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBtYXJnaW46IDA7XG59XG5cbi9kZWVwL2JvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucm91dGVyLWxpbmstYWN0aXZlIC5ib3JkZXItYnRtIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4ICMwMGJjZDQgc29saWQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xuICBib3JkZXItd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMzJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnRvcG5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzAzNjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvcmRlci1idG0ge1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG5cbi50b3BuYXYgYSB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50b3BuYXYgYTpob3ZlciAuYm9yZGVyLWJ0bSB7XG4gIGJvcmRlci1ib3R0b206IDNweCAjMDBiY2Q0IHNvbGlkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGVhc2UgMC4zcztcbiAgYm9yZGVyLXdpZHRoOiAxMDAlO1xufVxuXG4udG9wbmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/picstocker/picstocker.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/picstocker/picstocker.component.ts ***!
    \****************************************************/

  /*! exports provided: PicstockerComponent */

  /***/
  function srcAppPicstockerPicstockerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PicstockerComponent", function () {
      return PicstockerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PicstockerComponent = /*#__PURE__*/function () {
      function PicstockerComponent() {
        _classCallCheck2(this, PicstockerComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(PicstockerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PicstockerComponent;
    }();

    PicstockerComponent.ɵfac = function PicstockerComponent_Factory(t) {
      return new (t || PicstockerComponent)();
    };

    PicstockerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PicstockerComponent,
      selectors: [["app-picstocker"]],
      decls: 8,
      vars: 4,
      consts: [["id", "wave", "alt", "wave-image", 3, "src"], ["id", "picstocker-logo", "alt", "", 3, "src"], [1, "main-container"], ["width", "75%", "controls", "", 3, "src"], [1, "project-info"], ["id", "wave2", "alt", "wave-image", 3, "src"]],
      template: function PicstockerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projekti on viel\xE4 kesken..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (3).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/logo3.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/uusiPics.mp4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background-image: whitesmoke !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 85%;\n  text-align: center;\n  min-height: 30vh;\n  max-height: 35vh;\n  position: relative;\n  top: -230px;\n  -webkit-animation: fadeInFromNone2 0.8s ease-out;\n          animation: fadeInFromNone2 0.8s ease-out;\n}\n\n@-webkit-keyframes fadeInFromNone2 {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInFromNone2 {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeInFromNone3 {\n  0% {\n    display: none;\n    opacity: 0;\n    top: 120px;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n    top: 120px;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n    top: 50px;\n  }\n}\n\n@keyframes fadeInFromNone3 {\n  0% {\n    display: none;\n    opacity: 0;\n    top: 120px;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n    top: 120px;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n    top: 50px;\n  }\n}\n\n.big-cover-image[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.picstocker-link[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n}\n\n#linkki-div[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 200px;\n  margin-bottom: 1em;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: black;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 1.6em;\n  margin-bottom: 0.2em;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n  text-decoration: none;\n}\n\n#picstocker-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 82px;\n  left: 43vw;\n  max-width: 240px;\n  width: 240px;\n  margin: 0 auto;\n  -webkit-animation: fadeInFromNone3 0.6s ease-out;\n          animation: fadeInFromNone3 0.6s ease-out;\n}\n\n#wave[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  top: -34px;\n  z-index: -1;\n}\n\n#wave2[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: -5px;\n  display: block;\n}\n\n@media (max-width: 1700px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    top: 78px;\n    left: 42vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -200px;\n  }\n}\n\n@media (max-width: 1480px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    top: 60px;\n    left: 41vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -200px;\n  }\n}\n\n@media (max-width: 1285px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    top: 50px;\n    left: 40vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -170px;\n  }\n}\n\n@media (max-width: 1185px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    width: 190px;\n    top: 50px;\n    left: 41vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -150px;\n  }\n}\n\n@media (max-width: 1085px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    width: 190px;\n    top: 45px;\n    left: 40vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -150px;\n  }\n}\n\n@media (max-width: 985px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    width: 190px;\n    top: 45px;\n    left: 40vw;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -125px;\n  }\n  #wave[_ngcontent-%COMP%] {\n    top: -25px;\n  }\n}\n\n@media (max-width: 911px) {\n  #picstocker-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  video[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -100px;\n  }\n}\n\n@media (max-width: 770px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -15px;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    top: -70px;\n  }\n}\n\n@media (max-width: 415px) {\n  video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .main-container[_ngcontent-%COMP%] {\n    width: 100vw;\n    top: -20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljc3RvY2tlci9waWNzdG9ja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjs7QUFmQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGOztBQWxCQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BpY3N0b2NrZXIvcGljc3RvY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvIGh0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHdoaXRlc21va2UgIWltcG9ydGFudDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMwdmg7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjMwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUyIDAuOHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lMiB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRnJvbU5vbmUzIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDEyMHB4O1xuICB9XG5cbiAgMSUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAxMjBweDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiA1MHB4O1xuICB9XG59XG4uYmlnLWNvdmVyLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5waWNzdG9ja2VyLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsaW5ra2ktZGl2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxLjZlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG59XG5cbmgxLFxuaDIge1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG59XG5hIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwMGFjYzE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3BpY3N0b2NrZXItbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MnB4O1xuICBsZWZ0OiA0M3Z3O1xuICBtYXgtd2lkdGg6IDI0MHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lMyAwLjZzIGVhc2Utb3V0O1xufVxuI3dhdmUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zNHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbiN3YXZlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XG4gICNwaWNzdG9ja2VyLWxvZ28ge1xuICAgIHRvcDogNzhweDtcbiAgICBsZWZ0OiA0MnZ3O1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMjAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0ODBweCkge1xuICAjcGljc3RvY2tlci1sb2dvIHtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogNDF2dztcbiAgfVxuICAubWFpbi1jb250YWluZXIge1xuICAgIHRvcDogLTIwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4NXB4KSB7XG4gICNwaWNzdG9ja2VyLWxvZ28ge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA0MHZ3O1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMTcwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTg1cHgpIHtcbiAgI3BpY3N0b2NrZXItbG9nbyB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA0MXZ3O1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDg1cHgpIHtcbiAgI3BpY3N0b2NrZXItbG9nbyB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiA0MHZ3O1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODVweCkge1xuICAjcGljc3RvY2tlci1sb2dvIHtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgdG9wOiA0NXB4O1xuICAgIGxlZnQ6IDQwdnc7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICB0b3A6IC0xMjVweDtcbiAgfVxuICAjd2F2ZSB7XG4gICAgdG9wOiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMXB4KSB7XG4gICNwaWNzdG9ja2VyLWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgdmlkZW8ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICB0b3A6IC0xMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gICN3YXZlIHtcbiAgICB0b3A6IC0xNXB4O1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtNzBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdG9wOiAtMjBweDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicstockerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-picstocker',
          templateUrl: './picstocker.component.html',
          styleUrls: ['./picstocker.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _assets_materialize_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/materialize/css/materialize.min.css */
    "./src/assets/materialize/css/materialize.min.css");
    /* harmony import */


    var _assets_materialize_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../assets/materialize/js/materialize.min.js */
    "./src/assets/materialize/js/materialize.min.js");
    /* harmony import */


    var _assets_materialize_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_materialize_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/picstocker"];
    };

    var _c1 = function _c1() {
      return ["/lintukoto"];
    };

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck2(this, PortfolioComponent);

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass2(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)();
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 110,
      vars: 20,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"], ["id", "wave", "alt", "wave-image", 3, "src"], [1, "top-container"], [1, "gifcontainer"], ["alt", "", 1, "gif", 3, "src"], [1, "info-container2"], [1, "teknologialogot"], ["alt", "", 1, "tech-logo", 3, "src"], [1, "btn", "blue-grey", "darken-4", "centerrly", 3, "routerLink"], [2, "text-align", "center !important"], [1, "far", "fa-eye-slash"], [2, "width", "70%"], ["id", "toinen", 1, "gifcontainer"], ["method", "GET", "action", "https://henripar.github.io/monsters-rolodex/"], ["type", "submit", 1, "btn", "blue-grey", "darken-4", "centerrly"], ["href", "https://github.com/henripar/monsters-rolodex", 2, "text-align", "center !important", "color", "#00bcd4", "margin", "auto", "width", "fit-content", "display", "block", "text-decoration", "none"], [1, "fas", "fa-code"], ["alt", "", 1, "tech-logo-big", 3, "src"], ["method", "GET", "action", "https://henripar.github.io/Natours/"], ["href", "https://github.com/henripar/Natours", 2, "text-align", "center !important", "color", "#00bcd4", "margin", "auto", "width", "fit-content", "display", "block", "text-decoration", "none"], ["id", "wave2", "alt", "wave-image", 3, "src"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Picstocker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Picstocker on web-sovellus, johon k\xE4ytt\xE4j\xE4t voivat lis\xE4t\xE4 kuvia, joita muut k\xE4ytt\xE4j\xE4t voivat ladata omaan k\xE4ytt\xF6\xF6n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Autenktikaatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JSON Web Token & bcrypt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "multer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Materialize CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " KATSO TARKEMMIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " L\xE4hdekoodi yksityinen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lintukoto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Web-sovellus, joka helpottaa opiskelijoiden ajanhallintaa. Projektissa oli mukana 6 opiskelijaa ja se toteutettiin scrum k\xE4yt\xE4nteit\xE4 noudattaen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Autenktikaatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SCRUM / Ketter\xE4t menetelm\xE4t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " KATSO TARKEMMIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " L\xE4hdekoodi yksityinen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Monsters Rolodex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Pieni sovellus, jolla harjoitellaan Reactin perusteita. Sovellus on osa ZTM Complete React Developer in 2020 kurssia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Props & State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "JSX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Funktionaaliset komponentit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Luokkakomponentit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " DEMO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " L\xE4hdekoodi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Natours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Landing page kuvitteelliselle yritykselle, joka tarjoaa luontoel\xE4myksi\xE4 asiakkaille. Projektissa harjoittelin erityisesti Sass kirjaston k\xE4ytt\xF6\xE4 ja edistyneempi\xE4 css tekniikoita. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sass / scss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "BEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "7-1 CSS Arkkitehtuuri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Responsiivinen design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " DEMO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " L\xE4hdekoodi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 20);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (3).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/giffi.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/angular.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/nodejs.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/express.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/mongodb.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/giffi2.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/angular.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/nodejs.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/express.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/mongodb.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/monsters.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/React.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/natours.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/sass.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "assets/wave (4).svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background: whitesmoke !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center !important;\n  margin: 0 !important;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 212px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-top-left-radius: 25px !important;\n  border-top-right-radius: 25px !important;\n  position: relative;\n  bottom: -5px;\n  background-color: lightblue !important;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  width: 30%;\n  margin: 0 2em;\n  background-color: whitesmoke;\n  height: 100%;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n@-webkit-keyframes example {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes example {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.gif[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.gifcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 3em;\n  width: 85%;\n  align-content: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-animation: fadeInFromNone 1s;\n          animation: fadeInFromNone 1s;\n}\n\n#toinen[_ngcontent-%COMP%] {\n  -webkit-animation: fadeInFromNone 1.2s ease-in !important;\n          animation: fadeInFromNone 1.2s ease-in !important;\n}\n\n.info-container2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 1em;\n  align-self: center;\n  text-align: left !important;\n  width: 40%;\n}\n\n.teknologialogot[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.info-container2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n  .centerrly {\n  width: 170px !important;\n  justify-self: center;\n  align-self: center;\n  margin: 0.5em auto !important;\n  display: block !important;\n}\n\n.info-container2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-align: center;\n  margin-top: 0;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#2632383f, whitesmoke) !important;\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: disc !important;\n  margin-left: 3em;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #00bcd4;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  min-height: 10vh;\n\n  position: relative;\n  top: -200px;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n  box-shadow: inset 0px 0px 10px black;\n  box-sizing: border-box;\n  border-bottom-right-radius: 27px;\n  border-bottom-left-radius: 27px;\n}\n\n.tech-logo-big[_ngcontent-%COMP%] {\n  width: 100px;\n  vertical-align: middle;\n  margin: 0.9em;\n}\n\n.tech-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  vertical-align: middle;\n  margin: 0.3em;\n}\n\n#lintukoto[_ngcontent-%COMP%] {\n  background-color: powderblue;\n  bottom: -5px;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n  margin: 0;\n  padding-top: 0.5em;\n  color: #00bcd4;\n  position: relative;\n  top: -95px;\n  font-size: 2.2em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-variant: all-small-caps;\n  margin-bottom: 1em;\n  color: black;\n  font-size: 1.8em !important;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-variant-caps: normal;\n  margin-top: 0.7em;\n  margin-bottom: 0;\n  font-size: 1.4em !important;\n}\n\n .medium {\n  width: 100%;\n}\n\n  .card-content {\n  height: 400px;\n}\n\n  .card {\n  border-radius: 25px !important;\n  -webkit-animation-name: fadeInFromNone !important;\n          animation-name: fadeInFromNone !important;\n  -webkit-animation-duration: 1s !important;\n          animation-duration: 1s !important;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n#delay[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.8s !important;\n          animation-duration: 1.8s !important;\n  -webkit-animation-name: fadeInFromNone !important;\n          animation-name: fadeInFromNone !important;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  opacity: 1;\n}\n\n@-webkit-keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n#wave[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  top: -34px;\n  z-index: -1;\n}\n\n#wave2[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  bottom: -5px;\n  display: block;\n}\n\n@media screen and (max-width: 1233px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 65%;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 90vh;\n    top: -160px;\n  }\n}\n\n@media (max-width: 1052px) {\n  .top-container[_ngcontent-%COMP%] {\n    top: -140px;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 115vh;\n  }\n}\n\n@media (max-width: 978px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -25px;\n  }\n}\n\n@media (max-width: 943px) {\n  .info-container2[_ngcontent-%COMP%] {\n    display: block;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n  }\n  .gifcontainer[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 734px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -15px;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -110px;\n  }\n}\n\n@media (max-width: 595px) {\n  .gif[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 556px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 1em 0;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -80px;\n    min-height: 120vh;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n}\n\n@media (max-width: 450px) {\n  #wave[_ngcontent-%COMP%] {\n    top: -1px;\n  }\n  .top-container[_ngcontent-%COMP%] {\n    top: -30px;\n    min-height: 140vh;\n  }\n}\n\n@media (max-width: 410px) {\n  .tech-logo[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDBCQUF1QjtLQUF2Qix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMkJB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RTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi9kZWVwL2h0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2UgIWltcG9ydGFudDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmdpZiB7XG4gIHdpZHRoOiA1MDBweDtcbn1cbi5naWZjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIHdpZHRoOiA4NSU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMXM7XG59XG4jdG9pbmVuIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjJzIGVhc2UtaW4gIWltcG9ydGFudDtcbn1cbi5pbmZvLWNvbnRhaW5lcjIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDAlO1xufVxuLnRla25vbG9naWFsb2dvdCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmluZm8tY29udGFpbmVyMiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5jZW50ZXJybHkge1xuICB3aWR0aDogMTcwcHggIWltcG9ydGFudDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVlbSBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvLWNvbnRhaW5lcjIgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzI2MzIzODNmLCB3aGl0ZXNtb2tlKSAhaW1wb3J0YW50O1xufVxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGU6IGRpc2MgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjAwcHg7XG59XG4ucHJvamVjdC1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IGJsYWNrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjdweDtcbn1cbi50ZWNoLWxvZ28tYmlnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAuOWVtO1xufVxuXG4udGVjaC1sb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMC4zZW07XG59XG4jbGludHVrb3RvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcG93ZGVyYmx1ZTtcbiAgYm90dG9tOiAtNXB4O1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgY29sb3I6ICMwMGJjZDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOTVweDtcbiAgZm9udC1zaXplOiAyLjJlbTtcbn1cbmgyIHtcbiAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwcztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbn1cbmgzIHtcbiAgZm9udC12YXJpYW50LWNhcHM6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMC43ZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbn1cblxuL2RlZXAvLm1lZGl1bSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuL2RlZXAvIC5jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuL2RlZXAvIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRnJvbU5vbmUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNkZWxheSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRnJvbU5vbmUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDElIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDElIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDElIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4jd2F2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM0cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuI3dhdmUyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzM3B4KSB7XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgfVxuICAudG9wLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XG4gICAgdG9wOiAtMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUycHgpIHtcbiAgLnRvcC1jb250YWluZXIge1xuICAgIHRvcDogLTE0MHB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTE1dmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NzhweCkge1xuICAjd2F2ZSB7XG4gICAgdG9wOiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk0M3B4KSB7XG4gIC5pbmZvLWNvbnRhaW5lcjIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmdpZmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzRweCkge1xuICAjd2F2ZSB7XG4gICAgdG9wOiAtMTVweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciB7XG4gICAgdG9wOiAtMTEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTVweCkge1xuICAuZ2lmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTZweCkge1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gIH1cbiAgLnRvcC1jb250YWluZXIge1xuICAgIHRvcDogLTgwcHg7XG4gICAgbWluLWhlaWdodDogMTIwdmg7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAjd2F2ZSB7XG4gICAgdG9wOiAtMXB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICB0b3A6IC0zMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE0MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDEwcHgpIHtcbiAgLnRlY2gtbG9nbyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/upper-wave/upper-wave.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/upper-wave/upper-wave.component.ts ***!
    \****************************************************/

  /*! exports provided: UpperWaveComponent */

  /***/
  function srcAppUpperWaveUpperWaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpperWaveComponent", function () {
      return UpperWaveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UpperWaveComponent = /*#__PURE__*/function () {
      function UpperWaveComponent() {
        _classCallCheck2(this, UpperWaveComponent);
      }

      _createClass2(UpperWaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpperWaveComponent;
    }();

    UpperWaveComponent.ɵfac = function UpperWaveComponent_Factory(t) {
      return new (t || UpperWaveComponent)();
    };

    UpperWaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpperWaveComponent,
      selectors: [["app-upper-wave"]],
      decls: 1,
      vars: 0,
      consts: [["id", "wave", "src", "../../assets/wave (3).svg", "alt", "wave-image"]],
      template: function UpperWaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["#wave[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBwZXItd2F2ZS91cHBlci13YXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91cHBlci13YXZlL3VwcGVyLXdhdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3YXZlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpperWaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upper-wave',
          templateUrl: './upper-wave.component.html',
          styleUrls: ['./upper-wave.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/materialize/css/materialize.min.css":
  /*!********************************************************!*\
    !*** ./src/assets/materialize/css/materialize.min.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsMaterializeCssMaterializeMinCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red{background-color:#e51c23 !important}\r\n.materialize-red-text{color:#e51c23 !important}\r\n.materialize-red.lighten-5{background-color:#fdeaeb !important}\r\n.materialize-red-text.text-lighten-5{color:#fdeaeb !important}\r\n.materialize-red.lighten-4{background-color:#f8c1c3 !important}\r\n.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}\r\n.materialize-red.lighten-3{background-color:#f3989b !important}\r\n.materialize-red-text.text-lighten-3{color:#f3989b !important}\r\n.materialize-red.lighten-2{background-color:#ee6e73 !important}\r\n.materialize-red-text.text-lighten-2{color:#ee6e73 !important}\r\n.materialize-red.lighten-1{background-color:#ea454b !important}\r\n.materialize-red-text.text-lighten-1{color:#ea454b !important}\r\n.materialize-red.darken-1{background-color:#d0181e !important}\r\n.materialize-red-text.text-darken-1{color:#d0181e !important}\r\n.materialize-red.darken-2{background-color:#b9151b !important}\r\n.materialize-red-text.text-darken-2{color:#b9151b !important}\r\n.materialize-red.darken-3{background-color:#a21318 !important}\r\n.materialize-red-text.text-darken-3{color:#a21318 !important}\r\n.materialize-red.darken-4{background-color:#8b1014 !important}\r\n.materialize-red-text.text-darken-4{color:#8b1014 !important}\r\n.red{background-color:#F44336 !important}\r\n.red-text{color:#F44336 !important}\r\n.red.lighten-5{background-color:#FFEBEE !important}\r\n.red-text.text-lighten-5{color:#FFEBEE !important}\r\n.red.lighten-4{background-color:#FFCDD2 !important}\r\n.red-text.text-lighten-4{color:#FFCDD2 !important}\r\n.red.lighten-3{background-color:#EF9A9A !important}\r\n.red-text.text-lighten-3{color:#EF9A9A !important}\r\n.red.lighten-2{background-color:#E57373 !important}\r\n.red-text.text-lighten-2{color:#E57373 !important}\r\n.red.lighten-1{background-color:#EF5350 !important}\r\n.red-text.text-lighten-1{color:#EF5350 !important}\r\n.red.darken-1{background-color:#E53935 !important}\r\n.red-text.text-darken-1{color:#E53935 !important}\r\n.red.darken-2{background-color:#D32F2F !important}\r\n.red-text.text-darken-2{color:#D32F2F !important}\r\n.red.darken-3{background-color:#C62828 !important}\r\n.red-text.text-darken-3{color:#C62828 !important}\r\n.red.darken-4{background-color:#B71C1C !important}\r\n.red-text.text-darken-4{color:#B71C1C !important}\r\n.red.accent-1{background-color:#FF8A80 !important}\r\n.red-text.text-accent-1{color:#FF8A80 !important}\r\n.red.accent-2{background-color:#FF5252 !important}\r\n.red-text.text-accent-2{color:#FF5252 !important}\r\n.red.accent-3{background-color:#FF1744 !important}\r\n.red-text.text-accent-3{color:#FF1744 !important}\r\n.red.accent-4{background-color:#D50000 !important}\r\n.red-text.text-accent-4{color:#D50000 !important}\r\n.pink{background-color:#e91e63 !important}\r\n.pink-text{color:#e91e63 !important}\r\n.pink.lighten-5{background-color:#fce4ec !important}\r\n.pink-text.text-lighten-5{color:#fce4ec !important}\r\n.pink.lighten-4{background-color:#f8bbd0 !important}\r\n.pink-text.text-lighten-4{color:#f8bbd0 !important}\r\n.pink.lighten-3{background-color:#f48fb1 !important}\r\n.pink-text.text-lighten-3{color:#f48fb1 !important}\r\n.pink.lighten-2{background-color:#f06292 !important}\r\n.pink-text.text-lighten-2{color:#f06292 !important}\r\n.pink.lighten-1{background-color:#ec407a !important}\r\n.pink-text.text-lighten-1{color:#ec407a !important}\r\n.pink.darken-1{background-color:#d81b60 !important}\r\n.pink-text.text-darken-1{color:#d81b60 !important}\r\n.pink.darken-2{background-color:#c2185b !important}\r\n.pink-text.text-darken-2{color:#c2185b !important}\r\n.pink.darken-3{background-color:#ad1457 !important}\r\n.pink-text.text-darken-3{color:#ad1457 !important}\r\n.pink.darken-4{background-color:#880e4f !important}\r\n.pink-text.text-darken-4{color:#880e4f !important}\r\n.pink.accent-1{background-color:#ff80ab !important}\r\n.pink-text.text-accent-1{color:#ff80ab !important}\r\n.pink.accent-2{background-color:#ff4081 !important}\r\n.pink-text.text-accent-2{color:#ff4081 !important}\r\n.pink.accent-3{background-color:#f50057 !important}\r\n.pink-text.text-accent-3{color:#f50057 !important}\r\n.pink.accent-4{background-color:#c51162 !important}\r\n.pink-text.text-accent-4{color:#c51162 !important}\r\n.purple{background-color:#9c27b0 !important}\r\n.purple-text{color:#9c27b0 !important}\r\n.purple.lighten-5{background-color:#f3e5f5 !important}\r\n.purple-text.text-lighten-5{color:#f3e5f5 !important}\r\n.purple.lighten-4{background-color:#e1bee7 !important}\r\n.purple-text.text-lighten-4{color:#e1bee7 !important}\r\n.purple.lighten-3{background-color:#ce93d8 !important}\r\n.purple-text.text-lighten-3{color:#ce93d8 !important}\r\n.purple.lighten-2{background-color:#ba68c8 !important}\r\n.purple-text.text-lighten-2{color:#ba68c8 !important}\r\n.purple.lighten-1{background-color:#ab47bc !important}\r\n.purple-text.text-lighten-1{color:#ab47bc !important}\r\n.purple.darken-1{background-color:#8e24aa !important}\r\n.purple-text.text-darken-1{color:#8e24aa !important}\r\n.purple.darken-2{background-color:#7b1fa2 !important}\r\n.purple-text.text-darken-2{color:#7b1fa2 !important}\r\n.purple.darken-3{background-color:#6a1b9a !important}\r\n.purple-text.text-darken-3{color:#6a1b9a !important}\r\n.purple.darken-4{background-color:#4a148c !important}\r\n.purple-text.text-darken-4{color:#4a148c !important}\r\n.purple.accent-1{background-color:#ea80fc !important}\r\n.purple-text.text-accent-1{color:#ea80fc !important}\r\n.purple.accent-2{background-color:#e040fb !important}\r\n.purple-text.text-accent-2{color:#e040fb !important}\r\n.purple.accent-3{background-color:#d500f9 !important}\r\n.purple-text.text-accent-3{color:#d500f9 !important}\r\n.purple.accent-4{background-color:#a0f !important}\r\n.purple-text.text-accent-4{color:#a0f !important}\r\n.deep-purple{background-color:#673ab7 !important}\r\n.deep-purple-text{color:#673ab7 !important}\r\n.deep-purple.lighten-5{background-color:#ede7f6 !important}\r\n.deep-purple-text.text-lighten-5{color:#ede7f6 !important}\r\n.deep-purple.lighten-4{background-color:#d1c4e9 !important}\r\n.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}\r\n.deep-purple.lighten-3{background-color:#b39ddb !important}\r\n.deep-purple-text.text-lighten-3{color:#b39ddb !important}\r\n.deep-purple.lighten-2{background-color:#9575cd !important}\r\n.deep-purple-text.text-lighten-2{color:#9575cd !important}\r\n.deep-purple.lighten-1{background-color:#7e57c2 !important}\r\n.deep-purple-text.text-lighten-1{color:#7e57c2 !important}\r\n.deep-purple.darken-1{background-color:#5e35b1 !important}\r\n.deep-purple-text.text-darken-1{color:#5e35b1 !important}\r\n.deep-purple.darken-2{background-color:#512da8 !important}\r\n.deep-purple-text.text-darken-2{color:#512da8 !important}\r\n.deep-purple.darken-3{background-color:#4527a0 !important}\r\n.deep-purple-text.text-darken-3{color:#4527a0 !important}\r\n.deep-purple.darken-4{background-color:#311b92 !important}\r\n.deep-purple-text.text-darken-4{color:#311b92 !important}\r\n.deep-purple.accent-1{background-color:#b388ff !important}\r\n.deep-purple-text.text-accent-1{color:#b388ff !important}\r\n.deep-purple.accent-2{background-color:#7c4dff !important}\r\n.deep-purple-text.text-accent-2{color:#7c4dff !important}\r\n.deep-purple.accent-3{background-color:#651fff !important}\r\n.deep-purple-text.text-accent-3{color:#651fff !important}\r\n.deep-purple.accent-4{background-color:#6200ea !important}\r\n.deep-purple-text.text-accent-4{color:#6200ea !important}\r\n.indigo{background-color:#3f51b5 !important}\r\n.indigo-text{color:#3f51b5 !important}\r\n.indigo.lighten-5{background-color:#e8eaf6 !important}\r\n.indigo-text.text-lighten-5{color:#e8eaf6 !important}\r\n.indigo.lighten-4{background-color:#c5cae9 !important}\r\n.indigo-text.text-lighten-4{color:#c5cae9 !important}\r\n.indigo.lighten-3{background-color:#9fa8da !important}\r\n.indigo-text.text-lighten-3{color:#9fa8da !important}\r\n.indigo.lighten-2{background-color:#7986cb !important}\r\n.indigo-text.text-lighten-2{color:#7986cb !important}\r\n.indigo.lighten-1{background-color:#5c6bc0 !important}\r\n.indigo-text.text-lighten-1{color:#5c6bc0 !important}\r\n.indigo.darken-1{background-color:#3949ab !important}\r\n.indigo-text.text-darken-1{color:#3949ab !important}\r\n.indigo.darken-2{background-color:#303f9f !important}\r\n.indigo-text.text-darken-2{color:#303f9f !important}\r\n.indigo.darken-3{background-color:#283593 !important}\r\n.indigo-text.text-darken-3{color:#283593 !important}\r\n.indigo.darken-4{background-color:#1a237e !important}\r\n.indigo-text.text-darken-4{color:#1a237e !important}\r\n.indigo.accent-1{background-color:#8c9eff !important}\r\n.indigo-text.text-accent-1{color:#8c9eff !important}\r\n.indigo.accent-2{background-color:#536dfe !important}\r\n.indigo-text.text-accent-2{color:#536dfe !important}\r\n.indigo.accent-3{background-color:#3d5afe !important}\r\n.indigo-text.text-accent-3{color:#3d5afe !important}\r\n.indigo.accent-4{background-color:#304ffe !important}\r\n.indigo-text.text-accent-4{color:#304ffe !important}\r\n.blue{background-color:#2196F3 !important}\r\n.blue-text{color:#2196F3 !important}\r\n.blue.lighten-5{background-color:#E3F2FD !important}\r\n.blue-text.text-lighten-5{color:#E3F2FD !important}\r\n.blue.lighten-4{background-color:#BBDEFB !important}\r\n.blue-text.text-lighten-4{color:#BBDEFB !important}\r\n.blue.lighten-3{background-color:#90CAF9 !important}\r\n.blue-text.text-lighten-3{color:#90CAF9 !important}\r\n.blue.lighten-2{background-color:#64B5F6 !important}\r\n.blue-text.text-lighten-2{color:#64B5F6 !important}\r\n.blue.lighten-1{background-color:#42A5F5 !important}\r\n.blue-text.text-lighten-1{color:#42A5F5 !important}\r\n.blue.darken-1{background-color:#1E88E5 !important}\r\n.blue-text.text-darken-1{color:#1E88E5 !important}\r\n.blue.darken-2{background-color:#1976D2 !important}\r\n.blue-text.text-darken-2{color:#1976D2 !important}\r\n.blue.darken-3{background-color:#1565C0 !important}\r\n.blue-text.text-darken-3{color:#1565C0 !important}\r\n.blue.darken-4{background-color:#0D47A1 !important}\r\n.blue-text.text-darken-4{color:#0D47A1 !important}\r\n.blue.accent-1{background-color:#82B1FF !important}\r\n.blue-text.text-accent-1{color:#82B1FF !important}\r\n.blue.accent-2{background-color:#448AFF !important}\r\n.blue-text.text-accent-2{color:#448AFF !important}\r\n.blue.accent-3{background-color:#2979FF !important}\r\n.blue-text.text-accent-3{color:#2979FF !important}\r\n.blue.accent-4{background-color:#2962FF !important}\r\n.blue-text.text-accent-4{color:#2962FF !important}\r\n.light-blue{background-color:#03a9f4 !important}\r\n.light-blue-text{color:#03a9f4 !important}\r\n.light-blue.lighten-5{background-color:#e1f5fe !important}\r\n.light-blue-text.text-lighten-5{color:#e1f5fe !important}\r\n.light-blue.lighten-4{background-color:#b3e5fc !important}\r\n.light-blue-text.text-lighten-4{color:#b3e5fc !important}\r\n.light-blue.lighten-3{background-color:#81d4fa !important}\r\n.light-blue-text.text-lighten-3{color:#81d4fa !important}\r\n.light-blue.lighten-2{background-color:#4fc3f7 !important}\r\n.light-blue-text.text-lighten-2{color:#4fc3f7 !important}\r\n.light-blue.lighten-1{background-color:#29b6f6 !important}\r\n.light-blue-text.text-lighten-1{color:#29b6f6 !important}\r\n.light-blue.darken-1{background-color:#039be5 !important}\r\n.light-blue-text.text-darken-1{color:#039be5 !important}\r\n.light-blue.darken-2{background-color:#0288d1 !important}\r\n.light-blue-text.text-darken-2{color:#0288d1 !important}\r\n.light-blue.darken-3{background-color:#0277bd !important}\r\n.light-blue-text.text-darken-3{color:#0277bd !important}\r\n.light-blue.darken-4{background-color:#01579b !important}\r\n.light-blue-text.text-darken-4{color:#01579b !important}\r\n.light-blue.accent-1{background-color:#80d8ff !important}\r\n.light-blue-text.text-accent-1{color:#80d8ff !important}\r\n.light-blue.accent-2{background-color:#40c4ff !important}\r\n.light-blue-text.text-accent-2{color:#40c4ff !important}\r\n.light-blue.accent-3{background-color:#00b0ff !important}\r\n.light-blue-text.text-accent-3{color:#00b0ff !important}\r\n.light-blue.accent-4{background-color:#0091ea !important}\r\n.light-blue-text.text-accent-4{color:#0091ea !important}\r\n.cyan{background-color:#00bcd4 !important}\r\n.cyan-text{color:#00bcd4 !important}\r\n.cyan.lighten-5{background-color:#e0f7fa !important}\r\n.cyan-text.text-lighten-5{color:#e0f7fa !important}\r\n.cyan.lighten-4{background-color:#b2ebf2 !important}\r\n.cyan-text.text-lighten-4{color:#b2ebf2 !important}\r\n.cyan.lighten-3{background-color:#80deea !important}\r\n.cyan-text.text-lighten-3{color:#80deea !important}\r\n.cyan.lighten-2{background-color:#4dd0e1 !important}\r\n.cyan-text.text-lighten-2{color:#4dd0e1 !important}\r\n.cyan.lighten-1{background-color:#26c6da !important}\r\n.cyan-text.text-lighten-1{color:#26c6da !important}\r\n.cyan.darken-1{background-color:#00acc1 !important}\r\n.cyan-text.text-darken-1{color:#00acc1 !important}\r\n.cyan.darken-2{background-color:#0097a7 !important}\r\n.cyan-text.text-darken-2{color:#0097a7 !important}\r\n.cyan.darken-3{background-color:#00838f !important}\r\n.cyan-text.text-darken-3{color:#00838f !important}\r\n.cyan.darken-4{background-color:#006064 !important}\r\n.cyan-text.text-darken-4{color:#006064 !important}\r\n.cyan.accent-1{background-color:#84ffff !important}\r\n.cyan-text.text-accent-1{color:#84ffff !important}\r\n.cyan.accent-2{background-color:#18ffff !important}\r\n.cyan-text.text-accent-2{color:#18ffff !important}\r\n.cyan.accent-3{background-color:#00e5ff !important}\r\n.cyan-text.text-accent-3{color:#00e5ff !important}\r\n.cyan.accent-4{background-color:#00b8d4 !important}\r\n.cyan-text.text-accent-4{color:#00b8d4 !important}\r\n.teal{background-color:#009688 !important}\r\n.teal-text{color:#009688 !important}\r\n.teal.lighten-5{background-color:#e0f2f1 !important}\r\n.teal-text.text-lighten-5{color:#e0f2f1 !important}\r\n.teal.lighten-4{background-color:#b2dfdb !important}\r\n.teal-text.text-lighten-4{color:#b2dfdb !important}\r\n.teal.lighten-3{background-color:#80cbc4 !important}\r\n.teal-text.text-lighten-3{color:#80cbc4 !important}\r\n.teal.lighten-2{background-color:#4db6ac !important}\r\n.teal-text.text-lighten-2{color:#4db6ac !important}\r\n.teal.lighten-1{background-color:#26a69a !important}\r\n.teal-text.text-lighten-1{color:#26a69a !important}\r\n.teal.darken-1{background-color:#00897b !important}\r\n.teal-text.text-darken-1{color:#00897b !important}\r\n.teal.darken-2{background-color:#00796b !important}\r\n.teal-text.text-darken-2{color:#00796b !important}\r\n.teal.darken-3{background-color:#00695c !important}\r\n.teal-text.text-darken-3{color:#00695c !important}\r\n.teal.darken-4{background-color:#004d40 !important}\r\n.teal-text.text-darken-4{color:#004d40 !important}\r\n.teal.accent-1{background-color:#a7ffeb !important}\r\n.teal-text.text-accent-1{color:#a7ffeb !important}\r\n.teal.accent-2{background-color:#64ffda !important}\r\n.teal-text.text-accent-2{color:#64ffda !important}\r\n.teal.accent-3{background-color:#1de9b6 !important}\r\n.teal-text.text-accent-3{color:#1de9b6 !important}\r\n.teal.accent-4{background-color:#00bfa5 !important}\r\n.teal-text.text-accent-4{color:#00bfa5 !important}\r\n.green{background-color:#4CAF50 !important}\r\n.green-text{color:#4CAF50 !important}\r\n.green.lighten-5{background-color:#E8F5E9 !important}\r\n.green-text.text-lighten-5{color:#E8F5E9 !important}\r\n.green.lighten-4{background-color:#C8E6C9 !important}\r\n.green-text.text-lighten-4{color:#C8E6C9 !important}\r\n.green.lighten-3{background-color:#A5D6A7 !important}\r\n.green-text.text-lighten-3{color:#A5D6A7 !important}\r\n.green.lighten-2{background-color:#81C784 !important}\r\n.green-text.text-lighten-2{color:#81C784 !important}\r\n.green.lighten-1{background-color:#66BB6A !important}\r\n.green-text.text-lighten-1{color:#66BB6A !important}\r\n.green.darken-1{background-color:#43A047 !important}\r\n.green-text.text-darken-1{color:#43A047 !important}\r\n.green.darken-2{background-color:#388E3C !important}\r\n.green-text.text-darken-2{color:#388E3C !important}\r\n.green.darken-3{background-color:#2E7D32 !important}\r\n.green-text.text-darken-3{color:#2E7D32 !important}\r\n.green.darken-4{background-color:#1B5E20 !important}\r\n.green-text.text-darken-4{color:#1B5E20 !important}\r\n.green.accent-1{background-color:#B9F6CA !important}\r\n.green-text.text-accent-1{color:#B9F6CA !important}\r\n.green.accent-2{background-color:#69F0AE !important}\r\n.green-text.text-accent-2{color:#69F0AE !important}\r\n.green.accent-3{background-color:#00E676 !important}\r\n.green-text.text-accent-3{color:#00E676 !important}\r\n.green.accent-4{background-color:#00C853 !important}\r\n.green-text.text-accent-4{color:#00C853 !important}\r\n.light-green{background-color:#8bc34a !important}\r\n.light-green-text{color:#8bc34a !important}\r\n.light-green.lighten-5{background-color:#f1f8e9 !important}\r\n.light-green-text.text-lighten-5{color:#f1f8e9 !important}\r\n.light-green.lighten-4{background-color:#dcedc8 !important}\r\n.light-green-text.text-lighten-4{color:#dcedc8 !important}\r\n.light-green.lighten-3{background-color:#c5e1a5 !important}\r\n.light-green-text.text-lighten-3{color:#c5e1a5 !important}\r\n.light-green.lighten-2{background-color:#aed581 !important}\r\n.light-green-text.text-lighten-2{color:#aed581 !important}\r\n.light-green.lighten-1{background-color:#9ccc65 !important}\r\n.light-green-text.text-lighten-1{color:#9ccc65 !important}\r\n.light-green.darken-1{background-color:#7cb342 !important}\r\n.light-green-text.text-darken-1{color:#7cb342 !important}\r\n.light-green.darken-2{background-color:#689f38 !important}\r\n.light-green-text.text-darken-2{color:#689f38 !important}\r\n.light-green.darken-3{background-color:#558b2f !important}\r\n.light-green-text.text-darken-3{color:#558b2f !important}\r\n.light-green.darken-4{background-color:#33691e !important}\r\n.light-green-text.text-darken-4{color:#33691e !important}\r\n.light-green.accent-1{background-color:#ccff90 !important}\r\n.light-green-text.text-accent-1{color:#ccff90 !important}\r\n.light-green.accent-2{background-color:#b2ff59 !important}\r\n.light-green-text.text-accent-2{color:#b2ff59 !important}\r\n.light-green.accent-3{background-color:#76ff03 !important}\r\n.light-green-text.text-accent-3{color:#76ff03 !important}\r\n.light-green.accent-4{background-color:#64dd17 !important}\r\n.light-green-text.text-accent-4{color:#64dd17 !important}\r\n.lime{background-color:#cddc39 !important}\r\n.lime-text{color:#cddc39 !important}\r\n.lime.lighten-5{background-color:#f9fbe7 !important}\r\n.lime-text.text-lighten-5{color:#f9fbe7 !important}\r\n.lime.lighten-4{background-color:#f0f4c3 !important}\r\n.lime-text.text-lighten-4{color:#f0f4c3 !important}\r\n.lime.lighten-3{background-color:#e6ee9c !important}\r\n.lime-text.text-lighten-3{color:#e6ee9c !important}\r\n.lime.lighten-2{background-color:#dce775 !important}\r\n.lime-text.text-lighten-2{color:#dce775 !important}\r\n.lime.lighten-1{background-color:#d4e157 !important}\r\n.lime-text.text-lighten-1{color:#d4e157 !important}\r\n.lime.darken-1{background-color:#c0ca33 !important}\r\n.lime-text.text-darken-1{color:#c0ca33 !important}\r\n.lime.darken-2{background-color:#afb42b !important}\r\n.lime-text.text-darken-2{color:#afb42b !important}\r\n.lime.darken-3{background-color:#9e9d24 !important}\r\n.lime-text.text-darken-3{color:#9e9d24 !important}\r\n.lime.darken-4{background-color:#827717 !important}\r\n.lime-text.text-darken-4{color:#827717 !important}\r\n.lime.accent-1{background-color:#f4ff81 !important}\r\n.lime-text.text-accent-1{color:#f4ff81 !important}\r\n.lime.accent-2{background-color:#eeff41 !important}\r\n.lime-text.text-accent-2{color:#eeff41 !important}\r\n.lime.accent-3{background-color:#c6ff00 !important}\r\n.lime-text.text-accent-3{color:#c6ff00 !important}\r\n.lime.accent-4{background-color:#aeea00 !important}\r\n.lime-text.text-accent-4{color:#aeea00 !important}\r\n.yellow{background-color:#ffeb3b !important}\r\n.yellow-text{color:#ffeb3b !important}\r\n.yellow.lighten-5{background-color:#fffde7 !important}\r\n.yellow-text.text-lighten-5{color:#fffde7 !important}\r\n.yellow.lighten-4{background-color:#fff9c4 !important}\r\n.yellow-text.text-lighten-4{color:#fff9c4 !important}\r\n.yellow.lighten-3{background-color:#fff59d !important}\r\n.yellow-text.text-lighten-3{color:#fff59d !important}\r\n.yellow.lighten-2{background-color:#fff176 !important}\r\n.yellow-text.text-lighten-2{color:#fff176 !important}\r\n.yellow.lighten-1{background-color:#ffee58 !important}\r\n.yellow-text.text-lighten-1{color:#ffee58 !important}\r\n.yellow.darken-1{background-color:#fdd835 !important}\r\n.yellow-text.text-darken-1{color:#fdd835 !important}\r\n.yellow.darken-2{background-color:#fbc02d !important}\r\n.yellow-text.text-darken-2{color:#fbc02d !important}\r\n.yellow.darken-3{background-color:#f9a825 !important}\r\n.yellow-text.text-darken-3{color:#f9a825 !important}\r\n.yellow.darken-4{background-color:#f57f17 !important}\r\n.yellow-text.text-darken-4{color:#f57f17 !important}\r\n.yellow.accent-1{background-color:#ffff8d !important}\r\n.yellow-text.text-accent-1{color:#ffff8d !important}\r\n.yellow.accent-2{background-color:#ff0 !important}\r\n.yellow-text.text-accent-2{color:#ff0 !important}\r\n.yellow.accent-3{background-color:#ffea00 !important}\r\n.yellow-text.text-accent-3{color:#ffea00 !important}\r\n.yellow.accent-4{background-color:#ffd600 !important}\r\n.yellow-text.text-accent-4{color:#ffd600 !important}\r\n.amber{background-color:#ffc107 !important}\r\n.amber-text{color:#ffc107 !important}\r\n.amber.lighten-5{background-color:#fff8e1 !important}\r\n.amber-text.text-lighten-5{color:#fff8e1 !important}\r\n.amber.lighten-4{background-color:#ffecb3 !important}\r\n.amber-text.text-lighten-4{color:#ffecb3 !important}\r\n.amber.lighten-3{background-color:#ffe082 !important}\r\n.amber-text.text-lighten-3{color:#ffe082 !important}\r\n.amber.lighten-2{background-color:#ffd54f !important}\r\n.amber-text.text-lighten-2{color:#ffd54f !important}\r\n.amber.lighten-1{background-color:#ffca28 !important}\r\n.amber-text.text-lighten-1{color:#ffca28 !important}\r\n.amber.darken-1{background-color:#ffb300 !important}\r\n.amber-text.text-darken-1{color:#ffb300 !important}\r\n.amber.darken-2{background-color:#ffa000 !important}\r\n.amber-text.text-darken-2{color:#ffa000 !important}\r\n.amber.darken-3{background-color:#ff8f00 !important}\r\n.amber-text.text-darken-3{color:#ff8f00 !important}\r\n.amber.darken-4{background-color:#ff6f00 !important}\r\n.amber-text.text-darken-4{color:#ff6f00 !important}\r\n.amber.accent-1{background-color:#ffe57f !important}\r\n.amber-text.text-accent-1{color:#ffe57f !important}\r\n.amber.accent-2{background-color:#ffd740 !important}\r\n.amber-text.text-accent-2{color:#ffd740 !important}\r\n.amber.accent-3{background-color:#ffc400 !important}\r\n.amber-text.text-accent-3{color:#ffc400 !important}\r\n.amber.accent-4{background-color:#ffab00 !important}\r\n.amber-text.text-accent-4{color:#ffab00 !important}\r\n.orange{background-color:#ff9800 !important}\r\n.orange-text{color:#ff9800 !important}\r\n.orange.lighten-5{background-color:#fff3e0 !important}\r\n.orange-text.text-lighten-5{color:#fff3e0 !important}\r\n.orange.lighten-4{background-color:#ffe0b2 !important}\r\n.orange-text.text-lighten-4{color:#ffe0b2 !important}\r\n.orange.lighten-3{background-color:#ffcc80 !important}\r\n.orange-text.text-lighten-3{color:#ffcc80 !important}\r\n.orange.lighten-2{background-color:#ffb74d !important}\r\n.orange-text.text-lighten-2{color:#ffb74d !important}\r\n.orange.lighten-1{background-color:#ffa726 !important}\r\n.orange-text.text-lighten-1{color:#ffa726 !important}\r\n.orange.darken-1{background-color:#fb8c00 !important}\r\n.orange-text.text-darken-1{color:#fb8c00 !important}\r\n.orange.darken-2{background-color:#f57c00 !important}\r\n.orange-text.text-darken-2{color:#f57c00 !important}\r\n.orange.darken-3{background-color:#ef6c00 !important}\r\n.orange-text.text-darken-3{color:#ef6c00 !important}\r\n.orange.darken-4{background-color:#e65100 !important}\r\n.orange-text.text-darken-4{color:#e65100 !important}\r\n.orange.accent-1{background-color:#ffd180 !important}\r\n.orange-text.text-accent-1{color:#ffd180 !important}\r\n.orange.accent-2{background-color:#ffab40 !important}\r\n.orange-text.text-accent-2{color:#ffab40 !important}\r\n.orange.accent-3{background-color:#ff9100 !important}\r\n.orange-text.text-accent-3{color:#ff9100 !important}\r\n.orange.accent-4{background-color:#ff6d00 !important}\r\n.orange-text.text-accent-4{color:#ff6d00 !important}\r\n.deep-orange{background-color:#ff5722 !important}\r\n.deep-orange-text{color:#ff5722 !important}\r\n.deep-orange.lighten-5{background-color:#fbe9e7 !important}\r\n.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}\r\n.deep-orange.lighten-4{background-color:#ffccbc !important}\r\n.deep-orange-text.text-lighten-4{color:#ffccbc !important}\r\n.deep-orange.lighten-3{background-color:#ffab91 !important}\r\n.deep-orange-text.text-lighten-3{color:#ffab91 !important}\r\n.deep-orange.lighten-2{background-color:#ff8a65 !important}\r\n.deep-orange-text.text-lighten-2{color:#ff8a65 !important}\r\n.deep-orange.lighten-1{background-color:#ff7043 !important}\r\n.deep-orange-text.text-lighten-1{color:#ff7043 !important}\r\n.deep-orange.darken-1{background-color:#f4511e !important}\r\n.deep-orange-text.text-darken-1{color:#f4511e !important}\r\n.deep-orange.darken-2{background-color:#e64a19 !important}\r\n.deep-orange-text.text-darken-2{color:#e64a19 !important}\r\n.deep-orange.darken-3{background-color:#d84315 !important}\r\n.deep-orange-text.text-darken-3{color:#d84315 !important}\r\n.deep-orange.darken-4{background-color:#bf360c !important}\r\n.deep-orange-text.text-darken-4{color:#bf360c !important}\r\n.deep-orange.accent-1{background-color:#ff9e80 !important}\r\n.deep-orange-text.text-accent-1{color:#ff9e80 !important}\r\n.deep-orange.accent-2{background-color:#ff6e40 !important}\r\n.deep-orange-text.text-accent-2{color:#ff6e40 !important}\r\n.deep-orange.accent-3{background-color:#ff3d00 !important}\r\n.deep-orange-text.text-accent-3{color:#ff3d00 !important}\r\n.deep-orange.accent-4{background-color:#dd2c00 !important}\r\n.deep-orange-text.text-accent-4{color:#dd2c00 !important}\r\n.brown{background-color:#795548 !important}\r\n.brown-text{color:#795548 !important}\r\n.brown.lighten-5{background-color:#efebe9 !important}\r\n.brown-text.text-lighten-5{color:#efebe9 !important}\r\n.brown.lighten-4{background-color:#d7ccc8 !important}\r\n.brown-text.text-lighten-4{color:#d7ccc8 !important}\r\n.brown.lighten-3{background-color:#bcaaa4 !important}\r\n.brown-text.text-lighten-3{color:#bcaaa4 !important}\r\n.brown.lighten-2{background-color:#a1887f !important}\r\n.brown-text.text-lighten-2{color:#a1887f !important}\r\n.brown.lighten-1{background-color:#8d6e63 !important}\r\n.brown-text.text-lighten-1{color:#8d6e63 !important}\r\n.brown.darken-1{background-color:#6d4c41 !important}\r\n.brown-text.text-darken-1{color:#6d4c41 !important}\r\n.brown.darken-2{background-color:#5d4037 !important}\r\n.brown-text.text-darken-2{color:#5d4037 !important}\r\n.brown.darken-3{background-color:#4e342e !important}\r\n.brown-text.text-darken-3{color:#4e342e !important}\r\n.brown.darken-4{background-color:#3e2723 !important}\r\n.brown-text.text-darken-4{color:#3e2723 !important}\r\n.blue-grey{background-color:#607d8b !important}\r\n.blue-grey-text{color:#607d8b !important}\r\n.blue-grey.lighten-5{background-color:#eceff1 !important}\r\n.blue-grey-text.text-lighten-5{color:#eceff1 !important}\r\n.blue-grey.lighten-4{background-color:#cfd8dc !important}\r\n.blue-grey-text.text-lighten-4{color:#cfd8dc !important}\r\n.blue-grey.lighten-3{background-color:#b0bec5 !important}\r\n.blue-grey-text.text-lighten-3{color:#b0bec5 !important}\r\n.blue-grey.lighten-2{background-color:#90a4ae !important}\r\n.blue-grey-text.text-lighten-2{color:#90a4ae !important}\r\n.blue-grey.lighten-1{background-color:#78909c !important}\r\n.blue-grey-text.text-lighten-1{color:#78909c !important}\r\n.blue-grey.darken-1{background-color:#546e7a !important}\r\n.blue-grey-text.text-darken-1{color:#546e7a !important}\r\n.blue-grey.darken-2{background-color:#455a64 !important}\r\n.blue-grey-text.text-darken-2{color:#455a64 !important}\r\n.blue-grey.darken-3{background-color:#37474f !important}\r\n.blue-grey-text.text-darken-3{color:#37474f !important}\r\n.blue-grey.darken-4{background-color:#263238 !important}\r\n.blue-grey-text.text-darken-4{color:#263238 !important}\r\n.grey{background-color:#9e9e9e !important}\r\n.grey-text{color:#9e9e9e !important}\r\n.grey.lighten-5{background-color:#fafafa !important}\r\n.grey-text.text-lighten-5{color:#fafafa !important}\r\n.grey.lighten-4{background-color:#f5f5f5 !important}\r\n.grey-text.text-lighten-4{color:#f5f5f5 !important}\r\n.grey.lighten-3{background-color:#eee !important}\r\n.grey-text.text-lighten-3{color:#eee !important}\r\n.grey.lighten-2{background-color:#e0e0e0 !important}\r\n.grey-text.text-lighten-2{color:#e0e0e0 !important}\r\n.grey.lighten-1{background-color:#bdbdbd !important}\r\n.grey-text.text-lighten-1{color:#bdbdbd !important}\r\n.grey.darken-1{background-color:#757575 !important}\r\n.grey-text.text-darken-1{color:#757575 !important}\r\n.grey.darken-2{background-color:#616161 !important}\r\n.grey-text.text-darken-2{color:#616161 !important}\r\n.grey.darken-3{background-color:#424242 !important}\r\n.grey-text.text-darken-3{color:#424242 !important}\r\n.grey.darken-4{background-color:#212121 !important}\r\n.grey-text.text-darken-4{color:#212121 !important}\r\n.black{background-color:#000 !important}\r\n.black-text{color:#000 !important}\r\n.white{background-color:#fff !important}\r\n.white-text{color:#fff !important}\r\n.transparent{background-color:rgba(0,0,0,0) !important}\r\n.transparent-text{color:rgba(0,0,0,0) !important}\r\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\r\nhtml{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\r\nbody{margin:0}\r\narticle,aside,footer,header,nav,section{display:block}\r\nh1{font-size:2em;margin:0.67em 0}\r\nfigcaption,figure,main{display:block}\r\nfigure{margin:1em 40px}\r\nhr{box-sizing:content-box;height:0;overflow:visible}\r\npre{font-family:monospace, monospace;font-size:1em}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\r\nb,strong{font-weight:inherit}\r\nb,strong{font-weight:bolder}\r\ncode,kbd,samp{font-family:monospace, monospace;font-size:1em}\r\ndfn{font-style:italic}\r\nmark{background-color:#ff0;color:#000}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}\r\nsup{top:-0.5em}\r\naudio,video{display:inline-block}\r\naudio:not([controls]){display:none;height:0}\r\nimg{border-style:none}\r\nsvg:not(:root){overflow:hidden}\r\nbutton,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}\r\nbutton,input{overflow:visible}\r\nbutton,select{text-transform:none}\r\nbutton,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{padding:0.35em 0.75em 0.625em}\r\nlegend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\r\nprogress{display:inline-block;vertical-align:baseline}\r\ntextarea{overflow:auto}\r\n[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}\r\n[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}\r\n[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\ndetails,menu{display:block}\r\nsummary{display:list-item}\r\ncanvas{display:inline-block}\r\ntemplate{display:none}\r\n[hidden]{display:none}\r\nhtml{box-sizing:border-box}\r\n*,*:before,*:after{box-sizing:inherit}\r\nbutton,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif}\r\nul:not(.browser-default){padding-left:0;list-style-type:none}\r\nul:not(.browser-default)>li{list-style-type:none}\r\na{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}\r\n.valign-wrapper{display:flex;align-items:center}\r\n.clearfix{clear:both}\r\n.z-depth-0{box-shadow:none !important}\r\n.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-small,.btn-floating,.dropdown-content,.collapsible,.sidenav{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}\r\n.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-small:hover,.btn-floating:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}\r\n.z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}\r\n.z-depth-3{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}\r\n.z-depth-4{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)}\r\n.z-depth-5,.modal{box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}\r\n.hoverable{transition:box-shadow .25s}\r\n.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.divider{height:1px;overflow:hidden;background-color:#e0e0e0}\r\nblockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}\r\ni{line-height:inherit}\r\ni.left{float:left;margin-right:15px}\r\ni.right{float:right;margin-left:15px}\r\ni.tiny{font-size:1rem}\r\ni.small{font-size:2rem}\r\ni.medium{font-size:4rem}\r\ni.large{font-size:6rem}\r\nimg.responsive-img,video.responsive-video{max-width:100%;height:auto}\r\n.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}\r\n.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}\r\n.pagination li.active a{color:#fff}\r\n.pagination li.active{background-color:#ee6e73}\r\n.pagination li.disabled a{cursor:default;color:#999}\r\n.pagination li i{font-size:2rem}\r\n.pagination li.pages ul li{display:inline-block;float:none}\r\n@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}\r\n.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}\r\n.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}\r\n.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}\r\n.breadcrumb:first-child:before{display:none}\r\n.breadcrumb:last-child{color:#fff}\r\n.parallax-container{position:relative;overflow:hidden;height:500px}\r\n.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}\r\n.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;transform:translate3d(0, 0, 0);transform:translateX(-50%)}\r\n.pin-top,.pin-bottom{position:relative}\r\n.pinned{position:fixed !important}\r\nul.staggered-list li{opacity:0}\r\n.fade-in{opacity:0;transform-origin:0 50%}\r\n@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}\r\n@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}\r\n@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}\r\n@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}\r\n@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}\r\n@media only screen and (min-width: 1201px){.hide-on-extra-large-only{display:none !important}}\r\n@media only screen and (min-width: 1201px){.show-on-extra-large{display:block !important}}\r\n@media only screen and (min-width: 993px){.show-on-large{display:block !important}}\r\n@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}\r\n@media only screen and (max-width: 600px){.show-on-small{display:block !important}}\r\n@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}\r\n@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}\r\n@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}\r\n.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}\r\n.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:flex;align-items:center;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}\r\ntable,th,td{border:none}\r\ntable{width:100%;display:table;border-collapse:collapse;border-spacing:0}\r\ntable.striped tr{border-bottom:none}\r\ntable.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,0.5)}\r\ntable.striped>tbody>tr>td{border-radius:0}\r\ntable.highlight>tbody>tr{transition:background-color .25s ease}\r\ntable.highlight>tbody>tr:hover{background-color:rgba(242,242,242,0.5)}\r\ntable.centered thead tr th,table.centered tbody tr td{text-align:center}\r\ntr{border-bottom:1px solid rgba(0,0,0,0.12)}\r\ntd,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}\r\n@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\00a0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,0.12)}}\r\n.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}\r\n.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}\r\n.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}\r\n.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}\r\n.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}\r\n.collection .collection-item.avatar .title{font-size:16px}\r\n.collection .collection-item.avatar p{margin:0}\r\n.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}\r\n.collection .collection-item:last-child{border-bottom:none}\r\n.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}\r\n.collection .collection-item.active .secondary-content{color:#fff}\r\n.collection a.collection-item{display:block;transition:.25s;color:#26a69a}\r\n.collection a.collection-item:not(.active):hover{background-color:#ddd}\r\n.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}\r\n.collection.with-header .collection-item{padding-left:30px}\r\n.collection.with-header .collection-item.avatar{padding-left:72px}\r\n.secondary-content{float:right;color:#26a69a}\r\n.collapsible .collection{margin:0;border:none}\r\n.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}\r\n.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}\r\n.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}\r\n.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;transition:width .3s linear}\r\n.progress .indeterminate{background-color:#26a69a}\r\n.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}\r\n.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}\r\n@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}\r\n@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}\r\n@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}\r\n@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}\r\n.hide{display:none !important}\r\n.left-align{text-align:left}\r\n.right-align{text-align:right}\r\n.center,.center-align{text-align:center}\r\n.left{float:left !important}\r\n.right{float:right !important}\r\n.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.circle{border-radius:50%}\r\n.center-block{display:block;margin-left:auto;margin-right:auto}\r\n.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n.no-padding{padding:0 !important}\r\nspan.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;box-sizing:border-box}\r\nspan.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}\r\nspan.badge.new:after{content:\" new\"}\r\nspan.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}\r\nnav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}\r\n.collection-item span.badge{margin-top:calc(.75rem - 11px)}\r\n.collapsible span.badge{margin-left:auto}\r\n.sidenav span.badge{margin-top:calc(24px - 11px)}\r\ntable span.badge{display:inline-block;float:none;margin-left:auto}\r\n.material-icons{text-rendering:optimizeLegibility;font-feature-settings:'liga'}\r\n.container{margin:0 auto;max-width:1280px;width:90%}\r\n@media only screen and (min-width: 601px){.container{width:85%}}\r\n@media only screen and (min-width: 993px){.container{width:70%}}\r\n.col .row{margin-left:-.75rem;margin-right:-.75rem}\r\n.section{padding-top:1rem;padding-bottom:1rem}\r\n.section.no-pad{padding:0}\r\n.section.no-pad-bot{padding-bottom:0}\r\n.section.no-pad-top{padding-top:0}\r\n.row{margin-left:auto;margin-right:auto;margin-bottom:20px}\r\n.row:after{content:\"\";display:table;clear:both}\r\n.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}\r\n.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}\r\n.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}\r\n.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}\r\n.row .col.offset-s1{margin-left:8.3333333333%}\r\n.row .col.pull-s1{right:8.3333333333%}\r\n.row .col.push-s1{left:8.3333333333%}\r\n.row .col.offset-s2{margin-left:16.6666666667%}\r\n.row .col.pull-s2{right:16.6666666667%}\r\n.row .col.push-s2{left:16.6666666667%}\r\n.row .col.offset-s3{margin-left:25%}\r\n.row .col.pull-s3{right:25%}\r\n.row .col.push-s3{left:25%}\r\n.row .col.offset-s4{margin-left:33.3333333333%}\r\n.row .col.pull-s4{right:33.3333333333%}\r\n.row .col.push-s4{left:33.3333333333%}\r\n.row .col.offset-s5{margin-left:41.6666666667%}\r\n.row .col.pull-s5{right:41.6666666667%}\r\n.row .col.push-s5{left:41.6666666667%}\r\n.row .col.offset-s6{margin-left:50%}\r\n.row .col.pull-s6{right:50%}\r\n.row .col.push-s6{left:50%}\r\n.row .col.offset-s7{margin-left:58.3333333333%}\r\n.row .col.pull-s7{right:58.3333333333%}\r\n.row .col.push-s7{left:58.3333333333%}\r\n.row .col.offset-s8{margin-left:66.6666666667%}\r\n.row .col.pull-s8{right:66.6666666667%}\r\n.row .col.push-s8{left:66.6666666667%}\r\n.row .col.offset-s9{margin-left:75%}\r\n.row .col.pull-s9{right:75%}\r\n.row .col.push-s9{left:75%}\r\n.row .col.offset-s10{margin-left:83.3333333333%}\r\n.row .col.pull-s10{right:83.3333333333%}\r\n.row .col.push-s10{left:83.3333333333%}\r\n.row .col.offset-s11{margin-left:91.6666666667%}\r\n.row .col.pull-s11{right:91.6666666667%}\r\n.row .col.push-s11{left:91.6666666667%}\r\n.row .col.offset-s12{margin-left:100%}\r\n.row .col.pull-s12{right:100%}\r\n.row .col.push-s12{left:100%}\r\n@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}\r\n@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}\r\n@media only screen and (min-width: 1201px){.row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}\r\nnav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}\r\nnav.nav-extended{height:auto}\r\nnav.nav-extended .nav-wrapper{min-height:56px;height:auto}\r\nnav.nav-extended .nav-content{position:relative;line-height:normal}\r\nnav a{color:#fff}\r\nnav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}\r\nnav .nav-wrapper{position:relative;height:100%}\r\n@media only screen and (min-width: 993px){nav a.sidenav-trigger{display:none}}\r\nnav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}\r\nnav .sidenav-trigger i{height:56px;line-height:56px}\r\nnav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}\r\nnav .brand-logo.center{left:50%;transform:translateX(-50%)}\r\n@media only screen and (max-width: 992px){nav .brand-logo{left:50%;transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}\r\nnav .brand-logo.right{right:0.5rem;padding:0}\r\nnav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}\r\nnav .nav-title{display:inline-block;font-size:32px;padding:28px 0}\r\nnav ul{margin:0}\r\nnav ul li{transition:background-color .3s;float:left;padding:0}\r\nnav ul li.active{background-color:rgba(0,0,0,0.1)}\r\nnav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}\r\nnav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}\r\nnav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}\r\nnav ul a:hover{background-color:rgba(0,0,0,0.1)}\r\nnav ul.left{float:left}\r\nnav form{height:100%}\r\nnav .input-field{margin:0;height:100%}\r\nnav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}\r\nnav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}\r\nnav .input-field label{top:0;left:0}\r\nnav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}\r\nnav .input-field label.active i{color:#fff}\r\n.navbar-fixed{position:relative;height:56px;z-index:997}\r\n.navbar-fixed nav{position:fixed}\r\n@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}\r\na{text-decoration:none}\r\nhtml{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}\r\n@media only screen and (min-width: 0){html{font-size:14px}}\r\n@media only screen and (min-width: 992px){html{font-size:14.5px}}\r\n@media only screen and (min-width: 1200px){html{font-size:15px}}\r\nh1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}\r\nh1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}\r\nh1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}\r\nh2{font-size:3.56rem;line-height:110%;margin:2.3733333333rem 0 1.424rem 0}\r\nh3{font-size:2.92rem;line-height:110%;margin:1.9466666667rem 0 1.168rem 0}\r\nh4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}\r\nh5{font-size:1.64rem;line-height:110%;margin:1.0933333333rem 0 .656rem 0}\r\nh6{font-size:1.15rem;line-height:110%;margin:.7666666667rem 0 .46rem 0}\r\nem{font-style:italic}\r\nstrong{font-weight:500}\r\nsmall{font-size:75%}\r\n.light{font-weight:300}\r\n.thin{font-weight:200}\r\n@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}\r\n@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}\r\n@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}\r\n@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}\r\n@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}\r\n@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}\r\n@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}\r\n@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}\r\n@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}\r\n@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}\r\n@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}\r\n@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}\r\n@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}\r\n@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}\r\n@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}\r\n@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}\r\n@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}\r\n@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}\r\n@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}\r\n@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}\r\n@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}\r\n@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}\r\n.scale-transition{transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}\r\n.scale-transition.scale-out{transform:scale(0);transition:transform .2s !important}\r\n.scale-transition.scale-in{transform:scale(1)}\r\n.card-panel{transition:box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}\r\n.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}\r\n.card .card-title{font-size:24px;font-weight:300}\r\n.card .card-title.activator{cursor:pointer}\r\n.card.small,.card.medium,.card.large{position:relative}\r\n.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}\r\n.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}\r\n.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}\r\n.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}\r\n.card.small{height:300px}\r\n.card.medium{height:400px}\r\n.card.large{height:500px}\r\n.card.horizontal{display:flex}\r\n.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}\r\n.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}\r\n.card.horizontal .card-image{max-width:50%}\r\n.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}\r\n.card.horizontal .card-stacked{display:flex;flex-direction:column;flex:1;position:relative}\r\n.card.horizontal .card-stacked .card-content{flex-grow:1}\r\n.card.sticky-action .card-action{z-index:2}\r\n.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}\r\n.card .card-image{position:relative}\r\n.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}\r\n.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}\r\n.card .card-content{padding:24px;border-radius:0 0 2px 2px}\r\n.card .card-content p{margin:0}\r\n.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}\r\n.card .card-content .card-title i{line-height:32px}\r\n.card .card-action{background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);position:relative;padding:16px 24px}\r\n.card .card-action:last-child{border-radius:0 0 2px 2px}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;transition:color .3s ease;text-transform:uppercase}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}\r\n.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}\r\n.card .card-reveal .card-title{cursor:pointer;display:block}\r\n#toast-container{display:block;position:fixed;z-index:10000}\r\n@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}\r\n@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}\r\n@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}\r\n.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between;cursor:default}\r\n.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}\r\n.toast.rounded{border-radius:24px}\r\n@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}\r\n.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}\r\n.tabs.tabs-transparent{background-color:transparent}\r\n.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}\r\n.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}\r\n.tabs.tabs-transparent .indicator{background-color:#fff}\r\n.tabs.tabs-fixed-width{display:flex}\r\n.tabs.tabs-fixed-width .tab{flex-grow:1}\r\n.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}\r\n.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease, background-color .28s ease}\r\n.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,0.2);outline:none}\r\n.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}\r\n.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.4);cursor:default}\r\n.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}\r\n@media only screen and (max-width: 992px){.tabs{display:flex}.tabs .tab{flex-grow:1}.tabs .tab a{padding:0 12px}}\r\n.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}\r\n.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;transform-origin:50% 0%;visibility:hidden}\r\n.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}\r\n.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-small:disabled,.btn-flat:disabled,.btn[disabled],.btn-large[disabled],.btn-small[disabled],.btn-floating[disabled],.btn-large[disabled],.btn-small[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}\r\n.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}\r\n.btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat{font-size:14px;outline:0}\r\n.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}\r\n.btn:focus,.btn-large:focus,.btn-small:focus,.btn-floating:focus{background-color:#1d7d74}\r\n.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}\r\n.btn:hover,.btn-large:hover,.btn-small:hover{background-color:#2bbbad}\r\n.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}\r\n.btn-floating:hover{background-color:#26a69a}\r\n.btn-floating:before{border-radius:0}\r\n.btn-floating.btn-large{width:56px;height:56px;padding:0}\r\n.btn-floating.btn-large.halfway-fab{bottom:-28px}\r\n.btn-floating.btn-large i{line-height:56px}\r\n.btn-floating.btn-small{width:32.4px;height:32.4px}\r\n.btn-floating.btn-small.halfway-fab{bottom:-16.2px}\r\n.btn-floating.btn-small i{line-height:32.4px}\r\n.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}\r\n.btn-floating.halfway-fab.left{right:auto;left:24px}\r\n.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}\r\nbutton.btn-floating{border:none}\r\n.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}\r\n.fixed-action-btn.active ul{visibility:visible}\r\n.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}\r\n.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:auto;width:500px}\r\n.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}\r\n.fixed-action-btn.direction-right{padding:0 15px 0 0}\r\n.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}\r\n.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}\r\n.fixed-action-btn.direction-bottom{padding:0 0 15px 0}\r\n.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:flex;flex-direction:column-reverse}\r\n.fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}\r\n.fixed-action-btn.toolbar{padding:0;height:56px}\r\n.fixed-action-btn.toolbar.active>a i{opacity:0}\r\n.fixed-action-btn.toolbar ul{display:flex;top:0;bottom:0;z-index:1}\r\n.fixed-action-btn.toolbar ul li{flex:1;display:inline-block;margin:0;height:100%;transition:none}\r\n.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}\r\n.fixed-action-btn.toolbar ul li a i{line-height:inherit}\r\n.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}\r\n.fixed-action-btn ul li{margin-bottom:15px}\r\n.fixed-action-btn ul a.btn-floating{opacity:0}\r\n.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;transform:scale(0)}\r\n.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}\r\n.btn-flat:focus,.btn-flat:hover{box-shadow:none}\r\n.btn-flat:focus{background-color:rgba(0,0,0,0.1)}\r\n.btn-flat.disabled,.btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b2b2 !important;cursor:default}\r\n.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}\r\n.btn-large i{font-size:1.6rem}\r\n.btn-small{height:32.4px;line-height:32.4px;font-size:13px}\r\n.btn-small i{font-size:1.2rem}\r\n.btn-block{display:block}\r\n.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;transform-origin:0 0}\r\n.dropdown-content:focus{outline:0}\r\n.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}\r\n.dropdown-content li:hover,.dropdown-content li.active{background-color:#eee}\r\n.dropdown-content li:focus{outline:none}\r\n.dropdown-content li.divider{min-height:0;height:1px}\r\n.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}\r\n.dropdown-content li>span>label{top:1px;left:0;height:18px}\r\n.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}\r\nbody.keyboard-focused .dropdown-content li:focus{background-color:#dadada}\r\n.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px;transform:none}\r\n.dropdown-trigger{cursor:pointer}\r\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\r\n.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;transition:.3s ease-out}\r\n.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:transform, opacity;transform:scale(0);pointer-events:none}\r\n.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}\r\n.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}\r\n.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}\r\n.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}\r\n.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}\r\n.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}\r\n.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}\r\n.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}\r\n.waves-effect img{position:relative;z-index:-1}\r\n.waves-notransition{transition:none !important}\r\n.waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}\r\n.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}\r\n.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}\r\n.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}\r\n.waves-block{display:block}\r\n.waves-effect .waves-ripple{z-index:-1}\r\n.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}\r\n.modal:focus{outline:none}\r\n@media only screen and (max-width: 992px){.modal{width:80%}}\r\n.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}\r\n.modal .modal-content{padding:24px}\r\n.modal .modal-close{cursor:pointer}\r\n.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}\r\n.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{margin:6px 0}\r\n.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}\r\n.modal.modal-fixed-footer{padding:0;height:70%}\r\n.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}\r\n.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}\r\n.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}\r\n.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}\r\n.collapsible-header{display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}\r\n.collapsible-header:focus{outline:0}\r\n.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}\r\n.keyboard-focused .collapsible-header:focus{background-color:#eee}\r\n.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box;padding:2rem}\r\n.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;box-shadow:none}\r\n.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}\r\n.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}\r\n.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}\r\n.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}\r\n.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}\r\n.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}\r\n.collapsible.popout{border:none;box-shadow:none}\r\n.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}\r\n.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}\r\n.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}\r\n.chip:focus{outline:none;background-color:#26a69a;color:#fff}\r\n.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}\r\n.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}\r\n.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin:0 0 8px 0;min-height:45px;outline:none;transition:all .3s}\r\n.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}\r\n.chips:hover{cursor:text}\r\n.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}\r\n.chips .input:focus{border:0 !important;box-shadow:none !important}\r\n.chips .autocomplete-content{margin-top:0;margin-bottom:0}\r\n.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.chips:empty ~ label{font-size:0.8rem;transform:translateY(-140%)}\r\n.materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s;-webkit-backface-visibility:hidden}\r\n.materialboxed:hover:not(.active){opacity:.8}\r\n.materialboxed.active{cursor:zoom-out}\r\n#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}\r\n.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}\r\nselect:focus{outline:1px solid #c9f3ef}\r\nbutton:focus{outline:none;background-color:#2ab7a9}\r\nlabel{font-size:.8rem;color:#9e9e9e}\r\n::-webkit-input-placeholder{color:#d1d1d1}\r\n::-moz-placeholder{color:#d1d1d1}\r\n::-ms-input-placeholder{color:#d1d1d1}\r\n::placeholder{color:#d1d1d1}\r\ninput:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:box-shadow .3s, border .3s}\r\ninput:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly=\"readonly\"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly=\"readonly\"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly=\"readonly\"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly=\"readonly\"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly=\"readonly\"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly=\"readonly\"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly=\"readonly\"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}\r\ninput:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.42)}\r\ninput:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}\r\ninput:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}\r\ninput:not([type]):focus.valid ~ label,input[type=text]:not(.browser-default):focus.valid ~ label,input[type=password]:not(.browser-default):focus.valid ~ label,input[type=email]:not(.browser-default):focus.valid ~ label,input[type=url]:not(.browser-default):focus.valid ~ label,input[type=time]:not(.browser-default):focus.valid ~ label,input[type=date]:not(.browser-default):focus.valid ~ label,input[type=datetime]:not(.browser-default):focus.valid ~ label,input[type=datetime-local]:not(.browser-default):focus.valid ~ label,input[type=tel]:not(.browser-default):focus.valid ~ label,input[type=number]:not(.browser-default):focus.valid ~ label,input[type=search]:not(.browser-default):focus.valid ~ label,textarea.materialize-textarea:focus.valid ~ label{color:#4CAF50}\r\ninput:not([type]):focus.invalid ~ label,input[type=text]:not(.browser-default):focus.invalid ~ label,input[type=password]:not(.browser-default):focus.invalid ~ label,input[type=email]:not(.browser-default):focus.invalid ~ label,input[type=url]:not(.browser-default):focus.invalid ~ label,input[type=time]:not(.browser-default):focus.invalid ~ label,input[type=date]:not(.browser-default):focus.invalid ~ label,input[type=datetime]:not(.browser-default):focus.invalid ~ label,input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,input[type=tel]:not(.browser-default):focus.invalid ~ label,input[type=number]:not(.browser-default):focus.invalid ~ label,input[type=search]:not(.browser-default):focus.invalid ~ label,textarea.materialize-textarea:focus.invalid ~ label{color:#F44336}\r\ninput:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}\r\ninput.valid:not([type]),input.valid:not([type]):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;box-shadow:0 1px 0 0 #4CAF50}\r\ninput.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336}\r\ninput:not([type]).valid ~ .helper-text[data-success],input:not([type]):focus.valid ~ .helper-text[data-success],input:not([type]).invalid ~ .helper-text[data-error],input:not([type]):focus.invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],textarea.materialize-textarea.valid ~ .helper-text[data-success],textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],textarea.materialize-textarea.invalid ~ .helper-text[data-error],textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],.select-wrapper.valid .helper-text[data-success],.select-wrapper.invalid ~ .helper-text[data-error]{color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}\r\ninput:not([type]).valid ~ .helper-text:after,input:not([type]):focus.valid ~ .helper-text:after,input[type=text]:not(.browser-default).valid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=password]:not(.browser-default).valid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=email]:not(.browser-default).valid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=url]:not(.browser-default).valid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=time]:not(.browser-default).valid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=date]:not(.browser-default).valid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=tel]:not(.browser-default).valid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=number]:not(.browser-default).valid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=search]:not(.browser-default).valid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,textarea.materialize-textarea.valid ~ .helper-text:after,textarea.materialize-textarea:focus.valid ~ .helper-text:after,.select-wrapper.valid ~ .helper-text:after{content:attr(data-success);color:#4CAF50}\r\ninput:not([type]).invalid ~ .helper-text:after,input:not([type]):focus.invalid ~ .helper-text:after,input[type=text]:not(.browser-default).invalid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=password]:not(.browser-default).invalid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=email]:not(.browser-default).invalid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=url]:not(.browser-default).invalid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=time]:not(.browser-default).invalid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=date]:not(.browser-default).invalid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=number]:not(.browser-default).invalid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=search]:not(.browser-default).invalid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,textarea.materialize-textarea.invalid ~ .helper-text:after,textarea.materialize-textarea:focus.invalid ~ .helper-text:after,.select-wrapper.invalid ~ .helper-text:after{content:attr(data-error);color:#F44336}\r\ninput:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:\"\";position:absolute;top:100%;left:0;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}\r\n.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}\r\n.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}\r\n.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}\r\n.input-field.col label{left:.75rem}\r\n.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}\r\n.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;transition:transform .2s ease-out, color .2s ease-out;transform-origin:0% 100%;text-align:initial;transform:translateY(12px)}\r\n.input-field>label:not(.label-icon).active{transform:translateY(-14px) scale(0.8);transform-origin:0 0}\r\n.input-field>input[type]:-webkit-autofill:not(.browser-default):not([type=\"search\"])+label,.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label{transform:translateY(-14px) scale(0.8);transform-origin:0 0}\r\n.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,0.54)}\r\n.input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}\r\n.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s;top:.5rem}\r\n.input-field .prefix.active{color:#26a69a}\r\n.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .helper-text,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.input-field .prefix ~ label{margin-left:3rem}\r\n@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}\r\n@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}\r\n.input-field input[type=search]{display:block;line-height:inherit;transition:.3s background-color}\r\n.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;box-shadow:none}\r\n.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;box-shadow:none;color:#444}\r\n.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons{color:#444}\r\n.input-field input[type=search]+.label-icon{transform:none;left:1rem}\r\n.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}\r\ntextarea{width:100%;height:3rem;background-color:transparent}\r\ntextarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;box-sizing:border-box}\r\n.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}\r\n.autocomplete-content li .highlight{color:#444}\r\n.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}\r\n.character-counter{min-height:18px}\r\n[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;opacity:0;pointer-events:none}\r\n[type=\"radio\"]:not(:checked)+span,[type=\"radio\"]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n[type=\"radio\"]+span:before,[type=\"radio\"]+span:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}\r\n[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after,[type=\"radio\"]:checked+span:before,[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border-radius:50%}\r\n[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after{border:2px solid #5a5a5a}\r\n[type=\"radio\"]:not(:checked)+span:after{transform:scale(0)}\r\n[type=\"radio\"]:checked+span:before{border:2px solid transparent}\r\n[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border:2px solid #26a69a}\r\n[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:after{background-color:#26a69a}\r\n[type=\"radio\"]:checked+span:after{transform:scale(1.02)}\r\n[type=\"radio\"].with-gap:checked+span:after{transform:scale(0.5)}\r\n[type=\"radio\"].tabbed:focus+span:before{box-shadow:0 0 0 10px rgba(0,0,0,0.1)}\r\n[type=\"radio\"].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,0.42)}\r\n[type=\"radio\"].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:not(:checked)+span:before,[type=\"radio\"]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled+span{color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,0.42)}\r\n[type=\"radio\"]:disabled:checked+span:after{background-color:rgba(0,0,0,0.42);border-color:#949494}\r\n[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;opacity:0;pointer-events:none}\r\n[type=\"checkbox\"]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n[type=\"checkbox\"]+span:not(.lever):before,[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;transition:.2s}\r\n[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{border:0;transform:scale(0)}\r\n[type=\"checkbox\"]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,0.42)}\r\n[type=\"checkbox\"].tabbed:focus+span:not(.lever):after{transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}\r\n[type=\"checkbox\"]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}\r\n[type=\"checkbox\"]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}\r\n[type=\"checkbox\"]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}\r\n[type=\"checkbox\"]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}\r\n[type=\"checkbox\"].filled-in+span:not(.lever):after{border-radius:2px}\r\n[type=\"checkbox\"].filled-in+span:not(.lever):before,[type=\"checkbox\"].filled-in+span:not(.lever):after{content:'';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}\r\n[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotateZ(37deg);transform-origin:100% 100%}\r\n[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}\r\n[type=\"checkbox\"].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(37deg);transform-origin:100% 100%}\r\n[type=\"checkbox\"].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}\r\n[type=\"checkbox\"].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}\r\n[type=\"checkbox\"].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}\r\n[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}\r\n[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}\r\n.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.switch label{cursor:pointer}\r\n.switch label input[type=checkbox]{opacity:0;width:0;height:0}\r\n.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}\r\n.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}\r\n.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}\r\n.switch label .lever{content:\"\";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}\r\n.switch label .lever:before,.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease}\r\n.switch label .lever:before{background-color:rgba(38,166,154,0.15)}\r\n.switch label .lever:after{background-color:#F1F1F1;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}\r\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{transform:scale(2.4);background-color:rgba(38,166,154,0.15)}\r\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{transform:scale(2.4);background-color:rgba(0,0,0,0.08)}\r\n.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}\r\n.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}\r\nselect{display:none}\r\nselect.browser-default{display:block}\r\nselect{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}\r\n.select-label{position:absolute}\r\n.select-wrapper{position:relative}\r\n.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}\r\n.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}\r\n.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}\r\n.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,0.87)}\r\n.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}\r\nselect:disabled{color:rgba(0,0,0,0.42)}\r\n.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}\r\n.select-wrapper.disabled .caret{fill:rgba(0,0,0,0.42)}\r\n.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.select-wrapper i{color:rgba(0,0,0,0.3)}\r\n.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}\r\nbody.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,0.08)}\r\n.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.08)}\r\n.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}\r\n.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}\r\n.prefix ~ label{margin-left:3rem}\r\n.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}\r\n.select-dropdown li.optgroup{border-top:1px solid #eee}\r\n.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}\r\n.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}\r\n.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}\r\n.file-field{position:relative}\r\n.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}\r\n.file-field input.file-path{width:100%}\r\n.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}\r\n.file-field span{cursor:pointer}\r\n.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}\r\n.file-field input[type=file]::-webkit-file-upload-button{display:none}\r\n.range-field{position:relative}\r\ninput[type=range],input[type=range]+.thumb{cursor:pointer}\r\ninput[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}\r\ninput[type=range]:focus{outline:none}\r\ninput[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;transform-origin:50% 50%;transform:rotate(-45deg)}\r\ninput[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;transform:rotate(45deg)}\r\ninput[type=range]+.thumb.active{border-radius:50% 50% 50% 0}\r\ninput[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}\r\ninput[type=range]{-webkit-appearance:none}\r\ninput[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}\r\ninput[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;transform-origin:50% 50%;margin:-5px 0 0 0}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}\r\ninput[type=range]{border:1px solid white}\r\ninput[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}\r\ninput[type=range]::-moz-focus-inner{border:0}\r\ninput[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-moz-transition:box-shadow .3s;transition:box-shadow .3s;margin-top:-5px}\r\ninput[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}\r\ninput[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}\r\ninput[type=range]::-ms-fill-lower{background:#777}\r\ninput[type=range]::-ms-fill-upper{background:#ddd}\r\ninput[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-ms-transition:box-shadow .3s;transition:box-shadow .3s}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}\r\n.table-of-contents.fixed{position:fixed}\r\n.table-of-contents li{padding:2px 0}\r\n.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}\r\n.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}\r\n.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}\r\n.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-105%)}\r\n.sidenav.right-aligned{right:0;transform:translateX(105%);left:auto;transform:translateX(100%)}\r\n.sidenav .collapsible{margin:0}\r\n.sidenav li{float:none;line-height:48px}\r\n.sidenav li.active{background-color:rgba(0,0,0,0.05)}\r\n.sidenav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}\r\n.sidenav li>a:hover{background-color:rgba(0,0,0,0.05)}\r\n.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating{margin:10px 15px}\r\n.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-floating{color:#fff}\r\n.sidenav li>a.btn-flat{color:#343434}\r\n.sidenav li>a.btn:hover,.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn-large:hover{background-color:#2bbbad}\r\n.sidenav li>a.btn-floating:hover{background-color:#26a69a}\r\n.sidenav li>a>i,.sidenav li>a>[class^=\"mdi-\"],.sidenav li>a li>a>[class*=\"mdi-\"],.sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}\r\n.sidenav .divider{margin:8px 0 0 0}\r\n.sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}\r\n.sidenav .subheader:hover{background-color:transparent}\r\n.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}\r\n.sidenav .user-view>a{height:auto;padding:0}\r\n.sidenav .user-view>a:hover{background-color:transparent}\r\n.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}\r\n.sidenav .user-view .circle,.sidenav .user-view .name,.sidenav .user-view .email{display:block}\r\n.sidenav .user-view .circle{height:64px;width:64px}\r\n.sidenav .user-view .name,.sidenav .user-view .email{font-size:14px;line-height:24px}\r\n.sidenav .user-view .name{margin-top:16px;font-weight:500}\r\n.sidenav .user-view .email{padding-bottom:16px;font-weight:400}\r\n.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}\r\n.drag-target.right-aligned{right:0}\r\n.sidenav.sidenav-fixed{left:0;transform:translateX(0);position:fixed}\r\n.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}\r\n@media only screen and (max-width: 992px){.sidenav.sidenav-fixed{transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}\r\n.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}\r\n.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}\r\n.sidenav .collapsible-body{padding:0}\r\n.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;display:none}\r\n.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}\r\n.preloader-wrapper.small{width:36px;height:36px}\r\n.preloader-wrapper.big{width:64px;height:64px}\r\n.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}\r\n@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}\r\n@keyframes container-rotate{to{transform:rotate(360deg)}}\r\n.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}\r\n.spinner-blue,.spinner-blue-only{border-color:#4285f4}\r\n.spinner-red,.spinner-red-only{border-color:#db4437}\r\n.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}\r\n.spinner-green,.spinner-green-only{border-color:#0f9d58}\r\n.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}\r\n@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}\r\n@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}\r\n@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}\r\n@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}\r\n@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}\r\n@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}\r\n@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}\r\n@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}\r\n@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}\r\n.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}\r\n.gap-patch .circle{width:1000%;left:-450%}\r\n.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}\r\n.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}\r\n.circle-clipper.left .circle{left:0;border-right-color:transparent !important;transform:rotate(129deg)}\r\n.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;transform:rotate(-129deg)}\r\n.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}\r\n@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}\r\n@keyframes left-spin{from{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}\r\n@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}\r\n@keyframes right-spin{from{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}\r\n#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}\r\n@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}\r\n@keyframes fade-out{from{opacity:1}to{opacity:0}}\r\n.slider{position:relative;height:400px;width:100%}\r\n.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}\r\n.slider.fullscreen ul.slides{height:100%}\r\n.slider.fullscreen ul.indicators{z-index:2;bottom:30px}\r\n.slider .slides{background-color:#9e9e9e;margin:0;height:400px}\r\n.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}\r\n.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}\r\n.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}\r\n.slider .slides li .caption p{color:#e0e0e0}\r\n.slider .slides li.active{z-index:2}\r\n.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}\r\n.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}\r\n.slider .indicators .indicator-item.active{background-color:#4CAF50}\r\n.carousel{overflow:hidden;position:relative;width:100%;height:400px;perspective:500px;transform-style:preserve-3d;transform-origin:0% 50%}\r\n.carousel.carousel-slider{top:0;left:0}\r\n.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}\r\n.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}\r\n.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}\r\n.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}\r\n.carousel.carousel-slider .carousel-item p{font-size:15px}\r\n.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}\r\n.carousel .carousel-item>img{width:100%}\r\n.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}\r\n.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);transition:background-color .3s;border-radius:50%}\r\n.carousel .indicators .indicator-item.active{background-color:#fff}\r\n.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}\r\n.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;transition:visibility 0s .3s}\r\n.tap-target-wrapper.open{visibility:visible;transition:visibility 0s}\r\n.tap-target-wrapper.open .tap-target{transform:scale(1);opacity:.95;transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1)}\r\n.tap-target-wrapper.open .tap-target-wave::before{transform:scale(1)}\r\n.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s}\r\n.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;transform:scale(0);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1)}\r\n.tap-target-content{position:relative;display:table-cell}\r\n.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}\r\n.tap-target-wave::before,.tap-target-wave::after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}\r\n.tap-target-wave::before{transform:scale(0);transition:transform .3s}\r\n.tap-target-wave::after{visibility:hidden;transition:opacity .3s,\r transform .3s,\r visibility 0s;z-index:-1}\r\n.tap-target-origin{top:50%;left:50%;transform:translate(-50%, -50%);z-index:10002;position:absolute !important}\r\n.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}\r\n@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}\r\n.pulse{overflow:visible;position:relative}\r\n.pulse::before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;transition:opacity .3s, transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}\r\n@-webkit-keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}\r\n@keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}\r\n.datepicker-modal{max-width:325px;min-width:300px;max-height:none}\r\n.datepicker-container.modal-content{display:flex;flex-direction:column;padding:0}\r\n.datepicker-controls{display:flex;justify-content:space-between;width:280px;margin:0 auto}\r\n.datepicker-controls .selects-container{display:flex}\r\n.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}\r\n.datepicker-controls .select-wrapper input:focus{border-bottom:none}\r\n.datepicker-controls .select-wrapper .caret{display:none}\r\n.datepicker-controls .select-year input{width:50px}\r\n.datepicker-controls .select-month input{width:70px}\r\n.month-prev,.month-next{margin-top:4px;cursor:pointer;background-color:transparent;border:none}\r\n.datepicker-date-display{flex:1 auto;background-color:#26a69a;color:#fff;padding:20px 22px;font-weight:500}\r\n.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:rgba(255,255,255,0.7)}\r\n.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}\r\n.datepicker-calendar-container{flex:2.5 auto}\r\n.datepicker-table{width:280px;font-size:1rem;margin:0 auto}\r\n.datepicker-table thead{border-bottom:none}\r\n.datepicker-table th{padding:10px 5px;text-align:center}\r\n.datepicker-table tr{border:none}\r\n.datepicker-table abbr{text-decoration:none;color:#999}\r\n.datepicker-table td{border-radius:50%;padding:0}\r\n.datepicker-table td.is-today{color:#26a69a}\r\n.datepicker-table td.is-selected{background-color:#26a69a;color:#fff}\r\n.datepicker-table td.is-outside-current-month,.datepicker-table td.is-disabled{color:rgba(0,0,0,0.3);pointer-events:none}\r\n.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}\r\n.datepicker-day-button:focus{background-color:rgba(43,161,150,0.25)}\r\n.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:flex;justify-content:space-between}\r\n.datepicker-cancel,.datepicker-clear,.datepicker-today,.datepicker-done{color:#26a69a;padding:0 1rem}\r\n.datepicker-clear{color:#F44336}\r\n@media only screen and (min-width: 601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{flex-direction:row}.datepicker-date-display{flex:0 1 270px}.datepicker-controls,.datepicker-table,.datepicker-footer{width:320px}.datepicker-day-button{line-height:44px}}\r\n.timepicker-modal{max-width:325px;max-height:none}\r\n.timepicker-container.modal-content{display:flex;flex-direction:column;padding:0}\r\n.text-primary{color:#fff}\r\n.timepicker-digital-display{flex:1 auto;background-color:#26a69a;padding:10px;font-weight:300}\r\n.timepicker-text-container{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.timepicker-span-hours,.timepicker-span-minutes,.timepicker-span-am-pm div{cursor:pointer}\r\n.timepicker-span-hours{margin-right:3px}\r\n.timepicker-span-minutes{margin-left:3px}\r\n.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}\r\n.timepicker-analog-display{flex:2.5 auto}\r\n.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}\r\n.timepicker-minutes{visibility:hidden}\r\n.timepicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}\r\n.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(38,166,154,0.25)}\r\n.timepicker-dial{transition:transform 350ms, opacity 350ms}\r\n.timepicker-dial-out{opacity:0}\r\n.timepicker-dial-out.timepicker-hours{transform:scale(1.1, 1.1)}\r\n.timepicker-dial-out.timepicker-minutes{transform:scale(0.8, 0.8)}\r\n.timepicker-canvas{transition:opacity 175ms}\r\n.timepicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}\r\n.timepicker-canvas-out{opacity:0.25}\r\n.timepicker-canvas-bearing{stroke:none;fill:#26a69a}\r\n.timepicker-canvas-bg{stroke:none;fill:#26a69a}\r\n.timepicker-footer{margin:0 auto;padding:5px 1rem;display:flex;justify-content:space-between}\r\n.timepicker-clear{color:#F44336}\r\n.timepicker-close{color:#26a69a}\r\n.timepicker-clear,.timepicker-close{padding:0 20px}\r\n@media only screen and (min-width: 601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvbWF0ZXJpYWxpemUvY3NzL21hdGVyaWFsaXplLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGLGlCQUFpQixtQ0FBbUM7QUFBQyxzQkFBc0Isd0JBQXdCO0FBQUMsMkJBQTJCLG1DQUFtQztBQUFDLHFDQUFxQyx3QkFBd0I7QUFBQywyQkFBMkIsbUNBQW1DO0FBQUMscUNBQXFDLHdCQUF3QjtBQUFDLDJCQUEyQixtQ0FBbUM7QUFBQyxxQ0FBcUMsd0JBQXdCO0FBQUMsMkJBQTJCLG1DQUFtQztBQUFDLHFDQUFxQyx3QkFBd0I7QUFBQywyQkFBMkIsbUNBQW1DO0FBQUMscUNBQXFDLHdCQUF3QjtBQUFDLDBCQUEwQixtQ0FBbUM7QUFBQyxvQ0FBb0Msd0JBQXdCO0FBQUMsMEJBQTBCLG1DQUFtQztBQUFDLG9DQUFvQyx3QkFBd0I7QUFBQywwQkFBMEIsbUNBQW1DO0FBQUMsb0NBQW9DLHdCQUF3QjtBQUFDLDBCQUEwQixtQ0FBbUM7QUFBQyxvQ0FBb0Msd0JBQXdCO0FBQUMsS0FBSyxtQ0FBbUM7QUFBQyxVQUFVLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGNBQWMsbUNBQW1DO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLE1BQU0sbUNBQW1DO0FBQUMsV0FBVyx3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsZUFBZSxtQ0FBbUM7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsUUFBUSxtQ0FBbUM7QUFBQyxhQUFhLHdCQUF3QjtBQUFDLGtCQUFrQixtQ0FBbUM7QUFBQyw0QkFBNEIsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGtCQUFrQixtQ0FBbUM7QUFBQyw0QkFBNEIsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixnQ0FBZ0M7QUFBQywyQkFBMkIscUJBQXFCO0FBQUMsYUFBYSxtQ0FBbUM7QUFBQyxrQkFBa0Isd0JBQXdCO0FBQUMsdUJBQXVCLG1DQUFtQztBQUFDLGlDQUFpQyx3QkFBd0I7QUFBQyx1QkFBdUIsbUNBQW1DO0FBQUMsaUNBQWlDLHdCQUF3QjtBQUFDLHVCQUF1QixtQ0FBbUM7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsdUJBQXVCLG1DQUFtQztBQUFDLGlDQUFpQyx3QkFBd0I7QUFBQyx1QkFBdUIsbUNBQW1DO0FBQUMsaUNBQWlDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxRQUFRLG1DQUFtQztBQUFDLGFBQWEsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGtCQUFrQixtQ0FBbUM7QUFBQyw0QkFBNEIsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxNQUFNLG1DQUFtQztBQUFDLFdBQVcsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLFlBQVksbUNBQW1DO0FBQUMsaUJBQWlCLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxxQkFBcUIsbUNBQW1DO0FBQUMsK0JBQStCLHdCQUF3QjtBQUFDLHFCQUFxQixtQ0FBbUM7QUFBQywrQkFBK0Isd0JBQXdCO0FBQUMscUJBQXFCLG1DQUFtQztBQUFDLCtCQUErQix3QkFBd0I7QUFBQyxxQkFBcUIsbUNBQW1DO0FBQUMsK0JBQStCLHdCQUF3QjtBQUFDLHFCQUFxQixtQ0FBbUM7QUFBQywrQkFBK0Isd0JBQXdCO0FBQUMscUJBQXFCLG1DQUFtQztBQUFDLCtCQUErQix3QkFBd0I7QUFBQyxxQkFBcUIsbUNBQW1DO0FBQUMsK0JBQStCLHdCQUF3QjtBQUFDLHFCQUFxQixtQ0FBbUM7QUFBQywrQkFBK0Isd0JBQXdCO0FBQUMsTUFBTSxtQ0FBbUM7QUFBQyxXQUFXLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxNQUFNLG1DQUFtQztBQUFDLFdBQVcsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLE9BQU8sbUNBQW1DO0FBQUMsWUFBWSx3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGFBQWEsbUNBQW1DO0FBQUMsa0JBQWtCLHdCQUF3QjtBQUFDLHVCQUF1QixtQ0FBbUM7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsdUJBQXVCLG1DQUFtQztBQUFDLGlDQUFpQyx3QkFBd0I7QUFBQyx1QkFBdUIsbUNBQW1DO0FBQUMsaUNBQWlDLHdCQUF3QjtBQUFDLHVCQUF1QixtQ0FBbUM7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsdUJBQXVCLG1DQUFtQztBQUFDLGlDQUFpQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsTUFBTSxtQ0FBbUM7QUFBQyxXQUFXLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxlQUFlLG1DQUFtQztBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxRQUFRLG1DQUFtQztBQUFDLGFBQWEsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGtCQUFrQixtQ0FBbUM7QUFBQyw0QkFBNEIsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsZ0NBQWdDO0FBQUMsMkJBQTJCLHFCQUFxQjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxPQUFPLG1DQUFtQztBQUFDLFlBQVksd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxRQUFRLG1DQUFtQztBQUFDLGFBQWEsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGtCQUFrQixtQ0FBbUM7QUFBQyw0QkFBNEIsd0JBQXdCO0FBQUMsa0JBQWtCLG1DQUFtQztBQUFDLDRCQUE0Qix3QkFBd0I7QUFBQyxrQkFBa0IsbUNBQW1DO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxhQUFhLG1DQUFtQztBQUFDLGtCQUFrQix3QkFBd0I7QUFBQyx1QkFBdUIsbUNBQW1DO0FBQUMsaUNBQWlDLHdCQUF3QjtBQUFDLHVCQUF1QixtQ0FBbUM7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsdUJBQXVCLG1DQUFtQztBQUFDLGlDQUFpQyx3QkFBd0I7QUFBQyx1QkFBdUIsbUNBQW1DO0FBQUMsaUNBQWlDLHdCQUF3QjtBQUFDLHVCQUF1QixtQ0FBbUM7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLHNCQUFzQixtQ0FBbUM7QUFBQyxnQ0FBZ0Msd0JBQXdCO0FBQUMsc0JBQXNCLG1DQUFtQztBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxzQkFBc0IsbUNBQW1DO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLE9BQU8sbUNBQW1DO0FBQUMsWUFBWSx3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsaUJBQWlCLG1DQUFtQztBQUFDLDJCQUEyQix3QkFBd0I7QUFBQyxpQkFBaUIsbUNBQW1DO0FBQUMsMkJBQTJCLHdCQUF3QjtBQUFDLGlCQUFpQixtQ0FBbUM7QUFBQywyQkFBMkIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixtQ0FBbUM7QUFBQywwQkFBMEIsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxXQUFXLG1DQUFtQztBQUFDLGdCQUFnQix3QkFBd0I7QUFBQyxxQkFBcUIsbUNBQW1DO0FBQUMsK0JBQStCLHdCQUF3QjtBQUFDLHFCQUFxQixtQ0FBbUM7QUFBQywrQkFBK0Isd0JBQXdCO0FBQUMscUJBQXFCLG1DQUFtQztBQUFDLCtCQUErQix3QkFBd0I7QUFBQyxxQkFBcUIsbUNBQW1DO0FBQUMsK0JBQStCLHdCQUF3QjtBQUFDLHFCQUFxQixtQ0FBbUM7QUFBQywrQkFBK0Isd0JBQXdCO0FBQUMsb0JBQW9CLG1DQUFtQztBQUFDLDhCQUE4Qix3QkFBd0I7QUFBQyxvQkFBb0IsbUNBQW1DO0FBQUMsOEJBQThCLHdCQUF3QjtBQUFDLG9CQUFvQixtQ0FBbUM7QUFBQyw4QkFBOEIsd0JBQXdCO0FBQUMsb0JBQW9CLG1DQUFtQztBQUFDLDhCQUE4Qix3QkFBd0I7QUFBQyxNQUFNLG1DQUFtQztBQUFDLFdBQVcsd0JBQXdCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGdCQUFnQixnQ0FBZ0M7QUFBQywwQkFBMEIscUJBQXFCO0FBQUMsZ0JBQWdCLG1DQUFtQztBQUFDLDBCQUEwQix3QkFBd0I7QUFBQyxnQkFBZ0IsbUNBQW1DO0FBQUMsMEJBQTBCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLGVBQWUsbUNBQW1DO0FBQUMseUJBQXlCLHdCQUF3QjtBQUFDLE9BQU8sZ0NBQWdDO0FBQUMsWUFBWSxxQkFBcUI7QUFBQyxPQUFPLGdDQUFnQztBQUFDLFlBQVkscUJBQXFCO0FBQUMsYUFBYSx5Q0FBeUM7QUFBQyxrQkFBa0IsOEJBQThCO0FBQUMsMkVBQTJFO0FBQUMsS0FBSyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyw2QkFBNkI7QUFBQyxLQUFLLFFBQVE7QUFBQyx3Q0FBd0MsYUFBYTtBQUFDLEdBQUcsYUFBYSxDQUFDLGVBQWU7QUFBQyx1QkFBdUIsYUFBYTtBQUFDLE9BQU8sZUFBZTtBQUFDLEdBQWtDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7QUFBQyxJQUFJLGdDQUFnQyxDQUFDLGFBQWE7QUFBQyxFQUFFLDRCQUE0QixDQUFDLG9DQUFvQztBQUFDLFlBQVksa0JBQWtCLENBQUMseUJBQXlCLENBQUMsd0NBQXdDLENBQXVDLGdDQUFnQztBQUFDLFNBQVMsbUJBQW1CO0FBQUMsU0FBUyxrQkFBa0I7QUFBQyxjQUFjLGdDQUFnQyxDQUFDLGFBQWE7QUFBQyxJQUFJLGlCQUFpQjtBQUFDLEtBQUsscUJBQXFCLENBQUMsVUFBVTtBQUFDLE1BQU0sYUFBYTtBQUFDLFFBQVEsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUI7QUFBQyxJQUFJLGNBQWM7QUFBQyxJQUFJLFVBQVU7QUFBQyxZQUFZLG9CQUFvQjtBQUFDLHNCQUFzQixZQUFZLENBQUMsUUFBUTtBQUFDLElBQUksaUJBQWlCO0FBQUMsZUFBZSxlQUFlO0FBQUMsc0NBQXNDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRO0FBQUMsYUFBYSxnQkFBZ0I7QUFBQyxjQUFjLG1CQUFtQjtBQUFDLDJEQUEyRCx5QkFBeUI7QUFBQyw4SEFBOEgsaUJBQWlCLENBQUMsU0FBUztBQUFDLGtIQUFrSCw2QkFBNkI7QUFBQyxTQUFTLDZCQUE2QjtBQUFDLE9BQXFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQyxTQUFTLG9CQUFvQixDQUFDLHVCQUF1QjtBQUFDLFNBQVMsYUFBYTtBQUFDLGlDQUErRCxxQkFBcUIsQ0FBQyxTQUFTO0FBQUMsc0ZBQXNGLFdBQVc7QUFBQyxnQkFBZ0IsNEJBQTRCLENBQUMsbUJBQW1CO0FBQUMseUZBQXlGLHVCQUF1QjtBQUFDLDZCQUE2Qix5QkFBeUIsQ0FBQyxZQUFZO0FBQUMsYUFBYSxhQUFhO0FBQUMsUUFBUSxpQkFBaUI7QUFBQyxPQUFPLG9CQUFvQjtBQUFDLFNBQVMsWUFBWTtBQUFDLFNBQVMsWUFBWTtBQUFDLEtBQW1DLHFCQUFxQjtBQUFDLG1CQUE4QyxrQkFBa0I7QUFBQyxzQ0FBc0MsdUhBQXVIO0FBQUMseUJBQXlCLGNBQWMsQ0FBQyxvQkFBb0I7QUFBQyw0QkFBNEIsb0JBQW9CO0FBQUMsRUFBRSxhQUFhLENBQUMsb0JBQW9CLENBQUMsdUNBQXVDO0FBQUMsZ0JBQTZFLFlBQVksQ0FBMkUsa0JBQWtCO0FBQUMsVUFBVSxVQUFVO0FBQUMsV0FBOEMsMEJBQTBCO0FBQUMseUhBQXFPLG1HQUFtRztBQUFDLGlGQUE2TCxtR0FBbUc7QUFBQyxXQUF3SCxvR0FBb0c7QUFBQyxXQUE2SCx5R0FBeUc7QUFBQyxXQUErSCwyR0FBMkc7QUFBQyxrQkFBdUksNEdBQTRHO0FBQUMsV0FBeUYsMEJBQThFO0FBQUMsaUJBQStGLHFFQUFxRTtBQUFDLFNBQVMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0I7QUFBQyxXQUFXLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkI7QUFBQyxFQUFFLG1CQUFtQjtBQUFDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQjtBQUFDLFFBQVEsV0FBVyxDQUFDLGdCQUFnQjtBQUFDLE9BQU8sY0FBYztBQUFDLFFBQVEsY0FBYztBQUFDLFNBQVMsY0FBYztBQUFDLFFBQVEsY0FBYztBQUFDLDBDQUEwQyxjQUFjLENBQUMsV0FBVztBQUFDLGVBQWUsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsV0FBVztBQUFDLGlCQUFpQixVQUFVLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtBQUFDLHdCQUF3QixVQUFVO0FBQUMsc0JBQXNCLHdCQUF3QjtBQUFDLDBCQUEwQixjQUFjLENBQUMsVUFBVTtBQUFDLGlCQUFpQixjQUFjO0FBQUMsMkJBQTJCLG9CQUFvQixDQUFDLFVBQVU7QUFBQywwQ0FBMEMsWUFBWSxVQUFVLENBQUMsd0NBQXdDLFNBQVMsQ0FBQyxxQkFBcUIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztBQUFDLFlBQVksY0FBYyxDQUFDLDJCQUEyQjtBQUFDLG1HQUFtRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsY0FBYztBQUFDLG1CQUFtQixlQUFlLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLGtDQUFrQztBQUFDLCtCQUErQixZQUFZO0FBQUMsdUJBQXVCLFVBQVU7QUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFlBQVk7QUFBQyw4QkFBOEIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVU7QUFBQyxrQ0FBa0MsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBd0MsOEJBQThCLENBQW9DLDBCQUEwQjtBQUFDLHFCQUFxQixpQkFBaUI7QUFBQyxRQUFRLHlCQUF5QjtBQUFDLHFCQUFxQixTQUFTO0FBQUMsU0FBUyxTQUFTLENBQWdDLHNCQUFzQjtBQUFDLDBDQUEwQyw0Q0FBNEMsdUJBQXVCLENBQUM7QUFBQywwQ0FBMEMsc0JBQXNCLHVCQUF1QixDQUFDO0FBQUMsMENBQTBDLG9CQUFvQix1QkFBdUIsQ0FBQztBQUFDLGlFQUFpRSxrQkFBa0IsdUJBQXVCLENBQUM7QUFBQywwQ0FBMEMsb0JBQW9CLHVCQUF1QixDQUFDO0FBQUMsMkNBQTJDLDBCQUEwQix1QkFBdUIsQ0FBQztBQUFDLDJDQUEyQyxxQkFBcUIsd0JBQXdCLENBQUM7QUFBQywwQ0FBMEMsZUFBZSx3QkFBd0IsQ0FBQztBQUFDLGlFQUFpRSxnQkFBZ0Isd0JBQXdCLENBQUM7QUFBQywwQ0FBMEMsZUFBZSx3QkFBd0IsQ0FBQztBQUFDLDBDQUEwQyx1QkFBdUIsd0JBQXdCLENBQUM7QUFBQywwQ0FBMEMseUJBQXlCLHdCQUF3QixDQUFDO0FBQUMsMENBQTBDLHNCQUFzQixpQkFBaUIsQ0FBQztBQUFDLGFBQWEsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLHdCQUF3QjtBQUFDLCtCQUErQixlQUFlLENBQUMsZUFBZSxDQUE4RCxZQUFZLENBQTJFLGtCQUFrQixDQUFzRiw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxvQ0FBb0M7QUFBQyxZQUFZLFdBQVc7QUFBQyxNQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCO0FBQUMsaUJBQWlCLGtCQUFrQjtBQUFDLHNDQUFzQyxzQ0FBc0M7QUFBQywwQkFBMEIsZUFBZTtBQUFDLHlCQUF1RSxxQ0FBcUM7QUFBQywrQkFBK0Isc0NBQXNDO0FBQUMsc0RBQXNELGlCQUFpQjtBQUFDLEdBQUcsd0NBQXdDO0FBQUMsTUFBTSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsaUJBQWlCO0FBQUMsMENBQTBDLHVCQUF1QixVQUFVLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLHVDQUF1QyxlQUFlLENBQUMsb0RBQW9ELFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDZCQUE2QixhQUFhLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsMkNBQTJDLGVBQWUsQ0FBQyw2QkFBNkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsUUFBUSxDQUFDLHVDQUF1QyxDQUFDO0FBQUMsWUFBWSxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO0FBQUMsNkJBQTZCLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQywrQkFBK0I7QUFBQyxvQ0FBb0MsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjtBQUFDLG1JQUFtSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMscUJBQXFCO0FBQUMsNkNBQTZDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsaUJBQWlCO0FBQUMsMkNBQTJDLGNBQWM7QUFBQyxzQ0FBc0MsUUFBUTtBQUFDLHVEQUF1RCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVTtBQUFDLHdDQUF3QyxrQkFBa0I7QUFBQyxvQ0FBb0Msd0JBQXdCLENBQUMsYUFBYTtBQUFDLHVEQUF1RCxVQUFVO0FBQUMsOEJBQThCLGFBQWEsQ0FBeUIsZUFBZSxDQUFDLGFBQWE7QUFBQyxpREFBaUQscUJBQXFCO0FBQUMsMkNBQTJDLHFCQUFxQixDQUFDLCtCQUErQixDQUFDLGlCQUFpQjtBQUFDLHlDQUF5QyxpQkFBaUI7QUFBQyxnREFBZ0QsaUJBQWlCO0FBQUMsbUJBQW1CLFdBQVcsQ0FBQyxhQUFhO0FBQUMseUJBQXlCLFFBQVEsQ0FBQyxXQUFXO0FBQUMsaUJBQWlCLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxlQUFlO0FBQUMsdUVBQXVFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7QUFBQyxVQUFVLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyx1QkFBdUIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQXFDLDJCQUEyQjtBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyxnQ0FBZ0MsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFGQUFxRixDQUFDLDZFQUE2RTtBQUFDLCtCQUErQixVQUFVLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsc0ZBQXNGLENBQUMsOEVBQThFLENBQUMsNkJBQTZCLENBQUMscUJBQXFCO0FBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUMsdUNBQXVDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQUMsK0JBQStCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQUMsTUFBTSx1QkFBdUI7QUFBQyxZQUFZLGVBQWU7QUFBQyxhQUFhLGdCQUFnQjtBQUFDLHNCQUFzQixpQkFBaUI7QUFBQyxNQUFNLHFCQUFxQjtBQUFDLE9BQU8sc0JBQXNCO0FBQUMsc0RBQXNELHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQjtBQUFDLFFBQVEsaUJBQWlCO0FBQUMsY0FBYyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO0FBQUMsVUFBVSxhQUFhLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQjtBQUFDLFlBQVksb0JBQW9CO0FBQUMsV0FBVyxjQUFjLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBK0IscUJBQXFCO0FBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQjtBQUFDLHFCQUFxQixjQUFjO0FBQUMsc0NBQXNDLG9DQUFvQztBQUFDLG9CQUFvQixvQkFBb0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQywyQkFBMkI7QUFBQyw0QkFBNEIsOEJBQThCO0FBQUMsd0JBQXdCLGdCQUFnQjtBQUFDLG9CQUFvQiw0QkFBNEI7QUFBQyxpQkFBaUIsb0JBQW9CLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtBQUFDLGdCQUFnQixpQ0FBaUMsQ0FBd0UsNEJBQTRCO0FBQUMsV0FBVyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUztBQUFDLDBDQUEwQyxXQUFXLFNBQVMsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLFNBQVMsQ0FBQztBQUFDLFVBQVUsbUJBQW1CLENBQUMsb0JBQW9CO0FBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxtQkFBbUI7QUFBQyxnQkFBZ0IsU0FBUztBQUFDLG9CQUFvQixnQkFBZ0I7QUFBQyxvQkFBb0IsYUFBYTtBQUFDLEtBQUssZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCO0FBQUMsV0FBVyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVU7QUFBQyxVQUFVLFVBQVUsQ0FBK0IscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsY0FBYztBQUFDLG9EQUFvRCxpQkFBaUI7QUFBQyxhQUFhLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsYUFBYSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLGFBQWEsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsYUFBYSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVU7QUFBQyxhQUFhLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVU7QUFBQyxhQUFhLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsYUFBYSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVU7QUFBQyxjQUFjLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsY0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLGNBQWMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsb0JBQW9CLHlCQUF5QjtBQUFDLGtCQUFrQixtQkFBbUI7QUFBQyxrQkFBa0Isa0JBQWtCO0FBQUMsb0JBQW9CLDBCQUEwQjtBQUFDLGtCQUFrQixvQkFBb0I7QUFBQyxrQkFBa0IsbUJBQW1CO0FBQUMsb0JBQW9CLGVBQWU7QUFBQyxrQkFBa0IsU0FBUztBQUFDLGtCQUFrQixRQUFRO0FBQUMsb0JBQW9CLDBCQUEwQjtBQUFDLGtCQUFrQixvQkFBb0I7QUFBQyxrQkFBa0IsbUJBQW1CO0FBQUMsb0JBQW9CLDBCQUEwQjtBQUFDLGtCQUFrQixvQkFBb0I7QUFBQyxrQkFBa0IsbUJBQW1CO0FBQUMsb0JBQW9CLGVBQWU7QUFBQyxrQkFBa0IsU0FBUztBQUFDLGtCQUFrQixRQUFRO0FBQUMsb0JBQW9CLDBCQUEwQjtBQUFDLGtCQUFrQixvQkFBb0I7QUFBQyxrQkFBa0IsbUJBQW1CO0FBQUMsb0JBQW9CLDBCQUEwQjtBQUFDLGtCQUFrQixvQkFBb0I7QUFBQyxrQkFBa0IsbUJBQW1CO0FBQUMsb0JBQW9CLGVBQWU7QUFBQyxrQkFBa0IsU0FBUztBQUFDLGtCQUFrQixRQUFRO0FBQUMscUJBQXFCLDBCQUEwQjtBQUFDLG1CQUFtQixvQkFBb0I7QUFBQyxtQkFBbUIsbUJBQW1CO0FBQUMscUJBQXFCLDBCQUEwQjtBQUFDLG1CQUFtQixvQkFBb0I7QUFBQyxtQkFBbUIsbUJBQW1CO0FBQUMscUJBQXFCLGdCQUFnQjtBQUFDLG1CQUFtQixVQUFVO0FBQUMsbUJBQW1CLFNBQVM7QUFBQywwQ0FBMEMsYUFBYSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLG9CQUFvQix5QkFBeUIsQ0FBQyxrQkFBa0IsbUJBQW1CLENBQUMsa0JBQWtCLGtCQUFrQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQixnQkFBZ0IsQ0FBQyxtQkFBbUIsVUFBVSxDQUFDLG1CQUFtQixTQUFTLENBQUM7QUFBQywwQ0FBMEMsYUFBYSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLG9CQUFvQix5QkFBeUIsQ0FBQyxrQkFBa0IsbUJBQW1CLENBQUMsa0JBQWtCLGtCQUFrQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQyxrQkFBa0Isb0JBQW9CLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQixnQkFBZ0IsQ0FBQyxtQkFBbUIsVUFBVSxDQUFDLG1CQUFtQixTQUFTLENBQUM7QUFBQywyQ0FBMkMsY0FBYyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLHFCQUFxQix5QkFBeUIsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUMsbUJBQW1CLGtCQUFrQixDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLFNBQVMsQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLFNBQVMsQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxtQkFBbUIsb0JBQW9CLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLFNBQVMsQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLHNCQUFzQiwwQkFBMEIsQ0FBQyxvQkFBb0Isb0JBQW9CLENBQUMsb0JBQW9CLG1CQUFtQixDQUFDLHNCQUFzQiwwQkFBMEIsQ0FBQyxvQkFBb0Isb0JBQW9CLENBQUMsb0JBQW9CLG1CQUFtQixDQUFDLHNCQUFzQixnQkFBZ0IsQ0FBQyxvQkFBb0IsVUFBVSxDQUFDLG9CQUFvQixTQUFTLENBQUM7QUFBQyxJQUFJLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQjtBQUFDLGlCQUFpQixXQUFXO0FBQUMsOEJBQThCLGVBQWUsQ0FBQyxXQUFXO0FBQUMsOEJBQThCLGlCQUFpQixDQUFDLGtCQUFrQjtBQUFDLE1BQU0sVUFBVTtBQUFDLG1FQUFtRSxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQyxpQkFBaUIsaUJBQWlCLENBQUMsV0FBVztBQUFDLDBDQUEwQyxzQkFBc0IsWUFBWSxDQUFDO0FBQUMscUJBQXFCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWE7QUFBQyx1QkFBdUIsV0FBVyxDQUFDLGdCQUFnQjtBQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUztBQUFDLHVCQUF1QixRQUFRLENBQW9DLDBCQUEwQjtBQUFDLDBDQUEwQyxnQkFBZ0IsUUFBUSxDQUFvQywwQkFBMEIsQ0FBQywyQ0FBMkMsU0FBUyxDQUF3QixjQUFjLENBQUMscUJBQXFCLFdBQVcsQ0FBQyxzQkFBc0IsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUFDLHNCQUFzQixZQUFZLENBQUMsU0FBUztBQUFDLG1IQUFtSCxVQUFVLENBQUMsaUJBQWlCO0FBQUMsZUFBZSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUFDLE9BQU8sUUFBUTtBQUFDLFVBQWtELCtCQUErQixDQUFDLFVBQVUsQ0FBQyxTQUFTO0FBQUMsaUJBQWlCLGdDQUFnQztBQUFDLFNBQWlELCtCQUErQixDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFjO0FBQUMsOEdBQThHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7QUFBQyw4TUFBOE0sY0FBYyxDQUFDLG1CQUFtQjtBQUFDLGVBQWUsZ0NBQWdDO0FBQUMsWUFBWSxVQUFVO0FBQUMsU0FBUyxXQUFXO0FBQUMsaUJBQWlCLFFBQVEsQ0FBQyxXQUFXO0FBQUMsdUJBQXVCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCO0FBQUMseU9BQXlPLFdBQVcsQ0FBeUIsZUFBZTtBQUFDLHVCQUF1QixLQUFLLENBQUMsTUFBTTtBQUFDLHlCQUF5QiwyQkFBMkIsQ0FBOEIsb0JBQW9CO0FBQUMsZ0NBQWdDLFVBQVU7QUFBQyxjQUFjLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQUMsa0JBQWtCLGNBQWM7QUFBQywwQ0FBMEMsOEJBQThCLGVBQWUsQ0FBQyxxRUFBcUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsV0FBVyxDQUFDO0FBQUMsRUFBRSxvQkFBb0I7QUFBQyxLQUFLLGVBQWUsQ0FBQyx1SEFBdUgsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0I7QUFBQyxzQ0FBc0MsS0FBSyxjQUFjLENBQUM7QUFBQywwQ0FBMEMsS0FBSyxnQkFBZ0IsQ0FBQztBQUFDLDJDQUEyQyxLQUFLLGNBQWMsQ0FBQztBQUFDLGtCQUFrQixlQUFlLENBQUMsZUFBZTtBQUFDLDhCQUE4QixtQkFBbUI7QUFBQyxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLHlCQUF5QjtBQUFDLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsbUNBQW1DO0FBQUMsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUM7QUFBQyxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLDBCQUEwQjtBQUFDLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDO0FBQUMsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0M7QUFBQyxHQUFHLGlCQUFpQjtBQUFDLE9BQU8sZUFBZTtBQUFDLE1BQU0sYUFBYTtBQUFDLE9BQU8sZUFBZTtBQUFDLE1BQU0sZUFBZTtBQUFDLDBDQUEwQyxXQUFXLGdCQUFnQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxrQkFBa0IsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGtCQUFrQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxpQkFBaUIsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGtCQUFrQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxrQkFBa0IsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGtCQUFrQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsaUJBQWlCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxrQkFBa0IsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGtCQUFrQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxrQkFBa0IsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGlCQUFpQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxrQkFBa0IsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGtCQUFrQixDQUFDO0FBQUMsMENBQTBDLFdBQVcsa0JBQWtCLENBQUM7QUFBQywwQ0FBMEMsV0FBVyxpQkFBaUIsQ0FBQztBQUFDLDBDQUEwQyxXQUFXLGdCQUFnQixDQUFDO0FBQUMsa0JBQThMLHlFQUFnTjtBQUFDLDRCQUF1RCxrQkFBa0IsQ0FBaUcsbUNBQThGO0FBQUMsMkJBQXNELGtCQUFrQjtBQUFDLFlBQTBGLDBCQUEwQixDQUFxRCxZQUFZLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCO0FBQUMsTUFBTSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBK0UsMEJBQTBCLENBQXFELGlCQUFpQjtBQUFDLGtCQUFrQixjQUFjLENBQUMsZUFBZTtBQUFDLDRCQUE0QixjQUFjO0FBQUMscUNBQXFDLGlCQUFpQjtBQUFDLHlFQUF5RSxjQUFjLENBQUMsZUFBZTtBQUFDLG1IQUFtSCxjQUFjO0FBQUMsK0VBQStFLGVBQWUsQ0FBQyxlQUFlO0FBQUMsNEVBQTRFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTztBQUFDLFlBQVksWUFBWTtBQUFDLGFBQWEsWUFBWTtBQUFDLFlBQVksWUFBWTtBQUFDLGlCQUE4RSxZQUFZO0FBQUMsMEdBQTBHLFdBQVcsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCO0FBQUMsc0hBQXNILFdBQVc7QUFBQyw2QkFBNkIsYUFBYTtBQUFDLGlDQUFpQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsVUFBVTtBQUFDLCtCQUE0RixZQUFZLENBQWtILHFCQUFxQixDQUE4QyxNQUFNLENBQUMsaUJBQWlCO0FBQUMsNkNBQXdHLFdBQVc7QUFBQyxpQ0FBaUMsU0FBUztBQUFDLGlDQUFpQyxTQUFTLENBQUMsbUJBQW1CO0FBQUMsa0JBQWtCLGlCQUFpQjtBQUFDLHNCQUFzQixhQUFhLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVU7QUFBQyw4QkFBOEIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVk7QUFBQyxvQkFBb0IsWUFBWSxDQUFDLHlCQUF5QjtBQUFDLHNCQUFzQixRQUFRO0FBQUMsZ0NBQWdDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7QUFBQyxrQ0FBa0MsZ0JBQWdCO0FBQUMsbUJBQW1CLHdCQUF3QixDQUFDLDBDQUEwQyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjtBQUFDLDhCQUE4Qix5QkFBeUI7QUFBQyxrR0FBa0csYUFBYSxDQUFDLGlCQUFpQixDQUFtQyx5QkFBeUIsQ0FBQyx3QkFBd0I7QUFBQyx3R0FBd0csYUFBYTtBQUFDLG1CQUFtQixZQUFZLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWTtBQUFDLCtCQUErQixjQUFjLENBQUMsYUFBYTtBQUFDLGlCQUFpQixhQUFhLENBQUMsY0FBYyxDQUFDLGFBQWE7QUFBQywwQ0FBMEMsaUJBQWlCLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFBQyxpRUFBaUUsaUJBQWlCLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQUMsMENBQTBDLGlCQUFpQixPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztBQUFDLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBOEQsWUFBWSxDQUEyRSxrQkFBa0IsQ0FBc0YsNkJBQTZCLENBQUMsY0FBYztBQUFDLHFCQUFxQixhQUFhLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQjtBQUFDLGVBQWUsa0JBQWtCO0FBQUMsMENBQTBDLE9BQU8sVUFBVSxDQUFDLGVBQWUsQ0FBQztBQUFDLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGtCQUFrQjtBQUFDLHVCQUF1Qiw0QkFBNEI7QUFBQyxrSEFBa0gsMkJBQTJCO0FBQUMseUVBQXlFLFVBQVU7QUFBQyxrQ0FBa0MscUJBQXFCO0FBQUMsdUJBQW9GLFlBQVk7QUFBQyw0QkFBdUYsV0FBVztBQUFDLFdBQVcsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCO0FBQUMsYUFBYSwyQkFBMkIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBZ0Usc0RBQXNEO0FBQUMsNkNBQTZDLHNDQUFzQyxDQUFDLFlBQVk7QUFBQyx1Q0FBdUMsNEJBQTRCLENBQUMsYUFBYTtBQUFDLGtEQUFrRCwyQkFBMkIsQ0FBQyxjQUFjO0FBQUMsaUJBQWlCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCO0FBQUMsMENBQTBDLE1BQW1FLFlBQVksQ0FBQyxXQUFzRSxXQUFXLENBQUMsYUFBYSxjQUFjLENBQUM7QUFBQyxrQkFBa0IsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0I7QUFBQyxVQUFVLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBaUMsdUJBQXVCLENBQUMsaUJBQWlCO0FBQUMscUNBQXFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLHVDQUF1QztBQUFDLCtaQUErWixtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBeUIsZUFBZSxDQUFDLHdCQUF3QixDQUFDLGNBQWM7QUFBQyw2aEJBQTZoQixtQ0FBbUMsQ0FBQyx3QkFBd0I7QUFBQyx5RUFBeUUsY0FBYyxDQUFDLFNBQVM7QUFBQyx1RkFBdUYsZ0JBQWdCLENBQUMsbUJBQW1CO0FBQUMsaUVBQWlFLHdCQUF3QjtBQUFDLDJCQUEyQixvQkFBb0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQWtELHdDQUF3QyxDQUFDLGNBQWM7QUFBQyw2Q0FBNkMsd0JBQXdCO0FBQUMsY0FBYyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBeUMsK0JBQStCLENBQUMsY0FBYyxDQUFDLHFCQUFxQjtBQUFDLG9CQUFvQix3QkFBd0I7QUFBQyxxQkFBcUIsZUFBZTtBQUFDLHdCQUF3QixVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFBQyxvQ0FBb0MsWUFBWTtBQUFDLDBCQUEwQixnQkFBZ0I7QUFBQyx3QkFBd0IsWUFBWSxDQUFDLGFBQWE7QUFBQyxvQ0FBb0MsY0FBYztBQUFDLDBCQUEwQixrQkFBa0I7QUFBQywwQkFBMEIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVk7QUFBQywrQkFBK0IsVUFBVSxDQUFDLFNBQVM7QUFBQyxnQkFBZ0IsYUFBYSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7QUFBQyxvQkFBb0IsV0FBVztBQUFDLGtCQUFrQixjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsV0FBVztBQUFDLDRCQUE0QixrQkFBa0I7QUFBQyxtRUFBbUUsa0JBQWtCO0FBQUMseUVBQXlFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQW9DLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVztBQUFDLCtFQUErRSxvQkFBb0IsQ0FBQyxxQkFBcUI7QUFBQyxrQ0FBa0Msa0JBQWtCO0FBQUMscUNBQXFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVU7QUFBQyx3Q0FBd0MscUJBQXFCO0FBQUMsbUNBQW1DLGtCQUFrQjtBQUFDLHNDQUFzQyxRQUFRLENBQUMsV0FBVyxDQUE4RCxZQUFZLENBQW1JLDZCQUE2QjtBQUFDLHlDQUF5QyxpQkFBaUI7QUFBQywwQkFBMEIsU0FBUyxDQUFDLFdBQVc7QUFBQyxxQ0FBcUMsU0FBUztBQUFDLDZCQUEwRixZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTO0FBQUMsZ0NBQTZFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUF5QixlQUFlO0FBQUMsa0NBQWtDLGFBQWEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBeUIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQUMsb0NBQW9DLG1CQUFtQjtBQUFDLHFCQUFxQixNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCO0FBQUMsd0JBQXdCLGtCQUFrQjtBQUFDLG9DQUFvQyxTQUFTO0FBQUMsZ0NBQWdDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQTRCLGtCQUFrQjtBQUFDLFVBQWtDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUF5QywrQkFBK0I7QUFBQyxnQ0FBd0QsZUFBZTtBQUFDLGdCQUFnQixnQ0FBZ0M7QUFBQyxnREFBZ0QsdUNBQXVDLENBQUMsd0JBQXdCLENBQUMsY0FBYztBQUFDLFdBQVcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxjQUFjO0FBQUMsYUFBYSxnQkFBZ0I7QUFBQyxXQUFXLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjO0FBQUMsYUFBYSxnQkFBZ0I7QUFBQyxXQUFXLGFBQWE7QUFBQyxrQkFBa0IscUJBQXFCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBOEIsb0JBQW9CO0FBQUMsd0JBQXdCLFNBQVM7QUFBQyxxQkFBcUIsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFBQyx1REFBdUQscUJBQXFCO0FBQUMsMkJBQTJCLFlBQVk7QUFBQyw2QkFBNkIsWUFBWSxDQUFDLFVBQVU7QUFBQyxpREFBaUQsY0FBYyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO0FBQUMsZ0NBQWdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVztBQUFDLHlCQUF5QixjQUFjLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVU7QUFBQyxpREFBaUQsd0JBQXdCO0FBQUMsMkRBQTJELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUF3QixjQUFjO0FBQUMsa0JBQWtCLGNBQWM7QUFBQzs7Ozs7OztFQU8zOHRFO0FBQUMsY0FBYyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLHVDQUF1QyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBaUMsdUJBQXVCO0FBQUMsNEJBQTRCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFzQyw0QkFBNEIsQ0FBdUcsc0NBQXNDLENBQXNGLGtCQUFrQixDQUFDLG1CQUFtQjtBQUFDLHdDQUF3Qyx1Q0FBdUM7QUFBQyxzQ0FBc0Msb0NBQW9DO0FBQUMseUNBQXlDLHFDQUFxQztBQUFDLHlDQUF5QyxvQ0FBb0M7QUFBQyx5Q0FBeUMscUNBQXFDO0FBQUMsd0NBQXdDLG9DQUFvQztBQUFDLHVDQUF1QyxvQ0FBb0M7QUFBQyx3R0FBd0csUUFBUSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLGVBQWU7QUFBQyxrQkFBa0IsaUJBQWlCLENBQUMsVUFBVTtBQUFDLG9CQUF1RCwwQkFBMEI7QUFBQyxjQUE4Qyx1QkFBdUIsQ0FBQywwRUFBMEU7QUFBQyxxQkFBcUIsbUJBQW1CLENBQUMscUJBQXFCO0FBQUMseUNBQXlDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUztBQUFDLGNBQWMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUI7QUFBQyxhQUFhLGFBQWE7QUFBQyw0QkFBNEIsVUFBVTtBQUFDLE9BQU8sWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCO0FBQUMsYUFBYSxZQUFZO0FBQUMsMENBQTBDLE9BQU8sU0FBUyxDQUFDO0FBQUMsd0NBQXdDLFlBQVk7QUFBQyxzQkFBc0IsWUFBWTtBQUFDLG9CQUFvQixjQUFjO0FBQUMscUJBQXFCLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtBQUFDLHlIQUF5SCxZQUFZO0FBQUMsZUFBZSxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CO0FBQUMsMEJBQTBCLFNBQVMsQ0FBQyxVQUFVO0FBQUMseUNBQXlDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsZUFBZTtBQUFDLHdDQUF3QyxvQ0FBb0MsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO0FBQUMsb0JBQW9CLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDJCQUEyQjtBQUFDLGFBQWEseUJBQXlCLENBQUMsMkJBQTJCLENBQUMsMEJBQTBCLENBQUMscUJBQXFCO0FBQUMsb0JBQWlGLFlBQVksQ0FBQyxjQUFjLENBQUMsdUNBQXVDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyw0QkFBNEI7QUFBQywwQkFBMEIsU0FBUztBQUFDLHNCQUFzQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCO0FBQUMsNENBQTRDLHFCQUFxQjtBQUFDLGtCQUFrQixZQUFZLENBQUMsNEJBQTRCLENBQStCLHFCQUFxQixDQUFDLFlBQVk7QUFBQyxrREFBa0QsV0FBVyxDQUF5QixlQUFlO0FBQUMsd0RBQXdELFNBQVM7QUFBQyxnRUFBZ0UsNEJBQTRCLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxjQUFjO0FBQUMsNEVBQTRFLGlDQUFpQztBQUFDLG9FQUFvRSxtQkFBbUI7QUFBQyw0REFBNEQsUUFBUSxDQUFDLHFCQUFxQjtBQUFDLHNFQUFzRSx1QkFBdUI7QUFBQyxvQkFBb0IsV0FBVyxDQUF5QixlQUFlO0FBQUMsdUJBQXFHLHFFQUFxRSxDQUFDLGFBQWEsQ0FBc0UsNERBQTREO0FBQUMsOEJBQTZHLHNFQUFzRSxDQUFDLGFBQWE7QUFBQyxNQUFNLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0I7QUFBQyxZQUFZLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVO0FBQUMsVUFBVSxVQUFVLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7QUFBQyxhQUFhLGNBQWMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtBQUFDLE9BQU8sV0FBVyxDQUFDLCtCQUErQixDQUF5QixlQUFlLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBNEIsa0JBQWtCO0FBQUMsYUFBYSwrQkFBK0IsQ0FBc0MsNEJBQTRCO0FBQUMsYUFBYSxXQUFXO0FBQUMsY0FBYyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0I7QUFBQyxvQkFBb0IsbUJBQW1CLENBQW9DLDBCQUEwQjtBQUFDLDZCQUE2QixZQUFZLENBQUMsZUFBZTtBQUFDLGlCQUFpQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsdUJBQXVCO0FBQUMscUJBQXFCLGdCQUFnQixDQUFxQywyQkFBMkI7QUFBQyxlQUFlLGFBQWEsQ0FBd0IsY0FBYyxDQUFDLGlCQUFpQixDQUFnQyxzQkFBc0IsQ0FBQyxrQ0FBa0M7QUFBQyxrQ0FBa0MsVUFBVTtBQUFDLHNCQUE4QyxlQUFlO0FBQUMscUJBQXFCLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLG1CQUFtQjtBQUFDLHFCQUFxQixjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQ0FBa0M7QUFBQyxhQUFhLHlCQUF5QjtBQUFDLGFBQWEsWUFBWSxDQUFDLHdCQUF3QjtBQUFDLE1BQU0sZUFBZSxDQUFDLGFBQWE7QUFBQyw0QkFBNEIsYUFBYTtBQUFDLG1CQUFtQixhQUFhO0FBQXNDLHdCQUF3QixhQUFhO0FBQUMsY0FBYyxhQUFhO0FBQUMsa2ZBQWtmLDRCQUE0QixDQUFDLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBeUIsZUFBZSxDQUFnQyxzQkFBc0IsQ0FBcUcscUNBQW1HO0FBQUMsMDJDQUEwMkMsc0JBQXNCLENBQUMseUNBQXlDO0FBQUMsc2dEQUFzZ0Qsc0JBQXNCO0FBQUMsZ3hCQUFneEIsK0JBQStCLENBQXNDLDRCQUE0QjtBQUFDLDgxQkFBODFCLGFBQWE7QUFBQyxzdkJBQXN2QixhQUFhO0FBQUMsZ3hCQUFneEIsYUFBYTtBQUFDLHFyQkFBcXJCLFVBQVU7QUFBQywwdkNBQTB2QywrQkFBK0IsQ0FBc0MsNEJBQTRCO0FBQUMsbzJDQUFvMkMsK0JBQStCLENBQXNDLDRCQUE0QjtBQUFDLG8rSEFBbytILGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtBQUFDLDJ4REFBMnhELDBCQUEwQixDQUFDLGFBQWE7QUFBQyxpMURBQWkxRCx3QkFBd0IsQ0FBQyxhQUFhO0FBQUMsMHFCQUEwcUIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNkQsbURBQW1EO0FBQUMsYUFBYSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0FBQUMsb0JBQW9CLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQywrREFBK0Qsa0JBQWtCO0FBQUMsdUJBQXVCLFdBQVc7QUFBQyw4RUFBOEUsZ0NBQWdDO0FBQUMsbUJBQW1CLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFJLHFEQUFxRCxDQUF3SCx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBb0MsMEJBQTBCO0FBQUMsMkNBQTBGLHNDQUFzQyxDQUE4QixvQkFBb0I7QUFBQywrTUFBOFAsc0NBQXNDLENBQThCLG9CQUFvQjtBQUFDLDBCQUEwQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0I7QUFBQyxpQ0FBaUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQUMscUJBQXFCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQThCLG9CQUFvQixDQUFDLFNBQVM7QUFBQyw0QkFBNEIsYUFBYTtBQUFDLG9OQUFvTixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsdUJBQXVCO0FBQUMsNkJBQTZCLGdCQUFnQjtBQUFDLDBDQUEwQyw2QkFBNkIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO0FBQUMsMENBQTBDLDZCQUE2QixTQUFTLENBQUMsdUJBQXVCLENBQUM7QUFBQyxnQ0FBZ0MsYUFBYSxDQUFDLG1CQUFtQixDQUF5QywrQkFBK0I7QUFBQyw2Q0FBNkMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBeUIsZUFBZTtBQUFDLDREQUE0RCxxQkFBcUIsQ0FBQyxRQUFRLENBQXlCLGVBQWUsQ0FBQyxVQUFVO0FBQUMsc09BQXNPLFVBQVU7QUFBQyw0Q0FBbUUsY0FBYyxDQUFDLFNBQVM7QUFBQywwR0FBMEcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUE4QixvQkFBb0I7QUFBQyxTQUFTLFVBQVUsQ0FBQyxXQUFXLENBQUMsNEJBQTRCO0FBQUMsOEJBQThCLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQStCLHFCQUFxQjtBQUFDLFdBQVcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVU7QUFBQyxvQ0FBb0MsVUFBVTtBQUFDLDZCQUE2QixXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFBQyxtQkFBbUIsZUFBZTtBQUFDLG9EQUFvRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1CO0FBQUMsOERBQThELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUE4QixvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0I7QUFBQyxxREFBcUQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUE4QixvQkFBb0I7QUFBQyw2T0FBNk8saUJBQWlCO0FBQUMsaUZBQWlGLHdCQUF3QjtBQUFDLHdDQUFtRSxrQkFBa0I7QUFBQyxtQ0FBbUMsNEJBQTRCO0FBQUMseUhBQXlILHdCQUF3QjtBQUFDLDZFQUE2RSx3QkFBd0I7QUFBQyxrQ0FBZ0UscUJBQXFCO0FBQUMsMkNBQXdFLG9CQUFvQjtBQUFDLHdDQUFzRixxQ0FBcUM7QUFBQyxxREFBcUQsaUNBQWlDO0FBQUMsb0RBQW9ELFdBQVcsQ0FBQyxpQ0FBaUM7QUFBQyw4RkFBOEYsNEJBQTRCLENBQUMsNkJBQTZCO0FBQUMsNkJBQTZCLHNCQUFzQjtBQUFDLGtEQUFrRCw2QkFBNkI7QUFBQywyQ0FBMkMsaUNBQWlDLENBQUMsb0JBQW9CO0FBQUMsMERBQTBELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQyxtQ0FBbUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCO0FBQUMsbUdBQW1HLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBd0IsY0FBYztBQUFDLHlEQUF5RCxRQUFRLENBQTRCLGtCQUFrQjtBQUFDLGlFQUFpRSxXQUFXLENBQUMsaUNBQWlDO0FBQUMsc0RBQWlGLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBK0MscUNBQXFDLENBQUMsZ0NBQWdDO0FBQUMsa0RBQWtELFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQyxpQ0FBaUMsQ0FBQyw4QkFBOEIsQ0FBQywrQkFBK0IsQ0FBaUMsdUJBQXVCLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQW9DLDBCQUEwQjtBQUFDLCtDQUErQyx1Q0FBdUMsQ0FBQyx3Q0FBd0M7QUFBQyx3REFBd0QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxrQkFBa0IsQ0FBaUMsdUJBQXVCLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQW9DLDBCQUEwQjtBQUFDLGlFQUFpRSx1Q0FBdUMsQ0FBQyw0QkFBNEI7QUFBQyxtREFBbUQsaUJBQWlCO0FBQUMsdUdBQXVHLFVBQVUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQXFILDJHQUEyRyxDQUFDLFNBQVM7QUFBQyxrRUFBa0UsT0FBTyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFrQyx3QkFBd0IsQ0FBb0MsMEJBQTBCO0FBQUMsaUVBQWlFLFdBQVcsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVM7QUFBQyw0REFBNEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLGlDQUFpQyxDQUFDLDJCQUEyQixDQUFDLDRCQUE0QixDQUFrQyx3QkFBd0IsQ0FBb0MsMEJBQTBCO0FBQUMsMkRBQTJELEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLFNBQVM7QUFBQyxnRUFBZ0UsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsZ0NBQWdDO0FBQUMsd0VBQXdFLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLG9CQUFvQjtBQUFDLDJFQUEyRSw0QkFBNEIsQ0FBQyw0QkFBNEI7QUFBQywwRUFBMEUsd0JBQXdCLENBQUMsd0JBQXdCO0FBQUMscUVBQXFFLDRCQUE0QjtBQUFDLG9FQUFvRSx3QkFBd0IsQ0FBQyxvQkFBb0I7QUFBQyxrQkFBa0IsdUNBQXVDLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCO0FBQUMsY0FBYyxjQUFjO0FBQUMsbUNBQW1DLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtBQUFDLGtEQUFrRCx3QkFBd0I7QUFBQyxpSEFBaUgsU0FBUztBQUFDLHdEQUF3RCx3QkFBd0I7QUFBQyxxQkFBcUIsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQXlDLCtCQUErQixDQUFDLHFCQUFxQixDQUFDLGFBQWE7QUFBQyx1REFBdUQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBMk4sd0ZBQTJPO0FBQUMsNEJBQTRCLHNDQUFzQztBQUFDLDJCQUEyQix3QkFBd0IsQ0FBdUgsNkdBQTZHO0FBQUMsOElBQTJLLG9CQUFvQixDQUFDLHNDQUFzQztBQUFDLDZIQUEwSixvQkFBb0IsQ0FBQyxpQ0FBaUM7QUFBQyw4Q0FBOEMsY0FBYyxDQUFDLGlDQUFpQztBQUFDLDRIQUE0SCx3QkFBd0I7QUFBQyxPQUFPLFlBQVk7QUFBQyx1QkFBdUIsYUFBYTtBQUFDLE9BQU8sc0NBQXNDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO0FBQUMsY0FBYyxpQkFBaUI7QUFBQyxnQkFBZ0IsaUJBQWlCO0FBQUMsMERBQTBELFVBQVUsQ0FBQyxtQkFBbUI7QUFBQyxzQ0FBc0MsaUJBQWlCLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQUMsNENBQTRDLCtCQUErQjtBQUFDLHVCQUF1QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLHFCQUFxQjtBQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZUFBZTtBQUFDLGdCQUFnQixzQkFBc0I7QUFBQywrQkFBK0Isc0JBQXNCO0FBQUMsZ0NBQWdDLHFCQUFxQjtBQUFDLCtDQUErQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCO0FBQUMsa0JBQWtCLHFCQUFxQjtBQUFDLDRGQUE0RixxQkFBcUIsQ0FBQyw0QkFBNEI7QUFBQyxpRUFBaUUsaUNBQWlDO0FBQUMsMkNBQTJDLGlDQUFpQztBQUFDLDhDQUE4QyxpQ0FBaUM7QUFBQywwQkFBMEIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLHVCQUF1QjtBQUFDLGdCQUFnQixnQkFBZ0I7QUFBQyx3QkFBd0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVztBQUFDLDZCQUE2Qix5QkFBeUI7QUFBQywyQ0FBMkMscUJBQXFCO0FBQUMsa0NBQWtDLHFCQUFxQjtBQUFDLGtEQUFrRCxpQkFBaUI7QUFBQyxZQUFZLGlCQUFpQjtBQUFDLCtCQUErQixlQUFlLENBQUMsaUJBQWlCO0FBQUMsNEJBQTRCLFVBQVU7QUFBQywrREFBK0QsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQyxpQkFBaUIsY0FBYztBQUFDLDZCQUE2QixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCO0FBQUMseURBQXlELFlBQVk7QUFBQyxhQUFhLGlCQUFpQjtBQUFDLDJDQUEyQyxjQUFjO0FBQUMsa0JBQWtCLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTO0FBQUMsd0JBQXdCLFlBQVk7QUFBQyx5QkFBeUIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQWtDLHdCQUF3QixDQUFrQyx3QkFBd0I7QUFBQyxnQ0FBZ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFpQyx1QkFBdUI7QUFBQyxnQ0FBZ0MsMkJBQTJCO0FBQUMsdUNBQXVDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUFDLGtCQUFrQix1QkFBdUI7QUFBQyxpREFBaUQsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7QUFBQyx3Q0FBd0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQTZFLGlDQUF5QixDQUF6Qix5QkFBeUIsQ0FBbUQsdUJBQXVCLENBQUMsd0JBQXdCLENBQWtDLHdCQUF3QixDQUFDLGlCQUFpQjtBQUFDLDZFQUFpSSwyQ0FBMkM7QUFBQyxrQkFBa0Isc0JBQXNCO0FBQUMsb0NBQW9DLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXO0FBQUMsb0NBQW9DLFFBQVE7QUFBQyxvQ0FBb0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQTZFLDhCQUF5QixDQUF6Qix5QkFBeUIsQ0FBbUQsZUFBZTtBQUFDLGlDQUFpQyxzQkFBc0IsQ0FBQyxtQkFBbUI7QUFBQyx5RUFBeUUsMkNBQTJDO0FBQUMsNkJBQTZCLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxrQ0FBa0MsZUFBZTtBQUFDLGtDQUFrQyxlQUFlO0FBQUMsNkJBQTZCLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUE2RSw2QkFBeUIsQ0FBekIseUJBQTJFO0FBQUMsa0VBQWtFLDJDQUEyQztBQUFDLHlCQUF5QixjQUFjO0FBQUMsc0JBQXNCLGFBQWE7QUFBQyxxQkFBcUIsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO0FBQUMsMkJBQTJCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkI7QUFBQyw0QkFBNEIsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QjtBQUFDLFNBQVMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBcUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQXFDLDJCQUEyQjtBQUFDLHVCQUF1QixPQUFPLENBQW9DLDBCQUEwQixDQUFDLFNBQVMsQ0FBb0MsMEJBQTBCO0FBQUMsc0JBQXNCLFFBQVE7QUFBQyxZQUFZLFVBQVUsQ0FBQyxnQkFBZ0I7QUFBQyxtQkFBbUIsaUNBQWlDO0FBQUMsY0FBYyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsY0FBYztBQUFDLG9CQUFvQixpQ0FBaUM7QUFBQyw0SUFBNEksZ0JBQWdCO0FBQUMscUhBQXFILFVBQVU7QUFBQyx1QkFBdUIsYUFBYTtBQUFDLGtIQUFrSCx3QkFBd0I7QUFBQyxpQ0FBaUMsd0JBQXdCO0FBQUMsZ0hBQWdILFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHNCQUFzQjtBQUFDLGtCQUFrQixnQkFBZ0I7QUFBQyxvQkFBb0IsY0FBYyxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCO0FBQUMsMEJBQTBCLDRCQUE0QjtBQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFBQyxzQkFBc0IsV0FBVyxDQUFDLFNBQVM7QUFBQyw0QkFBNEIsNEJBQTRCO0FBQUMsZ0NBQWdDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUFDLGlGQUFpRixhQUFhO0FBQUMsNEJBQTRCLFdBQVcsQ0FBQyxVQUFVO0FBQUMscURBQXFELGNBQWMsQ0FBQyxnQkFBZ0I7QUFBQywwQkFBMEIsZUFBZSxDQUFDLGVBQWU7QUFBQywyQkFBMkIsbUJBQW1CLENBQUMsZUFBZTtBQUFDLGFBQWEsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFBQywyQkFBMkIsT0FBTztBQUFDLHVCQUF1QixNQUFNLENBQWlDLHVCQUF1QixDQUFDLGNBQWM7QUFBQyxxQ0FBcUMsT0FBTyxDQUFDLFNBQVM7QUFBQywwQ0FBMEMsdUJBQTJELDJCQUEyQixDQUFDLHFDQUF3RSwwQkFBMEIsQ0FBQyxXQUFXLGNBQWMsQ0FBQyxvQkFBb0IsbUJBQW1CLENBQUM7QUFBQyxrSUFBa0ksd0JBQXdCO0FBQUMsc0lBQXNJLFVBQVU7QUFBQywyQkFBMkIsU0FBUztBQUFDLGlCQUFpQixjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUFDLG1CQUFtQixvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVztBQUFDLHlCQUF5QixVQUFVLENBQUMsV0FBVztBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVztBQUFDLDBCQUEwQix5REFBeUQsQ0FBQyxpREFBaUQ7QUFBQyxvQ0FBb0MsR0FBRyxnQ0FBZ0MsQ0FBQztBQUFDLDRCQUE0QixHQUFvQyx3QkFBd0IsQ0FBQztBQUFDLGVBQWUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CO0FBQUMsaUNBQWlDLG9CQUFvQjtBQUFDLCtCQUErQixvQkFBb0I7QUFBQyxxQ0FBcUMsb0JBQW9CO0FBQUMsbUNBQW1DLG9CQUFvQjtBQUFDLG9DQUFvQyx5SkFBeUosQ0FBQyxpSkFBaUo7QUFBQyxtQ0FBbUMsd0pBQXdKLENBQUMsZ0pBQWdKO0FBQUMsc0NBQXNDLDJKQUEySixDQUFDLG1KQUFtSjtBQUFDLHFDQUFxQywwSkFBMEosQ0FBQyxrSkFBa0o7QUFBQyw2TEFBNkwsU0FBUyxDQUFDLHNGQUFzRixDQUFDLDhFQUE4RTtBQUFDLHNDQUFzQyxNQUFNLGdDQUFnQyxDQUFDLElBQUksZ0NBQWdDLENBQUMsTUFBTSxnQ0FBZ0MsQ0FBQyxJQUFJLGdDQUFnQyxDQUFDLE1BQU0sZ0NBQWdDLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxNQUFNLGdDQUFnQyxDQUFDLEdBQUcsaUNBQWlDLENBQUM7QUFBQyw4QkFBOEIsTUFBdUMsd0JBQXdCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsTUFBdUMsd0JBQXdCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsTUFBdUMsd0JBQXdCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsTUFBdUMsd0JBQXdCLENBQUMsR0FBcUMseUJBQXlCLENBQUM7QUFBQyxvQ0FBb0MsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7QUFBQyw0QkFBNEIsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7QUFBQyxtQ0FBbUMsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7QUFBQywyQkFBMkIsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7QUFBQyxzQ0FBc0MsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7QUFBQyw4QkFBOEIsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7QUFBQyxxQ0FBcUMsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7QUFBQyw2QkFBNkIsS0FBSyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7QUFBQyxXQUFXLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsb0JBQW9CO0FBQUMsbUJBQW1CLFdBQVcsQ0FBQyxVQUFVO0FBQUMsZ0JBQWdCLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLG9CQUFvQjtBQUFDLHdCQUF3QixVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLDBDQUEwQyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7QUFBQyw2QkFBNkIsTUFBTSxDQUFDLHlDQUF5QyxDQUFrQyx3QkFBd0I7QUFBQyw4QkFBOEIsVUFBVSxDQUFDLHdDQUF3QyxDQUFtQyx5QkFBeUI7QUFBQyxxQ0FBcUMsNkVBQTZFLENBQUMscUVBQXFFO0FBQUMsc0NBQXNDLDhFQUE4RSxDQUFDLHNFQUFzRTtBQUFDLDZCQUE2QixLQUFLLGdDQUFnQyxDQUFDLElBQUksK0JBQStCLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQztBQUFDLHFCQUFxQixLQUFzQyx3QkFBd0IsQ0FBQyxJQUFvQyx1QkFBdUIsQ0FBQyxHQUFvQyx3QkFBd0IsQ0FBQztBQUFDLDhCQUE4QixLQUFLLGlDQUFpQyxDQUFDLElBQUksOEJBQThCLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQztBQUFDLHNCQUFzQixLQUF1Qyx5QkFBeUIsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxHQUFxQyx5QkFBeUIsQ0FBQztBQUFDLDJCQUEyQixxR0FBcUcsQ0FBQyw2RkFBNkY7QUFBQyw0QkFBNEIsS0FBSyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxvQkFBb0IsS0FBSyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxRQUFRLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxVQUFVO0FBQUMsbUJBQW1CLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUTtBQUFDLDZCQUE2QixXQUFXO0FBQUMsaUNBQWlDLFNBQVMsQ0FBQyxXQUFXO0FBQUMsZ0JBQWdCLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxZQUFZO0FBQUMsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyx1QkFBdUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEI7QUFBQyw0QkFBNEIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7QUFBQyw4QkFBOEIsYUFBYTtBQUFDLDBCQUEwQixTQUFTO0FBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVE7QUFBQyxvQ0FBb0Msb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUF5QywrQkFBK0IsQ0FBQyxpQkFBaUI7QUFBQywyQ0FBMkMsd0JBQXdCO0FBQUMsVUFBVSxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBMkIsaUJBQWlCLENBQXFDLDJCQUEyQixDQUFpQyx1QkFBdUI7QUFBQywwQkFBMEIsS0FBSyxDQUFDLE1BQU07QUFBQywrQ0FBK0MsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUztBQUFDLCtEQUErRCxXQUFXO0FBQUMseUNBQXlDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU07QUFBQyw0Q0FBNEMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0I7QUFBQywyQ0FBMkMsY0FBYztBQUFDLHlCQUF5QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQUMsNkJBQTZCLFVBQVU7QUFBQyxzQkFBc0IsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUTtBQUFDLHNDQUFzQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLENBQXlDLCtCQUErQixDQUFDLGlCQUFpQjtBQUFDLDZDQUE2QyxxQkFBcUI7QUFBQyx1R0FBdUcsbUJBQW1CO0FBQUMsb0JBQW9CLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBc0MsNEJBQTRCO0FBQUMseUJBQXlCLGtCQUFrQixDQUFrQyx3QkFBd0I7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQUMsV0FBVyxDQUFtTyxvR0FBK1A7QUFBQyxrREFBNkUsa0JBQWtCO0FBQUMsaURBQWlELGtCQUFrQixDQUFDLDRFQUE0RSxDQUFDLG9FQUFvRSxDQUk1c3pELHlEQUtEO0FBQUMsWUFBWSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQW9ILDBHQUEwRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUE0QixrQkFBa0IsQ0FBbU8sb0dBQStQO0FBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGtCQUFrQjtBQUFDLGlCQUFpQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO0FBQUMsaURBQWlELFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0I7QUFBQyx5QkFBb0Qsa0JBQWtCLENBQTJFLHdCQUF3RTtBQUFDLHdCQUF3QixpQkFBaUIsQ0FJcDRDLHNEQUVULENBR1MsVUFBVTtBQUFDLG1CQUFtQixPQUFPLENBQUMsUUFBUSxDQUF5QywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsNEJBQTRCO0FBQUMsZ0lBQWdJLGVBQWU7QUFBQywwQ0FBMEMsZ0NBQWdDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFBQyxPQUFPLGdCQUFnQixDQUFDLGlCQUFpQjtBQUFDLGVBQWUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQXFHLHFDQUFxQyxDQUE4RCw0RUFBNEUsQ0FBQyxvRUFBb0UsQ0FBQyxVQUFVO0FBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUE0QixrQkFBa0IsQ0FBQyxJQUFJLFNBQVMsQ0FBOEIsb0JBQW9CLENBQUMsS0FBSyxTQUFTLENBQThCLG9CQUFvQixDQUFDO0FBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUE0QixrQkFBa0IsQ0FBQyxJQUFJLFNBQVMsQ0FBOEIsb0JBQW9CLENBQUMsS0FBSyxTQUFTLENBQThCLG9CQUFvQixDQUFDO0FBQUMsa0JBQWtCLGVBQWUsQ0FBQyxlQUFlLENBQUMsZUFBZTtBQUFDLG9DQUFpRyxZQUFZLENBQWtILHFCQUFxQixDQUFDLFNBQVM7QUFBQyxxQkFBa0YsWUFBWSxDQUFzRiw2QkFBNkIsQ0FBQyxXQUFXLENBQUMsYUFBYTtBQUFDLHdDQUFxRyxZQUFZO0FBQUMsMkNBQTJDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVE7QUFBQyxpREFBaUQsa0JBQWtCO0FBQUMsNENBQTRDLFlBQVk7QUFBQyx3Q0FBd0MsVUFBVTtBQUFDLHlDQUF5QyxVQUFVO0FBQUMsd0JBQXdCLGNBQWMsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQUMsV0FBVztBQUFDLHlCQUFnRixXQUFXLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWU7QUFBQyxvQ0FBb0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLDJCQUEyQjtBQUFDLG9DQUFvQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtBQUFDLCtCQUE0RixhQUFhO0FBQUMsa0JBQWtCLFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYTtBQUFDLHdCQUF3QixrQkFBa0I7QUFBQyxxQkFBcUIsZ0JBQWdCLENBQUMsaUJBQWlCO0FBQUMscUJBQXFCLFdBQVc7QUFBQyx1QkFBdUIsb0JBQW9CLENBQUMsVUFBVTtBQUFDLHFCQUFxQixpQkFBaUIsQ0FBQyxTQUFTO0FBQUMsOEJBQThCLGFBQWE7QUFBQyxpQ0FBaUMsd0JBQXdCLENBQUMsVUFBVTtBQUFDLCtFQUErRSxxQkFBcUIsQ0FBQyxtQkFBbUI7QUFBQyx1QkFBdUIsNEJBQTRCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxhQUFhO0FBQUMsNkJBQTZCLHNDQUFzQztBQUFDLG1CQUFtQixXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUE4RCxZQUFZLENBQXNGLDZCQUE2QjtBQUFDLHdFQUF3RSxhQUFhLENBQUMsY0FBYztBQUFDLGtCQUFrQixhQUFhO0FBQUMsMENBQTBDLGtCQUFrQixlQUFlLENBQUMsb0NBQWlKLGtCQUFrQixDQUFDLHlCQUFzRixjQUFjLENBQUMsMERBQTBELFdBQVcsQ0FBQyx1QkFBdUIsZ0JBQWdCLENBQUM7QUFBQyxrQkFBa0IsZUFBZSxDQUFDLGVBQWU7QUFBQyxvQ0FBaUcsWUFBWSxDQUFrSCxxQkFBcUIsQ0FBQyxTQUFTO0FBQUMsY0FBYyxVQUFVO0FBQUMsNEJBQW1GLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsZUFBZTtBQUFDLDJCQUEyQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQjtBQUFDLDJFQUEyRSxjQUFjO0FBQUMsdUJBQXVCLGdCQUFnQjtBQUFDLHlCQUF5QixlQUFlO0FBQUMsMEJBQTBCLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZTtBQUFDLDJCQUF3RixhQUFhO0FBQUMsa0JBQWtCLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0I7QUFBQyxvQ0FBb0MsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUFDLG9CQUFvQixpQkFBaUI7QUFBQyxpQkFBaUIsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUFDLCtDQUErQyxzQ0FBc0M7QUFBQyxpQkFBNkgseUNBQTRHO0FBQUMscUJBQXFCLFNBQVM7QUFBQyxzQ0FBd0UseUJBQXlCO0FBQUMsd0NBQTBFLHlCQUF5QjtBQUFDLG1CQUFvRCx3QkFBd0I7QUFBQyx3QkFBd0IsY0FBYyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0I7QUFBQyx1QkFBdUIsWUFBWTtBQUFDLDJCQUEyQixXQUFXLENBQUMsWUFBWTtBQUFDLHNCQUFzQixXQUFXLENBQUMsWUFBWTtBQUFDLG1CQUFtQixhQUFhLENBQUMsZ0JBQWdCLENBQThELFlBQVksQ0FBc0YsNkJBQTZCO0FBQUMsa0JBQWtCLGFBQWE7QUFBQyxrQkFBa0IsYUFBYTtBQUFDLG9DQUFvQyxjQUFjO0FBQUMsMENBQTBDLGtCQUFrQixlQUFlLENBQUMsb0NBQWlKLGtCQUFrQixDQUFDLDJCQUEyQixPQUFPLENBQUMsMEJBQTBCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9tYXRlcmlhbGl6ZS9jc3MvbWF0ZXJpYWxpemUubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBNYXRlcmlhbGl6ZSB2MS4wLjAgKGh0dHA6Ly9tYXRlcmlhbGl6ZWNzcy5jb20pXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTcgTWF0ZXJpYWxpemVcclxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuLm1hdGVyaWFsaXplLXJlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlNTFjMjMgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLXRleHR7Y29sb3I6I2U1MWMyMyAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I2ZkZWFlYiAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWxpZ2h0ZW4tNXtjb2xvcjojZmRlYWViICFpbXBvcnRhbnR9Lm1hdGVyaWFsaXplLXJlZC5saWdodGVuLTR7YmFja2dyb3VuZC1jb2xvcjojZjhjMWMzICFpbXBvcnRhbnR9Lm1hdGVyaWFsaXplLXJlZC10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNmOGMxYzMgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLmxpZ2h0ZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiNmMzk4OWIgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLXRleHQudGV4dC1saWdodGVuLTN7Y29sb3I6I2YzOTg5YiAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6I2VlNmU3MyAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWxpZ2h0ZW4tMntjb2xvcjojZWU2ZTczICFpbXBvcnRhbnR9Lm1hdGVyaWFsaXplLXJlZC5saWdodGVuLTF7YmFja2dyb3VuZC1jb2xvcjojZWE0NTRiICFpbXBvcnRhbnR9Lm1hdGVyaWFsaXplLXJlZC10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiNlYTQ1NGIgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLmRhcmtlbi0xe2JhY2tncm91bmQtY29sb3I6I2QwMTgxZSAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWRhcmtlbi0xe2NvbG9yOiNkMDE4MWUgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6I2I5MTUxYiAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWRhcmtlbi0ye2NvbG9yOiNiOTE1MWIgIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLmRhcmtlbi0ze2JhY2tncm91bmQtY29sb3I6I2EyMTMxOCAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiNhMjEzMTggIWltcG9ydGFudH0ubWF0ZXJpYWxpemUtcmVkLmRhcmtlbi00e2JhY2tncm91bmQtY29sb3I6IzhiMTAxNCAhaW1wb3J0YW50fS5tYXRlcmlhbGl6ZS1yZWQtdGV4dC50ZXh0LWRhcmtlbi00e2NvbG9yOiM4YjEwMTQgIWltcG9ydGFudH0ucmVke2JhY2tncm91bmQtY29sb3I6I0Y0NDMzNiAhaW1wb3J0YW50fS5yZWQtdGV4dHtjb2xvcjojRjQ0MzM2ICFpbXBvcnRhbnR9LnJlZC5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojRkZFQkVFICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNGRkVCRUUgIWltcG9ydGFudH0ucmVkLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNGRkNERDIgIWltcG9ydGFudH0ucmVkLXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I0ZGQ0REMiAhaW1wb3J0YW50fS5yZWQubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I0VGOUE5QSAhaW1wb3J0YW50fS5yZWQtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojRUY5QTlBICFpbXBvcnRhbnR9LnJlZC5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojRTU3MzczICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiNFNTczNzMgIWltcG9ydGFudH0ucmVkLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiNFRjUzNTAgIWltcG9ydGFudH0ucmVkLXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6I0VGNTM1MCAhaW1wb3J0YW50fS5yZWQuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojRTUzOTM1ICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6I0U1MzkzNSAhaW1wb3J0YW50fS5yZWQuZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojRDMyRjJGICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6I0QzMkYyRiAhaW1wb3J0YW50fS5yZWQuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojQzYyODI4ICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6I0M2MjgyOCAhaW1wb3J0YW50fS5yZWQuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojQjcxQzFDICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6I0I3MUMxQyAhaW1wb3J0YW50fS5yZWQuYWNjZW50LTF7YmFja2dyb3VuZC1jb2xvcjojRkY4QTgwICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I0ZGOEE4MCAhaW1wb3J0YW50fS5yZWQuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojRkY1MjUyICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtYWNjZW50LTJ7Y29sb3I6I0ZGNTI1MiAhaW1wb3J0YW50fS5yZWQuYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojRkYxNzQ0ICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6I0ZGMTc0NCAhaW1wb3J0YW50fS5yZWQuYWNjZW50LTR7YmFja2dyb3VuZC1jb2xvcjojRDUwMDAwICFpbXBvcnRhbnR9LnJlZC10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6I0Q1MDAwMCAhaW1wb3J0YW50fS5waW5re2JhY2tncm91bmQtY29sb3I6I2U5MWU2MyAhaW1wb3J0YW50fS5waW5rLXRleHR7Y29sb3I6I2U5MWU2MyAhaW1wb3J0YW50fS5waW5rLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmY2U0ZWMgIWltcG9ydGFudH0ucGluay10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNmY2U0ZWMgIWltcG9ydGFudH0ucGluay5saWdodGVuLTR7YmFja2dyb3VuZC1jb2xvcjojZjhiYmQwICFpbXBvcnRhbnR9LnBpbmstdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZjhiYmQwICFpbXBvcnRhbnR9LnBpbmsubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2Y0OGZiMSAhaW1wb3J0YW50fS5waW5rLXRleHQudGV4dC1saWdodGVuLTN7Y29sb3I6I2Y0OGZiMSAhaW1wb3J0YW50fS5waW5rLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNmMDYyOTIgIWltcG9ydGFudH0ucGluay10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiNmMDYyOTIgIWltcG9ydGFudH0ucGluay5saWdodGVuLTF7YmFja2dyb3VuZC1jb2xvcjojZWM0MDdhICFpbXBvcnRhbnR9LnBpbmstdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojZWM0MDdhICFpbXBvcnRhbnR9LnBpbmsuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojZDgxYjYwICFpbXBvcnRhbnR9LnBpbmstdGV4dC50ZXh0LWRhcmtlbi0xe2NvbG9yOiNkODFiNjAgIWltcG9ydGFudH0ucGluay5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNjMjE4NWIgIWltcG9ydGFudH0ucGluay10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6I2MyMTg1YiAhaW1wb3J0YW50fS5waW5rLmRhcmtlbi0ze2JhY2tncm91bmQtY29sb3I6I2FkMTQ1NyAhaW1wb3J0YW50fS5waW5rLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojYWQxNDU3ICFpbXBvcnRhbnR9LnBpbmsuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojODgwZTRmICFpbXBvcnRhbnR9LnBpbmstdGV4dC50ZXh0LWRhcmtlbi00e2NvbG9yOiM4ODBlNGYgIWltcG9ydGFudH0ucGluay5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwYWIgIWltcG9ydGFudH0ucGluay10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I2ZmODBhYiAhaW1wb3J0YW50fS5waW5rLmFjY2VudC0ye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MSAhaW1wb3J0YW50fS5waW5rLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojZmY0MDgxICFpbXBvcnRhbnR9LnBpbmsuYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojZjUwMDU3ICFpbXBvcnRhbnR9LnBpbmstdGV4dC50ZXh0LWFjY2VudC0ze2NvbG9yOiNmNTAwNTcgIWltcG9ydGFudH0ucGluay5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiNjNTExNjIgIWltcG9ydGFudH0ucGluay10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6I2M1MTE2MiAhaW1wb3J0YW50fS5wdXJwbGV7YmFja2dyb3VuZC1jb2xvcjojOWMyN2IwICFpbXBvcnRhbnR9LnB1cnBsZS10ZXh0e2NvbG9yOiM5YzI3YjAgIWltcG9ydGFudH0ucHVycGxlLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmM2U1ZjUgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2YzZTVmNSAhaW1wb3J0YW50fS5wdXJwbGUubGlnaHRlbi00e2JhY2tncm91bmQtY29sb3I6I2UxYmVlNyAhaW1wb3J0YW50fS5wdXJwbGUtdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZTFiZWU3ICFpbXBvcnRhbnR9LnB1cnBsZS5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojY2U5M2Q4ICFpbXBvcnRhbnR9LnB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi0ze2NvbG9yOiNjZTkzZDggIWltcG9ydGFudH0ucHVycGxlLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNiYTY4YzggIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6I2JhNjhjOCAhaW1wb3J0YW50fS5wdXJwbGUubGlnaHRlbi0xe2JhY2tncm91bmQtY29sb3I6I2FiNDdiYyAhaW1wb3J0YW50fS5wdXJwbGUtdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojYWI0N2JjICFpbXBvcnRhbnR9LnB1cnBsZS5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiM4ZTI0YWEgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1kYXJrZW4tMXtjb2xvcjojOGUyNGFhICFpbXBvcnRhbnR9LnB1cnBsZS5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiM3YjFmYTIgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojN2IxZmEyICFpbXBvcnRhbnR9LnB1cnBsZS5kYXJrZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiM2YTFiOWEgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojNmExYjlhICFpbXBvcnRhbnR9LnB1cnBsZS5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiM0YTE0OGMgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1kYXJrZW4tNHtjb2xvcjojNGExNDhjICFpbXBvcnRhbnR9LnB1cnBsZS5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiNlYTgwZmMgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojZWE4MGZjICFpbXBvcnRhbnR9LnB1cnBsZS5hY2NlbnQtMntiYWNrZ3JvdW5kLWNvbG9yOiNlMDQwZmIgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojZTA0MGZiICFpbXBvcnRhbnR9LnB1cnBsZS5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiNkNTAwZjkgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1hY2NlbnQtM3tjb2xvcjojZDUwMGY5ICFpbXBvcnRhbnR9LnB1cnBsZS5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiNhMGYgIWltcG9ydGFudH0ucHVycGxlLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojYTBmICFpbXBvcnRhbnR9LmRlZXAtcHVycGxle2JhY2tncm91bmQtY29sb3I6IzY3M2FiNyAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0e2NvbG9yOiM2NzNhYjcgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I2VkZTdmNiAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNlZGU3ZjYgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUubGlnaHRlbi00e2JhY2tncm91bmQtY29sb3I6I2QxYzRlOSAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNkMWM0ZTkgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2IzOWRkYiAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi0ze2NvbG9yOiNiMzlkZGIgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6Izk1NzVjZCAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiM5NTc1Y2QgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUubGlnaHRlbi0xe2JhY2tncm91bmQtY29sb3I6IzdlNTdjMiAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiM3ZTU3YzIgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojNWUzNWIxICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLXRleHQudGV4dC1kYXJrZW4tMXtjb2xvcjojNWUzNWIxICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzUxMmRhOCAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6IzUxMmRhOCAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS5kYXJrZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiM0NTI3YTAgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUtdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiM0NTI3YTAgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojMzExYjkyICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLXRleHQudGV4dC1kYXJrZW4tNHtjb2xvcjojMzExYjkyICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6I2IzODhmZiAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I2IzODhmZiAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS5hY2NlbnQtMntiYWNrZ3JvdW5kLWNvbG9yOiM3YzRkZmYgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUtdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiM3YzRkZmYgIWltcG9ydGFudH0uZGVlcC1wdXJwbGUuYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojNjUxZmZmICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLXRleHQudGV4dC1hY2NlbnQtM3tjb2xvcjojNjUxZmZmICFpbXBvcnRhbnR9LmRlZXAtcHVycGxlLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzYyMDBlYSAhaW1wb3J0YW50fS5kZWVwLXB1cnBsZS10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6IzYyMDBlYSAhaW1wb3J0YW50fS5pbmRpZ297YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1ICFpbXBvcnRhbnR9LmluZGlnby10ZXh0e2NvbG9yOiMzZjUxYjUgIWltcG9ydGFudH0uaW5kaWdvLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGVhZjYgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2U4ZWFmNiAhaW1wb3J0YW50fS5pbmRpZ28ubGlnaHRlbi00e2JhY2tncm91bmQtY29sb3I6I2M1Y2FlOSAhaW1wb3J0YW50fS5pbmRpZ28tdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojYzVjYWU5ICFpbXBvcnRhbnR9LmluZGlnby5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojOWZhOGRhICFpbXBvcnRhbnR9LmluZGlnby10ZXh0LnRleHQtbGlnaHRlbi0ze2NvbG9yOiM5ZmE4ZGEgIWltcG9ydGFudH0uaW5kaWdvLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiM3OTg2Y2IgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6Izc5ODZjYiAhaW1wb3J0YW50fS5pbmRpZ28ubGlnaHRlbi0xe2JhY2tncm91bmQtY29sb3I6IzVjNmJjMCAhaW1wb3J0YW50fS5pbmRpZ28tdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojNWM2YmMwICFpbXBvcnRhbnR9LmluZGlnby5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMzOTQ5YWIgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1kYXJrZW4tMXtjb2xvcjojMzk0OWFiICFpbXBvcnRhbnR9LmluZGlnby5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiMzMDNmOWYgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojMzAzZjlmICFpbXBvcnRhbnR9LmluZGlnby5kYXJrZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiMyODM1OTMgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojMjgzNTkzICFpbXBvcnRhbnR9LmluZGlnby5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMxYTIzN2UgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1kYXJrZW4tNHtjb2xvcjojMWEyMzdlICFpbXBvcnRhbnR9LmluZGlnby5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiM4YzllZmYgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojOGM5ZWZmICFpbXBvcnRhbnR9LmluZGlnby5hY2NlbnQtMntiYWNrZ3JvdW5kLWNvbG9yOiM1MzZkZmUgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojNTM2ZGZlICFpbXBvcnRhbnR9LmluZGlnby5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiMzZDVhZmUgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1hY2NlbnQtM3tjb2xvcjojM2Q1YWZlICFpbXBvcnRhbnR9LmluZGlnby5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiMzMDRmZmUgIWltcG9ydGFudH0uaW5kaWdvLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojMzA0ZmZlICFpbXBvcnRhbnR9LmJsdWV7YmFja2dyb3VuZC1jb2xvcjojMjE5NkYzICFpbXBvcnRhbnR9LmJsdWUtdGV4dHtjb2xvcjojMjE5NkYzICFpbXBvcnRhbnR9LmJsdWUubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I0UzRjJGRCAhaW1wb3J0YW50fS5ibHVlLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I0UzRjJGRCAhaW1wb3J0YW50fS5ibHVlLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNCQkRFRkIgIWltcG9ydGFudH0uYmx1ZS10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNCQkRFRkIgIWltcG9ydGFudH0uYmx1ZS5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojOTBDQUY5ICFpbXBvcnRhbnR9LmJsdWUtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojOTBDQUY5ICFpbXBvcnRhbnR9LmJsdWUubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6IzY0QjVGNiAhaW1wb3J0YW50fS5ibHVlLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6IzY0QjVGNiAhaW1wb3J0YW50fS5ibHVlLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiM0MkE1RjUgIWltcG9ydGFudH0uYmx1ZS10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiM0MkE1RjUgIWltcG9ydGFudH0uYmx1ZS5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMxRTg4RTUgIWltcG9ydGFudH0uYmx1ZS10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzFFODhFNSAhaW1wb3J0YW50fS5ibHVlLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzE5NzZEMiAhaW1wb3J0YW50fS5ibHVlLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojMTk3NkQyICFpbXBvcnRhbnR9LmJsdWUuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojMTU2NUMwICFpbXBvcnRhbnR9LmJsdWUtdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiMxNTY1QzAgIWltcG9ydGFudH0uYmx1ZS5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMwRDQ3QTEgIWltcG9ydGFudH0uYmx1ZS10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzBENDdBMSAhaW1wb3J0YW50fS5ibHVlLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6IzgyQjFGRiAhaW1wb3J0YW50fS5ibHVlLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojODJCMUZGICFpbXBvcnRhbnR9LmJsdWUuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojNDQ4QUZGICFpbXBvcnRhbnR9LmJsdWUtdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiM0NDhBRkYgIWltcG9ydGFudH0uYmx1ZS5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiMyOTc5RkYgIWltcG9ydGFudH0uYmx1ZS10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6IzI5NzlGRiAhaW1wb3J0YW50fS5ibHVlLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzI5NjJGRiAhaW1wb3J0YW50fS5ibHVlLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojMjk2MkZGICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWV7YmFja2dyb3VuZC1jb2xvcjojMDNhOWY0ICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUtdGV4dHtjb2xvcjojMDNhOWY0ICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I2UxZjVmZSAhaW1wb3J0YW50fS5saWdodC1ibHVlLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2UxZjVmZSAhaW1wb3J0YW50fS5saWdodC1ibHVlLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNiM2U1ZmMgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNiM2U1ZmMgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojODFkNGZhICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojODFkNGZhICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6IzRmYzNmNyAhaW1wb3J0YW50fS5saWdodC1ibHVlLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6IzRmYzNmNyAhaW1wb3J0YW50fS5saWdodC1ibHVlLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMyOWI2ZjYgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiMyOWI2ZjYgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMwMzliZTUgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzAzOWJlNSAhaW1wb3J0YW50fS5saWdodC1ibHVlLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzAyODhkMSAhaW1wb3J0YW50fS5saWdodC1ibHVlLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojMDI4OGQxICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojMDI3N2JkICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUtdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiMwMjc3YmQgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMwMTU3OWIgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzAxNTc5YiAhaW1wb3J0YW50fS5saWdodC1ibHVlLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6IzgwZDhmZiAhaW1wb3J0YW50fS5saWdodC1ibHVlLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojODBkOGZmICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojNDBjNGZmICFpbXBvcnRhbnR9LmxpZ2h0LWJsdWUtdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiM0MGM0ZmYgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiMwMGIwZmYgIWltcG9ydGFudH0ubGlnaHQtYmx1ZS10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6IzAwYjBmZiAhaW1wb3J0YW50fS5saWdodC1ibHVlLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzAwOTFlYSAhaW1wb3J0YW50fS5saWdodC1ibHVlLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojMDA5MWVhICFpbXBvcnRhbnR9LmN5YW57YmFja2dyb3VuZC1jb2xvcjojMDBiY2Q0ICFpbXBvcnRhbnR9LmN5YW4tdGV4dHtjb2xvcjojMDBiY2Q0ICFpbXBvcnRhbnR9LmN5YW4ubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I2UwZjdmYSAhaW1wb3J0YW50fS5jeWFuLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2UwZjdmYSAhaW1wb3J0YW50fS5jeWFuLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNiMmViZjIgIWltcG9ydGFudH0uY3lhbi10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNiMmViZjIgIWltcG9ydGFudH0uY3lhbi5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojODBkZWVhICFpbXBvcnRhbnR9LmN5YW4tdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojODBkZWVhICFpbXBvcnRhbnR9LmN5YW4ubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6IzRkZDBlMSAhaW1wb3J0YW50fS5jeWFuLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6IzRkZDBlMSAhaW1wb3J0YW50fS5jeWFuLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMyNmM2ZGEgIWltcG9ydGFudH0uY3lhbi10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiMyNmM2ZGEgIWltcG9ydGFudH0uY3lhbi5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjYzEgIWltcG9ydGFudH0uY3lhbi10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzAwYWNjMSAhaW1wb3J0YW50fS5jeWFuLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzAwOTdhNyAhaW1wb3J0YW50fS5jeWFuLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojMDA5N2E3ICFpbXBvcnRhbnR9LmN5YW4uZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojMDA4MzhmICFpbXBvcnRhbnR9LmN5YW4tdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiMwMDgzOGYgIWltcG9ydGFudH0uY3lhbi5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDYwNjQgIWltcG9ydGFudH0uY3lhbi10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzAwNjA2NCAhaW1wb3J0YW50fS5jeWFuLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6Izg0ZmZmZiAhaW1wb3J0YW50fS5jeWFuLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojODRmZmZmICFpbXBvcnRhbnR9LmN5YW4uYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojMThmZmZmICFpbXBvcnRhbnR9LmN5YW4tdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiMxOGZmZmYgIWltcG9ydGFudH0uY3lhbi5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiMwMGU1ZmYgIWltcG9ydGFudH0uY3lhbi10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6IzAwZTVmZiAhaW1wb3J0YW50fS5jeWFuLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzAwYjhkNCAhaW1wb3J0YW50fS5jeWFuLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojMDBiOGQ0ICFpbXBvcnRhbnR9LnRlYWx7YmFja2dyb3VuZC1jb2xvcjojMDA5Njg4ICFpbXBvcnRhbnR9LnRlYWwtdGV4dHtjb2xvcjojMDA5Njg4ICFpbXBvcnRhbnR9LnRlYWwubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I2UwZjJmMSAhaW1wb3J0YW50fS50ZWFsLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2UwZjJmMSAhaW1wb3J0YW50fS50ZWFsLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNiMmRmZGIgIWltcG9ydGFudH0udGVhbC10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNiMmRmZGIgIWltcG9ydGFudH0udGVhbC5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojODBjYmM0ICFpbXBvcnRhbnR9LnRlYWwtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojODBjYmM0ICFpbXBvcnRhbnR9LnRlYWwubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6IzRkYjZhYyAhaW1wb3J0YW50fS50ZWFsLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6IzRkYjZhYyAhaW1wb3J0YW50fS50ZWFsLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWEgIWltcG9ydGFudH0udGVhbC10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiMyNmE2OWEgIWltcG9ydGFudH0udGVhbC5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg5N2IgIWltcG9ydGFudH0udGVhbC10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzAwODk3YiAhaW1wb3J0YW50fS50ZWFsLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzAwNzk2YiAhaW1wb3J0YW50fS50ZWFsLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojMDA3OTZiICFpbXBvcnRhbnR9LnRlYWwuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojMDA2OTVjICFpbXBvcnRhbnR9LnRlYWwtdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiMwMDY5NWMgIWltcG9ydGFudH0udGVhbC5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDRkNDAgIWltcG9ydGFudH0udGVhbC10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzAwNGQ0MCAhaW1wb3J0YW50fS50ZWFsLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6I2E3ZmZlYiAhaW1wb3J0YW50fS50ZWFsLXRleHQudGV4dC1hY2NlbnQtMXtjb2xvcjojYTdmZmViICFpbXBvcnRhbnR9LnRlYWwuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojNjRmZmRhICFpbXBvcnRhbnR9LnRlYWwtdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiM2NGZmZGEgIWltcG9ydGFudH0udGVhbC5hY2NlbnQtM3tiYWNrZ3JvdW5kLWNvbG9yOiMxZGU5YjYgIWltcG9ydGFudH0udGVhbC10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6IzFkZTliNiAhaW1wb3J0YW50fS50ZWFsLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzAwYmZhNSAhaW1wb3J0YW50fS50ZWFsLXRleHQudGV4dC1hY2NlbnQtNHtjb2xvcjojMDBiZmE1ICFpbXBvcnRhbnR9LmdyZWVue2JhY2tncm91bmQtY29sb3I6IzRDQUY1MCAhaW1wb3J0YW50fS5ncmVlbi10ZXh0e2NvbG9yOiM0Q0FGNTAgIWltcG9ydGFudH0uZ3JlZW4ubGlnaHRlbi01e2JhY2tncm91bmQtY29sb3I6I0U4RjVFOSAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNFOEY1RTkgIWltcG9ydGFudH0uZ3JlZW4ubGlnaHRlbi00e2JhY2tncm91bmQtY29sb3I6I0M4RTZDOSAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtbGlnaHRlbi00e2NvbG9yOiNDOEU2QzkgIWltcG9ydGFudH0uZ3JlZW4ubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I0E1RDZBNyAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtbGlnaHRlbi0ze2NvbG9yOiNBNUQ2QTcgIWltcG9ydGFudH0uZ3JlZW4ubGlnaHRlbi0ye2JhY2tncm91bmQtY29sb3I6IzgxQzc4NCAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiM4MUM3ODQgIWltcG9ydGFudH0uZ3JlZW4ubGlnaHRlbi0xe2JhY2tncm91bmQtY29sb3I6IzY2QkI2QSAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtbGlnaHRlbi0xe2NvbG9yOiM2NkJCNkEgIWltcG9ydGFudH0uZ3JlZW4uZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojNDNBMDQ3ICFpbXBvcnRhbnR9LmdyZWVuLXRleHQudGV4dC1kYXJrZW4tMXtjb2xvcjojNDNBMDQ3ICFpbXBvcnRhbnR9LmdyZWVuLmRhcmtlbi0ye2JhY2tncm91bmQtY29sb3I6IzM4OEUzQyAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6IzM4OEUzQyAhaW1wb3J0YW50fS5ncmVlbi5kYXJrZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiMyRTdEMzIgIWltcG9ydGFudH0uZ3JlZW4tdGV4dC50ZXh0LWRhcmtlbi0ze2NvbG9yOiMyRTdEMzIgIWltcG9ydGFudH0uZ3JlZW4uZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojMUI1RTIwICFpbXBvcnRhbnR9LmdyZWVuLXRleHQudGV4dC1kYXJrZW4tNHtjb2xvcjojMUI1RTIwICFpbXBvcnRhbnR9LmdyZWVuLmFjY2VudC0xe2JhY2tncm91bmQtY29sb3I6I0I5RjZDQSAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I0I5RjZDQSAhaW1wb3J0YW50fS5ncmVlbi5hY2NlbnQtMntiYWNrZ3JvdW5kLWNvbG9yOiM2OUYwQUUgIWltcG9ydGFudH0uZ3JlZW4tdGV4dC50ZXh0LWFjY2VudC0ye2NvbG9yOiM2OUYwQUUgIWltcG9ydGFudH0uZ3JlZW4uYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojMDBFNjc2ICFpbXBvcnRhbnR9LmdyZWVuLXRleHQudGV4dC1hY2NlbnQtM3tjb2xvcjojMDBFNjc2ICFpbXBvcnRhbnR9LmdyZWVuLmFjY2VudC00e2JhY2tncm91bmQtY29sb3I6IzAwQzg1MyAhaW1wb3J0YW50fS5ncmVlbi10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6IzAwQzg1MyAhaW1wb3J0YW50fS5saWdodC1ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGEgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dHtjb2xvcjojOGJjMzRhICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWY4ZTkgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWxpZ2h0ZW4tNXtjb2xvcjojZjFmOGU5ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2VkYzggIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZGNlZGM4ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmxpZ2h0ZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiNjNWUxYTUgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojYzVlMWE1ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNhZWQ1ODEgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWxpZ2h0ZW4tMntjb2xvcjojYWVkNTgxICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiM5Y2NjNjUgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojOWNjYzY1ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmRhcmtlbi0xe2JhY2tncm91bmQtY29sb3I6IzdjYjM0MiAhaW1wb3J0YW50fS5saWdodC1ncmVlbi10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzdjYjM0MiAhaW1wb3J0YW50fS5saWdodC1ncmVlbi5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiM2ODlmMzggIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWRhcmtlbi0ye2NvbG9yOiM2ODlmMzggIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4uZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojNTU4YjJmICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojNTU4YjJmICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmRhcmtlbi00e2JhY2tncm91bmQtY29sb3I6IzMzNjkxZSAhaW1wb3J0YW50fS5saWdodC1ncmVlbi10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzMzNjkxZSAhaW1wb3J0YW50fS5saWdodC1ncmVlbi5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiNjY2ZmOTAgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWFjY2VudC0xe2NvbG9yOiNjY2ZmOTAgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4uYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojYjJmZjU5ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojYjJmZjU5ICFpbXBvcnRhbnR9LmxpZ2h0LWdyZWVuLmFjY2VudC0ze2JhY2tncm91bmQtY29sb3I6Izc2ZmYwMyAhaW1wb3J0YW50fS5saWdodC1ncmVlbi10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6Izc2ZmYwMyAhaW1wb3J0YW50fS5saWdodC1ncmVlbi5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiM2NGRkMTcgIWltcG9ydGFudH0ubGlnaHQtZ3JlZW4tdGV4dC50ZXh0LWFjY2VudC00e2NvbG9yOiM2NGRkMTcgIWltcG9ydGFudH0ubGltZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZGRjMzkgIWltcG9ydGFudH0ubGltZS10ZXh0e2NvbG9yOiNjZGRjMzkgIWltcG9ydGFudH0ubGltZS5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojZjlmYmU3ICFpbXBvcnRhbnR9LmxpbWUtdGV4dC50ZXh0LWxpZ2h0ZW4tNXtjb2xvcjojZjlmYmU3ICFpbXBvcnRhbnR9LmxpbWUubGlnaHRlbi00e2JhY2tncm91bmQtY29sb3I6I2YwZjRjMyAhaW1wb3J0YW50fS5saW1lLXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I2YwZjRjMyAhaW1wb3J0YW50fS5saW1lLmxpZ2h0ZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiNlNmVlOWMgIWltcG9ydGFudH0ubGltZS10ZXh0LnRleHQtbGlnaHRlbi0ze2NvbG9yOiNlNmVlOWMgIWltcG9ydGFudH0ubGltZS5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojZGNlNzc1ICFpbXBvcnRhbnR9LmxpbWUtdGV4dC50ZXh0LWxpZ2h0ZW4tMntjb2xvcjojZGNlNzc1ICFpbXBvcnRhbnR9LmxpbWUubGlnaHRlbi0xe2JhY2tncm91bmQtY29sb3I6I2Q0ZTE1NyAhaW1wb3J0YW50fS5saW1lLXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6I2Q0ZTE1NyAhaW1wb3J0YW50fS5saW1lLmRhcmtlbi0xe2JhY2tncm91bmQtY29sb3I6I2MwY2EzMyAhaW1wb3J0YW50fS5saW1lLXRleHQudGV4dC1kYXJrZW4tMXtjb2xvcjojYzBjYTMzICFpbXBvcnRhbnR9LmxpbWUuZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojYWZiNDJiICFpbXBvcnRhbnR9LmxpbWUtdGV4dC50ZXh0LWRhcmtlbi0ye2NvbG9yOiNhZmI0MmIgIWltcG9ydGFudH0ubGltZS5kYXJrZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiM5ZTlkMjQgIWltcG9ydGFudH0ubGltZS10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6IzllOWQyNCAhaW1wb3J0YW50fS5saW1lLmRhcmtlbi00e2JhY2tncm91bmQtY29sb3I6IzgyNzcxNyAhaW1wb3J0YW50fS5saW1lLXRleHQudGV4dC1kYXJrZW4tNHtjb2xvcjojODI3NzE3ICFpbXBvcnRhbnR9LmxpbWUuYWNjZW50LTF7YmFja2dyb3VuZC1jb2xvcjojZjRmZjgxICFpbXBvcnRhbnR9LmxpbWUtdGV4dC50ZXh0LWFjY2VudC0xe2NvbG9yOiNmNGZmODEgIWltcG9ydGFudH0ubGltZS5hY2NlbnQtMntiYWNrZ3JvdW5kLWNvbG9yOiNlZWZmNDEgIWltcG9ydGFudH0ubGltZS10ZXh0LnRleHQtYWNjZW50LTJ7Y29sb3I6I2VlZmY0MSAhaW1wb3J0YW50fS5saW1lLmFjY2VudC0ze2JhY2tncm91bmQtY29sb3I6I2M2ZmYwMCAhaW1wb3J0YW50fS5saW1lLXRleHQudGV4dC1hY2NlbnQtM3tjb2xvcjojYzZmZjAwICFpbXBvcnRhbnR9LmxpbWUuYWNjZW50LTR7YmFja2dyb3VuZC1jb2xvcjojYWVlYTAwICFpbXBvcnRhbnR9LmxpbWUtdGV4dC50ZXh0LWFjY2VudC00e2NvbG9yOiNhZWVhMDAgIWltcG9ydGFudH0ueWVsbG93e2JhY2tncm91bmQtY29sb3I6I2ZmZWIzYiAhaW1wb3J0YW50fS55ZWxsb3ctdGV4dHtjb2xvcjojZmZlYjNiICFpbXBvcnRhbnR9LnllbGxvdy5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojZmZmZGU3ICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNmZmZkZTcgIWltcG9ydGFudH0ueWVsbG93LmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY5YzQgIWltcG9ydGFudH0ueWVsbG93LXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I2ZmZjljNCAhaW1wb3J0YW50fS55ZWxsb3cubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2ZmZjU5ZCAhaW1wb3J0YW50fS55ZWxsb3ctdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojZmZmNTlkICFpbXBvcnRhbnR9LnllbGxvdy5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojZmZmMTc2ICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiNmZmYxNzYgIWltcG9ydGFudH0ueWVsbG93LmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlNTggIWltcG9ydGFudH0ueWVsbG93LXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6I2ZmZWU1OCAhaW1wb3J0YW50fS55ZWxsb3cuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojZmRkODM1ICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6I2ZkZDgzNSAhaW1wb3J0YW50fS55ZWxsb3cuZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojZmJjMDJkICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6I2ZiYzAyZCAhaW1wb3J0YW50fS55ZWxsb3cuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojZjlhODI1ICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6I2Y5YTgyNSAhaW1wb3J0YW50fS55ZWxsb3cuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojZjU3ZjE3ICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6I2Y1N2YxNyAhaW1wb3J0YW50fS55ZWxsb3cuYWNjZW50LTF7YmFja2dyb3VuZC1jb2xvcjojZmZmZjhkICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I2ZmZmY4ZCAhaW1wb3J0YW50fS55ZWxsb3cuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojZmYwICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtYWNjZW50LTJ7Y29sb3I6I2ZmMCAhaW1wb3J0YW50fS55ZWxsb3cuYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojZmZlYTAwICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6I2ZmZWEwMCAhaW1wb3J0YW50fS55ZWxsb3cuYWNjZW50LTR7YmFja2dyb3VuZC1jb2xvcjojZmZkNjAwICFpbXBvcnRhbnR9LnllbGxvdy10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6I2ZmZDYwMCAhaW1wb3J0YW50fS5hbWJlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxMDcgIWltcG9ydGFudH0uYW1iZXItdGV4dHtjb2xvcjojZmZjMTA3ICFpbXBvcnRhbnR9LmFtYmVyLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY4ZTEgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWxpZ2h0ZW4tNXtjb2xvcjojZmZmOGUxICFpbXBvcnRhbnR9LmFtYmVyLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmVjYjMgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZmZlY2IzICFpbXBvcnRhbnR9LmFtYmVyLmxpZ2h0ZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmUwODIgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojZmZlMDgyICFpbXBvcnRhbnR9LmFtYmVyLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ1NGYgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWxpZ2h0ZW4tMntjb2xvcjojZmZkNTRmICFpbXBvcnRhbnR9LmFtYmVyLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmNhMjggIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojZmZjYTI4ICFpbXBvcnRhbnR9LmFtYmVyLmRhcmtlbi0xe2JhY2tncm91bmQtY29sb3I6I2ZmYjMwMCAhaW1wb3J0YW50fS5hbWJlci10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6I2ZmYjMwMCAhaW1wb3J0YW50fS5hbWJlci5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNmZmEwMDAgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWRhcmtlbi0ye2NvbG9yOiNmZmEwMDAgIWltcG9ydGFudH0uYW1iZXIuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojZmY4ZjAwICFpbXBvcnRhbnR9LmFtYmVyLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojZmY4ZjAwICFpbXBvcnRhbnR9LmFtYmVyLmRhcmtlbi00e2JhY2tncm91bmQtY29sb3I6I2ZmNmYwMCAhaW1wb3J0YW50fS5hbWJlci10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6I2ZmNmYwMCAhaW1wb3J0YW50fS5hbWJlci5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmU1N2YgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWFjY2VudC0xe2NvbG9yOiNmZmU1N2YgIWltcG9ydGFudH0uYW1iZXIuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwICFpbXBvcnRhbnR9LmFtYmVyLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojZmZkNzQwICFpbXBvcnRhbnR9LmFtYmVyLmFjY2VudC0ze2JhY2tncm91bmQtY29sb3I6I2ZmYzQwMCAhaW1wb3J0YW50fS5hbWJlci10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6I2ZmYzQwMCAhaW1wb3J0YW50fS5hbWJlci5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmFiMDAgIWltcG9ydGFudH0uYW1iZXItdGV4dC50ZXh0LWFjY2VudC00e2NvbG9yOiNmZmFiMDAgIWltcG9ydGFudH0ub3Jhbmdle2JhY2tncm91bmQtY29sb3I6I2ZmOTgwMCAhaW1wb3J0YW50fS5vcmFuZ2UtdGV4dHtjb2xvcjojZmY5ODAwICFpbXBvcnRhbnR9Lm9yYW5nZS5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojZmZmM2UwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNmZmYzZTAgIWltcG9ydGFudH0ub3JhbmdlLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmUwYjIgIWltcG9ydGFudH0ub3JhbmdlLXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I2ZmZTBiMiAhaW1wb3J0YW50fS5vcmFuZ2UubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2ZmY2M4MCAhaW1wb3J0YW50fS5vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojZmZjYzgwICFpbXBvcnRhbnR9Lm9yYW5nZS5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojZmZiNzRkICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiNmZmI3NGQgIWltcG9ydGFudH0ub3JhbmdlLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmE3MjYgIWltcG9ydGFudH0ub3JhbmdlLXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6I2ZmYTcyNiAhaW1wb3J0YW50fS5vcmFuZ2UuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojZmI4YzAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6I2ZiOGMwMCAhaW1wb3J0YW50fS5vcmFuZ2UuZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojZjU3YzAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6I2Y1N2MwMCAhaW1wb3J0YW50fS5vcmFuZ2UuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojZWY2YzAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6I2VmNmMwMCAhaW1wb3J0YW50fS5vcmFuZ2UuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojZTY1MTAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6I2U2NTEwMCAhaW1wb3J0YW50fS5vcmFuZ2UuYWNjZW50LTF7YmFja2dyb3VuZC1jb2xvcjojZmZkMTgwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtYWNjZW50LTF7Y29sb3I6I2ZmZDE4MCAhaW1wb3J0YW50fS5vcmFuZ2UuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojZmZhYjQwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtYWNjZW50LTJ7Y29sb3I6I2ZmYWI0MCAhaW1wb3J0YW50fS5vcmFuZ2UuYWNjZW50LTN7YmFja2dyb3VuZC1jb2xvcjojZmY5MTAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6I2ZmOTEwMCAhaW1wb3J0YW50fS5vcmFuZ2UuYWNjZW50LTR7YmFja2dyb3VuZC1jb2xvcjojZmY2ZDAwICFpbXBvcnRhbnR9Lm9yYW5nZS10ZXh0LnRleHQtYWNjZW50LTR7Y29sb3I6I2ZmNmQwMCAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjU3MjIgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dHtjb2xvcjojZmY1NzIyICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmYmU5ZTcgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tNXtjb2xvcjojZmJlOWU3ICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjYmMgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZmZjY2JjICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmxpZ2h0ZW4tM3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmFiOTEgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojZmZhYjkxICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNmZjhhNjUgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tMntjb2xvcjojZmY4YTY1ICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjcwNDMgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojZmY3MDQzICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmRhcmtlbi0xe2JhY2tncm91bmQtY29sb3I6I2Y0NTExZSAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6I2Y0NTExZSAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNlNjRhMTkgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWRhcmtlbi0ye2NvbG9yOiNlNjRhMTkgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojZDg0MzE1ICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojZDg0MzE1ICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmRhcmtlbi00e2JhY2tncm91bmQtY29sb3I6I2JmMzYwYyAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6I2JmMzYwYyAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS5hY2NlbnQtMXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjllODAgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWFjY2VudC0xe2NvbG9yOiNmZjllODAgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UuYWNjZW50LTJ7YmFja2dyb3VuZC1jb2xvcjojZmY2ZTQwICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLXRleHQudGV4dC1hY2NlbnQtMntjb2xvcjojZmY2ZTQwICFpbXBvcnRhbnR9LmRlZXAtb3JhbmdlLmFjY2VudC0ze2JhY2tncm91bmQtY29sb3I6I2ZmM2QwMCAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS10ZXh0LnRleHQtYWNjZW50LTN7Y29sb3I6I2ZmM2QwMCAhaW1wb3J0YW50fS5kZWVwLW9yYW5nZS5hY2NlbnQtNHtiYWNrZ3JvdW5kLWNvbG9yOiNkZDJjMDAgIWltcG9ydGFudH0uZGVlcC1vcmFuZ2UtdGV4dC50ZXh0LWFjY2VudC00e2NvbG9yOiNkZDJjMDAgIWltcG9ydGFudH0uYnJvd257YmFja2dyb3VuZC1jb2xvcjojNzk1NTQ4ICFpbXBvcnRhbnR9LmJyb3duLXRleHR7Y29sb3I6Izc5NTU0OCAhaW1wb3J0YW50fS5icm93bi5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojZWZlYmU5ICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1saWdodGVuLTV7Y29sb3I6I2VmZWJlOSAhaW1wb3J0YW50fS5icm93bi5saWdodGVuLTR7YmFja2dyb3VuZC1jb2xvcjojZDdjY2M4ICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I2Q3Y2NjOCAhaW1wb3J0YW50fS5icm93bi5saWdodGVuLTN7YmFja2dyb3VuZC1jb2xvcjojYmNhYWE0ICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1saWdodGVuLTN7Y29sb3I6I2JjYWFhNCAhaW1wb3J0YW50fS5icm93bi5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojYTE4ODdmICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1saWdodGVuLTJ7Y29sb3I6I2ExODg3ZiAhaW1wb3J0YW50fS5icm93bi5saWdodGVuLTF7YmFja2dyb3VuZC1jb2xvcjojOGQ2ZTYzICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6IzhkNmU2MyAhaW1wb3J0YW50fS5icm93bi5kYXJrZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiM2ZDRjNDEgIWltcG9ydGFudH0uYnJvd24tdGV4dC50ZXh0LWRhcmtlbi0xe2NvbG9yOiM2ZDRjNDEgIWltcG9ydGFudH0uYnJvd24uZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojNWQ0MDM3ICFpbXBvcnRhbnR9LmJyb3duLXRleHQudGV4dC1kYXJrZW4tMntjb2xvcjojNWQ0MDM3ICFpbXBvcnRhbnR9LmJyb3duLmRhcmtlbi0ze2JhY2tncm91bmQtY29sb3I6IzRlMzQyZSAhaW1wb3J0YW50fS5icm93bi10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6IzRlMzQyZSAhaW1wb3J0YW50fS5icm93bi5kYXJrZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiMzZTI3MjMgIWltcG9ydGFudH0uYnJvd24tdGV4dC50ZXh0LWRhcmtlbi00e2NvbG9yOiMzZTI3MjMgIWltcG9ydGFudH0uYmx1ZS1ncmV5e2JhY2tncm91bmQtY29sb3I6IzYwN2Q4YiAhaW1wb3J0YW50fS5ibHVlLWdyZXktdGV4dHtjb2xvcjojNjA3ZDhiICFpbXBvcnRhbnR9LmJsdWUtZ3JleS5saWdodGVuLTV7YmFja2dyb3VuZC1jb2xvcjojZWNlZmYxICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNlY2VmZjEgIWltcG9ydGFudH0uYmx1ZS1ncmV5LmxpZ2h0ZW4tNHtiYWNrZ3JvdW5kLWNvbG9yOiNjZmQ4ZGMgIWltcG9ydGFudH0uYmx1ZS1ncmV5LXRleHQudGV4dC1saWdodGVuLTR7Y29sb3I6I2NmZDhkYyAhaW1wb3J0YW50fS5ibHVlLWdyZXkubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2IwYmVjNSAhaW1wb3J0YW50fS5ibHVlLWdyZXktdGV4dC50ZXh0LWxpZ2h0ZW4tM3tjb2xvcjojYjBiZWM1ICFpbXBvcnRhbnR9LmJsdWUtZ3JleS5saWdodGVuLTJ7YmFja2dyb3VuZC1jb2xvcjojOTBhNGFlICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiM5MGE0YWUgIWltcG9ydGFudH0uYmx1ZS1ncmV5LmxpZ2h0ZW4tMXtiYWNrZ3JvdW5kLWNvbG9yOiM3ODkwOWMgIWltcG9ydGFudH0uYmx1ZS1ncmV5LXRleHQudGV4dC1saWdodGVuLTF7Y29sb3I6Izc4OTA5YyAhaW1wb3J0YW50fS5ibHVlLWdyZXkuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtZGFya2VuLTF7Y29sb3I6IzU0NmU3YSAhaW1wb3J0YW50fS5ibHVlLWdyZXkuZGFya2VuLTJ7YmFja2dyb3VuZC1jb2xvcjojNDU1YTY0ICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6IzQ1NWE2NCAhaW1wb3J0YW50fS5ibHVlLWdyZXkuZGFya2VuLTN7YmFja2dyb3VuZC1jb2xvcjojMzc0NzRmICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtZGFya2VuLTN7Y29sb3I6IzM3NDc0ZiAhaW1wb3J0YW50fS5ibHVlLWdyZXkuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojMjYzMjM4ICFpbXBvcnRhbnR9LmJsdWUtZ3JleS10ZXh0LnRleHQtZGFya2VuLTR7Y29sb3I6IzI2MzIzOCAhaW1wb3J0YW50fS5ncmV5e2JhY2tncm91bmQtY29sb3I6IzllOWU5ZSAhaW1wb3J0YW50fS5ncmV5LXRleHR7Y29sb3I6IzllOWU5ZSAhaW1wb3J0YW50fS5ncmV5LmxpZ2h0ZW4tNXtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmEgIWltcG9ydGFudH0uZ3JleS10ZXh0LnRleHQtbGlnaHRlbi01e2NvbG9yOiNmYWZhZmEgIWltcG9ydGFudH0uZ3JleS5saWdodGVuLTR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1ICFpbXBvcnRhbnR9LmdyZXktdGV4dC50ZXh0LWxpZ2h0ZW4tNHtjb2xvcjojZjVmNWY1ICFpbXBvcnRhbnR9LmdyZXkubGlnaHRlbi0ze2JhY2tncm91bmQtY29sb3I6I2VlZSAhaW1wb3J0YW50fS5ncmV5LXRleHQudGV4dC1saWdodGVuLTN7Y29sb3I6I2VlZSAhaW1wb3J0YW50fS5ncmV5LmxpZ2h0ZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTAgIWltcG9ydGFudH0uZ3JleS10ZXh0LnRleHQtbGlnaHRlbi0ye2NvbG9yOiNlMGUwZTAgIWltcG9ydGFudH0uZ3JleS5saWdodGVuLTF7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkICFpbXBvcnRhbnR9LmdyZXktdGV4dC50ZXh0LWxpZ2h0ZW4tMXtjb2xvcjojYmRiZGJkICFpbXBvcnRhbnR9LmdyZXkuZGFya2VuLTF7YmFja2dyb3VuZC1jb2xvcjojNzU3NTc1ICFpbXBvcnRhbnR9LmdyZXktdGV4dC50ZXh0LWRhcmtlbi0xe2NvbG9yOiM3NTc1NzUgIWltcG9ydGFudH0uZ3JleS5kYXJrZW4tMntiYWNrZ3JvdW5kLWNvbG9yOiM2MTYxNjEgIWltcG9ydGFudH0uZ3JleS10ZXh0LnRleHQtZGFya2VuLTJ7Y29sb3I6IzYxNjE2MSAhaW1wb3J0YW50fS5ncmV5LmRhcmtlbi0ze2JhY2tncm91bmQtY29sb3I6IzQyNDI0MiAhaW1wb3J0YW50fS5ncmV5LXRleHQudGV4dC1kYXJrZW4tM3tjb2xvcjojNDI0MjQyICFpbXBvcnRhbnR9LmdyZXkuZGFya2VuLTR7YmFja2dyb3VuZC1jb2xvcjojMjEyMTIxICFpbXBvcnRhbnR9LmdyZXktdGV4dC50ZXh0LWRhcmtlbi00e2NvbG9yOiMyMTIxMjEgIWltcG9ydGFudH0uYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMDAwICFpbXBvcnRhbnR9LmJsYWNrLXRleHR7Y29sb3I6IzAwMCAhaW1wb3J0YW50fS53aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudH0ud2hpdGUtdGV4dHtjb2xvcjojZmZmICFpbXBvcnRhbnR9LnRyYW5zcGFyZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50fS50cmFuc3BhcmVudC10ZXh0e2NvbG9yOnJnYmEoMCwwLDAsMCkgIWltcG9ydGFudH0vKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovaHRtbHtsaW5lLWhlaWdodDoxLjE1Oy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1hcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjowLjY3ZW0gMH1maWdjYXB0aW9uLGZpZ3VyZSxtYWlue2Rpc3BsYXk6YmxvY2t9ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocnstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfXByZXtmb250LWZhbWlseTptb25vc3BhY2UsIG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHN9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDstbW96LXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmluaGVyaXR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLCBtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1kZm57Zm9udC1zdHlsZTppdGFsaWN9bWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7Y29sb3I6IzAwMH1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1Yntib3R0b206LTAuMjVlbX1zdXB7dG9wOi0wLjVlbX1hdWRpbyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfWltZ3tib3JkZXItc3R5bGU6bm9uZX1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixodG1sIFt0eXBlPVwiYnV0dG9uXCJdLFt0eXBlPVwicmVzZXRcIl0sW3R5cGU9XCJzdWJtaXRcIl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9YnV0dG9uOi1tb3otZm9jdXNyaW5nLFt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzowLjM1ZW0gMC43NWVtIDAuNjI1ZW19bGVnZW5key13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPVwiY2hlY2tib3hcIl0sW3R5cGU9XCJyYWRpb1wiXXstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPVwic2VhcmNoXCJdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHMsbWVudXtkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19Y2FudmFze2Rpc3BsYXk6aW5saW5lLWJsb2NrfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9aHRtbHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9KiwqOmJlZm9yZSwqOmFmdGVyey13ZWJraXQtYm94LXNpemluZzppbmhlcml0O2JveC1zaXppbmc6aW5oZXJpdH1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn11bDpub3QoLmJyb3dzZXItZGVmYXVsdCl7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZS10eXBlOm5vbmV9dWw6bm90KC5icm93c2VyLWRlZmF1bHQpPmxpe2xpc3Qtc3R5bGUtdHlwZTpub25lfWF7Y29sb3I6IzAzOWJlNTt0ZXh0LWRlY29yYXRpb246bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LnZhbGlnbi13cmFwcGVye2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmNsZWFyZml4e2NsZWFyOmJvdGh9LnotZGVwdGgtMHstd2Via2l0LWJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50fS56LWRlcHRoLTEsbmF2LC5jYXJkLXBhbmVsLC5jYXJkLC50b2FzdCwuYnRuLC5idG4tbGFyZ2UsLmJ0bi1zbWFsbCwuYnRuLWZsb2F0aW5nLC5kcm9wZG93bi1jb250ZW50LC5jb2xsYXBzaWJsZSwuc2lkZW5hdnstd2Via2l0LWJveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMTIpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC4yKTtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMil9LnotZGVwdGgtMS1oYWxmLC5idG46aG92ZXIsLmJ0bi1sYXJnZTpob3ZlciwuYnRuLXNtYWxsOmhvdmVyLC5idG4tZmxvYXRpbmc6aG92ZXJ7LXdlYmtpdC1ib3gtc2hhZG93OjAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggN3B4IDAgcmdiYSgwLDAsMCwwLjEyKSwwIDNweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMik7Ym94LXNoYWRvdzowIDNweCAzcHggMCByZ2JhKDAsMCwwLDAuMTQpLDAgMXB4IDdweCAwIHJnYmEoMCwwLDAsMC4xMiksMCAzcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpfS56LWRlcHRoLTJ7LXdlYmtpdC1ib3gtc2hhZG93OjAgNHB4IDVweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMiksMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwwLjMpO2JveC1zaGFkb3c6MCA0cHggNXB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLDAuMyl9LnotZGVwdGgtM3std2Via2l0LWJveC1zaGFkb3c6MCA4cHggMTdweCAycHggcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLDAuMTIpLDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4yKTtib3gtc2hhZG93OjAgOHB4IDE3cHggMnB4IHJnYmEoMCwwLDAsMC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwwLjEyKSwwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMil9LnotZGVwdGgtNHstd2Via2l0LWJveC1zaGFkb3c6MCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsMC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwwLjEyKSwwIDhweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjIpO2JveC1zaGFkb3c6MCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsMC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwwLjEyKSwwIDhweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjIpfS56LWRlcHRoLTUsLm1vZGFsey13ZWJraXQtYm94LXNoYWRvdzowIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwwLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLDAuMTIpLDAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwwLjIpO2JveC1zaGFkb3c6MCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsMC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwwLjEyKSwwIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsMC4yKX0uaG92ZXJhYmxley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjI1czt0cmFuc2l0aW9uOi13ZWJraXQtYm94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgLjI1c30uaG92ZXJhYmxlOmhvdmVyey13ZWJraXQtYm94LXNoYWRvdzowIDhweCAxN3B4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO2JveC1zaGFkb3c6MCA4cHggMTdweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KX0uZGl2aWRlcntoZWlnaHQ6MXB4O292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9YmxvY2txdW90ZXttYXJnaW46MjBweCAwO3BhZGRpbmctbGVmdDoxLjVyZW07Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICNlZTZlNzN9aXtsaW5lLWhlaWdodDppbmhlcml0fWkubGVmdHtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoxNXB4fWkucmlnaHR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MTVweH1pLnRpbnl7Zm9udC1zaXplOjFyZW19aS5zbWFsbHtmb250LXNpemU6MnJlbX1pLm1lZGl1bXtmb250LXNpemU6NHJlbX1pLmxhcmdle2ZvbnQtc2l6ZTo2cmVtfWltZy5yZXNwb25zaXZlLWltZyx2aWRlby5yZXNwb25zaXZlLXZpZGVve21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5wYWdpbmF0aW9uIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcDtoZWlnaHQ6MzBweH0ucGFnaW5hdGlvbiBsaSBhe2NvbG9yOiM0NDQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjEuMnJlbTtwYWRkaW5nOjAgMTBweDtsaW5lLWhlaWdodDozMHB4fS5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhe2NvbG9yOiNmZmZ9LnBhZ2luYXRpb24gbGkuYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2VlNmU3M30ucGFnaW5hdGlvbiBsaS5kaXNhYmxlZCBhe2N1cnNvcjpkZWZhdWx0O2NvbG9yOiM5OTl9LnBhZ2luYXRpb24gbGkgaXtmb250LXNpemU6MnJlbX0ucGFnaW5hdGlvbiBsaS5wYWdlcyB1bCBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5wYWdpbmF0aW9ue3dpZHRoOjEwMCV9LnBhZ2luYXRpb24gbGkucHJldiwucGFnaW5hdGlvbiBsaS5uZXh0e3dpZHRoOjEwJX0ucGFnaW5hdGlvbiBsaS5wYWdlc3t3aWR0aDo4MCU7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcH19LmJyZWFkY3J1bWJ7Zm9udC1zaXplOjE4cHg7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjcpfS5icmVhZGNydW1iIGksLmJyZWFkY3J1bWIgW2NsYXNzXj1cIm1kaS1cIl0sLmJyZWFkY3J1bWIgW2NsYXNzKj1cIm1kaS1cIl0sLmJyZWFkY3J1bWIgaS5tYXRlcmlhbC1pY29uc3tkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpsZWZ0O2ZvbnQtc2l6ZToyNHB4fS5icmVhZGNydW1iOmJlZm9yZXtjb250ZW50OidcXEU1Q0MnO2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC43KTt2ZXJ0aWNhbC1hbGlnbjp0b3A7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1mYW1pbHk6J01hdGVyaWFsIEljb25zJztmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1zaXplOjI1cHg7bWFyZ2luOjAgMTBweCAwIDhweDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfS5icmVhZGNydW1iOmZpcnN0LWNoaWxkOmJlZm9yZXtkaXNwbGF5Om5vbmV9LmJyZWFkY3J1bWI6bGFzdC1jaGlsZHtjb2xvcjojZmZmfS5wYXJhbGxheC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo1MDBweH0ucGFyYWxsYXgtY29udGFpbmVyIC5wYXJhbGxheHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt6LWluZGV4Oi0xfS5wYXJhbGxheC1jb250YWluZXIgLnBhcmFsbGF4IGltZ3tvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7Ym90dG9tOjA7bWluLXdpZHRoOjEwMCU7bWluLWhlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfS5waW4tdG9wLC5waW4tYm90dG9te3Bvc2l0aW9uOnJlbGF0aXZlfS5waW5uZWR7cG9zaXRpb246Zml4ZWQgIWltcG9ydGFudH11bC5zdGFnZ2VyZWQtbGlzdCBsaXtvcGFjaXR5OjB9LmZhZGUtaW57b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpey5oaWRlLW9uLXNtYWxsLW9ubHksLmhpZGUtb24tc21hbGwtYW5kLWRvd257ZGlzcGxheTpub25lICFpbXBvcnRhbnR9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5oaWRlLW9uLW1lZC1hbmQtZG93bntkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCl7LmhpZGUtb24tbWVkLWFuZC11cHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuaGlkZS1vbi1tZWQtb25seXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCl7LmhpZGUtb24tbGFyZ2Utb25seXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpey5oaWRlLW9uLWV4dHJhLWxhcmdlLW9ubHl7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KXsuc2hvdy1vbi1leHRyYS1sYXJnZXtkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpey5zaG93LW9uLWxhcmdle2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuc2hvdy1vbi1tZWRpdW17ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsuc2hvdy1vbi1zbWFsbHtkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpey5zaG93LW9uLW1lZGl1bS1hbmQtdXB7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuc2hvdy1vbi1tZWRpdW0tYW5kLWRvd257ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsuY2VudGVyLW9uLXNtYWxsLW9ubHl7dGV4dC1hbGlnbjpjZW50ZXJ9fS5wYWdlLWZvb3RlcntwYWRkaW5nLXRvcDoyMHB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZWU2ZTczfS5wYWdlLWZvb3RlciAuZm9vdGVyLWNvcHlyaWdodHtvdmVyZmxvdzpoaWRkZW47bWluLWhlaWdodDo1MHB4O2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MTBweCAwcHg7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjgpO2JhY2tncm91bmQtY29sb3I6cmdiYSg1MSw1MSw1MSwwLjA4KX10YWJsZSx0aCx0ZHtib3JkZXI6bm9uZX10YWJsZXt3aWR0aDoxMDAlO2Rpc3BsYXk6dGFibGU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGFibGUuc3RyaXBlZCB0cntib3JkZXItYm90dG9tOm5vbmV9dGFibGUuc3RyaXBlZD50Ym9keT50cjpudGgtY2hpbGQob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDI0MiwyNDIsMC41KX10YWJsZS5zdHJpcGVkPnRib2R5PnRyPnRke2JvcmRlci1yYWRpdXM6MH10YWJsZS5oaWdobGlnaHQ+dGJvZHk+dHJ7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2V9dGFibGUuaGlnaGxpZ2h0PnRib2R5PnRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjQyLDI0MiwwLjUpfXRhYmxlLmNlbnRlcmVkIHRoZWFkIHRyIHRoLHRhYmxlLmNlbnRlcmVkIHRib2R5IHRyIHRke3RleHQtYWxpZ246Y2VudGVyfXRye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMil9dGQsdGh7cGFkZGluZzoxNXB4IDVweDtkaXNwbGF5OnRhYmxlLWNlbGw7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItcmFkaXVzOjJweH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXt0YWJsZS5yZXNwb25zaXZlLXRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX10YWJsZS5yZXNwb25zaXZlLXRhYmxlIHRkOmVtcHR5OmJlZm9yZXtjb250ZW50OidcXDAwYTAnfXRhYmxlLnJlc3BvbnNpdmUtdGFibGUgdGgsdGFibGUucmVzcG9uc2l2ZS10YWJsZSB0ZHttYXJnaW46MDt2ZXJ0aWNhbC1hbGlnbjp0b3B9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0aHt0ZXh0LWFsaWduOmxlZnR9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0aGVhZHtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnR9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0aGVhZCB0cntkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MCAxMHB4IDAgMH10YWJsZS5yZXNwb25zaXZlLXRhYmxlIHRoZWFkIHRyIHRoOjpiZWZvcmV7Y29udGVudDpcIlxcMDBhMFwifXRhYmxlLnJlc3BvbnNpdmUtdGFibGUgdGJvZHl7ZGlzcGxheTpibG9jazt3aWR0aDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93LXg6YXV0bzt3aGl0ZS1zcGFjZTpub3dyYXB9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0Ym9keSB0cntkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3B9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0aHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHR9dGFibGUucmVzcG9uc2l2ZS10YWJsZSB0ZHtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6MS4yNWVtO3RleHQtYWxpZ246bGVmdH10YWJsZS5yZXNwb25zaXZlLXRhYmxlIHRye2JvcmRlci1ib3R0b206bm9uZTtwYWRkaW5nOjAgMTBweH10YWJsZS5yZXNwb25zaXZlLXRhYmxlIHRoZWFke2JvcmRlcjowO2JvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgwLDAsMCwwLjEyKX19LmNvbGxlY3Rpb257bWFyZ2luOi41cmVtIDAgMXJlbSAwO2JvcmRlcjoxcHggc29saWQgI2UwZTBlMDtib3JkZXItcmFkaXVzOjJweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MS41cmVtO3BhZGRpbmc6MTBweCAyMHB4O21hcmdpbjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMGUwZTB9LmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbS5hdmF0YXJ7bWluLWhlaWdodDo4NHB4O3BhZGRpbmctbGVmdDo3MnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWl0ZW0uYXZhdGFyOm5vdCguY2lyY2xlLWNsaXBwZXIpPi5jaXJjbGUsLmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbS5hdmF0YXIgOm5vdCguY2lyY2xlLWNsaXBwZXIpPi5jaXJjbGV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDtvdmVyZmxvdzpoaWRkZW47bGVmdDoxNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY29sbGVjdGlvbiAuY29sbGVjdGlvbi1pdGVtLmF2YXRhciBpLmNpcmNsZXtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDo0MnB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojOTk5O3RleHQtYWxpZ246Y2VudGVyfS5jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWl0ZW0uYXZhdGFyIC50aXRsZXtmb250LXNpemU6MTZweH0uY29sbGVjdGlvbiAuY29sbGVjdGlvbi1pdGVtLmF2YXRhciBwe21hcmdpbjowfS5jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWl0ZW0uYXZhdGFyIC5zZWNvbmRhcnktY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtyaWdodDoxNnB4fS5jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWl0ZW06bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOm5vbmV9LmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbS5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhO2NvbG9yOiNlYWZhZjl9LmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbS5hY3RpdmUgLnNlY29uZGFyeS1jb250ZW50e2NvbG9yOiNmZmZ9LmNvbGxlY3Rpb24gYS5jb2xsZWN0aW9uLWl0ZW17ZGlzcGxheTpibG9jazstd2Via2l0LXRyYW5zaXRpb246LjI1czt0cmFuc2l0aW9uOi4yNXM7Y29sb3I6IzI2YTY5YX0uY29sbGVjdGlvbiBhLmNvbGxlY3Rpb24taXRlbTpub3QoLmFjdGl2ZSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGRkfS5jb2xsZWN0aW9uLndpdGgtaGVhZGVyIC5jb2xsZWN0aW9uLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2UwZTBlMDtwYWRkaW5nOjEwcHggMjBweH0uY29sbGVjdGlvbi53aXRoLWhlYWRlciAuY29sbGVjdGlvbi1pdGVte3BhZGRpbmctbGVmdDozMHB4fS5jb2xsZWN0aW9uLndpdGgtaGVhZGVyIC5jb2xsZWN0aW9uLWl0ZW0uYXZhdGFye3BhZGRpbmctbGVmdDo3MnB4fS5zZWNvbmRhcnktY29udGVudHtmbG9hdDpyaWdodDtjb2xvcjojMjZhNjlhfS5jb2xsYXBzaWJsZSAuY29sbGVjdGlvbnttYXJnaW46MDtib3JkZXI6bm9uZX0udmlkZW8tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctYm90dG9tOjU2LjI1JTtoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW59LnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsLnZpZGVvLWNvbnRhaW5lciBlbWJlZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ucHJvZ3Jlc3N7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjRweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojYWNlY2U2O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbjouNXJlbSAwIDFyZW0gMDtvdmVyZmxvdzpoaWRkZW59LnByb2dyZXNzIC5kZXRlcm1pbmF0ZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhOy13ZWJraXQtdHJhbnNpdGlvbjp3aWR0aCAuM3MgbGluZWFyO3RyYW5zaXRpb246d2lkdGggLjNzIGxpbmVhcn0ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhfS5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7dG9wOjA7bGVmdDowO2JvdHRvbTowO3dpbGwtY2hhbmdlOmxlZnQsIHJpZ2h0Oy13ZWJraXQtYW5pbWF0aW9uOmluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7YW5pbWF0aW9uOmluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGV9LnByb2dyZXNzIC5pbmRldGVybWluYXRlOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O3RvcDowO2xlZnQ6MDtib3R0b206MDt3aWxsLWNoYW5nZTpsZWZ0LCByaWdodDstd2Via2l0LWFuaW1hdGlvbjppbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTthbmltYXRpb246aW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MS4xNXM7YW5pbWF0aW9uLWRlbGF5OjEuMTVzfUAtd2Via2l0LWtleWZyYW1lcyBpbmRldGVybWluYXRlezAle2xlZnQ6LTM1JTtyaWdodDoxMDAlfTYwJXtsZWZ0OjEwMCU7cmlnaHQ6LTkwJX0xMDAle2xlZnQ6MTAwJTtyaWdodDotOTAlfX1Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGV7MCV7bGVmdDotMzUlO3JpZ2h0OjEwMCV9NjAle2xlZnQ6MTAwJTtyaWdodDotOTAlfTEwMCV7bGVmdDoxMDAlO3JpZ2h0Oi05MCV9fUAtd2Via2l0LWtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0ezAle2xlZnQ6LTIwMCU7cmlnaHQ6MTAwJX02MCV7bGVmdDoxMDclO3JpZ2h0Oi04JX0xMDAle2xlZnQ6MTA3JTtyaWdodDotOCV9fUBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHswJXtsZWZ0Oi0yMDAlO3JpZ2h0OjEwMCV9NjAle2xlZnQ6MTA3JTtyaWdodDotOCV9MTAwJXtsZWZ0OjEwNyU7cmlnaHQ6LTglfX0uaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH0ubGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnR9LnJpZ2h0LWFsaWdue3RleHQtYWxpZ246cmlnaHR9LmNlbnRlciwuY2VudGVyLWFsaWdue3RleHQtYWxpZ246Y2VudGVyfS5sZWZ0e2Zsb2F0OmxlZnQgIWltcG9ydGFudH0ucmlnaHR7ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0ubm8tc2VsZWN0LGlucHV0W3R5cGU9cmFuZ2VdLGlucHV0W3R5cGU9cmFuZ2VdKy50aHVtYnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmNpcmNsZXtib3JkZXItcmFkaXVzOjUwJX0uY2VudGVyLWJsb2Nre2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30udHJ1bmNhdGV7ZGlzcGxheTpibG9jazt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9Lm5vLXBhZGRpbmd7cGFkZGluZzowICFpbXBvcnRhbnR9c3Bhbi5iYWRnZXttaW4td2lkdGg6M3JlbTtwYWRkaW5nOjAgNnB4O21hcmdpbi1sZWZ0OjE0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MjJweDtoZWlnaHQ6MjJweDtjb2xvcjojNzU3NTc1O2Zsb2F0OnJpZ2h0Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1zcGFuLmJhZGdlLm5ld3tmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjAuOHJlbTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2YTY5YTtib3JkZXItcmFkaXVzOjJweH1zcGFuLmJhZGdlLm5ldzphZnRlcntjb250ZW50OlwiIG5ld1wifXNwYW4uYmFkZ2VbZGF0YS1iYWRnZS1jYXB0aW9uXTo6YWZ0ZXJ7Y29udGVudDpcIiBcIiBhdHRyKGRhdGEtYmFkZ2UtY2FwdGlvbil9bmF2IHVsIGEgc3Bhbi5iYWRnZXtkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO21hcmdpbi1sZWZ0OjRweDtsaW5lLWhlaWdodDoyMnB4O2hlaWdodDoyMnB4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YXV0b30uY29sbGVjdGlvbi1pdGVtIHNwYW4uYmFkZ2V7bWFyZ2luLXRvcDpjYWxjKC43NXJlbSAtIDExcHgpfS5jb2xsYXBzaWJsZSBzcGFuLmJhZGdle21hcmdpbi1sZWZ0OmF1dG99LnNpZGVuYXYgc3Bhbi5iYWRnZXttYXJnaW4tdG9wOmNhbGMoMjRweCAtIDExcHgpfXRhYmxlIHNwYW4uYmFkZ2V7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTttYXJnaW4tbGVmdDphdXRvfS5tYXRlcmlhbC1pY29uc3t0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7LXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6J2xpZ2EnOy1tb3otZm9udC1mZWF0dXJlLXNldHRpbmdzOidsaWdhJztmb250LWZlYXR1cmUtc2V0dGluZ3M6J2xpZ2EnfS5jb250YWluZXJ7bWFyZ2luOjAgYXV0bzttYXgtd2lkdGg6MTI4MHB4O3dpZHRoOjkwJX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXsuY29udGFpbmVye3dpZHRoOjg1JX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCl7LmNvbnRhaW5lcnt3aWR0aDo3MCV9fS5jb2wgLnJvd3ttYXJnaW4tbGVmdDotLjc1cmVtO21hcmdpbi1yaWdodDotLjc1cmVtfS5zZWN0aW9ue3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0uc2VjdGlvbi5uby1wYWR7cGFkZGluZzowfS5zZWN0aW9uLm5vLXBhZC1ib3R7cGFkZGluZy1ib3R0b206MH0uc2VjdGlvbi5uby1wYWQtdG9we3BhZGRpbmctdG9wOjB9LnJvd3ttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1ib3R0b206MjBweH0ucm93OmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9LnJvdyAuY29se2Zsb2F0OmxlZnQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MCAuNzVyZW07bWluLWhlaWdodDoxcHh9LnJvdyAuY29sW2NsYXNzKj1cInB1c2gtXCJdLC5yb3cgLmNvbFtjbGFzcyo9XCJwdWxsLVwiXXtwb3NpdGlvbjpyZWxhdGl2ZX0ucm93IC5jb2wuczF7d2lkdGg6OC4zMzMzMzMzMzMzJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5zMnt3aWR0aDoxNi42NjY2NjY2NjY3JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5zM3t3aWR0aDoyNSU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wuczR7d2lkdGg6MzMuMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wuczV7d2lkdGg6NDEuNjY2NjY2NjY2NyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wuczZ7d2lkdGg6NTAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnM3e3dpZHRoOjU4LjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnM4e3dpZHRoOjY2LjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnM5e3dpZHRoOjc1JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5zMTB7d2lkdGg6ODMuMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wuczExe3dpZHRoOjkxLjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnMxMnt3aWR0aDoxMDAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm9mZnNldC1zMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdWxsLXMxe3JpZ2h0OjguMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1c2gtczF7bGVmdDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtczJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtczJ7cmlnaHQ6MTYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtczJ7bGVmdDoxNi42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXMze21hcmdpbi1sZWZ0OjI1JX0ucm93IC5jb2wucHVsbC1zM3tyaWdodDoyNSV9LnJvdyAuY29sLnB1c2gtczN7bGVmdDoyNSV9LnJvdyAuY29sLm9mZnNldC1zNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC1zNHtyaWdodDozMy4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC1zNHtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtczV7bWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtczV7cmlnaHQ6NDEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtczV7bGVmdDo0MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXM2e21hcmdpbi1sZWZ0OjUwJX0ucm93IC5jb2wucHVsbC1zNntyaWdodDo1MCV9LnJvdyAuY29sLnB1c2gtczZ7bGVmdDo1MCV9LnJvdyAuY29sLm9mZnNldC1zN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC1zN3tyaWdodDo1OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC1zN3tsZWZ0OjU4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtczh7bWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtczh7cmlnaHQ6NjYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtczh7bGVmdDo2Ni42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXM5e21hcmdpbi1sZWZ0Ojc1JX0ucm93IC5jb2wucHVsbC1zOXtyaWdodDo3NSV9LnJvdyAuY29sLnB1c2gtczl7bGVmdDo3NSV9LnJvdyAuY29sLm9mZnNldC1zMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwtczEwe3JpZ2h0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdXNoLXMxMHtsZWZ0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtczExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLXMxMXtyaWdodDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVzaC1zMTF7bGVmdDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXMxMnttYXJnaW4tbGVmdDoxMDAlfS5yb3cgLmNvbC5wdWxsLXMxMntyaWdodDoxMDAlfS5yb3cgLmNvbC5wdXNoLXMxMntsZWZ0OjEwMCV9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCl7LnJvdyAuY29sLm0xe3dpZHRoOjguMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubTJ7d2lkdGg6MTYuNjY2NjY2NjY2NyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubTN7d2lkdGg6MjUlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm00e3dpZHRoOjMzLjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm01e3dpZHRoOjQxLjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm02e3dpZHRoOjUwJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5tN3t3aWR0aDo1OC4zMzMzMzMzMzMzJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5tOHt3aWR0aDo2Ni42NjY2NjY2NjY3JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5tOXt3aWR0aDo3NSU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubTEwe3dpZHRoOjgzLjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm0xMXt3aWR0aDo5MS42NjY2NjY2NjY3JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5tMTJ7d2lkdGg6MTAwJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5vZmZzZXQtbTF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC1tMXtyaWdodDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdXNoLW0xe2xlZnQ6OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wub2Zmc2V0LW0ye21hcmdpbi1sZWZ0OjE2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLW0ye3JpZ2h0OjE2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdXNoLW0ye2xlZnQ6MTYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLm9mZnNldC1tM3ttYXJnaW4tbGVmdDoyNSV9LnJvdyAuY29sLnB1bGwtbTN7cmlnaHQ6MjUlfS5yb3cgLmNvbC5wdXNoLW0ze2xlZnQ6MjUlfS5yb3cgLmNvbC5vZmZzZXQtbTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwtbTR7cmlnaHQ6MzMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1c2gtbTR7bGVmdDozMy4zMzMzMzMzMzMzJX0ucm93IC5jb2wub2Zmc2V0LW01e21hcmdpbi1sZWZ0OjQxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLW01e3JpZ2h0OjQxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdXNoLW01e2xlZnQ6NDEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLm9mZnNldC1tNnttYXJnaW4tbGVmdDo1MCV9LnJvdyAuY29sLnB1bGwtbTZ7cmlnaHQ6NTAlfS5yb3cgLmNvbC5wdXNoLW02e2xlZnQ6NTAlfS5yb3cgLmNvbC5vZmZzZXQtbTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwtbTd7cmlnaHQ6NTguMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1c2gtbTd7bGVmdDo1OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wub2Zmc2V0LW04e21hcmdpbi1sZWZ0OjY2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLW04e3JpZ2h0OjY2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdXNoLW04e2xlZnQ6NjYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLm9mZnNldC1tOXttYXJnaW4tbGVmdDo3NSV9LnJvdyAuY29sLnB1bGwtbTl7cmlnaHQ6NzUlfS5yb3cgLmNvbC5wdXNoLW05e2xlZnQ6NzUlfS5yb3cgLmNvbC5vZmZzZXQtbTEwe21hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdWxsLW0xMHtyaWdodDo4My4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC1tMTB7bGVmdDo4My4zMzMzMzMzMzMzJX0ucm93IC5jb2wub2Zmc2V0LW0xMXttYXJnaW4tbGVmdDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVsbC1tMTF7cmlnaHQ6OTEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtbTExe2xlZnQ6OTEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLm9mZnNldC1tMTJ7bWFyZ2luLWxlZnQ6MTAwJX0ucm93IC5jb2wucHVsbC1tMTJ7cmlnaHQ6MTAwJX0ucm93IC5jb2wucHVzaC1tMTJ7bGVmdDoxMDAlfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KXsucm93IC5jb2wubDF7d2lkdGg6OC4zMzMzMzMzMzMzJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5sMnt3aWR0aDoxNi42NjY2NjY2NjY3JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5sM3t3aWR0aDoyNSU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubDR7d2lkdGg6MzMuMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubDV7d2lkdGg6NDEuNjY2NjY2NjY2NyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubDZ7d2lkdGg6NTAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLmw3e3dpZHRoOjU4LjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLmw4e3dpZHRoOjY2LjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLmw5e3dpZHRoOjc1JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC5sMTB7d2lkdGg6ODMuMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wubDExe3dpZHRoOjkxLjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLmwxMnt3aWR0aDoxMDAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm9mZnNldC1sMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdWxsLWwxe3JpZ2h0OjguMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1c2gtbDF7bGVmdDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtbDJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtbDJ7cmlnaHQ6MTYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtbDJ7bGVmdDoxNi42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LWwze21hcmdpbi1sZWZ0OjI1JX0ucm93IC5jb2wucHVsbC1sM3tyaWdodDoyNSV9LnJvdyAuY29sLnB1c2gtbDN7bGVmdDoyNSV9LnJvdyAuY29sLm9mZnNldC1sNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC1sNHtyaWdodDozMy4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC1sNHtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtbDV7bWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtbDV7cmlnaHQ6NDEuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtbDV7bGVmdDo0MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LWw2e21hcmdpbi1sZWZ0OjUwJX0ucm93IC5jb2wucHVsbC1sNntyaWdodDo1MCV9LnJvdyAuY29sLnB1c2gtbDZ7bGVmdDo1MCV9LnJvdyAuY29sLm9mZnNldC1sN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC1sN3tyaWdodDo1OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC1sN3tsZWZ0OjU4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtbDh7bWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1bGwtbDh7cmlnaHQ6NjYuNjY2NjY2NjY2NyV9LnJvdyAuY29sLnB1c2gtbDh7bGVmdDo2Ni42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LWw5e21hcmdpbi1sZWZ0Ojc1JX0ucm93IC5jb2wucHVsbC1sOXtyaWdodDo3NSV9LnJvdyAuY29sLnB1c2gtbDl7bGVmdDo3NSV9LnJvdyAuY29sLm9mZnNldC1sMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwtbDEwe3JpZ2h0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdXNoLWwxMHtsZWZ0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQtbDExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLWwxMXtyaWdodDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVzaC1sMTF7bGVmdDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LWwxMnttYXJnaW4tbGVmdDoxMDAlfS5yb3cgLmNvbC5wdWxsLWwxMntyaWdodDoxMDAlfS5yb3cgLmNvbC5wdXNoLWwxMntsZWZ0OjEwMCV9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KXsucm93IC5jb2wueGwxe3dpZHRoOjguMzMzMzMzMzMzMyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wueGwye3dpZHRoOjE2LjY2NjY2NjY2NjclO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnhsM3t3aWR0aDoyNSU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wueGw0e3dpZHRoOjMzLjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnhsNXt3aWR0aDo0MS42NjY2NjY2NjY3JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC54bDZ7d2lkdGg6NTAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnhsN3t3aWR0aDo1OC4zMzMzMzMzMzMzJTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC54bDh7d2lkdGg6NjYuNjY2NjY2NjY2NyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wueGw5e3dpZHRoOjc1JTttYXJnaW4tbGVmdDphdXRvO2xlZnQ6YXV0bztyaWdodDphdXRvfS5yb3cgLmNvbC54bDEwe3dpZHRoOjgzLjMzMzMzMzMzMzMlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLnhsMTF7d2lkdGg6OTEuNjY2NjY2NjY2NyU7bWFyZ2luLWxlZnQ6YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0b30ucm93IC5jb2wueGwxMnt3aWR0aDoxMDAlO21hcmdpbi1sZWZ0OmF1dG87bGVmdDphdXRvO3JpZ2h0OmF1dG99LnJvdyAuY29sLm9mZnNldC14bDF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVsbC14bDF7cmlnaHQ6OC4zMzMzMzMzMzMzJX0ucm93IC5jb2wucHVzaC14bDF7bGVmdDo4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQteGwye21hcmdpbi1sZWZ0OjE2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLXhsMntyaWdodDoxNi42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVzaC14bDJ7bGVmdDoxNi42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXhsM3ttYXJnaW4tbGVmdDoyNSV9LnJvdyAuY29sLnB1bGwteGwze3JpZ2h0OjI1JX0ucm93IC5jb2wucHVzaC14bDN7bGVmdDoyNSV9LnJvdyAuY29sLm9mZnNldC14bDR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwteGw0e3JpZ2h0OjMzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdXNoLXhsNHtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQteGw1e21hcmdpbi1sZWZ0OjQxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLXhsNXtyaWdodDo0MS42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVzaC14bDV7bGVmdDo0MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXhsNnttYXJnaW4tbGVmdDo1MCV9LnJvdyAuY29sLnB1bGwteGw2e3JpZ2h0OjUwJX0ucm93IC5jb2wucHVzaC14bDZ7bGVmdDo1MCV9LnJvdyAuY29sLm9mZnNldC14bDd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1bGwteGw3e3JpZ2h0OjU4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdXNoLXhsN3tsZWZ0OjU4LjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQteGw4e21hcmdpbi1sZWZ0OjY2LjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdWxsLXhsOHtyaWdodDo2Ni42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVzaC14bDh7bGVmdDo2Ni42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXhsOXttYXJnaW4tbGVmdDo3NSV9LnJvdyAuY29sLnB1bGwteGw5e3JpZ2h0Ojc1JX0ucm93IC5jb2wucHVzaC14bDl7bGVmdDo3NSV9LnJvdyAuY29sLm9mZnNldC14bDEwe21hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5wdWxsLXhsMTB7cmlnaHQ6ODMuMzMzMzMzMzMzMyV9LnJvdyAuY29sLnB1c2gteGwxMHtsZWZ0OjgzLjMzMzMzMzMzMzMlfS5yb3cgLmNvbC5vZmZzZXQteGwxMXttYXJnaW4tbGVmdDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wucHVsbC14bDExe3JpZ2h0OjkxLjY2NjY2NjY2NjclfS5yb3cgLmNvbC5wdXNoLXhsMTF7bGVmdDo5MS42NjY2NjY2NjY3JX0ucm93IC5jb2wub2Zmc2V0LXhsMTJ7bWFyZ2luLWxlZnQ6MTAwJX0ucm93IC5jb2wucHVsbC14bDEye3JpZ2h0OjEwMCV9LnJvdyAuY29sLnB1c2gteGwxMntsZWZ0OjEwMCV9fW5hdntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2VlNmU3Mzt3aWR0aDoxMDAlO2hlaWdodDo1NnB4O2xpbmUtaGVpZ2h0OjU2cHh9bmF2Lm5hdi1leHRlbmRlZHtoZWlnaHQ6YXV0b31uYXYubmF2LWV4dGVuZGVkIC5uYXYtd3JhcHBlcnttaW4taGVpZ2h0OjU2cHg7aGVpZ2h0OmF1dG99bmF2Lm5hdi1leHRlbmRlZCAubmF2LWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6bm9ybWFsfW5hdiBhe2NvbG9yOiNmZmZ9bmF2IGksbmF2IFtjbGFzc149XCJtZGktXCJdLG5hdiBbY2xhc3MqPVwibWRpLVwiXSxuYXYgaS5tYXRlcmlhbC1pY29uc3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToyNHB4O2hlaWdodDo1NnB4O2xpbmUtaGVpZ2h0OjU2cHh9bmF2IC5uYXYtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KXtuYXYgYS5zaWRlbmF2LXRyaWdnZXJ7ZGlzcGxheTpub25lfX1uYXYgLnNpZGVuYXYtdHJpZ2dlcntmbG9hdDpsZWZ0O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtoZWlnaHQ6NTZweDttYXJnaW46MCAxOHB4fW5hdiAuc2lkZW5hdi10cmlnZ2VyIGl7aGVpZ2h0OjU2cHg7bGluZS1oZWlnaHQ6NTZweH1uYXYgLmJyYW5kLWxvZ297cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6Mi4xcmVtO3BhZGRpbmc6MH1uYXYgLmJyYW5kLWxvZ28uY2VudGVye2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2IC5icmFuZC1sb2dve2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9bmF2IC5icmFuZC1sb2dvLmxlZnQsbmF2IC5icmFuZC1sb2dvLnJpZ2h0e3BhZGRpbmc6MDstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfW5hdiAuYnJhbmQtbG9nby5sZWZ0e2xlZnQ6MC41cmVtfW5hdiAuYnJhbmQtbG9nby5yaWdodHtyaWdodDowLjVyZW07bGVmdDphdXRvfX1uYXYgLmJyYW5kLWxvZ28ucmlnaHR7cmlnaHQ6MC41cmVtO3BhZGRpbmc6MH1uYXYgLmJyYW5kLWxvZ28gaSxuYXYgLmJyYW5kLWxvZ28gW2NsYXNzXj1cIm1kaS1cIl0sbmF2IC5icmFuZC1sb2dvIFtjbGFzcyo9XCJtZGktXCJdLG5hdiAuYnJhbmQtbG9nbyBpLm1hdGVyaWFsLWljb25ze2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjE1cHh9bmF2IC5uYXYtdGl0bGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjMycHg7cGFkZGluZzoyOHB4IDB9bmF2IHVse21hcmdpbjowfW5hdiB1bCBsaXstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3M7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcztmbG9hdDpsZWZ0O3BhZGRpbmc6MH1uYXYgdWwgbGkuYWN0aXZle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjEpfW5hdiB1bCBhey13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zczt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzO2ZvbnQtc2l6ZToxcmVtO2NvbG9yOiNmZmY7ZGlzcGxheTpibG9jaztwYWRkaW5nOjAgMTVweDtjdXJzb3I6cG9pbnRlcn1uYXYgdWwgYS5idG4sbmF2IHVsIGEuYnRuLWxhcmdlLG5hdiB1bCBhLmJ0bi1zbWFsbCxuYXYgdWwgYS5idG4tbGFyZ2UsbmF2IHVsIGEuYnRuLWZsYXQsbmF2IHVsIGEuYnRuLWZsb2F0aW5ne21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDoxNXB4O21hcmdpbi1yaWdodDoxNXB4fW5hdiB1bCBhLmJ0bj4ubWF0ZXJpYWwtaWNvbnMsbmF2IHVsIGEuYnRuLWxhcmdlPi5tYXRlcmlhbC1pY29ucyxuYXYgdWwgYS5idG4tc21hbGw+Lm1hdGVyaWFsLWljb25zLG5hdiB1bCBhLmJ0bi1sYXJnZT4ubWF0ZXJpYWwtaWNvbnMsbmF2IHVsIGEuYnRuLWZsYXQ+Lm1hdGVyaWFsLWljb25zLG5hdiB1bCBhLmJ0bi1mbG9hdGluZz4ubWF0ZXJpYWwtaWNvbnN7aGVpZ2h0OmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1uYXYgdWwgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4xKX1uYXYgdWwubGVmdHtmbG9hdDpsZWZ0fW5hdiBmb3Jte2hlaWdodDoxMDAlfW5hdiAuaW5wdXQtZmllbGR7bWFyZ2luOjA7aGVpZ2h0OjEwMCV9bmF2IC5pbnB1dC1maWVsZCBpbnB1dHtoZWlnaHQ6MTAwJTtmb250LXNpemU6MS4ycmVtO2JvcmRlcjpub25lO3BhZGRpbmctbGVmdDoycmVtfW5hdiAuaW5wdXQtZmllbGQgaW5wdXQ6Zm9jdXMsbmF2IC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdOnZhbGlkLG5hdiAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06dmFsaWQsbmF2IC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPWVtYWlsXTp2YWxpZCxuYXYgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dXJsXTp2YWxpZCxuYXYgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9ZGF0ZV06dmFsaWR7Ym9yZGVyOm5vbmU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfW5hdiAuaW5wdXQtZmllbGQgbGFiZWx7dG9wOjA7bGVmdDowfW5hdiAuaW5wdXQtZmllbGQgbGFiZWwgaXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7LXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIC4zczt0cmFuc2l0aW9uOmNvbG9yIC4zc31uYXYgLmlucHV0LWZpZWxkIGxhYmVsLmFjdGl2ZSBpe2NvbG9yOiNmZmZ9Lm5hdmJhci1maXhlZHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NTZweDt6LWluZGV4Ojk5N30ubmF2YmFyLWZpeGVkIG5hdntwb3NpdGlvbjpmaXhlZH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXtuYXYubmF2LWV4dGVuZGVkIC5uYXYtd3JhcHBlcnttaW4taGVpZ2h0OjY0cHh9bmF2LG5hdiAubmF2LXdyYXBwZXIgaSxuYXYgYS5zaWRlbmF2LXRyaWdnZXIsbmF2IGEuc2lkZW5hdi10cmlnZ2VyIGl7aGVpZ2h0OjY0cHg7bGluZS1oZWlnaHQ6NjRweH0ubmF2YmFyLWZpeGVke2hlaWdodDo2NHB4fX1he3RleHQtZGVjb3JhdGlvbjpub25lfWh0bWx7bGluZS1oZWlnaHQ6MS41O2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDApe2h0bWx7Zm9udC1zaXplOjE0cHh9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe2h0bWx7Zm9udC1zaXplOjE0LjVweH19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe2h0bWx7Zm9udC1zaXplOjE1cHh9fWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjN9aDEgYSxoMiBhLGgzIGEsaDQgYSxoNSBhLGg2IGF7Zm9udC13ZWlnaHQ6aW5oZXJpdH1oMXtmb250LXNpemU6NC4ycmVtO2xpbmUtaGVpZ2h0OjExMCU7bWFyZ2luOjIuOHJlbSAwIDEuNjhyZW0gMH1oMntmb250LXNpemU6My41NnJlbTtsaW5lLWhlaWdodDoxMTAlO21hcmdpbjoyLjM3MzMzMzMzMzNyZW0gMCAxLjQyNHJlbSAwfWgze2ZvbnQtc2l6ZToyLjkycmVtO2xpbmUtaGVpZ2h0OjExMCU7bWFyZ2luOjEuOTQ2NjY2NjY2N3JlbSAwIDEuMTY4cmVtIDB9aDR7Zm9udC1zaXplOjIuMjhyZW07bGluZS1oZWlnaHQ6MTEwJTttYXJnaW46MS41MnJlbSAwIC45MTJyZW0gMH1oNXtmb250LXNpemU6MS42NHJlbTtsaW5lLWhlaWdodDoxMTAlO21hcmdpbjoxLjA5MzMzMzMzMzNyZW0gMCAuNjU2cmVtIDB9aDZ7Zm9udC1zaXplOjEuMTVyZW07bGluZS1oZWlnaHQ6MTEwJTttYXJnaW46Ljc2NjY2NjY2NjdyZW0gMCAuNDZyZW0gMH1lbXtmb250LXN0eWxlOml0YWxpY31zdHJvbmd7Zm9udC13ZWlnaHQ6NTAwfXNtYWxse2ZvbnQtc2l6ZTo3NSV9LmxpZ2h0e2ZvbnQtd2VpZ2h0OjMwMH0udGhpbntmb250LXdlaWdodDoyMDB9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS4ycmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM5MHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjIyNHJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS4yNDhyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuMjcycmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjI5NnJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS4zMnJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS4zNDRyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTcwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuMzY4cmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjM5MnJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MzBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS40MTZyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjYwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuNDRyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjkwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuNDY0cmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjQ4OHJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS41MTJyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuNTM2cmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxMHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjU2cmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjU4NHJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NzBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS42MDhyZW19fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpey5mbG93LXRleHR7Zm9udC1zaXplOjEuNjMycmVtfX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzMHB4KXsuZmxvdy10ZXh0e2ZvbnQtc2l6ZToxLjY1NnJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS42OHJlbX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7LmZsb3ctdGV4dHtmb250LXNpemU6MS4ycmVtfX0uc2NhbGUtdHJhbnNpdGlvbnstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC41MywgMC4wMSwgMC4zNiwgMS42MykgIWltcG9ydGFudDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTMsIDAuMDEsIDAuMzYsIDEuNjMpICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC41MywgMC4wMSwgMC4zNiwgMS42MykgIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjUzLCAwLjAxLCAwLjM2LCAxLjYzKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC41MywgMC4wMSwgMC4zNiwgMS42MykgIWltcG9ydGFudH0uc2NhbGUtdHJhbnNpdGlvbi5zY2FsZS1vdXR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgIWltcG9ydGFudDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyAhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyAhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnR9LnNjYWxlLXRyYW5zaXRpb24uc2NhbGUtaW57LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5jYXJkLXBhbmVsey13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjI1czt0cmFuc2l0aW9uOi13ZWJraXQtYm94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztwYWRkaW5nOjI0cHg7bWFyZ2luOi41cmVtIDAgMXJlbSAwO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY2FyZHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46LjVyZW0gMCAxcmVtIDA7YmFja2dyb3VuZC1jb2xvcjojZmZmOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjI1czt0cmFuc2l0aW9uOi13ZWJraXQtYm94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztib3JkZXItcmFkaXVzOjJweH0uY2FyZCAuY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDozMDB9LmNhcmQgLmNhcmQtdGl0bGUuYWN0aXZhdG9ye2N1cnNvcjpwb2ludGVyfS5jYXJkLnNtYWxsLC5jYXJkLm1lZGl1bSwuY2FyZC5sYXJnZXtwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC5zbWFsbCAuY2FyZC1pbWFnZSwuY2FyZC5tZWRpdW0gLmNhcmQtaW1hZ2UsLmNhcmQubGFyZ2UgLmNhcmQtaW1hZ2V7bWF4LWhlaWdodDo2MCU7b3ZlcmZsb3c6aGlkZGVufS5jYXJkLnNtYWxsIC5jYXJkLWltYWdlKy5jYXJkLWNvbnRlbnQsLmNhcmQubWVkaXVtIC5jYXJkLWltYWdlKy5jYXJkLWNvbnRlbnQsLmNhcmQubGFyZ2UgLmNhcmQtaW1hZ2UrLmNhcmQtY29udGVudHttYXgtaGVpZ2h0OjQwJX0uY2FyZC5zbWFsbCAuY2FyZC1jb250ZW50LC5jYXJkLm1lZGl1bSAuY2FyZC1jb250ZW50LC5jYXJkLmxhcmdlIC5jYXJkLWNvbnRlbnR7bWF4LWhlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn0uY2FyZC5zbWFsbCAuY2FyZC1hY3Rpb24sLmNhcmQubWVkaXVtIC5jYXJkLWFjdGlvbiwuY2FyZC5sYXJnZSAuY2FyZC1hY3Rpb257cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjB9LmNhcmQuc21hbGx7aGVpZ2h0OjMwMHB4fS5jYXJkLm1lZGl1bXtoZWlnaHQ6NDAwcHh9LmNhcmQubGFyZ2V7aGVpZ2h0OjUwMHB4fS5jYXJkLmhvcml6b250YWx7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uY2FyZC5ob3Jpem9udGFsLnNtYWxsIC5jYXJkLWltYWdlLC5jYXJkLmhvcml6b250YWwubWVkaXVtIC5jYXJkLWltYWdlLC5jYXJkLmhvcml6b250YWwubGFyZ2UgLmNhcmQtaW1hZ2V7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDpub25lO292ZXJmbG93OnZpc2libGV9LmNhcmQuaG9yaXpvbnRhbC5zbWFsbCAuY2FyZC1pbWFnZSBpbWcsLmNhcmQuaG9yaXpvbnRhbC5tZWRpdW0gLmNhcmQtaW1hZ2UgaW1nLC5jYXJkLmhvcml6b250YWwubGFyZ2UgLmNhcmQtaW1hZ2UgaW1ne2hlaWdodDoxMDAlfS5jYXJkLmhvcml6b250YWwgLmNhcmQtaW1hZ2V7bWF4LXdpZHRoOjUwJX0uY2FyZC5ob3Jpem9udGFsIC5jYXJkLWltYWdlIGltZ3tib3JkZXItcmFkaXVzOjJweCAwIDAgMnB4O21heC13aWR0aDoxMDAlO3dpZHRoOmF1dG99LmNhcmQuaG9yaXpvbnRhbCAuY2FyZC1zdGFja2Vke2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtZmxleDoxOy13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkLmhvcml6b250YWwgLmNhcmQtc3RhY2tlZCAuY2FyZC1jb250ZW50ey13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXgtZ3JvdzoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9LmNhcmQuc3RpY2t5LWFjdGlvbiAuY2FyZC1hY3Rpb257ei1pbmRleDoyfS5jYXJkLnN0aWNreS1hY3Rpb24gLmNhcmQtcmV2ZWFse3otaW5kZXg6MTtwYWRkaW5nLWJvdHRvbTo2NHB4fS5jYXJkIC5jYXJkLWltYWdle3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkIC5jYXJkLWltYWdlIGltZ3tkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDA7cG9zaXRpb246cmVsYXRpdmU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7d2lkdGg6MTAwJX0uY2FyZCAuY2FyZC1pbWFnZSAuY2FyZC10aXRsZXtjb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjI0cHh9LmNhcmQgLmNhcmQtY29udGVudHtwYWRkaW5nOjI0cHg7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweH0uY2FyZCAuY2FyZC1jb250ZW50IHB7bWFyZ2luOjB9LmNhcmQgLmNhcmQtY29udGVudCAuY2FyZC10aXRsZXtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjMycHg7bWFyZ2luLWJvdHRvbTo4cHh9LmNhcmQgLmNhcmQtY29udGVudCAuY2FyZC10aXRsZSBpe2xpbmUtaGVpZ2h0OjMycHh9LmNhcmQgLmNhcmQtYWN0aW9ue2JhY2tncm91bmQtY29sb3I6aW5oZXJpdDtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDE2MCwxNjAsMTYwLDAuMik7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxNnB4IDI0cHh9LmNhcmQgLmNhcmQtYWN0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweH0uY2FyZCAuY2FyZC1hY3Rpb24gYTpub3QoLmJ0bik6bm90KC5idG4tbGFyZ2UpOm5vdCguYnRuLXNtYWxsKTpub3QoLmJ0bi1sYXJnZSk6bm90KC5idG4tZmxvYXRpbmcpe2NvbG9yOiNmZmFiNDA7bWFyZ2luLXJpZ2h0OjI0cHg7LXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIC4zcyBlYXNlO3RyYW5zaXRpb246Y29sb3IgLjNzIGVhc2U7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5jYXJkIC5jYXJkLWFjdGlvbiBhOm5vdCguYnRuKTpub3QoLmJ0bi1sYXJnZSk6bm90KC5idG4tc21hbGwpOm5vdCguYnRuLWxhcmdlKTpub3QoLmJ0bi1mbG9hdGluZyk6aG92ZXJ7Y29sb3I6I2ZmZDhhNn0uY2FyZCAuY2FyZC1yZXZlYWx7cGFkZGluZzoyNHB4O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDoxMDAlO292ZXJmbG93LXk6YXV0bztsZWZ0OjA7dG9wOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDozO2Rpc3BsYXk6bm9uZX0uY2FyZCAuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGV7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9ja30jdG9hc3QtY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwMH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsjdG9hc3QtY29udGFpbmVye21pbi13aWR0aDoxMDAlO2JvdHRvbTowJX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsjdG9hc3QtY29udGFpbmVye2xlZnQ6NSU7Ym90dG9tOjclO21heC13aWR0aDo5MCV9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpeyN0b2FzdC1jb250YWluZXJ7dG9wOjEwJTtyaWdodDo3JTttYXgtd2lkdGg6ODYlfX0udG9hc3R7Ym9yZGVyLXJhZGl1czoycHg7dG9wOjM1cHg7d2lkdGg6YXV0bzttYXJnaW4tdG9wOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG87bWluLWhlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjEuNWVtO2JhY2tncm91bmQtY29sb3I6IzMyMzIzMjtwYWRkaW5nOjEwcHggMjVweDtmb250LXNpemU6MS4xcmVtO2ZvbnQtd2VpZ2h0OjMwMDtjb2xvcjojZmZmO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2N1cnNvcjpkZWZhdWx0fS50b2FzdCAudG9hc3QtYWN0aW9ue2NvbG9yOiNlZWZmNDE7Zm9udC13ZWlnaHQ6NTAwO21hcmdpbi1yaWdodDotMjVweDttYXJnaW4tbGVmdDozcmVtfS50b2FzdC5yb3VuZGVke2JvcmRlci1yYWRpdXM6MjRweH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsudG9hc3R7d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjB9fS50YWJze3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93LXg6YXV0bztvdmVyZmxvdy15OmhpZGRlbjtoZWlnaHQ6NDhweDt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW46MCBhdXRvO3doaXRlLXNwYWNlOm5vd3JhcH0udGFicy50YWJzLXRyYW5zcGFyZW50e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnRhYnMudGFicy10cmFuc3BhcmVudCAudGFiIGEsLnRhYnMudGFicy10cmFuc3BhcmVudCAudGFiLmRpc2FibGVkIGEsLnRhYnMudGFicy10cmFuc3BhcmVudCAudGFiLmRpc2FibGVkIGE6aG92ZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjcpfS50YWJzLnRhYnMtdHJhbnNwYXJlbnQgLnRhYiBhOmhvdmVyLC50YWJzLnRhYnMtdHJhbnNwYXJlbnQgLnRhYiBhLmFjdGl2ZXtjb2xvcjojZmZmfS50YWJzLnRhYnMtdHJhbnNwYXJlbnQgLmluZGljYXRvcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnRhYnMudGFicy1maXhlZC13aWR0aHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50YWJzLnRhYnMtZml4ZWQtd2lkdGggLnRhYnstd2Via2l0LWJveC1mbGV4OjE7LXdlYmtpdC1mbGV4LWdyb3c6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfS50YWJzIC50YWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6NDhweDtoZWlnaHQ6NDhweDtwYWRkaW5nOjA7bWFyZ2luOjA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS50YWJzIC50YWIgYXtjb2xvcjpyZ2JhKDIzOCwxMTAsMTE1LDAuNyk7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6MCAyNHB4O2ZvbnQtc2l6ZToxNHB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMjhzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgLjI4cyBlYXNlO3RyYW5zaXRpb246Y29sb3IgLjI4cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4yOHMgZWFzZX0udGFicyAudGFiIGE6Zm9jdXMsLnRhYnMgLnRhYiBhOmZvY3VzLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ2LDE3OCwxODEsMC4yKTtvdXRsaW5lOm5vbmV9LnRhYnMgLnRhYiBhOmhvdmVyLC50YWJzIC50YWIgYS5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZWU2ZTczfS50YWJzIC50YWIuZGlzYWJsZWQgYSwudGFicyAudGFiLmRpc2FibGVkIGE6aG92ZXJ7Y29sb3I6cmdiYSgyMzgsMTEwLDExNSwwLjQpO2N1cnNvcjpkZWZhdWx0fS50YWJzIC5pbmRpY2F0b3J7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNmIyYjU7d2lsbC1jaGFuZ2U6bGVmdCwgcmlnaHR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LnRhYnN7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udGFicyAudGFiey13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXgtZ3JvdzoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9LnRhYnMgLnRhYiBhe3BhZGRpbmc6MCAxMnB4fX0ubWF0ZXJpYWwtdG9vbHRpcHtwYWRkaW5nOjEwcHggOHB4O2ZvbnQtc2l6ZToxcmVtO3otaW5kZXg6MjAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiNmZmY7bWluLWhlaWdodDozNnB4O2xpbmUtaGVpZ2h0OjEyMCU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO21heC13aWR0aDpjYWxjKDEwMCUgLSA0cHgpO292ZXJmbG93OmhpZGRlbjtsZWZ0OjA7dG9wOjA7cG9pbnRlci1ldmVudHM6bm9uZTt2aXNpYmlsaXR5OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOiMzMjMyMzJ9LmJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtoZWlnaHQ6N3B4O3dpZHRoOjE0cHg7Ym9yZGVyLXJhZGl1czowIDAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNvbG9yOiMzMjMyMzI7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDAlO3Zpc2liaWxpdHk6aGlkZGVufS5idG4sLmJ0bi1sYXJnZSwuYnRuLXNtYWxsLC5idG4tZmxhdHtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjJweDtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MzZweDtsaW5lLWhlaWdodDozNnB4O3BhZGRpbmc6MCAxNnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fS5idG4uZGlzYWJsZWQsLmRpc2FibGVkLmJ0bi1sYXJnZSwuZGlzYWJsZWQuYnRuLXNtYWxsLC5idG4tZmxvYXRpbmcuZGlzYWJsZWQsLmJ0bi1sYXJnZS5kaXNhYmxlZCwuYnRuLXNtYWxsLmRpc2FibGVkLC5idG4tZmxhdC5kaXNhYmxlZCwuYnRuOmRpc2FibGVkLC5idG4tbGFyZ2U6ZGlzYWJsZWQsLmJ0bi1zbWFsbDpkaXNhYmxlZCwuYnRuLWZsb2F0aW5nOmRpc2FibGVkLC5idG4tbGFyZ2U6ZGlzYWJsZWQsLmJ0bi1zbWFsbDpkaXNhYmxlZCwuYnRuLWZsYXQ6ZGlzYWJsZWQsLmJ0bltkaXNhYmxlZF0sLmJ0bi1sYXJnZVtkaXNhYmxlZF0sLmJ0bi1zbWFsbFtkaXNhYmxlZF0sLmJ0bi1mbG9hdGluZ1tkaXNhYmxlZF0sLmJ0bi1sYXJnZVtkaXNhYmxlZF0sLmJ0bi1zbWFsbFtkaXNhYmxlZF0sLmJ0bi1mbGF0W2Rpc2FibGVkXXtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6I0RGREZERiAhaW1wb3J0YW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojOUY5RjlGICFpbXBvcnRhbnQ7Y3Vyc29yOmRlZmF1bHR9LmJ0bi5kaXNhYmxlZDpob3ZlciwuZGlzYWJsZWQuYnRuLWxhcmdlOmhvdmVyLC5kaXNhYmxlZC5idG4tc21hbGw6aG92ZXIsLmJ0bi1mbG9hdGluZy5kaXNhYmxlZDpob3ZlciwuYnRuLWxhcmdlLmRpc2FibGVkOmhvdmVyLC5idG4tc21hbGwuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1mbGF0LmRpc2FibGVkOmhvdmVyLC5idG46ZGlzYWJsZWQ6aG92ZXIsLmJ0bi1sYXJnZTpkaXNhYmxlZDpob3ZlciwuYnRuLXNtYWxsOmRpc2FibGVkOmhvdmVyLC5idG4tZmxvYXRpbmc6ZGlzYWJsZWQ6aG92ZXIsLmJ0bi1sYXJnZTpkaXNhYmxlZDpob3ZlciwuYnRuLXNtYWxsOmRpc2FibGVkOmhvdmVyLC5idG4tZmxhdDpkaXNhYmxlZDpob3ZlciwuYnRuW2Rpc2FibGVkXTpob3ZlciwuYnRuLWxhcmdlW2Rpc2FibGVkXTpob3ZlciwuYnRuLXNtYWxsW2Rpc2FibGVkXTpob3ZlciwuYnRuLWZsb2F0aW5nW2Rpc2FibGVkXTpob3ZlciwuYnRuLWxhcmdlW2Rpc2FibGVkXTpob3ZlciwuYnRuLXNtYWxsW2Rpc2FibGVkXTpob3ZlciwuYnRuLWZsYXRbZGlzYWJsZWRdOmhvdmVye2JhY2tncm91bmQtY29sb3I6I0RGREZERiAhaW1wb3J0YW50O2NvbG9yOiM5RjlGOUYgIWltcG9ydGFudH0uYnRuLC5idG4tbGFyZ2UsLmJ0bi1zbWFsbCwuYnRuLWZsb2F0aW5nLC5idG4tbGFyZ2UsLmJ0bi1zbWFsbCwuYnRuLWZsYXR7Zm9udC1zaXplOjE0cHg7b3V0bGluZTowfS5idG4gaSwuYnRuLWxhcmdlIGksLmJ0bi1zbWFsbCBpLC5idG4tZmxvYXRpbmcgaSwuYnRuLWxhcmdlIGksLmJ0bi1zbWFsbCBpLC5idG4tZmxhdCBpe2ZvbnQtc2l6ZToxLjNyZW07bGluZS1oZWlnaHQ6aW5oZXJpdH0uYnRuOmZvY3VzLC5idG4tbGFyZ2U6Zm9jdXMsLmJ0bi1zbWFsbDpmb2N1cywuYnRuLWZsb2F0aW5nOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzFkN2Q3NH0uYnRuLC5idG4tbGFyZ2UsLmJ0bi1zbWFsbHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2YTY5YTt0ZXh0LWFsaWduOmNlbnRlcjtsZXR0ZXItc3BhY2luZzouNXB4Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O2N1cnNvcjpwb2ludGVyfS5idG46aG92ZXIsLmJ0bi1sYXJnZTpob3ZlciwuYnRuLXNtYWxsOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzJiYmJhZH0uYnRuLWZsb2F0aW5ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MTt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjQwcHg7cGFkZGluZzowO2JhY2tncm91bmQtY29sb3I6IzI2YTY5YTtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3M7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcztjdXJzb3I6cG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmJ0bi1mbG9hdGluZzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWF9LmJ0bi1mbG9hdGluZzpiZWZvcmV7Ym9yZGVyLXJhZGl1czowfS5idG4tZmxvYXRpbmcuYnRuLWxhcmdle3dpZHRoOjU2cHg7aGVpZ2h0OjU2cHg7cGFkZGluZzowfS5idG4tZmxvYXRpbmcuYnRuLWxhcmdlLmhhbGZ3YXktZmFie2JvdHRvbTotMjhweH0uYnRuLWZsb2F0aW5nLmJ0bi1sYXJnZSBpe2xpbmUtaGVpZ2h0OjU2cHh9LmJ0bi1mbG9hdGluZy5idG4tc21hbGx7d2lkdGg6MzIuNHB4O2hlaWdodDozMi40cHh9LmJ0bi1mbG9hdGluZy5idG4tc21hbGwuaGFsZndheS1mYWJ7Ym90dG9tOi0xNi4ycHh9LmJ0bi1mbG9hdGluZy5idG4tc21hbGwgaXtsaW5lLWhlaWdodDozMi40cHh9LmJ0bi1mbG9hdGluZy5oYWxmd2F5LWZhYntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoyNHB4O2JvdHRvbTotMjBweH0uYnRuLWZsb2F0aW5nLmhhbGZ3YXktZmFiLmxlZnR7cmlnaHQ6YXV0bztsZWZ0OjI0cHh9LmJ0bi1mbG9hdGluZyBpe3dpZHRoOmluaGVyaXQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjtmb250LXNpemU6MS42cmVtO2xpbmUtaGVpZ2h0OjQwcHh9YnV0dG9uLmJ0bi1mbG9hdGluZ3tib3JkZXI6bm9uZX0uZml4ZWQtYWN0aW9uLWJ0bntwb3NpdGlvbjpmaXhlZDtyaWdodDoyM3B4O2JvdHRvbToyM3B4O3BhZGRpbmctdG9wOjE1cHg7bWFyZ2luLWJvdHRvbTowO3otaW5kZXg6OTk3fS5maXhlZC1hY3Rpb24tYnRuLmFjdGl2ZSB1bHt2aXNpYmlsaXR5OnZpc2libGV9LmZpeGVkLWFjdGlvbi1idG4uZGlyZWN0aW9uLWxlZnQsLmZpeGVkLWFjdGlvbi1idG4uZGlyZWN0aW9uLXJpZ2h0e3BhZGRpbmc6MCAwIDAgMTVweH0uZml4ZWQtYWN0aW9uLWJ0bi5kaXJlY3Rpb24tbGVmdCB1bCwuZml4ZWQtYWN0aW9uLWJ0bi5kaXJlY3Rpb24tcmlnaHQgdWx7dGV4dC1hbGlnbjpyaWdodDtyaWdodDo2NHB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtoZWlnaHQ6MTAwJTtsZWZ0OmF1dG87d2lkdGg6NTAwcHh9LmZpeGVkLWFjdGlvbi1idG4uZGlyZWN0aW9uLWxlZnQgdWwgbGksLmZpeGVkLWFjdGlvbi1idG4uZGlyZWN0aW9uLXJpZ2h0IHVsIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjo3LjVweCAxNXB4IDAgMH0uZml4ZWQtYWN0aW9uLWJ0bi5kaXJlY3Rpb24tcmlnaHR7cGFkZGluZzowIDE1cHggMCAwfS5maXhlZC1hY3Rpb24tYnRuLmRpcmVjdGlvbi1yaWdodCB1bHt0ZXh0LWFsaWduOmxlZnQ7ZGlyZWN0aW9uOnJ0bDtsZWZ0OjY0cHg7cmlnaHQ6YXV0b30uZml4ZWQtYWN0aW9uLWJ0bi5kaXJlY3Rpb24tcmlnaHQgdWwgbGl7bWFyZ2luOjcuNXB4IDAgMCAxNXB4fS5maXhlZC1hY3Rpb24tYnRuLmRpcmVjdGlvbi1ib3R0b217cGFkZGluZzowIDAgMTVweCAwfS5maXhlZC1hY3Rpb24tYnRuLmRpcmVjdGlvbi1ib3R0b20gdWx7dG9wOjY0cHg7Ym90dG9tOmF1dG87ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOnJldmVyc2U7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9LmZpeGVkLWFjdGlvbi1idG4uZGlyZWN0aW9uLWJvdHRvbSB1bCBsaXttYXJnaW46MTVweCAwIDAgMH0uZml4ZWQtYWN0aW9uLWJ0bi50b29sYmFye3BhZGRpbmc6MDtoZWlnaHQ6NTZweH0uZml4ZWQtYWN0aW9uLWJ0bi50b29sYmFyLmFjdGl2ZT5hIGl7b3BhY2l0eTowfS5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgdWx7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt0b3A6MDtib3R0b206MDt6LWluZGV4OjF9LmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciB1bCBsaXstd2Via2l0LWJveC1mbGV4OjE7LXdlYmtpdC1mbGV4OjE7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjA7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfS5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgdWwgbGkgYXtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6NTZweDt6LWluZGV4OjF9LmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciB1bCBsaSBhIGl7bGluZS1oZWlnaHQ6aW5oZXJpdH0uZml4ZWQtYWN0aW9uLWJ0biB1bHtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NjRweDttYXJnaW46MDt2aXNpYmlsaXR5OmhpZGRlbn0uZml4ZWQtYWN0aW9uLWJ0biB1bCBsaXttYXJnaW4tYm90dG9tOjE1cHh9LmZpeGVkLWFjdGlvbi1idG4gdWwgYS5idG4tZmxvYXRpbmd7b3BhY2l0eTowfS5maXhlZC1hY3Rpb24tYnRuIC5mYWItYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6LTE7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWE7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5idG4tZmxhdHstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzQzNDM0O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yczt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5idG4tZmxhdDpmb2N1cywuYnRuLWZsYXQ6aG92ZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idG4tZmxhdDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4xKX0uYnRuLWZsYXQuZGlzYWJsZWQsLmJ0bi1mbGF0LmJ0bi1mbGF0W2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7Y29sb3I6I2IzYjJiMiAhaW1wb3J0YW50O2N1cnNvcjpkZWZhdWx0fS5idG4tbGFyZ2V7aGVpZ2h0OjU0cHg7bGluZS1oZWlnaHQ6NTRweDtmb250LXNpemU6MTVweDtwYWRkaW5nOjAgMjhweH0uYnRuLWxhcmdlIGl7Zm9udC1zaXplOjEuNnJlbX0uYnRuLXNtYWxse2hlaWdodDozMi40cHg7bGluZS1oZWlnaHQ6MzIuNHB4O2ZvbnQtc2l6ZToxM3B4fS5idG4tc21hbGwgaXtmb250LXNpemU6MS4ycmVtfS5idG4tYmxvY2t7ZGlzcGxheTpibG9ja30uZHJvcGRvd24tY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luOjA7ZGlzcGxheTpub25lO21pbi13aWR0aDoxMDBweDtvdmVyZmxvdy15OmF1dG87b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt6LWluZGV4Ojk5OTk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMH0uZHJvcGRvd24tY29udGVudDpmb2N1c3tvdXRsaW5lOjB9LmRyb3Bkb3duLWNvbnRlbnQgbGl7Y2xlYXI6Ym90aDtjb2xvcjpyZ2JhKDAsMCwwLDAuODcpO2N1cnNvcjpwb2ludGVyO21pbi1oZWlnaHQ6NTBweDtsaW5lLWhlaWdodDoxLjVyZW07d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmxlZnR9LmRyb3Bkb3duLWNvbnRlbnQgbGk6aG92ZXIsLmRyb3Bkb3duLWNvbnRlbnQgbGkuYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2VlZX0uZHJvcGRvd24tY29udGVudCBsaTpmb2N1c3tvdXRsaW5lOm5vbmV9LmRyb3Bkb3duLWNvbnRlbnQgbGkuZGl2aWRlcnttaW4taGVpZ2h0OjA7aGVpZ2h0OjFweH0uZHJvcGRvd24tY29udGVudCBsaT5hLC5kcm9wZG93bi1jb250ZW50IGxpPnNwYW57Zm9udC1zaXplOjE2cHg7Y29sb3I6IzI2YTY5YTtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjIycHg7cGFkZGluZzoxNHB4IDE2cHh9LmRyb3Bkb3duLWNvbnRlbnQgbGk+c3Bhbj5sYWJlbHt0b3A6MXB4O2xlZnQ6MDtoZWlnaHQ6MThweH0uZHJvcGRvd24tY29udGVudCBsaT5hPml7aGVpZ2h0OmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtmbG9hdDpsZWZ0O21hcmdpbjowIDI0cHggMCAwO3dpZHRoOjI0cHh9Ym9keS5rZXlib2FyZC1mb2N1c2VkIC5kcm9wZG93bi1jb250ZW50IGxpOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2RhZGFkYX0uaW5wdXQtZmllbGQuY29sIC5kcm9wZG93bi1jb250ZW50IFt0eXBlPVwiY2hlY2tib3hcIl0rbGFiZWx7dG9wOjFweDtsZWZ0OjA7aGVpZ2h0OjE4cHg7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZX0uZHJvcGRvd24tdHJpZ2dlcntjdXJzb3I6cG9pbnRlcn0vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqLy53YXZlcy1lZmZlY3R7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dmVydGljYWwtYWxpZ246bWlkZGxlO3otaW5kZXg6MTstd2Via2l0LXRyYW5zaXRpb246LjNzIGVhc2Utb3V0O3RyYW5zaXRpb246LjNzIGVhc2Utb3V0fS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZXtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi10b3A6LTEwcHg7bWFyZ2luLWxlZnQ6LTEwcHg7b3BhY2l0eTowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC43cyBlYXNlLW91dDt0cmFuc2l0aW9uOmFsbCAwLjdzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCBvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7cG9pbnRlci1ldmVudHM6bm9uZX0ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpfS53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwwLjcpfS53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMzUsNTksMC43KX0ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxle2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTUyLDAsMC43KX0ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxle2JhY2tncm91bmQtY29sb3I6cmdiYSgxNTYsMzksMTc2LDAuNyl9LndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxle2JhY2tncm91bmQtY29sb3I6cmdiYSg3NiwxNzUsODAsMC43KX0ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwxNTAsMTM2LDAuNyl9LndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1cInJlc2V0XCJdLC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtib3JkZXI6MDtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O2JhY2tncm91bmQ6bm9uZX0ud2F2ZXMtZWZmZWN0IGltZ3twb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Oi0xfS53YXZlcy1ub3RyYW5zaXRpb257LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudH0ud2F2ZXMtY2lyY2xley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1tYXNrLWltYWdlOi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSl9LndhdmVzLWlucHV0LXdyYXBwZXJ7Ym9yZGVyLXJhZGl1czowLjJlbTt2ZXJ0aWNhbC1hbGlnbjpib3R0b219LndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxfS53YXZlcy1jaXJjbGV7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6Mi41ZW07aGVpZ2h0OjIuNWVtO2xpbmUtaGVpZ2h0OjIuNWVtO2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtbWFzay1pbWFnZTpub25lfS53YXZlcy1ibG9ja3tkaXNwbGF5OmJsb2NrfS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZXt6LWluZGV4Oi0xfS5tb2RhbHtkaXNwbGF5Om5vbmU7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO3BhZGRpbmc6MDttYXgtaGVpZ2h0OjcwJTt3aWR0aDo1NSU7bWFyZ2luOmF1dG87b3ZlcmZsb3cteTphdXRvO2JvcmRlci1yYWRpdXM6MnB4O3dpbGwtY2hhbmdlOnRvcCwgb3BhY2l0eX0ubW9kYWw6Zm9jdXN7b3V0bGluZTpub25lfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5tb2RhbHt3aWR0aDo4MCV9fS5tb2RhbCBoMSwubW9kYWwgaDIsLm1vZGFsIGgzLC5tb2RhbCBoNHttYXJnaW4tdG9wOjB9Lm1vZGFsIC5tb2RhbC1jb250ZW50e3BhZGRpbmc6MjRweH0ubW9kYWwgLm1vZGFsLWNsb3Nle2N1cnNvcjpwb2ludGVyfS5tb2RhbCAubW9kYWwtZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO3BhZGRpbmc6NHB4IDZweDtoZWlnaHQ6NTZweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246cmlnaHR9Lm1vZGFsIC5tb2RhbC1mb290ZXIgLmJ0biwubW9kYWwgLm1vZGFsLWZvb3RlciAuYnRuLWxhcmdlLC5tb2RhbCAubW9kYWwtZm9vdGVyIC5idG4tc21hbGwsLm1vZGFsIC5tb2RhbC1mb290ZXIgLmJ0bi1mbGF0e21hcmdpbjo2cHggMH0ubW9kYWwtb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTt0b3A6LTI1JTtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDtoZWlnaHQ6MTI1JTt3aWR0aDoxMDAlO2JhY2tncm91bmQ6IzAwMDtkaXNwbGF5Om5vbmU7d2lsbC1jaGFuZ2U6b3BhY2l0eX0ubW9kYWwubW9kYWwtZml4ZWQtZm9vdGVye3BhZGRpbmc6MDtoZWlnaHQ6NzAlfS5tb2RhbC5tb2RhbC1maXhlZC1mb290ZXIgLm1vZGFsLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmNhbGMoMTAwJSAtIDU2cHgpO21heC1oZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93LXk6YXV0b30ubW9kYWwubW9kYWwtZml4ZWQtZm9vdGVyIC5tb2RhbC1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowfS5tb2RhbC5ib3R0b20tc2hlZXR7dG9wOmF1dG87Ym90dG9tOi0xMDAlO21hcmdpbjowO3dpZHRoOjEwMCU7bWF4LWhlaWdodDo0NSU7Ym9yZGVyLXJhZGl1czowO3dpbGwtY2hhbmdlOmJvdHRvbSwgb3BhY2l0eX0uY29sbGFwc2libGV7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkZGQ7bWFyZ2luOi41cmVtIDAgMXJlbSAwfS5jb2xsYXBzaWJsZS1oZWFkZXJ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmc6MXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZH0uY29sbGFwc2libGUtaGVhZGVyOmZvY3Vze291dGxpbmU6MH0uY29sbGFwc2libGUtaGVhZGVyIGl7d2lkdGg6MnJlbTtmb250LXNpemU6MS42cmVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1yaWdodDoxcmVtfS5rZXlib2FyZC1mb2N1c2VkIC5jb2xsYXBzaWJsZS1oZWFkZXI6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5jb2xsYXBzaWJsZS1ib2R5e2Rpc3BsYXk6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjJyZW19LnNpZGVuYXYgLmNvbGxhcHNpYmxlLC5zaWRlbmF2LmZpeGVkIC5jb2xsYXBzaWJsZXtib3JkZXI6bm9uZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LnNpZGVuYXYgLmNvbGxhcHNpYmxlIGxpLC5zaWRlbmF2LmZpeGVkIC5jb2xsYXBzaWJsZSBsaXtwYWRkaW5nOjB9LnNpZGVuYXYgLmNvbGxhcHNpYmxlLWhlYWRlciwuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtaGVhZGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7bGluZS1oZWlnaHQ6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdDtwYWRkaW5nOjAgMTZweH0uc2lkZW5hdiAuY29sbGFwc2libGUtaGVhZGVyOmhvdmVyLC5zaWRlbmF2LmZpeGVkIC5jb2xsYXBzaWJsZS1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDUpfS5zaWRlbmF2IC5jb2xsYXBzaWJsZS1oZWFkZXIgaSwuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtaGVhZGVyIGl7bGluZS1oZWlnaHQ6aW5oZXJpdH0uc2lkZW5hdiAuY29sbGFwc2libGUtYm9keSwuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtYm9keXtib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNpZGVuYXYgLmNvbGxhcHNpYmxlLWJvZHkgbGkgYSwuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtYm9keSBsaSBhe3BhZGRpbmc6MCAyMy41cHggMCAzMXB4fS5jb2xsYXBzaWJsZS5wb3BvdXR7Ym9yZGVyOm5vbmU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5jb2xsYXBzaWJsZS5wb3BvdXQ+bGl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMik7Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTIpO21hcmdpbjowIDI0cHg7LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbiAwLjM1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7dHJhbnNpdGlvbjptYXJnaW4gMC4zNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpfS5jb2xsYXBzaWJsZS5wb3BvdXQ+bGkuYWN0aXZley13ZWJraXQtYm94LXNoYWRvdzowIDVweCAxMXB4IDAgcmdiYSgwLDAsMCwwLjE4KSwwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjE1KTtib3gtc2hhZG93OjAgNXB4IDExcHggMCByZ2JhKDAsMCwwLDAuMTgpLDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMTUpO21hcmdpbjoxNnB4IDB9LmNoaXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjMycHg7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NTAwO2NvbG9yOnJnYmEoMCwwLDAsMC42KTtsaW5lLWhlaWdodDozMnB4O3BhZGRpbmc6MCAxMnB4O2JvcmRlci1yYWRpdXM6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNlNGU0ZTQ7bWFyZ2luLWJvdHRvbTo1cHg7bWFyZ2luLXJpZ2h0OjVweH0uY2hpcDpmb2N1c3tvdXRsaW5lOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhO2NvbG9yOiNmZmZ9LmNoaXA+aW1ne2Zsb2F0OmxlZnQ7bWFyZ2luOjAgOHB4IDAgLTEycHg7aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtib3JkZXItcmFkaXVzOjUwJX0uY2hpcCAuY2xvc2V7Y3Vyc29yOnBvaW50ZXI7ZmxvYXQ6cmlnaHQ7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6OHB4fS5jaGlwc3tib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOWU5ZTllOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTttYXJnaW46MCAwIDhweCAwO21pbi1oZWlnaHQ6NDVweDtvdXRsaW5lOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3M7dHJhbnNpdGlvbjphbGwgLjNzfS5jaGlwcy5mb2N1c3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMjZhNjlhOy13ZWJraXQtYm94LXNoYWRvdzowIDFweCAwIDAgIzI2YTY5YTtib3gtc2hhZG93OjAgMXB4IDAgMCAjMjZhNjlhfS5jaGlwczpob3ZlcntjdXJzb3I6dGV4dH0uY2hpcHMgLmlucHV0e2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MDtjb2xvcjpyZ2JhKDAsMCwwLDAuNik7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjE2cHg7aGVpZ2h0OjNyZW07bGluZS1oZWlnaHQ6MzJweDtvdXRsaW5lOjA7bWFyZ2luOjA7cGFkZGluZzowICFpbXBvcnRhbnQ7d2lkdGg6MTIwcHggIWltcG9ydGFudH0uY2hpcHMgLmlucHV0OmZvY3Vze2JvcmRlcjowICFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudH0uY2hpcHMgLmF1dG9jb21wbGV0ZS1jb250ZW50e21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnByZWZpeCB+IC5jaGlwc3ttYXJnaW4tbGVmdDozcmVtO3dpZHRoOjkyJTt3aWR0aDpjYWxjKDEwMCUgLSAzcmVtKX0uY2hpcHM6ZW1wdHkgfiBsYWJlbHtmb250LXNpemU6MC44cmVtOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTE0MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNDAlKX0ubWF0ZXJpYWxib3hlZHtkaXNwbGF5OmJsb2NrO2N1cnNvcjotd2Via2l0LXpvb20taW47Y3Vyc29yOnpvb20taW47cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjRzO3RyYW5zaXRpb246b3BhY2l0eSAuNHM7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0ubWF0ZXJpYWxib3hlZDpob3Zlcjpub3QoLmFjdGl2ZSl7b3BhY2l0eTouOH0ubWF0ZXJpYWxib3hlZC5hY3RpdmV7Y3Vyc29yOi13ZWJraXQtem9vbS1vdXQ7Y3Vyc29yOnpvb20tb3V0fSNtYXRlcmlhbGJveC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTt6LWluZGV4OjEwMDA7d2lsbC1jaGFuZ2U6b3BhY2l0eX0ubWF0ZXJpYWxib3gtY2FwdGlvbntwb3NpdGlvbjpmaXhlZDtkaXNwbGF5Om5vbmU7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDo1MHB4O2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MCUgMTUlO2hlaWdodDo1MHB4O3otaW5kZXg6MTAwMDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfXNlbGVjdDpmb2N1c3tvdXRsaW5lOjFweCBzb2xpZCAjYzlmM2VmfWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMmFiN2E5fWxhYmVse2ZvbnQtc2l6ZTouOHJlbTtjb2xvcjojOWU5ZTllfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojZDFkMWQxfTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojZDFkMWQxfTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2QxZDFkMX06Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojZDFkMWQxfTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2QxZDFkMX1pbnB1dDpub3QoW3R5cGVdKSxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSx0ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM5ZTllOWU7Ym9yZGVyLXJhZGl1czowO291dGxpbmU6bm9uZTtoZWlnaHQ6M3JlbTt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxNnB4O21hcmdpbjowIDAgOHB4IDA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyIC4zcywgLXdlYmtpdC1ib3gtc2hhZG93IC4zczt0cmFuc2l0aW9uOmJvcmRlciAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAuM3M7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcywgYm9yZGVyIC4zczt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzLCBib3JkZXIgLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgLjNzfWlucHV0Om5vdChbdHlwZV0pOmRpc2FibGVkLGlucHV0Om5vdChbdHlwZV0pW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0saW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSxpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0saW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkLGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0saW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSxpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhOmRpc2FibGVkLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhW3JlYWRvbmx5PVwicmVhZG9ubHlcIl17Y29sb3I6cmdiYSgwLDAsMCwwLjQyKTtib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgcmdiYSgwLDAsMCwwLjQyKX1pbnB1dDpub3QoW3R5cGVdKTpkaXNhYmxlZCtsYWJlbCxpbnB1dDpub3QoW3R5cGVdKVtyZWFkb25seT1cInJlYWRvbmx5XCJdK2xhYmVsLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0rbGFiZWwsaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdK2xhYmVsLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCtsYWJlbCxpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCxpbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCtsYWJlbCxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0rbGFiZWwsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCtsYWJlbCxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCxpbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCxpbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCxpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkK2xhYmVsLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXStsYWJlbCx0ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpkaXNhYmxlZCtsYWJlbCx0ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYVtyZWFkb25seT1cInJlYWRvbmx5XCJdK2xhYmVse2NvbG9yOnJnYmEoMCwwLDAsMC40Mil9aW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXM6bm90KFtyZWFkb25seV0pLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXM6bm90KFtyZWFkb25seV0pe2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMyNmE2OWE7LXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDAgMCAjMjZhNjlhO2JveC1zaGFkb3c6MCAxcHggMCAwICMyNmE2OWF9aW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXM6bm90KFtyZWFkb25seV0pK2xhYmVsLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKStsYWJlbCxpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pK2xhYmVsLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKStsYWJlbCxpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pK2xhYmVsLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkrbGFiZWwsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXM6bm90KFtyZWFkb25seV0pK2xhYmVse2NvbG9yOiMyNmE2OWF9aW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMudmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXMudmFsaWQgfiBsYWJlbHtjb2xvcjojNENBRjUwfWlucHV0Om5vdChbdHlwZV0pOmZvY3VzLmludmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhOmZvY3VzLmludmFsaWQgfiBsYWJlbHtjb2xvcjojRjQ0MzM2fWlucHV0Om5vdChbdHlwZV0pLnZhbGlkYXRlK2xhYmVsLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlK2xhYmVsLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZStsYWJlbCxpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUrbGFiZWwsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZStsYWJlbCxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZStsYWJlbCxpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZStsYWJlbCxpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUrbGFiZWwsaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlK2xhYmVsLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUrbGFiZWwsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZStsYWJlbCxpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlK2xhYmVsLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLnZhbGlkYXRlK2xhYmVse3dpZHRoOjEwMCV9aW5wdXQudmFsaWQ6bm90KFt0eXBlXSksaW5wdXQudmFsaWQ6bm90KFt0eXBlXSk6Zm9jdXMsaW5wdXQudmFsaWRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQudmFsaWRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQudmFsaWRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LnZhbGlkW3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC52YWxpZFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQudmFsaWRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LnZhbGlkW3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQudmFsaWRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC52YWxpZFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC52YWxpZFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC52YWxpZFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC52YWxpZFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC52YWxpZFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQudmFsaWRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LnZhbGlkW3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC52YWxpZFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQudmFsaWRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC52YWxpZFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LnZhbGlkW3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQudmFsaWRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC52YWxpZFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LnZhbGlkW3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWQsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWQ6Zm9jdXMsLnNlbGVjdC13cmFwcGVyLnZhbGlkPmlucHV0LnNlbGVjdC1kcm9wZG93bntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNENBRjUwOy13ZWJraXQtYm94LXNoYWRvdzowIDFweCAwIDAgIzRDQUY1MDtib3gtc2hhZG93OjAgMXB4IDAgMCAjNENBRjUwfWlucHV0LmludmFsaWQ6bm90KFt0eXBlXSksaW5wdXQuaW52YWxpZDpub3QoW3R5cGVdKTpmb2N1cyxpbnB1dC5pbnZhbGlkW3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQuaW52YWxpZFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQuaW52YWxpZFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQuaW52YWxpZFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQuaW52YWxpZFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQuaW52YWxpZFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC5pbnZhbGlkW3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQuaW52YWxpZFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC5pbnZhbGlkW3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LmludmFsaWRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LmludmFsaWRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLGlucHV0LmludmFsaWRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxpbnB1dC5pbnZhbGlkW3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsaW5wdXQuaW52YWxpZFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpLGlucHV0LmludmFsaWRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxpbnB1dC5pbnZhbGlkW3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCksaW5wdXQuaW52YWxpZFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLmludmFsaWQsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEuaW52YWxpZDpmb2N1cywuc2VsZWN0LXdyYXBwZXIuaW52YWxpZD5pbnB1dC5zZWxlY3QtZHJvcGRvd24sLnNlbGVjdC13cmFwcGVyLmludmFsaWQ+aW5wdXQuc2VsZWN0LWRyb3Bkb3duOmZvY3Vze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNGNDQzMzY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDAgMCAjRjQ0MzM2O2JveC1zaGFkb3c6MCAxcHggMCAwICNGNDQzMzZ9aW5wdXQ6bm90KFt0eXBlXSkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxpbnB1dDpub3QoW3R5cGVdKTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0Om5vdChbdHlwZV0pLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxpbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxpbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0saW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxpbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10saW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSx0ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSwuc2VsZWN0LXdyYXBwZXIudmFsaWQgLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sLnNlbGVjdC13cmFwcGVyLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl17Y29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9aW5wdXQ6bm90KFt0eXBlXSkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsLnNlbGVjdC13cmFwcGVyLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXN1Y2Nlc3MpO2NvbG9yOiM0Q0FGNTB9aW5wdXQ6bm90KFt0eXBlXSkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dDpub3QoW3R5cGVdKTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLGlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsdGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcix0ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLC5zZWxlY3Qtd3JhcHBlci5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLWVycm9yKTtjb2xvcjojRjQ0MzM2fWlucHV0Om5vdChbdHlwZV0pK2xhYmVsOmFmdGVyLGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpK2xhYmVsOmFmdGVyLGlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbDphZnRlcixpbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkrbGFiZWw6YWZ0ZXIsaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbDphZnRlcixpbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbDphZnRlcixpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbDphZnRlcixpbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCkrbGFiZWw6YWZ0ZXIsaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpK2xhYmVsOmFmdGVyLGlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkrbGFiZWw6YWZ0ZXIsaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbDphZnRlcixpbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpK2xhYmVsOmFmdGVyLHRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhK2xhYmVsOmFmdGVyLC5zZWxlY3Qtd3JhcHBlcitsYWJlbDphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTtsZWZ0OjA7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjouMnMgb3BhY2l0eSBlYXNlLW91dCwgLjJzIGNvbG9yIGVhc2Utb3V0O3RyYW5zaXRpb246LjJzIG9wYWNpdHkgZWFzZS1vdXQsIC4ycyBjb2xvciBlYXNlLW91dH0uaW5wdXQtZmllbGR7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0uaW5wdXQtZmllbGQuaW5saW5le2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tbGVmdDo1cHh9LmlucHV0LWZpZWxkLmlubGluZSBpbnB1dCwuaW5wdXQtZmllbGQuaW5saW5lIC5zZWxlY3QtZHJvcGRvd257bWFyZ2luLWJvdHRvbToxcmVtfS5pbnB1dC1maWVsZC5jb2wgbGFiZWx7bGVmdDouNzVyZW19LmlucHV0LWZpZWxkLmNvbCAucHJlZml4IH4gbGFiZWwsLmlucHV0LWZpZWxkLmNvbCAucHJlZml4IH4gLnZhbGlkYXRlIH4gbGFiZWx7d2lkdGg6Y2FsYygxMDAlIC0gM3JlbSAtIDEuNXJlbSl9LmlucHV0LWZpZWxkPmxhYmVse2NvbG9yOiM5ZTllOWU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2ZvbnQtc2l6ZToxcmVtO2N1cnNvcjp0ZXh0Oy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMnMgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOmNvbG9yIC4ycyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgY29sb3IgLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgY29sb3IgLjJzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjowJSAxMDAlO3RleHQtYWxpZ246aW5pdGlhbDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEycHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEycHgpfS5pbnB1dC1maWVsZD5sYWJlbDpub3QoLmxhYmVsLWljb24pLmFjdGl2ZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDB9LmlucHV0LWZpZWxkPmlucHV0W3R5cGVdOi13ZWJraXQtYXV0b2ZpbGw6bm90KC5icm93c2VyLWRlZmF1bHQpOm5vdChbdHlwZT1cInNlYXJjaFwiXSkrbGFiZWwsLmlucHV0LWZpZWxkPmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpK2xhYmVsLC5pbnB1dC1maWVsZD5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KStsYWJlbHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDB9LmlucHV0LWZpZWxkIC5oZWxwZXItdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjE4cHg7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTJweDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpfS5pbnB1dC1maWVsZCAuaGVscGVyLXRleHQ6OmFmdGVye29wYWNpdHk6MTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9LmlucHV0LWZpZWxkIC5wcmVmaXh7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6M3JlbTtmb250LXNpemU6MnJlbTstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjJzO3RyYW5zaXRpb246Y29sb3IgLjJzO3RvcDouNXJlbX0uaW5wdXQtZmllbGQgLnByZWZpeC5hY3RpdmV7Y29sb3I6IzI2YTY5YX0uaW5wdXQtZmllbGQgLnByZWZpeCB+IGlucHV0LC5pbnB1dC1maWVsZCAucHJlZml4IH4gdGV4dGFyZWEsLmlucHV0LWZpZWxkIC5wcmVmaXggfiBsYWJlbCwuaW5wdXQtZmllbGQgLnByZWZpeCB+IC52YWxpZGF0ZSB+IGxhYmVsLC5pbnB1dC1maWVsZCAucHJlZml4IH4gLmhlbHBlci10ZXh0LC5pbnB1dC1maWVsZCAucHJlZml4IH4gLmF1dG9jb21wbGV0ZS1jb250ZW50e21hcmdpbi1sZWZ0OjNyZW07d2lkdGg6OTIlO3dpZHRoOmNhbGMoMTAwJSAtIDNyZW0pfS5pbnB1dC1maWVsZCAucHJlZml4IH4gbGFiZWx7bWFyZ2luLWxlZnQ6M3JlbX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuaW5wdXQtZmllbGQgLnByZWZpeCB+IGlucHV0e3dpZHRoOjg2JTt3aWR0aDpjYWxjKDEwMCUgLSAzcmVtKX19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7LmlucHV0LWZpZWxkIC5wcmVmaXggfiBpbnB1dHt3aWR0aDo4MCU7d2lkdGg6Y2FsYygxMDAlIC0gM3JlbSl9fS5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF17ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjouM3MgYmFja2dyb3VuZC1jb2xvcjt0cmFuc2l0aW9uOi4zcyBiYWNrZ3JvdW5kLWNvbG9yfS5uYXYtd3JhcHBlciAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hde2hlaWdodDppbmhlcml0O3BhZGRpbmctbGVmdDo0cmVtO3dpZHRoOmNhbGMoMTAwJSAtIDRyZW0pO2JvcmRlcjowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM0NDR9LmlucHV0LWZpZWxkIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1czpub3QoLmJyb3dzZXItZGVmYXVsdCkrbGFiZWwgaSwuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB+IC5tZGktbmF2aWdhdGlvbi1jbG9zZSwuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB+IC5tYXRlcmlhbC1pY29uc3tjb2xvcjojNDQ0fS5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF0rLmxhYmVsLWljb257LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTtsZWZ0OjFyZW19LmlucHV0LWZpZWxkIGlucHV0W3R5cGU9c2VhcmNoXSB+IC5tZGktbmF2aWdhdGlvbi1jbG9zZSwuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdIH4gLm1hdGVyaWFsLWljb25ze3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjFyZW07Y29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjJyZW07LXdlYmtpdC10cmFuc2l0aW9uOi4zcyBjb2xvcjt0cmFuc2l0aW9uOi4zcyBjb2xvcn10ZXh0YXJlYXt3aWR0aDoxMDAlO2hlaWdodDozcmVtO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9dGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWF7bGluZS1oZWlnaHQ6bm9ybWFsO292ZXJmbG93LXk6aGlkZGVuO3BhZGRpbmc6LjhyZW0gMCAuOHJlbSAwO3Jlc2l6ZTpub25lO21pbi1oZWlnaHQ6M3JlbTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmhpZGRlbmRpdnt2aXNpYmlsaXR5OmhpZGRlbjt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7cGFkZGluZy10b3A6MS4ycmVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3otaW5kZXg6LTF9LmF1dG9jb21wbGV0ZS1jb250ZW50IGxpIC5oaWdobGlnaHR7Y29sb3I6IzQ0NH0uYXV0b2NvbXBsZXRlLWNvbnRlbnQgbGkgaW1ne2hlaWdodDo0MHB4O3dpZHRoOjQwcHg7bWFyZ2luOjVweCAxNXB4fS5jaGFyYWN0ZXItY291bnRlcnttaW4taGVpZ2h0OjE4cHh9W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpLFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZHtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX1bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkrc3BhbixbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrc3Bhbntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MzVweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MjVweDtsaW5lLWhlaWdodDoyNXB4O2ZvbnQtc2l6ZToxcmVtOy13ZWJraXQtdHJhbnNpdGlvbjouMjhzIGVhc2U7dHJhbnNpdGlvbjouMjhzIGVhc2U7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfVt0eXBlPVwicmFkaW9cIl0rc3BhbjpiZWZvcmUsW3R5cGU9XCJyYWRpb1wiXStzcGFuOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO21hcmdpbjo0cHg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDt6LWluZGV4OjA7LXdlYmtpdC10cmFuc2l0aW9uOi4yOHMgZWFzZTt0cmFuc2l0aW9uOi4yOHMgZWFzZX1bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkrc3BhbjpiZWZvcmUsW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpK3NwYW46YWZ0ZXIsW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK3NwYW46YmVmb3JlLFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtzcGFuOmFmdGVyLFt0eXBlPVwicmFkaW9cIl0ud2l0aC1nYXA6Y2hlY2tlZCtzcGFuOmJlZm9yZSxbdHlwZT1cInJhZGlvXCJdLndpdGgtZ2FwOmNoZWNrZWQrc3BhbjphZnRlcntib3JkZXItcmFkaXVzOjUwJX1bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkrc3BhbjpiZWZvcmUsW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpK3NwYW46YWZ0ZXJ7Ym9yZGVyOjJweCBzb2xpZCAjNWE1YTVhfVt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKStzcGFuOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX1bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrc3BhbjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudH1bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrc3BhbjphZnRlcixbdHlwZT1cInJhZGlvXCJdLndpdGgtZ2FwOmNoZWNrZWQrc3BhbjpiZWZvcmUsW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkK3NwYW46YWZ0ZXJ7Ym9yZGVyOjJweCBzb2xpZCAjMjZhNjlhfVt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtzcGFuOmFmdGVyLFt0eXBlPVwicmFkaW9cIl0ud2l0aC1nYXA6Y2hlY2tlZCtzcGFuOmFmdGVye2JhY2tncm91bmQtY29sb3I6IzI2YTY5YX1bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrc3BhbjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjAyKTt0cmFuc2Zvcm06c2NhbGUoMS4wMil9W3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkK3NwYW46YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX1bdHlwZT1cInJhZGlvXCJdLnRhYmJlZDpmb2N1cytzcGFuOmJlZm9yZXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7Ym94LXNoYWRvdzowIDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKX1bdHlwZT1cInJhZGlvXCJdLndpdGgtZ2FwOmRpc2FibGVkOmNoZWNrZWQrc3BhbjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLDAuNDIpfVt0eXBlPVwicmFkaW9cIl0ud2l0aC1nYXA6ZGlzYWJsZWQ6Y2hlY2tlZCtzcGFuOmFmdGVye2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjQyKX1bdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrc3BhbjpiZWZvcmUsW3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZDpjaGVja2VkK3NwYW46YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsMC40Mil9W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCtzcGFue2NvbG9yOnJnYmEoMCwwLDAsMC40Mil9W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZDpub3QoOmNoZWNrZWQpK3NwYW46YmVmb3Jle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLDAuNDIpfVt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQ6Y2hlY2tlZCtzcGFuOmFmdGVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjQyKTtib3JkZXItY29sb3I6Izk0OTQ5NH1bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCksW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2Vke3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfVt0eXBlPVwiY2hlY2tib3hcIl0rc3Bhbjpub3QoLmxldmVyKXtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MzVweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MjVweDtsaW5lLWhlaWdodDoyNXB4O2ZvbnQtc2l6ZToxcmVtOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1bdHlwZT1cImNoZWNrYm94XCJdK3NwYW46bm90KC5sZXZlcik6YmVmb3JlLFt0eXBlPVwiY2hlY2tib3hcIl06bm90KC5maWxsZWQtaW4pK3NwYW46bm90KC5sZXZlcik6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MThweDtoZWlnaHQ6MThweDt6LWluZGV4OjA7Ym9yZGVyOjJweCBzb2xpZCAjNWE1YTVhO2JvcmRlci1yYWRpdXM6MXB4O21hcmdpbi10b3A6M3B4Oy13ZWJraXQtdHJhbnNpdGlvbjouMnM7dHJhbnNpdGlvbjouMnN9W3R5cGU9XCJjaGVja2JveFwiXTpub3QoLmZpbGxlZC1pbikrc3Bhbjpub3QoLmxldmVyKTphZnRlcntib3JkZXI6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmRpc2FibGVkK3NwYW46bm90KC5sZXZlcik6YmVmb3Jle2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjQyKX1bdHlwZT1cImNoZWNrYm94XCJdLnRhYmJlZDpmb2N1cytzcGFuOm5vdCgubGV2ZXIpOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7Ym94LXNoYWRvdzowIDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4xKX1bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrc3Bhbjpub3QoLmxldmVyKTpiZWZvcmV7dG9wOi00cHg7bGVmdDotNXB4O3dpZHRoOjEycHg7aGVpZ2h0OjIycHg7Ym9yZGVyLXRvcDoycHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoycHggc29saWQgIzI2YTY5YTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjZhNjlhOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0MGRlZyk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlfVt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpkaXNhYmxlZCtzcGFuOmJlZm9yZXtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsMC40Mik7Ym9yZGVyLWJvdHRvbToycHggc29saWQgcmdiYSgwLDAsMCwwLjQyKX1bdHlwZT1cImNoZWNrYm94XCJdOmluZGV0ZXJtaW5hdGUrc3Bhbjpub3QoLmxldmVyKTpiZWZvcmV7dG9wOi0xMXB4O2xlZnQ6LTEycHg7d2lkdGg6MTBweDtoZWlnaHQ6MjJweDtib3JkZXItdG9wOm5vbmU7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkICMyNmE2OWE7Ym9yZGVyLWJvdHRvbTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlfVt0eXBlPVwiY2hlY2tib3hcIl06aW5kZXRlcm1pbmF0ZTpkaXNhYmxlZCtzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZXtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsMC40Mik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbitzcGFuOm5vdCgubGV2ZXIpOmFmdGVye2JvcmRlci1yYWRpdXM6MnB4fVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluK3NwYW46bm90KC5sZXZlcik6YmVmb3JlLFt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluK3NwYW46bm90KC5sZXZlcik6YWZ0ZXJ7Y29udGVudDonJztsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlciAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMsIHdpZHRoIC4yMHMgLjFzLCBoZWlnaHQgLjIwcyAuMXMsIHRvcCAuMjBzIC4xcywgbGVmdCAuMjBzIC4xczt0cmFuc2l0aW9uOmJvcmRlciAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMsIHdpZHRoIC4yMHMgLjFzLCBoZWlnaHQgLjIwcyAuMXMsIHRvcCAuMjBzIC4xcywgbGVmdCAuMjBzIC4xczt6LWluZGV4OjF9W3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKStzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZXt3aWR0aDowO2hlaWdodDowO2JvcmRlcjozcHggc29saWQgdHJhbnNwYXJlbnQ7bGVmdDo2cHg7dG9wOjEwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWigzN2RlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMzdkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCV9W3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKStzcGFuOm5vdCgubGV2ZXIpOmFmdGVye2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkICM1YTVhNWE7dG9wOjBweDt6LWluZGV4OjB9W3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCtzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZXt0b3A6MDtsZWZ0OjFweDt3aWR0aDo4cHg7aGVpZ2h0OjEzcHg7Ym9yZGVyLXRvcDoycHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoycHggc29saWQgI2ZmZjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmZmOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMzdkZWcpO3RyYW5zZm9ybTpyb3RhdGVaKDM3ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAxMDAlfVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmNoZWNrZWQrc3Bhbjpub3QoLmxldmVyKTphZnRlcnt0b3A6MDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JvcmRlcjoycHggc29saWQgIzI2YTY5YTtiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWE7ei1pbmRleDowfVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluLnRhYmJlZDpmb2N1cytzcGFuOm5vdCgubGV2ZXIpOmFmdGVye2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlci1jb2xvcjojNWE1YTVhO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjEpfVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluLnRhYmJlZDpjaGVja2VkOmZvY3VzK3NwYW46bm90KC5sZXZlcik6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhO2JvcmRlci1jb2xvcjojMjZhNjlhfVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrc3Bhbjpub3QoLmxldmVyKTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50fVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrc3Bhbjpub3QoLmxldmVyKTphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjojOTQ5NDk0fVt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmRpc2FibGVkOmNoZWNrZWQrc3Bhbjpub3QoLmxldmVyKTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpkaXNhYmxlZDpjaGVja2VkK3NwYW46bm90KC5sZXZlcik6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojOTQ5NDk0O2JvcmRlci1jb2xvcjojOTQ5NDk0fS5zd2l0Y2gsLnN3aXRjaCAqey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3aXRjaCBsYWJlbHtjdXJzb3I6cG9pbnRlcn0uc3dpdGNoIGxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hde29wYWNpdHk6MDt3aWR0aDowO2hlaWdodDowfS5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCsubGV2ZXJ7YmFja2dyb3VuZC1jb2xvcjojODRjN2MxfS5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCsubGV2ZXI6YmVmb3JlLC5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCsubGV2ZXI6YWZ0ZXJ7bGVmdDoxOHB4fS5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCsubGV2ZXI6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhfS5zd2l0Y2ggbGFiZWwgLmxldmVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozNnB4O2hlaWdodDoxNHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjM4KTtib3JkZXItcmFkaXVzOjE1cHg7bWFyZ2luLXJpZ2h0OjEwcHg7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgMC4zcyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZCAwLjNzIGVhc2U7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbjowIDE2cHh9LnN3aXRjaCBsYWJlbCAubGV2ZXI6YmVmb3JlLC5zd2l0Y2ggbGFiZWwgLmxldmVyOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JvcmRlci1yYWRpdXM6NTAlO2xlZnQ6MDt0b3A6LTNweDstd2Via2l0LXRyYW5zaXRpb246bGVmdCAwLjNzIGVhc2UsIGJhY2tncm91bmQgLjNzIGVhc2UsIC13ZWJraXQtYm94LXNoYWRvdyAwLjFzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4xcyBlYXNlO3RyYW5zaXRpb246bGVmdCAwLjNzIGVhc2UsIGJhY2tncm91bmQgLjNzIGVhc2UsIC13ZWJraXQtYm94LXNoYWRvdyAwLjFzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4xcyBlYXNlO3RyYW5zaXRpb246bGVmdCAwLjNzIGVhc2UsIGJhY2tncm91bmQgLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gLjFzIGVhc2U7dHJhbnNpdGlvbjpsZWZ0IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAuMXMgZWFzZSwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjFzIGVhc2V9LnN3aXRjaCBsYWJlbCAubGV2ZXI6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgzOCwxNjYsMTU0LDAuMTUpfS5zd2l0Y2ggbGFiZWwgLmxldmVyOmFmdGVye2JhY2tncm91bmQtY29sb3I6I0YxRjFGMTstd2Via2l0LWJveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xMik7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKX1pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOm5vdCg6ZGlzYWJsZWQpIH4gLmxldmVyOmFjdGl2ZTo6YmVmb3JlLGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6bm90KDpkaXNhYmxlZCkudGFiYmVkOmZvY3VzIH4gLmxldmVyOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMi40KTt0cmFuc2Zvcm06c2NhbGUoMi40KTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMTY2LDE1NCwwLjE1KX1pbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKSB+IC5sZXZlcjphY3RpdmU6YmVmb3JlLGlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpLnRhYmJlZDpmb2N1cyB+IC5sZXZlcjo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDIuNCk7dHJhbnNmb3JtOnNjYWxlKDIuNCk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDgpfS5zd2l0Y2ggaW5wdXRbdHlwZT1jaGVja2JveF1bZGlzYWJsZWRdKy5sZXZlcntjdXJzb3I6ZGVmYXVsdDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4xMil9LnN3aXRjaCBsYWJlbCBpbnB1dFt0eXBlPWNoZWNrYm94XVtkaXNhYmxlZF0rLmxldmVyOmFmdGVyLC5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF1bZGlzYWJsZWRdOmNoZWNrZWQrLmxldmVyOmFmdGVye2JhY2tncm91bmQtY29sb3I6Izk0OTQ5NH1zZWxlY3R7ZGlzcGxheTpub25lfXNlbGVjdC5icm93c2VyLWRlZmF1bHR7ZGlzcGxheTpibG9ja31zZWxlY3R7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuOSk7d2lkdGg6MTAwJTtwYWRkaW5nOjVweDtib3JkZXI6MXB4IHNvbGlkICNmMmYyZjI7Ym9yZGVyLXJhZGl1czoycHg7aGVpZ2h0OjNyZW19LnNlbGVjdC1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZX0uc2VsZWN0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LnNlbGVjdC13cmFwcGVyLnZhbGlkK2xhYmVsLC5zZWxlY3Qtd3JhcHBlci5pbnZhbGlkK2xhYmVse3dpZHRoOjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzllOWU5ZTtvdXRsaW5lOm5vbmU7aGVpZ2h0OjNyZW07bGluZS1oZWlnaHQ6M3JlbTt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxNnB4O21hcmdpbjowIDAgOHB4IDA7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MX0uc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duOmZvY3Vze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMyNmE2OWF9LnNlbGVjdC13cmFwcGVyIC5jYXJldHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2JvdHRvbTowO21hcmdpbjphdXRvIDA7ei1pbmRleDowO2ZpbGw6cmdiYSgwLDAsMCwwLjg3KX0uc2VsZWN0LXdyYXBwZXIrbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yNnB4O2ZvbnQtc2l6ZTouOHJlbX1zZWxlY3Q6ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjQyKX0uc2VsZWN0LXdyYXBwZXIuZGlzYWJsZWQrbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwwLjQyKX0uc2VsZWN0LXdyYXBwZXIuZGlzYWJsZWQgLmNhcmV0e2ZpbGw6cmdiYSgwLDAsMCwwLjQyKX0uc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duOmRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsMC40Mik7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zZWxlY3Qtd3JhcHBlciBpe2NvbG9yOnJnYmEoMCwwLDAsMC4zKX0uc2VsZWN0LWRyb3Bkb3duIGxpLmRpc2FibGVkLC5zZWxlY3QtZHJvcGRvd24gbGkuZGlzYWJsZWQ+c3Bhbiwuc2VsZWN0LWRyb3Bkb3duIGxpLm9wdGdyb3Vwe2NvbG9yOnJnYmEoMCwwLDAsMC4zKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkua2V5Ym9hcmQtZm9jdXNlZCAuc2VsZWN0LWRyb3Bkb3duLmRyb3Bkb3duLWNvbnRlbnQgbGk6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDgpfS5zZWxlY3QtZHJvcGRvd24uZHJvcGRvd24tY29udGVudCBsaTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4wOCl9LnNlbGVjdC1kcm9wZG93bi5kcm9wZG93bi1jb250ZW50IGxpLnNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjAzKX0ucHJlZml4IH4gLnNlbGVjdC13cmFwcGVye21hcmdpbi1sZWZ0OjNyZW07d2lkdGg6OTIlO3dpZHRoOmNhbGMoMTAwJSAtIDNyZW0pfS5wcmVmaXggfiBsYWJlbHttYXJnaW4tbGVmdDozcmVtfS5zZWxlY3QtZHJvcGRvd24gbGkgaW1ne2hlaWdodDo0MHB4O3dpZHRoOjQwcHg7bWFyZ2luOjVweCAxNXB4O2Zsb2F0OnJpZ2h0fS5zZWxlY3QtZHJvcGRvd24gbGkub3B0Z3JvdXB7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZX0uc2VsZWN0LWRyb3Bkb3duIGxpLm9wdGdyb3VwLnNlbGVjdGVkPnNwYW57Y29sb3I6cmdiYSgwLDAsMCwwLjcpfS5zZWxlY3QtZHJvcGRvd24gbGkub3B0Z3JvdXA+c3Bhbntjb2xvcjpyZ2JhKDAsMCwwLDAuNCl9LnNlbGVjdC1kcm9wZG93biBsaS5vcHRncm91cCB+IGxpLm9wdGdyb3VwLW9wdGlvbntwYWRkaW5nLWxlZnQ6MXJlbX0uZmlsZS1maWVsZHtwb3NpdGlvbjpyZWxhdGl2ZX0uZmlsZS1maWVsZCAuZmlsZS1wYXRoLXdyYXBwZXJ7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctbGVmdDoxMHB4fS5maWxlLWZpZWxkIGlucHV0LmZpbGUtcGF0aHt3aWR0aDoxMDAlfS5maWxlLWZpZWxkIC5idG4sLmZpbGUtZmllbGQgLmJ0bi1sYXJnZSwuZmlsZS1maWVsZCAuYnRuLXNtYWxse2Zsb2F0OmxlZnQ7aGVpZ2h0OjNyZW07bGluZS1oZWlnaHQ6M3JlbX0uZmlsZS1maWVsZCBzcGFue2N1cnNvcjpwb2ludGVyfS5maWxlLWZpZWxkIGlucHV0W3R5cGU9ZmlsZV17cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtsZWZ0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC1zaXplOjIwcHg7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowO2ZpbHRlcjphbHBoYShvcGFjaXR5PTApfS5maWxlLWZpZWxkIGlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue2Rpc3BsYXk6bm9uZX0ucmFuZ2UtZmllbGR7cG9zaXRpb246cmVsYXRpdmV9aW5wdXRbdHlwZT1yYW5nZV0saW5wdXRbdHlwZT1yYW5nZV0rLnRodW1ie2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2Vde3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO3dpZHRoOjEwMCU7bWFyZ2luOjE1cHggMDtwYWRkaW5nOjB9aW5wdXRbdHlwZT1yYW5nZV06Zm9jdXN7b3V0bGluZTpub25lfWlucHV0W3R5cGU9cmFuZ2VdKy50aHVtYntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTBweDtsZWZ0OjA7Ym9yZGVyOm5vbmU7aGVpZ2h0OjA7d2lkdGg6MDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWE7bWFyZ2luLWxlZnQ6N3B4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9aW5wdXRbdHlwZT1yYW5nZV0rLnRodW1iIC52YWx1ZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzI2YTY5YTtmb250LXNpemU6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfWlucHV0W3R5cGU9cmFuZ2VdKy50aHVtYi5hY3RpdmV7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDUwJSAwfWlucHV0W3R5cGU9cmFuZ2VdKy50aHVtYi5hY3RpdmUgLnZhbHVle2NvbG9yOiNmZmY7bWFyZ2luLWxlZnQ6LTFweDttYXJnaW4tdG9wOjhweDtmb250LXNpemU6MTBweH1pbnB1dFt0eXBlPXJhbmdlXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7aGVpZ2h0OjNweDtiYWNrZ3JvdW5kOiNjMmMwYzI7Ym9yZGVyOm5vbmV9aW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JvcmRlcjpub25lO2hlaWdodDoxNHB4O3dpZHRoOjE0cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojMjZhNjlhOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjNzO3RyYW5zaXRpb246LXdlYmtpdC1ib3gtc2hhZG93IC4zczt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAuM3M7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTttYXJnaW46LTVweCAwIDAgMH0ua2V5Ym9hcmQtZm9jdXNlZCBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czpub3QoLmFjdGl2ZSk6Oi13ZWJraXQtc2xpZGVyLXRodW1iey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAxMHB4IHJnYmEoMzgsMTY2LDE1NCwwLjI2KTtib3gtc2hhZG93OjAgMCAwIDEwcHggcmdiYSgzOCwxNjYsMTU0LDAuMjYpfWlucHV0W3R5cGU9cmFuZ2Vde2JvcmRlcjoxcHggc29saWQgd2hpdGV9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2t7aGVpZ2h0OjNweDtiYWNrZ3JvdW5kOiNjMmMwYzI7Ym9yZGVyOm5vbmV9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWJ7Ym9yZGVyOm5vbmU7aGVpZ2h0OjE0cHg7d2lkdGg6MTRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiMyNmE2OWE7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtYm94LXNoYWRvdyAuM3M7dHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjNzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3M7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcywgLXdlYmtpdC1ib3gtc2hhZG93IC4zczttYXJnaW4tdG9wOi01cHh9aW5wdXRbdHlwZT1yYW5nZV06LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggc29saWQgI2ZmZjtvdXRsaW5lLW9mZnNldDotMXB4fS5rZXlib2FyZC1mb2N1c2VkIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOm5vdCguYWN0aXZlKTo6LW1vei1yYW5nZS10aHVtYntib3gtc2hhZG93OjAgMCAwIDEwcHggcmdiYSgzOCwxNjYsMTU0LDAuMjYpfWlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2t7aGVpZ2h0OjNweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItd2lkdGg6NnB4IDA7Y29sb3I6dHJhbnNwYXJlbnR9aW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6Izc3N31pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDojZGRkfWlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWJ7Ym9yZGVyOm5vbmU7aGVpZ2h0OjE0cHg7d2lkdGg6MTRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiMyNmE2OWE7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtYm94LXNoYWRvdyAuM3M7dHJhbnNpdGlvbjotd2Via2l0LWJveC1zaGFkb3cgLjNzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3M7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcywgLXdlYmtpdC1ib3gtc2hhZG93IC4zc30ua2V5Ym9hcmQtZm9jdXNlZCBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czpub3QoLmFjdGl2ZSk6Oi1tcy10aHVtYntib3gtc2hhZG93OjAgMCAwIDEwcHggcmdiYSgzOCwxNjYsMTU0LDAuMjYpfS50YWJsZS1vZi1jb250ZW50cy5maXhlZHtwb3NpdGlvbjpmaXhlZH0udGFibGUtb2YtY29udGVudHMgbGl7cGFkZGluZzoycHggMH0udGFibGUtb2YtY29udGVudHMgYXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDozMDA7Y29sb3I6Izc1NzU3NTtwYWRkaW5nLWxlZnQ6MTZweDtoZWlnaHQ6MS41cmVtO2xpbmUtaGVpZ2h0OjEuNXJlbTtsZXR0ZXItc3BhY2luZzouNDtkaXNwbGF5OmlubGluZS1ibG9ja30udGFibGUtb2YtY29udGVudHMgYTpob3Zlcntjb2xvcjojYThhOGE4O3BhZGRpbmctbGVmdDoxNXB4O2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZWU2ZTczfS50YWJsZS1vZi1jb250ZW50cyBhLmFjdGl2ZXtmb250LXdlaWdodDo1MDA7cGFkZGluZy1sZWZ0OjE0cHg7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkICNlZTZlNzN9LnNpZGVuYXZ7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MzAwcHg7bGVmdDowO3RvcDowO21hcmdpbjowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTtoZWlnaHQ6MTAwJTtoZWlnaHQ6Y2FsYygxMDAlICsgNjBweCk7aGVpZ2h0Oi1tb3otY2FsYygxMDAlKTtwYWRkaW5nLWJvdHRvbTo2MHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjt6LWluZGV4Ojk5OTtvdmVyZmxvdy15OmF1dG87d2lsbC1jaGFuZ2U6dHJhbnNmb3JtOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTA1JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwNSUpfS5zaWRlbmF2LnJpZ2h0LWFsaWduZWR7cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwNSUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwNSUpO2xlZnQ6YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpfS5zaWRlbmF2IC5jb2xsYXBzaWJsZXttYXJnaW46MH0uc2lkZW5hdiBsaXtmbG9hdDpub25lO2xpbmUtaGVpZ2h0OjQ4cHh9LnNpZGVuYXYgbGkuYWN0aXZle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjA1KX0uc2lkZW5hdiBsaT5he2NvbG9yOnJnYmEoMCwwLDAsMC44Nyk7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOjAgMzJweH0uc2lkZW5hdiBsaT5hOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjA1KX0uc2lkZW5hdiBsaT5hLmJ0biwuc2lkZW5hdiBsaT5hLmJ0bi1sYXJnZSwuc2lkZW5hdiBsaT5hLmJ0bi1zbWFsbCwuc2lkZW5hdiBsaT5hLmJ0bi1sYXJnZSwuc2lkZW5hdiBsaT5hLmJ0bi1mbGF0LC5zaWRlbmF2IGxpPmEuYnRuLWZsb2F0aW5ne21hcmdpbjoxMHB4IDE1cHh9LnNpZGVuYXYgbGk+YS5idG4sLnNpZGVuYXYgbGk+YS5idG4tbGFyZ2UsLnNpZGVuYXYgbGk+YS5idG4tc21hbGwsLnNpZGVuYXYgbGk+YS5idG4tbGFyZ2UsLnNpZGVuYXYgbGk+YS5idG4tZmxvYXRpbmd7Y29sb3I6I2ZmZn0uc2lkZW5hdiBsaT5hLmJ0bi1mbGF0e2NvbG9yOiMzNDM0MzR9LnNpZGVuYXYgbGk+YS5idG46aG92ZXIsLnNpZGVuYXYgbGk+YS5idG4tbGFyZ2U6aG92ZXIsLnNpZGVuYXYgbGk+YS5idG4tc21hbGw6aG92ZXIsLnNpZGVuYXYgbGk+YS5idG4tbGFyZ2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMmJiYmFkfS5zaWRlbmF2IGxpPmEuYnRuLWZsb2F0aW5nOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI2YTY5YX0uc2lkZW5hdiBsaT5hPmksLnNpZGVuYXYgbGk+YT5bY2xhc3NePVwibWRpLVwiXSwuc2lkZW5hdiBsaT5hIGxpPmE+W2NsYXNzKj1cIm1kaS1cIl0sLnNpZGVuYXYgbGk+YT5pLm1hdGVyaWFsLWljb25ze2Zsb2F0OmxlZnQ7aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDttYXJnaW46MCAzMnB4IDAgMDt3aWR0aDoyNHB4O2NvbG9yOnJnYmEoMCwwLDAsMC41NCl9LnNpZGVuYXYgLmRpdmlkZXJ7bWFyZ2luOjhweCAwIDAgMH0uc2lkZW5hdiAuc3ViaGVhZGVye2N1cnNvcjppbml0aWFsO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6NDhweH0uc2lkZW5hdiAuc3ViaGVhZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNpZGVuYXYgLnVzZXItdmlld3twb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjMycHggMzJweCAwO21hcmdpbi1ib3R0b206OHB4fS5zaWRlbmF2IC51c2VyLXZpZXc+YXtoZWlnaHQ6YXV0bztwYWRkaW5nOjB9LnNpZGVuYXYgLnVzZXItdmlldz5hOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNpZGVuYXYgLnVzZXItdmlldyAuYmFja2dyb3VuZHtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDotMX0uc2lkZW5hdiAudXNlci12aWV3IC5jaXJjbGUsLnNpZGVuYXYgLnVzZXItdmlldyAubmFtZSwuc2lkZW5hdiAudXNlci12aWV3IC5lbWFpbHtkaXNwbGF5OmJsb2NrfS5zaWRlbmF2IC51c2VyLXZpZXcgLmNpcmNsZXtoZWlnaHQ6NjRweDt3aWR0aDo2NHB4fS5zaWRlbmF2IC51c2VyLXZpZXcgLm5hbWUsLnNpZGVuYXYgLnVzZXItdmlldyAuZW1haWx7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjRweH0uc2lkZW5hdiAudXNlci12aWV3IC5uYW1le21hcmdpbi10b3A6MTZweDtmb250LXdlaWdodDo1MDB9LnNpZGVuYXYgLnVzZXItdmlldyAuZW1haWx7cGFkZGluZy1ib3R0b206MTZweDtmb250LXdlaWdodDo0MDB9LmRyYWctdGFyZ2V0e2hlaWdodDoxMDAlO3dpZHRoOjEwcHg7cG9zaXRpb246Zml4ZWQ7dG9wOjA7ei1pbmRleDo5OTh9LmRyYWctdGFyZ2V0LnJpZ2h0LWFsaWduZWR7cmlnaHQ6MH0uc2lkZW5hdi5zaWRlbmF2LWZpeGVke2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3Bvc2l0aW9uOmZpeGVkfS5zaWRlbmF2LnNpZGVuYXYtZml4ZWQucmlnaHQtYWxpZ25lZHtyaWdodDowO2xlZnQ6YXV0b31AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuc2lkZW5hdi5zaWRlbmF2LWZpeGVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwNSUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDUlKX0uc2lkZW5hdi5zaWRlbmF2LWZpeGVkLnJpZ2h0LWFsaWduZWR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDUlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDUlKX0uc2lkZW5hdj5he3BhZGRpbmc6MCAxNnB4fS5zaWRlbmF2IC51c2VyLXZpZXd7cGFkZGluZzoxNnB4IDE2cHggMH19LnNpZGVuYXYgLmNvbGxhcHNpYmxlLWJvZHk+dWw6bm90KC5jb2xsYXBzaWJsZSk+bGkuYWN0aXZlLC5zaWRlbmF2LnNpZGVuYXYtZml4ZWQgLmNvbGxhcHNpYmxlLWJvZHk+dWw6bm90KC5jb2xsYXBzaWJsZSk+bGkuYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2VlNmU3M30uc2lkZW5hdiAuY29sbGFwc2libGUtYm9keT51bDpub3QoLmNvbGxhcHNpYmxlKT5saS5hY3RpdmUgYSwuc2lkZW5hdi5zaWRlbmF2LWZpeGVkIC5jb2xsYXBzaWJsZS1ib2R5PnVsOm5vdCguY29sbGFwc2libGUpPmxpLmFjdGl2ZSBhe2NvbG9yOiNmZmZ9LnNpZGVuYXYgLmNvbGxhcHNpYmxlLWJvZHl7cGFkZGluZzowfS5zaWRlbmF2LW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7b3BhY2l0eTowO2hlaWdodDoxMjB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC41KTt6LWluZGV4Ojk5NztkaXNwbGF5Om5vbmV9LnByZWxvYWRlci13cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHh9LnByZWxvYWRlci13cmFwcGVyLnNtYWxse3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LnByZWxvYWRlci13cmFwcGVyLmJpZ3t3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5wcmVsb2FkZXItd3JhcHBlci5hY3RpdmV7LXdlYmtpdC1hbmltYXRpb246Y29udGFpbmVyLXJvdGF0ZSAxNTY4bXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpjb250YWluZXItcm90YXRlIDE1NjhtcyBsaW5lYXIgaW5maW5pdGV9QC13ZWJraXQta2V5ZnJhbWVzIGNvbnRhaW5lci1yb3RhdGV7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgY29udGFpbmVyLXJvdGF0ZXt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5zcGlubmVyLWxheWVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO2JvcmRlci1jb2xvcjojMjZhNjlhfS5zcGlubmVyLWJsdWUsLnNwaW5uZXItYmx1ZS1vbmx5e2JvcmRlci1jb2xvcjojNDI4NWY0fS5zcGlubmVyLXJlZCwuc3Bpbm5lci1yZWQtb25seXtib3JkZXItY29sb3I6I2RiNDQzN30uc3Bpbm5lci15ZWxsb3csLnNwaW5uZXIteWVsbG93LW9ubHl7Ym9yZGVyLWNvbG9yOiNmNGI0MDB9LnNwaW5uZXItZ3JlZW4sLnNwaW5uZXItZ3JlZW4tb25seXtib3JkZXItY29sb3I6IzBmOWQ1OH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLnNwaW5uZXItYmx1ZXstd2Via2l0LWFuaW1hdGlvbjpmaWxsLXVuZmlsbC1yb3RhdGUgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aCxibHVlLWZhZGUtaW4tb3V0IDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7YW5pbWF0aW9uOmZpbGwtdW5maWxsLXJvdGF0ZSA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoLGJsdWUtZmFkZS1pbi1vdXQgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLnNwaW5uZXItcmVkey13ZWJraXQtYW5pbWF0aW9uOmZpbGwtdW5maWxsLXJvdGF0ZSA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoLHJlZC1mYWRlLWluLW91dCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO2FuaW1hdGlvbjpmaWxsLXVuZmlsbC1yb3RhdGUgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aCxyZWQtZmFkZS1pbi1vdXQgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLnNwaW5uZXIteWVsbG93ey13ZWJraXQtYW5pbWF0aW9uOmZpbGwtdW5maWxsLXJvdGF0ZSA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoLHllbGxvdy1mYWRlLWluLW91dCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO2FuaW1hdGlvbjpmaWxsLXVuZmlsbC1yb3RhdGUgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aCx5ZWxsb3ctZmFkZS1pbi1vdXQgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLnNwaW5uZXItZ3JlZW57LXdlYmtpdC1hbmltYXRpb246ZmlsbC11bmZpbGwtcm90YXRlIDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGgsZ3JlZW4tZmFkZS1pbi1vdXQgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aDthbmltYXRpb246ZmlsbC11bmZpbGwtcm90YXRlIDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGgsZ3JlZW4tZmFkZS1pbi1vdXQgNTMzMm1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIuc3Bpbm5lci1ibHVlLW9ubHksLmFjdGl2ZSAuc3Bpbm5lci1sYXllci5zcGlubmVyLXJlZC1vbmx5LC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIuc3Bpbm5lci15ZWxsb3ctb25seSwuYWN0aXZlIC5zcGlubmVyLWxheWVyLnNwaW5uZXItZ3JlZW4tb25seXtvcGFjaXR5OjE7LXdlYmtpdC1hbmltYXRpb246ZmlsbC11bmZpbGwtcm90YXRlIDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7YW5pbWF0aW9uOmZpbGwtdW5maWxsLXJvdGF0ZSA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RofUAtd2Via2l0LWtleWZyYW1lcyBmaWxsLXVuZmlsbC1yb3RhdGV7MTIuNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfTM3LjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0MDVkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNTQwZGVnKX02Mi41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNjc1ZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgxMGRlZyl9ODcuNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDk0NWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEwODBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGwtdW5maWxsLXJvdGF0ZXsxMi41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0zNy41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQwNWRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1NDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNTQwZGVnKX02Mi41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNjc1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDY3NWRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg4MTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoODEwZGVnKX04Ny41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDk0NWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEwODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTA4MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBibHVlLWZhZGUtaW4tb3V0e2Zyb217b3BhY2l0eToxfTI1JXtvcGFjaXR5OjF9MjYle29wYWNpdHk6MH04OSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmx1ZS1mYWRlLWluLW91dHtmcm9te29wYWNpdHk6MX0yNSV7b3BhY2l0eToxfTI2JXtvcGFjaXR5OjB9ODkle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgcmVkLWZhZGUtaW4tb3V0e2Zyb217b3BhY2l0eTowfTE1JXtvcGFjaXR5OjB9MjUle29wYWNpdHk6MX01MCV7b3BhY2l0eToxfTUxJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcmVkLWZhZGUtaW4tb3V0e2Zyb217b3BhY2l0eTowfTE1JXtvcGFjaXR5OjB9MjUle29wYWNpdHk6MX01MCV7b3BhY2l0eToxfTUxJXtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyB5ZWxsb3ctZmFkZS1pbi1vdXR7ZnJvbXtvcGFjaXR5OjB9NDAle29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTc1JXtvcGFjaXR5OjF9NzYle29wYWNpdHk6MH19QGtleWZyYW1lcyB5ZWxsb3ctZmFkZS1pbi1vdXR7ZnJvbXtvcGFjaXR5OjB9NDAle29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTc1JXtvcGFjaXR5OjF9NzYle29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGdyZWVuLWZhZGUtaW4tb3V0e2Zyb217b3BhY2l0eTowfTY1JXtvcGFjaXR5OjB9NzUle29wYWNpdHk6MX05MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGdyZWVuLWZhZGUtaW4tb3V0e2Zyb217b3BhY2l0eTowfTY1JXtvcGFjaXR5OjB9NzUle29wYWNpdHk6MX05MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX0uZ2FwLXBhdGNoe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6NDUlO3dpZHRoOjEwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWNvbG9yOmluaGVyaXR9LmdhcC1wYXRjaCAuY2lyY2xle3dpZHRoOjEwMDAlO2xlZnQ6LTQ1MCV9LmNpcmNsZS1jbGlwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjUwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWNvbG9yOmluaGVyaXR9LmNpcmNsZS1jbGlwcGVyIC5jaXJjbGV7d2lkdGg6MjAwJTtoZWlnaHQ6MTAwJTtib3JkZXItd2lkdGg6M3B4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6aW5oZXJpdDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowfS5jaXJjbGUtY2xpcHBlci5sZWZ0IC5jaXJjbGV7bGVmdDowO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMjlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTI5ZGVnKX0uY2lyY2xlLWNsaXBwZXIucmlnaHQgLmNpcmNsZXtsZWZ0Oi0xMDAlO2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMjlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEyOWRlZyl9LmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xley13ZWJraXQtYW5pbWF0aW9uOmxlZnQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO2FuaW1hdGlvbjpsZWZ0LXNwaW4gMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aH0uYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xley13ZWJraXQtYW5pbWF0aW9uOnJpZ2h0LXNwaW4gMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aDthbmltYXRpb246cmlnaHQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RofUAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW57ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTMwZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTMwZGVnKX19QGtleWZyYW1lcyBsZWZ0LXNwaW57ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTMwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzMGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHQtc3Bpbntmcm9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTMwZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTMwZGVnKX19QGtleWZyYW1lcyByaWdodC1zcGlue2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEzMGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTMwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpfX0jc3Bpbm5lckNvbnRhaW5lci5jb29sZG93bnstd2Via2l0LWFuaW1hdGlvbjpjb250YWluZXItcm90YXRlIDE1NjhtcyBsaW5lYXIgaW5maW5pdGUsZmFkZS1vdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTthbmltYXRpb246Y29udGFpbmVyLXJvdGF0ZSAxNTY4bXMgbGluZWFyIGluZmluaXRlLGZhZGUtb3V0IDQwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fS5zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjQwMHB4O3dpZHRoOjEwMCV9LnNsaWRlci5mdWxsc2NyZWVue2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9LnNsaWRlci5mdWxsc2NyZWVuIHVsLnNsaWRlc3toZWlnaHQ6MTAwJX0uc2xpZGVyLmZ1bGxzY3JlZW4gdWwuaW5kaWNhdG9yc3t6LWluZGV4OjI7Ym90dG9tOjMwcHh9LnNsaWRlciAuc2xpZGVze2JhY2tncm91bmQtY29sb3I6IzllOWU5ZTttYXJnaW46MDtoZWlnaHQ6NDAwcHh9LnNsaWRlciAuc2xpZGVzIGxpe29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OmluaGVyaXQ7b3ZlcmZsb3c6aGlkZGVufS5zbGlkZXIgLnNsaWRlcyBsaSBpbWd7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXJ9LnNsaWRlciAuc2xpZGVzIGxpIC5jYXB0aW9ue2NvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE1JTtsZWZ0OjE1JTt3aWR0aDo3MCU7b3BhY2l0eTowfS5zbGlkZXIgLnNsaWRlcyBsaSAuY2FwdGlvbiBwe2NvbG9yOiNlMGUwZTB9LnNsaWRlciAuc2xpZGVzIGxpLmFjdGl2ZXt6LWluZGV4OjJ9LnNsaWRlciAuaW5kaWNhdG9yc3twb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46MH0uc2xpZGVyIC5pbmRpY2F0b3JzIC5pbmRpY2F0b3ItaXRlbXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTZweDt3aWR0aDoxNnB4O21hcmdpbjowIDEycHg7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zczt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzO2JvcmRlci1yYWRpdXM6NTAlfS5zbGlkZXIgLmluZGljYXRvcnMgLmluZGljYXRvci1pdGVtLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTB9LmNhcm91c2Vse292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDo0MDBweDstd2Via2l0LXBlcnNwZWN0aXZlOjUwMHB4O3BlcnNwZWN0aXZlOjUwMHB4Oy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46MCUgNTAlfS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXJ7dG9wOjA7bGVmdDowfS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNhcm91c2VsLWZpeGVkLWl0ZW17cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjIwcHg7ei1pbmRleDoxfS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNhcm91c2VsLWZpeGVkLWl0ZW0ud2l0aC1pbmRpY2F0b3Jze2JvdHRvbTo2OHB4fS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNhcm91c2VsLWl0ZW17d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjQwMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jYXJvdXNlbC1pdGVtIGgye2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDozMnB4fS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNhcm91c2VsLWl0ZW0gcHtmb250LXNpemU6MTVweH0uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW17dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0+aW1ne3dpZHRoOjEwMCV9LmNhcm91c2VsIC5pbmRpY2F0b3Jze3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjowfS5jYXJvdXNlbCAuaW5kaWNhdG9ycyAuaW5kaWNhdG9yLWl0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjhweDt3aWR0aDo4cHg7bWFyZ2luOjI0cHggNHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zczt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzO2JvcmRlci1yYWRpdXM6NTAlfS5jYXJvdXNlbCAuaW5kaWNhdG9ycyAuaW5kaWNhdG9yLWl0ZW0uYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY2Fyb3VzZWwuc2Nyb2xsaW5nIC5jYXJvdXNlbC1pdGVtIC5tYXRlcmlhbGJveGVkLC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbTpub3QoLmFjdGl2ZSkgLm1hdGVyaWFsYm94ZWR7cG9pbnRlci1ldmVudHM6bm9uZX0udGFwLXRhcmdldC13cmFwcGVye3dpZHRoOjgwMHB4O2hlaWdodDo4MDBweDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDA7dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2l0aW9uOnZpc2liaWxpdHkgMHMgLjNzO3RyYW5zaXRpb246dmlzaWJpbGl0eSAwcyAuM3N9LnRhcC10YXJnZXQtd3JhcHBlci5vcGVue3Zpc2liaWxpdHk6dmlzaWJsZTstd2Via2l0LXRyYW5zaXRpb246dmlzaWJpbGl0eSAwczt0cmFuc2l0aW9uOnZpc2liaWxpdHkgMHN9LnRhcC10YXJnZXQtd3JhcHBlci5vcGVuIC50YXAtdGFyZ2V0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi45NTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSwtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTt0cmFuc2l0aW9uOm9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSksLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSksb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSxvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpLC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpfS50YXAtdGFyZ2V0LXdyYXBwZXIub3BlbiAudGFwLXRhcmdldC13YXZlOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS50YXAtdGFyZ2V0LXdyYXBwZXIub3BlbiAudGFwLXRhcmdldC13YXZlOjphZnRlcnt2aXNpYmlsaXR5OnZpc2libGU7LXdlYmtpdC1hbmltYXRpb246cHVsc2UtYW5pbWF0aW9uIDFzIGN1YmljLWJlemllcigwLjI0LCAwLCAwLjM4LCAxKSBpbmZpbml0ZTthbmltYXRpb246cHVsc2UtYW5pbWF0aW9uIDFzIGN1YmljLWJlemllcigwLjI0LCAwLCAwLjM4LCAxKSBpbmZpbml0ZTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuM3MsXHIgdmlzaWJpbGl0eSAwcyAxcyxcciAtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyxcciB2aXNpYmlsaXR5IDBzIDFzLFxyIC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLFxyIHRyYW5zZm9ybSAuM3MsXHIgdmlzaWJpbGl0eSAwcyAxczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLFxyIHRyYW5zZm9ybSAuM3MsXHIgdmlzaWJpbGl0eSAwcyAxcyxcciAtd2Via2l0LXRyYW5zZm9ybSAuM3N9LnRhcC10YXJnZXR7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFyZW07Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZWU2ZTczOy13ZWJraXQtYm94LXNoYWRvdzowIDIwcHggMjBweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxMHB4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTIpLDAgMzBweCAxMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC4yKTtib3gtc2hhZG93OjAgMjBweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDEwcHggNTBweCAwIHJnYmEoMCwwLDAsMC4xMiksMCAzMHB4IDEwcHggLTIwcHggcmdiYSgwLDAsMCwwLjIpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSwtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTt0cmFuc2l0aW9uOm9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSksLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSksb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSxvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpLC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpfS50YXAtdGFyZ2V0LWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTp0YWJsZS1jZWxsfS50YXAtdGFyZ2V0LXdhdmV7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7ei1pbmRleDoxMDAwMX0udGFwLXRhcmdldC13YXZlOjpiZWZvcmUsLnRhcC10YXJnZXQtd2F2ZTo6YWZ0ZXJ7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmfS50YXAtdGFyZ2V0LXdhdmU6OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAuM3N9LnRhcC10YXJnZXQtd2F2ZTo6YWZ0ZXJ7dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjNzLFxyIHZpc2liaWxpdHkgMHMsXHIgLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246b3BhY2l0eSAuM3MsXHIgdmlzaWJpbGl0eSAwcyxcciAtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyxcciB0cmFuc2Zvcm0gLjNzLFxyIHZpc2liaWxpdHkgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyxcciB0cmFuc2Zvcm0gLjNzLFxyIHZpc2liaWxpdHkgMHMsXHIgLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3otaW5kZXg6LTF9LnRhcC10YXJnZXQtb3JpZ2lue3RvcDo1MCU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ei1pbmRleDoxMDAwMjtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50fS50YXAtdGFyZ2V0LW9yaWdpbjpub3QoLmJ0bik6bm90KC5idG4tbGFyZ2UpOm5vdCguYnRuLXNtYWxsKSwudGFwLXRhcmdldC1vcmlnaW46bm90KC5idG4pOm5vdCguYnRuLWxhcmdlKTpub3QoLmJ0bi1zbWFsbCk6aG92ZXJ7YmFja2dyb3VuZDpub25lfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpey50YXAtdGFyZ2V0LC50YXAtdGFyZ2V0LXdyYXBwZXJ7d2lkdGg6NjAwcHg7aGVpZ2h0OjYwMHB4fX0ucHVsc2V7b3ZlcmZsb3c6dmlzaWJsZTtwb3NpdGlvbjpyZWxhdGl2ZX0ucHVsc2U6OmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O2JvcmRlci1yYWRpdXM6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcywgdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLCB0cmFuc2Zvcm0gLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAuM3M7LXdlYmtpdC1hbmltYXRpb246cHVsc2UtYW5pbWF0aW9uIDFzIGN1YmljLWJlemllcigwLjI0LCAwLCAwLjM4LCAxKSBpbmZpbml0ZTthbmltYXRpb246cHVsc2UtYW5pbWF0aW9uIDFzIGN1YmljLWJlemllcigwLjI0LCAwLCAwLjM4LCAxKSBpbmZpbml0ZTt6LWluZGV4Oi0xfUAtd2Via2l0LWtleWZyYW1lcyBwdWxzZS1hbmltYXRpb257MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KX19QGtleWZyYW1lcyBwdWxzZS1hbmltYXRpb257MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KX19LmRhdGVwaWNrZXItbW9kYWx7bWF4LXdpZHRoOjMyNXB4O21pbi13aWR0aDozMDBweDttYXgtaGVpZ2h0Om5vbmV9LmRhdGVwaWNrZXItY29udGFpbmVyLm1vZGFsLWNvbnRlbnR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjB9LmRhdGVwaWNrZXItY29udHJvbHN7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MjgwcHg7bWFyZ2luOjAgYXV0b30uZGF0ZXBpY2tlci1jb250cm9scyAuc2VsZWN0cy1jb250YWluZXJ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uZGF0ZXBpY2tlci1jb250cm9scyAuc2VsZWN0LXdyYXBwZXIgaW5wdXR7Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjowfS5kYXRlcGlja2VyLWNvbnRyb2xzIC5zZWxlY3Qtd3JhcHBlciBpbnB1dDpmb2N1c3tib3JkZXItYm90dG9tOm5vbmV9LmRhdGVwaWNrZXItY29udHJvbHMgLnNlbGVjdC13cmFwcGVyIC5jYXJldHtkaXNwbGF5Om5vbmV9LmRhdGVwaWNrZXItY29udHJvbHMgLnNlbGVjdC15ZWFyIGlucHV0e3dpZHRoOjUwcHh9LmRhdGVwaWNrZXItY29udHJvbHMgLnNlbGVjdC1tb250aCBpbnB1dHt3aWR0aDo3MHB4fS5tb250aC1wcmV2LC5tb250aC1uZXh0e21hcmdpbi10b3A6NHB4O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmV9LmRhdGVwaWNrZXItZGF0ZS1kaXNwbGF5ey13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXg6MSBhdXRvOy1tcy1mbGV4OjEgYXV0bztmbGV4OjEgYXV0bztiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWE7Y29sb3I6I2ZmZjtwYWRkaW5nOjIwcHggMjJweDtmb250LXdlaWdodDo1MDB9LmRhdGVwaWNrZXItZGF0ZS1kaXNwbGF5IC55ZWFyLXRleHR7ZGlzcGxheTpibG9jaztmb250LXNpemU6MS41cmVtO2xpbmUtaGVpZ2h0OjI1cHg7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjcpfS5kYXRlcGlja2VyLWRhdGUtZGlzcGxheSAuZGF0ZS10ZXh0e2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjIuOHJlbTtsaW5lLWhlaWdodDo0N3B4O2ZvbnQtd2VpZ2h0OjUwMH0uZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXJ7LXdlYmtpdC1ib3gtZmxleDoyLjU7LXdlYmtpdC1mbGV4OjIuNSBhdXRvOy1tcy1mbGV4OjIuNSBhdXRvO2ZsZXg6Mi41IGF1dG99LmRhdGVwaWNrZXItdGFibGV7d2lkdGg6MjgwcHg7Zm9udC1zaXplOjFyZW07bWFyZ2luOjAgYXV0b30uZGF0ZXBpY2tlci10YWJsZSB0aGVhZHtib3JkZXItYm90dG9tOm5vbmV9LmRhdGVwaWNrZXItdGFibGUgdGh7cGFkZGluZzoxMHB4IDVweDt0ZXh0LWFsaWduOmNlbnRlcn0uZGF0ZXBpY2tlci10YWJsZSB0cntib3JkZXI6bm9uZX0uZGF0ZXBpY2tlci10YWJsZSBhYmJye3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiM5OTl9LmRhdGVwaWNrZXItdGFibGUgdGR7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowfS5kYXRlcGlja2VyLXRhYmxlIHRkLmlzLXRvZGF5e2NvbG9yOiMyNmE2OWF9LmRhdGVwaWNrZXItdGFibGUgdGQuaXMtc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMjZhNjlhO2NvbG9yOiNmZmZ9LmRhdGVwaWNrZXItdGFibGUgdGQuaXMtb3V0c2lkZS1jdXJyZW50LW1vbnRoLC5kYXRlcGlja2VyLXRhYmxlIHRkLmlzLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsMC4zKTtwb2ludGVyLWV2ZW50czpub25lfS5kYXRlcGlja2VyLWRheS1idXR0b257YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtsaW5lLWhlaWdodDozOHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtwYWRkaW5nOjAgNXB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOmluaGVyaXR9LmRhdGVwaWNrZXItZGF5LWJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDMsMTYxLDE1MCwwLjI1KX0uZGF0ZXBpY2tlci1mb290ZXJ7d2lkdGg6MjgwcHg7bWFyZ2luOjAgYXV0bztwYWRkaW5nLWJvdHRvbTo1cHg7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmRhdGVwaWNrZXItY2FuY2VsLC5kYXRlcGlja2VyLWNsZWFyLC5kYXRlcGlja2VyLXRvZGF5LC5kYXRlcGlja2VyLWRvbmV7Y29sb3I6IzI2YTY5YTtwYWRkaW5nOjAgMXJlbX0uZGF0ZXBpY2tlci1jbGVhcntjb2xvcjojRjQ0MzM2fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpey5kYXRlcGlja2VyLW1vZGFse21heC13aWR0aDo2MjVweH0uZGF0ZXBpY2tlci1jb250YWluZXIubW9kYWwtY29udGVudHstd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5kYXRlcGlja2VyLWRhdGUtZGlzcGxheXstd2Via2l0LWJveC1mbGV4OjA7LXdlYmtpdC1mbGV4OjAgMSAyNzBweDstbXMtZmxleDowIDEgMjcwcHg7ZmxleDowIDEgMjcwcHh9LmRhdGVwaWNrZXItY29udHJvbHMsLmRhdGVwaWNrZXItdGFibGUsLmRhdGVwaWNrZXItZm9vdGVye3dpZHRoOjMyMHB4fS5kYXRlcGlja2VyLWRheS1idXR0b257bGluZS1oZWlnaHQ6NDRweH19LnRpbWVwaWNrZXItbW9kYWx7bWF4LXdpZHRoOjMyNXB4O21heC1oZWlnaHQ6bm9uZX0udGltZXBpY2tlci1jb250YWluZXIubW9kYWwtY29udGVudHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MH0udGV4dC1wcmltYXJ5e2NvbG9yOiNmZmZ9LnRpbWVwaWNrZXItZGlnaXRhbC1kaXNwbGF5ey13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXg6MSBhdXRvOy1tcy1mbGV4OjEgYXV0bztmbGV4OjEgYXV0bztiYWNrZ3JvdW5kLWNvbG9yOiMyNmE2OWE7cGFkZGluZzoxMHB4O2ZvbnQtd2VpZ2h0OjMwMH0udGltZXBpY2tlci10ZXh0LWNvbnRhaW5lcntmb250LXNpemU6NHJlbTtmb250LXdlaWdodDpib2xkO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC42KTtmb250LXdlaWdodDo0MDA7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS50aW1lcGlja2VyLXNwYW4taG91cnMsLnRpbWVwaWNrZXItc3Bhbi1taW51dGVzLC50aW1lcGlja2VyLXNwYW4tYW0tcG0gZGl2e2N1cnNvcjpwb2ludGVyfS50aW1lcGlja2VyLXNwYW4taG91cnN7bWFyZ2luLXJpZ2h0OjNweH0udGltZXBpY2tlci1zcGFuLW1pbnV0ZXN7bWFyZ2luLWxlZnQ6M3B4fS50aW1lcGlja2VyLWRpc3BsYXktYW0tcG17Zm9udC1zaXplOjEuM3JlbTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxcmVtO2JvdHRvbToxcmVtO2ZvbnQtd2VpZ2h0OjQwMH0udGltZXBpY2tlci1hbmFsb2ctZGlzcGxheXstd2Via2l0LWJveC1mbGV4OjIuNTstd2Via2l0LWZsZXg6Mi41IGF1dG87LW1zLWZsZXg6Mi41IGF1dG87ZmxleDoyLjUgYXV0b30udGltZXBpY2tlci1wbGF0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MjcwcHg7aGVpZ2h0OjI3MHB4O292ZXJmbG93OnZpc2libGU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOmF1dG87bWFyZ2luLXRvcDoyNXB4O21hcmdpbi1ib3R0b206NXB4Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0udGltZXBpY2tlci1jYW52YXMsLnRpbWVwaWNrZXItZGlhbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MH0udGltZXBpY2tlci1taW51dGVze3Zpc2liaWxpdHk6aGlkZGVufS50aW1lcGlja2VyLXRpY2t7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtsaW5lLWhlaWdodDo0MHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE1cHh9LnRpbWVwaWNrZXItdGljay5hY3RpdmUsLnRpbWVwaWNrZXItdGljazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMTY2LDE1NCwwLjI1KX0udGltZXBpY2tlci1kaWFsey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDM1MG1zLCAtd2Via2l0LXRyYW5zZm9ybSAzNTBtczt0cmFuc2l0aW9uOm9wYWNpdHkgMzUwbXMsIC13ZWJraXQtdHJhbnNmb3JtIDM1MG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDM1MG1zLCBvcGFjaXR5IDM1MG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDM1MG1zLCBvcGFjaXR5IDM1MG1zLCAtd2Via2l0LXRyYW5zZm9ybSAzNTBtc30udGltZXBpY2tlci1kaWFsLW91dHtvcGFjaXR5OjB9LnRpbWVwaWNrZXItZGlhbC1vdXQudGltZXBpY2tlci1ob3Vyc3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEsIDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSwgMS4xKX0udGltZXBpY2tlci1kaWFsLW91dC50aW1lcGlja2VyLW1pbnV0ZXN7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC44LCAwLjgpO3RyYW5zZm9ybTpzY2FsZSgwLjgsIDAuOCl9LnRpbWVwaWNrZXItY2FudmFzey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE3NW1zO3RyYW5zaXRpb246b3BhY2l0eSAxNzVtc30udGltZXBpY2tlci1jYW52YXMgbGluZXtzdHJva2U6IzI2YTY5YTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZH0udGltZXBpY2tlci1jYW52YXMtb3V0e29wYWNpdHk6MC4yNX0udGltZXBpY2tlci1jYW52YXMtYmVhcmluZ3tzdHJva2U6bm9uZTtmaWxsOiMyNmE2OWF9LnRpbWVwaWNrZXItY2FudmFzLWJne3N0cm9rZTpub25lO2ZpbGw6IzI2YTY5YX0udGltZXBpY2tlci1mb290ZXJ7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjVweCAxcmVtO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS50aW1lcGlja2VyLWNsZWFye2NvbG9yOiNGNDQzMzZ9LnRpbWVwaWNrZXItY2xvc2V7Y29sb3I6IzI2YTY5YX0udGltZXBpY2tlci1jbGVhciwudGltZXBpY2tlci1jbG9zZXtwYWRkaW5nOjAgMjBweH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXsudGltZXBpY2tlci1tb2RhbHttYXgtd2lkdGg6NjAwcHh9LnRpbWVwaWNrZXItY29udGFpbmVyLm1vZGFsLWNvbnRlbnR7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30udGltZXBpY2tlci10ZXh0LWNvbnRhaW5lcnt0b3A6MzIlfS50aW1lcGlja2VyLWRpc3BsYXktYW0tcG17cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6YXV0bztib3R0b206YXV0bzt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjEuMnJlbX19XG4iXX0= */";
    /***/
  },

  /***/
  "./src/assets/materialize/js/materialize.min.js":
  /*!******************************************************!*\
    !*** ./src/assets/materialize/js/materialize.min.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function srcAssetsMaterializeJsMaterializeMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
    * Materialize v1.0.0 (http://materializecss.com)
    * Copyright 2014-2017 Materialize
    * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
    */


    var _get = function t(e, i, n) {
      null === e && (e = Function.prototype);
      var s = Object.getOwnPropertyDescriptor(e, i);

      if (void 0 === s) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, i, n);
      }

      if ("value" in s) return s.value;
      var a = s.get;
      return void 0 !== a ? a.call(n) : void 0;
    },
        _createClass = function () {
      function n(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
      };
    }();

    function _possibleConstructorReturn(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }

    function _inherits(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function _classCallCheck(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    window.cash = function () {
      var i,
          o = document,
          a = window,
          t = Array.prototype,
          r = t.slice,
          n = t.filter,
          s = t.push,
          e = function e() {},
          h = function h(t) {
        return typeof t == typeof e && t.call;
      },
          d = function d(t) {
        return "string" == typeof t;
      },
          l = /^#[\w-]*$/,
          u = /^\.[\w-]*$/,
          c = /<.+>/,
          p = /^\w+$/;

      function v(t, e) {
        e = e || o;
        var i = u.test(t) ? e.getElementsByClassName(t.slice(1)) : p.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
        return i;
      }

      function f(t) {
        if (!i) {
          var e = (i = o.implementation.createHTMLDocument(null)).createElement("base");
          e.href = o.location.href, i.head.appendChild(e);
        }

        return i.body.innerHTML = t, i.body.childNodes;
      }

      function m(t) {
        "loading" !== o.readyState ? t() : o.addEventListener("DOMContentLoaded", t);
      }

      function g(t, e) {
        if (!t) return this;
        if (t.cash && t !== a) return t;
        var i,
            n = t,
            s = 0;
        if (d(t)) n = l.test(t) ? o.getElementById(t.slice(1)) : c.test(t) ? f(t) : v(t, e);else if (h(t)) return m(t), this;
        if (!n) return this;
        if (n.nodeType || n === a) this[0] = n, this.length = 1;else for (i = this.length = n.length; s < i; s++) {
          this[s] = n[s];
        }
        return this;
      }

      function _(t, e) {
        return new g(t, e);
      }

      var y = _.fn = _.prototype = g.prototype = {
        cash: !0,
        length: 0,
        push: s,
        splice: t.splice,
        map: t.map,
        init: g
      };

      function k(t, e) {
        for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++) {
          ;
        }
      }

      function b(t, e) {
        var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
        return !!i && i.call(t, e);
      }

      function w(e) {
        return d(e) ? b : e.cash ? function (t) {
          return e.is(t);
        } : function (t, e) {
          return t === e;
        };
      }

      function C(t) {
        return _(r.call(t).filter(function (t, e, i) {
          return i.indexOf(t) === e;
        }));
      }

      Object.defineProperty(y, "constructor", {
        value: _
      }), _.parseHTML = f, _.noop = e, _.isFunction = h, _.isString = d, _.extend = y.extend = function (t) {
        t = t || {};
        var e = r.call(arguments),
            i = e.length,
            n = 1;

        for (1 === e.length && (t = this, n = 0); n < i; n++) {
          if (e[n]) for (var s in e[n]) {
            e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
          }
        }

        return t;
      }, _.extend({
        merge: function merge(t, e) {
          for (var i = +e.length, n = t.length, s = 0; s < i; n++, s++) {
            t[n] = e[s];
          }

          return t.length = n, t;
        },
        each: k,
        matches: b,
        unique: C,
        isArray: Array.isArray,
        isNumeric: function isNumeric(t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }
      });
      var E = _.uid = "_cash" + Date.now();

      function M(t) {
        return t[E] = t[E] || {};
      }

      function O(t, e, i) {
        return M(t)[e] = i;
      }

      function x(t, e) {
        var i = M(t);
        return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)), i[e];
      }

      y.extend({
        data: function data(e, i) {
          if (d(e)) return void 0 === i ? x(this[0], e) : this.each(function (t) {
            return O(t, e, i);
          });

          for (var t in e) {
            this.data(t, e[t]);
          }

          return this;
        },
        removeData: function removeData(s) {
          return this.each(function (t) {
            return i = s, void ((n = M(e = t)) ? delete n[i] : e.dataset ? delete e.dataset[i] : _(e).removeAttr("data-" + name));
            var e, i, n;
          });
        }
      });
      var L = /\S+/g;

      function T(t) {
        return d(t) && t.match(L);
      }

      function $(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
      }

      function B(t, e, i) {
        t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e);
      }

      function D(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "");
      }

      y.extend({
        addClass: function addClass(t) {
          var n = T(t);
          return n ? this.each(function (e) {
            var i = " " + e.className + " ";
            k(n, function (t) {
              B(e, t, i);
            });
          }) : this;
        },
        attr: function attr(e, i) {
          if (e) {
            if (d(e)) return void 0 === i ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function (t) {
              t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
            });

            for (var t in e) {
              this.attr(t, e[t]);
            }

            return this;
          }
        },
        hasClass: function hasClass(t) {
          var e = !1,
              i = T(t);
          return i && i.length && this.each(function (t) {
            return !(e = $(t, i[0]));
          }), e;
        },
        prop: function prop(e, i) {
          if (d(e)) return void 0 === i ? this[0][e] : this.each(function (t) {
            t[e] = i;
          });

          for (var t in e) {
            this.prop(t, e[t]);
          }

          return this;
        },
        removeAttr: function removeAttr(e) {
          return this.each(function (t) {
            t.removeAttribute ? t.removeAttribute(e) : delete t[e];
          });
        },
        removeClass: function removeClass(t) {
          if (!arguments.length) return this.attr("class", "");
          var i = T(t);
          return i ? this.each(function (e) {
            k(i, function (t) {
              D(e, t);
            });
          }) : this;
        },
        removeProp: function removeProp(e) {
          return this.each(function (t) {
            delete t[e];
          });
        },
        toggleClass: function toggleClass(t, e) {
          if (void 0 !== e) return this[e ? "addClass" : "removeClass"](t);
          var n = T(t);
          return n ? this.each(function (e) {
            var i = " " + e.className + " ";
            k(n, function (t) {
              $(e, t) ? D(e, t) : B(e, t, i);
            });
          }) : this;
        }
      }), y.extend({
        add: function add(t, e) {
          return C(_.merge(this, _(t, e)));
        },
        each: function each(t) {
          return k(this, t), this;
        },
        eq: function eq(t) {
          return _(this.get(t));
        },
        filter: function filter(e) {
          if (!e) return this;
          var i = h(e) ? e : w(e);
          return _(n.call(this, function (t) {
            return i(t, e);
          }));
        },
        first: function first() {
          return this.eq(0);
        },
        get: function get(t) {
          return void 0 === t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        index: function index(t) {
          var e = t ? _(t)[0] : this[0],
              i = t ? this : _(e).parent().children();
          return r.call(i).indexOf(e);
        },
        last: function last() {
          return this.eq(-1);
        }
      });
      var S,
          I,
          A,
          R,
          H,
          P,
          W = (H = /(?:^\w|[A-Z]|\b\w)/g, P = /[\s-_]+/g, function (t) {
        return t.replace(H, function (t, e) {
          return t[0 === e ? "toLowerCase" : "toUpperCase"]();
        }).replace(P, "");
      }),
          j = (S = {}, I = document, A = I.createElement("div"), R = A.style, function (e) {
        if (e = W(e), S[e]) return S[e];
        var t = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" ");
        return k(i, function (t) {
          if (t in R) return S[t] = e = S[e] = t, !1;
        }), S[e];
      });

      function F(t, e) {
        return parseInt(a.getComputedStyle(t[0], null)[e], 10) || 0;
      }

      function q(e, i, t) {
        var n,
            s = x(e, "_cashEvents"),
            o = s && s[i];
        o && (t ? (e.removeEventListener(i, t), 0 <= (n = o.indexOf(t)) && o.splice(n, 1)) : (k(o, function (t) {
          e.removeEventListener(i, t);
        }), o = []));
      }

      function N(t, e) {
        return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+");
      }

      function z(t) {
        var e,
            i,
            n,
            s = t.type;
        if (!s) return null;

        switch (s.toLowerCase()) {
          case "select-one":
            return 0 <= (n = (i = t).selectedIndex) ? i.options[n].value : null;

          case "select-multiple":
            return e = [], k(t.options, function (t) {
              t.selected && e.push(t.value);
            }), e.length ? e : null;

          case "radio":
          case "checkbox":
            return t.checked ? t.value : null;

          default:
            return t.value ? t.value : null;
        }
      }

      function V(e, i, n) {
        var t = d(i);
        t || !i.length ? k(e, t ? function (t) {
          return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", i);
        } : function (t, e) {
          return function (t, e, i) {
            if (i) {
              var n = t.childNodes[0];
              t.insertBefore(e, n);
            } else t.appendChild(e);
          }(t, 0 === e ? i : i.cloneNode(!0), n);
        }) : k(i, function (t) {
          return V(e, t, n);
        });
      }

      _.prefixedProp = j, _.camelCase = W, y.extend({
        css: function css(e, i) {
          if (d(e)) return e = j(e), 1 < arguments.length ? this.each(function (t) {
            return t.style[e] = i;
          }) : a.getComputedStyle(this[0])[e];

          for (var t in e) {
            this.css(t, e[t]);
          }

          return this;
        }
      }), k(["Width", "Height"], function (e) {
        var t = e.toLowerCase();
        y[t] = function () {
          return this[0].getBoundingClientRect()[t];
        }, y["inner" + e] = function () {
          return this[0]["client" + e];
        }, y["outer" + e] = function (t) {
          return this[0]["offset" + e] + (t ? F(this, "margin" + ("Width" === e ? "Left" : "Top")) + F(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0);
        };
      }), y.extend({
        off: function off(e, i) {
          return this.each(function (t) {
            return q(t, e, i);
          });
        },
        on: function on(a, i, r, l) {
          var n;

          if (!d(a)) {
            for (var t in a) {
              this.on(t, i, a[t]);
            }

            return this;
          }

          return h(i) && (r = i, i = null), "ready" === a ? (m(r), this) : (i && (n = r, r = function r(t) {
            for (var e = t.target; !b(e, i);) {
              if (e === this || null === e) return e = !1;
              e = e.parentNode;
            }

            e && n.call(e, t);
          }), this.each(function (t) {
            var e,
                i,
                n,
                s,
                _o = r;
            l && (_o = function o() {
              r.apply(this, arguments), q(t, a, _o);
            }), i = a, n = _o, (s = x(e = t, "_cashEvents") || O(e, "_cashEvents", {}))[i] = s[i] || [], s[i].push(n), e.addEventListener(i, n);
          }));
        },
        one: function one(t, e, i) {
          return this.on(t, e, i, !0);
        },
        ready: m,
        trigger: function trigger(t, e) {
          if (document.createEvent) {
            var i = document.createEvent("HTMLEvents");
            return i.initEvent(t, !0, !1), i = this.extend(i, e), this.each(function (t) {
              return t.dispatchEvent(i);
            });
          }
        }
      }), y.extend({
        serialize: function serialize() {
          var s = "";
          return k(this[0].elements || this, function (t) {
            if (!t.disabled && "FIELDSET" !== t.tagName) {
              var e = t.name;

              switch (t.type.toLowerCase()) {
                case "file":
                case "reset":
                case "submit":
                case "button":
                  break;

                case "select-multiple":
                  var i = z(t);
                  null !== i && k(i, function (t) {
                    s += N(e, t);
                  });
                  break;

                default:
                  var n = z(t);
                  null !== n && (s += N(e, n));
              }
            }
          }), s.substr(1);
        },
        val: function val(e) {
          return void 0 === e ? z(this[0]) : this.each(function (t) {
            return t.value = e;
          });
        }
      }), y.extend({
        after: function after(t) {
          return _(t).insertAfter(this), this;
        },
        append: function append(t) {
          return V(this, t), this;
        },
        appendTo: function appendTo(t) {
          return V(_(t), this), this;
        },
        before: function before(t) {
          return _(t).insertBefore(this), this;
        },
        clone: function clone() {
          return _(this.map(function (t) {
            return t.cloneNode(!0);
          }));
        },
        empty: function empty() {
          return this.html(""), this;
        },
        html: function html(t) {
          if (void 0 === t) return this[0].innerHTML;
          var e = t.nodeType ? t[0].outerHTML : t;
          return this.each(function (t) {
            return t.innerHTML = e;
          });
        },
        insertAfter: function insertAfter(t) {
          var s = this;
          return _(t).each(function (t, e) {
            var i = t.parentNode,
                n = t.nextSibling;
            s.each(function (t) {
              i.insertBefore(0 === e ? t : t.cloneNode(!0), n);
            });
          }), this;
        },
        insertBefore: function insertBefore(t) {
          var s = this;
          return _(t).each(function (e, i) {
            var n = e.parentNode;
            s.each(function (t) {
              n.insertBefore(0 === i ? t : t.cloneNode(!0), e);
            });
          }), this;
        },
        prepend: function prepend(t) {
          return V(this, t, !0), this;
        },
        prependTo: function prependTo(t) {
          return V(_(t), this, !0), this;
        },
        remove: function remove() {
          return this.each(function (t) {
            if (t.parentNode) return t.parentNode.removeChild(t);
          });
        },
        text: function text(e) {
          return void 0 === e ? this[0].textContent : this.each(function (t) {
            return t.textContent = e;
          });
        }
      });
      var X = o.documentElement;
      return y.extend({
        position: function position() {
          var t = this[0];
          return {
            left: t.offsetLeft,
            top: t.offsetTop
          };
        },
        offset: function offset() {
          var t = this[0].getBoundingClientRect();
          return {
            top: t.top + a.pageYOffset - X.clientTop,
            left: t.left + a.pageXOffset - X.clientLeft
          };
        },
        offsetParent: function offsetParent() {
          return _(this[0].offsetParent);
        }
      }), y.extend({
        children: function children(e) {
          var i = [];
          return this.each(function (t) {
            s.apply(i, t.children);
          }), i = C(i), e ? i.filter(function (t) {
            return b(t, e);
          }) : i;
        },
        closest: function closest(t) {
          return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t);
        },
        is: function is(e) {
          if (!e) return !1;
          var i = !1,
              n = w(e);
          return this.each(function (t) {
            return !(i = n(t, e));
          }), i;
        },
        find: function find(e) {
          if (!e || e.nodeType) return _(e && this.has(e).length ? e : null);
          var i = [];
          return this.each(function (t) {
            s.apply(i, v(e, t));
          }), C(i);
        },
        has: function has(e) {
          var t = d(e) ? function (t) {
            return 0 !== v(e, t).length;
          } : function (t) {
            return t.contains(e);
          };
          return this.filter(t);
        },
        next: function next() {
          return _(this[0].nextElementSibling);
        },
        not: function not(e) {
          if (!e) return this;
          var i = w(e);
          return this.filter(function (t) {
            return !i(t, e);
          });
        },
        parent: function parent() {
          var e = [];
          return this.each(function (t) {
            t && t.parentNode && e.push(t.parentNode);
          }), C(e);
        },
        parents: function parents(e) {
          var i,
              n = [];
          return this.each(function (t) {
            for (i = t; i && i.parentNode && i !== o.body.parentNode;) {
              i = i.parentNode, (!e || e && b(i, e)) && n.push(i);
            }
          }), C(n);
        },
        prev: function prev() {
          return _(this[0].previousElementSibling);
        },
        siblings: function siblings(t) {
          var e = this.parent().children(t),
              i = this[0];
          return e.filter(function (t) {
            return t !== i;
          });
        }
      }), _;
    }();

    var Component = function () {
      function s(t, e, i) {
        _classCallCheck(this, s), e instanceof Element || console.error(Error(e + " is not an HTML Element"));
        var n = t.getInstance(e);
        n && n.destroy(), this.el = e, this.$el = cash(e);
      }

      return _createClass(s, null, [{
        key: "init",
        value: function value(t, e, i) {
          var n = null;
          if (e instanceof Element) n = new t(e, i);else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
            for (var s = [], o = 0; o < e.length; o++) {
              s.push(new t(e[o], i));
            }

            n = s;
          }
          return n;
        }
      }]), s;
    }();

    !function (t) {
      t.Package ? M = {} : t.M = {}, M.jQueryLoaded = !!t.jQuery;
    }(window), true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return M;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined, M.version = "1.0.0", M.keys = {
      TAB: 9,
      ENTER: 13,
      ESC: 27,
      ARROW_UP: 38,
      ARROW_DOWN: 40
    }, M.tabPressed = !1, M.keyDown = !1;

    var docHandleKeydown = function docHandleKeydown(t) {
      M.keyDown = !0, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0);
    },
        docHandleKeyup = function docHandleKeyup(t) {
      M.keyDown = !1, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1);
    },
        docHandleFocus = function docHandleFocus(t) {
      M.keyDown && document.body.classList.add("keyboard-focused");
    },
        docHandleBlur = function docHandleBlur(t) {
      document.body.classList.remove("keyboard-focused");
    };

    document.addEventListener("keydown", docHandleKeydown, !0), document.addEventListener("keyup", docHandleKeyup, !0), document.addEventListener("focus", docHandleFocus, !0), document.addEventListener("blur", docHandleBlur, !0), M.initializeJqueryWrapper = function (n, s, o) {
      jQuery.fn[s] = function (e) {
        if (n.prototype[e]) {
          var i = Array.prototype.slice.call(arguments, 1);

          if ("get" === e.slice(0, 3)) {
            var t = this.first()[0][o];
            return t[e].apply(t, i);
          }

          return this.each(function () {
            var t = this[o];
            t[e].apply(t, i);
          });
        }

        if ("object" == typeof e || !e) return n.init(this, e), this;
        jQuery.error("Method " + e + " does not exist on jQuery." + s);
      };
    }, M.AutoInit = function (t) {
      var e = t || document.body,
          i = {
        Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
        Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
        Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
        Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
        Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
        Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
        Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
        Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
        Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
        Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
        ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
        FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
        Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
        Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
        TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
        Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
        Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
        FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
      };

      for (var n in i) {
        M[n].init(i[n]);
      }
    }, M.objectSelectorString = function (t) {
      return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "");
    }, M.guid = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }

      return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }(), M.escapeHash = function (t) {
      return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1");
    }, M.elementOrParentIsFixed = function (t) {
      var e = $(t),
          i = e.add(e.parents()),
          n = !1;
      return i.each(function () {
        if ("fixed" === $(this).css("position")) return !(n = !0);
      }), n;
    }, M.checkWithinContainer = function (t, e, i) {
      var n = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      },
          s = t.getBoundingClientRect(),
          o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom,
          a = t.scrollLeft,
          r = t.scrollTop,
          l = e.left - a,
          h = e.top - r;
      return (l < s.left + i || l < i) && (n.left = !0), (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0), (h < s.top + i || h < i) && (n.top = !0), (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0), n;
    }, M.checkPossibleAlignments = function (t, e, i, n) {
      var s = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        spaceOnTop: null,
        spaceOnRight: null,
        spaceOnBottom: null,
        spaceOnLeft: null
      },
          o = "visible" === getComputedStyle(e).overflow,
          a = e.getBoundingClientRect(),
          r = Math.min(a.height, window.innerHeight),
          l = Math.min(a.width, window.innerWidth),
          h = t.getBoundingClientRect(),
          d = e.scrollLeft,
          u = e.scrollTop,
          c = i.left - d,
          p = i.top - u,
          v = i.top + h.height - u;
      return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width), s.spaceOnRight < 0 && (s.left = !1), s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width, s.spaceOnLeft < 0 && (s.right = !1), s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n), s.spaceOnBottom < 0 && (s.top = !1), s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n), s.spaceOnTop < 0 && (s.bottom = !1), s;
    }, M.getOverflowParent = function (t) {
      return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement);
    }, M.getIdFromTrigger = function (t) {
      var e = t.getAttribute("data-target");
      return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""), e;
    }, M.getDocumentScrollTop = function () {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }, M.getDocumentScrollLeft = function () {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };

    var getTime = Date.now || function () {
      return new Date().getTime();
    };

    M.throttle = function (i, n, s) {
      var o = void 0,
          a = void 0,
          r = void 0,
          l = null,
          h = 0;
      s || (s = {});

      var d = function d() {
        h = !1 === s.leading ? 0 : getTime(), l = null, r = i.apply(o, a), o = a = null;
      };

      return function () {
        var t = getTime();
        h || !1 !== s.leading || (h = t);
        var e = n - (t - h);
        return o = this, a = arguments, e <= 0 ? (clearTimeout(l), l = null, h = t, r = i.apply(o, a), o = a = null) : l || !1 === s.trailing || (l = setTimeout(d, e)), r;
      };
    };

    var $jscomp = {
      scope: {}
    };
    $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
      if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
      t != Array.prototype && t != Object.prototype && (t[e] = i.value);
    }, $jscomp.getGlobal = function (t) {
      return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t;
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function () {
      $jscomp.initSymbol = function () {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
    }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function (t) {
      return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++;
    }, $jscomp.initSymbolIterator = function () {
      $jscomp.initSymbol();
      var t = $jscomp.global.Symbol.iterator;
      t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function value() {
          return $jscomp.arrayIterator(this);
        }
      }), $jscomp.initSymbolIterator = function () {};
    }, $jscomp.arrayIterator = function (t) {
      var e = 0;
      return $jscomp.iteratorPrototype(function () {
        return e < t.length ? {
          done: !1,
          value: t[e++]
        } : {
          done: !0
        };
      });
    }, $jscomp.iteratorPrototype = function (t) {
      return $jscomp.initSymbolIterator(), (t = {
        next: t
      })[$jscomp.global.Symbol.iterator] = function () {
        return this;
      }, t;
    }, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function (e, i) {
      $jscomp.initSymbolIterator(), e instanceof String && (e += "");
      var n = 0,
          s = {
        next: function next() {
          if (n < e.length) {
            var t = n++;
            return {
              value: i(t, e[t]),
              done: !1
            };
          }

          return s.next = function () {
            return {
              done: !0,
              value: void 0
            };
          }, s.next();
        }
      };
      return s[Symbol.iterator] = function () {
        return s;
      }, s;
    }, $jscomp.polyfill = function (t, e, i, n) {
      if (e) {
        for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
          var s = t[n];
          s in i || (i[s] = {}), i = i[s];
        }

        (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
          configurable: !0,
          writable: !0,
          value: e
        });
      }
    }, $jscomp.polyfill("Array.prototype.keys", function (t) {
      return t || function () {
        return $jscomp.iteratorFromArray(this, function (t) {
          return t;
        });
      };
    }, "es6-impl", "es3");
    var $jscomp$this = this;
    M.anime = function () {
      function s(t) {
        if (!B.col(t)) try {
          return document.querySelectorAll(t);
        } catch (t) {}
      }

      function b(t, e) {
        for (var i = t.length, n = 2 <= arguments.length ? e : void 0, s = [], o = 0; o < i; o++) {
          if (o in t) {
            var a = t[o];
            e.call(n, a, o, t) && s.push(a);
          }
        }

        return s;
      }

      function d(t) {
        return t.reduce(function (t, e) {
          return t.concat(B.arr(e) ? d(e) : e);
        }, []);
      }

      function o(t) {
        return B.arr(t) ? t : (B.str(t) && (t = s(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
      }

      function a(t, e) {
        return t.some(function (t) {
          return t === e;
        });
      }

      function r(t) {
        var e,
            i = {};

        for (e in t) {
          i[e] = t[e];
        }

        return i;
      }

      function u(t, e) {
        var i,
            n = r(t);

        for (i in t) {
          n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        }

        return n;
      }

      function c(t, e) {
        var i,
            n = r(t);

        for (i in e) {
          n[i] = B.und(t[i]) ? e[i] : t[i];
        }

        return n;
      }

      function l(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2];
      }

      function h(t, e) {
        return B.fnc(t) ? t(e.target, e.id, e.total) : t;
      }

      function w(t, e) {
        if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
      }

      function p(t, e) {
        return B.dom(t) && a($, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && "transform" !== e && w(t, e) ? "css" : null != t[e] ? "object" : void 0;
      }

      function v(t, e) {
        switch (p(t, e)) {
          case "transform":
            return function (t, i) {
              var e,
                  n = -1 < (e = i).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0,
                  n = -1 < i.indexOf("scale") ? 1 : 0 + n;
              if (!(t = t.style.transform)) return n;

              for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t);) {
                o.push(s[1]), a.push(s[2]);
              }

              return (t = b(a, function (t, e) {
                return o[e] === i;
              })).length ? t[0] : n;
            }(t, e);

          case "css":
            return w(t, e);

          case "attribute":
            return t.getAttribute(e);
        }

        return t[e] || 0;
      }

      function f(t, e) {
        var i = /^(\*=|\+=|-=)/.exec(t);
        if (!i) return t;
        var n = l(t) || 0;

        switch (e = parseFloat(e), t = parseFloat(t.replace(i[0], "")), i[0][0]) {
          case "+":
            return e + t + n;

          case "-":
            return e - t + n;

          case "*":
            return e * t + n;
        }
      }

      function m(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }

      function i(t) {
        t = t.points;

        for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
          var s = t.getItem(n);
          0 < n && (i += m(e, s)), e = s;
        }

        return i;
      }

      function g(t) {
        if (t.getTotalLength) return t.getTotalLength();

        switch (t.tagName.toLowerCase()) {
          case "circle":
            return 2 * Math.PI * t.getAttribute("r");

          case "rect":
            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");

          case "line":
            return m({
              x: t.getAttribute("x1"),
              y: t.getAttribute("y1")
            }, {
              x: t.getAttribute("x2"),
              y: t.getAttribute("y2")
            });

          case "polyline":
            return i(t);

          case "polygon":
            var e = t.points;
            return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0));
        }
      }

      function C(e, i) {
        function t(t) {
          return t = void 0 === t ? 0 : t, e.el.getPointAtLength(1 <= i + t ? i + t : 0);
        }

        var n = t(),
            s = t(-1),
            o = t(1);

        switch (e.property) {
          case "x":
            return n.x;

          case "y":
            return n.y;

          case "angle":
            return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI;
        }
      }

      function _(t, e) {
        var i,
            n = /-?\d*\.?\d+/g;
        if (i = B.pth(t) ? t.totalLength : t, B.col(i)) {
          if (B.rgb(i)) {
            var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
            i = s ? "rgba(" + s[1] + ",1)" : i;
          } else i = B.hex(i) ? function (t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
              return e + e + i + i + n + n;
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            t = parseInt(e[1], 16);
            var i = parseInt(e[2], 16),
                e = parseInt(e[3], 16);
            return "rgba(" + t + "," + i + "," + e + ",1)";
          }(i) : B.hsl(i) ? function (t) {
            function e(t, e, i) {
              return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
            }

            var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
            t = parseInt(i[1]) / 360;
            var n = parseInt(i[2]) / 100,
                s = parseInt(i[3]) / 100,
                i = i[4] || 1;
            if (0 == n) s = n = t = s;else {
              var o = s < .5 ? s * (1 + n) : s + n - s * n,
                  a = 2 * s - o,
                  s = e(a, o, t + 1 / 3),
                  n = e(a, o, t);
              t = e(a, o, t - 1 / 3);
            }
            return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")";
          }(i) : void 0;
        } else s = (s = l(i)) ? i.substr(0, i.length - s.length) : i, i = e && !/\s/g.test(i) ? s + e : s;
        return {
          original: i += "",
          numbers: i.match(n) ? i.match(n).map(Number) : [0],
          strings: B.str(t) || e ? i.split(n) : []
        };
      }

      function y(t) {
        return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function (t, e, i) {
          return i.indexOf(t) === e;
        });
      }

      function k(t, i) {
        var e = r(i);

        if (B.arr(t)) {
          var n = t.length;
          2 !== n || B.obj(t[0]) ? B.fnc(i.duration) || (e.duration = i.duration / n) : t = {
            value: t
          };
        }

        return o(t).map(function (t, e) {
          return e = e ? 0 : i.delay, t = B.obj(t) && !B.pth(t) ? t : {
            value: t
          }, B.und(t.delay) && (t.delay = e), t;
        }).map(function (t) {
          return c(t, e);
        });
      }

      function E(o, a) {
        var r;
        return o.tweens.map(function (t) {
          var e = (t = function (t, e) {
            var i,
                n = {};

            for (i in t) {
              var s = h(t[i], e);
              B.arr(s) && 1 === (s = s.map(function (t) {
                return h(t, e);
              })).length && (s = s[0]), n[i] = s;
            }

            return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n;
          }(t, a)).value,
              i = v(a.target, o.name),
              n = r ? r.to.original : i,
              n = B.arr(e) ? e[0] : n,
              s = f(B.arr(e) ? e[1] : e, n),
              i = l(s) || l(n) || l(i);

          return t.from = _(n, i), t.to = _(s, i), t.start = r ? r.end : o.offset, t.end = t.start + t.delay + t.duration, t.easing = function (t) {
            return B.arr(t) ? D.apply(this, t) : S[t];
          }(t.easing), t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3, t.isPath = B.pth(e), t.isColor = B.col(t.from.original), t.isColor && (t.round = 1), r = t;
        });
      }

      function M(e, t, i, n) {
        var s = "delay" === e;
        return t.length ? (s ? Math.min : Math.max).apply(Math, t.map(function (t) {
          return t[e];
        })) : s ? n.delay : i.offset + n.delay + n.duration;
      }

      function n(t) {
        var e,
            i,
            n,
            s,
            o = u(L, t),
            a = u(T, t),
            r = (i = t.targets, (n = y(i)).map(function (t, e) {
          return {
            target: t,
            id: e,
            total: n.length
          };
        })),
            l = [],
            h = c(o, a);

        for (e in t) {
          h.hasOwnProperty(e) || "targets" === e || l.push({
            name: e,
            offset: h.offset,
            tweens: k(t[e], a)
          });
        }

        return s = l, t = b(d(r.map(function (n) {
          return s.map(function (t) {
            var e = p(n.target, t.name);

            if (e) {
              var i = E(t, n);
              t = {
                type: e,
                property: t.name,
                animatable: n,
                tweens: i,
                duration: i[i.length - 1].end,
                delay: i[0].delay
              };
            } else t = void 0;

            return t;
          });
        })), function (t) {
          return !B.und(t);
        }), c(o, {
          children: [],
          animatables: r,
          animations: t,
          duration: M("duration", t, o, a),
          delay: M("delay", t, o, a)
        });
      }

      function O(t) {
        function d() {
          return window.Promise && new Promise(function (t) {
            return _ = t;
          });
        }

        function u(t) {
          return k.reversed ? k.duration - t : t;
        }

        function c(e) {
          for (var t = 0, i = {}, n = k.animations, s = n.length; t < s;) {
            var o = n[t],
                a = o.animatable,
                r = o.tweens,
                l = r.length - 1,
                h = r[l];
            l && (h = b(r, function (t) {
              return e < t.end;
            })[0] || h);

            for (var r = Math.min(Math.max(e - h.start - h.delay, 0), h.duration) / h.duration, d = isNaN(r) ? 1 : h.easing(r, h.elasticity), r = h.to.strings, u = h.round, l = [], c = void 0, c = h.to.numbers.length, p = 0; p < c; p++) {
              var v = void 0,
                  v = h.to.numbers[p],
                  f = h.from.numbers[p],
                  v = h.isPath ? C(h.value, d * v) : f + d * (v - f);
              u && (h.isColor && 2 < p || (v = Math.round(v * u) / u)), l.push(v);
            }

            if (h = r.length) for (c = r[0], d = 0; d < h; d++) {
              u = r[d + 1], p = l[d], isNaN(p) || (c = u ? c + (p + u) : c + (p + " "));
            } else c = l[0];
            I[o.type](a.target, o.property, c, i, a.id), o.currentValue = c, t++;
          }

          if (t = Object.keys(i).length) for (n = 0; n < t; n++) {
            x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"), k.animatables[n].target.style[x] = i[n].join(" ");
          }
          k.currentTime = e, k.progress = e / k.duration * 100;
        }

        function p(t) {
          k[t] && k[t](k);
        }

        function v() {
          k.remaining && !0 !== k.remaining && k.remaining--;
        }

        function e(t) {
          var e = k.duration,
              i = k.offset,
              n = i + k.delay,
              s = k.currentTime,
              o = k.reversed,
              a = u(t);

          if (k.children.length) {
            var r = k.children,
                l = r.length;
            if (a >= k.currentTime) for (var h = 0; h < l; h++) {
              r[h].seek(a);
            } else for (; l--;) {
              r[l].seek(a);
            }
          }

          (n <= a || !e) && (k.began || (k.began = !0, p("begin")), p("run")), i < a && a < e ? c(a) : (a <= i && 0 !== s && (c(0), o && v()), (e <= a && s !== e || !e) && (c(e), o || v())), p("update"), e <= t && (k.remaining ? (m = f, "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(), k.completed || (k.completed = !0, p("complete"), "Promise" in window && (_(), y = d()))), g = 0);
        }

        t = void 0 === t ? {} : t;
        var f,
            m,
            g = 0,
            _ = null,
            y = d(),
            k = n(t);
        return k.reset = function () {
          var t = k.direction,
              e = k.loop;

          for (k.currentTime = 0, k.progress = 0, k.paused = !0, k.began = !1, k.completed = !1, k.reversed = "reverse" === t, k.remaining = "alternate" === t && 1 === e ? 2 : e, c(0), t = k.children.length; t--;) {
            k.children[t].reset();
          }
        }, k.tick = function (t) {
          f = t, m || (m = f), e((g + f - m) * O.speed);
        }, k.seek = function (t) {
          e(u(t));
        }, k.pause = function () {
          var t = A.indexOf(k);
          -1 < t && A.splice(t, 1), k.paused = !0;
        }, k.play = function () {
          k.paused && (k.paused = !1, m = 0, g = u(k.currentTime), A.push(k), R || H());
        }, k.reverse = function () {
          k.reversed = !k.reversed, m = 0, g = u(k.currentTime);
        }, k.restart = function () {
          k.pause(), k.reset(), k.play();
        }, k.finished = y, k.reset(), k.autoplay && k.play(), k;
      }

      var x,
          L = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
      },
          T = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
      },
          $ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
          B = {
        arr: function arr(t) {
          return Array.isArray(t);
        },
        obj: function obj(t) {
          return -1 < Object.prototype.toString.call(t).indexOf("Object");
        },
        pth: function pth(t) {
          return B.obj(t) && t.hasOwnProperty("totalLength");
        },
        svg: function svg(t) {
          return t instanceof SVGElement;
        },
        dom: function dom(t) {
          return t.nodeType || B.svg(t);
        },
        str: function str(t) {
          return "string" == typeof t;
        },
        fnc: function fnc(t) {
          return "function" == typeof t;
        },
        und: function und(t) {
          return void 0 === t;
        },
        hex: function hex(t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgb: function rgb(t) {
          return /^rgb/.test(t);
        },
        hsl: function hsl(t) {
          return /^hsl/.test(t);
        },
        col: function col(t) {
          return B.hex(t) || B.rgb(t) || B.hsl(t);
        }
      },
          D = function () {
        function u(t, e, i) {
          return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        }

        return function (a, r, l, h) {
          if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
            var d = new Float32Array(11);
            if (a !== r || l !== h) for (var t = 0; t < 11; ++t) {
              d[t] = u(.1 * t, a, l);
            }
            return function (t) {
              if (a === r && l === h) return t;
              if (0 === t) return 0;
              if (1 === t) return 1;

              for (var e = 0, i = 1; 10 !== i && d[i] <= t; ++i) {
                e += .1;
              }

              var i = e + (t - d[--i]) / (d[i + 1] - d[i]) * .1,
                  n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a;

              if (.001 <= n) {
                for (e = 0; e < 4 && 0 != (n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a); ++e) {
                  var s = u(i, a, l) - t,
                      i = i - s / n;
                }

                t = i;
              } else if (0 === n) t = i;else {
                for (var i = e, e = e + .1, o = 0; 0 < (n = u(s = i + (e - i) / 2, a, l) - t) ? e = s : i = s, 1e-7 < Math.abs(n) && ++o < 10;) {
                  ;
                }

                t = s;
              }

              return u(t, r, h);
            };
          }
        };
      }(),
          S = function () {
        function i(t, e) {
          return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e);
        }

        var t,
            n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
            e = {
          In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], i],
          Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (t, e) {
            return 1 - i(1 - t, e);
          }],
          InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (t, e) {
            return t < .5 ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2;
          }]
        },
            s = {
          linear: D(.25, .25, .75, .75)
        },
            o = {};

        for (t in e) {
          o.type = t, e[o.type].forEach(function (i) {
            return function (t, e) {
              s["ease" + i.type + n[e]] = B.fnc(t) ? t : D.apply($jscomp$this, t);
            };
          }(o)), o = {
            type: o.type
          };
        }

        return s;
      }(),
          I = {
        css: function css(t, e, i) {
          return t.style[e] = i;
        },
        attribute: function attribute(t, e, i) {
          return t.setAttribute(e, i);
        },
        object: function object(t, e, i) {
          return t[e] = i;
        },
        transform: function transform(t, e, i, n, s) {
          n[s] || (n[s] = []), n[s].push(e + "(" + i + ")");
        }
      },
          A = [],
          R = 0,
          H = function () {
        function n() {
          R = requestAnimationFrame(t);
        }

        function t(t) {
          var e = A.length;

          if (e) {
            for (var i = 0; i < e;) {
              A[i] && A[i].tick(t), i++;
            }

            n();
          } else cancelAnimationFrame(R), R = 0;
        }

        return n;
      }();

      return O.version = "2.2.0", O.speed = 1, O.running = A, O.remove = function (t) {
        t = y(t);

        for (var e = A.length; e--;) {
          for (var i = A[e], n = i.animations, s = n.length; s--;) {
            a(t, n[s].animatable.target) && (n.splice(s, 1), n.length || i.pause());
          }
        }
      }, O.getValue = v, O.path = function (t, e) {
        var i = B.str(t) ? s(t)[0] : t,
            n = e || 100;
        return function (t) {
          return {
            el: i,
            property: t,
            totalLength: g(i) * (n / 100)
          };
        };
      }, O.setDashoffset = function (t) {
        var e = g(t);
        return t.setAttribute("stroke-dasharray", e), e;
      }, O.bezier = D, O.easings = S, O.timeline = function (n) {
        var s = O(n);
        return s.pause(), s.duration = 0, s.add = function (t) {
          return s.children.forEach(function (t) {
            t.began = !0, t.completed = !0;
          }), o(t).forEach(function (t) {
            var e = c(t, u(T, n || {}));
            e.targets = e.targets || n.targets, t = s.duration;
            var i = e.offset;
            e.autoplay = !1, e.direction = s.direction, e.offset = B.und(i) ? t : f(i, t), s.began = !0, s.completed = !0, s.seek(e.offset), (e = O(e)).began = !0, e.completed = !0, e.duration > t && (s.duration = e.duration), s.children.push(e);
          }), s.seek(0), s.reset(), s.autoplay && s.restart(), s;
        }, s;
      }, O.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }, O;
    }(), function (r, l) {
      "use strict";

      var e = {
        accordion: !0,
        onOpenStart: void 0,
        onOpenEnd: void 0,
        onCloseStart: void 0,
        onCloseEnd: void 0,
        inDuration: 300,
        outDuration: 300
      },
          t = function (t) {
        function s(t, e) {
          _classCallCheck(this, s);

          var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));

          (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e), i.$headers = i.$el.children("li").children(".collapsible-header"), i.$headers.attr("tabindex", 0), i._setupEventHandlers();
          var n = i.$el.children("li.active").children(".collapsible-body");
          return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"), i;
        }

        return _inherits(s, Component), _createClass(s, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.M_Collapsible = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            var e = this;
            this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this), this.el.addEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function (t) {
              t.addEventListener("keydown", e._handleCollapsibleKeydownBound);
            });
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            var e = this;
            this.el.removeEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function (t) {
              t.removeEventListener("keydown", e._handleCollapsibleKeydownBound);
            });
          }
        }, {
          key: "_handleCollapsibleClick",
          value: function value(t) {
            var e = r(t.target).closest(".collapsible-header");

            if (t.target && e.length) {
              var i = e.closest(".collapsible");

              if (i[0] === this.el) {
                var n = e.closest("li"),
                    s = i.children("li"),
                    o = n[0].classList.contains("active"),
                    a = s.index(n);
                o ? this.close(a) : this.open(a);
              }
            }
          }
        }, {
          key: "_handleCollapsibleKeydown",
          value: function value(t) {
            13 === t.keyCode && this._handleCollapsibleClickBound(t);
          }
        }, {
          key: "_animateIn",
          value: function value(t) {
            var e = this,
                i = this.$el.children("li").eq(t);

            if (i.length) {
              var n = i.children(".collapsible-body");
              l.remove(n[0]), n.css({
                display: "block",
                overflow: "hidden",
                height: 0,
                paddingTop: "",
                paddingBottom: ""
              });
              var s = n.css("padding-top"),
                  o = n.css("padding-bottom"),
                  a = n[0].scrollHeight;
              n.css({
                paddingTop: 0,
                paddingBottom: 0
              }), l({
                targets: n[0],
                height: a,
                paddingTop: s,
                paddingBottom: o,
                duration: this.options.inDuration,
                easing: "easeInOutCubic",
                complete: function complete(t) {
                  n.css({
                    overflow: "",
                    paddingTop: "",
                    paddingBottom: "",
                    height: ""
                  }), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, i[0]);
                }
              });
            }
          }
        }, {
          key: "_animateOut",
          value: function value(t) {
            var e = this,
                i = this.$el.children("li").eq(t);

            if (i.length) {
              var n = i.children(".collapsible-body");
              l.remove(n[0]), n.css("overflow", "hidden"), l({
                targets: n[0],
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                duration: this.options.outDuration,
                easing: "easeInOutCubic",
                complete: function complete() {
                  n.css({
                    height: "",
                    overflow: "",
                    padding: "",
                    display: ""
                  }), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, i[0]);
                }
              });
            }
          }
        }, {
          key: "open",
          value: function value(t) {
            var i = this,
                e = this.$el.children("li").eq(t);

            if (e.length && !e[0].classList.contains("active")) {
              if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, e[0]), this.options.accordion) {
                var n = this.$el.children("li");
                this.$el.children("li.active").each(function (t) {
                  var e = n.index(r(t));
                  i.close(e);
                });
              }

              e[0].classList.add("active"), this._animateIn(t);
            }
          }
        }, {
          key: "close",
          value: function value(t) {
            var e = this.$el.children("li").eq(t);
            e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]), e[0].classList.remove("active"), this._animateOut(t));
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Collapsible;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), s;
      }();

      M.Collapsible = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible");
    }(cash, M.anime), function (h, i) {
      "use strict";

      var e = {
        alignment: "left",
        autoFocus: !0,
        constrainWidth: !0,
        container: null,
        coverTrigger: !0,
        closeOnClick: !0,
        hover: !1,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onItemClick: null
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return i.el.M_Dropdown = i, n._dropdowns.push(i), i.id = M.getIdFromTrigger(t), i.dropdownEl = document.getElementById(i.id), i.$dropdownEl = h(i.dropdownEl), i.options = h.extend({}, n.defaults, e), i.isOpen = !1, i.isScrollable = !1, i.isTouchMoving = !1, i.focusedIndex = -1, i.filterQuery = [], i.options.container ? h(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl), i._makeDropdownFocusable(), i._resetFilterQueryBound = i._resetFilterQuery.bind(i), i._handleDocumentClickBound = i._handleDocumentClick.bind(i), i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i), i._handleDropdownClickBound = i._handleDropdownClick.bind(i), i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i), i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._resetDropdownStyles(), this._removeEventHandlers(), n._dropdowns.splice(n._dropdowns.indexOf(this), 1), this.el.M_Dropdown = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this.el.addEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.addEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound);
          }
        }, {
          key: "_setupTemporaryEventHandlers",
          value: function value() {
            document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound), document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound);
          }
        }, {
          key: "_removeTemporaryEventHandlers",
          value: function value() {
            document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound), document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound);
          }
        }, {
          key: "_handleClick",
          value: function value(t) {
            t.preventDefault(), this.open();
          }
        }, {
          key: "_handleMouseEnter",
          value: function value() {
            this.open();
          }
        }, {
          key: "_handleMouseLeave",
          value: function value(t) {
            var e = t.toElement || t.relatedTarget,
                i = !!h(e).closest(".dropdown-content").length,
                n = !1,
                s = h(e).closest(".dropdown-trigger");
            s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0), n || i || this.close();
          }
        }, {
          key: "_handleDocumentClick",
          value: function value(t) {
            var e = this,
                i = h(t.target);
            this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function () {
              e.close();
            }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function () {
              e.close();
            }, 0), this.isTouchMoving = !1;
          }
        }, {
          key: "_handleTriggerKeydown",
          value: function value(t) {
            t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(), this.open());
          }
        }, {
          key: "_handleDocumentTouchmove",
          value: function value(t) {
            h(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0);
          }
        }, {
          key: "_handleDropdownClick",
          value: function value(t) {
            if ("function" == typeof this.options.onItemClick) {
              var e = h(t.target).closest("li")[0];
              this.options.onItemClick.call(this, e);
            }
          }
        }, {
          key: "_handleDropdownKeydown",
          value: function value(t) {
            if (t.which === M.keys.TAB) t.preventDefault(), this.close();else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen) {
              if (t.which === M.keys.ENTER && this.isOpen) {
                var e = this.dropdownEl.children[this.focusedIndex],
                    i = h(e).find("a, button").first();
                i.length ? i[0].click() : e && e.click();
              } else t.which === M.keys.ESC && this.isOpen && (t.preventDefault(), this.close());
            } else {
              t.preventDefault();
              var n = t.which === M.keys.ARROW_DOWN ? 1 : -1,
                  s = this.focusedIndex,
                  o = !1;

              do {
                if (s += n, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                  o = !0;
                  break;
                }
              } while (s < this.dropdownEl.children.length && 0 <= s);

              o && (this.focusedIndex = s, this._focusFocusedItem());
            }
            var a = String.fromCharCode(t.which).toLowerCase();

            if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
              this.filterQuery.push(a);
              var r = this.filterQuery.join(""),
                  l = h(this.dropdownEl).find("li").filter(function (t) {
                return 0 === h(t).text().toLowerCase().indexOf(r);
              })[0];
              l && (this.focusedIndex = h(l).index(), this._focusFocusedItem());
            }

            this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3);
          }
        }, {
          key: "_resetFilterQuery",
          value: function value() {
            this.filterQuery = [];
          }
        }, {
          key: "_resetDropdownStyles",
          value: function value() {
            this.$dropdownEl.css({
              display: "",
              width: "",
              height: "",
              left: "",
              top: "",
              "transform-origin": "",
              transform: "",
              opacity: ""
            });
          }
        }, {
          key: "_makeDropdownFocusable",
          value: function value() {
            this.dropdownEl.tabIndex = 0, h(this.dropdownEl).children().each(function (t) {
              t.getAttribute("tabindex") || t.setAttribute("tabindex", 0);
            });
          }
        }, {
          key: "_focusFocusedItem",
          value: function value() {
            0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus();
          }
        }, {
          key: "_getDropdownPosition",
          value: function value() {
            this.el.offsetParent.getBoundingClientRect();
            var t = this.el.getBoundingClientRect(),
                e = this.dropdownEl.getBoundingClientRect(),
                i = e.height,
                n = e.width,
                s = t.left - e.left,
                o = t.top - e.top,
                a = {
              left: s,
              top: o,
              height: i,
              width: n
            },
                r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode,
                l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height),
                h = "top",
                d = this.options.alignment;

            if (o += this.options.coverTrigger ? 0 : t.height, this.isScrollable = !1, l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0, l.spaceOnTop > l.spaceOnBottom ? (h = "bottom", i += l.spaceOnTop, o -= l.spaceOnTop) : i += l.spaceOnBottom)), !l[d]) {
              var u = "left" === d ? "right" : "left";
              l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right", n += l.spaceOnLeft, s -= l.spaceOnLeft) : (d = "left", n += l.spaceOnRight);
            }

            return "bottom" === h && (o = o - e.height + (this.options.coverTrigger ? t.height : 0)), "right" === d && (s = s - e.width + t.width), {
              x: s,
              y: o,
              verticalAlignment: h,
              horizontalAlignment: d,
              height: i,
              width: n
            };
          }
        }, {
          key: "_animateIn",
          value: function value() {
            var e = this;
            i.remove(this.dropdownEl), i({
              targets: this.dropdownEl,
              opacity: {
                value: [0, 1],
                easing: "easeOutQuad"
              },
              scaleX: [.3, 1],
              scaleY: [.3, 1],
              duration: this.options.inDuration,
              easing: "easeOutQuint",
              complete: function complete(t) {
                e.options.autoFocus && e.dropdownEl.focus(), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el);
              }
            });
          }
        }, {
          key: "_animateOut",
          value: function value() {
            var e = this;
            i.remove(this.dropdownEl), i({
              targets: this.dropdownEl,
              opacity: {
                value: 0,
                easing: "easeOutQuint"
              },
              scaleX: .3,
              scaleY: .3,
              duration: this.options.outDuration,
              easing: "easeOutQuint",
              complete: function complete(t) {
                e._resetDropdownStyles(), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el);
              }
            });
          }
        }, {
          key: "_placeDropdown",
          value: function value() {
            var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
            this.dropdownEl.style.width = t + "px";

            var e = this._getDropdownPosition();

            this.dropdownEl.style.left = e.x + "px", this.dropdownEl.style.top = e.y + "px", this.dropdownEl.style.height = e.height + "px", this.dropdownEl.style.width = e.width + "px", this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%");
          }
        }, {
          key: "open",
          value: function value() {
            this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers());
          }
        }, {
          key: "close",
          value: function value() {
            this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus());
          }
        }, {
          key: "recalculateDimensions",
          value: function value() {
            this.isOpen && (this.$dropdownEl.css({
              width: "",
              height: "",
              left: "",
              top: "",
              "transform-origin": ""
            }), this._placeDropdown());
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Dropdown;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      t._dropdowns = [], M.Dropdown = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown");
    }(cash, M.anime), function (s, i) {
      "use strict";

      var e = {
        opacity: .5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Modal = i).options = s.extend({}, n.defaults, e), i.isOpen = !1, i.id = i.$el.attr("id"), i._openingTrigger = void 0, i.$overlay = s('<div class="modal-overlay"></div>'), i.el.tabIndex = 0, i._nthModalOpened = 0, n._count++, i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            n._count--, this._removeEventHandlers(), this.el.removeAttribute("style"), this.$overlay.remove(), this.el.M_Modal = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleOverlayClickBound = this._handleOverlayClick.bind(this), this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this._handleTriggerClick), this.$overlay[0].addEventListener("click", this._handleOverlayClickBound), this.el.addEventListener("click", this._handleModalCloseClickBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick), this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound), this.el.removeEventListener("click", this._handleModalCloseClickBound);
          }
        }, {
          key: "_handleTriggerClick",
          value: function value(t) {
            var e = s(t.target).closest(".modal-trigger");

            if (e.length) {
              var i = M.getIdFromTrigger(e[0]),
                  n = document.getElementById(i).M_Modal;
              n && n.open(e), t.preventDefault();
            }
          }
        }, {
          key: "_handleOverlayClick",
          value: function value() {
            this.options.dismissible && this.close();
          }
        }, {
          key: "_handleModalCloseClick",
          value: function value(t) {
            s(t.target).closest(".modal-close").length && this.close();
          }
        }, {
          key: "_handleKeydown",
          value: function value(t) {
            27 === t.keyCode && this.options.dismissible && this.close();
          }
        }, {
          key: "_handleFocus",
          value: function value(t) {
            this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus();
          }
        }, {
          key: "_animateIn",
          value: function value() {
            var t = this;
            s.extend(this.el.style, {
              display: "block",
              opacity: 0
            }), s.extend(this.$overlay[0].style, {
              display: "block",
              opacity: 0
            }), i({
              targets: this.$overlay[0],
              opacity: this.options.opacity,
              duration: this.options.inDuration,
              easing: "easeOutQuad"
            });
            var e = {
              targets: this.el,
              duration: this.options.inDuration,
              easing: "easeOutCubic",
              complete: function complete() {
                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el, t._openingTrigger);
              }
            };
            this.el.classList.contains("bottom-sheet") ? s.extend(e, {
              bottom: 0,
              opacity: 1
            }) : s.extend(e, {
              top: [this.options.startingTop, this.options.endingTop],
              opacity: 1,
              scaleX: [.8, 1],
              scaleY: [.8, 1]
            }), i(e);
          }
        }, {
          key: "_animateOut",
          value: function value() {
            var t = this;
            i({
              targets: this.$overlay[0],
              opacity: 0,
              duration: this.options.outDuration,
              easing: "easeOutQuart"
            });
            var e = {
              targets: this.el,
              duration: this.options.outDuration,
              easing: "easeOutCubic",
              complete: function complete() {
                t.el.style.display = "none", t.$overlay.remove(), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
              }
            };
            this.el.classList.contains("bottom-sheet") ? s.extend(e, {
              bottom: "-100%",
              opacity: 0
            }) : s.extend(e, {
              top: [this.options.endingTop, this.options.startingTop],
              opacity: 0,
              scaleX: .8,
              scaleY: .8
            }), i(e);
          }
        }, {
          key: "open",
          value: function value(t) {
            if (!this.isOpen) return this.isOpen = !0, n._modalsOpen++, this._nthModalOpened = n._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen, this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1, this._openingTrigger = t ? t[0] : void 0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add("open"), this.el.insertAdjacentElement("afterend", this.$overlay[0]), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateIn(), this.el.focus(), this;
          }
        }, {
          key: "close",
          value: function value() {
            if (this.isOpen) return this.isOpen = !1, n._modalsOpen--, this._nthModalOpened = 0, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this.el.classList.remove("open"), 0 === n._modalsOpen && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateOut(), this;
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Modal;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      t._modalsOpen = 0, t._count = 0, M.Modal = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal");
    }(cash, M.anime), function (o, a) {
      "use strict";

      var e = {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e), i.overlayActive = !1, i.doneAnimating = !0, i.placeholder = o("<div></div>").addClass("material-placeholder"), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr("style"), i.caption = i.el.getAttribute("data-caption") || "", i.$el.before(i.placeholder), i.placeholder.append(i.$el), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.M_Materialbox = void 0, o(this.placeholder).after(this.el).remove(), this.$el.removeAttr("style");
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this), this.el.addEventListener("click", this._handleMaterialboxClickBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("click", this._handleMaterialboxClickBound);
          }
        }, {
          key: "_handleMaterialboxClick",
          value: function value(t) {
            !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open();
          }
        }, {
          key: "_handleWindowScroll",
          value: function value() {
            this.overlayActive && this.close();
          }
        }, {
          key: "_handleWindowResize",
          value: function value() {
            this.overlayActive && this.close();
          }
        }, {
          key: "_handleWindowEscape",
          value: function value(t) {
            27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close();
          }
        }, {
          key: "_makeAncestorsOverflowVisible",
          value: function value() {
            this.ancestorsChanged = o();

            for (var t = this.placeholder[0].parentNode; null !== t && !o(t).is(document);) {
              var e = o(t);
              "visible" !== e.css("overflow") && (e.css("overflow", "visible"), void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)), t = t.parentNode;
            }
          }
        }, {
          key: "_animateImageIn",
          value: function value() {
            var t = this,
                e = {
              targets: this.el,
              height: [this.originalHeight, this.newHeight],
              width: [this.originalWidth, this.newWidth],
              left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
              top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
              duration: this.options.inDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                t.doneAnimating = !0, "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el);
              }
            };
            this.maxWidth = this.$el.css("max-width"), this.maxHeight = this.$el.css("max-height"), "none" !== this.maxWidth && (e.maxWidth = this.newWidth), "none" !== this.maxHeight && (e.maxHeight = this.newHeight), a(e);
          }
        }, {
          key: "_animateImageOut",
          value: function value() {
            var t = this,
                e = {
              targets: this.el,
              width: this.originalWidth,
              height: this.originalHeight,
              left: 0,
              top: 0,
              duration: this.options.outDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                t.placeholder.css({
                  height: "",
                  width: "",
                  position: "",
                  top: "",
                  left: ""
                }), t.attrWidth && t.$el.attr("width", t.attrWidth), t.attrHeight && t.$el.attr("height", t.attrHeight), t.$el.removeAttr("style"), t.originInlineStyles && t.$el.attr("style", t.originInlineStyles), t.$el.removeClass("active"), t.doneAnimating = !0, t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
              }
            };
            a(e);
          }
        }, {
          key: "_updateVars",
          value: function value() {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute("data-caption") || "";
          }
        }, {
          key: "open",
          value: function value() {
            var t = this;
            this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = !1, this.$el.addClass("active"), this.overlayActive = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this.placeholder.css({
              width: this.placeholder[0].getBoundingClientRect().width + "px",
              height: this.placeholder[0].getBoundingClientRect().height + "px",
              position: "relative",
              top: 0,
              left: 0
            }), this._makeAncestorsOverflowVisible(), this.$el.css({
              position: "absolute",
              "z-index": 1e3,
              "will-change": "left, top, width, height"
            }), this.attrWidth = this.$el.attr("width"), this.attrHeight = this.$el.attr("height"), this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")), this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")), this.$overlay = o('<div id="materialbox-overlay"></div>').css({
              opacity: 0
            }).one("click", function () {
              t.doneAnimating && t.close();
            }), this.$el.before(this.$overlay);
            var e = this.$overlay[0].getBoundingClientRect();
            this.$overlay.css({
              width: this.windowWidth + "px",
              height: this.windowHeight + "px",
              left: -1 * e.left + "px",
              top: -1 * e.top + "px"
            }), a.remove(this.el), a.remove(this.$overlay[0]), a({
              targets: this.$overlay[0],
              opacity: 1,
              duration: this.options.inDuration,
              easing: "easeOutQuad"
            }), "" !== this.caption && (this.$photocaption && a.remove(this.$photoCaption[0]), this.$photoCaption = o('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), o("body").append(this.$photoCaption), this.$photoCaption.css({
              display: "inline"
            }), a({
              targets: this.$photoCaption[0],
              opacity: 1,
              duration: this.options.inDuration,
              easing: "easeOutQuad"
            }));
            var i = 0,
                n = this.originalWidth / this.windowWidth,
                s = this.originalHeight / this.windowHeight;
            this.newWidth = 0, this.newHeight = 0, s < n ? (i = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * i, this.newHeight = .9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), this._handleWindowResizeBound = this._handleWindowResize.bind(this), this._handleWindowEscapeBound = this._handleWindowEscape.bind(this), window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleWindowResizeBound), window.addEventListener("keyup", this._handleWindowEscapeBound);
          }
        }, {
          key: "close",
          value: function value() {
            var t = this;
            this._updateVars(), this.doneAnimating = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), a.remove(this.el), a.remove(this.$overlay[0]), "" !== this.caption && a.remove(this.$photoCaption[0]), window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleWindowResizeBound), window.removeEventListener("keyup", this._handleWindowEscapeBound), a({
              targets: this.$overlay[0],
              opacity: 0,
              duration: this.options.outDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                t.overlayActive = !1, t.$overlay.remove();
              }
            }), this._animateImageOut(), "" !== this.caption && a({
              targets: this.$photoCaption[0],
              opacity: 0,
              duration: this.options.outDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                t.$photoCaption.remove();
              }
            });
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Materialbox;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.Materialbox = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox");
    }(cash, M.anime), function (s) {
      "use strict";

      var e = {
        responsiveThreshold: 0
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e), i._enabled = window.innerWidth > i.options.responsiveThreshold, i.$img = i.$el.find("img").first(), i.$img.each(function () {
            this.complete && s(this).trigger("load");
          }), i._updateParallax(), i._setupEventHandlers(), i._setupStyles(), n._parallaxes.push(i), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            n._parallaxes.splice(n._parallaxes.indexOf(this), 1), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleImageLoadBound = this._handleImageLoad.bind(this), this.$img[0].addEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5), window.addEventListener("scroll", n._handleScrollThrottled), n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5), window.addEventListener("resize", n._handleWindowResizeThrottled));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.$img[0].removeEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled), window.removeEventListener("resize", n._handleWindowResizeThrottled));
          }
        }, {
          key: "_setupStyles",
          value: function value() {
            this.$img[0].style.opacity = 1;
          }
        }, {
          key: "_handleImageLoad",
          value: function value() {
            this._updateParallax();
          }
        }, {
          key: "_updateParallax",
          value: function value() {
            var t = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500,
                e = this.$img[0].offsetHeight - t,
                i = this.$el.offset().top + t,
                n = this.$el.offset().top,
                s = M.getDocumentScrollTop(),
                o = window.innerHeight,
                a = e * ((s + o - n) / (t + o));
            this._enabled ? s < i && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = "";
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Parallax;
          }
        }, {
          key: "_handleScroll",
          value: function value() {
            for (var t = 0; t < n._parallaxes.length; t++) {
              var e = n._parallaxes[t];

              e._updateParallax.call(e);
            }
          }
        }, {
          key: "_handleWindowResize",
          value: function value() {
            for (var t = 0; t < n._parallaxes.length; t++) {
              var e = n._parallaxes[t];
              e._enabled = window.innerWidth > e.options.responsiveThreshold;
            }
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      t._parallaxes = [], M.Parallax = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax");
    }(cash), function (a, s) {
      "use strict";

      var e = {
        duration: 300,
        onShow: null,
        swipeable: !1,
        responsiveThreshold: 1 / 0
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e), i.$tabLinks = i.$el.children("li.tab").children("a"), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this._indicator.parentNode.removeChild(this._indicator), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound), this._handleTabClickBound = this._handleTabClick.bind(this), this.el.addEventListener("click", this._handleTabClickBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            window.removeEventListener("resize", this._handleWindowResizeBound), this.el.removeEventListener("click", this._handleTabClickBound);
          }
        }, {
          key: "_handleWindowResize",
          value: function value() {
            this._setTabsAndTabWidth(), 0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px");
          }
        }, {
          key: "_handleTabClick",
          value: function value(t) {
            var e = this,
                i = a(t.target).closest("li.tab"),
                n = a(t.target).closest("a");
            if (n.length && n.parent().hasClass("tab")) if (i.hasClass("disabled")) t.preventDefault();else if (!n.attr("target")) {
              this.$activeTabLink.removeClass("active");
              var s = this.$content;
              this.$activeTabLink = n, this.$content = a(M.escapeHash(n[0].hash)), this.$tabLinks = this.$el.children("li.tab").children("a"), this.$activeTabLink.addClass("active");
              var o = this.index;
              this.index = Math.max(this.$tabLinks.index(n), 0), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function () {
                "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0]);
              }) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]), s.length && !s.is(this.$content) && (s[0].style.display = "none", s.removeClass("active"))), this._setTabsAndTabWidth(), this._animateIndicator(o), t.preventDefault();
            }
          }
        }, {
          key: "_createIndicator",
          value: function value() {
            var t = this,
                e = document.createElement("li");
            e.classList.add("indicator"), this.el.appendChild(e), this._indicator = e, setTimeout(function () {
              t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px", t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px";
            }, 0);
          }
        }, {
          key: "_setupActiveTabLink",
          value: function value() {
            this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()), this.$tabLinks.removeClass("active"), this.$activeTabLink[0].classList.add("active"), this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0), this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active"));
          }
        }, {
          key: "_setupSwipeableTabs",
          value: function value() {
            var i = this;
            window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
            var n = a();
            this.$tabLinks.each(function (t) {
              var e = a(M.escapeHash(t.hash));
              e.addClass("carousel-item"), n = n.add(e);
            });
            var t = a('<div class="tabs-content carousel carousel-slider"></div>');
            n.first().before(t), t.append(n), n[0].style.display = "";
            var e = this.$activeTabLink.closest(".tab").index();
            this._tabsCarousel = M.Carousel.init(t[0], {
              fullWidth: !0,
              noWrap: !0,
              onCycleTo: function onCycleTo(t) {
                var e = i.index;
                i.index = a(t).index(), i.$activeTabLink.removeClass("active"), i.$activeTabLink = i.$tabLinks.eq(i.index), i.$activeTabLink.addClass("active"), i._animateIndicator(e), "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0]);
              }
            }), this._tabsCarousel.set(e);
          }
        }, {
          key: "_teardownSwipeableTabs",
          value: function value() {
            var t = this._tabsCarousel.$el;
            this._tabsCarousel.destroy(), t.after(t.children()), t.remove();
          }
        }, {
          key: "_setupNormalTabs",
          value: function value() {
            this.$tabLinks.not(this.$activeTabLink).each(function (t) {
              if (t.hash) {
                var e = a(M.escapeHash(t.hash));
                e.length && (e[0].style.display = "none");
              }
            });
          }
        }, {
          key: "_teardownNormalTabs",
          value: function value() {
            this.$tabLinks.each(function (t) {
              if (t.hash) {
                var e = a(M.escapeHash(t.hash));
                e.length && (e[0].style.display = "");
              }
            });
          }
        }, {
          key: "_setTabsAndTabWidth",
          value: function value() {
            this.tabsWidth = this.$el.width(), this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
          }
        }, {
          key: "_calcRightPos",
          value: function value(t) {
            return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width);
          }
        }, {
          key: "_calcLeftPos",
          value: function value(t) {
            return Math.floor(t.position().left);
          }
        }, {
          key: "updateTabIndicator",
          value: function value() {
            this._setTabsAndTabWidth(), this._animateIndicator(this.index);
          }
        }, {
          key: "_animateIndicator",
          value: function value(t) {
            var e = 0,
                i = 0;
            0 <= this.index - t ? e = 90 : i = 90;
            var n = {
              targets: this._indicator,
              left: {
                value: this._calcLeftPos(this.$activeTabLink),
                delay: e
              },
              right: {
                value: this._calcRightPos(this.$activeTabLink),
                delay: i
              },
              duration: this.options.duration,
              easing: "easeOutQuad"
            };
            s.remove(this._indicator), s(n);
          }
        }, {
          key: "select",
          value: function value(t) {
            var e = this.$tabLinks.filter('[href="#' + t + '"]');
            e.length && e.trigger("click");
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Tabs;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.Tabs = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs");
    }(cash, M.anime), function (d, e) {
      "use strict";

      var i = {
        exitDelay: 200,
        enterDelay: 0,
        html: null,
        margin: 5,
        inDuration: 250,
        outDuration: 200,
        position: "bottom",
        transitionMovement: 10
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Tooltip = i).options = d.extend({}, n.defaults, e), i.isOpen = !1, i.isHovered = !1, i.isFocused = !1, i._appendTooltipEl(), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            d(this.tooltipEl).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0;
          }
        }, {
          key: "_appendTooltipEl",
          value: function value() {
            var t = document.createElement("div");
            t.classList.add("material-tooltip"), this.tooltipEl = t;
            var e = document.createElement("div");
            e.classList.add("tooltip-content"), e.innerHTML = this.options.html, t.appendChild(e), document.body.appendChild(t);
          }
        }, {
          key: "_updateTooltipContent",
          value: function value() {
            this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this._handleFocusBound = this._handleFocus.bind(this), this._handleBlurBound = this._handleBlur.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.el.addEventListener("focus", this._handleFocusBound, !0), this.el.addEventListener("blur", this._handleBlurBound, !0);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.el.removeEventListener("focus", this._handleFocusBound, !0), this.el.removeEventListener("blur", this._handleBlurBound, !0);
          }
        }, {
          key: "open",
          value: function value(t) {
            this.isOpen || (t = void 0 === t || void 0, this.isOpen = !0, this.options = d.extend({}, this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t));
          }
        }, {
          key: "close",
          value: function value() {
            this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout());
          }
        }, {
          key: "_setExitDelayTimeout",
          value: function value() {
            var t = this;
            clearTimeout(this._exitDelayTimeout), this._exitDelayTimeout = setTimeout(function () {
              t.isHovered || t.isFocused || t._animateOut();
            }, this.options.exitDelay);
          }
        }, {
          key: "_setEnterDelayTimeout",
          value: function value(t) {
            var e = this;
            clearTimeout(this._enterDelayTimeout), this._enterDelayTimeout = setTimeout(function () {
              (e.isHovered || e.isFocused || t) && e._animateIn();
            }, this.options.enterDelay);
          }
        }, {
          key: "_positionTooltip",
          value: function value() {
            var t,
                e = this.el,
                i = this.tooltipEl,
                n = e.offsetHeight,
                s = e.offsetWidth,
                o = i.offsetHeight,
                a = i.offsetWidth,
                r = this.options.margin,
                l = void 0,
                h = void 0;
            this.xMovement = 0, this.yMovement = 0, l = e.getBoundingClientRect().top + M.getDocumentScrollTop(), h = e.getBoundingClientRect().left + M.getDocumentScrollLeft(), "top" === this.options.position ? (l += -o - r, h += s / 2 - a / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += n / 2 - o / 2, h += s + r, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += n / 2 - o / 2, h += -a - r, this.xMovement = -this.options.transitionMovement) : (l += n + r, h += s / 2 - a / 2, this.yMovement = this.options.transitionMovement), t = this._repositionWithinScreen(h, l, a, o), d(i).css({
              top: t.y + "px",
              left: t.x + "px"
            });
          }
        }, {
          key: "_repositionWithinScreen",
          value: function value(t, e, i, n) {
            var s = M.getDocumentScrollLeft(),
                o = M.getDocumentScrollTop(),
                a = t - s,
                r = e - o,
                l = {
              left: a,
              top: r,
              width: i,
              height: n
            },
                h = this.options.margin + this.options.transitionMovement,
                d = M.checkWithinContainer(document.body, l, h);
            return d.left ? a = h : d.right && (a -= a + i - window.innerWidth), d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight), {
              x: a + s,
              y: r + o
            };
          }
        }, {
          key: "_animateIn",
          value: function value() {
            this._positionTooltip(), this.tooltipEl.style.visibility = "visible", e.remove(this.tooltipEl), e({
              targets: this.tooltipEl,
              opacity: 1,
              translateX: this.xMovement,
              translateY: this.yMovement,
              duration: this.options.inDuration,
              easing: "easeOutCubic"
            });
          }
        }, {
          key: "_animateOut",
          value: function value() {
            e.remove(this.tooltipEl), e({
              targets: this.tooltipEl,
              opacity: 0,
              translateX: 0,
              translateY: 0,
              duration: this.options.outDuration,
              easing: "easeOutCubic"
            });
          }
        }, {
          key: "_handleMouseEnter",
          value: function value() {
            this.isHovered = !0, this.isFocused = !1, this.open(!1);
          }
        }, {
          key: "_handleMouseLeave",
          value: function value() {
            this.isHovered = !1, this.isFocused = !1, this.close();
          }
        }, {
          key: "_handleFocus",
          value: function value() {
            M.tabPressed && (this.isFocused = !0, this.open(!1));
          }
        }, {
          key: "_handleBlur",
          value: function value() {
            this.isFocused = !1, this.close();
          }
        }, {
          key: "_getAttributeOptions",
          value: function value() {
            var t = {},
                e = this.el.getAttribute("data-tooltip"),
                i = this.el.getAttribute("data-position");
            return e && (t.html = e), i && (t.position = i), t;
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Tooltip;
          }
        }, {
          key: "defaults",
          get: function get() {
            return i;
          }
        }]), n;
      }();

      M.Tooltip = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip");
    }(cash, M.anime), function (i) {
      "use strict";

      var t = t || {},
          e = document.querySelectorAll.bind(document);

      function m(t) {
        var e = "";

        for (var i in t) {
          t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        }

        return e;
      }

      var g = {
        duration: 750,
        show: function show(t, e) {
          if (2 === t.button) return !1;
          var i = e || this,
              n = document.createElement("div");
          n.className = "waves-ripple", i.appendChild(n);
          var s,
              o,
              a,
              r,
              l,
              h,
              d,
              u = (h = {
            top: 0,
            left: 0
          }, d = (s = i) && s.ownerDocument, o = d.documentElement, void 0 !== s.getBoundingClientRect && (h = s.getBoundingClientRect()), a = null !== (l = r = d) && l === l.window ? r : 9 === r.nodeType && r.defaultView, {
            top: h.top + a.pageYOffset - o.clientTop,
            left: h.left + a.pageXOffset - o.clientLeft
          }),
              c = t.pageY - u.top,
              p = t.pageX - u.left,
              v = "scale(" + i.clientWidth / 100 * 10 + ")";
          "touches" in t && (c = t.touches[0].pageY - u.top, p = t.touches[0].pageX - u.left), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-scale", v), n.setAttribute("data-x", p), n.setAttribute("data-y", c);
          var f = {
            top: c + "px",
            left: p + "px"
          };
          n.className = n.className + " waves-notransition", n.setAttribute("style", m(f)), n.className = n.className.replace("waves-notransition", ""), f["-webkit-transform"] = v, f["-moz-transform"] = v, f["-ms-transform"] = v, f["-o-transform"] = v, f.transform = v, f.opacity = "1", f["-webkit-transition-duration"] = g.duration + "ms", f["-moz-transition-duration"] = g.duration + "ms", f["-o-transition-duration"] = g.duration + "ms", f["transition-duration"] = g.duration + "ms", f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", n.setAttribute("style", m(f));
        },
        hide: function hide(t) {
          l.touchup(t);
          var e = this,
              i = (e.clientWidth, null),
              n = e.getElementsByClassName("waves-ripple");
          if (!(0 < n.length)) return !1;
          var s = (i = n[n.length - 1]).getAttribute("data-x"),
              o = i.getAttribute("data-y"),
              a = i.getAttribute("data-scale"),
              r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
          r < 0 && (r = 0), setTimeout(function () {
            var t = {
              top: o + "px",
              left: s + "px",
              opacity: "0",
              "-webkit-transition-duration": g.duration + "ms",
              "-moz-transition-duration": g.duration + "ms",
              "-o-transition-duration": g.duration + "ms",
              "transition-duration": g.duration + "ms",
              "-webkit-transform": a,
              "-moz-transform": a,
              "-ms-transform": a,
              "-o-transform": a,
              transform: a
            };
            i.setAttribute("style", m(t)), setTimeout(function () {
              try {
                e.removeChild(i);
              } catch (t) {
                return !1;
              }
            }, g.duration);
          }, r);
        },
        wrapInput: function wrapInput(t) {
          for (var e = 0; e < t.length; e++) {
            var i = t[e];

            if ("input" === i.tagName.toLowerCase()) {
              var n = i.parentNode;
              if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
              var s = document.createElement("i");
              s.className = i.className + " waves-input-wrapper";
              var o = i.getAttribute("style");
              o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i);
            }
          }
        }
      },
          l = {
        touches: 0,
        allowEvent: function allowEvent(t) {
          var e = !0;
          return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
            0 < l.touches && (l.touches -= 1);
          }, 500) : "mousedown" === t.type && 0 < l.touches && (e = !1), e;
        },
        touchup: function touchup(t) {
          l.allowEvent(t);
        }
      };

      function n(t) {
        var e = function (t) {
          if (!1 === l.allowEvent(t)) return null;

          for (var e = null, i = t.target || t.srcElement; null !== i.parentNode;) {
            if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
              e = i;
              break;
            }

            i = i.parentNode;
          }

          return e;
        }(t);

        null !== e && (g.show(t, e), "ontouchstart" in i && (e.addEventListener("touchend", g.hide, !1), e.addEventListener("touchcancel", g.hide, !1)), e.addEventListener("mouseup", g.hide, !1), e.addEventListener("mouseleave", g.hide, !1), e.addEventListener("dragend", g.hide, !1));
      }

      t.displayEffect = function (t) {
        "duration" in (t = t || {}) && (g.duration = t.duration), g.wrapInput(e(".waves-effect")), "ontouchstart" in i && document.body.addEventListener("touchstart", n, !1), document.body.addEventListener("mousedown", n, !1);
      }, t.attach = function (t) {
        "input" === t.tagName.toLowerCase() && (g.wrapInput([t]), t = t.parentNode), "ontouchstart" in i && t.addEventListener("touchstart", n, !1), t.addEventListener("mousedown", n, !1);
      }, i.Waves = t, document.addEventListener("DOMContentLoaded", function () {
        t.displayEffect();
      }, !1);
    }(window), function (i, n) {
      "use strict";

      var t = {
        html: "",
        displayLength: 4e3,
        inDuration: 300,
        outDuration: 375,
        classes: "",
        completeCallback: null,
        activationPercent: .8
      },
          e = function () {
        function s(t) {
          _classCallCheck(this, s), this.options = i.extend({}, s.defaults, t), this.message = this.options.html, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === s._toasts.length && s._createContainer(), s._toasts.push(this);

          var e = this._createToast();

          (e.M_Toast = this).el = e, this.$el = i(e), this._animateIn(), this._setTimer();
        }

        return _createClass(s, [{
          key: "_createToast",
          value: function value() {
            var t = document.createElement("div");
            return t.classList.add("toast"), this.options.classes.length && i(t).addClass(this.options.classes), ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? i(t).append(this.message[0]) : t.innerHTML = this.message, s._container.appendChild(t), t;
          }
        }, {
          key: "_animateIn",
          value: function value() {
            n({
              targets: this.el,
              top: 0,
              opacity: 1,
              duration: this.options.inDuration,
              easing: "easeOutCubic"
            });
          }
        }, {
          key: "_setTimer",
          value: function value() {
            var t = this;
            this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function () {
              t.panning || (t.timeRemaining -= 20), t.timeRemaining <= 0 && t.dismiss();
            }, 20));
          }
        }, {
          key: "dismiss",
          value: function value() {
            var t = this;
            window.clearInterval(this.counterInterval);
            var e = this.el.offsetWidth * this.options.activationPercent;
            this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + e + "px)", this.el.style.opacity = 0), n({
              targets: this.el,
              opacity: 0,
              marginTop: -40,
              duration: this.options.outDuration,
              easing: "easeOutExpo",
              complete: function complete() {
                "function" == typeof t.options.completeCallback && t.options.completeCallback(), t.$el.remove(), s._toasts.splice(s._toasts.indexOf(t), 1), 0 === s._toasts.length && s._removeContainer();
              }
            });
          }
        }], [{
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Toast;
          }
        }, {
          key: "_createContainer",
          value: function value() {
            var t = document.createElement("div");
            t.setAttribute("id", "toast-container"), t.addEventListener("touchstart", s._onDragStart), t.addEventListener("touchmove", s._onDragMove), t.addEventListener("touchend", s._onDragEnd), t.addEventListener("mousedown", s._onDragStart), document.addEventListener("mousemove", s._onDragMove), document.addEventListener("mouseup", s._onDragEnd), document.body.appendChild(t), s._container = t;
          }
        }, {
          key: "_removeContainer",
          value: function value() {
            document.removeEventListener("mousemove", s._onDragMove), document.removeEventListener("mouseup", s._onDragEnd), i(s._container).remove(), s._container = null;
          }
        }, {
          key: "_onDragStart",
          value: function value(t) {
            if (t.target && i(t.target).closest(".toast").length) {
              var e = i(t.target).closest(".toast")[0].M_Toast;
              e.panning = !0, (s._draggedToast = e).el.classList.add("panning"), e.el.style.transition = "", e.startingXPos = s._xPos(t), e.time = Date.now(), e.xPos = s._xPos(t);
            }
          }
        }, {
          key: "_onDragMove",
          value: function value(t) {
            if (s._draggedToast) {
              t.preventDefault();
              var e = s._draggedToast;
              e.deltaX = Math.abs(e.xPos - s._xPos(t)), e.xPos = s._xPos(t), e.velocityX = e.deltaX / (Date.now() - e.time), e.time = Date.now();
              var i = e.xPos - e.startingXPos,
                  n = e.el.offsetWidth * e.options.activationPercent;
              e.el.style.transform = "translateX(" + i + "px)", e.el.style.opacity = 1 - Math.abs(i / n);
            }
          }
        }, {
          key: "_onDragEnd",
          value: function value() {
            if (s._draggedToast) {
              var t = s._draggedToast;
              t.panning = !1, t.el.classList.remove("panning");
              var e = t.xPos - t.startingXPos,
                  i = t.el.offsetWidth * t.options.activationPercent;
              Math.abs(e) > i || 1 < t.velocityX ? (t.wasSwiped = !0, t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s", t.el.style.transform = "", t.el.style.opacity = ""), s._draggedToast = null;
            }
          }
        }, {
          key: "_xPos",
          value: function value(t) {
            return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX;
          }
        }, {
          key: "dismissAll",
          value: function value() {
            for (var t in s._toasts) {
              s._toasts[t].dismiss();
            }
          }
        }, {
          key: "defaults",
          get: function get() {
            return t;
          }
        }]), s;
      }();

      e._toasts = [], e._container = null, e._draggedToast = null, M.Toast = e, M.toast = function (t) {
        return new e(t);
      };
    }(cash, M.anime), function (s, o) {
      "use strict";

      var e = {
        edge: "left",
        draggable: !0,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Sidenav = i).id = i.$el.attr("id"), i.options = s.extend({}, n.defaults, e), i.isOpen = !1, i.isFixed = i.el.classList.contains("sidenav-fixed"), i.isDragged = !1, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), n._sidenavs.push(i), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";

            var t = n._sidenavs.indexOf(this);

            0 <= t && n._sidenavs.splice(t, 1);
          }
        }, {
          key: "_createOverlay",
          value: function value() {
            var t = document.createElement("div");
            this._closeBound = this.close.bind(this), t.classList.add("sidenav-overlay"), t.addEventListener("click", this._closeBound), document.body.appendChild(t), this._overlay = t;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound);
          }
        }, {
          key: "_handleTriggerClick",
          value: function value(t) {
            var e = s(t.target).closest(".sidenav-trigger");

            if (t.target && e.length) {
              var i = M.getIdFromTrigger(e[0]),
                  n = document.getElementById(i).M_Sidenav;
              n && n.open(e), t.preventDefault();
            }
          }
        }, {
          key: "_startDrag",
          value: function value(t) {
            var e = t.targetTouches[0].clientX;
            this.isDragged = !0, this._startingXpos = e, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, o.remove(this.el), o.remove(this._overlay);
          }
        }, {
          key: "_dragMoveUpdate",
          value: function value(t) {
            var e = t.targetTouches[0].clientX,
                i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
            this.deltaX = Math.abs(this._xPos - e), this._xPos = e, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== i && (this._verticallyScrolling = !0);
          }
        }, {
          key: "_handleDragTargetDrag",
          value: function value(t) {
            if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
              this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
              var e = this._xPos - this._startingXpos,
                  i = 0 < e ? "right" : "left";
              e = Math.min(this._width, Math.abs(e)), this.options.edge === i && (e = 0);
              var n = e,
                  s = "translateX(-100%)";
              "right" === this.options.edge && (s = "translateX(100%)", n = -n), this.percentOpen = Math.min(1, e / this._width), this.el.style.transform = s + " translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen;
            }
          }
        }, {
          key: "_handleDragTargetRelease",
          value: function value() {
            this.isDragged && (.2 < this.percentOpen ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1);
          }
        }, {
          key: "_handleCloseDrag",
          value: function value(t) {
            if (this.isOpen) {
              if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
              this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
              var e = this._xPos - this._startingXpos,
                  i = 0 < e ? "right" : "left";
              e = Math.min(this._width, Math.abs(e)), this.options.edge !== i && (e = 0);
              var n = -e;
              "right" === this.options.edge && (n = -n), this.percentOpen = Math.min(1, 1 - e / this._width), this.el.style.transform = "translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen;
            }
          }
        }, {
          key: "_handleCloseRelease",
          value: function value() {
            this.isOpen && this.isDragged && (.8 < this.percentOpen ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1);
          }
        }, {
          key: "_handleCloseTriggerClick",
          value: function value(t) {
            s(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close();
          }
        }, {
          key: "_handleWindowResize",
          value: function value() {
            this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight;
          }
        }, {
          key: "_setupClasses",
          value: function value() {
            "right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"));
          }
        }, {
          key: "_removeClasses",
          value: function value() {
            this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned");
          }
        }, {
          key: "_setupFixed",
          value: function value() {
            this._isCurrentlyFixed() && this.open();
          }
        }, {
          key: "_isCurrentlyFixed",
          value: function value() {
            return this.isFixed && 992 < window.innerWidth;
          }
        }, {
          key: "_createDragTarget",
          value: function value() {
            var t = document.createElement("div");
            t.classList.add("drag-target"), document.body.appendChild(t), this.dragTarget = t;
          }
        }, {
          key: "_preventBodyScrolling",
          value: function value() {
            document.body.style.overflow = "hidden";
          }
        }, {
          key: "_enableBodyScrolling",
          value: function value() {
            document.body.style.overflow = "";
          }
        }, {
          key: "open",
          value: function value() {
            !0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (o.remove(this.el), o({
              targets: this.el,
              translateX: 0,
              duration: 0,
              easing: "easeOutQuad"
            }), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()));
          }
        }, {
          key: "close",
          value: function value() {
            if (!1 !== this.isOpen) if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
              var t = "left" === this.options.edge ? "-105%" : "105%";
              this.el.style.transform = "translateX(" + t + ")";
            } else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut();
          }
        }, {
          key: "_animateIn",
          value: function value() {
            this._animateSidenavIn(), this._animateOverlayIn();
          }
        }, {
          key: "_animateSidenavIn",
          value: function value() {
            var t = this,
                e = "left" === this.options.edge ? -1 : 1;
            this.isDragged && (e = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({
              targets: this.el,
              translateX: [100 * e + "%", 0],
              duration: this.options.inDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el);
              }
            });
          }
        }, {
          key: "_animateOverlayIn",
          value: function value() {
            var t = 0;
            this.isDragged ? t = this.percentOpen : s(this._overlay).css({
              display: "block"
            }), o.remove(this._overlay), o({
              targets: this._overlay,
              opacity: [t, 1],
              duration: this.options.inDuration,
              easing: "easeOutQuad"
            });
          }
        }, {
          key: "_animateOut",
          value: function value() {
            this._animateSidenavOut(), this._animateOverlayOut();
          }
        }, {
          key: "_animateSidenavOut",
          value: function value() {
            var t = this,
                e = "left" === this.options.edge ? -1 : 1,
                i = 0;
            this.isDragged && (i = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({
              targets: this.el,
              translateX: [100 * i + "%", 105 * e + "%"],
              duration: this.options.outDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
              }
            });
          }
        }, {
          key: "_animateOverlayOut",
          value: function value() {
            var t = this;
            o.remove(this._overlay), o({
              targets: this._overlay,
              opacity: 0,
              duration: this.options.outDuration,
              easing: "easeOutQuad",
              complete: function complete() {
                s(t._overlay).css("display", "none");
              }
            });
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Sidenav;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      t._sidenavs = [], M.Sidenav = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav");
    }(cash, M.anime), function (o, a) {
      "use strict";

      var e = {
        throttle: 100,
        scrollOffset: 200,
        activeClass: "active",
        getActiveElement: function getActiveElement(t) {
          return 'a[href="#' + t + '"]';
        }
      },
          t = function (t) {
        function c(t, e) {
          _classCallCheck(this, c);

          var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t, e));

          return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e), c._elements.push(i), c._count++, c._increment++, i.tickId = -1, i.id = c._increment, i._setupEventHandlers(), i._handleWindowScroll(), i;
        }

        return _inherits(c, Component), _createClass(c, [{
          key: "destroy",
          value: function value() {
            c._elements.splice(c._elements.indexOf(this), 1), c._elementsInView.splice(c._elementsInView.indexOf(this), 1), c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1), c._count--, this._removeEventHandlers(), o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass), this.el.M_ScrollSpy = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            var t = M.throttle(this._handleWindowScroll, 200);
            this._handleThrottledResizeBound = t.bind(this), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), 1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick));
          }
        }, {
          key: "_handleTriggerClick",
          value: function value(t) {
            for (var e = o(t.target), i = c._elements.length - 1; 0 <= i; i--) {
              var n = c._elements[i];

              if (e.is('a[href="#' + n.$el.attr("id") + '"]')) {
                t.preventDefault();
                var s = n.$el.offset().top + 1;
                a({
                  targets: [document.documentElement, document.body],
                  scrollTop: s - n.options.scrollOffset,
                  duration: 400,
                  easing: "easeOutCubic"
                });
                break;
              }
            }
          }
        }, {
          key: "_handleWindowScroll",
          value: function value() {
            c._ticks++;

            for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = c._findElements(t, i, n, e), o = 0; o < s.length; o++) {
              var a = s[o];
              a.tickId < 0 && a._enter(), a.tickId = c._ticks;
            }

            for (var r = 0; r < c._elementsInView.length; r++) {
              var l = c._elementsInView[r],
                  h = l.tickId;
              0 <= h && h !== c._ticks && (l._exit(), l.tickId = -1);
            }

            c._elementsInView = s;
          }
        }, {
          key: "_enter",
          value: function value() {
            (c._visibleElements = c._visibleElements.filter(function (t) {
              return 0 != t.height();
            }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el), o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass);
          }
        }, {
          key: "_exit",
          value: function value() {
            var e = this;
            (c._visibleElements = c._visibleElements.filter(function (t) {
              return 0 != t.height();
            }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), (c._visibleElements = c._visibleElements.filter(function (t) {
              return t.attr("id") != e.$el.attr("id");
            }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass));
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_ScrollSpy;
          }
        }, {
          key: "_findElements",
          value: function value(t, e, i, n) {
            for (var s = [], o = 0; o < c._elements.length; o++) {
              var a = c._elements[o],
                  r = t + a.options.scrollOffset || 200;

              if (0 < a.$el.height()) {
                var l = a.$el.offset().top,
                    h = a.$el.offset().left,
                    d = h + a.$el.width(),
                    u = l + a.$el.height();
                !(e < h || d < n || i < l || u < r) && s.push(a);
              }
            }

            return s;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), c;
      }();

      t._elements = [], t._elementsInView = [], t._visibleElements = [], t._count = 0, t._increment = 0, t._ticks = 0, M.ScrollSpy = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy");
    }(cash, M.anime), function (h) {
      "use strict";

      var e = {
        data: {},
        limit: 1 / 0,
        onAutocomplete: null,
        minLength: 1,
        sortFunction: function sortFunction(t, e, i) {
          return t.indexOf(i) - e.indexOf(i);
        }
      },
          t = function (t) {
        function s(t, e) {
          _classCallCheck(this, s);

          var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));

          return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e), i.isOpen = !1, i.count = 0, i.activeIndex = -1, i.oldVal, i.$inputField = i.$el.closest(".input-field"), i.$active = h(), i._mousedown = !1, i._setupDropdown(), i._setupEventHandlers(), i;
        }

        return _inherits(s, Component), _createClass(s, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleInputBlurBound = this._handleInputBlur.bind(this), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this), this.el.addEventListener("blur", this._handleInputBlurBound), this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("click", this._handleInputClickBound), this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("blur", this._handleInputBlurBound), this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("click", this._handleInputClickBound), this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
          }
        }, {
          key: "_setupDropdown",
          value: function value() {
            var e = this;
            this.container = document.createElement("ul"), this.container.id = "autocomplete-options-" + M.guid(), h(this.container).addClass("autocomplete-content dropdown-content"), this.$inputField.append(this.container), this.el.setAttribute("data-target", this.container.id), this.dropdown = M.Dropdown.init(this.el, {
              autoFocus: !1,
              closeOnClick: !1,
              coverTrigger: !1,
              onItemClick: function onItemClick(t) {
                e.selectOption(h(t));
              }
            }), this.el.removeEventListener("click", this.dropdown._handleClickBound);
          }
        }, {
          key: "_removeDropdown",
          value: function value() {
            this.container.parentNode.removeChild(this.container);
          }
        }, {
          key: "_handleInputBlur",
          value: function value() {
            this._mousedown || (this.close(), this._resetAutocomplete());
          }
        }, {
          key: "_handleInputKeyupAndFocus",
          value: function value(t) {
            "keyup" === t.type && (s._keydown = !1), this.count = 0;
            var e = this.el.value.toLowerCase();
            13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(), this.oldVal = e);
          }
        }, {
          key: "_handleInputKeydown",
          value: function value(t) {
            s._keydown = !0;
            var e = t.keyCode,
                i = void 0,
                n = h(this.container).children("li").length;
            e === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i), t.preventDefault()) : e !== M.keys.ARROW_UP && e !== M.keys.ARROW_DOWN || (t.preventDefault(), e === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--, e === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++, this.$active.removeClass("active"), 0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active")));
          }
        }, {
          key: "_handleInputClick",
          value: function value(t) {
            this.open();
          }
        }, {
          key: "_handleContainerMousedownAndTouchstart",
          value: function value(t) {
            this._mousedown = !0;
          }
        }, {
          key: "_handleContainerMouseupAndTouchend",
          value: function value(t) {
            this._mousedown = !1;
          }
        }, {
          key: "_highlight",
          value: function value(t, e) {
            var i = e.find("img"),
                n = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
                s = n + t.length - 1,
                o = e.text().slice(0, n),
                a = e.text().slice(n, s + 1),
                r = e.text().slice(s + 1);
            e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"), i.length && e.prepend(i);
          }
        }, {
          key: "_resetCurrentElement",
          value: function value() {
            this.activeIndex = -1, this.$active.removeClass("active");
          }
        }, {
          key: "_resetAutocomplete",
          value: function value() {
            h(this.container).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = !1, this._mousedown = !1;
          }
        }, {
          key: "selectOption",
          value: function value(t) {
            var e = t.text().trim();
            this.el.value = e, this.$el.trigger("change"), this._resetAutocomplete(), this.close(), "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e);
          }
        }, {
          key: "_renderDropdown",
          value: function value(t, i) {
            var n = this;

            this._resetAutocomplete();

            var e = [];

            for (var s in t) {
              if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
                if (this.count >= this.options.limit) break;
                var o = {
                  data: t[s],
                  key: s
                };
                e.push(o), this.count++;
              }
            }

            if (this.options.sortFunction) {
              e.sort(function (t, e) {
                return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase());
              });
            }

            for (var a = 0; a < e.length; a++) {
              var r = e[a],
                  l = h("<li></li>");
              r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"), h(this.container).append(l), this._highlight(i, l);
            }
          }
        }, {
          key: "open",
          value: function value() {
            var t = this.el.value.toLowerCase();
            this._resetAutocomplete(), t.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown(this.options.data, t)), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open();
          }
        }, {
          key: "close",
          value: function value() {
            this.dropdown.close();
          }
        }, {
          key: "updateData",
          value: function value(t) {
            var e = this.el.value.toLowerCase();
            this.options.data = t, this.isOpen && this._renderDropdown(t, e);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Autocomplete;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), s;
      }();

      t._keydown = !1, M.Autocomplete = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete");
    }(cash), function (d) {
      M.updateTextFields = function () {
        d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function (t, e) {
          var i = d(this);
          0 < t.value.length || d(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active");
        });
      }, M.validate_field = function (t) {
        var e = null !== t.attr("data-length"),
            i = parseInt(t.attr("data-length")),
            n = t[0].value.length;
        0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"));
      }, M.textareaAutoResize = function (t) {
        if (t instanceof Element && (t = d(t)), t.length) {
          var e = d(".hiddendiv").first();
          e.length || (e = d('<div class="hiddendiv common"></div>'), d("body").append(e));
          var i = t.css("font-family"),
              n = t.css("font-size"),
              s = t.css("line-height"),
              o = t.css("padding-top"),
              a = t.css("padding-right"),
              r = t.css("padding-bottom"),
              l = t.css("padding-left");
          n && e.css("font-size", n), i && e.css("font-family", i), s && e.css("line-height", s), o && e.css("padding-top", o), a && e.css("padding-right", a), r && e.css("padding-bottom", r), l && e.css("padding-left", l), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(t[0].value + "\n");
          var h = e.html().replace(/\n/g, "<br>");
          e.html(h), 0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"), t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"), t.data("previous-length", t[0].value.length);
        } else console.error("No textarea element found");
      }, d(document).ready(function () {
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        d(document).on("change", n, function () {
          0 === this.value.length && null === d(this).attr("placeholder") || d(this).siblings("label").addClass("active"), M.validate_field(d(this));
        }), d(document).ready(function () {
          M.updateTextFields();
        }), d(document).on("reset", function (t) {
          var e = d(t.target);
          e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"), e.find(n).each(function (t) {
            this.value.length && d(this).siblings("label").removeClass("active");
          }), setTimeout(function () {
            e.find("select").each(function () {
              this.M_FormSelect && d(this).trigger("change");
            });
          }, 0));
        }), document.addEventListener("focus", function (t) {
          d(t.target).is(n) && d(t.target).siblings("label, .prefix").addClass("active");
        }, !0), document.addEventListener("blur", function (t) {
          var e = d(t.target);

          if (e.is(n)) {
            var i = ".prefix";
            0 === e[0].value.length && !0 !== e[0].validity.badInput && null === e.attr("placeholder") && (i += ", label"), e.siblings(i).removeClass("active"), M.validate_field(e);
          }
        }, !0);
        d(document).on("keyup", "input[type=radio], input[type=checkbox]", function (t) {
          if (t.which === M.keys.TAB) return d(this).addClass("tabbed"), void d(this).one("blur", function (t) {
            d(this).removeClass("tabbed");
          });
        });
        var t = ".materialize-textarea";
        d(t).each(function () {
          var t = d(this);
          t.data("original-height", t.height()), t.data("previous-length", this.value.length), M.textareaAutoResize(t);
        }), d(document).on("keyup", t, function () {
          M.textareaAutoResize(d(this));
        }), d(document).on("keydown", t, function () {
          M.textareaAutoResize(d(this));
        }), d(document).on("change", '.file-field input[type="file"]', function () {
          for (var t = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n = 0; n < e.length; n++) {
            i.push(e[n].name);
          }

          t[0].value = i.join(", "), t.trigger("change");
        });
      });
    }(cash), function (s, o) {
      "use strict";

      var e = {
        indicators: !0,
        height: 400,
        duration: 500,
        interval: 6e3
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e), i.$slider = i.$el.find(".slides"), i.$slides = i.$slider.children("li"), i.activeIndex = i.$slides.filter(function (t) {
            return s(t).hasClass("active");
          }).first().index(), -1 != i.activeIndex && (i.$active = i.$slides.eq(i.activeIndex)), i._setSliderHeight(), i.$slides.find(".caption").each(function (t) {
            i._animateCaptionIn(t, 0);
          }), i.$slides.find("img").each(function (t) {
            var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            s(t).attr("src") !== e && (s(t).css("background-image", 'url("' + s(t).attr("src") + '")'), s(t).attr("src", e));
          }), i._setupIndicators(), i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"), o({
            targets: i.$slides.first()[0],
            opacity: 1,
            duration: i.options.duration,
            easing: "easeOutQuad"
          }), i.activeIndex = 0, i.$active = i.$slides.eq(i.activeIndex), i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")), i.$active.find("img").each(function (t) {
            o({
              targets: i.$active.find(".caption")[0],
              opacity: 1,
              translateX: 0,
              translateY: 0,
              duration: i.options.duration,
              easing: "easeOutQuad"
            });
          }), i._setupEventHandlers(), i.start(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            var e = this;
            this._handleIntervalBound = this._handleInterval.bind(this), this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.options.indicators && this.$indicators.each(function (t) {
              t.addEventListener("click", e._handleIndicatorClickBound);
            });
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            var e = this;
            this.options.indicators && this.$indicators.each(function (t) {
              t.removeEventListener("click", e._handleIndicatorClickBound);
            });
          }
        }, {
          key: "_handleIndicatorClick",
          value: function value(t) {
            var e = s(t.target).index();
            this.set(e);
          }
        }, {
          key: "_handleInterval",
          value: function value() {
            var t = this.$slider.find(".active").index();
            this.$slides.length === t + 1 ? t = 0 : t += 1, this.set(t);
          }
        }, {
          key: "_animateCaptionIn",
          value: function value(t, e) {
            var i = {
              targets: t,
              opacity: 0,
              duration: e,
              easing: "easeOutQuad"
            };
            s(t).hasClass("center-align") ? i.translateY = -100 : s(t).hasClass("right-align") ? i.translateX = 100 : s(t).hasClass("left-align") && (i.translateX = -100), o(i);
          }
        }, {
          key: "_setSliderHeight",
          value: function value() {
            this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px"));
          }
        }, {
          key: "_setupIndicators",
          value: function value() {
            var n = this;
            this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'), this.$slides.each(function (t, e) {
              var i = s('<li class="indicator-item"></li>');
              n.$indicators.append(i[0]);
            }), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"));
          }
        }, {
          key: "_removeIndicators",
          value: function value() {
            this.$el.find("ul.indicators").remove();
          }
        }, {
          key: "set",
          value: function value(t) {
            var e = this;

            if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.activeIndex != t) {
              this.$active = this.$slides.eq(this.activeIndex);
              var i = this.$active.find(".caption");
              this.$active.removeClass("active"), o({
                targets: this.$active[0],
                opacity: 0,
                duration: this.options.duration,
                easing: "easeOutQuad",
                complete: function complete() {
                  e.$slides.not(".active").each(function (t) {
                    o({
                      targets: t,
                      opacity: 0,
                      translateX: 0,
                      translateY: 0,
                      duration: 0,
                      easing: "easeOutQuad"
                    });
                  });
                }
              }), this._animateCaptionIn(i[0], this.options.duration), this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(t).addClass("active")), o({
                targets: this.$slides.eq(t)[0],
                opacity: 1,
                duration: this.options.duration,
                easing: "easeOutQuad"
              }), o({
                targets: this.$slides.eq(t).find(".caption")[0],
                opacity: 1,
                translateX: 0,
                translateY: 0,
                duration: this.options.duration,
                delay: this.options.duration,
                easing: "easeOutQuad"
              }), this.$slides.eq(t).addClass("active"), this.activeIndex = t, this.start();
            }
          }
        }, {
          key: "pause",
          value: function value() {
            clearInterval(this.interval);
          }
        }, {
          key: "start",
          value: function value() {
            clearInterval(this.interval), this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
          }
        }, {
          key: "next",
          value: function value() {
            var t = this.activeIndex + 1;
            t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t);
          }
        }, {
          key: "prev",
          value: function value() {
            var t = this.activeIndex - 1;
            t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Slider;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.Slider = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider");
    }(cash, M.anime), function (n, s) {
      n(document).on("click", ".card", function (t) {
        if (n(this).children(".card-reveal").length) {
          var i = n(t.target).closest(".card");
          void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
          var e = n(this).find(".card-reveal");
          n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({
            targets: e[0],
            translateY: 0,
            duration: 225,
            easing: "easeInOutQuad",
            complete: function complete(t) {
              var e = t.animatables[0].target;
              n(e).css({
                display: "none"
              }), i.css("overflow", i.data("initialOverflow"));
            }
          }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"), e.css({
            display: "block"
          }), s({
            targets: e[0],
            translateY: "-100%",
            duration: 300,
            easing: "easeInOutQuad"
          }));
        }
      });
    }(cash, M.anime), function (h) {
      "use strict";

      var e = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {},
        limit: 1 / 0,
        onChipAdd: null,
        onChipSelect: null,
        onChipDelete: null
      },
          t = function (t) {
        function l(t, e) {
          _classCallCheck(this, l);

          var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t, e));

          return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e), i.$el.addClass("chips input-field"), i.chipsData = [], i.$chips = h(), i._setupInput(), i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length, i.$input.attr("id") || i.$input.attr("id", M.guid()), i.options.data.length && (i.chipsData = i.options.data, i._renderChips(i.chipsData)), i.hasAutocomplete && i._setupAutocomplete(), i._setPlaceholder(), i._setupLabel(), i._setupEventHandlers(), i;
        }

        return _inherits(l, Component), _createClass(l, [{
          key: "getData",
          value: function value() {
            return this.chipsData;
          }
        }, {
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleChipClickBound = this._handleChipClick.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputFocusBound = this._handleInputFocus.bind(this), this._handleInputBlurBound = this._handleInputBlur.bind(this), this.el.addEventListener("click", this._handleChipClickBound), document.addEventListener("keydown", l._handleChipsKeydown), document.addEventListener("keyup", l._handleChipsKeyup), this.el.addEventListener("blur", l._handleChipsBlur, !0), this.$input[0].addEventListener("focus", this._handleInputFocusBound), this.$input[0].addEventListener("blur", this._handleInputBlurBound), this.$input[0].addEventListener("keydown", this._handleInputKeydownBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("click", this._handleChipClickBound), document.removeEventListener("keydown", l._handleChipsKeydown), document.removeEventListener("keyup", l._handleChipsKeyup), this.el.removeEventListener("blur", l._handleChipsBlur, !0), this.$input[0].removeEventListener("focus", this._handleInputFocusBound), this.$input[0].removeEventListener("blur", this._handleInputBlurBound), this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound);
          }
        }, {
          key: "_handleChipClick",
          value: function value(t) {
            var e = h(t.target).closest(".chip"),
                i = h(t.target).is(".close");

            if (e.length) {
              var n = e.index();
              i ? (this.deleteChip(n), this.$input[0].focus()) : this.selectChip(n);
            } else this.$input[0].focus();
          }
        }, {
          key: "_handleInputFocus",
          value: function value() {
            this.$el.addClass("focus");
          }
        }, {
          key: "_handleInputBlur",
          value: function value() {
            this.$el.removeClass("focus");
          }
        }, {
          key: "_handleInputKeydown",
          value: function value(t) {
            if (l._keydown = !0, 13 === t.keyCode) {
              if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
              t.preventDefault(), this.addChip({
                tag: this.$input[0].value
              }), this.$input[0].value = "";
            } else 8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(), this.selectChip(this.chipsData.length - 1));
          }
        }, {
          key: "_renderChip",
          value: function value(t) {
            if (t.tag) {
              var e = document.createElement("div"),
                  i = document.createElement("i");

              if (e.classList.add("chip"), e.textContent = t.tag, e.setAttribute("tabindex", 0), h(i).addClass("material-icons close"), i.textContent = "close", t.image) {
                var n = document.createElement("img");
                n.setAttribute("src", t.image), e.insertBefore(n, e.firstChild);
              }

              return e.appendChild(i), e;
            }
          }
        }, {
          key: "_renderChips",
          value: function value() {
            this.$chips.remove();

            for (var t = 0; t < this.chipsData.length; t++) {
              var e = this._renderChip(this.chipsData[t]);

              this.$el.append(e), this.$chips.add(e);
            }

            this.$el.append(this.$input[0]);
          }
        }, {
          key: "_setupAutocomplete",
          value: function value() {
            var e = this;
            this.options.autocompleteOptions.onAutocomplete = function (t) {
              e.addChip({
                tag: t
              }), e.$input[0].value = "", e.$input[0].focus();
            }, this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
          }
        }, {
          key: "_setupInput",
          value: function value() {
            this.$input = this.$el.find("input"), this.$input.length || (this.$input = h("<input></input>"), this.$el.append(this.$input)), this.$input.addClass("input");
          }
        }, {
          key: "_setupLabel",
          value: function value() {
            this.$label = this.$el.find("label"), this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"));
          }
        }, {
          key: "_setPlaceholder",
          value: function value() {
            void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder);
          }
        }, {
          key: "_isValid",
          value: function value(t) {
            if (t.hasOwnProperty("tag") && "" !== t.tag) {
              for (var e = !1, i = 0; i < this.chipsData.length; i++) {
                if (this.chipsData[i].tag === t.tag) {
                  e = !0;
                  break;
                }
              }

              return !e;
            }

            return !1;
          }
        }, {
          key: "addChip",
          value: function value(t) {
            if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
              var e = this._renderChip(t);

              this.$chips.add(e), this.chipsData.push(t), h(this.$input).before(e), this._setPlaceholder(), "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e);
            }
          }
        }, {
          key: "deleteChip",
          value: function value(t) {
            var e = this.$chips.eq(t);
            this.$chips.eq(t).remove(), this.$chips = this.$chips.filter(function (t) {
              return 0 <= h(t).index();
            }), this.chipsData.splice(t, 1), this._setPlaceholder(), "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0]);
          }
        }, {
          key: "selectChip",
          value: function value(t) {
            var e = this.$chips.eq(t);
            (this._selectedChip = e)[0].focus(), "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0]);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Chips;
          }
        }, {
          key: "_handleChipsKeydown",
          value: function value(t) {
            l._keydown = !0;
            var e = h(t.target).closest(".chips"),
                i = t.target && e.length;

            if (!h(t.target).is("input, textarea") && i) {
              var n = e[0].M_Chips;

              if (8 === t.keyCode || 46 === t.keyCode) {
                t.preventDefault();
                var s = n.chipsData.length;

                if (n._selectedChip) {
                  var o = n._selectedChip.index();

                  n.deleteChip(o), n._selectedChip = null, s = Math.max(o - 1, 0);
                }

                n.chipsData.length && n.selectChip(s);
              } else if (37 === t.keyCode) {
                if (n._selectedChip) {
                  var a = n._selectedChip.index() - 1;
                  if (a < 0) return;
                  n.selectChip(a);
                }
              } else if (39 === t.keyCode && n._selectedChip) {
                var r = n._selectedChip.index() + 1;
                r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r);
              }
            }
          }
        }, {
          key: "_handleChipsKeyup",
          value: function value(t) {
            l._keydown = !1;
          }
        }, {
          key: "_handleChipsBlur",
          value: function value(t) {
            l._keydown || (h(t.target).closest(".chips")[0].M_Chips._selectedChip = null);
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), l;
      }();

      t._keydown = !1, M.Chips = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"), h(document).ready(function () {
        h(document.body).on("click", ".chip .close", function () {
          var t = h(this).closest(".chips");
          t.length && t[0].M_Chips || h(this).closest(".chip").remove();
        });
      });
    }(cash), function (s) {
      "use strict";

      var e = {
        top: 0,
        bottom: 1 / 0,
        offset: 0,
        onPositionChange: null
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e), i.originalOffset = i.el.offsetTop, n._pushpins.push(i), i._setupEventHandlers(), i._updatePosition(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();

            var t = n._pushpins.indexOf(this);

            n._pushpins.splice(t, 1);
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            document.addEventListener("scroll", n._updateElements);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            document.removeEventListener("scroll", n._updateElements);
          }
        }, {
          key: "_updatePosition",
          value: function value() {
            var t = M.getDocumentScrollTop() + this.options.offset;
            this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")), t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")), t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"));
          }
        }, {
          key: "_removePinClasses",
          value: function value() {
            this.el.classList.remove("pin-top"), this.el.classList.remove("pinned"), this.el.classList.remove("pin-bottom");
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Pushpin;
          }
        }, {
          key: "_updateElements",
          value: function value() {
            for (var t in n._pushpins) {
              n._pushpins[t]._updatePosition();
            }
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      t._pushpins = [], M.Pushpin = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin");
    }(cash), function (r, s) {
      "use strict";

      var e = {
        direction: "top",
        hoverEnabled: !0,
        toolbarEnabled: !1
      };
      r.fn.reverse = [].reverse;

      var t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e), i.isOpen = !1, i.$anchor = i.$el.children("a").first(), i.$menu = i.$el.children("ul").first(), i.$floatingBtns = i.$el.find("ul .btn-floating"), i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass("direction-" + i.options.direction), "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleFABClickBound = this._handleFABClick.bind(this), this._handleOpenBound = this.open.bind(this), this._handleCloseBound = this.close.bind(this), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound);
          }
        }, {
          key: "_handleFABClick",
          value: function value() {
            this.isOpen ? this.close() : this.open();
          }
        }, {
          key: "_handleDocumentClick",
          value: function value(t) {
            r(t.target).closest(this.$menu).length || this.close();
          }
        }, {
          key: "open",
          value: function value() {
            this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0);
          }
        }, {
          key: "close",
          value: function value() {
            this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1);
          }
        }, {
          key: "_animateInFAB",
          value: function value() {
            var e = this;
            this.$el.addClass("active");
            var i = 0;
            this.$floatingBtnsReverse.each(function (t) {
              s({
                targets: t,
                opacity: 1,
                scale: [.4, 1],
                translateY: [e.offsetY, 0],
                translateX: [e.offsetX, 0],
                duration: 275,
                delay: i,
                easing: "easeInOutQuad"
              }), i += 40;
            });
          }
        }, {
          key: "_animateOutFAB",
          value: function value() {
            var e = this;
            this.$floatingBtnsReverse.each(function (t) {
              s.remove(t), s({
                targets: t,
                opacity: 0,
                scale: .4,
                translateY: e.offsetY,
                translateX: e.offsetX,
                duration: 175,
                easing: "easeOutQuad",
                complete: function complete() {
                  e.$el.removeClass("active");
                }
              });
            });
          }
        }, {
          key: "_animateInToolbar",
          value: function value() {
            var t,
                e = this,
                i = window.innerWidth,
                n = window.innerHeight,
                s = this.el.getBoundingClientRect(),
                o = r('<div class="fab-backdrop"></div>'),
                a = this.$anchor.css("background-color");
            this.$anchor.append(o), this.offsetX = s.left - i / 2 + s.width / 2, this.offsetY = n - s.bottom, t = i / o[0].clientWidth, this.btnBottom = s.bottom, this.btnLeft = s.left, this.btnWidth = s.width, this.$el.addClass("active"), this.$el.css({
              "text-align": "center",
              width: "100%",
              bottom: 0,
              left: 0,
              transform: "translateX(" + this.offsetX + "px)",
              transition: "none"
            }), this.$anchor.css({
              transform: "translateY(" + -this.offsetY + "px)",
              transition: "none"
            }), o.css({
              "background-color": a
            }), setTimeout(function () {
              e.$el.css({
                transform: "",
                transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
              }), e.$anchor.css({
                overflow: "visible",
                transform: "",
                transition: "transform .2s"
              }), setTimeout(function () {
                e.$el.css({
                  overflow: "hidden",
                  "background-color": a
                }), o.css({
                  transform: "scale(" + t + ")",
                  transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                }), e.$menu.children("li").children("a").css({
                  opacity: 1
                }), e._handleDocumentClickBound = e._handleDocumentClick.bind(e), window.addEventListener("scroll", e._handleCloseBound, !0), document.body.addEventListener("click", e._handleDocumentClickBound, !0);
              }, 100);
            }, 0);
          }
        }, {
          key: "_animateOutToolbar",
          value: function value() {
            var t = this,
                e = window.innerWidth,
                i = window.innerHeight,
                n = this.$el.find(".fab-backdrop"),
                s = this.$anchor.css("background-color");
            this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2, this.offsetY = i - this.btnBottom, this.$el.removeClass("active"), this.$el.css({
              "background-color": "transparent",
              transition: "none"
            }), this.$anchor.css({
              transition: "none"
            }), n.css({
              transform: "scale(0)",
              "background-color": s
            }), this.$menu.children("li").children("a").css({
              opacity: ""
            }), setTimeout(function () {
              n.remove(), t.$el.css({
                "text-align": "",
                width: "",
                bottom: "",
                left: "",
                overflow: "",
                "background-color": "",
                transform: "translate3d(" + -t.offsetX + "px,0,0)"
              }), t.$anchor.css({
                overflow: "",
                transform: "translate3d(0," + t.offsetY + "px,0)"
              }), setTimeout(function () {
                t.$el.css({
                  transform: "translate3d(0,0,0)",
                  transition: "transform .2s"
                }), t.$anchor.css({
                  transform: "translate3d(0,0,0)",
                  transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                });
              }, 20);
            }, 200);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_FloatingActionButton;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.FloatingActionButton = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton");
    }(cash, M.anime), function (g) {
      "use strict";

      var e = {
        autoClose: !1,
        format: "mmm dd, yyyy",
        parse: null,
        defaultDate: null,
        setDefaultDate: !1,
        disableWeekends: !1,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        container: null,
        showClearBtn: !1,
        i18n: {
          cancel: "Cancel",
          clear: "Clear",
          done: "Ok",
          previousMonth: "‹",
          nextMonth: "›",
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
      },
          t = function (t) {
        function B(t, e) {
          _classCallCheck(this, B);

          var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t, e));

          (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e), e && e.hasOwnProperty("i18n") && "object" == typeof e.i18n && (i.options.i18n = g.extend({}, B.defaults.i18n, e.i18n)), i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0), i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0), i.id = M.guid(), i._setupVariables(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupEventHandlers(), i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
          var n = i.options.defaultDate;
          return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, !0), i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date()), i.isOpen = !1, i;
        }

        return _inherits(B, Component), _createClass(B, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.modal.destroy(), g(this.modalEl).remove(), this.destroySelects(), this.el.M_Datepicker = void 0;
          }
        }, {
          key: "destroySelects",
          value: function value() {
            var t = this.calendarEl.querySelector(".orig-select-year");
            t && M.FormSelect.getInstance(t).destroy();
            var e = this.calendarEl.querySelector(".orig-select-month");
            e && M.FormSelect.getInstance(e).destroy();
          }
        }, {
          key: "_insertHTMLIntoDOM",
          value: function value() {
            this.options.showClearBtn && (g(this.clearBtn).css({
              visibility: ""
            }), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el);
          }
        }, {
          key: "_setupModal",
          value: function value() {
            var t = this;
            this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init(this.modalEl, {
              onCloseEnd: function onCloseEnd() {
                t.isOpen = !1;
              }
            });
          }
        }, {
          key: "toString",
          value: function value(t) {
            var e = this;
            return t = t || this.options.format, B._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function (t) {
              return e.formats[t] ? e.formats[t]() : t;
            }).join("") : "";
          }
        }, {
          key: "setDate",
          value: function value(t, e) {
            if (!t) return this.date = null, this._renderDateDisplay(), this.draw();

            if ("string" == typeof t && (t = new Date(Date.parse(t))), B._isDate(t)) {
              var i = this.options.minDate,
                  n = this.options.maxDate;
              B._isDate(i) && t < i ? t = i : B._isDate(n) && n < t && (t = n), this.date = new Date(t.getTime()), this._renderDateDisplay(), B._setToStartOfDay(this.date), this.gotoDate(this.date), e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date);
            }
          }
        }, {
          key: "setInputValue",
          value: function value() {
            this.el.value = this.toString(), this.$el.trigger("change", {
              firedBy: this
            });
          }
        }, {
          key: "_renderDateDisplay",
          value: function value() {
            var t = B._isDate(this.date) ? this.date : new Date(),
                e = this.options.i18n,
                i = e.weekdaysShort[t.getDay()],
                n = e.monthsShort[t.getMonth()],
                s = t.getDate();
            this.yearTextEl.innerHTML = t.getFullYear(), this.dateTextEl.innerHTML = i + ", " + n + " " + s;
          }
        }, {
          key: "gotoDate",
          value: function value(t) {
            var e = !0;

            if (B._isDate(t)) {
              if (this.calendars) {
                var i = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                    s = t.getTime();
                n.setMonth(n.getMonth() + 1), n.setDate(n.getDate() - 1), e = s < i.getTime() || n.getTime() < s;
              }

              e && (this.calendars = [{
                month: t.getMonth(),
                year: t.getFullYear()
              }]), this.adjustCalendars();
            }
          }
        }, {
          key: "adjustCalendars",
          value: function value() {
            this.calendars[0] = this.adjustCalendar(this.calendars[0]), this.draw();
          }
        }, {
          key: "adjustCalendar",
          value: function value(t) {
            return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), 11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t;
          }
        }, {
          key: "nextMonth",
          value: function value() {
            this.calendars[0].month++, this.adjustCalendars();
          }
        }, {
          key: "prevMonth",
          value: function value() {
            this.calendars[0].month--, this.adjustCalendars();
          }
        }, {
          key: "render",
          value: function value(t, e, i) {
            var n = this.options,
                s = new Date(),
                o = B._getDaysInMonth(t, e),
                a = new Date(t, e, 1).getDay(),
                r = [],
                l = [];

            B._setToStartOfDay(s), 0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);

            for (var h = 0 === e ? 11 : e - 1, d = 11 === e ? 0 : e + 1, u = 0 === e ? t - 1 : t, c = 11 === e ? t + 1 : t, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f;) {
              f -= 7;
            }

            v += 7 - f;

            for (var m = !1, g = 0, _ = 0; g < v; g++) {
              var y = new Date(t, e, g - a + 1),
                  k = !!B._isDate(this.date) && B._compareDates(y, this.date),
                  b = B._compareDates(y, s),
                  w = -1 !== n.events.indexOf(y.toDateString()),
                  C = g < a || o + a <= g,
                  E = g - a + 1,
                  M = e,
                  O = t,
                  x = n.startRange && B._compareDates(n.startRange, y),
                  L = n.endRange && B._compareDates(n.endRange, y),
                  T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;

              C && (g < a ? (E = p + E, M = h, O = u) : (E -= o, M = d, O = c));
              var $ = {
                day: E,
                month: M,
                year: O,
                hasEvent: w,
                isSelected: k,
                isToday: b,
                isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y),
                isEmpty: C,
                isStartRange: x,
                isEndRange: L,
                isInRange: T,
                showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths
              };
              l.push(this.renderDay($)), 7 == ++_ && (r.push(this.renderRow(l, n.isRTL, m)), _ = 0, m = !(l = []));
            }

            return this.renderTable(n, r, i);
          }
        }, {
          key: "renderDay",
          value: function value(t) {
            var e = [],
                i = "false";

            if (t.isEmpty) {
              if (!t.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
              e.push("is-outside-current-month"), e.push("is-selection-disabled");
            }

            return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && (e.push("is-selected"), i = "true"), t.hasEvent && e.push("has-event"), t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>";
          }
        }, {
          key: "renderRow",
          value: function value(t, e, i) {
            return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>";
          }
        }, {
          key: "renderTable",
          value: function value(t, e, i) {
            return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>";
          }
        }, {
          key: "renderHead",
          value: function value(t) {
            var e = void 0,
                i = [];

            for (e = 0; e < 7; e++) {
              i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
            }

            return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>";
          }
        }, {
          key: "renderBody",
          value: function value(t) {
            return "<tbody>" + t.join("") + "</tbody>";
          }
        }, {
          key: "renderTitle",
          value: function value(t, e, i, n, s, o) {
            var a,
                r,
                l = void 0,
                h = void 0,
                d = void 0,
                u = this.options,
                c = i === u.minYear,
                p = i === u.maxYear,
                v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">',
                f = !0,
                m = !0;

            for (d = [], l = 0; l < 12; l++) {
              d.push('<option value="' + (i === s ? l - e : 12 + l - e) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
            }

            for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>", g.isArray(u.yearRange) ? (l = u.yearRange[0], h = u.yearRange[1] + 1) : (l = i - u.yearRange, h = 1 + i + u.yearRange), d = []; l < h && l <= u.maxYear; l++) {
              l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
            }

            r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
            v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>', v += '<div class="selects-container">', u.showMonthAfterYear ? v += r + a : v += a + r, v += "</div>", c && (0 === n || u.minMonth >= n) && (f = !1), p && (11 === n || u.maxMonth <= n) && (m = !1);
            return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>";
          }
        }, {
          key: "draw",
          value: function value(t) {
            if (this.isOpen || t) {
              var e,
                  i = this.options,
                  n = i.minYear,
                  s = i.maxYear,
                  o = i.minMonth,
                  a = i.maxMonth,
                  r = "";
              this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= s && (this._y = s, !isNaN(a) && this._m > a && (this._m = a)), e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);

              for (var l = 0; l < 1; l++) {
                this._renderDateDisplay(), r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
              }

              this.destroySelects(), this.calendarEl.innerHTML = r;
              var h = this.calendarEl.querySelector(".orig-select-year"),
                  d = this.calendarEl.querySelector(".orig-select-month");
              M.FormSelect.init(h, {
                classes: "select-year",
                dropdownOptions: {
                  container: document.body,
                  constrainWidth: !1
                }
              }), M.FormSelect.init(d, {
                classes: "select-month",
                dropdownOptions: {
                  container: document.body,
                  constrainWidth: !1
                }
              }), h.addEventListener("change", this._handleYearChange.bind(this)), d.addEventListener("change", this._handleMonthChange.bind(this)), "function" == typeof this.options.onDraw && this.options.onDraw(this);
            }
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleInputChangeBound = this._handleInputChange.bind(this), this._handleCalendarClickBound = this._handleCalendarClick.bind(this), this._finishSelectionBound = this._finishSelection.bind(this), this._handleMonthChange = this._handleMonthChange.bind(this), this._closeBound = this.close.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("change", this._handleInputChangeBound), this.calendarEl.addEventListener("click", this._handleCalendarClickBound), this.doneBtn.addEventListener("click", this._finishSelectionBound), this.cancelBtn.addEventListener("click", this._closeBound), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound));
          }
        }, {
          key: "_setupVariables",
          value: function value() {
            var e = this;
            this.$modalEl = g(B._template), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"), this.yearTextEl = this.modalEl.querySelector(".year-text"), this.dateTextEl = this.modalEl.querySelector(".date-text"), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")), this.doneBtn = this.modalEl.querySelector(".datepicker-done"), this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"), this.formats = {
              d: function d() {
                return e.date.getDate();
              },
              dd: function dd() {
                var t = e.date.getDate();
                return (t < 10 ? "0" : "") + t;
              },
              ddd: function ddd() {
                return e.options.i18n.weekdaysShort[e.date.getDay()];
              },
              dddd: function dddd() {
                return e.options.i18n.weekdays[e.date.getDay()];
              },
              m: function m() {
                return e.date.getMonth() + 1;
              },
              mm: function mm() {
                var t = e.date.getMonth() + 1;
                return (t < 10 ? "0" : "") + t;
              },
              mmm: function mmm() {
                return e.options.i18n.monthsShort[e.date.getMonth()];
              },
              mmmm: function mmmm() {
                return e.options.i18n.months[e.date.getMonth()];
              },
              yy: function yy() {
                return ("" + e.date.getFullYear()).slice(2);
              },
              yyyy: function yyyy() {
                return e.date.getFullYear();
              }
            };
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("change", this._handleInputChangeBound), this.calendarEl.removeEventListener("click", this._handleCalendarClickBound);
          }
        }, {
          key: "_handleInputClick",
          value: function value() {
            this.open();
          }
        }, {
          key: "_handleInputKeydown",
          value: function value(t) {
            t.which === M.keys.ENTER && (t.preventDefault(), this.open());
          }
        }, {
          key: "_handleCalendarClick",
          value: function value(t) {
            if (this.isOpen) {
              var e = g(t.target);
              e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"), t.target.getAttribute("data-month"), t.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()));
            }
          }
        }, {
          key: "_handleClearClick",
          value: function value() {
            this.date = null, this.setInputValue(), this.close();
          }
        }, {
          key: "_handleMonthChange",
          value: function value(t) {
            this.gotoMonth(t.target.value);
          }
        }, {
          key: "_handleYearChange",
          value: function value(t) {
            this.gotoYear(t.target.value);
          }
        }, {
          key: "gotoMonth",
          value: function value(t) {
            isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars());
          }
        }, {
          key: "gotoYear",
          value: function value(t) {
            isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars());
          }
        }, {
          key: "_handleInputChange",
          value: function value(t) {
            var e = void 0;
            t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), B._isDate(e) && this.setDate(e));
          }
        }, {
          key: "renderDayName",
          value: function value(t, e, i) {
            for (e += t.firstDay; 7 <= e;) {
              e -= 7;
            }

            return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e];
          }
        }, {
          key: "_finishSelection",
          value: function value() {
            this.setInputValue(), this.close();
          }
        }, {
          key: "open",
          value: function value() {
            if (!this.isOpen) return this.isOpen = !0, "function" == typeof this.options.onOpen && this.options.onOpen.call(this), this.draw(), this.modal.open(), this;
          }
        }, {
          key: "close",
          value: function value() {
            if (this.isOpen) return this.isOpen = !1, "function" == typeof this.options.onClose && this.options.onClose.call(this), this.modal.close(), this;
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t, e);
          }
        }, {
          key: "_isDate",
          value: function value(t) {
            return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime());
          }
        }, {
          key: "_isWeekend",
          value: function value(t) {
            var e = t.getDay();
            return 0 === e || 6 === e;
          }
        }, {
          key: "_setToStartOfDay",
          value: function value(t) {
            B._isDate(t) && t.setHours(0, 0, 0, 0);
          }
        }, {
          key: "_getDaysInMonth",
          value: function value(t, e) {
            return [31, B._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
          }
        }, {
          key: "_isLeapYear",
          value: function value(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
          }
        }, {
          key: "_compareDates",
          value: function value(t, e) {
            return t.getTime() === e.getTime();
          }
        }, {
          key: "_setToStartOfDay",
          value: function value(t) {
            B._isDate(t) && t.setHours(0, 0, 0, 0);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Datepicker;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), B;
      }();

      t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""), M.Datepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker");
    }(cash), function (h) {
      "use strict";

      var e = {
        dialRadius: 135,
        outerRadius: 105,
        innerRadius: 70,
        tickRadius: 20,
        duration: 350,
        container: null,
        defaultTime: "now",
        fromNow: 0,
        showClearBtn: !1,
        i18n: {
          cancel: "Cancel",
          clear: "Clear",
          done: "Ok"
        },
        autoClose: !1,
        twelveHour: !0,
        vibrate: !0,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onSelect: null
      },
          t = function (t) {
        function f(t, e) {
          _classCallCheck(this, f);

          var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t, e));

          return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e), i.id = M.guid(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupVariables(), i._setupEventHandlers(), i._clockSetup(), i._pickerSetup(), i;
        }

        return _inherits(f, Component), _createClass(f, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.modal.destroy(), h(this.modalEl).remove(), this.el.M_Timepicker = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleClockClickStartBound = this._handleClockClickStart.bind(this), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.plate.addEventListener("mousedown", this._handleClockClickStartBound), this.plate.addEventListener("touchstart", this._handleClockClickStartBound), h(this.spanHours).on("click", this.showView.bind(this, "hours")), h(this.spanMinutes).on("click", this.showView.bind(this, "minutes"));
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound);
          }
        }, {
          key: "_handleInputClick",
          value: function value() {
            this.open();
          }
        }, {
          key: "_handleInputKeydown",
          value: function value(t) {
            t.which === M.keys.ENTER && (t.preventDefault(), this.open());
          }
        }, {
          key: "_handleClockClickStart",
          value: function value(t) {
            t.preventDefault();
            var e = this.plate.getBoundingClientRect(),
                i = e.left,
                n = e.top;
            this.x0 = i + this.options.dialRadius, this.y0 = n + this.options.dialRadius, this.moved = !1;

            var s = f._Pos(t);

            this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand(this.dx, this.dy, !1), document.addEventListener("mousemove", this._handleDocumentClickMoveBound), document.addEventListener("touchmove", this._handleDocumentClickMoveBound), document.addEventListener("mouseup", this._handleDocumentClickEndBound), document.addEventListener("touchend", this._handleDocumentClickEndBound);
          }
        }, {
          key: "_handleDocumentClickMove",
          value: function value(t) {
            t.preventDefault();

            var e = f._Pos(t),
                i = e.x - this.x0,
                n = e.y - this.y0;

            this.moved = !0, this.setHand(i, n, !1, !0);
          }
        }, {
          key: "_handleDocumentClickEnd",
          value: function value(t) {
            var e = this;
            t.preventDefault(), document.removeEventListener("mouseup", this._handleDocumentClickEndBound), document.removeEventListener("touchend", this._handleDocumentClickEndBound);

            var i = f._Pos(t),
                n = i.x - this.x0,
                s = i.y - this.y0;

            this.moved && n === this.dx && s === this.dy && this.setHand(n, s), "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function () {
              e.done();
            }, this.options.duration / 2)), "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes), document.removeEventListener("mousemove", this._handleDocumentClickMoveBound), document.removeEventListener("touchmove", this._handleDocumentClickMoveBound);
          }
        }, {
          key: "_insertHTMLIntoDOM",
          value: function value() {
            this.$modalEl = h(f._template), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
            var t = document.querySelector(this.options.container);
            this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el);
          }
        }, {
          key: "_setupModal",
          value: function value() {
            var t = this;
            this.modal = M.Modal.init(this.modalEl, {
              onOpenStart: this.options.onOpenStart,
              onOpenEnd: this.options.onOpenEnd,
              onCloseStart: this.options.onCloseStart,
              onCloseEnd: function onCloseEnd() {
                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t), t.isOpen = !1;
              }
            });
          }
        }, {
          key: "_setupVariables",
          value: function value() {
            this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector(".timepicker-canvas"), this.plate = this.modalEl.querySelector(".timepicker-plate"), this.hoursView = this.modalEl.querySelector(".timepicker-hours"), this.minutesView = this.modalEl.querySelector(".timepicker-minutes"), this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"), this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"), this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"), this.footer = this.modalEl.querySelector(".timepicker-footer"), this.amOrPm = "PM";
          }
        }, {
          key: "_pickerSetup",
          value: function value() {
            var t = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
            this.options.showClearBtn && t.css({
              visibility: ""
            });
            var e = h('<div class="confirmation-btns"></div>');
            h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)), h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)), e.appendTo(this.footer);
          }
        }, {
          key: "_clockSetup",
          value: function value() {
            this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'), this.$pmBtn = h('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock();
          }
        }, {
          key: "_buildSVGClock",
          value: function value() {
            var t = this.options.dialRadius,
                e = this.options.tickRadius,
                i = 2 * t,
                n = f._createSVGEl("svg");

            n.setAttribute("class", "timepicker-svg"), n.setAttribute("width", i), n.setAttribute("height", i);

            var s = f._createSVGEl("g");

            s.setAttribute("transform", "translate(" + t + "," + t + ")");

            var o = f._createSVGEl("circle");

            o.setAttribute("class", "timepicker-canvas-bearing"), o.setAttribute("cx", 0), o.setAttribute("cy", 0), o.setAttribute("r", 4);

            var a = f._createSVGEl("line");

            a.setAttribute("x1", 0), a.setAttribute("y1", 0);

            var r = f._createSVGEl("circle");

            r.setAttribute("class", "timepicker-canvas-bg"), r.setAttribute("r", e), s.appendChild(a), s.appendChild(r), s.appendChild(o), n.appendChild(s), this._canvas.appendChild(n), this.hand = a, this.bg = r, this.bearing = o, this.g = s;
          }
        }, {
          key: "_buildHoursView",
          value: function value() {
            var t = h('<div class="timepicker-tick"></div>');
            if (this.options.twelveHour) for (var e = 1; e < 13; e += 1) {
              var i = t.clone(),
                  n = e / 6 * Math.PI,
                  s = this.options.outerRadius;
              i.css({
                left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px",
                top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"
              }), i.html(0 === e ? "00" : e), this.hoursView.appendChild(i[0]);
            } else for (var o = 0; o < 24; o += 1) {
              var a = t.clone(),
                  r = o / 6 * Math.PI,
                  l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
              a.css({
                left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px",
                top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px"
              }), a.html(0 === o ? "00" : o), this.hoursView.appendChild(a[0]);
            }
          }
        }, {
          key: "_buildMinutesView",
          value: function value() {
            for (var t = h('<div class="timepicker-tick"></div>'), e = 0; e < 60; e += 5) {
              var i = t.clone(),
                  n = e / 30 * Math.PI;
              i.css({
                left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px",
                top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px"
              }), i.html(f._addLeadingZero(e)), this.minutesView.appendChild(i[0]);
            }
          }
        }, {
          key: "_handleAmPmClick",
          value: function value(t) {
            var e = h(t.target);
            this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM", this._updateAmPmView();
          }
        }, {
          key: "_updateAmPmView",
          value: function value() {
            this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm), this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm));
          }
        }, {
          key: "_updateTimeFromInput",
          value: function value() {
            var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");

            if (this.options.twelveHour && void 0 !== t[1] && (0 < t[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM", t[1] = t[1].replace("AM", "").replace("PM", "")), "now" === t[0]) {
              var e = new Date(+new Date() + this.options.fromNow);
              t = [e.getHours(), e.getMinutes()], this.options.twelveHour && (this.amOrPm = 12 <= t[0] && t[0] < 24 ? "PM" : "AM");
            }

            this.hours = +t[0] || 0, this.minutes = +t[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes), this._updateAmPmView();
          }
        }, {
          key: "showView",
          value: function value(t, e) {
            "minutes" === t && h(this.hoursView).css("visibility");
            var i = "hours" === t,
                n = i ? this.hoursView : this.minutesView,
                s = i ? this.minutesView : this.hoursView;
            this.currentView = t, h(this.spanHours).toggleClass("text-primary", i), h(this.spanMinutes).toggleClass("text-primary", !i), s.classList.add("timepicker-dial-out"), h(n).css("visibility", "visible").removeClass("timepicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
              h(s).css("visibility", "hidden");
            }, this.options.duration);
          }
        }, {
          key: "resetClock",
          value: function value(t) {
            var e = this.currentView,
                i = this[e],
                n = "hours" === e,
                s = i * (Math.PI / (n ? 6 : 30)),
                o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius,
                a = Math.sin(s) * o,
                r = -Math.cos(s) * o,
                l = this;
            t ? (h(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function () {
              h(l.canvas).removeClass("timepicker-canvas-out"), l.setHand(a, r);
            }, t)) : this.setHand(a, r);
          }
        }, {
          key: "setHand",
          value: function value(t, e, i) {
            var n = this,
                s = Math.atan2(t, -e),
                o = "hours" === this.currentView,
                a = Math.PI / (o || i ? 6 : 30),
                r = Math.sqrt(t * t + e * e),
                l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2,
                h = l ? this.options.innerRadius : this.options.outerRadius;
            this.options.twelveHour && (h = this.options.outerRadius), s < 0 && (s = 2 * Math.PI + s);
            var d = Math.round(s / a);
            s = d * a, this.options.twelveHour ? o ? 0 === d && (d = 12) : (i && (d *= 5), 60 === d && (d = 0)) : o ? (12 === d && (d = 0), d = l ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (i && (d *= 5), 60 === d && (d = 0)), this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function () {
              n.vibrateTimer = null;
            }, 100))), this[this.currentView] = d, o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
            var u = Math.sin(s) * (h - this.options.tickRadius),
                c = -Math.cos(s) * (h - this.options.tickRadius),
                p = Math.sin(s) * h,
                v = -Math.cos(s) * h;
            this.hand.setAttribute("x2", u), this.hand.setAttribute("y2", c), this.bg.setAttribute("cx", p), this.bg.setAttribute("cy", v);
          }
        }, {
          key: "open",
          value: function value() {
            this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView("hours"), this.modal.open());
          }
        }, {
          key: "close",
          value: function value() {
            this.isOpen && (this.isOpen = !1, this.modal.close());
          }
        }, {
          key: "done",
          value: function value(t, e) {
            var i = this.el.value,
                n = e ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
            this.time = n, !e && this.options.twelveHour && (n = n + " " + this.amOrPm), (this.el.value = n) !== i && this.$el.trigger("change"), this.close(), this.el.focus();
          }
        }, {
          key: "clear",
          value: function value() {
            this.done(null, !0);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t, e);
          }
        }, {
          key: "_addLeadingZero",
          value: function value(t) {
            return (t < 10 ? "0" : "") + t;
          }
        }, {
          key: "_createSVGEl",
          value: function value(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t);
          }
        }, {
          key: "_Pos",
          value: function value(t) {
            return t.targetTouches && 1 <= t.targetTouches.length ? {
              x: t.targetTouches[0].clientX,
              y: t.targetTouches[0].clientY
            } : {
              x: t.clientX,
              y: t.clientY
            };
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Timepicker;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), f;
      }();

      t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""), M.Timepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker");
    }(cash), function (s) {
      "use strict";

      var e = {},
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e), i.isInvalid = !1, i.isValidLength = !1, i._setupCounter(), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter();
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleUpdateCounterBound = this.updateCounter.bind(this), this.el.addEventListener("focus", this._handleUpdateCounterBound, !0), this.el.addEventListener("input", this._handleUpdateCounterBound, !0);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0), this.el.removeEventListener("input", this._handleUpdateCounterBound, !0);
          }
        }, {
          key: "_setupCounter",
          value: function value() {
            this.counterEl = document.createElement("span"), s(this.counterEl).addClass("character-counter").css({
              "float": "right",
              "font-size": "12px",
              height: 1
            }), this.$el.parent().append(this.counterEl);
          }
        }, {
          key: "_removeCounter",
          value: function value() {
            s(this.counterEl).remove();
          }
        }, {
          key: "updateCounter",
          value: function value() {
            var t = +this.$el.attr("data-length"),
                e = this.el.value.length;
            this.isValidLength = e <= t;
            var i = e;
            t && (i += "/" + t, this._validateInput()), s(this.counterEl).html(i);
          }
        }, {
          key: "_validateInput",
          value: function value() {
            this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass("valid"), this.$el.addClass("invalid"));
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_CharacterCounter;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.CharacterCounter = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter");
    }(cash), function (b) {
      "use strict";

      var e = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        numVisible: 5,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
      },
          t = function (t) {
        function i(t, e) {
          _classCallCheck(this, i);

          var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));

          return (n.el.M_Carousel = n).options = b.extend({}, i.defaults, e), n.hasMultipleSlides = 1 < n.$el.find(".carousel-item").length, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = !1, n.dragged = !1, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(), n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind(n), n._trackBound = n._track.bind(n), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")), n.$indicators = b('<ul class="indicators"></ul>'), n.$el.find(".carousel-item").each(function (t, e) {
            if (n.images.push(t), n.showIndicators) {
              var i = b('<li class="indicator-item"></li>');
              0 === e && i[0].classList.add("active"), n.$indicators.append(i);
            }
          }), n.showIndicators && n.$el.append(n.$indicators), n.count = n.images.length, n.options.numVisible = Math.min(n.count, n.options.numVisible), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every(function (t) {
            var e = t + "Transform";
            return void 0 === document.body.style[e] || (n.xform = e, !1);
          }), n._setupEventHandlers(), n._scroll(n.offset), n;
        }

        return _inherits(i, Component), _createClass(i, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.M_Carousel = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            var i = this;
            this._handleCarouselTapBound = this._handleCarouselTap.bind(this), this._handleCarouselDragBound = this._handleCarouselDrag.bind(this), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this), this._handleCarouselClickBound = this._handleCarouselClick.bind(this), void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)), this.el.addEventListener("mousedown", this._handleCarouselTapBound), this.el.addEventListener("mousemove", this._handleCarouselDragBound), this.el.addEventListener("mouseup", this._handleCarouselReleaseBound), this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.addEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function (t, e) {
              t.addEventListener("click", i._handleIndicatorClickBound);
            }));
            var t = M.throttle(this._handleResize, 200);
            this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            var i = this;
            void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)), this.el.removeEventListener("mousedown", this._handleCarouselTapBound), this.el.removeEventListener("mousemove", this._handleCarouselDragBound), this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound), this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.removeEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function (t, e) {
              t.removeEventListener("click", i._handleIndicatorClickBound);
            }), window.removeEventListener("resize", this._handleThrottledResizeBound);
          }
        }, {
          key: "_handleCarouselTap",
          value: function value(t) {
            "mousedown" === t.type && b(t.target).is("img") && t.preventDefault(), this.pressed = !0, this.dragged = !1, this.verticalDragged = !1, this.reference = this._xpos(t), this.referenceY = this._ypos(t), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this._trackBound, 100);
          }
        }, {
          key: "_handleCarouselDrag",
          value: function value(t) {
            var e = void 0,
                i = void 0,
                n = void 0;
            if (this.pressed) if (e = this._xpos(t), i = this._ypos(t), n = this.reference - e, Math.abs(this.referenceY - i) < 30 && !this.verticalDragged) (2 < n || n < -2) && (this.dragged = !0, this.reference = e, this._scroll(this.offset + n));else {
              if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
              this.verticalDragged = !0;
            }
            if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
          }
        }, {
          key: "_handleCarouselRelease",
          value: function value(t) {
            if (this.pressed) return this.pressed = !1, clearInterval(this.ticker), this.target = this.offset, (10 < this.velocity || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round(this.target / this.dim) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound), this.dragged && (t.preventDefault(), t.stopPropagation()), !1;
          }
        }, {
          key: "_handleCarouselClick",
          value: function value(t) {
            if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;

            if (!this.options.fullWidth) {
              var e = b(t.target).closest(".carousel-item").index();
              0 !== this._wrap(this.center) - e && (t.preventDefault(), t.stopPropagation()), this._cycleTo(e);
            }
          }
        }, {
          key: "_handleIndicatorClick",
          value: function value(t) {
            t.stopPropagation();
            var e = b(t.target).closest(".indicator-item");
            e.length && this._cycleTo(e.index());
          }
        }, {
          key: "_handleResize",
          value: function value(t) {
            this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(!0)) : this._scroll();
          }
        }, {
          key: "_setCarouselHeight",
          value: function value(t) {
            var i = this,
                e = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(),
                n = e.find("img").first();
            if (n.length) {
              if (n[0].complete) {
                var s = n.height();
                if (0 < s) this.$el.css("height", s + "px");else {
                  var o = n[0].naturalWidth,
                      a = n[0].naturalHeight,
                      r = this.$el.width() / o * a;
                  this.$el.css("height", r + "px");
                }
              } else n.one("load", function (t, e) {
                i.$el.css("height", t.offsetHeight + "px");
              });
            } else if (!t) {
              var l = e.height();
              this.$el.css("height", l + "px");
            }
          }
        }, {
          key: "_xpos",
          value: function value(t) {
            return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX;
          }
        }, {
          key: "_ypos",
          value: function value(t) {
            return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientY : t.clientY;
          }
        }, {
          key: "_wrap",
          value: function value(t) {
            return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t;
          }
        }, {
          key: "_track",
          value: function value() {
            var t, e, i, n;
            e = (t = Date.now()) - this.timestamp, this.timestamp = t, i = this.offset - this.frame, this.frame = this.offset, n = 1e3 * i / (1 + e), this.velocity = .8 * n + .2 * this.velocity;
          }
        }, {
          key: "_autoScroll",
          value: function value() {
            var t = void 0,
                e = void 0;
            this.amplitude && (t = Date.now() - this.timestamp, 2 < (e = this.amplitude * Math.exp(-t / this.options.duration)) || e < -2 ? (this._scroll(this.target - e), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target));
          }
        }, {
          key: "_scroll",
          value: function value(t) {
            var e = this;
            this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"), null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout), this.scrollingTimeout = window.setTimeout(function () {
              e.$el.removeClass("scrolling");
            }, this.options.duration);
            var i,
                n,
                s,
                o,
                a = void 0,
                r = void 0,
                l = void 0,
                h = void 0,
                d = void 0,
                u = void 0,
                c = this.center,
                p = 1 / this.options.numVisible;

            if (this.offset = "number" == typeof t ? t : this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim, i = this.count >> 1, this.options.fullWidth ? (l = "translateX(0)", u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", u = 1 - p * o), this.showIndicators) {
              var v = this.center % this.count,
                  f = this.$indicators.find(".indicator-item.active");
              f.index() !== v && (f.removeClass("active"), this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"));
            }

            if (!this.noWrap || 0 <= this.center && this.center < this.count) {
              r = this.images[this._wrap(this.center)], b(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), r.classList.add("active"));
              var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";

              this._updateItemStyle(r, u, 0, m);
            }

            for (a = 1; a <= i; ++a) {
              if (this.options.fullWidth ? (h = this.options.dist, d = a === i && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s), d = 1 - p * (2 * a + o * s)), !this.noWrap || this.center + a < this.count) {
                r = this.images[this._wrap(this.center + a)];
                var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";

                this._updateItemStyle(r, d, -a, g);
              }

              if (this.options.fullWidth ? (h = this.options.dist, d = a === i && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s), d = 1 - p * (2 * a - o * s)), !this.noWrap || 0 <= this.center - a) {
                r = this.images[this._wrap(this.center - a)];

                var _ = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";

                this._updateItemStyle(r, d, -a, _);
              }
            }

            if (!this.noWrap || 0 <= this.center && this.center < this.count) {
              r = this.images[this._wrap(this.center)];
              var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";

              this._updateItemStyle(r, u, 0, y);
            }

            var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
            c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged), "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged), this.oneTimeCallback = null);
          }
        }, {
          key: "_updateItemStyle",
          value: function value(t, e, i, n) {
            t.style[this.xform] = n, t.style.zIndex = i, t.style.opacity = e, t.style.visibility = "visible";
          }
        }, {
          key: "_cycleTo",
          value: function value(t, e) {
            var i = this.center % this.count - t;
            this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : 0 < i && Math.abs(i - this.count) < i && (i -= this.count)), this.target = this.dim * Math.round(this.offset / this.dim), i < 0 ? this.target += this.dim * Math.abs(i) : 0 < i && (this.target -= this.dim * i), "function" == typeof e && (this.oneTimeCallback = e), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound));
          }
        }, {
          key: "next",
          value: function value(t) {
            (void 0 === t || isNaN(t)) && (t = 1);
            var e = this.center + t;

            if (e >= this.count || e < 0) {
              if (this.noWrap) return;
              e = this._wrap(e);
            }

            this._cycleTo(e);
          }
        }, {
          key: "prev",
          value: function value(t) {
            (void 0 === t || isNaN(t)) && (t = 1);
            var e = this.center - t;

            if (e >= this.count || e < 0) {
              if (this.noWrap) return;
              e = this._wrap(e);
            }

            this._cycleTo(e);
          }
        }, {
          key: "set",
          value: function value(t, e) {
            if ((void 0 === t || isNaN(t)) && (t = 0), t > this.count || t < 0) {
              if (this.noWrap) return;
              t = this._wrap(t);
            }

            this._cycleTo(t, e);
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Carousel;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), i;
      }();

      M.Carousel = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "carousel", "M_Carousel");
    }(cash), function (S) {
      "use strict";

      var e = {
        onOpen: void 0,
        onClose: void 0
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e), i.isOpen = !1, i.$origin = S("#" + i.$el.attr("data-target")), i._setup(), i._calculatePositioning(), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this.el.TapTarget = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleDocumentClickBound = this._handleDocumentClick.bind(this), this._handleTargetClickBound = this._handleTargetClick.bind(this), this._handleOriginClickBound = this._handleOriginClick.bind(this), this.el.addEventListener("click", this._handleTargetClickBound), this.originEl.addEventListener("click", this._handleOriginClickBound);
            var t = M.throttle(this._handleResize, 200);
            this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("click", this._handleTargetClickBound), this.originEl.removeEventListener("click", this._handleOriginClickBound), window.removeEventListener("resize", this._handleThrottledResizeBound);
          }
        }, {
          key: "_handleTargetClick",
          value: function value(t) {
            this.open();
          }
        }, {
          key: "_handleOriginClick",
          value: function value(t) {
            this.close();
          }
        }, {
          key: "_handleResize",
          value: function value(t) {
            this._calculatePositioning();
          }
        }, {
          key: "_handleDocumentClick",
          value: function value(t) {
            S(t.target).closest(".tap-target-wrapper").length || (this.close(), t.preventDefault(), t.stopPropagation());
          }
        }, {
          key: "_setup",
          value: function value() {
            this.wrapper = this.$el.parent()[0], this.waveEl = S(this.wrapper).find(".tap-target-wave")[0], this.originEl = S(this.wrapper).find(".tap-target-origin")[0], this.contentEl = this.$el.find(".tap-target-content")[0], S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before(S(this.wrapper)), this.wrapper.append(this.el)), this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)), this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(!0, !0), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl));
          }
        }, {
          key: "_calculatePositioning",
          value: function value() {
            var t = "fixed" === this.$origin.css("position");
            if (!t) for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == S(e[i]).css("position")); i++) {
              ;
            }

            var n = this.$origin.outerWidth(),
                s = this.$origin.outerHeight(),
                o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
                a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
                r = window.innerWidth,
                l = window.innerHeight,
                h = r / 2,
                d = l / 2,
                u = a <= h,
                c = h < a,
                p = o <= d,
                v = d < o,
                f = .25 * r <= a && a <= .75 * r,
                m = this.$el.outerWidth(),
                g = this.$el.outerHeight(),
                _ = o + s / 2 - g / 2,
                y = a + n / 2 - m / 2,
                k = t ? "fixed" : "absolute",
                b = f ? m : m / 2 + n,
                w = g / 2,
                C = p ? g / 2 : 0,
                E = u && !f ? m / 2 - n : 0,
                O = n,
                x = v ? "bottom" : "top",
                L = 2 * n,
                T = L,
                $ = g / 2 - T / 2,
                B = m / 2 - L / 2,
                D = {};

            D.top = p ? _ + "px" : "", D.right = c ? r - y - m + "px" : "", D.bottom = v ? l - _ - g + "px" : "", D.left = u ? y + "px" : "", D.position = k, S(this.wrapper).css(D), S(this.contentEl).css({
              width: b + "px",
              height: w + "px",
              top: C + "px",
              right: "0px",
              bottom: "0px",
              left: E + "px",
              padding: O + "px",
              verticalAlign: x
            }), S(this.waveEl).css({
              top: $ + "px",
              left: B + "px",
              width: L + "px",
              height: T + "px"
            });
          }
        }, {
          key: "open",
          value: function value() {
            this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = !0, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound));
          }
        }, {
          key: "close",
          value: function value() {
            this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]), this.isOpen = !1, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound));
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_TapTarget;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.TapTarget = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget");
    }(cash), function (d) {
      "use strict";

      var e = {
        classes: "",
        dropdownOptions: {}
      },
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e), i.isMultiple = i.$el.prop("multiple"), i.el.tabIndex = -1, i._keysSelected = {}, i._valueDict = {}, i._setupDropdown(), i._setupEventHandlers(), i);
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            var e = this;
            this._handleSelectChangeBound = this._handleSelectChange.bind(this), this._handleOptionClickBound = this._handleOptionClick.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), d(this.dropdownOptions).find("li:not(.optgroup)").each(function (t) {
              t.addEventListener("click", e._handleOptionClickBound);
            }), this.el.addEventListener("change", this._handleSelectChangeBound), this.input.addEventListener("click", this._handleInputClickBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            var e = this;
            d(this.dropdownOptions).find("li:not(.optgroup)").each(function (t) {
              t.removeEventListener("click", e._handleOptionClickBound);
            }), this.el.removeEventListener("change", this._handleSelectChangeBound), this.input.removeEventListener("click", this._handleInputClickBound);
          }
        }, {
          key: "_handleSelectChange",
          value: function value(t) {
            this._setValueToInput();
          }
        }, {
          key: "_handleOptionClick",
          value: function value(t) {
            t.preventDefault();
            var e = d(t.target).closest("li")[0],
                i = e.id;

            if (!d(e).hasClass("disabled") && !d(e).hasClass("optgroup") && i.length) {
              var n = !0;

              if (this.isMultiple) {
                var s = d(this.dropdownOptions).find("li.disabled.selected");
                s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", !1), this._toggleEntryFromArray(s[0].id)), n = this._toggleEntryFromArray(i);
              } else d(this.dropdownOptions).find("li").removeClass("selected"), d(e).toggleClass("selected", n);

              d(this._valueDict[i].el).prop("selected") !== n && (d(this._valueDict[i].el).prop("selected", n), this.$el.trigger("change"));
            }

            t.stopPropagation();
          }
        }, {
          key: "_handleInputClick",
          value: function value() {
            this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates());
          }
        }, {
          key: "_setupDropdown",
          value: function value() {
            var n = this;
            this.wrapper = document.createElement("div"), d(this.wrapper).addClass("select-wrapper " + this.options.classes), this.$el.before(d(this.wrapper)), this.wrapper.appendChild(this.el), this.el.disabled && this.wrapper.classList.add("disabled"), this.$selectOptions = this.$el.children("option, optgroup"), this.dropdownOptions = document.createElement("ul"), this.dropdownOptions.id = "select-options-" + M.guid(), d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")), this.$selectOptions.length && this.$selectOptions.each(function (t) {
              if (d(t).is("option")) {
                var e = void 0;
                e = n.isMultiple ? n._appendOptionWithIcon(n.$el, t, "multiple") : n._appendOptionWithIcon(n.$el, t), n._addOptionToValueDict(t, e);
              } else if (d(t).is("optgroup")) {
                var i = d(t).children("option");
                d(n.dropdownOptions).append(d('<li class="optgroup"><span>' + t.getAttribute("label") + "</span></li>")[0]), i.each(function (t) {
                  var e = n._appendOptionWithIcon(n.$el, t, "optgroup-option");

                  n._addOptionToValueDict(t, e);
                });
              }
            }), this.$el.after(this.dropdownOptions), this.input = document.createElement("input"), d(this.input).addClass("select-dropdown dropdown-trigger"), this.input.setAttribute("type", "text"), this.input.setAttribute("readonly", "true"), this.input.setAttribute("data-target", this.dropdownOptions.id), this.el.disabled && d(this.input).prop("disabled", "true"), this.$el.before(this.input), this._setValueToInput();
            var t = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');

            if (this.$el.before(t[0]), !this.el.disabled) {
              var e = d.extend({}, this.options.dropdownOptions);
              e.onOpenEnd = function (t) {
                var e = d(n.dropdownOptions).find(".selected").first();

                if (e.length && (M.keyDown = !0, n.dropdown.focusedIndex = e.index(), n.dropdown._focusFocusedItem(), M.keyDown = !1, n.dropdown.isScrollable)) {
                  var i = e[0].getBoundingClientRect().top - n.dropdownOptions.getBoundingClientRect().top;
                  i -= n.dropdownOptions.clientHeight / 2, n.dropdownOptions.scrollTop = i;
                }
              }, this.isMultiple && (e.closeOnClick = !1), this.dropdown = M.Dropdown.init(this.input, e);
            }

            this._setSelectedStates();
          }
        }, {
          key: "_addOptionToValueDict",
          value: function value(t, e) {
            var i = Object.keys(this._valueDict).length,
                n = this.dropdownOptions.id + i,
                s = {};
            e.id = n, s.el = t, s.optionEl = e, this._valueDict[n] = s;
          }
        }, {
          key: "_removeDropdown",
          value: function value() {
            d(this.wrapper).find(".caret").remove(), d(this.input).remove(), d(this.dropdownOptions).remove(), d(this.wrapper).before(this.$el), d(this.wrapper).remove();
          }
        }, {
          key: "_appendOptionWithIcon",
          value: function value(t, e, i) {
            var n = e.disabled ? "disabled " : "",
                s = "optgroup-option" === i ? "optgroup-option " : "",
                o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML,
                a = d("<li></li>"),
                r = d("<span></span>");
            r.html(o), a.addClass(n + " " + s), a.append(r);
            var l = e.getAttribute("data-icon");

            if (l) {
              var h = d('<img alt="" src="' + l + '">');
              a.prepend(h);
            }

            return d(this.dropdownOptions).append(a[0]), a[0];
          }
        }, {
          key: "_toggleEntryFromArray",
          value: function value(t) {
            var e = !this._keysSelected.hasOwnProperty(t),
                i = d(this._valueDict[t].optionEl);
            return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t], i.toggleClass("selected", e), i.find('input[type="checkbox"]').prop("checked", e), i.prop("selected", e), e;
          }
        }, {
          key: "_setValueToInput",
          value: function value() {
            var i = [];

            if (this.$el.find("option").each(function (t) {
              if (d(t).prop("selected")) {
                var e = d(t).text();
                i.push(e);
              }
            }), !i.length) {
              var t = this.$el.find("option:disabled").eq(0);
              t.length && "" === t[0].value && i.push(t.text());
            }

            this.input.value = i.join(", ");
          }
        }, {
          key: "_setSelectedStates",
          value: function value() {
            for (var t in this._keysSelected = {}, this._valueDict) {
              var e = this._valueDict[t],
                  i = d(e.el).prop("selected");
              d(e.optionEl).find('input[type="checkbox"]').prop("checked", i), i ? (this._activateOption(d(this.dropdownOptions), d(e.optionEl)), this._keysSelected[t] = !0) : d(e.optionEl).removeClass("selected");
            }
          }
        }, {
          key: "_activateOption",
          value: function value(t, e) {
            e && (this.isMultiple || t.find("li.selected").removeClass("selected"), d(e).addClass("selected"));
          }
        }, {
          key: "getSelectedValues",
          value: function value() {
            var t = [];

            for (var e in this._keysSelected) {
              t.push(this._valueDict[e].el.value);
            }

            return t;
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_FormSelect;
          }
        }, {
          key: "defaults",
          get: function get() {
            return e;
          }
        }]), n;
      }();

      M.FormSelect = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect");
    }(cash), function (s, e) {
      "use strict";

      var i = {},
          t = function (t) {
        function n(t, e) {
          _classCallCheck(this, n);

          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

          return (i.el.M_Range = i).options = s.extend({}, n.defaults, e), i._mousedown = !1, i._setupThumb(), i._setupEventHandlers(), i;
        }

        return _inherits(n, Component), _createClass(n, [{
          key: "destroy",
          value: function value() {
            this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0;
          }
        }, {
          key: "_setupEventHandlers",
          value: function value() {
            this._handleRangeChangeBound = this._handleRangeChange.bind(this), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this), this.el.addEventListener("change", this._handleRangeChangeBound), this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
          }
        }, {
          key: "_removeEventHandlers",
          value: function value() {
            this.el.removeEventListener("change", this._handleRangeChangeBound), this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
          }
        }, {
          key: "_handleRangeChange",
          value: function value() {
            s(this.value).html(this.$el.val()), s(this.thumb).hasClass("active") || this._showRangeBubble();

            var t = this._calcRangeOffset();

            s(this.thumb).addClass("active").css("left", t + "px");
          }
        }, {
          key: "_handleRangeMousedownTouchstart",
          value: function value(t) {
            if (s(this.value).html(this.$el.val()), this._mousedown = !0, this.$el.addClass("active"), s(this.thumb).hasClass("active") || this._showRangeBubble(), "input" !== t.type) {
              var e = this._calcRangeOffset();

              s(this.thumb).addClass("active").css("left", e + "px");
            }
          }
        }, {
          key: "_handleRangeInputMousemoveTouchmove",
          value: function value() {
            if (this._mousedown) {
              s(this.thumb).hasClass("active") || this._showRangeBubble();

              var t = this._calcRangeOffset();

              s(this.thumb).addClass("active").css("left", t + "px"), s(this.value).html(this.$el.val());
            }
          }
        }, {
          key: "_handleRangeMouseupTouchend",
          value: function value() {
            this._mousedown = !1, this.$el.removeClass("active");
          }
        }, {
          key: "_handleRangeBlurMouseoutTouchleave",
          value: function value() {
            if (!this._mousedown) {
              var t = 7 + parseInt(this.$el.css("padding-left")) + "px";
              s(this.thumb).hasClass("active") && (e.remove(this.thumb), e({
                targets: this.thumb,
                height: 0,
                width: 0,
                top: 10,
                easing: "easeOutQuad",
                marginLeft: t,
                duration: 100
              })), s(this.thumb).removeClass("active");
            }
          }
        }, {
          key: "_setupThumb",
          value: function value() {
            this.thumb = document.createElement("span"), this.value = document.createElement("span"), s(this.thumb).addClass("thumb"), s(this.value).addClass("value"), s(this.thumb).append(this.value), this.$el.after(this.thumb);
          }
        }, {
          key: "_removeThumb",
          value: function value() {
            s(this.thumb).remove();
          }
        }, {
          key: "_showRangeBubble",
          value: function value() {
            var t = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
            e.remove(this.thumb), e({
              targets: this.thumb,
              height: 30,
              width: 30,
              top: -30,
              marginLeft: t,
              duration: 300,
              easing: "easeOutQuint"
            });
          }
        }, {
          key: "_calcRangeOffset",
          value: function value() {
            var t = this.$el.width() - 15,
                e = parseFloat(this.$el.attr("max")) || 100,
                i = parseFloat(this.$el.attr("min")) || 0;
            return (parseFloat(this.$el.val()) - i) / (e - i) * t;
          }
        }], [{
          key: "init",
          value: function value(t, e) {
            return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
          }
        }, {
          key: "getInstance",
          value: function value(t) {
            return (t.jquery ? t[0] : t).M_Range;
          }
        }, {
          key: "defaults",
          get: function get() {
            return i;
          }
        }]), n;
      }();

      M.Range = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"), t.init(s("input[type=range]"));
    }(cash, M.anime);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: '../../'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/henriparviainen/sites/portfolio3/porfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map