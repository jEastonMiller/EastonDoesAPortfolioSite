"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/blob.jsx":
/*!*********************************!*\
  !*** ./app/components/blob.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Blob; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page.module.scss */ \"(app-client)/./app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Blob(param) {\n    let { color, size, paths, opacity, floatList, sort, colorSortList, gridColumn, gridRow, sizeMod, llOrder, sizeOrder } = param;\n    _s();\n    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [positionAtt, setPositionAtt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"absolute\");\n    const [itemOrder, setItemOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [prevSort, setPrevSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePathMorph = function() {\n        setTimeout(()=>{\n            setPath(paths[1]);\n            setPosition(floatList[1]);\n        }, 0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sort === \"color\") {\n            setPosition(colorSortList[0]);\n            setPositionAtt(\"Absolute\");\n        }\n        ;\n        if (sort === \"bst\") {\n            setPosition({\n                top: 0,\n                left: 0\n            });\n            setTimeout(()=>setPosition({\n                    top: 0,\n                    left: 0\n                }), 0);\n            setPositionAtt(\"\");\n        }\n        if (sort === null) {\n            setPosition(paths[0]);\n            setPositionAtt(\"Absolute\");\n        }\n        if (sort === \"ll\") {\n            setPosition({\n                top: 0,\n                left: 0\n            });\n            setTimeout(()=>setPosition({\n                    top: 0,\n                    left: 0\n                }), 0);\n            setPositionAtt(\"\");\n            setItemOrder(llOrder);\n        }\n        if (sort === \"size\") {\n            setPosition({\n                top: 0,\n                left: 0\n            });\n            setTimeout(()=>setPosition({\n                    top: 0,\n                    left: 0\n                }), 0);\n            setPositionAtt(\"\");\n            setItemOrder(sizeOrder);\n        }\n    }, [\n        sort\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const morphPath = setTimeout(()=>{\n            let pathIndex = paths.indexOf(path);\n            pathIndex + 1 === paths.length ? setPath(paths[0]) : setPath(paths[pathIndex + 1]);\n        }, Math.floor(Math.random() * 500) + 7500);\n    }, [\n        path\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let positionList;\n        if (sort === null) {\n            positionList = floatList;\n            if (prevSort === sort) setPosition(positionList[0]);\n        }\n        if (sort === \"color\") {\n            positionList = colorSortList;\n            if (prevSort === sort) setPosition(positionList[0]);\n        }\n        if (sort === \"bst\" || sort === \"ll\" || sort === \"size\" && prevSort !== sort) {\n            positionList = [\n                {\n                    top: 0,\n                    left: 0\n                }\n            ];\n            setPosition[positionList[0]];\n        } else {\n            const morphPosition = setTimeout(()=>{\n                const positionIndex = positionList.indexOf(position);\n                positionIndex + 1 === positionList.length ? setPosition(positionList[0]) : setPosition(positionList[positionIndex + 1]);\n            }, Math.floor(Math.random() * 500) + 3000);\n        }\n    }, [\n        position\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(paths[0]);\n        if (sort !== \"ll\") setPosition(floatList[0]);\n        if (sort === \"ll\") {\n            setPosition({\n                top: 0,\n                left: 0\n            });\n            setPositionAtt(\"\");\n        }\n        handlePathMorph();\n    }, []);\n    if (path) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nodeContainer),\n            style: {\n                height: \"calc((\".concat(size, \" / 13 * 1em) * \").concat(sizeMod, \")\"),\n                width: \"calc((\".concat(size, \" / 13 * 1em) * \").concat(sizeMod, \")\"),\n                gridColumn: gridColumn,\n                gridRow: gridRow,\n                position: positionAtt,\n                top: position.top,\n                left: position.left,\n                opacity: opacity,\n                transition: \"8s\",\n                order: itemOrder\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().node),\n                viewBox: \"0 0 \".concat(size, \" \").concat(size),\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        fill: color,\n                        stroke: color,\n                        height: \"auto\",\n                        width: \"auto\",\n                        d: path,\n                        opacity: opacity,\n                        style: {\n                            transition: \"8s\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/easton/Projects/EastonDoesAPortfolioSite/app/components/blob.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/easton/Projects/EastonDoesAPortfolioSite/app/components/blob.jsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/easton/Projects/EastonDoesAPortfolioSite/app/components/blob.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/easton/Projects/EastonDoesAPortfolioSite/app/components/blob.jsx\",\n            lineNumber: 109,\n            columnNumber: 5\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/easton/Projects/EastonDoesAPortfolioSite/app/components/blob.jsx\",\n            lineNumber: 152,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Blob, \"rV3uFigQFagt1dnbqQoecccSGxc=\");\n_c = Blob;\nvar _c;\n$RefreshReg$(_c, \"Blob\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWpEO3dCQUNOa0QsUUFBUWxEO3dCQUNSd0MsUUFBTzt3QkFDUEMsT0FBTTt3QkFDTlUsR0FBR3ZDO3dCQUNIVCxTQUFTQTt3QkFDVG9DLE9BQU87NEJBQ0xHLFlBQVk7d0JBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9SLE9BQU87UUFDTCxxQkFDRSw4REFBQ047Ozs7O0lBRUw7QUFHRjtHQW5Kd0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ibG9iLmpzeD9hOTkwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9iKFxuICB7IFxuICAgIGNvbG9yLCBcbiAgICBzaXplLCBcbiAgICBwYXRocywgXG4gICAgb3BhY2l0eSwgXG4gICAgZmxvYXRMaXN0LCBcbiAgICBzb3J0LCBcbiAgICBjb2xvclNvcnRMaXN0LFxuICAgIGdyaWRDb2x1bW4sXG4gICAgZ3JpZFJvdyxcbiAgICBzaXplTW9kLFxuICAgIGxsT3JkZXIsXG4gICAgc2l6ZU9yZGVyXG4gICB9KSB7XG4gIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcG9zaXRpb25BdHQsIHNldFBvc2l0aW9uQXR0XSA9IHVzZVN0YXRlKCdhYnNvbHV0ZScpO1xuICBjb25zdCBbaXRlbU9yZGVyLCBzZXRJdGVtT3JkZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcHJldlNvcnQsIHNldFByZXZTb3J0XSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuXG4gIGNvbnN0ICBoYW5kbGVQYXRoTW9ycGg9IGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0UGF0aChwYXRoc1sxXSk7XG4gICAgICBzZXRQb3NpdGlvbihmbG9hdExpc3RbMV0pO1xuICAgIH0sIDApXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzb3J0ID09PSAnY29sb3InKSB7XG4gICAgICBzZXRQb3NpdGlvbihjb2xvclNvcnRMaXN0WzBdKVxuICAgICAgc2V0UG9zaXRpb25BdHQoJ0Fic29sdXRlJylcbiAgICB9O1xuICAgIGlmKHNvcnQgPT09ICdic3QnKSB7XG4gICAgICBzZXRQb3NpdGlvbih7dG9wOiAwLCBsZWZ0OiAwfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFBvc2l0aW9uKHt0b3A6IDAsIGxlZnQ6IDB9KSwgMClcbiAgICAgIHNldFBvc2l0aW9uQXR0KCcnKTtcbiAgICB9XG4gICAgaWYoc29ydCA9PT0gbnVsbCkge1xuICAgICAgc2V0UG9zaXRpb24ocGF0aHNbMF0pO1xuICAgICAgc2V0UG9zaXRpb25BdHQoJ0Fic29sdXRlJyk7XG4gICAgfVxuICAgIGlmKHNvcnQgPT09ICdsbCcpIHtcbiAgICAgIHNldFBvc2l0aW9uKHt0b3A6IDAsIGxlZnQ6IDB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0UG9zaXRpb24oe3RvcDogMCwgbGVmdDogMH0pLCAwKVxuICAgICAgc2V0UG9zaXRpb25BdHQoJycpO1xuICAgICAgc2V0SXRlbU9yZGVyKGxsT3JkZXIpO1xuICAgIH1cbiAgICBpZihzb3J0ID09PSAnc2l6ZScpIHtcbiAgICAgIHNldFBvc2l0aW9uKHt0b3A6IDAsIGxlZnQ6IDB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0UG9zaXRpb24oe3RvcDogMCwgbGVmdDogMH0pLCAwKVxuICAgICAgc2V0UG9zaXRpb25BdHQoJycpO1xuICAgICAgc2V0SXRlbU9yZGVyKHNpemVPcmRlcik7XG4gICAgfVxuICB9LCBbc29ydF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb3JwaFBhdGggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBwYXRoSW5kZXggPSBwYXRocy5pbmRleE9mKHBhdGgpO1xuICAgICAgcGF0aEluZGV4ICsgMSA9PT0gcGF0aHMubGVuZ3RoID8gc2V0UGF0aChwYXRoc1swXSkgOiBzZXRQYXRoKHBhdGhzW3BhdGhJbmRleCArIDFdKTtcbiAgICB9LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApICsgNzUwMClcbiAgfSwgW3BhdGhdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHBvc2l0aW9uTGlzdDtcbiAgICBpZiAoc29ydCA9PT0gbnVsbCkge1xuICAgICAgcG9zaXRpb25MaXN0ID0gZmxvYXRMaXN0O1xuICAgICAgaWYgKHByZXZTb3J0ID09PSBzb3J0KSBzZXRQb3NpdGlvbihwb3NpdGlvbkxpc3RbMF0pO1xuICAgIH1cbiAgICBpZiAoc29ydCA9PT0gJ2NvbG9yJykge1xuICAgICAgcG9zaXRpb25MaXN0ID0gY29sb3JTb3J0TGlzdDtcbiAgICAgIGlmIChwcmV2U29ydCA9PT0gc29ydCkgc2V0UG9zaXRpb24ocG9zaXRpb25MaXN0WzBdKVxuICAgIH1cbiAgICBpZiAoc29ydCA9PT0gJ2JzdCcgfHwgc29ydCA9PT0gJ2xsJyB8fCBzb3J0ID09PSAnc2l6ZScgJiYgcHJldlNvcnQgIT09IHNvcnQpIHtcbiAgICAgIHBvc2l0aW9uTGlzdCA9IFt7dG9wOiAwLCBsZWZ0OiAwfV1cbiAgICAgIHNldFBvc2l0aW9uW3Bvc2l0aW9uTGlzdFswXV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9ycGhQb3NpdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbkluZGV4ID0gcG9zaXRpb25MaXN0LmluZGV4T2YocG9zaXRpb24pO1xuICAgICAgICBwb3NpdGlvbkluZGV4ICsgMSA9PT0gcG9zaXRpb25MaXN0Lmxlbmd0aCA/IHNldFBvc2l0aW9uKHBvc2l0aW9uTGlzdFswXSkgOiBzZXRQb3NpdGlvbihwb3NpdGlvbkxpc3RbcG9zaXRpb25JbmRleCArIDFdKTtcbiAgICAgIH0sIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgKyAzMDAwKVxuICAgIH1cblxuICB9LCBbcG9zaXRpb25dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aChwYXRoc1swXSk7XG4gICAgaWYoc29ydCAhPT0gJ2xsJykgc2V0UG9zaXRpb24oZmxvYXRMaXN0WzBdKTtcbiAgICBpZiAoc29ydCA9PT0gJ2xsJykge1xuICAgICAgc2V0UG9zaXRpb24oe3RvcDogMCwgbGVmdDogMH0pXG4gICAgICBzZXRQb3NpdGlvbkF0dCgnJylcbiAgICB9XG4gICAgaGFuZGxlUGF0aE1vcnBoKCk7XG5cbiAgfSwgW10pXG5cbiAgaWYgKHBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vZGVDb250YWluZXJ9XG4gICAgICBzdHlsZT17XG4gICAgICAgIHtcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKCgke3NpemV9IC8gMTMgKiAxZW0pICogJHtzaXplTW9kfSlgLFxuICAgICAgICAgIHdpZHRoOiBgY2FsYygoJHtzaXplfSAvIDEzICogMWVtKSAqICR7c2l6ZU1vZH0pYCxcbiAgICAgICAgICBncmlkQ29sdW1uOiBncmlkQ29sdW1uLFxuICAgICAgICAgIGdyaWRSb3c6IGdyaWRSb3csXG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uQXR0LFxuICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wLFxuICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnOHMnLFxuICAgICAgICAgIG9yZGVyOiBpdGVtT3JkZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgID5cbiAgICAgIDxzdmcgXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vZGV9IFxuICAgICAgICB2aWV3Qm94PXtgMCAwICR7c2l6ZX0gJHtzaXplfWB9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXG4gICAgICA+XG4gICAgICAgIDxnPlxuICAgICAgICA8cGF0aCBcbiAgICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgICBzdHJva2U9e2NvbG9yfVxuICAgICAgICAgIGhlaWdodD0nYXV0bydcbiAgICAgICAgICB3aWR0aD0nYXV0bydcbiAgICAgICAgICBkPXtwYXRofVxuICAgICAgICAgIG9wYWNpdHk9e29wYWNpdHl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiOHNcIixcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogXCJlYXNlLWluLW91dFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gXG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIClcbiAgfVxuXG4gIFxufSJdLCJuYW1lcyI6WyJpbnRlciIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmxvYiIsImNvbG9yIiwic2l6ZSIsInBhdGhzIiwib3BhY2l0eSIsImZsb2F0TGlzdCIsInNvcnQiLCJjb2xvclNvcnRMaXN0IiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJzaXplTW9kIiwibGxPcmRlciIsInNpemVPcmRlciIsInBhdGgiLCJzZXRQYXRoIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInBvc2l0aW9uQXR0Iiwic2V0UG9zaXRpb25BdHQiLCJpdGVtT3JkZXIiLCJzZXRJdGVtT3JkZXIiLCJwcmV2U29ydCIsInNldFByZXZTb3J0IiwiaGFuZGxlUGF0aE1vcnBoIiwic2V0VGltZW91dCIsInRvcCIsImxlZnQiLCJtb3JwaFBhdGgiLCJwYXRoSW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicG9zaXRpb25MaXN0IiwibW9ycGhQb3NpdGlvbiIsInBvc2l0aW9uSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJub2RlQ29udGFpbmVyIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJvcmRlciIsInN2ZyIsIm5vZGUiLCJ2aWV3Qm94IiwieG1sbnMiLCJnIiwiZmlsbCIsInN0cm9rZSIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/blob.jsx\n"));

/***/ })

});