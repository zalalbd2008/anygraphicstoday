"use strict";
exports.id = 3182;
exports.ids = [3182];
exports.modules = {

/***/ 8571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ service_details_ServiceDetailsMain)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/service/thumb-two.png
/* harmony default export */ const thumb_two = ({"src":"/_next/static/media/thumb-two.fb7ebeb6.png","height":283,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEW9vb23t7ezs7N5eXmDg4ONjY0mOIGdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIUlEQVR4nGNggANGJkZGJkYGBgZWZhZWFmZGkAgIIFQAAAPtAC0PvSOvAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/containers/service-details/ServiceDetailsMain.tsx






const ServiceDetailsMain = ({ blogData, path, miniPath })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: " mb-5 service-details fade-wrapper",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-12 col-xl-10",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "service-details__slider",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "service-details__slider-single",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "poster fade-top",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: path || thumb_two,
                                        alt: "Image"
                                    })
                                }),
                                blogData.map((blog, index)=>{
                                    return !blog.areaHalfWidth && !blog.workStep ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "details-group section__cta text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "title-anim",
                                                children: blog.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: blog.des
                                                }
                                            })
                                        ]
                                    }, index) : null;
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "footer__cta text-start pt-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "contact-us",
                                        className: "btn btn--secondary",
                                        children: "book a designer now"
                                    })
                                }),
                                blogData.map((blog, index)=>blog.areaHalfWidth && !blog.workStep && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "section__content-cta",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row gaper",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-12 col-lg-7",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "details-group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                className: "title-anim",
                                                                children: blog.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: blog.des
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "footer__cta text-start py-5",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "contact-us",
                                                                    className: "btn btn--secondary",
                                                                    children: "call a designer now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-12 col-lg-5",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "poster-small",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: miniPath || thumb_two,
                                                            alt: "Image"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }, index))
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const service_details_ServiceDetailsMain = (ServiceDetailsMain);


/***/ }),

/***/ 9605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const ServiceDetailsBanner = ({ hedaer, breadcrumb })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "cmn-banner service-single-banner bg-img",
        style: {
            backgroundImage: "url('/images/banner/cmn-banner-bg.png')"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row gaper align-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 col-lg-12 col-xl-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "lh-sm  text-uppercase",
                                style: {
                                    fontSize: "46px"
                                },
                                children: breadcrumb
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                "aria-label": "breadcrumb",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                    className: "breadcrumb",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "breadcrumb-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-house"
                                                    }),
                                                    "Home"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "breadcrumb-item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "our-services",
                                                children: "Our Services"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "breadcrumb-item active",
                                            "aria-current": "page",
                                            children: breadcrumb || hedaer
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetailsBanner);


/***/ })

};
;