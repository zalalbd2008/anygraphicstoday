"use strict";
exports.id = 2469;
exports.ids = [2469];
exports.modules = {

/***/ 3371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/video-frame.7e9b5e1a.png","height":189,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEVEREQxMTFJSUlFRUXvNGhlAAAABHRSTlMhARALd88PLwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJx9yqERADAMgECg++/cS0Vk1SPACJJQh6fyi50NDnkBCCwAOqmSW1YAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8149:
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
;// CONCATENATED MODULE: ./public/images/agency/front.jpg
/* harmony default export */ const front = ({"src":"/_next/static/media/front.6cb11377.jpg","height":93,"width":1973,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAABAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCySAD/2Q==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./public/images/agency/back.jpg
/* harmony default export */ const back = ({"src":"/_next/static/media/back.e7edd333.jpg","height":4407,"width":3004,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAACAQQDAQAAAAAAAAAAAAABAwACBAURBhIhUf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAbEQEAAgIDAAAAAAAAAAAAAAABAAIDBBETMf/aAAwDAQACEQMRAD8Aq0xuQK2VcZv8YlNTajcJ7kBbPNgArPmtfIiIDr4l5akTtueM/9k=","blurWidth":5,"blurHeight":8});
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
        // Animation for scrolling from bottom to top
        // gsap.to('#topTobottomImage', {
        //   y: -0, // Move the image up by 150 pixels
        //   duration: 1.5,
        //   transition: '0.5s',
        //   scrollTrigger: {
        //     trigger: '#topTobottomImage',
        //     start: 'bottom top',
        //     end: 'top bottom',
        //     scrub: true,
        //   },
        //   // ease: 'power1.inOut',
        // });
        // gsap.to('#topTobottomImage', {
        //   y: 0, // Move the image up by 150 pixels
        //   duration: 1.5,
        //   transition: '0.5s',
        //   scrollTrigger: {
        //     trigger: '#topTobottomImage',
        //     start: 'bottom top',
        //     end: 'top bottom',
        //     scrub: true,
        //   },
        //   // ease: 'power1.inOut',
        // });
        // Animation for scrolling from top to bottom
        external_gsap_default().to("#topTobottomImage", {
            y: 250,
            duration: 1.5,
            transition: "0.5s",
            scrollTrigger: {
                trigger: "#topTobottomImage",
                start: "center bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "section agency",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row gaper ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "position-relative left-image",
                                style: {
                                    border: "1px solid white",
                                    borderRadius: "20px",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "fade-right position-absolute z-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: front,
                                            alt: "Image",
                                            // width={600}
                                            // height={500}
                                            className: "rounded-top-4"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "fade-right position-absolute z-0 ",
                                        style: {
                                            top: "-100px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            id: "topTobottomImage",
                                            src: back,
                                            alt: "Image",
                                            // width={600}
                                            // height={500}
                                            className: "rounded-top-4"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: " fade-right position-absolute"
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


/***/ }),

/***/ 5385:
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
;// CONCATENATED MODULE: ./public/images/offer/image_1.jpg
/* harmony default export */ const image_1 = ({"src":"/_next/static/media/image_1.160d1693.jpg","height":270,"width":209,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAgMBAAAAAAAAAAAAAAACEQABAxIhBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCVkPwFgHUEdau3avnVERA//9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/image_2.jpg
/* harmony default export */ const image_2 = ({"src":"/_next/static/media/image_2.42acbeed.jpg","height":550,"width":450,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAAABgMBAAAAAAAAAAAAAAAAAQIDBREEITFh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABoRAQABBQAAAAAAAAAAAAAAAAEAAhESITH/2gAMAwEAAhEDEQA/AK6Rh4uWkG8nPxEOqbIzQ0S9kR6tVcvteAABF05C4lW0n//Z","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/image_3.jpg
/* harmony default export */ const image_3 = ({"src":"/_next/static/media/image_3.31649a9d.jpg","height":550,"width":450,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDEQQhEyJR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKJNyy5RbA8siDB3FGnbsEHfiIintPH/2Q==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/offer/Image_4.jpg
/* harmony default export */ const Image_4 = ({"src":"/_next/static/media/Image_4.1427a513.jpg","height":270,"width":209,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAdEAACAgEFAAAAAAAAAAAAAAAAAQIRIQMEEjHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgX/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/ALu9WdpOSdVwWOs+gApZyJO//9k=","blurWidth":6,"blurHeight":8});
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
                                                    href: "/service-custome-logo",
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
                                                    src: image_1,
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
                                                    href: "/serviceBrand",
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
                                                    src: image_2,
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
                                                    href: "/service-website",
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
                                                    src: image_3,
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
                                                    href: "/service-packageing",
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
                                                    src: Image_4,
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
                                                "Graphic ",
                                                " ",
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
                                                    children: "Transform your brand's visual identity today! Experience the appeal of tailor-made graphic designs, delivered the same day. Whether your project is small or large, our dedicated team is ready 24/7 to bring your vision to life. Experience unparalleled service quality that stands out. Transform your brand and captivate your audience with our exceptional graphic design solutions."
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
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "navbar__options pt-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "navbar__mobile-options d-none d-sm-flex",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "tel:+18882073469",
                                                                    className: "btn btn--secondary",
                                                                    children: "+1-888-207-3469"
                                                                })
                                                            })
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
                                href: "mailto:info@anygraphicstoday.com",
                                children: "mail : info@anygraphicstoday.com"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "tel:+18882073469",
                                children: "Call : +1- 888-207-3469"
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