self["webpackHotUpdate"]("main",{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./components/Example */ "./resources/js/components/Example.js");

/***/ }),

/***/ "./resources/js/components/Example.js":
/*!********************************************!*\
  !*** ./resources/js/components/Example.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _image_vendedor_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/vendedor.png */ "./resources/image/vendedor.png");
/* harmony import */ var _image_charla_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/charla-small.png */ "./resources/image/charla-small.png");
/* harmony import */ var _image_bolsa_de_la_compra_small_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/bolsa-de-la-compra-small.png */ "./resources/image/bolsa-de-la-compra-small.png");
/* harmony import */ var _image_inventario_small_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../image/inventario-small.png */ "./resources/image/inventario-small.png");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sass/app.scss */ "./resources/sass/app.scss");
/* module decorator */ module = __webpack_require__.hmd(module);









function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "customNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link active",
    "aria-current": "page",
    href: "#"
  }, "Quienes Somos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Portafolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Nuestra trayectoria")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Contactenos")))));
}

function CardSection(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mainSection",
    style: {
      border: props.cssBorderColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "imageContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imagesCard",
    src: image1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card-title"
  }, "Card title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    className: "text-muted"
  }, "Last updated 3 mins ago"))))));
}

function PrimarySection(params) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mainSection",
    style: {
      background: params.cssBorderColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imageMainSection",
    src: params.image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contentText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contenedorContentTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "titleText"
  }, " ", params.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bodyText"
  }, params.contentBody))));
}

function SecondSection(params) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mainSection",
    style: {
      background: params.cssBorderColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contentText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contenedorContentTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "titleText"
  }, " ", params.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bodyText"
  }, params.contentBody)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imageMainSection",
    src: params.image,
    alt: ""
  })));
}

function ThirdSection(params) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sectionPortafolio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "portafolio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio col-sm-4 md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "itemPortafolio-img",
    src: params.image,
    alt: "iconSell"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio-Body"
  }, "Compras Online")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio col-sm-4 md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "itemPortafolio-img",
    src: params.image2,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio-Body"
  }, "Contacto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio col-sm-4 md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "itemPortafolio-img",
    src: params.image3,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemPortafolio-Body"
  }, "Productos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footerSectionPortafolio"
  }));
}

function FourthSection(params) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "allBody"
  }, "this is the four section");
}

function Example() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "firstSection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrimarySection, {
    section: "1",
    cssBorderColor: "#0052D4",
    image: "https://image.freepik.com/foto-gratis/platos-desechables-ecologicos-hechos-papel-sobre-fondo-naranja_169016-2163.jpg",
    content: "Productos Desechables",
    contentBody: "Facilidad de compra para cualquier tipo de producto desechable para comestibles y porta comidas"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SecondSection, {
    section: "2",
    cssBorderColor: "#0072ff",
    image: "https://image.freepik.com/foto-gratis/platos-desechables-ecologicos-hechos-papel-sobre-superficie-naranja_169016-1784.jpg",
    content: "Compras en linea",
    contentBody: "Compra desde cualquier parte, entregas inmediatas"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThirdSection, {
    section: "3",
    image: _image_bolsa_de_la_compra_small_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    image2: _image_charla_small_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    image3: _image_inventario_small_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FourthSection, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader__WEBPACK_IMPORTED_MODULE_7__.hot)(module)(Example));
/*
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
*/

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Example, null)), document.getElementById('example'));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference all chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".css";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("acea52126a281d6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYzNmZDdjYzgwYmEzMWY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNRLFVBQVQsR0FBcUI7QUFDakIsc0JBQ0UsaUhBQ0U7QUFBSyxNQUFFLEVBQUM7QUFBUixrQkFDTTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBK0Isb0JBQWEsTUFBNUM7QUFBbUQsUUFBSSxFQUFDO0FBQXhELHFCQURGLENBREYsZUFJRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDO0FBQTdCLGtCQURGLENBSkYsZUFPRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDO0FBQTdCLDJCQURGLENBUEYsZUFVRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDO0FBQTdCLG1CQURGLENBVkYsQ0FETixDQURGLENBREY7QUFvQkQ7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFJMUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUE2QixTQUFLLEVBQUU7QUFBQ0MsTUFBQUEsTUFBTSxFQUFFRCxLQUFLLENBQUNFO0FBQWY7QUFBcEMsa0JBQ0k7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFD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O0FBQUssYUFBUyxFQUFDO0FBQWYsZ0NBREY7QUFNRDs7QUFFRCxTQUFTVSxPQUFULEdBQW1CO0FBQ2pCLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBRU0saURBQUMsVUFBRCxPQUZOLGVBR007QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxpREFBQyxjQUFEO0FBQWdCLFdBQU8sRUFBQyxHQUF4QjtBQUEyQixrQkFBYyxFQUFDLFNBQTFDO0FBQXFELFNBQUssRUFBQyxzSEFBM0Q7QUFBa0wsV0FBTyxFQUFDLHVCQUExTDtBQUFrTixlQUFXLEVBQUM7QUFBOU4sSUFERixlQUdFLGlEQUFDLGFBQUQ7QUFBZSxXQUFPLEVBQUMsR0FBdkI7QUFBMEIsa0JBQWMsRUFBQyxTQUF6QztBQUFtRCxTQUFLLEVBQUMsMkhBQXpEO0FBQXNMLFdBQU8sRUFBQyxrQkFBOUw7QUFBaU4sZUFBVyxFQUFDO0FBQTdOLElBSEYsZUFLRSxpREFBQyxZQUFEO0FBQWMsV0FBTyxFQUFDLEdBQXRCO0FBQTBCLFNBQUssRUFBRW5CLDJFQUFqQztBQUF5QyxVQUFNLEVBQUVELCtEQUFqRDtBQUE0RCxVQUFNLEVBQUVFLG1FQUFVQTtBQUE5RSxJQUxGLGVBT0UsaURBQUMsYUFBRCxPQVBGLENBSE4sQ0FERjtBQWdCRDs7QUFFRCxpRUFBZUoscURBQUcsQ0FBQ3VCLE1BQUQsQ0FBSCxDQUFZRCxPQUFaLENBQWY7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBdkIsNkNBQUEsZUFDRSxpREFBQyw2Q0FBRCxxQkFDRSxpREFBQyxPQUFELE9BREYsQ0FERixFQUlFMEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBSkY7Ozs7Ozs7O1VDM0tBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7Ozs7O1VDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxyXG4gKiBpbmNsdWRlcyBSZWFjdCBhbmQgb3RoZXIgaGVscGVycy4gSXQncyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoaWxlXHJcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBSZWFjdCArIExhcmF2ZWwuXHJcbiAqL1xyXG5cclxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcclxuXHJcbi8qKlxyXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFJlYWN0IGNvbXBvbmVudCBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXHJcbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cclxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cclxuICovXHJcblxyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvRXhhbXBsZScpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtob3R9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXHJcblxyXG5pbXBvcnQgaW1hZ2VJY29uMSBmcm9tJy4uLy4uL2ltYWdlL3ZlbmRlZG9yLnBuZyc7XHJcbmltcG9ydCBjb250YWN0VXMgZnJvbSAnLi4vLi4vaW1hZ2UvY2hhcmxhLXNtYWxsLnBuZyc7XHJcbmltcG9ydCBjb21wcmEgZnJvbSAnLi4vLi4vaW1hZ2UvYm9sc2EtZGUtbGEtY29tcHJhLXNtYWxsLnBuZyc7XHJcbmltcG9ydCBpbnZlbnRhcmlvIGZyb20gJy4uLy4uL2ltYWdlL2ludmVudGFyaW8tc21hbGwucG5nJztcclxuaW1wb3J0ICcuLi8uLi9zYXNzL2FwcC5zY3NzJztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBpZD0nY3VzdG9tTmF2Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYganVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsgYWN0aXZlJyBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIiNcIj5RdWllbmVzIFNvbW9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIj5Qb3J0YWZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIj5OdWVzdHJhIHRyYXllY3RvcmlhPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIj5Db250YWN0ZW5vczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBDYXJkU2VjdGlvbihwcm9wcykge1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpblNlY3Rpb24nIHN0eWxlPXt7Ym9yZGVyOiBwcm9wcy5jc3NCb3JkZXJDb2xvcn19PlxyXG4gICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdpbWFnZUNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZXNDYXJkJyBzcmM9IHtpbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FyZCB0aXRsZTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5UaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXQgbG9uZ2VyLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBQcmltYXJ5U2VjdGlvbihwYXJhbXMpIHtcclxuICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpblNlY3Rpb24nIHN0eWxlPXt7YmFja2dyb3VuZDogcGFyYW1zLmNzc0JvcmRlckNvbG9yIH19PlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZU1haW5TZWN0aW9uXCJzcmM9e3BhcmFtcy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudFRleHQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JDb250ZW50VGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlVGV4dFwiPiB7cGFyYW1zLmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5VGV4dFwiPntwYXJhbXMuY29udGVudEJvZHl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU2Vjb25kU2VjdGlvbihwYXJhbXMpIHtcclxuICAgIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21haW5TZWN0aW9uJyBzdHlsZT17e2JhY2tncm91bmQ6IHBhcmFtcy5jc3NCb3JkZXJDb2xvciAsIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudFRleHQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvckNvbnRlbnRUaXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVRleHRcIj4ge3BhcmFtcy5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVRleHRcIj57cGFyYW1zLmNvbnRlbnRCb2R5fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZU1haW5TZWN0aW9uXCJzcmM9e3BhcmFtcy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgIDwvZGl2PiBcclxuICAgIDwvPik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBUaGlyZFNlY3Rpb24ocGFyYW1zKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25Qb3J0YWZvbGlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpbyBjb2wtc20tNCBtZC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZ3VyZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naXRlbVBvcnRhZm9saW8taW1nJ3NyYz17cGFyYW1zLmltYWdlfSBhbHQ9XCJpY29uU2VsbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpby1Cb2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgQ29tcHJhcyBPbmxpbmVcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1Qb3J0YWZvbGlvIGNvbC1zbS00IG1kLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlndXJlJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpdGVtUG9ydGFmb2xpby1pbWcnc3JjPXtwYXJhbXMuaW1hZ2UyfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1Qb3J0YWZvbGlvLUJvZHlcIj5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RvXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpbyBjb2wtc20tNCBtZC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZ3VyZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naXRlbVBvcnRhZm9saW8taW1nJ3NyYz17cGFyYW1zLmltYWdlM30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1Qb3J0YWZvbGlvLUJvZHlcIj5cclxuICAgICAgICAgICAgICAgIFByb2R1Y3Rvc1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyU2VjdGlvblBvcnRhZm9saW9cIj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBGb3VydGhTZWN0aW9uKHBhcmFtcykge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxCb2R5XCI+XHJcbiAgICAgICAgdGhpcyBpcyB0aGUgZm91ciBzZWN0aW9uIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gRXhhbXBsZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPjwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0U2VjdGlvbic+XHJcbiAgICAgICAgICAgICAgPFByaW1hcnlTZWN0aW9uIHNlY3Rpb249JzEnY3NzQm9yZGVyQ29sb3I9JyMwMDUyRDQnICBpbWFnZT0naHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mb3RvLWdyYXRpcy9wbGF0b3MtZGVzZWNoYWJsZXMtZWNvbG9naWNvcy1oZWNob3MtcGFwZWwtc29icmUtZm9uZG8tbmFyYW5qYV8xNjkwMTYtMjE2My5qcGcnIGNvbnRlbnQ9J1Byb2R1Y3RvcyBEZXNlY2hhYmxlcycgY29udGVudEJvZHk9J0ZhY2lsaWRhZCBkZSBjb21wcmEgcGFyYSBjdWFscXVpZXIgdGlwbyBkZSBwcm9kdWN0byBkZXNlY2hhYmxlIHBhcmEgY29tZXN0aWJsZXMgeSBwb3J0YSBjb21pZGFzJz48L1ByaW1hcnlTZWN0aW9uPlxyXG4gIFxyXG4gICAgICAgICAgICAgIDxTZWNvbmRTZWN0aW9uIHNlY3Rpb249JzInY3NzQm9yZGVyQ29sb3I9JyMwMDcyZmYnIGltYWdlPSdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZvdG8tZ3JhdGlzL3BsYXRvcy1kZXNlY2hhYmxlcy1lY29sb2dpY29zLWhlY2hvcy1wYXBlbC1zb2JyZS1zdXBlcmZpY2llLW5hcmFuamFfMTY5MDE2LTE3ODQuanBnJyAgY29udGVudD0nQ29tcHJhcyBlbiBsaW5lYScgY29udGVudEJvZHk9J0NvbXByYSBkZXNkZSBjdWFscXVpZXIgcGFydGUsIGVudHJlZ2FzIGlubWVkaWF0YXMnPjwvU2Vjb25kU2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRoaXJkU2VjdGlvbiBzZWN0aW9uPSczJyBpbWFnZT17Y29tcHJhfSBpbWFnZTI9e2NvbnRhY3RVc30gaW1hZ2UzPXtpbnZlbnRhcmlvfT48L1RoaXJkU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgPEZvdXJ0aFNlY3Rpb24+PC9Gb3VydGhTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoRXhhbXBsZSk7XHJcbiBcclxuLypcclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8RXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XHJcbn1cclxuKi9cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgPEV4YW1wbGUgLz5cclxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcclxuKTtcclxuIiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jc3NcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWNlYTUyMTI2YTI4MWQ2ZFwiKSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJSZWFjdERPTSIsImhvdCIsImltYWdlSWNvbjEiLCJjb250YWN0VXMiLCJjb21wcmEiLCJpbnZlbnRhcmlvIiwiTmF2aWdhdGlvbiIsIkNhcmRTZWN0aW9uIiwicHJvcHMiLCJib3JkZXIiLCJjc3NCb3JkZXJDb2xvciIsImltYWdlMSIsIlByaW1hcnlTZWN0aW9uIiwicGFyYW1zIiwiYmFja2dyb3VuZCIsImltYWdlIiwiY29udGVudCIsImNvbnRlbnRCb2R5IiwiU2Vjb25kU2VjdGlvbiIsIlRoaXJkU2VjdGlvbiIsImltYWdlMiIsImltYWdlMyIsIkZvdXJ0aFNlY3Rpb24iLCJFeGFtcGxlIiwibW9kdWxlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=