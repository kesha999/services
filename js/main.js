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

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst initServicesSection = (servicesElement) => {\n  const SERVICES_MENU_CLOSE_DELAY = 150;\n  const SERVICES_SWIPER_AUTOPLAY_DELAY = 7500;\n  const SERVICES_SWIPER_AUTOPLAY_DELAY_MOBILE = 5000;\n\n  const servicesSliderElement = servicesElement.querySelector('.services__slider');\n  const servicesSliderPrevButtonElement = servicesSliderElement.querySelector('.services__slider-button--prev');\n  const servicesSliderNextButtonElement = servicesSliderElement.querySelector('.services__slider-button--next');\n  const servicesMenuElement = servicesElement.querySelector('.services__menu');\n  const servicesMenuListElement = servicesMenuElement.querySelector('.services__menu-list');\n  const servicesMenuLinksElements = servicesMenuListElement.querySelectorAll('.services__menu-link');\n  const servicesListElement = servicesElement.querySelector('.services__list');\n\n  let currentIndex = 0;\n\n  const servicesSwiper = new Swiper(servicesSliderElement, {\n    spaceBetween: 60,\n    loop: true,\n    navigation: {\n      prevEl: servicesSliderPrevButtonElement,\n      nextEl: servicesSliderNextButtonElement,\n    },\n    autoplay: {\n      delay: SERVICES_SWIPER_AUTOPLAY_DELAY_MOBILE,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true,\n      waitForTransition: true,\n    },\n    breakpoints: {\n      1280: {\n        autoplay: {\n          delay: SERVICES_SWIPER_AUTOPLAY_DELAY,\n        },\n      },\n    },\n  });\n\n  const setServicesMenuCurrentLink = (newIndex) => {\n    servicesMenuLinksElements[currentIndex].classList.remove('services__menu-link--current');\n    servicesMenuLinksElements[newIndex].classList.add('services__menu-link--current');\n    currentIndex = newIndex;\n  };\n\n  const onServicesMenuClick = (evt) => {\n    const link = evt.target.closest('.services__menu-link');\n\n    if (!link) {\n      return;\n    }\n\n    evt.preventDefault();\n    const index = +link.dataset.index;\n    servicesSwiper.slideToLoop(index);\n\n    setServicesMenuCurrentLink(index);\n\n    setTimeout(() => {\n      servicesMenuElement.classList.remove('services__menu--open');\n    }, SERVICES_MENU_CLOSE_DELAY);\n  };\n\n  const onServicesListClick = (evt) => {\n    const servicesMenuOpener = evt.target.closest('.services__button--all');\n\n    if (!servicesMenuOpener) {\n      return;\n    }\n\n    evt.preventDefault();\n    servicesMenuElement.classList.add('services__menu--open');\n  };\n\n  setServicesMenuCurrentLink(currentIndex);\n  servicesMenuListElement.addEventListener('click', onServicesMenuClick);\n  servicesListElement.addEventListener('click', onServicesListClick);\n\n  servicesSwiper.on('slideChange', () => {\n    setServicesMenuCurrentLink(servicesSwiper.realIndex);\n  });\n};\n\ndocument.querySelectorAll('.services').forEach(initServicesSection);\n\n\n//# sourceURL=webpack://nerds/./source/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;