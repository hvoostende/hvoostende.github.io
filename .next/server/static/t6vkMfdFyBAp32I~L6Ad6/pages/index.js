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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  green: '#778E7F',
  lightGreen: '#A6B5AC',
  lightGreenExtra: '#B2BFB7',
  darkGreen: '#3D4840',
  lightGrey: '#F5F6F8',
  grey: '#767b7f',
  darkGrey: '#3A3C42',
  white: 'white',
  red: '#EB3941',
  blue: '#2E3191'
};
var breakpoints = {
  xs: {
    min: 0,
    max: 767
  },
  // Small devices (tablets)
  sm: {
    min: 768,
    max: 991
  },
  // Medium devices (desktops)
  md: {
    min: 992,
    max: 1199
  },
  // Large devices (large desktops)
  lg: {
    min: 1200
  }
};
var grid = {
  maxWidth: 1440,
  gutterWidth: 36,
  outsideGutterWidth: 18,
  columnWidth: 64,
  numColums: 12
};
var gridPercentages = {
  gutterWidth: 100 / grid.maxWidth * grid.gutterWidth,
  outsideGutterWidth: 100 / grid.maxWidth * grid.outsideGutterWidth,
  columnWidth: 100 / grid.maxWidth * grid.columnWidth
};
var device = {
  phone: "(max-width: ".concat(breakpoints.xs.max, "px)"),
  tablet: "(min-width: ".concat(breakpoints.sm.min, "px) and (max-width: ").concat(breakpoints.sm.max, "px)"),
  laptop: "(min-width: ".concat(breakpoints.md.min, "px) and (max-width: ").concat(breakpoints.md.max, "px)"),
  desktop: "(min-width: ".concat(breakpoints.lg.min, "px)")
};
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: colors,
  breakpoints: breakpoints,
  device: device,
  grid: grid,
  gridPercentages: gridPercentages
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 125%\n  margin-top: 50px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 375%\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: red;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 100px 0 150px 0 ;\n  background-color: black;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: calc(100% - 10vw);\n  max-width: 1000px\n  margin: 0 auto;\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media ", " {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FlexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
  return props.theme.device.phone;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var Red = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text(_templateObject6());
var Styledh1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject7());
var Styledp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject8());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledh1, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "code"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, "fmt.Println(\u201Cused golang to build a smart EVSE controller\u201D)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, "System.out.println(\u201Cused java for the backend of various projects\u201C);"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, "println(\u201Cused scala with akka for various backends\u201C)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, "alert( \u2018used javascript with react and redux for various frontends\u2019 );"))))));
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n\n  @media ", " {\n    display: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 125%\n  margin-top: 50px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 375%\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: red;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 0 150px 0;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: calc(100% - 10vw);\n  max-width: 1000px\n  margin: 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media ", " {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FlexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
  return props.theme.device.phone;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var Red = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text(_templateObject6());
var Styledh1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject7());
var Styledp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject8());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9(), function (props) {
  return props.theme.device.phone;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledh1, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "h a n"), " v a n o o s t e n d e")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "han"), " writes code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "han"), " has fun with computers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "han"), " automates tests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "han"), " builds pipelines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, null, "han ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, null, "<3"), " to meet new people [contact]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/images/programmer.svg",
    width: "400",
    height: "380",
    alt: "programmer"
  }))))));
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    flex-shrink: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: AndaleMono;\n    font-weight: 400;\n    src: url(../../static/fonts/AndaleMono.woff2),\n    url(../../static/fonts/AndaleMono.woff);\n  }\n\n  @font-face {\n    font-family: AndaleMono;\n    font-weight: 700;\n    src: url(../../static/fonts/AndaleMono.woff2),\n    url(../../static/fonts/AndaleMono.woff);\n  }\n\nhtml {\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n    font-family: 'AndaleMono';\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    height: 100%;\n    line-height: 1.5;\n\n   > div:first-child {\n      height: 100%;\n    }\n  }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* eslint-disable no-unused-expressions */

Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (function (children) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", children)));
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hanvanoostende__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// import Link from 'next/link'
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )






var home = function home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hanvanoostende__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Code__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "fun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ })
/******/ ]);