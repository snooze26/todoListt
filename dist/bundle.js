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

/***/ "./src/createToDo_DOM.js":
/*!*******************************!*\
  !*** ./src/createToDo_DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(text = \"\"){\r\n    const todoTable = document.querySelector(\"#list\");\r\n    if(!todoTable){\r\n        console.error(\"Table element not found\");\r\n        return;\r\n    };\r\n\r\n    const row = document.createElement(\"tr\");\r\n    row.className = \"rows\";\r\n    document.body.appendChild(row);\r\n\r\n    //add properties \r\n    const title = document.createElement(\"td\");\r\n    title.textContent = text.title;\r\n    title.className = \"todoCell\";\r\n\r\n    const description = document.createElement(\"td\");\r\n    description.textContent = text.description;\r\n    description.className = \"todoCell\";\r\n\r\n    const dueDate = document.createElement(\"td\");\r\n    dueDate.textContent = text.dueDate;\r\n    dueDate.className = \"todoCell\";\r\n\r\n\r\n    const priority = document.createElement(\"td\");\r\n    priority.textContent = text.priority;\r\n    priority.className = \"todoCell\";\r\n\r\n\r\n    const notes = document.createElement(\"td\");\r\n    notes.textContent = text.notes;\r\n    notes.className = \"todoCell\";\r\n\r\n\r\n    //add checkbox, edit, delete \r\n    const checkboxCell = document.createElement(\"td\");\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.addEventListener(\"click\", () => {\r\n        row.style.textDecoration = checkbox.checked ? \"line-through\" : \"none\";\r\n    });\r\n    checkboxCell.appendChild(checkbox);\r\n\r\n    //add timeStamp \r\n    const timeStampCell = document.createElement(\"td\");\r\n    timeStampCell.textContent = text.created;\r\n\r\n    const editCell = document.createElement(\"td\");\r\n    const editBtn = document.createElement(\"button\");\r\n    editBtn.textContent = \"Edit\";\r\n    editBtn.addEventListener(\"click\", () => {\r\n        const newTitle = prompt(\"Edit title:\", text.title);\r\n        const newDescription = prompt(\"Edit description:\", text.description);\r\n        const newDueDate = prompt(\"Edit dueDate:\", text.dueDate);\r\n        const newPriority = prompt(\"Edit priority:\", text.priority);\r\n        const newNotes = prompt(\"Edit notes:\", text.notes);\r\n\r\n        if(newTitle) title.textContent = newTitle;\r\n        if(newDescription) description.textContent = newDescription;\r\n        if(newDueDate) dueDate.textContent = newDueDate;\r\n        if(priority) priority.textContent = newPriority;\r\n        if(notes) notes.textContent = newNotes; \r\n    });\r\n    editCell.appendChild(editBtn);\r\n   \r\n    const deleteCell = document.createElement(\"td\");\r\n    const deleteBtn = document.createElement(\"button\");\r\n    deleteBtn.textContent = \"Delete\";\r\n    deleteBtn.addEventListener(\"click\", () => {\r\n        row.remove(); \r\n    })\r\n    deleteCell.appendChild(deleteBtn);\r\n\r\n    row.appendChild(title);\r\n    row.appendChild(description);\r\n    row.appendChild(dueDate);\r\n    row.appendChild(priority);\r\n    row.appendChild(notes);\r\n    row.appendChild(checkboxCell);\r\n    row.appendChild(editCell);\r\n    row.appendChild(deleteCell);\r\n\r\n    todoTable.appendChild(row);\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/createToDo_DOM.js?");

/***/ }),

/***/ "./src/createToDo_Logic.js":
/*!*********************************!*\
  !*** ./src/createToDo_Logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   retrieveTodo: () => (/* binding */ retrieveTodo),\n/* harmony export */   toDo: () => (/* binding */ toDo)\n/* harmony export */ });\nclass toDo {\r\n    constructor(title, description, dueDate, priority, notes, created){\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.notes = notes; \r\n        this.created = created;\r\n    }\r\n\r\n    displayInfo(){\r\n        console.log(`${this.title} | ${this.description} | due by ${this.dueDate} | the priority level is ${this.priority}`);\r\n\r\n    }\r\n}\r\n\r\nfunction retrieveTodo() {\r\n    const title = prompt(\"Enter the title:\");\r\n    if(!title) return null;\r\n\r\n    const description = prompt(\"Enter the description\");\r\n    if(!description) return null;\r\n\r\n    const dueDate = prompt(\"When is this due?\");\r\n    if(!dueDate) return null;\r\n    \r\n    const priority = prompt(\"Rate the level of priority: High, Medium, Low\");\r\n    if(!priority) return (null);\r\n\r\n    const notes = prompt(\"Insert any notes\");\r\n    if(!notes) return (null);\r\n\r\n    const now = new Date();\r\n    const timeStamp = getTime(now);\r\n    console.log(timeStamp);\r\n\r\n    return new toDo(title, description, dueDate, priority, notes, timeStamp);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/createToDo_Logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo_Logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo_Logic.js */ \"./src/createToDo_Logic.js\");\n/* harmony import */ var _createToDo_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo_DOM.js */ \"./src/createToDo_DOM.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/getTime.js\");\n\r\n\r\n \r\n\r\n\r\n\r\nconst addButton = document.querySelector(\"#addTodo\");\r\naddButton.addEventListener(\"click\", () => {\r\n    const usersToDo = (0,_createToDo_Logic_js__WEBPACK_IMPORTED_MODULE_0__.retrieveTodo)();\r\n\r\n    if(usersToDo){\r\n        (0,_createToDo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(usersToDo);\r\n    }\r\n})\r\n\r\nconst now = new Date();\r\nconsole.log(`Current timestamp: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.getTime)(now)}`);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from \"./constants/date-fns/constants\";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n/**\n * @constant\n * @name constructFromSymbol\n * @summary Symbol enabling Date extensions to inherit properties from the reference date.\n *\n * The symbol is used to enable the `constructFrom` function to construct a date\n * using a reference date and a value. It allows to transfer extra properties\n * from the reference date to the new date. It's useful for extensions like\n * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as\n * a constructor argument.\n */\nconst constructFromSymbol = Symbol.for(\"constructDateFrom\");\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/constants.js?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/date-fns/constants.js\");\n\n\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * Starting from v3.7.0, it allows to construct a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from \"./constructFrom/date-fns\";\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date>(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use constructor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   );\n * }\n */\nfunction constructFrom(date, value) {\n  if (typeof date === \"function\") return date(value);\n\n  if (date && typeof date === \"object\" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)\n    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);\n\n  if (date instanceof Date) return new date.constructor(value);\n\n  return new Date(value);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/constructFrom.js?");

/***/ }),

/***/ "./node_modules/date-fns/getTime.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getTime.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getTime: () => (/* binding */ getTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n/**\n * @name getTime\n * @category Timestamp Helpers\n * @summary Get the milliseconds timestamp of the given date.\n *\n * @description\n * Get the milliseconds timestamp of the given date.\n *\n * @param date - The given date\n *\n * @returns The timestamp\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05.123:\n * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 1330515905123\n */\nfunction getTime(date) {\n  return +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTime);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/getTime.js?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * Starting from v3.7.0, it clones a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument, context) {\n  // [TODO] Get rid of `toDate` or `constructFrom`?\n  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/toDate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;