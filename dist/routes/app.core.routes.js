"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./core/user.routes");
var login_routes_1 = require("./core/login.routes");
var equipament_api_routes_1 = require("../routes/equipment-api/equipament-api.routes");
var inventory_api_routes_1 = require("../routes/inventory-api/inventory-api.routes");
var router = express_1.Router();
router.use('/login', login_routes_1.LoginRoutes);
// Define the Core routes (Protected)
router.use('/core', router.use('/users', user_routes_1.UserRouters));
router.use('/equipamento', equipament_api_routes_1.default);
router.use('/estoque', inventory_api_routes_1.default);
exports.default = router;
//# sourceMappingURL=app.core.routes.js.map