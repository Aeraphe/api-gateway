"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var schedule_controller_1 = require("../../modules/core/controllers/schedule.controller");
exports.ScheduleRoutes = express_1.Router();
exports.ScheduleRoutes.post("/", schedule_controller_1.default.create);
//# sourceMappingURL=schedule.routes.js.map