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
var UserResponse = /** @class */ (function (_super) {
    __extends(UserResponse, _super);
    function UserResponse() {
        return _super.call(this) || this;
    }
    UserResponse.prototype.create = function (req, data) {
        try {
            if (data.status != 200) {
                return {
                    message: 'Não foi possível cadastrar o Usuário',
                    data: data
                };
            }
            return {
                message: 'Usuário cadastrado com sucesso!!!',
                status: data.status,
                data: [data],
                url: this.route.getRoute(req)
            };
        }
        catch (err) {
            console.log(err, 'Error');
        }
    };
    return UserResponse;
}(response_1.AeroResponse));
exports.UserResponse = UserResponse;
exports.default = new UserResponse();
//# sourceMappingURL=user.response.js.map