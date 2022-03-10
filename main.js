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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\n::-webkit-scrollbar-track {\n  background: #e2caca;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--black);\n}\n\n:root {\n  --red: #de1616;\n  --light-red: #fce9e9;\n  --black: #191919;\n  --white: #fff;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/*\n  =====================================\n  Main\n  =====================================\n*/\n\n.main-container {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. header .'\n    '. main .'\n    '. footer .';\n  max-width: 80%;\n  height: 100vh;\n  margin: 0 auto;\n  gap: 3rem 0.125rem;\n}\n\n/*\n  =====================================\n  Header\n  =====================================\n*/\n\n.header {\n  display: flex;\n  grid-area: header;\n  align-items: flex-end;\n  justify-content: space-between;\n  height: 100px;\n  color: #191919;\n}\n\n@media (max-width: 665px) {\n  .header {\n    align-items: center;\n    margin-top: 3rem;\n  }\n}\n\n.logo-link,\n.logo-link:hover,\n.logo-link:visited {\n  text-decoration: none;\n}\n\n.logo {\n  margin: 0;\n  padding: 0;\n}\n\n.logo-span-1 {\n  padding: 0.375rem 0.875rem;\n  border: 4px solid var(--black);\n  background-color: var(--red);\n  color: var(--white);\n}\n\n.logo-span-2 {\n  color: var(--black);\n}\n\n.navbar-list {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n  padding-left: 0;\n  list-style: none;\n}\n\n.selected {\n  border-bottom: 3px solid var(--red);\n  font-weight: bold;\n}\n\n.list {\n  margin-left: 2.5rem;\n  cursor: pointer;\n  gap: 1rem;\n}\n\n.list-1 {\n  margin-left: 0;\n}\n\n.list:hover {\n  color: var(--red);\n  font-weight: bold;\n}\n\n@media (max-width: 665px) {\n  .navbar-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  .list {\n    margin-left: 0;\n  }\n\n  .list-1,\n  .list-2 {\n    margin-bottom: 0.25rem;\n  }\n}\n\n/*\n  =====================================\n  Section\n  =====================================\n*/\n\n.food-container {\n  display: grid;\n  grid-area: main;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. . .'\n    '. . .'\n    '. . .';\n  margin: 1rem 0;\n  gap: 1rem 1rem;\n}\n\n@media (max-width: 1000px) {\n  .food-container {\n    grid-template-areas:\n      '. .'\n      '. .'\n      '. .';\n  }\n}\n\n@media (max-width: 665px) {\n  .food-container {\n    grid-template-areas:\n      '.'\n      '.'\n      '.';\n  }\n}\n\n/* Card Foods */\n.card-food {\n  display: grid;\n  grid-template-areas:\n    'card-img card-img card-img'\n    'card-title card-title card-title'\n    'btn-recipe . btn-liked';\n  grid-template-columns: 1fr 1.4fr 0.6fr;\n  grid-template-rows: 2fr 0.4fr 0.2fr;\n  border: 1px solid #dbdbdb;\n  gap: 0;\n}\n\n.card-img {\n  grid-area: card-img;\n  overflow: hidden;\n}\n\n.img-food {\n  width: 100%;\n  min-height: 250px;\n  object-fit: cover;\n}\n\n.card-title {\n  display: flex;\n  grid-area: card-title;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 0.2rem;\n}\n\n.btn-recipe {\n  margin-bottom: 1rem;\n  margin-left: 1rem;\n  padding: 0.75rem 1rem;\n  padding: 0.5rem 0.5rem;\n  border: none;\n  background: var(--red);\n  color: var(--white);\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.btn-liked {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  margin-right: 1rem;\n  padding: 0.1rem 0.125rem;\n  border: none;\n  background: var(--white);\n  color: var(--red);\n  font-size: 0.8em;\n  font-weight: bold;\n  cursor: pointer;\n  gap: 0.25rem;\n}\n\n.no-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.hidden {\n  display: none !important;\n}\n\n/* Popup */\nh5,\nh4 {\n  margin: 1rem;\n  padding: 0;\n  font-size: 1.125rem;\n}\n\nh2 {\n  text-align: center;\n}\n\np {\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n}\n\n.popup {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  padding: 0.5rem 0;\n  background-color: var(--light-red);\n  color: var(--black);\n}\n\n.popup button {\n  align-self: flex-end;\n  margin: 10px 20px;\n  padding: 5px;\n  border: none;\n  background-color: var(--light-red);\n  color: var(--black);\n  font-size: xx-large;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.show {\n  animation: fadeIn 1s;\n}\n\n.recipe {\n  height: 140px;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow-y: scroll;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 2rem;\n  margin-left: 2rem;\n}\n\n.message-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.message-content input,\n.message-content textarea {\n  margin-bottom: 0.75rem;\n  padding: 0.5rem;\n  font-size: medium;\n}\n\n.message-content input[type='text'] {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.message-content input[type='button'] {\n  align-self: center;\n  margin-bottom: 3rem;\n  padding: 0.5rem 0.5rem;\n  border: none;\n  border-radius: 0;\n  background: var(--red);\n  color: var(--white);\n  font-weight: bold;\n  cursor: pointer;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.message-content div {\n  width: 100%;\n}\n\n.align-text {\n  align-self: center;\n}\n\n/*\n  =====================================\n  Footer\n  =====================================\n*/\n\n.footer {\n  display: flex;\n  grid-area: footer;\n  justify-content: center;\n  padding-bottom: 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\n::-webkit-scrollbar-track {\n  background: #e2caca;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--black);\n}\n\n:root {\n  --red: #de1616;\n  --light-red: #fce9e9;\n  --black: #191919;\n  --white: #fff;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/*\n  =====================================\n  Main\n  =====================================\n*/\n\n.main-container {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. header .'\n    '. main .'\n    '. footer .';\n  max-width: 80%;\n  height: 100vh;\n  margin: 0 auto;\n  gap: 3rem 0.125rem;\n}\n\n/*\n  =====================================\n  Header\n  =====================================\n*/\n\n.header {\n  display: flex;\n  grid-area: header;\n  align-items: flex-end;\n  justify-content: space-between;\n  height: 100px;\n  color: #191919;\n}\n\n@media (max-width: 665px) {\n  .header {\n    align-items: center;\n    margin-top: 3rem;\n  }\n}\n\n.logo-link,\n.logo-link:hover,\n.logo-link:visited {\n  text-decoration: none;\n}\n\n.logo {\n  margin: 0;\n  padding: 0;\n}\n\n.logo-span-1 {\n  padding: 0.375rem 0.875rem;\n  border: 4px solid var(--black);\n  background-color: var(--red);\n  color: var(--white);\n}\n\n.logo-span-2 {\n  color: var(--black);\n}\n\n.navbar-list {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n  padding-left: 0;\n  list-style: none;\n}\n\n.selected {\n  border-bottom: 3px solid var(--red);\n  font-weight: bold;\n}\n\n.list {\n  margin-left: 2.5rem;\n  cursor: pointer;\n  gap: 1rem;\n}\n\n.list-1 {\n  margin-left: 0;\n}\n\n.list:hover {\n  color: var(--red);\n  font-weight: bold;\n}\n\n@media (max-width: 665px) {\n  .navbar-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  .list {\n    margin-left: 0;\n  }\n\n  .list-1,\n  .list-2 {\n    margin-bottom: 0.25rem;\n  }\n}\n\n/*\n  =====================================\n  Section\n  =====================================\n*/\n\n.food-container {\n  display: grid;\n  grid-area: main;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. . .'\n    '. . .'\n    '. . .';\n  margin: 1rem 0;\n  gap: 1rem 1rem;\n}\n\n@media (max-width: 1000px) {\n  .food-container {\n    grid-template-areas:\n      '. .'\n      '. .'\n      '. .';\n  }\n}\n\n@media (max-width: 665px) {\n  .food-container {\n    grid-template-areas:\n      '.'\n      '.'\n      '.';\n  }\n}\n\n/* Card Foods */\n.card-food {\n  display: grid;\n  grid-template-areas:\n    'card-img card-img card-img'\n    'card-title card-title card-title'\n    'btn-recipe . btn-liked';\n  grid-template-columns: 1fr 1.4fr 0.6fr;\n  grid-template-rows: 2fr 0.4fr 0.2fr;\n  border: 1px solid #dbdbdb;\n  gap: 0;\n}\n\n.card-img {\n  grid-area: card-img;\n  overflow: hidden;\n}\n\n.img-food {\n  width: 100%;\n  min-height: 250px;\n  object-fit: cover;\n}\n\n.card-title {\n  display: flex;\n  grid-area: card-title;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 0.2rem;\n}\n\n.btn-recipe {\n  margin-bottom: 1rem;\n  margin-left: 1rem;\n  padding: 0.75rem 1rem;\n  padding: 0.5rem 0.5rem;\n  border: none;\n  background: var(--red);\n  color: var(--white);\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.btn-liked {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  margin-right: 1rem;\n  padding: 0.1rem 0.125rem;\n  border: none;\n  background: var(--white);\n  color: var(--red);\n  font-size: 0.8em;\n  font-weight: bold;\n  cursor: pointer;\n  gap: 0.25rem;\n}\n\n.no-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.hidden {\n  display: none !important;\n}\n\n/* Popup */\nh5,\nh4 {\n  margin: 1rem;\n  padding: 0;\n  font-size: 1.125rem;\n}\n\nh2 {\n  text-align: center;\n}\n\np {\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n}\n\n.popup {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  padding: 0.5rem 0;\n  background-color: var(--light-red);\n  color: var(--black);\n}\n\n.popup button {\n  align-self: flex-end;\n  margin: 10px 20px;\n  padding: 5px;\n  border: none;\n  background-color: var(--light-red);\n  color: var(--black);\n  font-size: xx-large;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.show {\n  animation: fadeIn 1s;\n}\n\n.recipe {\n  height: 140px;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow-y: scroll;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 2rem;\n  margin-left: 2rem;\n}\n\n.message-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.message-content input,\n.message-content textarea {\n  margin-bottom: 0.75rem;\n  padding: 0.5rem;\n  font-size: medium;\n}\n\n.message-content input[type='text'] {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.message-content input[type='button'] {\n  align-self: center;\n  margin-bottom: 3rem;\n  padding: 0.5rem 0.5rem;\n  border: none;\n  border-radius: 0;\n  background: var(--red);\n  color: var(--white);\n  font-weight: bold;\n  cursor: pointer;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.message-content div {\n  width: 100%;\n}\n\n.align-text {\n  align-self: center;\n}\n\n/*\n  =====================================\n  Footer\n  =====================================\n*/\n\n.footer {\n  display: flex;\n  grid-area: footer;\n  justify-content: center;\n  padding-bottom: 1.5rem;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components/displayComments.js":
/*!*******************************************!*\
  !*** ./src/components/displayComments.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const countComments = (arr, title) => {
  const counter = ` (${arr.length})`;
  title.innerHTML += counter;
};

const displayComments = (arr, container) => {
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.innerHTML = 'Comments';
  container.appendChild(title);
  const messageData = document.createElement('div');
  messageData.classList.add('message-content');
  if (!arr.error) {
    countComments(arr, title);
    arr.forEach((element) => {
      const messageDiv = document.createElement('div');
      messageDiv.innerHTML = `
      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;
      messageData.appendChild(messageDiv);
    });
  } else {
    title.innerText += ' (0)';
    messageData.innerHTML = '<span>No Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};

const getComments = async (id) => {
  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments?item_id=';
  const request = new Request(getMessagesLink + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  return responseJson;
};



/***/ }),

/***/ "./src/components/getFood.js":
/*!***********************************!*\
  !*** ./src/components/getFood.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCounter": () => (/* binding */ displayCounter),
/* harmony export */   "getAllData": () => (/* binding */ getAllData)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/components/popup.js");
/* harmony import */ var _hideCSS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideCSS.js */ "./src/components/hideCSS.js");
/* harmony import */ var _likeAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeAPI.js */ "./src/components/likeAPI.js");




const displayData = (arr) => {
  const board = document.querySelector('.food-container');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;

    item.classList.add('card-food');
    item.innerHTML = `
        <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>        
        <button type="button" class="btn-recipe">Recipe</button>
        <div>        
        </div>
        <div class="btn-liked">
          Like
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;

    const btnRecipeElement = item.querySelector('.btn-recipe');
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        // eslint-disable-next-line comma-dangle
        (element) => element.item_id === food.idMeal
      );
      // eslint-disable-next-line operator-linebreak
      btnLikedElement.innerHTML =
        likesReturned !== undefined
          ? `<i class="fas fa-heart"></i> (${likesReturned.likes})`
          : '<i class="far fa-heart"></i> (0)';
    };
    (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)()
      .then(printLike);

    btnRecipeElement.addEventListener('click', () => {
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(food.idMeal);
      (0,_hideCSS_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    btnLikedElement.addEventListener('click', () => {
      (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_2__.addLikes)(food.idMeal);
      (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)()
        .then(printLike);
    });

    board.appendChild(item);
  });
};

const displayCounter = (categorySelected, count) => {
  categorySelected.innerHTML = `${categorySelected.textContent} (${count})`;
};

const getAllData = async (url, categorySelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responseInfo = responseJson.meals;
  displayCounter(categorySelected, responseInfo.length);
  displayData(responseInfo);
};




/***/ }),

/***/ "./src/components/hideCSS.js":
/*!***********************************!*\
  !*** ./src/components/hideCSS.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hideCSS)
/* harmony export */ });
const hideCSS = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hidden');
  });
};



/***/ }),

/***/ "./src/components/likeAPI.js":
/*!***********************************!*\
  !*** ./src/components/likeAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const projectID = 'xkf1WNltgqyGhjhbknyA';
const likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;

const addLikes = async (itemId) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

const getLikes = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};




/***/ }),

/***/ "./src/components/newComment.js":
/*!**************************************!*\
  !*** ./src/components/newComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newMessageForm)
/* harmony export */ });
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ "./src/components/displayComments.js");


const postNewMessage = async (id, name, text) => {
  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  };

  await fetch(request, data);
  const arr = await (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  const container = document.getElementById('msgContainer');
  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(arr, container);
};

const newMessage = (id, user, message) => {
  if (user.value !== '' && message.value !== '') {
    postNewMessage(id, user.value, message.value);
    user.value = '';
    message.value = '';
  }
};

const newMessageForm = (container, itemId) => {
  const newCommentDiv = document.createElement('div');
  newCommentDiv.innerHTML = '<h3 class="align-text">Add a Comment</h3>';
  newCommentDiv.classList.add('message-content');
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.name = 'username';
  userName.placeholder = 'Your name';
  const textMessage = document.createElement('textarea');
  textMessage.name = 'comment';
  textMessage.rows = '4';
  textMessage.cols = '30';
  textMessage.placeholder = 'Your comment';
  const button = document.createElement('input');
  button.type = 'button';
  button.value = 'Comment';
  button.addEventListener('click', () => newMessage(itemId, userName, textMessage));
  newCommentDiv.appendChild(userName);
  newCommentDiv.appendChild(textMessage);
  newCommentDiv.appendChild(button);

  container.appendChild(newCommentDiv);
};




/***/ }),

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemData)
/* harmony export */ });
/* harmony import */ var _hideCSS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideCSS.js */ "./src/components/hideCSS.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/components/displayComments.js");
/* harmony import */ var _newComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newComment.js */ "./src/components/newComment.js");




const mainCont = document.querySelector('.food-container');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  (0,_hideCSS_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  mainCont.removeChild(elem);
};

const createPopup = (details, msgDat) => {
  const dishPopup = document.createElement('div');
  const popupButton = document.createElement('button');
  const itemdata = document.createElement('div');
  itemdata.classList.add('form-container');
  const messageContainer = document.createElement('div');
  messageContainer.id = 'msgContainer';
  messageContainer.classList.add('form-container');
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(msgDat, messageContainer);
  (0,_newComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(formContainer, details.idMeal);
  itemdata.innerHTML = `<img src="${details.strMealThumb}" width="250px"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>
  <p class="recipe">${details.strInstructions}</p>`;
  itemdata.id = details.idMeal;
  dishPopup.id = 'myPopup';
  popupButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  popupButton.addEventListener('click', () => closePopup(dishPopup));
  dishPopup.classList.add('popup');
  dishPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  dishPopup.appendChild(popupButton);
  dishPopup.appendChild(itemdata);
  dishPopup.appendChild(messageContainer);
  dishPopup.appendChild(formContainer);
  mainCont.appendChild(dishPopup);
};

const getItemData = async (id) => {
  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(foodItemDataURL + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals[0];
  const messageData = await (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id);
  createPopup(responsInfo, messageData);
};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_getFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/getFood.js */ "./src/components/getFood.js");



// eslint-disable-next-line operator-linebreak
const [frenchElement, portugueseElement, italianElement] =
  document.querySelectorAll('li');
let categorySelected = frenchElement;
const frenchURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=French';
const portugueseURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?a=Portuguese`;
const italianURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`;

frenchElement.addEventListener('click', () => {
  categorySelected = frenchElement;
  frenchElement.classList.add('selected');
  portugueseElement.classList.remove('selected');
  italianElement.classList.remove('selected');
  categorySelected.textContent = 'French';
  portugueseElement.textContent = 'Portuguese';
  italianElement.textContent = 'Italian';
  (0,_components_getFood_js__WEBPACK_IMPORTED_MODULE_1__.getAllData)(frenchURL, categorySelected);
});

portugueseElement.addEventListener('click', () => {
  categorySelected = portugueseElement;
  portugueseElement.classList.add('selected');
  frenchElement.classList.remove('selected');
  italianElement.classList.remove('selected');
  categorySelected.textContent = 'Portuguese';
  frenchElement.textContent = 'French';
  italianElement.textContent = 'Italian';
  (0,_components_getFood_js__WEBPACK_IMPORTED_MODULE_1__.getAllData)(portugueseURL, categorySelected);
});

italianElement.addEventListener('click', () => {
  categorySelected = italianElement;
  italianElement.classList.add('selected');
  frenchElement.classList.remove('selected');
  portugueseElement.classList.remove('selected');
  categorySelected.textContent = 'Italian';
  frenchElement.textContent = 'French';
  portugueseElement.textContent = 'Portuguese';
  (0,_components_getFood_js__WEBPACK_IMPORTED_MODULE_1__.getAllData)(italianURL, categorySelected);
});

(0,_components_getFood_js__WEBPACK_IMPORTED_MODULE_1__.getAllData)(frenchURL, categorySelected);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsS0FBSyxVQUFVLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLE1BQU0sVUFBVSxVQUFVLFlBQVks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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrRUFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0VBQVU7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFVO0FBQ1osQ0FBQzs7QUFFRCxrRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheUNvbW1lbnRzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvZ2V0Rm9vZC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2hpZGVDU1MuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvY29tcG9uZW50cy9saWtlQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvbmV3Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL3BvcHVwLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNlMmNhY2E7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJlZDogI2RlMTYxNjtcXG4gIC0tbGlnaHQtcmVkOiAjZmNlOWU5O1xcbiAgLS1ibGFjazogIzE5MTkxOTtcXG4gIC0td2hpdGU6ICNmZmY7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIE1haW5cXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICcuIGhlYWRlciAuJ1xcbiAgICAnLiBtYWluIC4nXFxuICAgICcuIGZvb3RlciAuJztcXG4gIG1heC13aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZ2FwOiAzcmVtIDAuMTI1cmVtO1xcbn1cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgSGVhZGVyXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY2NXB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG59XFxuXFxuLmxvZ28tbGluayxcXG4ubG9nby1saW5rOmhvdmVyLFxcbi5sb2dvLWxpbms6dmlzaXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5sb2dvLXNwYW4tMSB7XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjg3NXJlbTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubG9nby1zcGFuLTIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLm5hdmJhci1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5saXN0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5saXN0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjVweCkge1xcbiAgLm5hdmJhci1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5saXN0LTEsXFxuICAubGlzdC0yIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gIH1cXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFNlY3Rpb25cXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi5mb29kLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICcuIC4gLidcXG4gICAgJy4gLiAuJ1xcbiAgICAnLiAuIC4nO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBnYXA6IDFyZW0gMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmZvb2QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAnLiAuJ1xcbiAgICAgICcuIC4nXFxuICAgICAgJy4gLic7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjVweCkge1xcbiAgLmZvb2QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAnLidcXG4gICAgICAnLidcXG4gICAgICAnLic7XFxuICB9XFxufVxcblxcbi8qIENhcmQgRm9vZHMgKi9cXG4uY2FyZC1mb29kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnY2FyZC1pbWcgY2FyZC1pbWcgY2FyZC1pbWcnXFxuICAgICdjYXJkLXRpdGxlIGNhcmQtdGl0bGUgY2FyZC10aXRsZSdcXG4gICAgJ2J0bi1yZWNpcGUgLiBidG4tbGlrZWQnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS40ZnIgMC42ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAwLjRmciAwLjJmcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBnYXA6IDA7XFxufVxcblxcbi5jYXJkLWltZyB7XFxuICBncmlkLWFyZWE6IGNhcmQtaW1nO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltZy1mb29kIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtYXJlYTogY2FyZC10aXRsZTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uYnRuLXJlY2lwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1saWtlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjEyNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4ubm8tZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogUG9wdXAgKi9cXG5oNSxcXG5oNCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5wb3B1cCBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuLnJlY2lwZSB7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWVzc2FnZS1jb250ZW50IGlucHV0LFxcbi5tZXNzYWdlLWNvbnRlbnQgdGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250ZW50IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGVudCBpbnB1dFt0eXBlPSdidXR0b24nXSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250ZW50IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFsaWduLXRleHQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgRm9vdGVyXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2Vi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QUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC4yNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZTJjYWNhO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yZWQ6ICNkZTE2MTY7XFxuICAtLWxpZ2h0LXJlZDogI2ZjZTllOTtcXG4gIC0tYmxhY2s6ICMxOTE5MTk7XFxuICAtLXdoaXRlOiAjZmZmO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBNYWluXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnLiBoZWFkZXIgLidcXG4gICAgJy4gbWFpbiAuJ1xcbiAgICAnLiBmb290ZXIgLic7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGdhcDogM3JlbSAwLjEyNXJlbTtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEhlYWRlclxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjVweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxufVxcblxcbi5sb2dvLWxpbmssXFxuLmxvZ28tbGluazpob3ZlcixcXG4ubG9nby1saW5rOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubG9nby1zcGFuLTEge1xcbiAgcGFkZGluZzogMC4zNzVyZW0gMC44NzVyZW07XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmxvZ28tc3Bhbi0yIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5uYXZiYXItbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcmVkKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4ubGlzdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjY1cHgpIHtcXG4gIC5uYXZiYXItbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5saXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAubGlzdC0xLFxcbiAgLmxpc3QtMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICB9XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBTZWN0aW9uXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4uZm9vZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnLiAuIC4nXFxuICAgICcuIC4gLidcXG4gICAgJy4gLiAuJztcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZ2FwOiAxcmVtIDFyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5mb29kLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgJy4gLidcXG4gICAgICAnLiAuJ1xcbiAgICAgICcuIC4nO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjY1cHgpIHtcXG4gIC5mb29kLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgJy4nXFxuICAgICAgJy4nXFxuICAgICAgJy4nO1xcbiAgfVxcbn1cXG5cXG4vKiBDYXJkIEZvb2RzICovXFxuLmNhcmQtZm9vZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2NhcmQtaW1nIGNhcmQtaW1nIGNhcmQtaW1nJ1xcbiAgICAnY2FyZC10aXRsZSBjYXJkLXRpdGxlIGNhcmQtdGl0bGUnXFxuICAgICdidG4tcmVjaXBlIC4gYnRuLWxpa2VkJztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNGZyIDAuNmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMC40ZnIgMC4yZnI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgZ2FwOiAwO1xcbn1cXG5cXG4uY2FyZC1pbWcge1xcbiAgZ3JpZC1hcmVhOiBjYXJkLWltZztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWctZm9vZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IGNhcmQtdGl0bGU7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLmJ0bi1yZWNpcGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tbGlrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4xMjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLm5vLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBvcHVwICovXFxuaDUsXFxuaDQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucG9wdXAgYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3cge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxufVxcblxcbi5yZWNpcGUge1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcbi5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGVudCBpbnB1dCxcXG4ubWVzc2FnZS1jb250ZW50IHRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGVudCBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tZXNzYWdlLWNvbnRlbnQgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGVudCBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hbGlnbi10ZXh0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEZvb3RlclxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY291bnRDb21tZW50cyA9IChhcnIsIHRpdGxlKSA9PiB7XG4gIGNvbnN0IGNvdW50ZXIgPSBgICgke2Fyci5sZW5ndGh9KWA7XG4gIHRpdGxlLmlubmVySFRNTCArPSBjb3VudGVyO1xufTtcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGFyciwgY29udGFpbmVyKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBtZXNzYWdlRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlRGF0YS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWNvbnRlbnQnKTtcbiAgaWYgKCFhcnIuZXJyb3IpIHtcbiAgICBjb3VudENvbW1lbnRzKGFyciwgdGl0bGUpO1xuICAgIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtZXNzYWdlRGl2LmlubmVySFRNTCA9IGBcbiAgICAgIDxzcGFuPiR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAtIDxzdHJvbmc+JHtlbGVtZW50LnVzZXJuYW1lfTo8L3N0cm9uZz4gJHtlbGVtZW50LmNvbW1lbnR9PC9zcGFuPjxoci8+YDtcbiAgICAgIG1lc3NhZ2VEYXRhLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLmlubmVyVGV4dCArPSAnICgwKSc7XG4gICAgbWVzc2FnZURhdGEuaW5uZXJIVE1MID0gJzxzcGFuPk5vIENvbW1lbnRzIFlldDwvc3Bhbj48aHIgd2lkdGg9XCIyNTBweFwiPic7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEYXRhKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy94a2YxV05sdGdxeUdoamhia255QS9jb21tZW50cz9pdGVtX2lkPSc7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChnZXRNZXNzYWdlc0xpbmsgKyBpZCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlDb21tZW50cywgZ2V0Q29tbWVudHMsIGNvdW50Q29tbWVudHMgfTsiLCJpbXBvcnQgZ2V0SXRlbURhdGEgZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgaGlkZUNTUyBmcm9tICcuL2hpZGVDU1MuanMnO1xuaW1wb3J0IHsgYWRkTGlrZXMsIGdldExpa2VzIH0gZnJvbSAnLi9saWtlQVBJLmpzJztcblxuY29uc3QgZGlzcGxheURhdGEgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtY29udGFpbmVyJyk7XG4gIGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBhcnIuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgaXRlbS5pZCA9IGZvb2QuaWRNZWFsO1xuXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb2QnKTtcbiAgICBpdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICA8aDU+JHtmb29kLnN0ck1lYWx9PC9oNT5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tcmVjaXBlXCI+UmVjaXBlPC9idXR0b24+XG4gICAgICAgIDxkaXY+ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tbGlrZWRcIj5cbiAgICAgICAgICBMaWtlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWdcIj5cbiAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cImltZy1mb29kXCI+ICAgICAgICBcbiAgICAgICAgPC9kaXY+ICAgICBcbiAgICBgO1xuXG4gICAgY29uc3QgYnRuUmVjaXBlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJ0bi1yZWNpcGUnKTtcbiAgICBjb25zdCBidG5MaWtlZEVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5idG4tbGlrZWQnKTtcbiAgICBjb25zdCBwcmludExpa2UgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGlrZXNSZXR1cm5lZCA9IGRhdGEuZmluZChcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5pdGVtX2lkID09PSBmb29kLmlkTWVhbFxuICAgICAgKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbiAgICAgIGJ0bkxpa2VkRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICBsaWtlc1JldHVybmVkICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT4gKCR7bGlrZXNSZXR1cm5lZC5saWtlc30pYFxuICAgICAgICAgIDogJzxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPiAoMCknO1xuICAgIH07XG4gICAgZ2V0TGlrZXMoKVxuICAgICAgLnRoZW4ocHJpbnRMaWtlKTtcblxuICAgIGJ0blJlY2lwZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRJdGVtRGF0YShmb29kLmlkTWVhbCk7XG4gICAgICBoaWRlQ1NTKCk7XG4gICAgfSk7XG5cbiAgICBidG5MaWtlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGRMaWtlcyhmb29kLmlkTWVhbCk7XG4gICAgICBnZXRMaWtlcygpXG4gICAgICAgIC50aGVuKHByaW50TGlrZSk7XG4gICAgfSk7XG5cbiAgICBib2FyZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5Q291bnRlciA9IChjYXRlZ29yeVNlbGVjdGVkLCBjb3VudCkgPT4ge1xuICBjYXRlZ29yeVNlbGVjdGVkLmlubmVySFRNTCA9IGAke2NhdGVnb3J5U2VsZWN0ZWQudGV4dENvbnRlbnR9ICgke2NvdW50fSlgO1xufTtcblxuY29uc3QgZ2V0QWxsRGF0YSA9IGFzeW5jICh1cmwsIGNhdGVnb3J5U2VsZWN0ZWQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcmVzcG9uc2VJbmZvID0gcmVzcG9uc2VKc29uLm1lYWxzO1xuICBkaXNwbGF5Q291bnRlcihjYXRlZ29yeVNlbGVjdGVkLCByZXNwb25zZUluZm8ubGVuZ3RoKTtcbiAgZGlzcGxheURhdGEocmVzcG9uc2VJbmZvKTtcbn07XG5cbmV4cG9ydCB7IGdldEFsbERhdGEsIGRpc3BsYXlDb3VudGVyIH07XG4iLCJjb25zdCBoaWRlQ1NTID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWZvb2QnKTtcbiAgaXRlbXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgaGlkZUNTUyBhcyBkZWZhdWx0IH07IiwiY29uc3QgcHJvamVjdElEID0gJ3hrZjFXTmx0Z3F5R2hqaGJrbnlBJztcbmNvbnN0IGxpa2VzTGluayA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2plY3RJRH0vbGlrZXMvYDtcblxuY29uc3QgYWRkTGlrZXMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChsaWtlc0xpbmspO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBgJHtpdGVtSWR9YCB9KSxcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc0xpbmspO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGFkZExpa2VzLCBnZXRMaWtlcyB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgcG9zdE5ld01lc3NhZ2UgPSBhc3luYyAoaWQsIG5hbWUsIHRleHQpID0+IHtcbiAgY29uc3QgcG9zdE1lc3NhZ2VMaW5rID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hrZjFXTmx0Z3F5R2hqaGJrbnlBL2NvbW1lbnRzJztcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHBvc3RNZXNzYWdlTGluayk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQ6IHRleHQsXG4gICAgfSksXG4gIH07XG5cbiAgYXdhaXQgZmV0Y2gocmVxdWVzdCwgZGF0YSk7XG4gIGNvbnN0IGFyciA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0NvbnRhaW5lcicpO1xuICBkaXNwbGF5Q29tbWVudHMoYXJyLCBjb250YWluZXIpO1xufTtcblxuY29uc3QgbmV3TWVzc2FnZSA9IChpZCwgdXNlciwgbWVzc2FnZSkgPT4ge1xuICBpZiAodXNlci52YWx1ZSAhPT0gJycgJiYgbWVzc2FnZS52YWx1ZSAhPT0gJycpIHtcbiAgICBwb3N0TmV3TWVzc2FnZShpZCwgdXNlci52YWx1ZSwgbWVzc2FnZS52YWx1ZSk7XG4gICAgdXNlci52YWx1ZSA9ICcnO1xuICAgIG1lc3NhZ2UudmFsdWUgPSAnJztcbiAgfVxufTtcblxuY29uc3QgbmV3TWVzc2FnZUZvcm0gPSAoY29udGFpbmVyLCBpdGVtSWQpID0+IHtcbiAgY29uc3QgbmV3Q29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDb21tZW50RGl2LmlubmVySFRNTCA9ICc8aDMgY2xhc3M9XCJhbGlnbi10ZXh0XCI+QWRkIGEgQ29tbWVudDwvaDM+JztcbiAgbmV3Q29tbWVudERpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWNvbnRlbnQnKTtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VyTmFtZS50eXBlID0gJ3RleHQnO1xuICB1c2VyTmFtZS5uYW1lID0gJ3VzZXJuYW1lJztcbiAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbiAgY29uc3QgdGV4dE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0TWVzc2FnZS5uYW1lID0gJ2NvbW1lbnQnO1xuICB0ZXh0TWVzc2FnZS5yb3dzID0gJzQnO1xuICB0ZXh0TWVzc2FnZS5jb2xzID0gJzMwJztcbiAgdGV4dE1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnWW91ciBjb21tZW50JztcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLnZhbHVlID0gJ0NvbW1lbnQnO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdNZXNzYWdlKGl0ZW1JZCwgdXNlck5hbWUsIHRleHRNZXNzYWdlKSk7XG4gIG5ld0NvbW1lbnREaXYuYXBwZW5kQ2hpbGQodXNlck5hbWUpO1xuICBuZXdDb21tZW50RGl2LmFwcGVuZENoaWxkKHRleHRNZXNzYWdlKTtcbiAgbmV3Q29tbWVudERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb21tZW50RGl2KTtcbn07XG5cbmV4cG9ydCB7IG5ld01lc3NhZ2VGb3JtIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBoaWRlQ1NTIGZyb20gJy4vaGlkZUNTUy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29tbWVudHMsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuaW1wb3J0IG5ld01lc3NhZ2VGb3JtIGZyb20gJy4vbmV3Q29tbWVudC5qcyc7XG5cbmNvbnN0IG1haW5Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtY29udGFpbmVyJyk7XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSAoZWxlbSkgPT4ge1xuICBtYWluQ29udC5jbGFzc0xpc3QudG9nZ2xlKCduby1ncmlkJyk7XG4gIGhpZGVDU1MoKTtcbiAgbWFpbkNvbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XG59O1xuXG5jb25zdCBjcmVhdGVQb3B1cCA9IChkZXRhaWxzLCBtc2dEYXQpID0+IHtcbiAgY29uc3QgZGlzaFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGl0ZW1kYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1kYXRhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZUNvbnRhaW5lci5pZCA9ICdtc2dDb250YWluZXInO1xuICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICBkaXNwbGF5Q29tbWVudHMobXNnRGF0LCBtZXNzYWdlQ29udGFpbmVyKTtcbiAgbmV3TWVzc2FnZUZvcm0oZm9ybUNvbnRhaW5lciwgZGV0YWlscy5pZE1lYWwpO1xuICBpdGVtZGF0YS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2RldGFpbHMuc3RyTWVhbFRodW1ifVwiIHdpZHRoPVwiMjUwcHhcIj48aDI+JHtkZXRhaWxzLnN0ck1lYWx9PC9oMj48aDQ+SW5ncmVkaWVudHM6PC9oND48cD4ke2RldGFpbHMuc3RySW5ncmVkaWVudDF9LCAke2RldGFpbHMuc3RySW5ncmVkaWVudDJ9LCAke2RldGFpbHMuc3RySW5ncmVkaWVudDN9LCAke2RldGFpbHMuc3RySW5ncmVkaWVudDR9LCAke2RldGFpbHMuc3RySW5ncmVkaWVudDV9PC9wPjxoND5SZWNpcGU6PC9oND5cbiAgPHAgY2xhc3M9XCJyZWNpcGVcIj4ke2RldGFpbHMuc3RySW5zdHJ1Y3Rpb25zfTwvcD5gO1xuICBpdGVtZGF0YS5pZCA9IGRldGFpbHMuaWRNZWFsO1xuICBkaXNoUG9wdXAuaWQgPSAnbXlQb3B1cCc7XG4gIHBvcHVwQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPic7XG4gIHBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQb3B1cChkaXNoUG9wdXApKTtcbiAgZGlzaFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gIGRpc2hQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIG1haW5Db250LmNsYXNzTGlzdC50b2dnbGUoJ25vLWdyaWQnKTtcbiAgZGlzaFBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9uKTtcbiAgZGlzaFBvcHVwLmFwcGVuZENoaWxkKGl0ZW1kYXRhKTtcbiAgZGlzaFBvcHVwLmFwcGVuZENoaWxkKG1lc3NhZ2VDb250YWluZXIpO1xuICBkaXNoUG9wdXAuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIG1haW5Db250LmFwcGVuZENoaWxkKGRpc2hQb3B1cCk7XG59O1xuXG5jb25zdCBnZXRJdGVtRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBmb29kSXRlbURhdGFVUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nO1xuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZm9vZEl0ZW1EYXRhVVJMICsgaWQpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHJlc3BvbnNJbmZvID0gcmVzcG9uc2VKc29uLm1lYWxzWzBdO1xuICBjb25zdCBtZXNzYWdlRGF0YSA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcbiAgY3JlYXRlUG9wdXAocmVzcG9uc0luZm8sIG1lc3NhZ2VEYXRhKTtcbn07XG5cbmV4cG9ydCB7IGdldEl0ZW1EYXRhIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldEFsbERhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2V0Rm9vZC5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbmNvbnN0IFtmcmVuY2hFbGVtZW50LCBwb3J0dWd1ZXNlRWxlbWVudCwgaXRhbGlhbkVsZW1lbnRdID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbmxldCBjYXRlZ29yeVNlbGVjdGVkID0gZnJlbmNoRWxlbWVudDtcbmNvbnN0IGZyZW5jaFVSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9hPUZyZW5jaCc7XG5jb25zdCBwb3J0dWd1ZXNlVVJMID0gYFxuICBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9hPVBvcnR1Z3Vlc2VgO1xuY29uc3QgaXRhbGlhblVSTCA9IGBcbiAgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/YT1JdGFsaWFuYDtcblxuZnJlbmNoRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2F0ZWdvcnlTZWxlY3RlZCA9IGZyZW5jaEVsZW1lbnQ7XG4gIGZyZW5jaEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgcG9ydHVndWVzZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgaXRhbGlhbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgY2F0ZWdvcnlTZWxlY3RlZC50ZXh0Q29udGVudCA9ICdGcmVuY2gnO1xuICBwb3J0dWd1ZXNlRWxlbWVudC50ZXh0Q29udGVudCA9ICdQb3J0dWd1ZXNlJztcbiAgaXRhbGlhbkVsZW1lbnQudGV4dENvbnRlbnQgPSAnSXRhbGlhbic7XG4gIGdldEFsbERhdGEoZnJlbmNoVVJMLCBjYXRlZ29yeVNlbGVjdGVkKTtcbn0pO1xuXG5wb3J0dWd1ZXNlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2F0ZWdvcnlTZWxlY3RlZCA9IHBvcnR1Z3Vlc2VFbGVtZW50O1xuICBwb3J0dWd1ZXNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICBmcmVuY2hFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIGl0YWxpYW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIGNhdGVnb3J5U2VsZWN0ZWQudGV4dENvbnRlbnQgPSAnUG9ydHVndWVzZSc7XG4gIGZyZW5jaEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRnJlbmNoJztcbiAgaXRhbGlhbkVsZW1lbnQudGV4dENvbnRlbnQgPSAnSXRhbGlhbic7XG4gIGdldEFsbERhdGEocG9ydHVndWVzZVVSTCwgY2F0ZWdvcnlTZWxlY3RlZCk7XG59KTtcblxuaXRhbGlhbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNhdGVnb3J5U2VsZWN0ZWQgPSBpdGFsaWFuRWxlbWVudDtcbiAgaXRhbGlhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgZnJlbmNoRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICBwb3J0dWd1ZXNlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICBjYXRlZ29yeVNlbGVjdGVkLnRleHRDb250ZW50ID0gJ0l0YWxpYW4nO1xuICBmcmVuY2hFbGVtZW50LnRleHRDb250ZW50ID0gJ0ZyZW5jaCc7XG4gIHBvcnR1Z3Vlc2VFbGVtZW50LnRleHRDb250ZW50ID0gJ1BvcnR1Z3Vlc2UnO1xuICBnZXRBbGxEYXRhKGl0YWxpYW5VUkwsIGNhdGVnb3J5U2VsZWN0ZWQpO1xufSk7XG5cbmdldEFsbERhdGEoZnJlbmNoVVJMLCBjYXRlZ29yeVNlbGVjdGVkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==