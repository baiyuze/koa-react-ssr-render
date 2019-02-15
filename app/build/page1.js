(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/render/serverRouter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./web/action/count.js":
/*!*****************************!*\
  !*** ./web/action/count.js ***!
  \*****************************/
/*! exports provided: set, setData, computedAdd, setValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setData\", function() { return setData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computedAdd\", function() { return computedAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\nvar set = function set(value) {\n  return {\n    type: 'SET_COUNTER'\n  };\n};\nvar setData = function setData(value) {\n  return {\n    type: 'SET_VALUE',\n    value: value\n  };\n};\nvar computedAdd = function computedAdd() {\n  return function (dispatch, getState) {\n    dispatch(set());\n  };\n};\nvar setValue = function setValue(val) {\n  return function (dispatch, getState) {\n    dispatch(setData(val));\n  };\n};\n\n//# sourceURL=webpack:///./web/action/count.js?");

/***/ }),

/***/ "./web/components/layout/index.jsx":
/*!*****************************************!*\
  !*** ./web/components/layout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var action_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! action/count */ \"./web/action/count.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Layout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Layout, _Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this));\n  }\n\n  _createClass(Layout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/\",\n        style: {\n          color: 'pink',\n          fontSize: 50\n        }\n      }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/page2\",\n        style: {\n          color: 'pink',\n          fontSize: 50\n        }\n      }, \"\\u6B21\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"\"\n      }, this.props.counter), this.props.children);\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    counter: state.counter,\n    state: state\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])(action_count__WEBPACK_IMPORTED_MODULE_3__, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Layout));\n\n//# sourceURL=webpack:///./web/components/layout/index.jsx?");

/***/ }),

/***/ "./web/pages/page/index.jsx":
/*!**********************************!*\
  !*** ./web/pages/page/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var action_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! action/count */ \"./web/action/count.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ \"./web/pages/page/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Counter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Counter, _React$Component);\n\n  function Counter() {\n    var _this;\n\n    _classCallCheck(this, Counter);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this));\n    _this.state = {\n      test: '我是测试'\n    };\n    return _this;\n  }\n\n  _createClass(Counter, [{\n    key: \"onClick\",\n    value: function onClick() {\n      this.props.computedAdd();\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_4___default()('http://127.0.0.1:3000/test').then(function (json) {\n        return json.data;\n      }).then(function (res) {\n        _this2.props.setValue(res.data);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"title-name\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.props.counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, this.state.test), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.onClick.bind(this)\n      }, \"\\u70B9\\u6211\\u52A01\"));\n    }\n  }]);\n\n  return Counter;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    counter: state.counter,\n    value: state.value\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(action_count__WEBPACK_IMPORTED_MODULE_3__, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Counter));\n\n//# sourceURL=webpack:///./web/pages/page/index.jsx?");

/***/ }),

/***/ "./web/pages/page/index.less":
/*!***********************************!*\
  !*** ./web/pages/page/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".title-name {\\n  font-size: 18px;\\n  color: #2F3872;\\n  letter-spacing: 0;\\n  text-align: center;\\n  font-weight: 500;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./web/pages/page/index.less?");

/***/ }),

/***/ "./web/pages/page2/index.jsx":
/*!***********************************!*\
  !*** ./web/pages/page2/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./web/pages/page2/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction onClick() {\n  console.log(\"我是页面2\");\n}\n\nfunction Title(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title-name\"\n  }, \"\\u4E13\\u680F 4Ark 5\\u5C0F\\u65F6\\u524D \\u7A0B\\u5E8F\\u5458 \\u5206\\u4EAB\\u4E00\\u4E9B\\u597D\\u7528\\u7684\\u7F51\\u7AD9 73 5 \\u4E13\\u680F saltfish666 5\\u5C0F\\u65F6\\u524D Vue.js Vue \\u6E90\\u7801\\u4E2D\\u4E00\\u4E9Butil\\u51FD\\u6570 45 3 \\u4E13\\u680F \\u5609\\u4E50MrMaple 1\\u5C0F\\u65F6\\u524D \\u7A0B\\u5E8F\\u5458\\u5E74\\u7EC8\\u603B\\u7ED3 \\u4E00\\u4E2A\\u6280\\u672F\\u521B\\u4E1A\\u8005\\u76842018\\u5E74\\u5EA6\\u56DE\\u987E\\u548C\\u603B\\u7ED3 | \\u6398\\u91D1\\u5E74\\u5EA6\\u5F81\\u6587 4 3 \\u5C0F\\u518C\\u4FEE\\u8A00 \\u524D\\u7AEF\\u6027\\u80FD\\u4F18\\u5316\\u539F\\u7406\\u4E0E\\u5B9E\\u8DF5 \\u8D2D\\u4E70\\u4EBA\\u6570: 4886 \\u7279\\u4EF7: 19.9\\u5143 \\u5206\\u4EAB \\u4E13\\u680F \\u6975\\u697D 1\\u5C0F\\u65F6\\u524D Node.js\\u5FAE\\u4FE1\\u5C0F\\u7A0B\\u5E8F \\u5FAE\\u4FE1\\u5C0F\\u7A0B\\u5E8Fwebsocket\\u804A\\u5929\\u5BA4 4 \\u4E13\\u680F call_me_R 3\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF\\u524D\\u7AEF\\u6846\\u67B6 \\u3010\\u8BD1\\u3011\\u6846\\u67B6\\u4E0E\\u5E93\\u7684\\u5DEE\\u5F02 12 6 \\u4E13\\u680F \\u5927\\u7FF0\\u4ED4\\u4ED4 3\\u5C0F\\u65F6\\u524D \\u9762\\u8BD5 \\u5237\\u524D\\u7AEF\\u9762\\u7ECF\\u7B14\\u8BB0\\uFF08\\u4E03\\uFF09 5 \\u4E13\\u680F \\u5C0F\\u751F\\u65B9\\u52E4 4\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF \\u3010\\u524D\\u7AEF\\u8BCD\\u5178\\u3011\\u7EE7\\u627F\\uFF08\\u4E8C\\uFF09 - \\u201C\\u56DE\\u201D\\u7684\\u516B\\u79CD\\u5199\\u6CD5 20 HollisChuang 6\\u5C0F\\u65F6\\u524D \\u7A0B\\u5E8F\\u5458\\u7F16\\u7A0B\\u8BED\\u8A00 \\u6307\\u5F15\\u8D8B\\u52BF\\u4E0E\\u65B9\\u5411\\uFF012019\\u5F00\\u53D1\\u8005\\u8C03\\u67E5\\u62A5\\u544A\\u51FA\\u7089 5 6 \\u4E13\\u680F boomyao 3\\u5C0F\\u65F6\\u524D React.js React\\u662F\\u5982\\u4F55\\u533A\\u5206class\\u548Cfunction\\u7684\\uFF1F 9 \\u4E13\\u680F wznonstop 3\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF\\u6398\\u91D1\\u7FFB\\u8BD1\\u8BA1\\u5212 [\\u8BD1] 2019 \\u524D\\u7AEF\\u6027\\u80FD\\u4F18\\u5316\\u5E74\\u5EA6\\u603B\\u7ED3 \\u2014 \\u7B2C\\u4E94\\u90E8\\u5206 7 \\u70ED \\u4E13\\u680F frontdog 17\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF web\\u9875\\u9762\\u5F55\\u5C4F\\u5B9E\\u73B0 89 7 \\u4E13\\u680F \\u8D85\\u4EBA\\u6C6A\\u5C0F\\u5EFA 6\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF\\u7B97\\u6CD5 \\u57FA\\u4E8E\\u6876\\u7684\\u57FA\\u6570\\u6392\\u5E8F 12 \\u4E13\\u680F \\u795E\\u5947\\u6392\\u9AA8 3\\u5C0F\\u65F6\\u524D \\u524D\\u7AEF \\u6D45\\u6790\\u524D\\u7AEF\\u7684\\u6A21\\u5757\\u5316 8 \\u4E13\\u680F \\u6211\\u662F\\u4E00\\u4E2A\\u524D\\u7AEF 3\\u5C0F\\u65F6\\u524D JavaScript Javascript \\u4E8B\\u4EF6\\u5FAA\\u73AFevent loop 6 freefrontend 5\\u5C0F\\u65F6\\u524D CSS 14 CSS Button Click Effects 6 \\u4E13\\u680F boomyao 22\\u5C0F\\u65F6\\u524D React.js \\u4E3A\\u4EC0\\u4E48\\u6211\\u4EEC\\u8981\\u6DFB\\u52A0 super(props) \\uFF1F 36 3 \\u70ED \\u5F20\\u71A0 1\\u5929\\u524D Vue.jsTypeScript \\u503C\\u5F97\\u4E00\\u770B\\uFF0CVue \\u4F5C\\u8005\\u5C24\\u96E8\\u6EAA\\u7684\\u56DE\\u7B54\\u3010TypeScript \\u4E0D\\u9002\\u5408\\u5728 vue \\u4E1A\\u52A1\\u5F00\\u53D1\\u4E2D\\u4F7F\\u7528\\u5417\\uFF1F\\u3011 45 9 \\u4E13\\u680F \\u5357\\u6CE2 22\\u5C0F\\u65F6\\u524D JavaScript\\u9762\\u8BD5 JS\\u4E13\\u9898\\u4E4B\\u7EE7\\u627F 29 1 \\u4E13\\u680F MarcusY 1\\u5929\\u524D CSS \\u3010\\u8BD1\\u3011\\u901A\\u8FC7css\\uFF0C\\u7528\\u4E00\\u4E2Adiv\\u505A\\u4E00\\u4E2A\\u829D\\u58EB\\u6C49\\u5821 51 14 \\u7B80\\u5355\\u535F\\u5BB9\\u6613 1\\u5929\\u524D Vue.js vue\\u4FEE\\u9970\\u7B26--\\u53EF\\u80FD\\u662F\\u4E1C\\u534A\\u7403\\u6700\\u8BE6\\u7EC6\\u7684\\u6587\\u6863\\uFF08\\u6ED1\\u7A3D\\uFF09 114 4 \\u4E13\\u680F sea_ljf 1\\u5929\\u524D JavaScript \\u77E5\\u591A\\u4E00\\u70B9\\u4E8C\\u8FDB\\u5236\\u4E2D\\u7684\\u8D1F\\u6570 45 6 \\u70ED huangsw 1\\u5E74\\u524D \\u524D\\u7AEF \\u5F3A\\u70C8\\u63A8\\u8350--\\u57FA\\u4E8E vue2.x table \\u7EC4\\u4EF6 386 9 \\u4E13\\u680F serialcoder 1\\u5929\\u524D JavaScript\\u51FD\\u6570\\u5F0F\\u7F16\\u7A0B \\u518D\\u8C08 JavaScript \\u51FD\\u6570\\u5F0F\\u7F16\\u7A0B\\u7684\\u9002\\u7528\\u6027 45 2 \\u4E13\\u680F \\u5357\\u6CE2 1\\u5929\\u524D JavaScript\\u9762\\u8BD5 JS\\u4E13\\u9898\\u4E4B\\u5783\\u573E\\u56DE\\u6536 66 \\u70ED \\u4E13\\u680F \\u82AC\\u8FBETz 2\\u5929\\u524D CSS \\u5982\\u4F55\\u4F7F\\u7528css\\u7ED8\\u5236\\u94BB\\u77F3 66 5 \\u4E13\\u680F caiyongji 8\\u6708\\u524D \\u9762\\u8BD5Java \\u4F60\\u7684\\u77E5\\u8BC6\\u6B7B\\u89D2\\u4E0D\\u80FD\\u5426\\u5B9A\\u4F60\\u7684\\u6280\\u672F\\u80FD\\u529B 38 10 \\u4E13\\u680F \\u6398\\u5893\\u4EBA4449 1\\u5929\\u524D \\u5FAE\\u4FE1 \\u5FAE\\u4FE1\\u652F\\u4ED8\\u7533\\u8BF7\\u76F8\\u5173\\u95EE\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onClick\n  }, \"\\u6211\\u662F\\u6309\\u94AE\"));\n} // if(process.env.WEBPACK_WEB) {\n//   ReactDOM.hydrate(<Title/>, document.querySelector('#app'));\n// } else {\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title); // }\n\n//# sourceURL=webpack:///./web/pages/page2/index.jsx?");

/***/ }),

/***/ "./web/pages/page2/index.less":
/*!************************************!*\
  !*** ./web/pages/page2/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".title-name {\\n  font-size: 18px;\\n  color: #2F3872;\\n  letter-spacing: 0;\\n  text-align: center;\\n  font-weight: 500;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./web/pages/page2/index.less?");

/***/ }),

/***/ "./web/reducer/counter.js":
/*!********************************!*\
  !*** ./web/reducer/counter.js ***!
  \********************************/
/*! exports provided: counter, value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"value\", function() { return value; });\nvar counter = function counter() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SET_COUNTER':\n      return state += 1;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\nvar value = function value() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SET_VALUE':\n      return action.value;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\n\n//# sourceURL=webpack:///./web/reducer/counter.js?");

/***/ }),

/***/ "./web/reducer/index.js":
/*!******************************!*\
  !*** ./web/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ \"./web/reducer/counter.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_objectSpread({}, _counter__WEBPACK_IMPORTED_MODULE_1__));\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./web/reducer/index.js?");

/***/ }),

/***/ "./web/render/serverRouter.js":
/*!************************************!*\
  !*** ./web/render/serverRouter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index.js */ \"./web/store/index.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router.js */ \"./web/router.js\");\n\n\n\n\n\n\nfunction ServerRender(req, initStore) {\n  var store = Object(_store_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(JSON.parse(initStore.store));\n  return function (props, context) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerRender);\n\n//# sourceURL=webpack:///./web/render/serverRouter.js?");

/***/ }),

/***/ "./web/router.js":
/*!***********************!*\
  !*** ./web/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_page_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page/index.jsx */ \"./web/pages/page/index.jsx\");\n/* harmony import */ var _pages_page2_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page2/index.jsx */ \"./web/pages/page2/index.jsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout */ \"./web/components/layout/index.jsx\");\n\n\n\n\n\n\n\nfunction RenderRouter() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _pages_page_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/page2\",\n    component: _pages_page2_index_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderRouter);\n\n//# sourceURL=webpack:///./web/router.js?");

/***/ }),

/***/ "./web/store/index.js":
/*!****************************!*\
  !*** ./web/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ \"./web/reducer/index.js\");\n\n\n\n\nvar configureStore = function configureStore(initStore) {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initStore, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)); // if (module.hot) {\n  //   // Enable Webpack hot module replacement for reducers\n  //   module.hot.accept('../reducers', () => {\n  //     store.replaceReducer(rootReducer)\n  //   })\n  // }\n\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./web/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ })));