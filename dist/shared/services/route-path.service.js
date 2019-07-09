"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require("url");
var RoutePathService = /** @class */ (function () {
    function RoutePathService() {
    }
    RoutePathService.prototype.getRoute = function (req) {
        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: req.originalUrl
        });
    };
    return RoutePathService;
}());
exports.RoutePathService = RoutePathService;
exports.routerPathService = new RoutePathService();
exports.default = new RoutePathService();
//# sourceMappingURL=route-path.service.js.map