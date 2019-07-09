"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./core/user.routes");
var company_routes_1 = require("./core/company.routes");
var login_routes_1 = require("./core/login.routes");
//import { middleware } from '../../config/index.middleware';
var schedule_routes_1 = require("./core/schedule.routes");
var record_routes_1 = require("./core/record.routes");
var passport = require("passport");
var user_controller_1 = require("../modules/core/controllers/user.controller");
var userController = new user_controller_1.UserController();
var router = express_1.Router();
// // middleware that is specific to this router
// middleware.forEach(iten => {
//     router.use(iten.action);
// });
// Wellcome Route
router.get('/', function (req, res) {
    userController.create;
});
router.use('/login', login_routes_1.LoginRoutes);
// Define the Core routes (Protected)
router.use('/core', router.use('/users', user_routes_1.UserRouters), router.use('/companies', passport.authenticate('jwt', { session: false }), company_routes_1.CompanyRouters), router.use('/companies/address', passport.authenticate('jwt', { session: false }), company_routes_1.CompanyAddressRouters), router.use('/schedules', passport.authenticate('jwt', { session: false }), schedule_routes_1.ScheduleRoutes), router.use('/records', passport.authenticate('jwt', { session: false }), record_routes_1.RecordRoutes));
exports.default = router;
//# sourceMappingURL=app.core.routes.js.map