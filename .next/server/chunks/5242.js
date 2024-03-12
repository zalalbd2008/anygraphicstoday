"use strict";
exports.id = 5242;
exports.ids = [5242];
exports.modules = {

/***/ 3371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/video-frame.7e9b5e1a.png","height":189,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEVEREQxMTFJSUlFRUXvNGhlAAAABHRSTlMhARALd88PLwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJx9yqERADAMgECg++/cS0Vk1SPACJJQh6fyi50NDnkBCCwAOqmSW1YAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ home_HomeOffer)
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
;// CONCATENATED MODULE: ./public/images/offer/blog-thumb.png
/* harmony default export */ const blog_thumb = ({"src":"/_next/static/media/blog-thumb.615cfec3.png","height":270,"width":209,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAACVBMVEW9vb2fn5+zs7M2xJm9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFUlEQVR4nGNgwAaYGBkZGZlgFDYAAAH4ABEnNqXSAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/two.png
/* harmony default export */ const two = ({"src":"/_next/static/media/two.b75d275c.png","height":550,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAElBMVEW8vLy2traIiIiJiYmtra2Kioo9FnzuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVR4nGNgQAeMIMDAwMjMxMrMxALn4wAABHAAH7wBmVIAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/three.png
/* harmony default export */ const three = ({"src":"/_next/static/media/three.b75d275c.png","height":550,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAElBMVEW8vLy2traIiIiJiYmtra2Kioo9FnzuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVR4nGNgQAeMIMDAwMjMxMrMxALn4wAABHAAH7wBmVIAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/star.png
/* harmony default export */ const star = ({"src":"/_next/static/media/star.14252230.png","height":74,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX4ty9MaXHBixyXax7nqSbrryyYah9+WB/1xzz7xkarbyT0wEODCqgGAAAADHRSTlNAAEQ4PikYKhlFCjGTrV+bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nB3GxxHAIBAAsV0uENx/vx7QS6jxqWiPvZSuBGoRA2An5y0PzpvyJke+RHeUPxtKAMfsOmVWAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/containers/home/HomeOffer.tsx








const HomeOffer = ()=>{
    (0,external_react_.useEffect)(()=>{
        const handleMouseMove = (event)=>{
            const caseStudyItems = document.querySelectorAll(".offer__cta-single");
            const deviceWidth = window.innerWidth;
            if (deviceWidth > 576) {
                caseStudyItems.forEach((item)=>{
                    const contentBox = item.getBoundingClientRect();
                    const dx = event.clientX - contentBox.x;
                    const dy = event.clientY - contentBox.y;
                    const thirdChild = item.children[2];
                    thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "section offer fade-wrapper light",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row gaper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "offer__content section__content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "sub-title",
                                        children: [
                                            "WHAT WE OFFER",
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-arrow-right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "title title-anim",
                                        children: "Your Trusted Partner in Fast, Quality Graphic Design\xa0Services"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "paragraph",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "At Any Graphics Today, we pride ourselves on delivering fast and timely service without sacrificing quality, offering competitive pricing, and providing a broad array of customizable services tailored to your brand's identity. Our team excels in direct communication, ensuring your vision comes to life with professionalism and precision, backed by our extensive experience and a commitment to reliability\xa0and\xa0trust."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "section__content-cta",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "our-services",
                                            className: "btn btn--secondary",
                                            children: "view all services"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-lg-7 col-xl-6 offset-xl-1",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "offer__cta",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "offer__cta-single fade-top",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "sub-title",
                                                children: [
                                                    "01",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-right"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "service-single",
                                                    children: [
                                                        "Custom Logo Design",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-sharp fa-solid fa-arrow-up-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "offer-thumb-hover d-none d-md-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: blog_thumb,
                                                    alt: "Image"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "offer__cta-single fade-top",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "sub-title",
                                                children: [
                                                    "02",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-right"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "service-single",
                                                    children: [
                                                        "Business Branding",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-sharp fa-solid fa-arrow-up-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "offer-thumb-hover d-none d-md-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: two,
                                                    alt: "Image"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "offer__cta-single fade-top",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "sub-title",
                                                children: [
                                                    "03",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-right"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "service-single",
                                                    children: [
                                                        "Web Development",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-sharp fa-solid fa-arrow-up-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "offer-thumb-hover d-none d-md-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: three,
                                                    alt: "Image"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "offer__cta-single fade-top",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "sub-title",
                                                children: [
                                                    "04",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-right"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "service-single",
                                                    children: [
                                                        "product design",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-sharp fa-solid fa-arrow-up-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "offer-thumb-hover d-none d-md-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: blog_thumb,
                                                    alt: "Image"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: star,
                alt: "Image",
                className: "star"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "lines d-none d-lg-flex",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "line"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_HomeOffer = (HomeOffer);


/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ banner_HomeOneBanner)
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
;// CONCATENATED MODULE: ./public/images/main-logo.jpg
/* harmony default export */ const main_logo = ({"src":"/_next/static/media/main-logo.167d70ee.jpg","height":497,"width":496,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBBEhBQZBMv/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAcEQABBAMBAAAAAAAAAAAAAAABAAIDERITQfH/2gAMAwEAAhEDEQA/AI28l1e7wAikp1oacVcsafnLseEbJz6dk6CIiNEM8r4UyZ2sNrovxf/Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./public/images/star.png
var star = __webpack_require__(6334);
// EXTERNAL MODULE: ./public/images/video-frame.png
var video_frame = __webpack_require__(3371);
// EXTERNAL MODULE: ./src/components/youtube/YoutubeEmbed.tsx
var YoutubeEmbed = __webpack_require__(8988);
;// CONCATENATED MODULE: ./src/components/layout/banner/HomeOneBanner.tsx










external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const HomeOneBanner = ()=>{
    const [videoActive, setVideoActive] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "banner",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "banner__content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-uppercase text-start fw-9 mb-0 title-anim",
                                            children: [
                                                "Graphic",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-stroke",
                                                    children: "Design"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "interval",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "icon-arrow-top-right"
                                                        }),
                                                        " on Demand"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "banner__content-inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Get stunning, custom graphic designs delivered today. Call now and elevate your brand with our fast, high-quality service, ready for any task, big or small, around\xa0the\xa0clock"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "cta section__content-cta",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "single",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "fw-7",
                                                                    children: "12+"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "fw-5",
                                                                    children: "years of experience"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "single",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "fw-7",
                                                                    children: "2k"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "fw-5",
                                                                    children: "completed projects"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: main_logo,
                        loading: "lazy",
                        placeholder: "blur",
                        alt: "Image",
                        className: "banner-one-thumb d-none d-sm-block g-ban-one"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: star/* default */.Z,
                        alt: "Image",
                        className: "star"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "banner-left-text banner-social-text d-none d-md-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "mailto:INFO@ANYGRAPHICSTODAY.COM",
                                children: "mail : INFO@ANYGRAPHICSTODAY.COM"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "tel:+18882073469",
                                children: "Call : +18882073469"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "banner-right-text banner-social-text d-none d-md-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                target: "_blank",
                                children: "instagram"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                target: "_blank",
                                children: "Linkedin"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                target: "_blank",
                                children: "facebook"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "video-frame video-btn",
                        onClick: ()=>setVideoActive(true),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: video_frame/* default */.Z,
                                alt: "Image",
                                priority: true
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "fa-sharp fa-solid fa-play"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lines d-none d-lg-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (videoActive ? " video-zoom-in" : " ") + " video-backdrop",
                onClick: ()=>setVideoActive(false),
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "video-inner",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "video-container",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            videoActive && /*#__PURE__*/ jsx_runtime.jsx(YoutubeEmbed/* default */.Z, {
                                embedId: "fSv6UgCkuTU"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                "aria-label": "close video popup",
                                className: "close-video-popup",
                                onClick: ()=>setVideoActive(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-solid fa-xmark"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const banner_HomeOneBanner = (HomeOneBanner);


/***/ })

};
;