"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./resources/js/components/Example.js":
/*!********************************************!*\
  !*** ./resources/js/components/Example.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
    contentBody: " de compra para cualquier tipo de producto desechable para comestibles y porta comidas"
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
/******/ 	__webpack_require__.h = () => ("13191c146371f062")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxhQUFTLEVBQUM7QUFBZixrQkFDRSxpREFBQyxjQUFEO0FBQWdCLFdBQU8sRUFBQyxHQUF4QjtBQUEyQixrQkFBYyxFQUFDLFNBQTFDO0FBQXFELFNBQUssRUFBQyxzSEFBM0Q7QUFBa0wsV0FBTyxFQUFDLHVCQUExTDtBQUFrTixlQUFXLEVBQUM7QUFBOU4sSUFERixlQUdFLGlEQUFDLGFBQUQ7QUFBZSxXQUFPLEVBQUMsR0FBdkI7QUFBMEIsa0JBQWMsRUFBQyxTQUF6QztBQUFtRCxTQUFLLEVBQUMsMkhBQXpEO0FBQXNMLFdBQU8sRUFBQyxrQkFBOUw7QUFBaU4sZUFBVyxFQUFDO0FBQTdOLElBSEYsZUFLRSxpREFBQyxZQUFEO0FBQWMsV0FBTyxFQUFDLEdBQXRCO0FBQTBCLFNBQUssRUFBRW5CLDJFQUFqQztBQUF5QyxVQUFNLEVBQUVELCtEQUFqRDtBQUE0RCxVQUFNLEVBQUVFLG1FQUFVQTtBQUE5RSxJQUxGLGVBT0UsaURBQUMsYUFBRCxPQVBGLENBSE4sQ0FERjtBQWdCRDs7QUFFRCxpRUFBZUoscURBQUcsQ0FBQ3VCLE1BQUQsQ0FBSCxDQUFZRCxPQUFaLENBQWY7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBdkIsNkNBQUEsZUFDRSxpREFBQyw2Q0FBRCxxQkFDRSxpREFBQyxPQUFELE9BREYsQ0FERixFQUlFMEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBSkY7Ozs7Ozs7O1VDM0tBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7Ozs7O1VDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FeGFtcGxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7aG90fSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xyXG5cclxuaW1wb3J0IGltYWdlSWNvbjEgZnJvbScuLi8uLi9pbWFnZS92ZW5kZWRvci5wbmcnO1xyXG5pbXBvcnQgY29udGFjdFVzIGZyb20gJy4uLy4uL2ltYWdlL2NoYXJsYS1zbWFsbC5wbmcnO1xyXG5pbXBvcnQgY29tcHJhIGZyb20gJy4uLy4uL2ltYWdlL2JvbHNhLWRlLWxhLWNvbXByYS1zbWFsbC5wbmcnO1xyXG5pbXBvcnQgaW52ZW50YXJpbyBmcm9tICcuLi8uLi9pbWFnZS9pbnZlbnRhcmlvLXNtYWxsLnBuZyc7XHJcbmltcG9ydCAnLi4vLi4vc2Fzcy9hcHAuc2Nzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgaWQ9J2N1c3RvbU5hdic+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IGp1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rIGFjdGl2ZScgYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIjXCI+UXVpZW5lcyBTb21vczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCI+UG9ydGFmb2xpbzwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCI+TnVlc3RyYSB0cmF5ZWN0b3JpYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCI+Q29udGFjdGVub3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gQ2FyZFNlY3Rpb24ocHJvcHMpIHtcclxuICBcclxuICBcclxuICBcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5TZWN0aW9uJyBzdHlsZT17e2JvcmRlcjogcHJvcHMuY3NzQm9yZGVyQ29sb3J9fT5cclxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0naW1hZ2VDb250ZW50Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2VzQ2FyZCcgc3JjPSB7aW1hZ2UxfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0IGxvbmdlci48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gUHJpbWFyeVNlY3Rpb24ocGFyYW1zKSB7XHJcbiAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5TZWN0aW9uJyBzdHlsZT17e2JhY2tncm91bmQ6IHBhcmFtcy5jc3NCb3JkZXJDb2xvciB9fT5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VNYWluU2VjdGlvblwic3JjPXtwYXJhbXMuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRUZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yQ29udGVudFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVRleHRcIj4ge3BhcmFtcy5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVRleHRcIj57cGFyYW1zLmNvbnRlbnRCb2R5fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIFNlY29uZFNlY3Rpb24ocGFyYW1zKSB7XHJcbiAgICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluU2VjdGlvbicgc3R5bGU9e3tiYWNrZ3JvdW5kOiBwYXJhbXMuY3NzQm9yZGVyQ29sb3IgLCB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRUZXh0Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JDb250ZW50VGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVUZXh0XCI+IHtwYXJhbXMuY29udGVudH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlUZXh0XCI+e3BhcmFtcy5jb250ZW50Qm9keX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VNYWluU2VjdGlvblwic3JjPXtwYXJhbXMuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8Lz4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gVGhpcmRTZWN0aW9uKHBhcmFtcykge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uUG9ydGFmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVBvcnRhZm9saW8gY29sLXNtLTQgbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWd1cmUnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2l0ZW1Qb3J0YWZvbGlvLWltZydzcmM9e3BhcmFtcy5pbWFnZX0gYWx0PVwiaWNvblNlbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVBvcnRhZm9saW8tQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgIENvbXByYXMgT25saW5lXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpbyBjb2wtc20tNCBtZC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZ3VyZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naXRlbVBvcnRhZm9saW8taW1nJ3NyYz17cGFyYW1zLmltYWdlMn0gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpby1Cb2R5XCI+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0b1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVBvcnRhZm9saW8gY29sLXNtLTQgbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWd1cmUnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2l0ZW1Qb3J0YWZvbGlvLWltZydzcmM9e3BhcmFtcy5pbWFnZTN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUG9ydGFmb2xpby1Cb2R5XCI+XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0b3NcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclNlY3Rpb25Qb3J0YWZvbGlvXCI+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRm91cnRoU2VjdGlvbihwYXJhbXMpIHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsQm9keVwiPlxyXG4gICAgICAgIHRoaXMgaXMgdGhlIGZvdXIgc2VjdGlvbiBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIEV4YW1wbGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gIFxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbj48L05hdmlnYXRpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdFNlY3Rpb24nPlxyXG4gICAgICAgICAgICAgIDxQcmltYXJ5U2VjdGlvbiBzZWN0aW9uPScxJ2Nzc0JvcmRlckNvbG9yPScjMDA1MkQ0JyAgaW1hZ2U9J2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZm90by1ncmF0aXMvcGxhdG9zLWRlc2VjaGFibGVzLWVjb2xvZ2ljb3MtaGVjaG9zLXBhcGVsLXNvYnJlLWZvbmRvLW5hcmFuamFfMTY5MDE2LTIxNjMuanBnJyBjb250ZW50PSdQcm9kdWN0b3MgRGVzZWNoYWJsZXMnIGNvbnRlbnRCb2R5PScgZGUgY29tcHJhIHBhcmEgY3VhbHF1aWVyIHRpcG8gZGUgcHJvZHVjdG8gZGVzZWNoYWJsZSBwYXJhIGNvbWVzdGlibGVzIHkgcG9ydGEgY29taWRhcyc+PC9QcmltYXJ5U2VjdGlvbj5cclxuICBcclxuICAgICAgICAgICAgICA8U2Vjb25kU2VjdGlvbiBzZWN0aW9uPScyJ2Nzc0JvcmRlckNvbG9yPScjMDA3MmZmJyBpbWFnZT0naHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mb3RvLWdyYXRpcy9wbGF0b3MtZGVzZWNoYWJsZXMtZWNvbG9naWNvcy1oZWNob3MtcGFwZWwtc29icmUtc3VwZXJmaWNpZS1uYXJhbmphXzE2OTAxNi0xNzg0LmpwZycgIGNvbnRlbnQ9J0NvbXByYXMgZW4gbGluZWEnIGNvbnRlbnRCb2R5PSdDb21wcmEgZGVzZGUgY3VhbHF1aWVyIHBhcnRlLCBlbnRyZWdhcyBpbm1lZGlhdGFzJz48L1NlY29uZFNlY3Rpb24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUaGlyZFNlY3Rpb24gc2VjdGlvbj0nMycgaW1hZ2U9e2NvbXByYX0gaW1hZ2UyPXtjb250YWN0VXN9IGltYWdlMz17aW52ZW50YXJpb30+PC9UaGlyZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3VydGhTZWN0aW9uPjwvRm91cnRoU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKEV4YW1wbGUpO1xyXG4gXHJcbi8qXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPEV4YW1wbGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xyXG59XHJcbiovXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgIDxFeGFtcGxlIC8+XHJcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpXHJcbik7XHJcbiIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzMTkxYzE0NjM3MWYwNjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsImhvdCIsImltYWdlSWNvbjEiLCJjb250YWN0VXMiLCJjb21wcmEiLCJpbnZlbnRhcmlvIiwiTmF2aWdhdGlvbiIsIkNhcmRTZWN0aW9uIiwicHJvcHMiLCJib3JkZXIiLCJjc3NCb3JkZXJDb2xvciIsImltYWdlMSIsIlByaW1hcnlTZWN0aW9uIiwicGFyYW1zIiwiYmFja2dyb3VuZCIsImltYWdlIiwiY29udGVudCIsImNvbnRlbnRCb2R5IiwiU2Vjb25kU2VjdGlvbiIsIlRoaXJkU2VjdGlvbiIsImltYWdlMiIsImltYWdlMyIsIkZvdXJ0aFNlY3Rpb24iLCJFeGFtcGxlIiwibW9kdWxlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=