"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport = require("passport");
var equipament_api_routes_1 = require("../routes/equipment-api/equipament-api.routes");
var inventory_api_routes_1 = require("../routes/inventory-api/inventory-api.routes");
var account_api_routes_1 = require("./account-api/account-api.routes");
var router = express_1.Router();
router.use('/conta', account_api_routes_1.AccountRoutes);
router.use('/equipamento', passport.authenticate('jwt', { session: false }), equipament_api_routes_1.default);
router.use('/estoque', passport.authenticate('jwt', { session: false }), inventory_api_routes_1.default);
exports.default = router;
//# sourceMappingURL=app.core.routes.js.map