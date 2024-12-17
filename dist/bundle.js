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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo_Logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo_Logic.js */ \"./src/createToDo_Logic.js\");\n/* harmony import */ var _createToDo_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo_DOM.js */ \"./src/createToDo_DOM.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '/date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n \r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\r\n\r\n    const addButton = document.querySelector(\"#addTodo\");\r\nif(addButton){\r\n    \r\n    addButton.addEventListener(\"click\", () => {\r\n        const usersToDo = (0,_createToDo_Logic_js__WEBPACK_IMPORTED_MODULE_0__.retrieveTodo)();\r\n    \r\n        if(usersToDo){\r\n            (0,_createToDo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(usersToDo);\r\n        }\r\n    })\r\n\r\n} else {\r\n    console.error(\"Add button not found\");\r\n}\r\n\r\nconst now = new Date();\r\nconsole.log(`Current timestamp: ${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(now)}`);\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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