webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Background.tsx":
/*!***********************************!*\
  !*** ./components/Background.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/theme */ "./styles/theme.ts");



var _jsxFileName = "C:\\Users\\minja\\Desktop\\DEVELOP\\portfolio\\components\\Background.tsx",
    _this = undefined,
    _s = $RefreshSig$();





function multipleBoxShadow(n) {
  var shadows = [];

  for (var i = 0; i < n; i++) {
    var x = Math.floor(Math.random() * 700);
    var y = Math.floor(Math.random() * 100);
    shadows.push("".concat(x, "vh ").concat(y, "vh #FFF"));
  }

  return shadows.join(", ");
}

var animStar = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:translateY(0);}to{transform:translateY(-100vh);}"]);

var Background = function Background() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(styles_theme__WEBPACK_IMPORTED_MODULE_3__["theme"].color.black),
      bgColor = _useState[0],
      setBgColor = _useState[1];

  var shadowsSmall = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return multipleBoxShadow(700);
  }, []);
  var shadowsMedium = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return multipleBoxShadow(200);
  }, []);
  var shadowsBig = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return multipleBoxShadow(100);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", function () {
      if (innerHeight * 2.5 < pageYOffset) setBgColor(styles_theme__WEBPACK_IMPORTED_MODULE_3__["theme"].color.white);else setBgColor(styles_theme__WEBPACK_IMPORTED_MODULE_3__["theme"].color.black);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    bgColor: bgColor,
    children: bgColor === styles_theme__WEBPACK_IMPORTED_MODULE_3__["theme"].color.black && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stars, {
        shadows: shadowsSmall,
        size: 1,
        duration: 50
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stars, {
        shadows: shadowsMedium,
        size: 2,
        duration: 70
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stars, {
        shadows: shadowsBig,
        size: 3,
        duration: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Background, "ZTX1+yuOAy2Zksna7r6ZdYD+tSA=");

_c = Background;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Background__Container",
  componentId: "sc-12u27rt-0"
})(["background-color:", ";transition:0.2s;width:100%;height:100%;position:fixed;z-index:-1;top:0;left:0;"], function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
});
_c2 = Container;
var Stars = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Background__Stars",
  componentId: "sc-12u27rt-1"
})(["width:", "px;height:", "px;background:transparent;box-shadow:", ";animation:", " ", "s linear infinite;&:after{content:\" \";position:absolute;top:100vh;width:", "px;height:", "px;background:transparent;box-shadow:", ";}"], function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var shadows = _ref4.shadows;
  return shadows;
}, animStar, function (_ref5) {
  var duration = _ref5.duration;
  return duration;
}, function (_ref6) {
  var size = _ref6.size;
  return size;
}, function (_ref7) {
  var size = _ref7.size;
  return size;
}, function (_ref8) {
  var shadows = _ref8.shadows;
  return shadows;
});
_c3 = Stars;
/* harmony default export */ __webpack_exports__["default"] = (Background);

var _c, _c2, _c3;

$RefreshReg$(_c, "Background");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Stars");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnRzeCJdLCJuYW1lcyI6WyJtdWx0aXBsZUJveFNoYWRvdyIsIm4iLCJzaGFkb3dzIiwiaSIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwicHVzaCIsImpvaW4iLCJhbmltU3RhciIsImtleWZyYW1lcyIsIkJhY2tncm91bmQiLCJ1c2VTdGF0ZSIsInRoZW1lIiwiY29sb3IiLCJibGFjayIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwic2hhZG93c1NtYWxsIiwidXNlTWVtbyIsInNoYWRvd3NNZWRpdW0iLCJzaGFkb3dzQmlnIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJ3aGl0ZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0YXJzIiwic2l6ZSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLENBQTNCLEVBQThDO0FBQzVDLE1BQU1DLE9BQWlCLEdBQUcsRUFBMUI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixDQUFwQixFQUF1QkUsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixRQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBVjtBQUNBLFFBQU1DLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFWO0FBQ0FMLFdBQU8sQ0FBQ08sSUFBUixXQUFnQkwsQ0FBaEIsZ0JBQXVCSSxDQUF2QjtBQUNEOztBQUNELFNBQU9OLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLElBQWIsQ0FBUDtBQUNEOztBQUVE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LE9BQWpCO0FBQUEsQ0FiUCxDQUFYO01BQU0rQixLO0FBaUJTcEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODgzZjkyMjczODAxNjg4MjM0MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwic3R5bGVzL3RoZW1lXCI7XG5cbmZ1bmN0aW9uIG11bHRpcGxlQm94U2hhZG93KG46IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNoYWRvd3M6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcwMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgc2hhZG93cy5wdXNoKGAke3h9dmggJHt5fXZoICNGRkZgKTtcbiAgfVxuICByZXR1cm4gc2hhZG93cy5qb2luKFwiLCBcIik7XG59XG5cbmNvbnN0IGFuaW1TdGFyID0ga2V5ZnJhbWVzYFxuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2aCk7IH1cbmA7XG5cbmNvbnN0IEJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ0NvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4odGhlbWUuY29sb3IuYmxhY2spO1xuICBjb25zdCBzaGFkb3dzU21hbGwgPSB1c2VNZW1vKCgpID0+IG11bHRpcGxlQm94U2hhZG93KDcwMCksIFtdKTtcbiAgY29uc3Qgc2hhZG93c01lZGl1bSA9IHVzZU1lbW8oKCkgPT4gbXVsdGlwbGVCb3hTaGFkb3coMjAwKSwgW10pO1xuICBjb25zdCBzaGFkb3dzQmlnID0gdXNlTWVtbygoKSA9PiBtdWx0aXBsZUJveFNoYWRvdygxMDApLCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAoaW5uZXJIZWlnaHQgKiAyLjUgPCBwYWdlWU9mZnNldCkgc2V0QmdDb2xvcih0aGVtZS5jb2xvci53aGl0ZSk7XG4gICAgICBlbHNlIHNldEJnQ29sb3IodGhlbWUuY29sb3IuYmxhY2spO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGJnQ29sb3I9e2JnQ29sb3J9PlxuICAgICAge2JnQ29sb3IgPT09IHRoZW1lLmNvbG9yLmJsYWNrICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3RhcnMgc2hhZG93cz17c2hhZG93c1NtYWxsfSBzaXplPXsxfSBkdXJhdGlvbj17NTB9IC8+XG4gICAgICAgICAgPFN0YXJzIHNoYWRvd3M9e3NoYWRvd3NNZWRpdW19IHNpemU9ezJ9IGR1cmF0aW9uPXs3MH0gLz5cbiAgICAgICAgICA8U3RhcnMgc2hhZG93cz17c2hhZG93c0JpZ30gc2l6ZT17M30gZHVyYXRpb249ezEwMH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGJnQ29sb3I6IHN0cmluZyB9PmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiZ0NvbG9yIH0pID0+IGJnQ29sb3J9O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBTdGFycyA9IHN0eWxlZC5kaXY8eyBzaGFkb3dzOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgZHVyYXRpb246IG51bWJlciB9PmBcbiAgd2lkdGg6ICR7KHsgc2l6ZSB9KSA9PiBzaXplfXB4O1xuICBoZWlnaHQ6ICR7KHsgc2l6ZSB9KSA9PiBzaXplfXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogJHsoeyBzaGFkb3dzIH0pID0+IHNoYWRvd3N9O1xuICBhbmltYXRpb246ICR7YW5pbVN0YXJ9ICR7KHsgZHVyYXRpb24gfSkgPT4gZHVyYXRpb259cyBsaW5lYXIgaW5maW5pdGU7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHZoO1xuICAgIHdpZHRoOiAkeyh7IHNpemUgfSkgPT4gc2l6ZX1weDtcbiAgICBoZWlnaHQ6ICR7KHsgc2l6ZSB9KSA9PiBzaXplfXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6ICR7KHsgc2hhZG93cyB9KSA9PiBzaGFkb3dzfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=