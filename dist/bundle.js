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

/***/ "./view/keyboard.scss":
/*!****************************!*\
  !*** ./view/keyboard.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./view/keyboard.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/keyboard */ \"./view/keyboard.js\");\n\r\n\r\ndocument.querySelector('body').append((0,_view_keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard)());\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./view/keyboard.js":
/*!**************************!*\
  !*** ./view/keyboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _keyboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.scss */ \"./view/keyboard.scss\");\n\r\n\r\nconst RU_UPPERCASE = [];\r\nconst RU_LOWERCASE = [\r\n  'ё',\r\n  '1',\r\n  '2',\r\n  '3',\r\n  '4',\r\n  '5',\r\n  '6',\r\n  '7',\r\n  '8',\r\n  '9',\r\n  '0',\r\n  '-',\r\n  '=',\r\n  'Backspace',\r\n  'Tab',\r\n  'й',\r\n  'ц',\r\n  'у',\r\n  'к',\r\n  'е',\r\n  'н',\r\n  'г',\r\n  'ш',\r\n  'щ',\r\n  'з',\r\n  'х',\r\n  'ъ',\r\n  '\\\\',\r\n  'Del',\r\n  'Caps Lock',\r\n  'ф',\r\n  'ы',\r\n  'в',\r\n  'а',\r\n  'п',\r\n  'р',\r\n  'о',\r\n  'л',\r\n  'д',\r\n  'ж',\r\n  'э',\r\n  'Enter',\r\n  'Shift',\r\n  'я',\r\n  'ч',\r\n  'с',\r\n  'м',\r\n  'и',\r\n  'т',\r\n  'ь',\r\n  'б',\r\n  'ю',\r\n  '.',\r\n  '▲',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  'Space',\r\n  'Alt',\r\n  '◄',\r\n  '▼',\r\n  '►',\r\n  'Ctrl',\r\n];\r\nconst ENG_UPPERCASE = [];\r\nconst ENG_LOWERCASE = [];\r\n\r\nconst FIRST_ROW_IDX = 0;\r\nconst SECOND_ROW_IDX = 14;\r\nconst THIRD_ROW_IDX = 29;\r\nconst FOURTH_ROW_IDX = 42;\r\nconst FIFTH_ROW_IDX = 55;\r\n\r\n// const node = `${(\r\n//   <div class='wrapper'>\r\n//     <h1>Виртуальная клавиатура</h1>\r\n//     <textarea name='' id='' cols='30' rows='10'></textarea>\r\n//     <div class='keyboard'>\r\n//       <div class='keyboard__row'>\r\n//         <div class='keyboard__button'>`</div>\r\n//         <div class='keyboard__button'>1</div>\r\n//         <div class='keyboard__button'>2</div>\r\n//         <div class='keyboard__button'>3</div>\r\n//         <div class='keyboard__button'>4</div>\r\n//         <div class='keyboard__button'>5</div>\r\n//         <div class='keyboard__button'>6</div>\r\n//         <div class='keyboard__button'>7</div>\r\n//         <div class='keyboard__button'>8</div>\r\n//         <div class='keyboard__button'>9</div>\r\n//         <div class='keyboard__button'>0</div>\r\n//         <div class='keyboard__button'>-</div>\r\n//         <div class='keyboard__button'>=</div>\r\n//         <div class='keyboard__button keyboard__button_backspace'>Backcpace</div>\r\n//       </div>\r\n//       <div class='keyboard__row'>\r\n//         <div class='keyboard__button keyboard__button_tab'>Tab</div>\r\n//         <div class='keyboard__button'>q</div>\r\n//         <div class='keyboard__button'>w</div>\r\n//         <div class='keyboard__button'>e</div>\r\n//         <div class='keyboard__button'>r</div>\r\n//         <div class='keyboard__button'>t</div>\r\n//         <div class='keyboard__button'>y</div>\r\n//         <div class='keyboard__button'>u</div>\r\n//         <div class='keyboard__button'>i</div>\r\n//         <div class='keyboard__button'>o</div>\r\n//         <div class='keyboard__button'>p</div>\r\n//         <div class='keyboard__button'>[</div>\r\n//         <div class='keyboard__button'>]</div>\r\n//         <div class='keyboard__button'>\\</div>\r\n//         <div class='keyboard__button keyboard__button_del'>Del</div>\r\n//       </div>\r\n//       <div class='keyboard__row'>\r\n//         <div class='keyboard__button keyboard__button_caps-lock'>Caps Lock</div>\r\n//         <div class='keyboard__button'>a</div>\r\n//         <div class='keyboard__button'>s</div>\r\n//         <div class='keyboard__button'>d</div>\r\n//         <div class='keyboard__button'>f</div>\r\n//         <div class='keyboard__button'>g</div>\r\n//         <div class='keyboard__button'>h</div>\r\n//         <div class='keyboard__button'>j</div>\r\n//         <div class='keyboard__button'>k</div>\r\n//         <div class='keyboard__button'>l</div>\r\n//         <div class='keyboard__button'>;</div>\r\n//         <div class='keyboard__button'>'</div>\r\n//         <div class='keyboard__button'>Enter</div>\r\n//       </div>\r\n//       <div class='keyboard__row'>\r\n//         <div class='keyboard__button keyboard__button_shift'>Shift</div>\r\n//         <div class='keyboard__button'>z</div>\r\n//         <div class='keyboard__button'>x</div>\r\n//         <div class='keyboard__button'>c</div>\r\n//         <div class='keyboard__button'>v</div>\r\n//         <div class='keyboard__button'>b</div>\r\n//         <div class='keyboard__button'>n</div>\r\n//         <div class='keyboard__button'>m</div>\r\n//         <div class='keyboard__button'>,</div>\r\n//         <div class='keyboard__button'>.</div>\r\n//         <div class='keyboard__button'>/</div>\r\n//         <div class='keyboard__button keyboard__button_case-up'>▲</div>\r\n//         <div class='keyboard__button keyboard__button_shift'>Shift</div>\r\n//       </div>\r\n//       <div class='keyboard__row'>\r\n//         <div class='keyboard__button keyboard__button_ctrl'>Ctrl</div>\r\n//         <div class='keyboard__button keyboard__button_win'>Win</div>\r\n//         <div class='keyboard__button keyboard__button_alt'>Alt</div>\r\n//         <div class='keyboard__button keyboard__button_space'></div>\r\n//         <div class='keyboard__button keyboard__button_alt'>Alt</div>\r\n//         <div class='keyboard__button keyboard__button_case-left'>◄</div>\r\n//         <div class='keyboard__button keyboard__button_case-down'>▼</div>\r\n//         <div class='keyboard__button keyboard__button_case-right'>►</div>\r\n//         <div class='keyboard__button keyboard__button_ctrl'>Ctrl</div>\r\n//       </div>\r\n//     </div>\r\n//     <p>Клавиатура создана в операционной системе Windows</p>\r\n//     <p>Для переключения раскладки: левые Alt + Shift</p>\r\n//   </div>\r\n// )}`;\r\n\r\nconst Keyboard = () => {\r\n  const wrapper = document.createElement('div');\r\n\r\n  const h1 = document.createElement('h1');\r\n  const textarea = document.createElement('textarea');\r\n  const keyboard = document.createElement('div');\r\n  const pFirst = document.createElement('p');\r\n  const pLast = document.createElement('p');\r\n\r\n  h1.innerHTML = 'Виртуальная клавиатура';\r\n  pFirst.innerHTML = 'Клавиатура создана в операционной системе Windows';\r\n  pLast.innerHTML = 'Для переключения раскладки: левые Alt + Shift';\r\n  keyboard.classList.add('keyboard');\r\n\r\n  for (let i = 0; i < RU_LOWERCASE.length; i++) {\r\n    if (\r\n      i === FIRST_ROW_IDX ||\r\n      i === SECOND_ROW_IDX ||\r\n      i === THIRD_ROW_IDX ||\r\n      i === FOURTH_ROW_IDX ||\r\n      i === FIFTH_ROW_IDX\r\n    ) {\r\n      const row = document.createElement('div');\r\n      row.classList.add('keyboard__row');\r\n      keyboard.append(row);\r\n    }\r\n    const row = keyboard.querySelectorAll('.keyboard__row');\r\n    const button = document.createElement('div');\r\n    button.classList.add('keyboard__button');\r\n    button.innerHTML = `${RU_LOWERCASE[i]}`;\r\n    row[row.length - 1].append(button);\r\n    if (RU_LOWERCASE[i].length > 1) {\r\n      button.classList.add(\r\n        `keyboard__button_${RU_LOWERCASE[i].toLowerCase().replace(' ', '-')}`\r\n      );\r\n    }\r\n  }\r\n\r\n  wrapper.classList.add('wrapper');\r\n  wrapper.append(h1);\r\n  wrapper.append(textarea);\r\n  wrapper.append(keyboard);\r\n  wrapper.append(pFirst);\r\n  wrapper.append(pLast);\r\n\r\n  return wrapper;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./view/keyboard.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;