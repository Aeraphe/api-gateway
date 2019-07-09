"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var record_controller_1 = require("../../modules/core/controllers/record.controller");
exports.RecordRoutes = express_1.Router();
exports.RecordRoutes.post('/', record_controller_1.default.create);
//# sourceMappingURL=record.routes.js.map