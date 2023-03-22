/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  box-sizing: border-box;\n}\n\n:root {\n  --main-color: #4338ca;\n  --desaturated-main-color: #818cf8;\n  --off-white: #f8f0e3;\n  --mid-grey: #a2a1aa;\n  --dark-grey: #222;\n}\n\nbody {\n  background-color: var(--desaturated-main-color);\n}\n\naside {\n  background-color: var(--dark-grey);\n  height: 100vh;\n  grid-row: 1 / 3;\n  color: var(--off-white);\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 8fr;\n}\n\nheader {\n  grid-column: 2 / 3;\n}\n\nmain {\n  grid-column: 2 / 3;\n  margin-left: 35px;\n}\n\n.card {\n  display: grid;\n  width: 300px;\n  padding: 15px;\n  background-color: var(--off-white);\n  border-left: 4px solid var(--main-color);\n  box-shadow: 10px 10px 20px var(--main-color);\n}\n\n.project {\n  border: none;\n  cursor: pointer;\n  color: var(--off-white);\n}\n\nform {\n  background-color: var(--off-white);\n  max-width: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid var(--dark-grey);\n  border-radius: 10px;\n  z-index: 10;\n  position: fixed;\n  box-shadow: 0 0 200px var(--main-color);\n  padding: 15px;\n  display: grid;\n}\n\n.button-style-reset {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.todo-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,iCAAiC;EACjC,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,wCAAwC;EACxC,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,cAAc;EACd,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kCAAkC;EAClC,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,uCAAuC;EACvC,aAAa;EACb,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,oCAAoC;EACpC,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  box-sizing: border-box;\n}\n\n:root {\n  --main-color: #4338ca;\n  --desaturated-main-color: #818cf8;\n  --off-white: #f8f0e3;\n  --mid-grey: #a2a1aa;\n  --dark-grey: #222;\n}\n\nbody {\n  background-color: var(--desaturated-main-color);\n}\n\naside {\n  background-color: var(--dark-grey);\n  height: 100vh;\n  grid-row: 1 / 3;\n  color: var(--off-white);\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 8fr;\n}\n\nheader {\n  grid-column: 2 / 3;\n}\n\nmain {\n  grid-column: 2 / 3;\n  margin-left: 35px;\n}\n\n.card {\n  display: grid;\n  width: 300px;\n  padding: 15px;\n  background-color: var(--off-white);\n  border-left: 4px solid var(--main-color);\n  box-shadow: 10px 10px 20px var(--main-color);\n}\n\n.project {\n  border: none;\n  cursor: pointer;\n  color: var(--off-white);\n}\n\nform {\n  background-color: var(--off-white);\n  max-width: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid var(--dark-grey);\n  border-radius: 10px;\n  z-index: 10;\n  position: fixed;\n  box-shadow: 0 0 200px var(--main-color);\n  padding: 15px;\n  display: grid;\n}\n\n.button-style-reset {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.todo-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "makeProjectForm": () => (/* binding */ makeProjectForm),
/* harmony export */   "makeTodoForm": () => (/* binding */ makeTodoForm),
/* harmony export */   "removeProjectForm": () => (/* binding */ removeProjectForm),
/* harmony export */   "removeTodoForm": () => (/* binding */ removeTodoForm)
/* harmony export */ });
function addTodo(obj) {
  const ul = document.querySelector('.todo-list');
  const todoTitle = obj.title;
  const listItem = document.createElement('li');
  listItem.classList = todoTitle;
  listItem.classList = 'card';

  const itemHeading = document.createElement('h2');
  itemHeading.textContent = todoTitle;
  listItem.appendChild(itemHeading);

  const priority = document.createElement('p');
  priority.textContent = obj.priority;
  listItem.appendChild(priority);

  const description = document.createElement('p');
  description.textContent = obj.description;
  listItem.appendChild(description);

  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.value = obj.due;
  listItem.appendChild(dueDate);

  ul.appendChild(listItem);
}

function makeTodoForm() {
  const overlay = document.getElementById('overlay');
  overlay.classList = 'active';

  const todoHeader = document.querySelector('.todo-header');
  const form = document.createElement('form');
  form.classList = 'todo-form';
  todoHeader.appendChild(form);

  const exitButton = document.createElement('button');
  exitButton.classList.add('exit-button', 'button-style-reset');
  exitButton.textContent = 'X';
  form.appendChild(exitButton);

  const titleLabel = document.createElement('label');
  titleLabel.for = 'todoTitle';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'todoTitle';
  titleInput.name = 'text';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'priority';
  priorityLabel.textContent = 'Priority';
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority';
  priorityInput.name = 'priority';
  const lowPriority = document.createElement('option');
  lowPriority.textContent = 'Low';
  const mediumPriority = document.createElement('option');
  mediumPriority.textContent = 'Medium';
  const hightPriority = document.createElement('option');
  hightPriority.textContent = 'High';
  priorityInput.appendChild(lowPriority);
  priorityInput.appendChild(mediumPriority);
  priorityInput.appendChild(hightPriority);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'descriptionLabel';
  descriptionLabel.textContent = 'Description';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = 'description';
  descriptionTextarea.id = 'description';

  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextarea);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'due';
  dueDateLabel.textContent = 'Date due:';
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due';
  dueDateInput.name = 'due';
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Create To-do';
  submitBtn.type = 'submit';
  submitBtn.setAttribute('id', 'todo-submit');
  form.appendChild(submitBtn);
}

function removeTodoForm() {
  const overlay = document.getElementById('overlay');
  const todoHeader = document.querySelector('.todo-header');
  const todoForm = document.querySelector('.todo-form');
  todoHeader.removeChild(todoForm);
  overlay.classList.remove('active');
}

function addProject(obj) {
  const projectTitle = obj.title;

  const projectUl = document.querySelector('.project-list');
  const newLi = document.createElement('li');

  projectUl.appendChild(newLi);

  const projectBtn = document.createElement('button');
  projectBtn.className += 'project button-style-reset ';
  projectBtn.textContent = projectTitle;
  newLi.appendChild(projectBtn);
}

function makeProjectForm() {
  const overlay = document.getElementById('overlay');
  overlay.classList = 'active';

  const projectHeader = document.querySelector('.project-header');
  const form = document.createElement('form');
  form.classList = 'project-form';
  projectHeader.appendChild(form);

  const exitButton = document.createElement('button');
  exitButton.classList.add('exit-button', 'button-style-reset');
  exitButton.textContent = 'X';
  form.appendChild(exitButton);

  const titleLabel = document.createElement('label');
  titleLabel.for = 'projectTitle';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'projectTitle';
  titleInput.name = 'text';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Create Project';
  submitBtn.type = 'submit';
  submitBtn.setAttribute('id', 'project-submit');
  form.appendChild(submitBtn);
}

function removeProjectForm() {
  const overlay = document.getElementById('overlay');
  const projectHeader = document.querySelector('.project-header');
  const projectForm = document.querySelector('.project-form');
  projectHeader.removeChild(projectForm);
  overlay.classList.remove('active');
}


/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCurrentProject": () => (/* binding */ changeCurrentProject),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "makeProjectObj": () => (/* binding */ makeProjectObj),
/* harmony export */   "makeTodoObj": () => (/* binding */ makeTodoObj),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
const defaultProject = document.querySelector('.my-project');

const myProject = {
  title: defaultProject.textContent,
  todos: [],
};

const projectList = [myProject];

function todoFactory(title, priority, description, due) {
  return { title, priority, description, due };
}

function addToProject(todo) {
  myProject.todos.push(todo);
}

let currentProject = myProject;

function makeTodoObj() {
  const title = document.getElementById('todoTitle').value;
  const priority = document.getElementById('priority').value;
  const description = document.getElementById('description').value;
  const dateDue = document.getElementById('due').value;

  const todo = todoFactory(title, priority, description, dateDue);
  addToProject(todo);
}

function projectFactory(title) {
  return { title, todos: [] };
}

function addToProjectList(project) {
  projectList.push(project);
}

function makeProjectObj() {
  const title = document.getElementById('projectTitle').value;
  const project = projectFactory(title);
  addToProjectList(project);
  currentProject = project;
}

function changeCurrentProject(projectItem) {
  const projectTitle = projectItem.textContent;
  projectList.forEach((element) => {
    if (element.title === projectTitle) {
      currentProject = element;
    }
  });
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/objects.js");




const addTodoBtn = document.querySelector('.add-todo');

addTodoBtn.addEventListener('click', () => {
  const todoForm = document.querySelector('.todo-form');
  if (todoForm === null) {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeTodoForm)();
    const exitBtn = document.querySelector('.exit-button');
    exitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodoForm)();
    });
    const submitBtn = document.getElementById('todo-submit');
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      (0,_objects__WEBPACK_IMPORTED_MODULE_2__.makeTodoObj)();
      const todoArray = _objects__WEBPACK_IMPORTED_MODULE_2__.currentProject.todos;

      const thisTodo = todoArray.slice(-1)[0];

      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addTodo)(thisTodo);
    });
  } else if (document.querySelector('.todo-form') !== undefined) {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeTodoForm)();
  }
});

const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeProjectForm)();
  const exitBtn = document.querySelector('.exit-button');
  exitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeProjectForm)();
  });
  const projectSubmit = document.getElementById('project-submit');
  projectSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_objects__WEBPACK_IMPORTED_MODULE_2__.makeProjectObj)();
    const thisProject = _objects__WEBPACK_IMPORTED_MODULE_2__.projectList.slice(-1)[0];
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.addProject)(thisProject);
    const projectBtns = document.querySelectorAll('.project');
    projectBtns.forEach((item) => {
      item.addEventListener('click', () => {
        (0,_objects__WEBPACK_IMPORTED_MODULE_2__.changeCurrentProject)(item);
      });
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map