/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ goAbout)
/* harmony export */ });
/* harmony import */ var _jpg_campsite_kitchen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jpg/campsite-kitchen.jpg */ "./src/jpg/campsite-kitchen.jpg");



function goAbout() {
    const content = document.querySelector('#content');
    
    const title = document.createElement('h1');
    title.innerHTML = "Born in the outdoors.";
    content.appendChild(title);

    const aboutImg = document.createElement('img');
    aboutImg.src = _jpg_campsite_kitchen_jpg__WEBPACK_IMPORTED_MODULE_0__;
    aboutImg.alt = "A campfire in the woods";
    content.appendChild(aboutImg);

    const description = document.createElement('p');
    description.innerHTML = "The idea for this was conceived right where you'd want it to be - over a campfire one night in the woods, with a few friends, a few drinks, and some unexpectedly good food.  From there it sat dormant for a while as more expected career options were pursued, but eventually, the woods came calling loud enough that we figured we'd give this a shot, now here we are!";
    content.appendChild(description);
};


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ goHome)
/* harmony export */ });
/* harmony import */ var _jpg_pizza_title_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jpg/pizza-title.jpg */ "./src/jpg/pizza-title.jpg");


function goHome() {
    const content = document.querySelector('#content');
    
    const title = document.createElement('h1');
    title.innerHTML = "Gavin's Campfire Pizzaria";
    content.appendChild(title);

    const pizzaImg = document.createElement('img');
    pizzaImg.src = _jpg_pizza_title_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pizzaImg.alt = "A personal sized pizza on a plate by a campfire";
    content.appendChild(pizzaImg);

    const description = document.createElement('p');
    description.innerHTML = "Bringing quality pizza to the great outdoors!";
    content.appendChild(description);
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ goMenu)
/* harmony export */ });
/* harmony import */ var _jpg_camp_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jpg/camp-pizza.jpg */ "./src/jpg/camp-pizza.jpg");
/* harmony import */ var _jpg_grilled_cheese_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jpg/grilled-cheese.jpg */ "./src/jpg/grilled-cheese.jpg");
/* harmony import */ var _jpg_s_more_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jpg/s-more.jpg */ "./src/jpg/s-more.jpg");
/* harmony import */ var _jpg_hot_chocolate_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jpg/hot-chocolate.jpg */ "./src/jpg/hot-chocolate.jpg");





let menuList = [];

function menuDish(lnk, alt, ttle, dsc) {
    const imgLnk = lnk;
    const imgAlt = alt;
    const title = ttle;
    const desc = dsc;
    return { imgLnk, imgAlt, title, desc };
};

menuList.push(menuDish(_jpg_camp_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__, 'A Hawaiian-style pizza', "Campfire Pizza", "Our classic choice, choose your cheese types and any combination of toppings!"));
menuList.push(menuDish(_jpg_grilled_cheese_jpg__WEBPACK_IMPORTED_MODULE_1__, "A toasted grilled cheese sandwich on a plate", "Campfire Grilled Cheese", "A classic campfire lunch with the best melted sharp cheddar!  Choose with or without spicy chipotle avocado spread."));
menuList.push(menuDish(_jpg_s_more_jpg__WEBPACK_IMPORTED_MODULE_2__, "A toasted s'more by a campfire", "Dessert S'more", "A hand-roasted s'more cooked to your liking and with your choice of chocolate!"));
menuList.push(menuDish(_jpg_hot_chocolate_jpg__WEBPACK_IMPORTED_MODULE_3__, "A mug of hot chocolate by a campfire", "Campfire Hot Chocolate", "Rich hot chocolate topped with a toasted marshmallow.  A must-have for cold nights at the campground!"));

function goMenu() {


    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.innerHTML = "Menu";
    content.appendChild(title);

    for (let i = 0; i < menuList.length; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        content.appendChild(menuItem);

        const menuImage = document.createElement('img');
        menuImage.classList.add('menu-image');
        menuImage.src = menuList[i].imgLnk;
        menuImage.alt = menuList[i].imgAlt;
        menuItem.appendChild(menuImage);

        const itemTitle = document.createElement('h2');
        itemTitle.classList.add('item-title');
        itemTitle.innerHTML = menuList[i].title;
        menuItem.appendChild(itemTitle);

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-description');
        itemDesc.innerHTML = menuList[i].desc;
        menuItem.appendChild(itemDesc);
    };
};

/***/ }),

/***/ "./src/jpg/camp-pizza.jpg":
/*!********************************!*\
  !*** ./src/jpg/camp-pizza.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f058de5371bf93cbea9.jpg";

/***/ }),

/***/ "./src/jpg/campsite-kitchen.jpg":
/*!**************************************!*\
  !*** ./src/jpg/campsite-kitchen.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eeb7dfc6706fcb78b144.jpg";

/***/ }),

/***/ "./src/jpg/grilled-cheese.jpg":
/*!************************************!*\
  !*** ./src/jpg/grilled-cheese.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52506c4d5e7320681cc4.jpg";

/***/ }),

/***/ "./src/jpg/hot-chocolate.jpg":
/*!***********************************!*\
  !*** ./src/jpg/hot-chocolate.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe8bfafe12a6906425d3.jpg";

/***/ }),

/***/ "./src/jpg/pizza-title.jpg":
/*!*********************************!*\
  !*** ./src/jpg/pizza-title.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc5a6ed18d12cfe1aa4d.jpg";

/***/ }),

/***/ "./src/jpg/s-more.jpg":
/*!****************************!*\
  !*** ./src/jpg/s-more.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1562db4667d348617cc1.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");




console.log("Webpack running");

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

function clear() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
};

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click',() => {
    clear();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click',() => {
    clear();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click',() => {
    clear();
    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7OztBQUdoQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0RBQUs7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEM7O0FBRTNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpREFBSztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ5QztBQUNZO0FBQ2hCO0FBQ1M7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsdUJBQXVCLGdEQUFLO0FBQzVCLHVCQUF1QixvREFBYTtBQUNwQyx1QkFBdUIsNENBQUs7QUFDNUIsdUJBQXVCLG1EQUFPOztBQUVmOzs7QUFHZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQitCO0FBQ0E7QUFDRTs7QUFFakM7O0FBRUEsb0RBQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU07QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU07QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQU87QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAnLi9qcGcvY2FtcHNpdGUta2l0Y2hlbi5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdvQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQm9ybiBpbiB0aGUgb3V0ZG9vcnMuXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFib3V0SW1nLnNyYyA9IEFib3V0O1xuICAgIGFib3V0SW1nLmFsdCA9IFwiQSBjYW1wZmlyZSBpbiB0aGUgd29vZHNcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiVGhlIGlkZWEgZm9yIHRoaXMgd2FzIGNvbmNlaXZlZCByaWdodCB3aGVyZSB5b3UnZCB3YW50IGl0IHRvIGJlIC0gb3ZlciBhIGNhbXBmaXJlIG9uZSBuaWdodCBpbiB0aGUgd29vZHMsIHdpdGggYSBmZXcgZnJpZW5kcywgYSBmZXcgZHJpbmtzLCBhbmQgc29tZSB1bmV4cGVjdGVkbHkgZ29vZCBmb29kLiAgRnJvbSB0aGVyZSBpdCBzYXQgZG9ybWFudCBmb3IgYSB3aGlsZSBhcyBtb3JlIGV4cGVjdGVkIGNhcmVlciBvcHRpb25zIHdlcmUgcHVyc3VlZCwgYnV0IGV2ZW50dWFsbHksIHRoZSB3b29kcyBjYW1lIGNhbGxpbmcgbG91ZCBlbm91Z2ggdGhhdCB3ZSBmaWd1cmVkIHdlJ2QgZ2l2ZSB0aGlzIGEgc2hvdCwgbm93IGhlcmUgd2UgYXJlIVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufTtcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2pwZy9waXp6YS10aXRsZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnb0hvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiR2F2aW4ncyBDYW1wZmlyZSBQaXp6YXJpYVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltZy5zcmMgPSBJbWFnZTtcbiAgICBwaXp6YUltZy5hbHQgPSBcIkEgcGVyc29uYWwgc2l6ZWQgcGl6emEgb24gYSBwbGF0ZSBieSBhIGNhbXBmaXJlXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaXp6YUltZyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkJyaW5naW5nIHF1YWxpdHkgcGl6emEgdG8gdGhlIGdyZWF0IG91dGRvb3JzIVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufTtcbiIsImltcG9ydCBwaXp6YSBmcm9tICcuL2pwZy9jYW1wLXBpenphLmpwZyc7XG5pbXBvcnQgZ3JpbGxlZENoZWVzZSBmcm9tICcuL2pwZy9ncmlsbGVkLWNoZWVzZS5qcGcnO1xuaW1wb3J0IHNNb3JlIGZyb20gJy4vanBnL3MtbW9yZS5qcGcnO1xuaW1wb3J0IGhvdENob2MgZnJvbSAnLi9qcGcvaG90LWNob2NvbGF0ZS5qcGcnO1xuXG5sZXQgbWVudUxpc3QgPSBbXTtcblxuZnVuY3Rpb24gbWVudURpc2gobG5rLCBhbHQsIHR0bGUsIGRzYykge1xuICAgIGNvbnN0IGltZ0xuayA9IGxuaztcbiAgICBjb25zdCBpbWdBbHQgPSBhbHQ7XG4gICAgY29uc3QgdGl0bGUgPSB0dGxlO1xuICAgIGNvbnN0IGRlc2MgPSBkc2M7XG4gICAgcmV0dXJuIHsgaW1nTG5rLCBpbWdBbHQsIHRpdGxlLCBkZXNjIH07XG59O1xuXG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKHBpenphLCAnQSBIYXdhaWlhbi1zdHlsZSBwaXp6YScsIFwiQ2FtcGZpcmUgUGl6emFcIiwgXCJPdXIgY2xhc3NpYyBjaG9pY2UsIGNob29zZSB5b3VyIGNoZWVzZSB0eXBlcyBhbmQgYW55IGNvbWJpbmF0aW9uIG9mIHRvcHBpbmdzIVwiKSk7XG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKGdyaWxsZWRDaGVlc2UsIFwiQSB0b2FzdGVkIGdyaWxsZWQgY2hlZXNlIHNhbmR3aWNoIG9uIGEgcGxhdGVcIiwgXCJDYW1wZmlyZSBHcmlsbGVkIENoZWVzZVwiLCBcIkEgY2xhc3NpYyBjYW1wZmlyZSBsdW5jaCB3aXRoIHRoZSBiZXN0IG1lbHRlZCBzaGFycCBjaGVkZGFyISAgQ2hvb3NlIHdpdGggb3Igd2l0aG91dCBzcGljeSBjaGlwb3RsZSBhdm9jYWRvIHNwcmVhZC5cIikpO1xubWVudUxpc3QucHVzaChtZW51RGlzaChzTW9yZSwgXCJBIHRvYXN0ZWQgcydtb3JlIGJ5IGEgY2FtcGZpcmVcIiwgXCJEZXNzZXJ0IFMnbW9yZVwiLCBcIkEgaGFuZC1yb2FzdGVkIHMnbW9yZSBjb29rZWQgdG8geW91ciBsaWtpbmcgYW5kIHdpdGggeW91ciBjaG9pY2Ugb2YgY2hvY29sYXRlIVwiKSk7XG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKGhvdENob2MsIFwiQSBtdWcgb2YgaG90IGNob2NvbGF0ZSBieSBhIGNhbXBmaXJlXCIsIFwiQ2FtcGZpcmUgSG90IENob2NvbGF0ZVwiLCBcIlJpY2ggaG90IGNob2NvbGF0ZSB0b3BwZWQgd2l0aCBhIHRvYXN0ZWQgbWFyc2htYWxsb3cuICBBIG11c3QtaGF2ZSBmb3IgY29sZCBuaWdodHMgYXQgdGhlIGNhbXBncm91bmQhXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ29NZW51KCkge1xuXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBtZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gbWVudUxpc3RbaV0uaW1nTG5rO1xuICAgICAgICBtZW51SW1hZ2UuYWx0ID0gbWVudUxpc3RbaV0uaW1nQWx0O1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSBtZW51TGlzdFtpXS50aXRsZTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBtZW51TGlzdFtpXS5kZXNjO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGdvSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGdvTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGdvQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5cbmNvbnNvbGUubG9nKFwiV2VicGFjayBydW5uaW5nXCIpO1xuXG5nb0hvbWUoKTtcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNsZWFyKCk7XG4gICAgZ29Ib21lKCk7XG59KTtcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY2xlYXIoKTtcbiAgICBnb01lbnUoKTtcbn0pO1xuXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjbGVhcigpO1xuICAgIGdvQWJvdXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9