"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/getLocation.js":
/*!**********************************!*\
  !*** ./component/getLocation.js ***!
  \**********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Location = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Location, Component1);\n    var _super = _createSuper(Location);\n    function Location(props) {\n        _classCallCheck(this, Location);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"getGeoInfo\", function() {\n            axios__WEBPACK_IMPORTED_MODULE_2__.get(\"https://ipapi.co/json/\").then(function(response) {\n                var data = response.data;\n                _this.setState({\n                    countryName: data.country_name,\n                    countryCode: data.country_calling_code\n                });\n            }).catch(function(error) {\n                console.log(error);\n            });\n        });\n        _this.state = {\n            countryName: \"\",\n            countryCode: \"\"\n        };\n        return _this;\n    }\n    _createClass(Location, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.getGeoInfo();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__, {\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    href: \"https://en.wikipedia.org/wiki/\",\n                    to: \"https://en.wikipedia.org/wiki/\".concat(this.state.countryName),\n                    children: this.state.countryName\n                }, void 0, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/getLocation.js\",\n                    lineNumber: 32,\n                    columnNumber: 16\n                }, this);\n            }\n        }\n    ]);\n    return Location;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZ2V0TG9jYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDRztBQUU1QixZQUFjLGlCQThCVjs7OzthQTlCRUksUUFBUSxDQUNFQyxLQUFLOzs7a0NBQ1BBLEtBQUssQ0FObkIsQ0FNb0I7UUFNaEJDLCtDQUFBQSxZQUFVLEVBQUcsV0FBTTtZQUNmSixzQ0FDUSxDQUFDLHdCQUF3QixDQUFDLENBQzdCTSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO2dCQUNoQixJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0MsSUFBSTtnQkFDeEIsTUFBS0MsUUFBUSxDQUFDO29CQUNWQyxXQUFXLEVBQUVGLElBQUksQ0FBQ0csWUFBWTtvQkFDOUJDLFdBQVcsRUFBRUosSUFBSSxDQUFDSyxvQkFBb0I7aUJBQ3pDLENBQUM7YUFDTCxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7Z0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7YUFDckIsQ0FBQztTQUNUO1FBbEJHLE1BQUtHLEtBQUssR0FBRztZQUNUUixXQUFXLEVBQUUsRUFBRTtZQUNmRSxXQUFXLEVBQUUsRUFBRTtTQUNsQjs7Ozs7WUFnQkxPLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDaEIsSUFBSSxDQUFDZixVQUFVLEVBQUU7YUFDcEI7OztZQUVEZ0IsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ0wscUJBQU8sOERBQUNuQixzQ0FBSTtvQkFBRW9CLE1BQU0sRUFBRSxRQUFRO29CQUFFQyxHQUFHLEVBQUMscUJBQXFCO29CQUFDQyxJQUFJLEVBQUMsZ0NBQWdDO29CQUFDQyxFQUFFLEVBQUUsZ0NBQStCLENBQXlCLE9BQXZCLElBQUksQ0FBQ04sS0FBSyxDQUFDUixXQUFXLENBQUU7OEJBQUcsSUFBSSxDQUFDUSxLQUFLLENBQUNSLFdBQVc7Ozs7O3dCQUFRO2FBQ2pNOzs7O0NBQ0osQ0E3QnNCWCw0Q0FBUyxDQTZCL0I7QUFDRCwrREFBZUcsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZ2V0TG9jYXRpb24uanM/MzFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNsYXNzIExvY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdW50cnlOYW1lOiBcIlwiLFxuICAgICAgICAgICAgY291bnRyeUNvZGU6IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0R2VvSW5mbyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoXCJodHRwczovL2lwYXBpLmNvL2pzb24vXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeU5hbWU6IGRhdGEuY291bnRyeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZTogZGF0YS5jb3VudHJ5X2NhbGxpbmdfY29kZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldEdlb0luZm8oKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxMaW5rICB0YXJnZXQ9e1wiX2JsYW5rXCJ9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvXCIgdG89e2BodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8ke3RoaXMuc3RhdGUuY291bnRyeU5hbWV9YH0+e3RoaXMuc3RhdGUuY291bnRyeU5hbWV9PC9MaW5rPlxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJheGlvcyIsIkxpbmsiLCJMb2NhdGlvbiIsInByb3BzIiwiZ2V0R2VvSW5mbyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZXRTdGF0ZSIsImNvdW50cnlOYW1lIiwiY291bnRyeV9uYW1lIiwiY291bnRyeUNvZGUiLCJjb3VudHJ5X2NhbGxpbmdfY29kZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsInRhcmdldCIsInJlbCIsImhyZWYiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/getLocation.js\n");

/***/ })

});