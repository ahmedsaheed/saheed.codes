"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/TIL",{

/***/ "./pages/TIL/api.js":
/*!**************************!*\
  !*** ./pages/TIL/api.js ***!
  \**************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ahmedsaheed_Desktop_Desktop_saheed_codes_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/core */ \"./node_modules/@octokit/core/dist-web/index.js\");\n/* harmony import */ var _EntriesMapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntriesMapper */ \"./pages/TIL/EntriesMapper.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\nvar token = process.env.github_api;\nvar id = \"a928b1fbcf1738da26ea5d7125e911cb\";\nvar Dairy = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Dairy, Component1);\n    var _super = _createSuper(Dairy);\n    function Dairy(props) {\n        _classCallCheck(this, Dairy);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            entry: []\n        };\n        return _this;\n    }\n    _createClass(Dairy, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                return _asyncToGenerator(_Users_ahmedsaheed_Desktop_Desktop_saheed_codes_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__.mark(function _callee() {\n                    var octokit, response;\n                    return _Users_ahmedsaheed_Desktop_Desktop_saheed_codes_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__.wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_4__.Octokit({\n                                    auth: token\n                                });\n                                _ctx.next = 3;\n                                return octokit.request(\"GET /gists/{gist_id}/comments\", {\n                                    headers: {\n                                        accept: \"application/vnd.github.v3+json\"\n                                    },\n                                    gist_id: id\n                                });\n                            case 3:\n                                response = _ctx.sent;\n                                console.log(response);\n                                console.log(response.data);\n                                // console.log(response.data);\n                                // console.log(response.data.files.ahmed.content);\n                                console.log(response.data.body);\n                                _this.setState({\n                                    entry: _toConsumableArray(response.data)\n                                });\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"xoxo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_EntriesMapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        entry: this.state.entry\n                    }, void 0, false, {\n                        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/TIL/api.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/TIL/api.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return Dairy;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dairy);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9USUwvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFDQTtBQUV2QyxJQUFNSSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0FBQ3BDLElBQU1DLEVBQUUsR0FBRyxrQ0FBa0M7QUFFN0MsU0FBVyxpQkFvQ1I7Ozs7YUFwQ0dDLEtBQUssQ0FDS0MsS0FBSzs7O2tDQUNQQSxLQUFLLENBVG5CLENBU29CO1FBQ1osTUFBS0MsS0FBSyxHQUFHO1lBQ1RDLEtBQUssRUFBRSxFQUFFO1NBQ1o7Ozs7O1lBRUNDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXZCLFNBQU1BLGlCQUFpQjs7dUJBQXZCLHNMQUEwQjt3QkFDaEJDLE9BQU8sRUFJUEMsUUFBUTs7OztnQ0FKUkQsT0FBTyxHQUFHLElBQUlaLGtEQUFPLENBQUM7b0NBQ3hCYyxJQUFJLEVBQUVaLEtBQUs7aUNBQ2QsQ0FBQzs7dUNBRXFCVSxPQUFPLENBQUNHLE9BQU8sQ0FBQywrQkFBK0IsRUFBRTtvQ0FDcEVDLE9BQU8sRUFBRTt3Q0FDTEMsTUFBTSxFQUFFLGdDQUFnQztxQ0FDM0M7b0NBQ0RDLE9BQU8sRUFBRVosRUFBRTtpQ0FDZCxDQUFDOztnQ0FMSU8sUUFBUSxZQUtaO2dDQUNGTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsUUFBUSxDQUFDO2dDQUNyQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDO2dDQUMxQiw4QkFBOEI7Z0NBRTlCLGtEQUFrRDtnQ0FDbERGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRLENBQUNRLElBQUksQ0FBQ0MsSUFBSSxDQUFDO2dDQUUvQixNQUFLQyxRQUFRLENBQUM7b0NBQUViLEtBQUssRUFBRyxtQkFBR0csUUFBUSxDQUFDUSxJQUFJLENBQWJSO2lDQUFnQixDQUFDOzs7Ozs7aUJBQy9DO2FBQUE7OztZQUNEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE1BQU07OEJBQ2pCLDRFQUFDekIsc0RBQVM7d0JBQUNTLEtBQUssRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSzs7Ozs7NEJBQUk7Ozs7O3dCQUNwQyxDQUNUO2FBQ0o7Ozs7Q0FDSixDQWxDbUJYLDRDQUFTLENBa0M1QjtBQUVELCtEQUFlUSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1RJTC9hcGkuanM/ZTNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiXG5pbXBvcnQgTWFpbkRpYXJ5IGZyb20gXCIuL0VudHJpZXNNYXBwZXJcIlxuXG5jb25zdCB0b2tlbiA9IHByb2Nlc3MuZW52LmdpdGh1Yl9hcGlcbmNvbnN0IGlkID0gXCJhOTI4YjFmYmNmMTczOGRhMjZlYTVkNzEyNWU5MTFjYlwiXG5cbmNsYXNzIERhaXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVudHJ5OiBbXSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcbiAgICAgICAgICAgIGF1dGg6IHRva2VuLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnaXN0X2lkOiBpZCxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZmlsZXMuYWhtZWQuY29udGVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYm9keSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW50cnk6IFsuLi5yZXNwb25zZS5kYXRhXSB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhveG9cIj5cbiAgICAgICAgICAgICAgICA8TWFpbkRpYXJ5IGVudHJ5PXt0aGlzLnN0YXRlLmVudHJ5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhaXJ5XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJPY3Rva2l0IiwiTWFpbkRpYXJ5IiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiZ2l0aHViX2FwaSIsImlkIiwiRGFpcnkiLCJwcm9wcyIsInN0YXRlIiwiZW50cnkiLCJjb21wb25lbnREaWRNb3VudCIsIm9jdG9raXQiLCJyZXNwb25zZSIsImF1dGgiLCJyZXF1ZXN0IiwiaGVhZGVycyIsImFjY2VwdCIsImdpc3RfaWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImJvZHkiLCJzZXRTdGF0ZSIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TIL/api.js\n");

/***/ })

});