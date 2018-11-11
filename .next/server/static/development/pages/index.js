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

/***/ "./pages/components/Code.js":
/*!**********************************!*\
  !*** ./pages/components/Code.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hvoostende/Code/oldsite/hvoostende.github.io/pages/components/Code.js";

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledh1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "code"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "fmt.Println(\u201Cused golang to build a smart EVSE controller\u201D)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "System.out.println(\u201Cused java for the backend of various projects\u201C);"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "println(\u201Cused scala with akka for various backends\u201C)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "alert( \u2018used javascript with react and redux for various frontends\u2019 );"))))));
});

/***/ }),

/***/ "./pages/components/Hanvanoostende.js":
/*!********************************************!*\
  !*** ./pages/components/Hanvanoostende.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hvoostende/Code/oldsite/hvoostende.github.io/pages/components/Hanvanoostende.js";

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledh1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "h a n"), " v a n o o s t e n d e")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "han"), " writes code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "han"), " has fun with computers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "han"), " automates tests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "han"), " builds pipelines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styledp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "han ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "<3"), " to meet new people [contact]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/programmer.svg",
    width: "400",
    height: "380",
    alt: "icon of cafienne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))))));
});

/***/ }),

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./pages/components/theme.js");
var _jsxFileName = "/Users/hvoostende/Code/oldsite/hvoostende.github.io/pages/components/Layout.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", _extends({}, children, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./pages/components/theme.js":
/*!***********************************!*\
  !*** ./pages/components/theme.js ***!
  \***********************************/
/*! exports provided: default */
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hanvanoostende__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Hanvanoostende */ "./pages/components/Hanvanoostende.js");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Code */ "./pages/components/Code.js");
var _jsxFileName = "/Users/hvoostende/Code/oldsite/hvoostende.github.io/pages/index.js";
// import Link from 'next/link'
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )






var home = function home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hanvanoostende__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Code__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "fun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map