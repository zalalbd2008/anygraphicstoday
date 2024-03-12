"use strict";
exports.id = 2204;
exports.ids = [2204];
exports.modules = {

/***/ 2204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ home_Agency)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./public/images/agency/image_1.jpg
/* harmony default export */ const image_1 = ({"src":"/_next/static/media/image_1.79176773.jpg","height":584,"width":450,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQISA2H/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/XObrULxJIAEH/2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/agency/thumb-two.png
/* harmony default export */ const thumb_two = ({"src":"/_next/static/media/thumb-two.e85bf424.png","height":584,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEW8vLycnJzDw8OysrKRxyPBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAHElEQVR4nGNgQAVMTExMDAzMjIyMjMwwCiqIAgAEKAAl1LgrNwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./public/images/star.png
var star = __webpack_require__(6334);
// EXTERNAL MODULE: ./public/images/agency/dot-large.png
var dot_large = __webpack_require__(5984);
;// CONCATENATED MODULE: ./src/components/containers/home/Agency.tsx










external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const Agency = ()=>{
    (0,external_react_.useEffect)(()=>{
        const percentElements = document.querySelectorAll("[data-percent]");
        percentElements.forEach((el)=>{
            const skillBarPercent = el.querySelector(".skill-bar-percent");
            const percentValue = el.parentNode?.querySelector(".percent-value");
            if (skillBarPercent && percentValue) {
                const percent = el.getAttribute("data-percent") || "0%";
                skillBarPercent.style.width = percent;
                percentValue.textContent = percent;
            }
        });
        const axProgressBar = document.querySelectorAll(".skill-bar-single");
        axProgressBar.forEach((element)=>{
            const skillBarPercent = element.querySelector(".skill-bar-percent");
            const percentValue = element.querySelector(".percent-value");
            if (skillBarPercent && percentValue) {
                const target = percentValue.textContent || "0%";
                const axBarTimeline = external_gsap_default().timeline({
                    defaults: {
                        duration: 2
                    },
                    scrollTrigger: {
                        trigger: element
                    }
                });
                axBarTimeline.fromTo(skillBarPercent, {
                    width: 0
                }, {
                    width: target
                });
                axBarTimeline.from(percentValue, {
                    textContent: "0%",
                    snap: {
                        textContent: 5
                    }
                }, "<");
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "section agency",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row gaper align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "agency__thumb",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: image_1,
                                        alt: "Image",
                                        className: "thumb-one fade-left",
                                        priority: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: thumb_two,
                                        alt: "Image",
                                        className: "thumb-two fade-right",
                                        priority: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "agency__content section__content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "sub-title",
                                        children: [
                                            "WELCOME",
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-arrow-right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "title title-anim",
                                        children: "Unlock Creative Excellence with Any Graphics\xa0Today"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "paragraph",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Any Graphics Today is a top choice for creative design in the US, specializing in custom logo design and a wide range of services from UI/UX to packaging design. With 1-1 live designer interaction and competitive pricing, we cater to businesses of all sizes, ensuring personalized, top-quality\xa0designs."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "skill-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "skill-bar-single d-none",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "primary-text",
                                                            children: "Website design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-wrapper",
                                                        "data-percent": "75%",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "skill-bar",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "skill-bar-percent",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "percent-value"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "skill-bar-single",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "primary-text",
                                                            children: "Business Branding"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-wrapper",
                                                        "data-percent": "75%",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "skill-bar",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "skill-bar-percent",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "percent-value"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "skill-bar-single",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "primary-text",
                                                            children: "Graphic Design "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "skill-bar-wrapper",
                                                        "data-percent": "95%",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "skill-bar",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "skill-bar-percent",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "percent-value"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "section__content-cta",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "contact-us",
                                            className: "btn btn--primary",
                                            children: "Contact Now"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: star/* default */.Z,
                alt: "Image",
                className: "star",
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: dot_large/* default */.Z,
                alt: "Image",
                className: "dot-large",
                priority: true
            })
        ]
    });
};
/* harmony default export */ const home_Agency = (Agency);


/***/ })

};
;