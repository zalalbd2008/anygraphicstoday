(() => {
var exports = {};
exports.id = 7846;
exports.ids = [7846];
exports.modules = {

/***/ 730:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3669);
/* harmony import */ var private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3__);
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/email",
        pathname: "/api/email",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_email_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 3669:
/***/ (() => {

// // pages/api/sendEmail.ts
// 'use server';
// import nodemailer from 'nodemailer';
// export default async function handler(
// ) {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.titan.email',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'info@anygraphicstoday.com',
//         pass: '1c51275382b874757f1defec56dbd19c',
//       },
//     });
//     try {
//       const info = await transporter.sendMail({
//         from: 'info@anygraphicstoday.com',
//         to: 'kiamhasan267@gmail.com',
//         subject: 'dskfjjf',
//         text: 'sdkfhsdf',
//         html: `<p>dfjksdjf</p>`,
//       });
//       console.log('Message sent: %s', info.messageId);
//       // res.status(200).json({ success: true, messageId: info.messageId });
//     } catch (error) {
//       console.error(error);
//       // res.status(500).json({ success: false, error: 'Failed to send email' });
//     }
// }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(3919)));
module.exports = __webpack_exports__;

})();