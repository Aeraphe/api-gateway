"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_controller_1 = require("../../modules/core/controllers/login.controller");
var loginController = new login_controller_1.LoginController();
exports.LoginRoutes = express_1.Router();
exports.LoginRoutes.post('/', loginController.login);
exports.LoginRoutes.get('/', loginController.logout);
exports.LoginRoutes.get('/:id', loginController.forgotPassword);
//# sourceMappingURL=login.routes.js.map