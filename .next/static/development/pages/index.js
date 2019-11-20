(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fshostako_vc%2FmyPrograms%2Forannyaro-maker%2Fpages%2Findex.tsx!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fshostako_vc%2FmyPrograms%2Forannyaro-maker%2Fpages%2Findex.tsx ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ea92a4d9664833a26066 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ea92a4d9664833a26066 */ "dll-reference dll_ea92a4d9664833a26066"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_create_orannyaro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/create-orannyaro */ "./src/components/create-orannyaro.tsx");
var _jsxFileName = "/Users/shostako_vc/myPrograms/orannyaro-maker/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      word = _useState[0],
      setWord = _useState[1];

  var handleChange = function handleChange(e) {
    setWord(e.target.value);
  };

  var handleClick = function handleClick(e) {
    console.log("".concat(word, "\u306A\u3093\u304B\u304A\u3089\u3093\u3084\u308D\u301C\u301C\u301C\u301Cwwwwwww"));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u304A\u3089\u3093\u3084\u308D\u30E1\u30FC\u30AB\u30FC"), __jsx(_src_components_create_orannyaro__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: handleChange,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, word));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/create-orannyaro.tsx":
/*!*********************************************!*\
  !*** ./src/components/create-orannyaro.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/shostako_vc/myPrograms/orannyaro-maker/src/components/create-orannyaro.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var CreateOrannyaro = function CreateOrannyaro(_ref) {
  var onChange = _ref.onChange,
      onClick = _ref.onClick;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("input", {
    type: "text",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("input", {
    type: "button",
    onClick: onClick,
    value: "\u305D\u3093\u306A\u3084\u3064\u304A\u3089\u3093\u3084\u308D\uFF01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateOrannyaro);

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fshostako_vc%2FmyPrograms%2Forannyaro-maker%2Fpages%2Findex.tsx ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fshostako_vc%2FmyPrograms%2Forannyaro-maker%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fshostako_vc%2FmyPrograms%2Forannyaro-maker%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_ea92a4d9664833a26066":
/*!*******************************************!*\
  !*** external "dll_ea92a4d9664833a26066" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ea92a4d9664833a26066;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map