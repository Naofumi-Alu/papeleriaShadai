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
/******/ 	__webpack_require__.h = () => ("10d93795fd8abf99")
/******/ })();
/******/ 
/******/ }
);