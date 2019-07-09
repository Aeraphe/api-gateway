"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../../core/response");
var CompanyResponse = /** @class */ (function (_super) {
    __extends(CompanyResponse, _super);
    function CompanyResponse() {
        return _super.call(this) || this;
    }
    CompanyResponse.prototype.create = function (req, data) {
        if (data.status != 200) {
            return __assign({ message: 'Não foi possível cadastrar a Empresa' }, data);
        }
        return {
            message: 'Empresa cadastrada com sucesso!!!',
            status: data.status,
            data: [
                {
                    _id: data.company._id,
                    name: data.company.name,
                    description: data.company.decription,
                    cellphones: data.company.cellphones,
                    address: data.company.address,
                }
            ],
            url: this.route.getRoute(req)
        };
    };
    return CompanyResponse;
}(response_1.AeroResponse));
exports.CompanyResponse = CompanyResponse;
exports.default = new CompanyResponse();
//# sourceMappingURL=company.response.js.map