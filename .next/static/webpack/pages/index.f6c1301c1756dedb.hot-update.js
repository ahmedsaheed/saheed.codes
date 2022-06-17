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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Location = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Location, Component1);\n    var _super = _createSuper(Location);\n    function Location(props) {\n        _classCallCheck(this, Location);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"getGeoInfo\", function() {\n            axios__WEBPACK_IMPORTED_MODULE_2__.get(\"https://ipapi.co/json/\").then(function(response) {\n                var data = response.data;\n                _this.setState({\n                    countryName: data.country_name,\n                    countryCode: data.country_calling_code\n                });\n            }).catch(function(error) {\n                console.log(error);\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"openTab\", function() {\n            window.open(\"https://en.wikipedia.org/wiki/\".concat(_this.state.countryName));\n        });\n        _this.state = {\n            countryName: \"\",\n            countryCode: \"\"\n        };\n        return _this;\n    }\n    _createClass(Location, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.getGeoInfo();\n                this.openTab();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                // return <Link  target={\"_blank\"} rel=\"noopener noreferrer\"  to={`https://en.wikipedia.org/wiki/${this.state.countryName}`}>{this.state.countryName}</Link>\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__, {\n                    onClick: openTab,\n                    children: this.state.countryName\n                }, void 0, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/getLocation.js\",\n                    lineNumber: 42,\n                    columnNumber: 18\n                }, this);\n            }\n        }\n    ]);\n    return Location;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZ2V0TG9jYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDRztBQUU1QixZQUFjLGlCQXlDVjs7OzthQXpDRUksUUFBUSxDQUNFQyxLQUFLOzs7a0NBQ1BBLEtBQUssQ0FObkIsQ0FNb0I7UUFNaEJDLCtDQUFBQSxZQUFVLEVBQUcsV0FBTTtZQUNmSixzQ0FDUSxDQUFDLHdCQUF3QixDQUFDLENBQzdCTSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO2dCQUNoQixJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0MsSUFBSTtnQkFDeEIsTUFBS0MsUUFBUSxDQUFDO29CQUNWQyxXQUFXLEVBQUVGLElBQUksQ0FBQ0csWUFBWTtvQkFDOUJDLFdBQVcsRUFBRUosSUFBSSxDQUFDSyxvQkFBb0I7aUJBQ3pDLENBQUM7YUFDTCxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7Z0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7YUFDckIsQ0FBQztTQUVUO1FBQ0RHLCtDQUFBQSxTQUFPLEVBQUcsV0FBTTtZQUNaQyxNQUFNLENBQUNDLElBQUksQ0FBQyxnQ0FBK0IsQ0FBeUIsT0FBdkIsTUFBS0MsS0FBSyxDQUFDWCxXQUFXLENBQUUsQ0FBQyxDQUFDO1NBQ3hFO1FBdEJDLE1BQUtXLEtBQUssR0FBRztZQUNUWCxXQUFXLEVBQUUsRUFBRTtZQUNmRSxXQUFXLEVBQUUsRUFBRTtTQUNsQjs7Ozs7WUFxQkxVLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDaEIsSUFBSSxDQUFDbEIsVUFBVSxFQUFFO2dCQUNqQixJQUFJLENBQUNjLE9BQU8sRUFBRTthQUNqQjs7O1lBS0RLLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNMLDRKQUE0SjtnQkFDNUoscUJBQVMsOERBQUN0QixzQ0FBSTtvQkFBQ3VCLE9BQU8sRUFBRU4sT0FBTzs4QkFBRyxJQUFJLENBQUNHLEtBQUssQ0FBQ1gsV0FBVzs7Ozs7d0JBQVE7YUFFbkU7Ozs7Q0FDSixDQXhDc0JYLDRDQUFTLENBd0MvQjtBQUNELCtEQUFlRyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9nZXRMb2NhdGlvbi5qcz8zMWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY291bnRyeU5hbWU6IFwiXCIsXG4gICAgICAgICAgICBjb3VudHJ5Q29kZTogXCJcIixcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRHZW9JbmZvID0gKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLmdldChcImh0dHBzOi8vaXBhcGkuY28vanNvbi9cIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5TmFtZTogZGF0YS5jb3VudHJ5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlOiBkYXRhLmNvdW50cnlfY2FsbGluZ19jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcblxuICAgIH1cbiAgICBvcGVuVGFiID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvJHt0aGlzLnN0YXRlLmNvdW50cnlOYW1lfWApO1xuICAgICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldEdlb0luZm8oKVxuICAgICAgICB0aGlzLm9wZW5UYWIoKVxuICAgIH1cbiAgICBcbiAgIFxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyByZXR1cm4gPExpbmsgIHRhcmdldD17XCJfYmxhbmtcIn0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiICB0bz17YGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpLyR7dGhpcy5zdGF0ZS5jb3VudHJ5TmFtZX1gfT57dGhpcy5zdGF0ZS5jb3VudHJ5TmFtZX08L0xpbms+XG4gICAgICAgIHJldHVybiAgIDxMaW5rIG9uQ2xpY2s9e29wZW5UYWJ9Pnt0aGlzLnN0YXRlLmNvdW50cnlOYW1lfTwvTGluaz5cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJheGlvcyIsIkxpbmsiLCJMb2NhdGlvbiIsInByb3BzIiwiZ2V0R2VvSW5mbyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZXRTdGF0ZSIsImNvdW50cnlOYW1lIiwiY291bnRyeV9uYW1lIiwiY291bnRyeUNvZGUiLCJjb3VudHJ5X2NhbGxpbmdfY29kZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib3BlblRhYiIsIndpbmRvdyIsIm9wZW4iLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/getLocation.js\n");

/***/ })

});