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

    const pizzaImg = document.createElement('img');
    aboutIMG.src = _jpg_campsite_kitchen_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pizzaImg.alt = "A campfire in the woods";
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


// Needs image links
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

_home_js__WEBPACK_IMPORTED_MODULE_0__["default"];

function clear() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
};

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click',() => {
    clear();
    _home_js__WEBPACK_IMPORTED_MODULE_0__["default"];
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click',() => {
    clear();
    goMenu();
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click',() => {
    clear();
    _about_js__WEBPACK_IMPORTED_MODULE_2__["default"];
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRWhDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzREFBSztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakIwQzs7QUFFM0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFLO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlDO0FBQ1k7QUFDaEI7QUFDUzs7OztBQUk5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBLHVCQUF1QixnREFBSztBQUM1Qix1QkFBdUIsb0RBQWE7QUFDcEMsdUJBQXVCLDRDQUFLO0FBQzVCLHVCQUF1QixtREFBTzs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQitCO0FBQ1o7QUFDYzs7QUFFakM7O0FBRUEsZ0RBQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU07QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJy4vanBnL2NhbXBzaXRlLWtpdGNoZW4uanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ29BYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJCb3JuIGluIHRoZSBvdXRkb29ycy5cIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHBpenphSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWJvdXRJTUcuc3JjID0gQWJvdXQ7XG4gICAgcGl6emFJbWcuYWx0ID0gXCJBIGNhbXBmaXJlIGluIHRoZSB3b29kc1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJUaGUgaWRlYSBmb3IgdGhpcyB3YXMgY29uY2VpdmVkIHJpZ2h0IHdoZXJlIHlvdSdkIHdhbnQgaXQgdG8gYmUgLSBvdmVyIGEgY2FtcGZpcmUgb25lIG5pZ2h0IGluIHRoZSB3b29kcywgd2l0aCBhIGZldyBmcmllbmRzLCBhIGZldyBkcmlua3MsIGFuZCBzb21lIHVuZXhwZWN0ZWRseSBnb29kIGZvb2QuICBGcm9tIHRoZXJlIGl0IHNhdCBkb3JtYW50IGZvciBhIHdoaWxlIGFzIG1vcmUgZXhwZWN0ZWQgY2FyZWVyIG9wdGlvbnMgd2VyZSBwdXJzdWVkLCBidXQgZXZlbnR1YWxseSwgdGhlIHdvb2RzIGNhbWUgY2FsbGluZyBsb3VkIGVub3VnaCB0aGF0IHdlIGZpZ3VyZWQgd2UnZCBnaXZlIHRoaXMgYSBzaG90LCBub3cgaGVyZSB3ZSBhcmUhXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59O1xuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vanBnL3BpenphLXRpdGxlLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdvSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJHYXZpbidzIENhbXBmaXJlIFBpenphcmlhXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBpenphSW1nLnNyYyA9IEltYWdlO1xuICAgIHBpenphSW1nLmFsdCA9IFwiQSBwZXJzb25hbCBzaXplZCBwaXp6YSBvbiBhIHBsYXRlIGJ5IGEgY2FtcGZpcmVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBpenphSW1nKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQnJpbmdpbmcgcXVhbGl0eSBwaXp6YSB0byB0aGUgZ3JlYXQgb3V0ZG9vcnMhXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59O1xuIiwiaW1wb3J0IHBpenphIGZyb20gJy4vanBnL2NhbXAtcGl6emEuanBnJztcbmltcG9ydCBncmlsbGVkQ2hlZXNlIGZyb20gJy4vanBnL2dyaWxsZWQtY2hlZXNlLmpwZyc7XG5pbXBvcnQgc01vcmUgZnJvbSAnLi9qcGcvcy1tb3JlLmpwZyc7XG5pbXBvcnQgaG90Q2hvYyBmcm9tICcuL2pwZy9ob3QtY2hvY29sYXRlLmpwZyc7XG5cblxuXG5sZXQgbWVudUxpc3QgPSBbXTtcblxuZnVuY3Rpb24gbWVudURpc2gobG5rLCBhbHQsIHR0bGUsIGRzYykge1xuICAgIGNvbnN0IGltZ0xuayA9IGxuaztcbiAgICBjb25zdCBpbWdBbHQgPSBhbHQ7XG4gICAgY29uc3QgdGl0bGUgPSB0dGxlO1xuICAgIGNvbnN0IGRlc2MgPSBkc2M7XG4gICAgcmV0dXJuIHsgaW1nTG5rLCBpbWdBbHQsIHRpdGxlLCBkZXNjIH07XG59O1xuXG5cbi8vIE5lZWRzIGltYWdlIGxpbmtzXG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKHBpenphLCAnQSBIYXdhaWlhbi1zdHlsZSBwaXp6YScsIFwiQ2FtcGZpcmUgUGl6emFcIiwgXCJPdXIgY2xhc3NpYyBjaG9pY2UsIGNob29zZSB5b3VyIGNoZWVzZSB0eXBlcyBhbmQgYW55IGNvbWJpbmF0aW9uIG9mIHRvcHBpbmdzIVwiKSk7XG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKGdyaWxsZWRDaGVlc2UsIFwiQSB0b2FzdGVkIGdyaWxsZWQgY2hlZXNlIHNhbmR3aWNoIG9uIGEgcGxhdGVcIiwgXCJDYW1wZmlyZSBHcmlsbGVkIENoZWVzZVwiLCBcIkEgY2xhc3NpYyBjYW1wZmlyZSBsdW5jaCB3aXRoIHRoZSBiZXN0IG1lbHRlZCBzaGFycCBjaGVkZGFyISAgQ2hvb3NlIHdpdGggb3Igd2l0aG91dCBzcGljeSBjaGlwb3RsZSBhdm9jYWRvIHNwcmVhZC5cIikpO1xubWVudUxpc3QucHVzaChtZW51RGlzaChzTW9yZSwgXCJBIHRvYXN0ZWQgcydtb3JlIGJ5IGEgY2FtcGZpcmVcIiwgXCJEZXNzZXJ0IFMnbW9yZVwiLCBcIkEgaGFuZC1yb2FzdGVkIHMnbW9yZSBjb29rZWQgdG8geW91ciBsaWtpbmcgYW5kIHdpdGggeW91ciBjaG9pY2Ugb2YgY2hvY29sYXRlIVwiKSk7XG5tZW51TGlzdC5wdXNoKG1lbnVEaXNoKGhvdENob2MsIFwiQSBtdWcgb2YgaG90IGNob2NvbGF0ZSBieSBhIGNhbXBmaXJlXCIsIFwiQ2FtcGZpcmUgSG90IENob2NvbGF0ZVwiLCBcIlJpY2ggaG90IGNob2NvbGF0ZSB0b3BwZWQgd2l0aCBhIHRvYXN0ZWQgbWFyc2htYWxsb3cuICBBIG11c3QtaGF2ZSBmb3IgY29sZCBuaWdodHMgYXQgdGhlIGNhbXBncm91bmQhXCIpKTtcblxuZnVuY3Rpb24gZ29NZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICAgICAgY29uc3QgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgICAgIG1lbnVJbWFnZS5zcmMgPSBtZW51TGlzdFtpXS5pbWdMbms7XG4gICAgICAgIG1lbnVJbWFnZS5hbHQgPSBtZW51TGlzdFtpXS5pbWdBbHQ7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IG1lbnVMaXN0W2ldLnRpdGxlO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IG1lbnVMaXN0W2ldLmRlc2M7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ29Ib21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgJy4vbWVudS5qcyc7XG5pbXBvcnQgZ29BYm91dCBmcm9tICcuL2Fib3V0LmpzJztcblxuY29uc29sZS5sb2coXCJXZWJwYWNrIHJ1bm5pbmdcIik7XG5cbmdvSG9tZTtcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNsZWFyKCk7XG4gICAgZ29Ib21lO1xufSk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNsZWFyKCk7XG4gICAgZ29NZW51KCk7XG59KTtcblxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY2xlYXIoKTtcbiAgICBnb0Fib3V0O1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=