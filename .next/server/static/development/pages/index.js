module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexPresenter */ "./pages/index/indexPresenter.js");

/* harmony default export */ __webpack_exports__["default"] = (_indexPresenter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/index/index.less":
/*!********************************!*\
  !*** ./pages/index/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index/indexPresenter.js":
/*!***************************************!*\
  !*** ./pages/index/indexPresenter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);




var Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    autoplay: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "3")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "4"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    sm: 24,
    md: 16,
    lg: 16,
    xl: 16
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2857669609"
  }, "\uC5B4\uCA4C\uACE0\uC800\uCA4C\uACE0 \uB2F9\uC2E0\uC758 \uC544\uBC14\uD0C0\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8,
    xl: 8
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    size: "large",
    style: {
      marginTop: '100px'
    }
  }, "\uC2DC\uC791\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2857669609",
    css: "p.jsx-2857669609{margin-top:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXl1bi9Eb2N1bWVudHMvd29ya3NwYWNlL2F2YXRhcm1ha2VyLWZyb250ZW5kL3BhZ2VzL2luZGV4L2luZGV4UHJlc2VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCd0IsQUFJZ0IsaUJBQUMiLCJmaWxlIjoiL1VzZXJzL3NheXVuL0RvY3VtZW50cy93b3Jrc3BhY2UvYXZhdGFybWFrZXItZnJvbnRlbmQvcGFnZXMvaW5kZXgvaW5kZXhQcmVzZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dCwgQ2Fyb3VzZWwsIFJvdywgQ29sLCBCdXR0b259IGZyb20gJ2FudGQnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuXG5jb25zdCB7Q29udGVudH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0ICh7ZGF0YX0pID0+IChcbiAgICA8PlxuICAgIDxDb250ZW50PlxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXk+XG4gICAgICAgICAgICA8ZGl2PjxoMz4xPC9oMz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGgzPjI8L2gzPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48aDM+MzwvaDM+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxoMz40PC9oMz48L2Rpdj5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsxNn0gbGc9ezE2fSB4bD17MTZ9PlxuICAgICAgICAgICAgICAgIDxwPuyWtOypjOqzoOyggOypjOqzoCDri7nsi6DsnZgg7JWE67CU7YOA66W8IOunjOuTpOyWtOuztOyEuOyalCE8L3A+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXs4fSBsZz17OH0geGw9ezh9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPSdsYXJnZScgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMDBweCd9fT7si5zsnpHtlZjquLA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1Jvdz5cbiAgICA8L0NvbnRlbnQ+XG4gICAgPC8+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/sayun/Documents/workspace/avatarmaker-frontend/pages/index/indexPresenter.js */"
  }))));
});

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index/index.js */"./pages/index/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map