exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 1531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ banner_HomeFiveBanner)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./public/images/projects/nine.png
/* harmony default export */ const nine = ({"src":"/_next/static/media/nine.a660449a.png","height":525,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEXAwMCdnZ28vLyysrJnxi0/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgAgMGGMXAwMDAxMDMyMjIyAyjoIIoKgEIiABNnW7QDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/projects/ten.png
/* harmony default export */ const ten = ({"src":"/_next/static/media/ten.a660449a.png","height":525,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEXAwMCdnZ28vLyysrJnxi0/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgAgMGGMXAwMDAxMDMyMjIyAyjoIIoKgEIiABNnW7QDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/projects/eleven.png
/* harmony default export */ const eleven = ({"src":"/_next/static/media/eleven.a660449a.png","height":525,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEXAwMCdnZ28vLyysrJnxi0/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgAgMGGMXAwMDAxMDMyMjIyAyjoIIoKgEIiABNnW7QDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/projects/twelve.png
/* harmony default export */ const twelve = ({"src":"/_next/static/media/twelve.a660449a.png","height":525,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEXAwMCdnZ28vLyysrJnxi0/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgAgMGGMXAwMDAxMDMyMjIyAyjoIIoKgEIiABNnW7QDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/projects/thirteen.png
/* harmony default export */ const thirteen = ({"src":"/_next/static/media/thirteen.a660449a.png","height":525,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEXAwMCdnZ28vLyysrJnxi0/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgAgMGGMXAwMDAxMDMyMjIyAyjoIIoKgEIiABNnW7QDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/layout/banner/HomeFiveBanner.tsx











external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const HomeFiveBanner = ()=>{
    const slider = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const ele = slider.current;
        if (window.innerWidth >= 992 && ele) {
            external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
            const rightSections = external_gsap_default().utils.toArray(".banner-five__single");
            const pin = external_gsap_default().to(rightSections, {
                xPercent: -100 * (rightSections.length - 3),
                ease: "none",
                scrollTrigger: {
                    trigger: ele,
                    pin: true,
                    invalidateOnRefresh: true,
                    start: "center center-=100",
                    scrub: 1,
                    end: ()=>"+=" + (slider.current?.offsetWidth || 0),
                    markers: false
                }
            });
            return ()=>{
                pin.kill();
            };
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "banner-five",
        ref: slider,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "banner-five__wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: nine,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: ten,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: eleven,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: twelve,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: thirteen,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: nine,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: ten,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: eleven,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: twelve,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner-five__single",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "projects-s__single topy-tilt",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "project-single",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: thirteen,
                                        alt: "Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "project-single",
                                        children: "Kaizen Psychology"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const banner_HomeFiveBanner = (HomeFiveBanner);


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ })

};
;