"use strict";
(() => {
var exports = {};
exports.id = 7846;
exports.ids = [7846];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 1090:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param.js");

/***/ }),

/***/ 8652:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 7244:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6556:
/***/ ((module) => {

module.exports = require("react-server-dom-webpack/client");

/***/ }),

/***/ 8001:
/***/ ((module) => {

module.exports = require("react-server-dom-webpack/client.edge");

/***/ }),

/***/ 9097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Femail_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Femail_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/email.ts
var email_namespaceObject = {};
__webpack_require__.r(email_namespaceObject);
__webpack_require__.d(email_namespaceObject, {
  "default": () => (email)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(6447);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(6760);
;// CONCATENATED MODULE: ./src/pages/api/email.ts
// pages/api/sendEmail.ts
/* __next_internal_action_entry_do_not_use__ default */ 

/* harmony default export */ const email = ((0,action_client_wrapper/* default */.Z)("0193752f09714977832f64551b302f9eb67a78e9"));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Femail&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Femail.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Femail_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Femail_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(email_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(email_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/email",
        pathname: "/api/email",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: email_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3688], () => (__webpack_exec__(9097)));
module.exports = __webpack_exports__;

})();