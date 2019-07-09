"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../../modules/core/controllers/user.controller");
exports.UserRouters = express_1.Router();
var userController = new user_controller_1.UserController();
exports.UserRouters.post('/', userController.create);
exports.UserRouters.get('/:userId', userController.get);
exports.UserRouters.get('/', userController.getAll);
exports.UserRouters.put('/:userId', userController.update);
exports.UserRouters.delete('/:projectId', userController.delete);
//# sourceMappingURL=user.routes.js.map