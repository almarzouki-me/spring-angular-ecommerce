(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\FalcoSoft\Documents\Projects\Portfolio\spring-boot-angular-ecommerce\fullstack-ecommerce\frontend\angular-ecommerce\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "50ZR":
    /*!*******************************************************************!*\
      !*** ./src/app/components/cart-details/cart-details.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CartDetailsComponent */

    /***/
    function ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function () {
        return CartDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CartDetailsComponent_div_3_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Quantity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r4.incrementQuantity(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r6.decrementQuantity(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r7.remove(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tempCartItem_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", tempCartItem_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tempCartItem_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 5, tempCartItem_r3.unitPrice, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tempCartItem_r3.quantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](27, 8, tempCartItem_r3.quantity * tempCartItem_r3.unitPrice, "USD"), "");
        }
      }

      function CartDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Product Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Product Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, CartDetailsComponent_div_3_tr_8_Template, 28, 11, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Shipping: FREE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.cartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Quantity: ", ctx_r0.totalQuantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](18, 3, ctx_r0.totalPrice, "USD"), "");
        }
      }

      function CartDetailsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Your shopping cart is empty. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var CartDetailsComponent = /*#__PURE__*/function () {
        function CartDetailsComponent(cartService) {
          _classCallCheck(this, CartDetailsComponent);

          this.cartService = cartService;
          this.cartItems = [];
          this.totalPrice = 0;
          this.totalQuantity = 0;
        }

        _createClass(CartDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listCartDetails();
          }
        }, {
          key: "listCartDetails",
          value: function listCartDetails() {
            var _this = this;

            // get a handle to the cart items
            this.cartItems = this.cartService.cartItems; // subscribe to the cart totalPrice

            this.cartService.totalPrice.subscribe(function (data) {
              return _this.totalPrice = data;
            }); // subscribe to the cart totalQuantity

            this.cartService.totalQuantity.subscribe(function (data) {
              return _this.totalQuantity = data;
            }); // compute cart total price and quantity

            this.cartService.computeCartTotals();
          }
        }, {
          key: "incrementQuantity",
          value: function incrementQuantity(theCartItem) {
            this.cartService.addToCart(theCartItem);
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(theCartItem) {
            this.cartService.decrementQuantity(theCartItem);
          }
        }, {
          key: "remove",
          value: function remove(theCartItem) {
            this.cartService.remove(theCartItem);
          }
        }]);

        return CartDetailsComponent;
      }();

      CartDetailsComponent.??fac = function CartDetailsComponent_Factory(t) {
        return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      CartDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CartDetailsComponent,
        selectors: [["app-cart-details"]],
        decls: 5,
        vars: 2,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "50%"], ["width", "30%"], [4, "ngFor", "ngForOf"], ["colspan", "2"], [2, "font-weight", "bold"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], ["width", "150px", 1, "img-responsive", 3, "src"], [1, "items"], [1, "row", "no-gutters"], [1, "col"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "col", "ml-4", "mr-2"], [1, "fas", "fa-minus"], [1, "col-8"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 3, "click"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function CartDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CartDetailsComponent_div_3_Template, 21, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CartDetailsComponent_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartItems.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart-details',
            templateUrl: './cart-details.component.html',
            styleUrls: ['./cart-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6Idd":
    /*!*********************************!*\
      !*** ./src/app/common/order.ts ***!
      \*********************************/

    /*! exports provided: Order */

    /***/
    function Idd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });

      var Order = function Order() {
        _classCallCheck(this, Order);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
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
    "BZKk":
    /*!************************************!*\
      !*** ./src/app/common/purchase.ts ***!
      \************************************/

    /*! exports provided: Purchase */

    /***/
    function BZKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Purchase", function () {
        return Purchase;
      });

      var Purchase = function Purchase() {
        _classCallCheck(this, Purchase);
      };
      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(httpClient) {
          _classCallCheck(this, ProductService);

          this.httpClient = httpClient;
          this.baseUrl = 'http://localhost:8080/api/products';
          this.categoryUrl = 'http://localhost:8080/api/product-category';
        }

        _createClass(ProductService, [{
          key: "getProduct",
          value: function getProduct(theProductId) {
            // need to build URL based on product id
            var productUrl = "".concat(this.baseUrl, "/").concat(theProductId);
            return this.httpClient.get(productUrl);
          }
        }, {
          key: "getProductListPaginate",
          value: function getProductListPaginate(thePage, thePageSize, theCategoryId) {
            // need to build URL based on category id, page and size 
            var searchUrl = "".concat(this.baseUrl, "/search/findByCategoryId?id=").concat(theCategoryId) + "&page=".concat(thePage, "&size=").concat(thePageSize);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProductList",
          value: function getProductList(theCategoryId) {
            // need to build URL based on category id 
            var searchUrl = "".concat(this.baseUrl, "/search/findByCategoryId?id=").concat(theCategoryId);
            return this.getProducts(searchUrl);
          }
        }, {
          key: "searchProducts",
          value: function searchProducts(theKeyword) {
            // need to build URL based on the keyword 
            var searchUrl = "".concat(this.baseUrl, "/search/findByNameContaining?name=").concat(theKeyword);
            return this.getProducts(searchUrl);
          }
        }, {
          key: "searchProductsPaginate",
          value: function searchProductsPaginate(thePage, thePageSize, theKeyword) {
            // need to build URL based on keyword, page and size 
            var searchUrl = "".concat(this.baseUrl, "/search/findByNameContaining?name=").concat(theKeyword) + "&page=".concat(thePage, "&size=").concat(thePageSize);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProducts",
          value: function getProducts(searchUrl) {
            return this.httpClient.get(searchUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response._embedded.products;
            }));
          }
        }, {
          key: "getProductCategories",
          value: function getProductCategories() {
            return this.httpClient.get(this.categoryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response._embedded.productCategory;
            }));
          }
        }]);

        return ProductService;
      }();

      ProductService.??fac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ProductService,
        factory: ProductService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GnJv":
    /*!****************************************************!*\
      !*** ./src/app/services/luv2-shop-form.service.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopFormService */

    /***/
    function GnJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopFormService", function () {
        return Luv2ShopFormService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Luv2ShopFormService = /*#__PURE__*/function () {
        function Luv2ShopFormService(httpClient) {
          _classCallCheck(this, Luv2ShopFormService);

          this.httpClient = httpClient;
          this.countriesUrl = 'http://localhost:8080/api/countries';
          this.statesUrl = 'http://localhost:8080/api/states';
        }

        _createClass(Luv2ShopFormService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.httpClient.get(this.countriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response._embedded.countries;
            }));
          }
        }, {
          key: "getStates",
          value: function getStates(theCountryCode) {
            // search url
            var searchStatesUrl = "".concat(this.statesUrl, "/search/findByCountryCode?code=").concat(theCountryCode);
            return this.httpClient.get(searchStatesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response._embedded.states;
            }));
          }
        }, {
          key: "getCreditCardMonths",
          value: function getCreditCardMonths(startMonth) {
            var data = []; // build an array for "Month" dropdown list
            // - start at current month and loop until 

            for (var theMonth = startMonth; theMonth <= 12; theMonth++) {
              data.push(theMonth);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
          }
        }, {
          key: "getCreditCardYears",
          value: function getCreditCardYears() {
            var data = []; // build an array for "Year" downlist list
            // - start at current year and loop for next 10 years

            var startYear = new Date().getFullYear();
            var endYear = startYear + 10;

            for (var theYear = startYear; theYear <= endYear; theYear++) {
              data.push(theYear);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
          }
        }]);

        return Luv2ShopFormService;
      }();

      Luv2ShopFormService.??fac = function Luv2ShopFormService_Factory(t) {
        return new (t || Luv2ShopFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      Luv2ShopFormService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: Luv2ShopFormService,
        factory: Luv2ShopFormService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Luv2ShopFormService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ldpo":
    /*!*************************************!*\
      !*** ./src/app/common/cart-item.ts ***!
      \*************************************/

    /*! exports provided: CartItem */

    /***/
    function Ldpo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartItem", function () {
        return CartItem;
      });

      var CartItem = function CartItem(product) {
        _classCallCheck(this, CartItem);

        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;
      };
      /***/

    },

    /***/
    "PEC5":
    /*!***********************************************************!*\
      !*** ./src/app/components/checkout/checkout.component.ts ***!
      \***********************************************************/

    /*! exports provided: CheckoutComponent */

    /***/
    function PEC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
        return CheckoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/validators/luv2-shop-validators */
      "zTuY");
      /* harmony import */


      var src_app_common_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/order */
      "6Idd");
      /* harmony import */


      var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/common/order-item */
      "Wmh0");
      /* harmony import */


      var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/common/purchase */
      "BZKk");
      /* harmony import */


      var src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/luv2-shop-form.service */
      "GnJv");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/checkout.service */
      "SqMf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CheckoutComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First Name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_14_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_14_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.firstName.errors.required || ctx_r0.firstName.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.firstName.errors.minlength);
        }
      }

      function CheckoutComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_22_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last Name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_22_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_22_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.lastName.errors.required || ctx_r1.lastName.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.lastName.errors.minlength);
        }
      }

      function CheckoutComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_30_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email must be a valid email address format ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_30_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_30_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.email.errors.pattern);
        }
      }

      function CheckoutComponent_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var country_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", country_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", country_r29.name, " ");
        }
      }

      function CheckoutComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_42_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.shippingAddressCountry.errors.required);
        }
      }

      function CheckoutComponent_div_50_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Street is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_50_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Street must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_50_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_50_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.shippingAddressStreet.errors.required || ctx_r5.shippingAddressStreet.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.shippingAddressStreet.errors.minlength);
        }
      }

      function CheckoutComponent_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " City is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_58_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " City must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_58_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_58_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.shippingAddressCity.errors.required || ctx_r6.shippingAddressCity.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.shippingAddressCity.errors.minlength);
        }
      }

      function CheckoutComponent_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var state_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", state_r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", state_r35.name, " ");
        }
      }

      function CheckoutComponent_div_67_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " State is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_67_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.shippingAddressState.errors.required);
        }
      }

      function CheckoutComponent_div_75_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Zip code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_75_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Zip code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_75_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_75_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.shippingAddressZipCode.errors.required || ctx_r9.shippingAddressZipCode.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.shippingAddressZipCode.errors.minlength);
        }
      }

      function CheckoutComponent_option_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var country_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", country_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", country_r39.name, " ");
        }
      }

      function CheckoutComponent_div_92_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_92_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.billingAddressCountry.errors.required);
        }
      }

      function CheckoutComponent_div_100_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Street is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_100_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Street must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_100_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_100_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.billingAddressStreet.errors.required || ctx_r12.billingAddressStreet.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.billingAddressStreet.errors.minlength);
        }
      }

      function CheckoutComponent_div_108_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " City is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_108_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " City must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_108_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_108_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.billingAddressCity.errors.required || ctx_r13.billingAddressCity.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.billingAddressCity.errors.minlength);
        }
      }

      function CheckoutComponent_option_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var state_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", state_r45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", state_r45.name, " ");
        }
      }

      function CheckoutComponent_div_117_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " State is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_117_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.billingAddressState.errors.required);
        }
      }

      function CheckoutComponent_div_125_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Zip code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_125_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Zip code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_125_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_125_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.billingAddressZipCode.errors.required || ctx_r16.billingAddressZipCode.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.billingAddressZipCode.errors.minlength);
        }
      }

      function CheckoutComponent_div_140_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Credit card type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_140_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_140_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.creditCardType.errors.required);
        }
      }

      function CheckoutComponent_div_148_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_148_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_148_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_148_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r18.creditCardNameOnCard.errors.required || ctx_r18.creditCardNameOnCard.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r18.creditCardNameOnCard.errors.minlength);
        }
      }

      function CheckoutComponent_div_156_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Card number is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_156_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Card number must be 16 digits long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_156_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_156_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r19.creditCardNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r19.creditCardNumber.errors.pattern);
        }
      }

      function CheckoutComponent_div_164_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Security code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_164_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Security code must be 3 digits long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CheckoutComponent_div_164_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CheckoutComponent_div_164_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CheckoutComponent_div_164_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.creditCardSecurityCode.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.creditCardSecurityCode.errors.pattern);
        }
      }

      function CheckoutComponent_option_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var month_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", month_r56, " ");
        }
      }

      function CheckoutComponent_option_180_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var year_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", year_r57, " ");
        }
      }

      var CheckoutComponent = /*#__PURE__*/function () {
        function CheckoutComponent(formBuilder, luv2ShopFormService, cartService, checkoutService, router) {
          _classCallCheck(this, CheckoutComponent);

          this.formBuilder = formBuilder;
          this.luv2ShopFormService = luv2ShopFormService;
          this.cartService = cartService;
          this.checkoutService = checkoutService;
          this.router = router;
          this.totalPrice = 0;
          this.totalQuantity = 0;
          this.creditCardYears = [];
          this.creditCardMonths = [];
          this.countries = [];
          this.shippingAddressStates = [];
          this.billingAddressStates = [];
        }

        _createClass(CheckoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.reviewCartDetails();
            this.checkoutFormGroup = this.formBuilder.group({
              customer: this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
              }),
              shippingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace])
              }),
              billingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace])
              }),
              creditCard: this.formBuilder.group({
                cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                nameOnCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{16}')]),
                securityCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{3}')]),
                expirationMonth: [''],
                expirationYear: ['']
              })
            }); // populate credit card months

            var startMonth = new Date().getMonth() + 1;
            console.log("startMonth: " + startMonth);
            this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(function (data) {
              console.log("Retrieved credit card months: " + JSON.stringify(data));
              _this2.creditCardMonths = data;
            }); // populate credit card years

            this.luv2ShopFormService.getCreditCardYears().subscribe(function (data) {
              console.log("Retrieved credit card years: " + JSON.stringify(data));
              _this2.creditCardYears = data;
            }); // populate countries

            this.luv2ShopFormService.getCountries().subscribe(function (data) {
              console.log("Retrieved countries: " + JSON.stringify(data));
              _this2.countries = data;
            });
          }
        }, {
          key: "reviewCartDetails",
          value: function reviewCartDetails() {
            var _this3 = this;

            // subscribe to cartService.totalQuantity
            this.cartService.totalQuantity.subscribe(function (totalQuantity) {
              return _this3.totalQuantity = totalQuantity;
            }); // subscribe to cartService.totalPrice

            this.cartService.totalPrice.subscribe(function (totalPrice) {
              return _this3.totalPrice = totalPrice;
            });
          }
        }, {
          key: "copyShippingAddressToBillingAddress",
          value: function copyShippingAddressToBillingAddress(event) {
            if (event.target.checked) {
              this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.shippingAddress.value); // bug fix for states

              this.billingAddressStates = this.shippingAddressStates;
            } else {
              this.checkoutFormGroup.controls.billingAddress.reset(); // bug fix for states

              this.billingAddressStates = [];
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            console.log("Handling the submit button");

            if (this.checkoutFormGroup.invalid) {
              this.checkoutFormGroup.markAllAsTouched();
              return;
            } // set up order


            var order = new src_app_common_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            order.totalPrice = this.totalPrice;
            order.totalQuantity = this.totalQuantity; // get cart items

            var cartItems = this.cartService.cartItems; // create orderItems from cartItems
            // - long way

            /*
            let orderItems: OrderItem[] = [];
            for (let i=0; i < cartItems.length; i++) {
              orderItems[i] = new OrderItem(cartItems[i]);
            }
            */
            // - short way of doing the same thingy

            var orderItems = cartItems.map(function (tempCartItem) {
              return new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_4__["OrderItem"](tempCartItem);
            }); // set up purchase

            var purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_5__["Purchase"](); // populate purchase - customer

            purchase.customer = this.checkoutFormGroup.controls['customer'].value; // populate purchase - shipping address

            purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
            var shippingState = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
            var shippingCountry = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
            purchase.shippingAddress.state = shippingState.name;
            purchase.shippingAddress.country = shippingCountry.name; // populate purchase - billing address

            purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
            var billingState = JSON.parse(JSON.stringify(purchase.billingAddress.state));
            var billingCountry = JSON.parse(JSON.stringify(purchase.billingAddress.country));
            purchase.billingAddress.state = billingState.name;
            purchase.billingAddress.country = billingCountry.name; // populate purchase - order and orderItems

            purchase.order = order;
            purchase.orderItems = orderItems; // call REST API via the CheckoutService

            this.checkoutService.placeOrder(purchase).subscribe({
              next: function next(response) {
                alert("Your order has been received.\nOrder tracking number: ".concat(response.orderTrackingNumber)); // reset cart

                _this4.resetCart();
              },
              error: function error(err) {
                alert("There was an error: ".concat(err.message));
              }
            });
          }
        }, {
          key: "resetCart",
          value: function resetCart() {
            // reset cart data
            this.cartService.cartItems = [];
            this.cartService.totalPrice.next(0);
            this.cartService.totalQuantity.next(0); // reset the form

            this.checkoutFormGroup.reset(); // navigate back to the products page

            this.router.navigateByUrl("/products");
          }
        }, {
          key: "handleMonthsAndYears",
          value: function handleMonthsAndYears() {
            var _this5 = this;

            var creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
            var currentYear = new Date().getFullYear();
            var selectedYear = Number(creditCardFormGroup.value.expirationYear); // if the current year equals the selected year, then start with the current month

            var startMonth;

            if (currentYear === selectedYear) {
              startMonth = new Date().getMonth() + 1;
            } else {
              startMonth = 1;
            }

            this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(function (data) {
              console.log("Retrieved credit card months: " + JSON.stringify(data));
              _this5.creditCardMonths = data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates(formGroupName) {
            var _this6 = this;

            var formGroup = this.checkoutFormGroup.get(formGroupName);
            var countryCode = formGroup.value.country.code;
            var countryName = formGroup.value.country.name;
            console.log("".concat(formGroupName, " country code: ").concat(countryCode));
            console.log("".concat(formGroupName, " country name: ").concat(countryName));
            this.luv2ShopFormService.getStates(countryCode).subscribe(function (data) {
              if (formGroupName === 'shippingAddress') {
                _this6.shippingAddressStates = data;
              } else {
                _this6.billingAddressStates = data;
              } // select first item by default


              formGroup.get('state').setValue(data[0]);
            });
          }
        }, {
          key: "firstName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.firstName');
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.lastName');
          }
        }, {
          key: "email",
          get: function get() {
            return this.checkoutFormGroup.get('customer.email');
          }
        }, {
          key: "shippingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.street');
          }
        }, {
          key: "shippingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.city');
          }
        }, {
          key: "shippingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.state');
          }
        }, {
          key: "shippingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.zipCode');
          }
        }, {
          key: "shippingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.country');
          }
        }, {
          key: "billingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.street');
          }
        }, {
          key: "billingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.city');
          }
        }, {
          key: "billingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.state');
          }
        }, {
          key: "billingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.zipCode');
          }
        }, {
          key: "billingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.country');
          }
        }, {
          key: "creditCardType",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardType');
          }
        }, {
          key: "creditCardNameOnCard",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.nameOnCard');
          }
        }, {
          key: "creditCardNumber",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardNumber');
          }
        }, {
          key: "creditCardSecurityCode",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.securityCode');
          }
        }]);

        return CheckoutComponent;
      }();

      CheckoutComponent.??fac = function CheckoutComponent_Factory(t) {
        return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_6__["Luv2ShopFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_8__["CheckoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
      };

      CheckoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CheckoutComponent,
        selectors: [["app-checkout"]],
        decls: 194,
        vars: 29,
        consts: [[1, "main-content", "page-m"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [3, "formGroup", "ngSubmit"], ["formGroupName", "customer", 1, "form-area"], [1, "row"], [1, "col-md-2"], [1, "col-md-9"], [1, "input-space"], ["formControlName", "firstName", "type", "text"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["formControlName", "email", "type", "text"], ["formGroupName", "shippingAddress", 1, "form-area"], ["formControlName", "country", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "street", "type", "text"], ["formControlName", "city", "type", "text"], ["formControlName", "state"], ["formControlName", "zipCode", "type", "text"], [1, "au-checkbox"], ["type", "checkbox", 3, "change"], [1, "au-checkmark"], ["formGroupName", "billingAddress", 1, "form-area"], ["formGroupName", "creditCard", 1, "form-area"], ["formControlName", "cardType"], ["formControlName", "nameOnCard", "type", "text"], ["formControlName", "cardNumber", "type", "text"], ["formControlName", "securityCode", "type", "text"], ["formControlName", "expirationMonth"], [4, "ngFor", "ngForOf"], ["formControlName", "expirationYear", 3, "change"], [1, "form-area"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-info"], [1, "alert", "alert-danger", "mt-1"], [4, "ngIf"], [3, "ngValue"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CheckoutComponent_div_14_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, CheckoutComponent_div_22_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CheckoutComponent_div_30_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Shipping Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CheckoutComponent_Template_select_change_40_listener() {
              return ctx.getStates("shippingAddress");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, CheckoutComponent_option_41_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, CheckoutComponent_div_42_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Street");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, CheckoutComponent_div_50_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, CheckoutComponent_div_58_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, CheckoutComponent_option_66_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, CheckoutComponent_div_67_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, CheckoutComponent_div_75_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CheckoutComponent_Template_input_change_78_listener($event) {
              return ctx.copyShippingAddressToBillingAddress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Billing Address same as Shipping Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Billing Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CheckoutComponent_Template_select_change_90_listener() {
              return ctx.getStates("billingAddress");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](91, CheckoutComponent_option_91_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, CheckoutComponent_div_92_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Street");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, CheckoutComponent_div_100_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, CheckoutComponent_div_108_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, CheckoutComponent_option_116_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](117, CheckoutComponent_div_117_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](125, CheckoutComponent_div_125_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Credit Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Card Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Visa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Mastercard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](140, CheckoutComponent_div_140_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Name on Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](148, CheckoutComponent_div_148_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Card Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](156, CheckoutComponent_div_156_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Security Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](164, CheckoutComponent_div_164_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Expiration Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](172, CheckoutComponent_option_172_Template, 2, 1, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Expiration Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CheckoutComponent_Template_select_change_179_listener() {
              return ctx.handleMonthsAndYears();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](180, CheckoutComponent_option_180_Template, 2, 1, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Review Your Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Shipping: FREE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](190, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.checkoutFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.firstName.invalid && (ctx.firstName.dirty || ctx.firstName.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.lastName.invalid && (ctx.lastName.dirty || ctx.lastName.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shippingAddressCountry.invalid && (ctx.shippingAddressCountry.dirty || ctx.shippingAddressCountry.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shippingAddressStreet.invalid && (ctx.shippingAddressStreet.dirty || ctx.shippingAddressStreet.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shippingAddressCity.invalid && (ctx.shippingAddressCity.dirty || ctx.shippingAddressCity.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.shippingAddressStates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shippingAddressState.invalid && (ctx.shippingAddressState.dirty || ctx.shippingAddressState.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shippingAddressZipCode.invalid && (ctx.shippingAddressZipCode.dirty || ctx.shippingAddressZipCode.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.billingAddressCountry.invalid && (ctx.billingAddressCountry.dirty || ctx.billingAddressCountry.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.billingAddressStreet.invalid && (ctx.billingAddressStreet.dirty || ctx.billingAddressStreet.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.billingAddressCity.invalid && (ctx.billingAddressCity.dirty || ctx.billingAddressCity.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.billingAddressStates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.billingAddressState.invalid && (ctx.billingAddressState.dirty || ctx.billingAddressState.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.billingAddressZipCode.invalid && (ctx.billingAddressZipCode.dirty || ctx.billingAddressZipCode.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.creditCardType.invalid && (ctx.creditCardType.dirty || ctx.creditCardType.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.creditCardNameOnCard.invalid && (ctx.creditCardNameOnCard.dirty || ctx.creditCardNameOnCard.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.creditCardNumber.invalid && (ctx.creditCardNumber.dirty || ctx.creditCardNumber.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.creditCardSecurityCode.invalid && (ctx.creditCardSecurityCode.dirty || ctx.creditCardSecurityCode.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.creditCardMonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.creditCardYears);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Quantity: ", ctx.totalQuantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](190, 26, ctx.totalPrice, "USD"), "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CheckoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_6__["Luv2ShopFormService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
          }, {
            type: src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_8__["CheckoutService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RZmA":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function RZmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(router) {
          _classCallCheck(this, SearchComponent);

          this.router = router;
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            console.log("value=".concat(value));
            this.router.navigateByUrl("/search/".concat(value));
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.??fac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SearchComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 5,
        vars: 0,
        consts: [[1, "form-header"], ["type", "text", "placeholder", "Search for products ...", 1, "au-input", "au-input-xl", 3, "keyup.enter"], ["myInput", ""], [1, "au-btn-submit", 3, "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SearchComponent_Template_button_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
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
    "SqMf":
    /*!**********************************************!*\
      !*** ./src/app/services/checkout.service.ts ***!
      \**********************************************/

    /*! exports provided: CheckoutService */

    /***/
    function SqMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutService", function () {
        return CheckoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CheckoutService = /*#__PURE__*/function () {
        function CheckoutService(httpClient) {
          _classCallCheck(this, CheckoutService);

          this.httpClient = httpClient;
          this.purchaseUrl = 'http://localhost:8080/api/checkout/purchase';
        }

        _createClass(CheckoutService, [{
          key: "placeOrder",
          value: function placeOrder(purchase) {
            return this.httpClient.post(this.purchaseUrl, purchase);
          }
        }]);

        return CheckoutService;
      }();

      CheckoutService.??fac = function CheckoutService_Factory(t) {
        return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CheckoutService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CheckoutService,
        factory: CheckoutService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CheckoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-ecommerce';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 26,
        vars: 0,
        consts: [[1, "page-wrapper"], [1, "menu-sidebar", "d-none", "d-lg-block"], [1, "logo"], ["routerLink", "/products"], ["src", "assets/images/logo.png", "alt", "luv2shop", 1, "img-responsive"], [1, "page-container"], [1, "header-desktop"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "header-wrap"], [1, "account-wrap"], ["href", "#"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "aside", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-product-category-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "header", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "app-cart-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_4__["CartStatusComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UoNx":
    /*!***********************************!*\
      !*** ./src/app/common/product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function UoNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "Wmh0":
    /*!**************************************!*\
      !*** ./src/app/common/order-item.ts ***!
      \**************************************/

    /*! exports provided: OrderItem */

    /***/
    function Wmh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
        return OrderItem;
      });

      var OrderItem = function OrderItem(cartItem) {
        _classCallCheck(this, OrderItem);

        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
      };
      /***/

    },

    /***/
    "YbQc":
    /*!*****************************************************************!*\
      !*** ./src/app/components/cart-status/cart-status.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CartStatusComponent */

    /***/
    function YbQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartStatusComponent", function () {
        return CartStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CartStatusComponent = /*#__PURE__*/function () {
        function CartStatusComponent(cartService) {
          _classCallCheck(this, CartStatusComponent);

          this.cartService = cartService;
          this.totalPrice = 0.00;
          this.totalQuantity = 0;
        }

        _createClass(CartStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateCartStatus();
          }
        }, {
          key: "updateCartStatus",
          value: function updateCartStatus() {
            var _this7 = this;

            // subscribe to the cart totalPrice
            this.cartService.totalPrice.subscribe(function (data) {
              return _this7.totalPrice = data;
            }); // subscribe to the cart totalQuantity

            this.cartService.totalQuantity.subscribe(function (data) {
              return _this7.totalQuantity = data;
            });
          }
        }]);

        return CartStatusComponent;
      }();

      CartStatusComponent.??fac = function CartStatusComponent_Factory(t) {
        return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      CartStatusComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CartStatusComponent,
        selectors: [["app-cart-status"]],
        decls: 8,
        vars: 5,
        consts: [[1, "cart-area", "d-n"], ["routerLink", "/cart-details"], [1, "total"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function CartStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](4, 2, ctx.totalPrice, "USD"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.totalQuantity);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart-status',
            templateUrl: './cart-status.component.html',
            styleUrls: ['./cart-status.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/product-list/product-list.component */
      "a6FK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/product-details/product-details.component */
      "ZQA1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");
      /* harmony import */


      var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/cart-details/cart-details.component */
      "50ZR");
      /* harmony import */


      var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/checkout/checkout.component */
      "PEC5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var routes = [{
        path: 'checkout',
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]
      }, {
        path: 'cart-details',
        component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"]
      }, {
        path: 'products/:id',
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"]
      }, {
        path: 'search/:keyword',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'category/:id',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'category',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'products',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/products',
        pathMatch: 'full'
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__["CartStatusComponent"], _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__["CartStatusComponent"], _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZChD":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/product-category-menu/product-category-menu.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProductCategoryMenuComponent */

    /***/
    function ZChD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductCategoryMenuComponent", function () {
        return ProductCategoryMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ProductCategoryMenuComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tempProductCategory_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/category/", tempProductCategory_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tempProductCategory_r1.categoryName, " ");
        }
      }

      var ProductCategoryMenuComponent = /*#__PURE__*/function () {
        function ProductCategoryMenuComponent(productService) {
          _classCallCheck(this, ProductCategoryMenuComponent);

          this.productService = productService;
        }

        _createClass(ProductCategoryMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listProductCategories();
          }
        }, {
          key: "listProductCategories",
          value: function listProductCategories() {
            var _this8 = this;

            this.productService.getProductCategories().subscribe(function (data) {
              console.log('Product Categories=' + JSON.stringify(data));
              _this8.productCategories = data;
            });
          }
        }]);

        return ProductCategoryMenuComponent;
      }();

      ProductCategoryMenuComponent.??fac = function ProductCategoryMenuComponent_Factory(t) {
        return new (t || ProductCategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
      };

      ProductCategoryMenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductCategoryMenuComponent,
        selectors: [["app-product-category-menu"]],
        decls: 4,
        vars: 1,
        consts: [[1, "menu-sidebar-content", "js-scrollbar1"], [1, "navbar-sidebar"], [1, "list-unstyled", "navbar-list"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active-link", 3, "routerLink"]],
        template: function ProductCategoryMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductCategoryMenuComponent_li_3_Template, 3, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productCategories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3J5LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductCategoryMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-category-menu',
            templateUrl: './product-category-menu.component.html',
            styleUrls: ['./product-category-menu.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZQA1":
    /*!*************************************************************************!*\
      !*** ./src/app/components/product-details/product-details.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function ZQA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_common_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/product */
      "UoNx");
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(productService, cartService, route) {
          _classCallCheck(this, ProductDetailsComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
          this.product = new src_app_common_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.route.paramMap.subscribe(function () {
              _this9.handleProductDetails();
            });
          }
        }, {
          key: "handleProductDetails",
          value: function handleProductDetails() {
            var _this10 = this;

            // get the "id" param string. convert string to a number using the "+" symbol
            var theProductId = +this.route.snapshot.paramMap.get('id');
            this.productService.getProduct(theProductId).subscribe(function (data) {
              _this10.product = data;
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            console.log("Adding to cart: ".concat(this.product.name, ", ").concat(this.product.unitPrice));
            var theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__["CartItem"](this.product);
            this.cartService.addToCart(theCartItem);
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.??fac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      ProductDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        decls: 17,
        vars: 7,
        consts: [[1, "detail-section"], [1, "container-fluid"], [1, "detail-img", 3, "src"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["routerLink", "/products", 1, "mt-5"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_Template_button_click_8_listener() {
              return ctx.addToCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Add to cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Back to Product List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 4, ctx.product.unitPrice, "USD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.description);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "a6FK":
    /*!*******************************************************************!*\
      !*** ./src/app/components/product-list/product-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function a6FK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_div_4_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var tempProduct_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.addToCart(tempProduct_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tempProduct_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/products/", tempProduct_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", tempProduct_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/products/", tempProduct_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tempProduct_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](9, 5, tempProduct_r2.unitPrice, "USD"));
        }
      }

      function ProductListComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No products found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(productService, cartService, route) {
          _classCallCheck(this, ProductListComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
          this.products = [];
          this.currentCategoryId = 1;
          this.previousCategoryId = 1;
          this.searchMode = false; // new properties for pagination

          this.thePageNumber = 1;
          this.thePageSize = 5;
          this.theTotalElements = 0;
          this.previousKeyword = null;
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.route.paramMap.subscribe(function () {
              _this11.listProducts();
            });
          }
        }, {
          key: "listProducts",
          value: function listProducts() {
            this.searchMode = this.route.snapshot.paramMap.has('keyword');

            if (this.searchMode) {
              this.handleSearchProducts();
            } else {
              this.handleListProducts();
            }
          }
        }, {
          key: "handleSearchProducts",
          value: function handleSearchProducts() {
            var theKeyword = this.route.snapshot.paramMap.get('keyword'); // if we have a different keyword than previous
            // then set thePageNumber to 1

            if (this.previousKeyword != theKeyword) {
              this.thePageNumber = 1;
            }

            this.previousKeyword = theKeyword;
            console.log("keyword=".concat(theKeyword, ", thePageNumber=").concat(this.thePageNumber)); // now search for the products using keyword

            this.productService.searchProductsPaginate(this.thePageNumber - 1, this.thePageSize, theKeyword).subscribe(this.processResult());
          }
        }, {
          key: "handleListProducts",
          value: function handleListProducts() {
            // check if "id" parameter is available
            var hasCategoryId = this.route.snapshot.paramMap.has('id');

            if (hasCategoryId) {
              // get the "id" param string. convert string to a number using the "+" symbol
              this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
            } else {
              // not category id available ... default to category id 1
              this.currentCategoryId = 1;
            } //
            // Check if we have a different category than previous
            // Note: Angular will reuse a component if it is currently being viewed
            //
            // if we have a different category id than previous
            // then set thePageNumber back to 1


            if (this.previousCategoryId != this.currentCategoryId) {
              this.thePageNumber = 1;
            }

            this.previousCategoryId = this.currentCategoryId;
            console.log("currentCategoryId=".concat(this.currentCategoryId, ", thePageNumber=").concat(this.thePageNumber)); // now get the products for the given category id

            this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId).subscribe(this.processResult());
          }
        }, {
          key: "processResult",
          value: function processResult() {
            var _this12 = this;

            return function (data) {
              _this12.products = data._embedded.products;
              _this12.thePageNumber = data.page.number + 1;
              _this12.thePageSize = data.page.size;
              _this12.theTotalElements = data.page.totalElements;
            };
          }
        }, {
          key: "updatePageSize",
          value: function updatePageSize(pageSize) {
            this.thePageSize = pageSize;
            this.thePageNumber = 1;
            this.listProducts();
          }
        }, {
          key: "addToCart",
          value: function addToCart(theProduct) {
            console.log("Adding to cart: ".concat(theProduct.name, ", ").concat(theProduct.unitPrice)); // TODO ... do the real work

            var theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"](theProduct);
            this.cartService.addToCart(theCartItem);
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.??fac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      ProductListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductListComponent,
        selectors: [["app-product-list"]],
        decls: 27,
        vars: 7,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "footer-pagination"], [1, "col-md-6"], [1, "col-md-9", 2, "padding-left", "30%"], [3, "page", "pageSize", "collectionSize", "maxSize", "boundaryLinks", "pageChange"], [1, "col-md-3", "mt-2", 2, "text-align", "right"], [1, "mr-2"], [3, "change"], ["selected", "true"], [1, "col-md-3"], [1, "product-box"], [3, "routerLink"], [1, "img-responsive", 3, "src"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductListComponent_div_4_Template, 12, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductListComponent_div_5_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngb-pagination", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener($event) {
              return ctx.thePageNumber = $event;
            })("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener() {
              return ctx.listProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Page Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductListComponent_Template_select_change_16_listener($event) {
              return ctx.updatePageSize($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.products == null ? null : ctx.products.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("page", ctx.thePageNumber)("pageSize", ctx.thePageSize)("collectionSize", ctx.theTotalElements)("maxSize", 5)("boundaryLinks", true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-list',
            templateUrl: './product-list-grid.component.html',
            styleUrls: ['./product-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.cartItems = [];
          this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        }

        _createClass(CartService, [{
          key: "addToCart",
          value: function addToCart(theCartItem) {
            // check if we already have the item in our cart
            var alreadyExistsInCart = false;
            var existingCartItem = undefined;

            if (this.cartItems.length > 0) {
              // find the item in the cart based on item id
              existingCartItem = this.cartItems.find(function (tempCartItem) {
                return tempCartItem.id === theCartItem.id;
              }); // check if we found it

              alreadyExistsInCart = existingCartItem != undefined;
            }

            if (alreadyExistsInCart) {
              // increment the quantity
              existingCartItem.quantity++;
            } else {
              // just add the item to the array
              this.cartItems.push(theCartItem);
            } // compute cart total price and total quantity


            this.computeCartTotals();
          }
        }, {
          key: "computeCartTotals",
          value: function computeCartTotals() {
            var totalPriceValue = 0;
            var totalQuantityValue = 0;

            var _iterator = _createForOfIteratorHelper(this.cartItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var currentCartItem = _step.value;
                totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
                totalQuantityValue += currentCartItem.quantity;
              } // publish the new values ... all subscribers will receive the new data

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.totalPrice.next(totalPriceValue);
            this.totalQuantity.next(totalQuantityValue); // log cart data just for debugging purposes

            this.logCartData(totalPriceValue, totalQuantityValue);
          }
        }, {
          key: "logCartData",
          value: function logCartData(totalPriceValue, totalQuantityValue) {
            console.log('Contents of the cart');

            var _iterator2 = _createForOfIteratorHelper(this.cartItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var tempCartItem = _step2.value;
                var subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
                console.log("name: ".concat(tempCartItem.name, ", quantity=").concat(tempCartItem.quantity, ", unitPrice=").concat(tempCartItem.unitPrice, ", subTotalPrice=").concat(subTotalPrice));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            console.log("totalPrice: ".concat(totalPriceValue.toFixed(2), ", totalQuantity: ").concat(totalQuantityValue));
            console.log('----');
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(theCartItem) {
            theCartItem.quantity--;

            if (theCartItem.quantity === 0) {
              this.remove(theCartItem);
            } else {
              this.computeCartTotals();
            }
          }
        }, {
          key: "remove",
          value: function remove(theCartItem) {
            // get index of item in the array
            var itemIndex = this.cartItems.findIndex(function (tempCartItem) {
              return tempCartItem.id === theCartItem.id;
            }); // if found, remove the item from the array at the given index

            if (itemIndex > -1) {
              this.cartItems.splice(itemIndex, 1);
              this.computeCartTotals();
            }
          }
        }]);

        return CartService;
      }();

      CartService.??fac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CartService,
        factory: CartService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zTuY":
    /*!****************************************************!*\
      !*** ./src/app/validators/luv2-shop-validators.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopValidators */

    /***/
    function zTuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopValidators", function () {
        return Luv2ShopValidators;
      });

      var Luv2ShopValidators = /*#__PURE__*/function () {
        function Luv2ShopValidators() {
          _classCallCheck(this, Luv2ShopValidators);
        }

        _createClass(Luv2ShopValidators, null, [{
          key: "notOnlyWhitespace",
          // whitespace validation
          value: function notOnlyWhitespace(control) {
            // check if string only contains whitespace
            if (control.value != null && control.value.trim().length === 0) {
              // invalid, return error object
              return {
                'notOnlyWhitespace': true
              };
            } else {
              // valid, return null
              return null;
            }
          }
        }]);

        return Luv2ShopValidators;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map