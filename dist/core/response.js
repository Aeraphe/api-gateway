"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_path_service_1 = require("../shared/services/route-path.service");
var AeroResponse = /** @class */ (function () {
    function AeroResponse() {
        this.route = route_path_service_1.routerPathService;
    }
    AeroResponse.prototype.create = function (req, data, type) { };
    return AeroResponse;
}());
exports.AeroResponse = AeroResponse;
//# sourceMappingURL=response.js.map