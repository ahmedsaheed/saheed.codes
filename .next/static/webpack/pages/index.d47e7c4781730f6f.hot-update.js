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

/***/ "./component/theme.js":
/*!****************************!*\
  !*** ./component/theme.js ***!
  \****************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": function() { return /* binding */ ThemeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage */ \"./node_modules/use-local-storage/dist/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction mode() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dark\"), theme = ref[0], setTheme = ref[1];\n    var toggledTheme = function() {\n        setTheme(function(curr) {\n            return curr === \"light\" ? \"dark\" : \"light\";\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme: theme,\n            toggledTheme: toggledTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            id: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggledTheme,\n                children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                    id: \"nightIcon\",\n                    viewBox: \"0 0 100 100\",\n                    style: \"enable-background='new 0 0 100 100'\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                            lineNumber: 17,\n                            columnNumber: 201\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M96.76 66.458c-.853-.852-2.15-1.064-3.23-.534-6.063 2.991-12.858 4.571-19.655 4.571C62.022 70.495 50.88 65.88 42.5 57.5 29.043 44.043 25.658 23.536 34.076 6.47c.532-1.08.318-2.379-.534-3.23-.851-.852-2.15-1.064-3.23-.534-4.918 2.427-9.375 5.619-13.246 9.491-9.447 9.447-14.65 22.008-14.65 35.369.0 13.36 5.203 25.921 14.65 35.368s22.008 14.65 35.368 14.65c13.361.0 25.921-5.203 35.369-14.65 3.872-3.871 7.064-8.328 9.491-13.246C97.826 68.608 97.611 67.309 96.76 66.458z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                            lineNumber: 17,\n                            columnNumber: 225\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                    lineNumber: 17,\n                    columnNumber: 38\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                    id: \"nightIcon\",\n                    viewBox: \"0 0 100 100\",\n                    style: \"enable-background='new 0 0 100 100'\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                            lineNumber: 17,\n                            columnNumber: 884\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M96.76 66.458c-.853-.852-2.15-1.064-3.23-.534-6.063 2.991-12.858 4.571-19.655 4.571C62.022 70.495 50.88 65.88 42.5 57.5 29.043 44.043 25.658 23.536 34.076 6.47c.532-1.08.318-2.379-.534-3.23-.851-.852-2.15-1.064-3.23-.534-4.918 2.427-9.375 5.619-13.246 9.491-9.447 9.447-14.65 22.008-14.65 35.369.0 13.36 5.203 25.921 14.65 35.368s22.008 14.65 35.368 14.65c13.361.0 25.921-5.203 35.369-14.65 3.872-3.871 7.064-8.328 9.491-13.246C97.826 68.608 97.611 67.309 96.76 66.458z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                            lineNumber: 17,\n                            columnNumber: 908\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                    lineNumber: 17,\n                    columnNumber: 721\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(mode, \"/64qEZpzfIlnkFdYT8OrmTkSOfA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (mode);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTZDO0FBQ0U7O0FBRXhDLElBQU1HLFlBQVksaUJBQUdILG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBQy9DLFNBQVNJLElBQUksR0FBRTs7SUFFWCxJQUF5QkgsR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsTUFBTSxDQUFDLEVBTjdDLEtBTWdCLEdBQWFBLEdBQWdCLEdBQTdCLEVBTmhCLFFBTXlCLEdBQUlBLEdBQWdCLEdBQXBCO0lBRXJCLElBQU1NLFlBQVksR0FBRyxXQUFNO1FBQ3ZCRCxRQUFRLENBQUMsU0FBQ0UsSUFBSTttQkFBTUEsSUFBSSxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTztTQUFDLENBQUMsQ0FBQztLQUM3RDtJQUVELHFCQUNJLDhEQUFDTCxZQUFZLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNMLEtBQUssRUFBTEEsS0FBSztZQUFDRSxZQUFZLEVBQVpBLFlBQVk7U0FBQztrQkFDbEQsNEVBQUNJLE1BQUk7WUFBQ0MsRUFBRSxFQUFFUCxLQUFLO3NCQUNYLDRFQUFDUSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVQLFlBQVk7MEJBQ3hCRixLQUFLLEtBQUssT0FBTyxpQkFBRyw4REFBQ1UsS0FBRztvQkFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtvQkFBQ0MsVUFBVSxFQUFDLDhCQUE4QjtvQkFBQ0wsRUFBRSxFQUFDLFdBQVc7b0JBQUNNLE9BQU8sRUFBQyxhQUFhO29CQUFDQyxLQUFLLEVBQUMscUNBQXFDOztzQ0FBQyw4REFBQ0MsT0FBSztzQ0FBQyxXQUFTOzs7OztnQ0FBUTtzQ0FBQSw4REFBQ0MsTUFBSTs0QkFBQ0MsQ0FBQyxFQUFDLHVkQUF1ZDs7Ozs7Z0NBQVE7Ozs7Ozt3QkFBTSxpQkFBRyw4REFBQ1AsS0FBRztvQkFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtvQkFBQ0MsVUFBVSxFQUFDLDhCQUE4QjtvQkFBQ0wsRUFBRSxFQUFDLFdBQVc7b0JBQUNNLE9BQU8sRUFBQyxhQUFhO29CQUFDQyxLQUFLLEVBQUMscUNBQXFDOztzQ0FBQyw4REFBQ0MsT0FBSztzQ0FBQyxXQUFTOzs7OztnQ0FBUTtzQ0FBQSw4REFBQ0MsTUFBSTs0QkFBQ0MsQ0FBQyxFQUFDLHVkQUF1ZDs7Ozs7Z0NBQVE7Ozs7Ozt3QkFBTTs7Ozs7b0JBQ24yQzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ2lCLENBQy9CO0NBQ0o7R0FqQlFsQixJQUFJO0FBbUJiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC90aGVtZS5qcz8zYTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gXCJ1c2UtbG9jYWwtc3RvcmFnZVwiXG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5mdW5jdGlvbiBtb2RlKCl7XG4gICAgXG4gICAgY29uc3QgW3RoZW1lLHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcblxuICAgIGNvbnN0IHRvZ2dsZWRUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgc2V0VGhlbWUoKGN1cnIpID0+IChjdXJyID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIikpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3RoZW1lLHRvZ2dsZWRUaGVtZX19PlxuICAgICAgICA8Ym9keSBpZD17dGhlbWV9PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVkVGhlbWV9PlxuICAgICAgICAgICAgICAgIHt0aGVtZSA9PT0gJ2xpZ2h0JyA/IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgaWQ9XCJuaWdodEljb25cIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDEwMCAxMDAnXCI+PHRpdGxlPkRhcmsgTW9kZTwvdGl0bGU+PHBhdGggZD1cIk05Ni43NiA2Ni40NThjLS44NTMtLjg1Mi0yLjE1LTEuMDY0LTMuMjMtLjUzNC02LjA2MyAyLjk5MS0xMi44NTggNC41NzEtMTkuNjU1IDQuNTcxQzYyLjAyMiA3MC40OTUgNTAuODggNjUuODggNDIuNSA1Ny41IDI5LjA0MyA0NC4wNDMgMjUuNjU4IDIzLjUzNiAzNC4wNzYgNi40N2MuNTMyLTEuMDguMzE4LTIuMzc5LS41MzQtMy4yMy0uODUxLS44NTItMi4xNS0xLjA2NC0zLjIzLS41MzQtNC45MTggMi40MjctOS4zNzUgNS42MTktMTMuMjQ2IDkuNDkxLTkuNDQ3IDkuNDQ3LTE0LjY1IDIyLjAwOC0xNC42NSAzNS4zNjkuMCAxMy4zNiA1LjIwMyAyNS45MjEgMTQuNjUgMzUuMzY4czIyLjAwOCAxNC42NSAzNS4zNjggMTQuNjVjMTMuMzYxLjAgMjUuOTIxLTUuMjAzIDM1LjM2OS0xNC42NSAzLjg3Mi0zLjg3MSA3LjA2NC04LjMyOCA5LjQ5MS0xMy4yNDZDOTcuODI2IDY4LjYwOCA5Ny42MTEgNjcuMzA5IDk2Ljc2IDY2LjQ1OHpcIj48L3BhdGg+PC9zdmc+IDogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBpZD1cIm5pZ2h0SWNvblwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwIDEwMCdcIj48dGl0bGU+RGFyayBNb2RlPC90aXRsZT48cGF0aCBkPVwiTTk2Ljc2IDY2LjQ1OGMtLjg1My0uODUyLTIuMTUtMS4wNjQtMy4yMy0uNTM0LTYuMDYzIDIuOTkxLTEyLjg1OCA0LjU3MS0xOS42NTUgNC41NzFDNjIuMDIyIDcwLjQ5NSA1MC44OCA2NS44OCA0Mi41IDU3LjUgMjkuMDQzIDQ0LjA0MyAyNS42NTggMjMuNTM2IDM0LjA3NiA2LjQ3Yy41MzItMS4wOC4zMTgtMi4zNzktLjUzNC0zLjIzLS44NTEtLjg1Mi0yLjE1LTEuMDY0LTMuMjMtLjUzNC00LjkxOCAyLjQyNy05LjM3NSA1LjYxOS0xMy4yNDYgOS40OTEtOS40NDcgOS40NDctMTQuNjUgMjIuMDA4LTE0LjY1IDM1LjM2OS4wIDEzLjM2IDUuMjAzIDI1LjkyMSAxNC42NSAzNS4zNjhzMjIuMDA4IDE0LjY1IDM1LjM2OCAxNC42NWMxMy4zNjEuMCAyNS45MjEtNS4yMDMgMzUuMzY5LTE0LjY1IDMuODcyLTMuODcxIDcuMDY0LTguMzI4IDkuNDkxLTEzLjI0NkM5Ny44MjYgNjguNjA4IDk3LjYxMSA2Ny4zMDkgOTYuNzYgNjYuNDU4elwiPjwvcGF0aD48L3N2Zz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJUaGVtZUNvbnRleHQiLCJtb2RlIiwidGhlbWUiLCJzZXRUaGVtZSIsInRvZ2dsZWRUaGVtZSIsImN1cnIiLCJQcm92aWRlciIsInZhbHVlIiwiYm9keSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwieG1sbnNYbGluayIsInZpZXdCb3giLCJzdHlsZSIsInRpdGxlIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/theme.js\n");

/***/ })

});