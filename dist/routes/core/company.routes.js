"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var company_controller_1 = require("../../modules/core/controllers/company.controller");
var companyController = new company_controller_1.CompanyController();
exports.CompanyRouters = express_1.Router();
exports.CompanyAddressRouters = express_1.Router();
exports.CompanyRouters.post('/', companyController.create);
exports.CompanyRouters.get('/', companyController.getAll);
exports.CompanyRouters.get('/:id', companyController.get);
exports.CompanyRouters.patch('/:id', companyController.update);
exports.CompanyAddressRouters.patch('/:companyId/:addressId', companyController.updateAddres);
//# sourceMappingURL=company.routes.js.map