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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"::-webkit-scrollbar {\\r\\n  width: 5.5px;\\r\\n  background: var(--light-color);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: var(--dark-color);\\r\\n}\\r\\n\\r\\n/* Define variables for colors and other properties */\\r\\n\\r\\n:root {\\r\\n  --dark-color: #000;\\r\\n  --light-color: #c9d1d9;\\r\\n  --primary-color: #f2f2f2;\\r\\n  --secondary-color: #91b797;\\r\\n  --background-color: #00b5b5;\\r\\n  --primary-font: 'Raleway', sans-serif;\\r\\n  --secondary-font: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n/* General styles */\\r\\n\\r\\nbody {\\r\\n  font-family: var(--primary-font);\\r\\n  background-color: var(--background-color);\\r\\n  margin: 0;\\r\\n  padding: 3rem 8rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n  font-family: var(--secondary-font);\\r\\n  font-size: 55px;\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 60px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-family: var(--secondary-font);\\r\\n  font-size: 35px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Grid layout */\\r\\n\\r\\nmain {\\r\\n  display: grid;\\r\\n  grid-template-columns: 8fr 2fr 6fr 1fr;\\r\\n}\\r\\n\\r\\n#scores-container {\\r\\n  grid-column: 1;\\r\\n}\\r\\n\\r\\n#scores-input-container {\\r\\n  grid-column: 3;\\r\\n}\\r\\n\\r\\n/* Scores list */\\r\\n\\r\\n#list-headline {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#scores-list {\\r\\n  list-style: none;\\r\\n  font-size: 15px;\\r\\n  font-weight: 600;\\r\\n  border: 2.5px solid;\\r\\n  overflow-y: scroll;\\r\\n  margin-top: 25px;\\r\\n  max-height: 30vh;\\r\\n  padding: 0;\\r\\n  background: var(--primary-color);\\r\\n  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);\\r\\n  transition: transform 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.score {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 6px;\\r\\n  transition: background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.score:nth-child(odd) {\\r\\n  background: var(--primary-color);\\r\\n}\\r\\n\\r\\n.score:nth-child(even) {\\r\\n  background: var(--light-color);\\r\\n}\\r\\n\\r\\n.score:hover {\\r\\n  transform: translateY(-2px);\\r\\n  background-color: var(--secondary-color);\\r\\n  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);\\r\\n  margin-bottom: -2px;\\r\\n  padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.score .gold {\\r\\n  color: #ffb700;\\r\\n}\\r\\n\\r\\n.score .silver {\\r\\n  color: #747474;\\r\\n}\\r\\n\\r\\n.score .bronze {\\r\\n  color: #964d19;\\r\\n}\\r\\n\\r\\n.score .fa-medal {\\r\\n  color: #fea900;\\r\\n}\\r\\n\\r\\n/* Spinner */\\r\\n\\r\\n.spinner {\\r\\n  border: 6px solid rgba(0, 0, 0, 0.1);\\r\\n  border-top-color: var(--background-color);\\r\\n  border-radius: 50%;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  animation: spinner 0.8s linear infinite;\\r\\n  margin: 1rem auto;\\r\\n}\\r\\n\\r\\n@keyframes spinner {\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Buttons */\\r\\n\\r\\nbutton {\\r\\n  font-family: var(--secondary-font);\\r\\n  font-weight: 600;\\r\\n  font-size: 14px;\\r\\n  padding: 0 5px;\\r\\n  border: 2.5px solid;\\r\\n  box-shadow: 3px 3px var(--dark-color);\\r\\n  background-color: var(--primary-color);\\r\\n  transition: transform 0.1s ease-in-out;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: var(--secondary-color);\\r\\n  transform: translateY(-2px);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  border-style: double;\\r\\n}\\r\\n\\r\\n#refresh-btn {\\r\\n  padding: 3px 15px;\\r\\n}\\r\\n\\r\\n/* Form */\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-top: 25px;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  display: inline-grid;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  font-family: var(--primary-font);\\r\\n  font-weight: 600;\\r\\n  font-size: 14px;\\r\\n  border: 2.5px solid;\\r\\n  margin-bottom: 1.2rem;\\r\\n  padding: 6px 10px;\\r\\n  border-left: solid 5.5px var(--light-color);\\r\\n  transition: border-left 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n  border-left: solid 5.5px var(--secondary-color);\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: var(--dark-color);\\r\\n}\\r\\n\\r\\n#submit-btn {\\r\\n  align-self: flex-end;\\r\\n  padding: 3px 12px;\\r\\n}\\r\\n\\r\\n/* Notification popup */\\r\\n\\r\\n#notification {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 1;\\r\\n  background-color: rgba(0, 0, 0, 0.3);\\r\\n  transition: opacity 0.1s ease-in-out;\\r\\n  backdrop-filter: blur(10px);\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n#popup {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  padding: 1.5rem 2rem;\\r\\n  border: 3px solid;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: var(--background-color);\\r\\n  box-shadow: 0 0 1rem rgb(0 0 0 / 50%);\\r\\n  min-width: 16.5rem;\\r\\n}\\r\\n\\r\\n#notification.show {\\r\\n  display: block;\\r\\n  opacity: 1;\\r\\n  animation: pop-up 0.3s ease-in-out 1;\\r\\n}\\r\\n\\r\\n@keyframes pop-up {\\r\\n  0% {\\r\\n    transform: scale(0.8);\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.copyright a {\\r\\n  text-decoration: none;\\r\\n  color: var(--dark-color);\\r\\n}\\r\\n\\r\\n/* Media Queries */\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  body {\\r\\n    padding: 2rem 1.4rem 0;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 2.6rem;\\r\\n  }\\r\\n\\r\\n  main {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding-bottom: 2rem;\\r\\n    gap: 2.5rem;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    position: relative;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1080px) {\\r\\n  main {\\r\\n    grid-template-columns: 8fr 2fr 6fr;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_restApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/restApi.js */ \"./src/modules/restApi.js\");\n\n\n\nconst form = document.querySelector('form');\nconst userName = document.querySelector('#name');\nconst userScore = document.querySelector('#score');\nconst scoresList = document.querySelector('#scores-list');\nconst refreshBtn = document.querySelector('#refresh-btn');\nconst notification = document.querySelector('#notification');\n\nform.addEventListener('submit', async (event) => {\n  event.preventDefault();\n  const score = {\n    user: userName.value,\n    score: userScore.value,\n  };\n  userName.value = '';\n  userScore.value = '';\n  await (0,_modules_restApi_js__WEBPACK_IMPORTED_MODULE_1__.setData)(score);\n  // Show the notification after the data is submitted\n  notification.classList.add('show');\n  // Hide the notification after a short delay\n  setTimeout(() => {\n    notification.classList.remove('show');\n  }, 3000);\n});\n\n// Get List of Scores on Page Load\nconst getScores = async () => {\n  scoresList.innerHTML = '';\n  const spinner = document.createElement('div');\n  spinner.classList.add('spinner');\n  // Add spinner to container\n  scoresList.appendChild(spinner);\n  const scores = await (0,_modules_restApi_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\n  // Sort Scores in Descending Order\n  scores.result.sort((a, b) => b.score - a.score);\n  let count = 0;\n  scores.result.forEach((item) => {\n    count += 1;\n    const li = document.createElement('li');\n    li.classList.add('score');\n    // Add icons to the scores\n    if (count === 1) {\n      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class=\"fas fa-trophy gold\"></i>`;\n    } else if (count === 2) {\n      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class=\"fas fa-trophy silver\"></i>`;\n    } else if (count === 3) {\n      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class=\"fas fa-trophy bronze\"></i>`;\n    } else {\n      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class=\"fas fa-medal\"></i>`;\n    }\n    scoresList.appendChild(li);\n  });\n  // Remove spinner from container\n  scoresList.removeChild(spinner);\n};\ngetScores();\n\n// Updated List of Scores by Pressing Refresh Btn\nrefreshBtn.addEventListener('click', async () => {\n  await getScores();\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/restApi.js":
/*!********************************!*\
  !*** ./src/modules/restApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"setData\": () => (/* binding */ setData)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ss3Eyn4cLT7TlGq5hYtl/scores/';\n\nconst getData = async () => {\n  const getApiData = await fetch(apiUrl);\n  const result = await getApiData.json();\n  return result;\n};\n\nconst setData = async (scores) => {\n  const setApiData = await fetch(apiUrl, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(scores),\n  });\n  const result = await setApiData.json();\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/restApi.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;