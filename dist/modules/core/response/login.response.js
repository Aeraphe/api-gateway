"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../../core/response");
var LoginResponse = /** @class */ (function (_super) {
    __extends(LoginResponse, _super);
    function LoginResponse() {
        return _super.call(this) || this;
    }
    LoginResponse.prototype.create = function (req, data) {
        try {
            if (data.status != 200) {
                return {
                    error: 'Não foi possível criar o token',
                    status: data.status,
                    url: this.route.getRoute(req)
                };
            }
            return {
                message: 'Tokem de acesso criado com sucesso',
                status: data.status,
                data: [
                    {
                        name: data.user.name,
                        email: data.user.email,
                        roles: data.user.roles,
                        address: data.user.address,
                        cellphones: data.user.cellphones,
                        projecs: data.user.projecs
                    }
                ],
                token: data.token,
                url: this.route.getRoute(req)
            };
        }
        catch (err) {
            console.log(err, 'Error');
        }
    };
    return LoginResponse;
}(response_1.AeroResponse));
exports.LoginResponse = LoginResponse;
exports.default = new LoginResponse();
//# sourceMappingURL=login.response.js.map