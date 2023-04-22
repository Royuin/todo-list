/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Roboto-Regular.ttf */ \"./src/assets/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font: inherit;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --main-color: #4338ca;\\n  --desaturated-main-color: #818cf8;\\n  --off-white: #f8f0e3;\\n  --mid-grey: #a2a1aa;\\n  --dark-grey: #222;\\n}\\n\\n@font-face {\\n  font-family: 'roboto';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  background-color: var(--desaturated-main-color);\\n  font-family: 'roboto', sans-serif;\\n}\\n\\naside {\\n  background-color: var(--dark-grey);\\n  height: 100vh;\\n  grid-row: 1 / 3;\\n  color: var(--off-white);\\n}\\n\\n.page-wrapper {\\n  display: grid;\\n  grid-template-columns: 1fr 5fr;\\n  grid-template-rows: 1fr 8fr;\\n}\\n\\nheader {\\n  grid-column: 2 / 3;\\n}\\n\\nmain {\\n  grid-column: 2 / 3;\\n  margin-left: 35px;\\n}\\n\\n.card {\\n  display: grid;\\n  width: 300px;\\n  padding: 15px;\\n  background-color: var(--off-white);\\n  border-left: 4px solid var(--main-color);\\n  box-shadow: 10px 10px 20px var(--main-color);\\n}\\n\\n.project {\\n  border: none;\\n  cursor: pointer;\\n  color: var(--off-white);\\n}\\n\\n.project:hover {\\n  border-bottom: solid 3px var(--desaturated-main-color);\\n}\\n\\nform {\\n  background-color: var(--off-white);\\n  max-width: 65%;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 1px solid var(--dark-grey);\\n  border-radius: 10px;\\n  z-index: 10;\\n  position: fixed;\\n  box-shadow: 0 0 200px var(--main-color);\\n  padding: 5vw;\\n  display: grid;\\n}\\n\\nform > * {\\n  font-size: 1.5rem;\\n}\\n\\n.button-style-reset {\\n  cursor: pointer;\\n  border: none;\\n  outline: none;\\n  background: none;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  opacity: 0;\\n  transition: 200ms ease-in-out;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  pointer-events: none;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n.todo-list {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  row-gap: 35px;\\n}\\n\\n.current-project {\\n  border-bottom: solid 3px var(--desaturated-main-color);\\n}\\n\\n.icon {\\n  width: 10%;\\n  height: 10%;\\n}\\n\\n.no-project-wrapper {\\n  font-size: 1.5rem;\\n  background-color: var(--off-white);\\n  max-width: 65%;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 3px solid var(--dark-grey);\\n  border-radius: 10px;\\n  z-index: 10;\\n  position: fixed;\\n  box-shadow: 0 0 200px var(--main-color);\\n  padding: 3vw;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"changeCurrentProjectClass\": () => (/* binding */ changeCurrentProjectClass),\n/* harmony export */   \"changeProjectTodos\": () => (/* binding */ changeProjectTodos),\n/* harmony export */   \"editTodoForm\": () => (/* binding */ editTodoForm),\n/* harmony export */   \"makeProjectForm\": () => (/* binding */ makeProjectForm),\n/* harmony export */   \"makeTodoForm\": () => (/* binding */ makeTodoForm),\n/* harmony export */   \"noProjectError\": () => (/* binding */ noProjectError),\n/* harmony export */   \"removeProjectForm\": () => (/* binding */ removeProjectForm),\n/* harmony export */   \"removeTodoForm\": () => (/* binding */ removeTodoForm),\n/* harmony export */   \"removeTodos\": () => (/* binding */ removeTodos)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete.svg */ \"./src/assets/icons/delete.svg\");\n/* harmony import */ var _assets_icons_file_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/file-edit.svg */ \"./src/assets/icons/file-edit.svg\");\n\n\n\n\nfunction removeTodoForm() {\n  const overlay = document.getElementById('overlay');\n  const todoHeader = document.querySelector('.todo-header');\n  const todoForm = document.querySelector('.todo-form');\n  todoHeader.removeChild(todoForm);\n  overlay.classList.remove('active');\n}\n\nfunction removeTodos() {\n  const todoUl = document.querySelector('.todo-list');\n  while (todoUl.firstChild) {\n    todoUl.removeChild(todoUl.lastChild);\n  }\n}\n\nfunction addTodo(todoArray) {\n  if (todoArray === undefined) {\n    return;\n  }\n  for (let i = 0; i < todoArray.length; i += 1) {\n    const obj = todoArray[i];\n    const ul = document.querySelector('.todo-list');\n    const todoTitle = obj.title;\n    const listItem = document.createElement('li');\n    listItem.dataset.index = todoArray.indexOf(obj);\n    listItem.classList += ' card';\n\n    const itemHeading = document.createElement('h2');\n    itemHeading.textContent = todoTitle;\n    listItem.appendChild(itemHeading);\n\n    const editBtn = document.createElement('button');\n    const editIcon = document.createElement('img');\n    editBtn.classList.add('edit-btn', 'button-style-reset', 'icon');\n    editIcon.src = _assets_icons_file_edit_svg__WEBPACK_IMPORTED_MODULE_2__;\n    editBtn.dataset.index = todoArray.indexOf(obj);\n    editIcon.dataset.index = todoArray.indexOf(obj);\n    editBtn.appendChild(editIcon);\n    listItem.appendChild(editBtn);\n\n    const deleteBtn = document.createElement('button');\n    const deleteIcon = document.createElement('img');\n    deleteIcon.src = _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;\n    deleteBtn.classList.add('delete-button', 'button-style-reset', 'icon');\n    listItem.appendChild(deleteBtn);\n    deleteBtn.appendChild(deleteIcon);\n\n    const priority = document.createElement('select');\n    const lowPriority = document.createElement('option');\n    lowPriority.textContent = 'Low';\n    const mediumPriority = document.createElement('option');\n    mediumPriority.textContent = 'Medium';\n    const hightPriority = document.createElement('option');\n    hightPriority.textContent = 'High';\n    priority.appendChild(lowPriority);\n    priority.appendChild(mediumPriority);\n    priority.appendChild(hightPriority);\n    listItem.appendChild(priority);\n\n    (function setSelected() {\n      const selectOptions = Array.from(priority.options);\n      const found = selectOptions.find(\n        (element) => element.text === obj.priority\n      );\n      found.selected = true;\n    })();\n\n    priority.addEventListener('change', () => {\n      (0,_objects__WEBPACK_IMPORTED_MODULE_0__.updatePriority)(priority);\n    });\n\n    const description = document.createElement('p');\n    description.textContent = obj.description;\n    listItem.appendChild(description);\n\n    const dueDate = document.createElement('input');\n    dueDate.type = 'date';\n    dueDate.value = obj.due;\n    dueDate.classList = 'date';\n    listItem.appendChild(dueDate);\n\n    ul.appendChild(listItem);\n  }\n}\n\nfunction makeTodoForm() {\n  const overlay = document.getElementById('overlay');\n  overlay.classList = 'active';\n\n  const todoHeader = document.querySelector('.todo-header');\n  const form = document.createElement('form');\n  form.classList = 'todo-form';\n  todoHeader.appendChild(form);\n\n  const exitButton = document.createElement('button');\n  exitButton.classList.add('exit-button', 'button-style-reset');\n  exitButton.textContent = 'X';\n  form.appendChild(exitButton);\n\n  const titleLabel = document.createElement('label');\n  titleLabel.for = 'todoTitle';\n  titleLabel.textContent = 'Title';\n  const titleInput = document.createElement('input');\n  titleInput.type = 'text';\n  titleInput.id = 'todoTitle';\n  titleInput.name = 'text';\n  form.appendChild(titleLabel);\n  form.appendChild(titleInput);\n\n  const priorityLabel = document.createElement('label');\n  priorityLabel.for = 'priority';\n  priorityLabel.textContent = 'Priority';\n  const priorityInput = document.createElement('select');\n  priorityInput.id = 'priority';\n  priorityInput.name = 'priority';\n  const lowPriority = document.createElement('option');\n  lowPriority.textContent = 'Low';\n  const mediumPriority = document.createElement('option');\n  mediumPriority.textContent = 'Medium';\n  const hightPriority = document.createElement('option');\n  hightPriority.textContent = 'High';\n  priorityInput.appendChild(lowPriority);\n  priorityInput.appendChild(mediumPriority);\n  priorityInput.appendChild(hightPriority);\n  form.appendChild(priorityLabel);\n  form.appendChild(priorityInput);\n\n  const descriptionLabel = document.createElement('label');\n  descriptionLabel.for = 'descriptionLabel';\n  descriptionLabel.textContent = 'Description';\n  const descriptionTextarea = document.createElement('textarea');\n  descriptionTextarea.id = 'description';\n  descriptionTextarea.id = 'description';\n\n  form.appendChild(descriptionLabel);\n  form.appendChild(descriptionTextarea);\n\n  const dueDateLabel = document.createElement('label');\n  dueDateLabel.for = 'due';\n  dueDateLabel.textContent = 'Date due:';\n  const dueDateInput = document.createElement('input');\n  dueDateInput.type = 'date';\n  dueDateInput.id = 'due';\n  dueDateInput.name = 'due';\n  form.appendChild(dueDateLabel);\n  form.appendChild(dueDateInput);\n\n  const submitBtn = document.createElement('button');\n  submitBtn.textContent = 'Create To-do';\n  submitBtn.type = 'submit';\n  submitBtn.setAttribute('id', 'todo-submit');\n  form.appendChild(submitBtn);\n}\n\nfunction addProject(obj) {\n  const projectTitle = obj.title;\n\n  const projectUl = document.querySelector('.project-list');\n  const newLi = document.createElement('li');\n\n  projectUl.appendChild(newLi);\n\n  const projectBtn = document.createElement('button');\n  projectBtn.className += 'project button-style-reset ';\n  projectBtn.setAttribute('id', projectTitle);\n  projectBtn.textContent = projectTitle;\n  newLi.appendChild(projectBtn);\n}\n\nfunction makeProjectForm() {\n  const overlay = document.getElementById('overlay');\n  overlay.classList = 'active';\n\n  const projectHeader = document.querySelector('.project-header');\n  const form = document.createElement('form');\n  form.classList = 'project-form';\n  projectHeader.appendChild(form);\n\n  const exitButton = document.createElement('button');\n  exitButton.classList.add('exit-button', 'button-style-reset');\n  exitButton.textContent = 'X';\n  form.appendChild(exitButton);\n\n  const titleLabel = document.createElement('label');\n  titleLabel.for = 'projectTitle';\n  titleLabel.textContent = '* Title';\n  titleLabel.style.color = 'black';\n  const titleInput = document.createElement('input');\n  titleInput.type = 'text';\n  titleInput.id = 'projectTitle';\n  titleInput.name = 'text';\n  titleInput.required = true;\n  form.appendChild(titleLabel);\n  form.appendChild(titleInput);\n\n  const invalidMessage = document.createElement('p');\n  invalidMessage.classList = 'invalid';\n  invalidMessage.textContent = 'Must be filled out and cannot use same title';\n  invalidMessage.style.display = 'none';\n  invalidMessage.style.color = 'red';\n  form.appendChild(invalidMessage);\n\n  const submitBtn = document.createElement('button');\n  submitBtn.textContent = 'Create Project';\n  submitBtn.type = 'submit';\n  submitBtn.setAttribute('id', 'project-submit');\n  form.appendChild(submitBtn);\n}\n\nfunction removeProjectForm() {\n  const overlay = document.getElementById('overlay');\n  const projectHeader = document.querySelector('.project-header');\n  const projectForm = document.querySelector('.project-form');\n  projectHeader.removeChild(projectForm);\n  overlay.classList.remove('active');\n}\n\nfunction changeCurrentProjectClass(thisProject) {\n  const projects = document.querySelectorAll('.project');\n  projects.forEach((element) => {\n    if (element.classList.contains('current-project') !== undefined) {\n      element.classList.remove('current-project');\n    }\n    thisProject.classList.add('current-project');\n  });\n}\n\nfunction changeProjectTodos(project) {\n  const todoList = document.querySelector('.todo-list');\n  while (todoList.firstChild) {\n    todoList.removeChild(todoList.lastChild);\n  }\n\n  const todoArray = project.todos;\n  todoArray.forEach((element) => {\n    addTodo(element);\n  });\n}\n\nfunction editTodoForm(todoObj, todoArray) {\n  const overlay = document.getElementById('overlay');\n  overlay.classList = 'active';\n\n  const todoHeader = document.querySelector('.todo-header');\n  const form = document.createElement('form');\n  form.classList = 'todo-form';\n  todoHeader.appendChild(form);\n\n  const exitButton = document.createElement('button');\n  exitButton.classList.add('exit-button', 'button-style-reset');\n  exitButton.textContent = 'X';\n  form.appendChild(exitButton);\n\n  exitButton.addEventListener('click', (event) => {\n    event.preventDefault();\n    removeTodoForm();\n  });\n\n  const titleLabel = document.createElement('label');\n  titleLabel.for = 'todoTitle';\n  titleLabel.textContent = 'Title';\n  const titleInput = document.createElement('input');\n  titleInput.type = 'text';\n  titleInput.id = 'todoTitle';\n  titleInput.name = 'text';\n  titleInput.value = todoObj.title;\n  form.appendChild(titleLabel);\n  form.appendChild(titleInput);\n\n  const priorityLabel = document.createElement('label');\n  priorityLabel.for = 'priority';\n  priorityLabel.textContent = 'Priority';\n  const priorityInput = document.createElement('select');\n  priorityInput.id = 'priority';\n  priorityInput.name = 'priority';\n  const lowPriority = document.createElement('option');\n  lowPriority.textContent = 'Low';\n  const mediumPriority = document.createElement('option');\n  mediumPriority.textContent = 'Medium';\n  const hightPriority = document.createElement('option');\n  hightPriority.textContent = 'High';\n  priorityInput.appendChild(lowPriority);\n  priorityInput.appendChild(mediumPriority);\n  priorityInput.appendChild(hightPriority);\n  form.appendChild(priorityLabel);\n  form.appendChild(priorityInput);\n  priorityInput.value = todoObj.priority;\n\n  const descriptionLabel = document.createElement('label');\n  descriptionLabel.for = 'descriptionLabel';\n  descriptionLabel.textContent = 'Description';\n  const descriptionTextarea = document.createElement('textarea');\n  descriptionTextarea.id = 'description';\n  descriptionTextarea.id = 'description';\n  descriptionTextarea.value = todoObj.description;\n\n  form.appendChild(descriptionLabel);\n  form.appendChild(descriptionTextarea);\n\n  const dueDateLabel = document.createElement('label');\n  dueDateLabel.for = 'due';\n  dueDateLabel.textContent = 'Date due:';\n  const dueDateInput = document.createElement('input');\n  dueDateInput.type = 'date';\n  dueDateInput.id = 'due';\n  dueDateInput.name = 'due';\n  form.appendChild(dueDateLabel);\n  form.appendChild(dueDateInput);\n  dueDateInput.value = todoObj.due;\n\n  const submitBtn = document.createElement('button');\n  submitBtn.textContent = 'Edit To-do';\n  submitBtn.type = 'submit';\n  submitBtn.setAttribute('id', 'edit-todo-submit');\n  form.appendChild(submitBtn);\n\n  submitBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n    todoObj.title = titleInput.value;\n    todoObj.priority = priorityInput.value;\n    todoObj.description = descriptionTextarea.value;\n    todoObj.due = dueDateInput.value;\n\n    removeTodos();\n    addTodo(todoArray);\n    const editBtn = document.querySelectorAll('.edit-btn');\n    editBtn.forEach((element) => {\n      element.addEventListener('click', () => {\n        const todoListItem = element.parentElement;\n\n        const index = todoListItem.dataset.index;\n        const todo = todoArray[index];\n\n        editTodoForm(todo, todoArray);\n      });\n    });\n  });\n}\n\nfunction noProjectError() {\n  const overlay = document.getElementById('overlay');\n  overlay.classList = 'active';\n\n  const todoHeader = document.querySelector('.todo-header');\n\n  const noProjectWrapper = document.createElement('div');\n  noProjectWrapper.classList = 'no-project-wrapper';\n  todoHeader.appendChild(noProjectWrapper);\n\n  const exitButton = document.createElement('button');\n  exitButton.classList.add('exit-button', 'button-style-reset');\n  exitButton.textContent = 'X';\n  noProjectWrapper.appendChild(exitButton);\n\n  const noProjectError = document.createElement('span');\n  noProjectError.classList = 'no-project-error';\n  noProjectError.textContent =\n    \"Oops! Looks like you don't have a project yet. Please make a project before making a todo.\";\n  noProjectWrapper.appendChild(noProjectError);\n\n  exitButton.addEventListener('click', () => {\n    todoHeader.removeChild(noProjectWrapper);\n    overlay.classList.remove('active');\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\n\n\nconst addTodoBtn = document.querySelector('.add-todo');\n\nfunction deleteListener(todoArray) {\n  const deleteBtns = document.querySelectorAll('.delete-button');\n  deleteBtns.forEach((element) => {\n    element.addEventListener('click', () => {\n      const todoUl = document.querySelector('.todo-list');\n      const todoListItem = element.parentElement;\n\n      const index = todoListItem.dataset.index;\n      const todo = todoArray[index];\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.removeTodoObj)(todo);\n      todoUl.removeChild(todoListItem);\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_objects__WEBPACK_IMPORTED_MODULE_2__.projectList);\n    });\n  });\n}\n\nfunction editListener(todoArray) {\n  const editBtn = document.querySelectorAll('.edit-btn');\n  editBtn.forEach((element) => {\n    element.addEventListener('click', () => {\n      const todoListItem = element.parentElement;\n\n      const index = todoListItem.dataset.index;\n      const todo = todoArray[index];\n\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.editTodoForm)(todo, todoArray);\n\n      const editSubmitBtn = document.getElementById('edit-todo-submit');\n\n      editSubmitBtn.addEventListener('click', () => {\n        deleteListener(todoArray);\n        (0,_objects__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_objects__WEBPACK_IMPORTED_MODULE_2__.projectList);\n      });\n    });\n  });\n}\n\nfunction dateListeners(todoArray) {\n  const dates = document.querySelectorAll('.date');\n  dates.forEach((element) => {\n    element.addEventListener('input', () => {\n      const todoListItem = element.parentElement;\n\n      const index = todoListItem.dataset.index;\n      const todo = todoArray[index];\n\n      todo.due = element.value;\n\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_objects__WEBPACK_IMPORTED_MODULE_2__.projectList);\n    });\n  });\n}\n\nfunction projectListeners() {\n  const projectBtns = document.querySelectorAll('.project');\n  projectBtns.forEach((item) => {\n    item.addEventListener('click', () => {\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.changeCurrentProject)(item);\n      const todoArray = _objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos;\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodos)();\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todoArray);\n      editListener(todoArray);\n      deleteListener(todoArray);\n    });\n  });\n}\n\n(function parseStorage() {\n  const projectStorage = localStorage.getItem('projectList');\n  if (projectStorage !== null) {\n    const projects = JSON.parse(projectStorage);\n    const currentProjectString = localStorage.getItem('current project');\n    const updatedProject = JSON.parse(currentProjectString);\n    const currentTitle = updatedProject.title;\n\n    projects.forEach((element) => {\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.addToProjectList)(element);\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addProject)(element);\n    });\n\n    const currentProjectDom = document.getElementById(currentTitle);\n    (0,_objects__WEBPACK_IMPORTED_MODULE_2__.changeCurrentProject)(currentProjectDom);\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addTodo)(_objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos);\n    projectListeners();\n    deleteListener(_objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos);\n    editListener(_objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos);\n    dateListeners(_objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos);\n  }\n})();\n\naddTodoBtn.addEventListener('click', () => {\n  const todoForm = document.querySelector('.todo-form');\n\n  if (_objects__WEBPACK_IMPORTED_MODULE_2__.projectList.length === 0) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.noProjectError)();\n  } else if (todoForm === null) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeTodoForm)();\n    const exitBtn = document.querySelector('.exit-button');\n    exitBtn.addEventListener('click', (event) => {\n      event.preventDefault();\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodoForm)();\n    });\n\n    const submitBtn = document.getElementById('todo-submit');\n    submitBtn.addEventListener('click', (event) => {\n      event.preventDefault();\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.makeTodoObj)();\n      const todoArray = _objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos;\n\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodos)();\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todoArray);\n\n      deleteListener(todoArray);\n      editListener(todoArray);\n      dateListeners(_objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos);\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_objects__WEBPACK_IMPORTED_MODULE_2__.projectList);\n    });\n  } else if (document.querySelector('.todo-form') !== undefined) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodoForm)();\n  }\n});\n\nconst addProjectBtn = document.querySelector('.add-project');\naddProjectBtn.addEventListener('click', () => {\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeProjectForm)();\n  const exitBtn = document.querySelector('.exit-button');\n  exitBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeProjectForm)();\n  });\n\n  const projectSubmit = document.getElementById('project-submit');\n  projectSubmit.addEventListener('click', (event) => {\n    const title = document.getElementById('projectTitle').value;\n    if (\n      _objects__WEBPACK_IMPORTED_MODULE_2__.projectList.some((project) => project.title === title) ||\n      title === ''\n    ) {\n      const invalid = document.querySelector('.invalid');\n      invalid.style.display = '';\n      event.preventDefault() === false;\n      return;\n    }\n    event.preventDefault();\n    (0,_objects__WEBPACK_IMPORTED_MODULE_2__.makeProjectObj)();\n    const thisProject = _objects__WEBPACK_IMPORTED_MODULE_2__.projectList.slice(-1)[0];\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addProject)(thisProject);\n    (0,_objects__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_objects__WEBPACK_IMPORTED_MODULE_2__.projectList);\n    projectListeners();\n\n    if (_objects__WEBPACK_IMPORTED_MODULE_2__.projectList.length === 1) {\n      const projectItem = document.getElementById(thisProject.title);\n      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.changeCurrentProject)(projectItem);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToProjectList\": () => (/* binding */ addToProjectList),\n/* harmony export */   \"changeCurrentProject\": () => (/* binding */ changeCurrentProject),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"makeProjectObj\": () => (/* binding */ makeProjectObj),\n/* harmony export */   \"makeTodoObj\": () => (/* binding */ makeTodoObj),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"removeTodoObj\": () => (/* binding */ removeTodoObj),\n/* harmony export */   \"setStoredCurentProject\": () => (/* binding */ setStoredCurentProject),\n/* harmony export */   \"updatePriority\": () => (/* binding */ updatePriority),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\nconst projectList = [];\nlet currentProject;\n\nfunction todoFactory(title, priority, description, due) {\n  return { title, priority, description, due };\n}\n\nfunction setStoredCurentProject(obj) {\n  currentProject = obj;\n}\n\nfunction addToProject(todo) {\n  currentProject.todos.push(todo);\n}\n\nfunction makeTodoObj() {\n  const title = document.getElementById('todoTitle').value;\n  const priority = document.getElementById('priority').value;\n  const description = document.getElementById('description').value;\n  const dateDue = document.getElementById('due').value;\n\n  const todo = todoFactory(title, priority, description, dateDue);\n  addToProject(todo);\n}\n\nfunction updateStorage(projects) {\n  localStorage.clear();\n  localStorage.setItem('current project', JSON.stringify(currentProject));\n  projects.forEach((project) => {\n    JSON.stringify(project);\n    JSON.stringify(project.todos);\n    project.todos.forEach((todo) => {\n      JSON.stringify(todo);\n    });\n  });\n  localStorage.setItem('projectList', JSON.stringify(projects));\n}\n\nfunction projectFactory(title) {\n  return { title, todos: [] };\n}\n\nfunction addToProjectList(project) {\n  projectList.push(project);\n}\n\nfunction makeProjectObj() {\n  const title = document.getElementById('projectTitle').value;\n  const project = projectFactory(title);\n  addToProjectList(project);\n  currentProject = project;\n}\n\nfunction changeCurrentProject(projectItem) {\n  const projectTitle = projectItem.textContent;\n  projectList.forEach((element) => {\n    if (element.title === projectTitle) {\n      currentProject = element;\n      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.changeCurrentProjectClass)(projectItem);\n      localStorage.removeItem('current project');\n      localStorage.setItem('current project', JSON.stringify(currentProject));\n    }\n  });\n}\n\nfunction updatePriority(priority) {\n  const todoDom = priority.parentNode;\n  const todoDomTitle = todoDom.querySelector('h2');\n  const todoArray = currentProject.todos;\n\n  const result = todoArray.find(\n    (element) => element.title === todoDomTitle.textContent\n  );\n  result.priority = priority.value;\n}\n\nfunction removeTodoObj(todo) {\n  const index = currentProject.todos.indexOf(todo);\n  currentProject.todos.splice(index, 1);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/objects.js?");

/***/ }),

/***/ "./src/assets/Roboto-Regular.ttf":
/*!***************************************!*\
  !*** ./src/assets/Roboto-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/assets/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"delete.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/delete.svg?");

/***/ }),

/***/ "./src/assets/icons/file-edit.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/file-edit.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"file-edit.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/file-edit.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;