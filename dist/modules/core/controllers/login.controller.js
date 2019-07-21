"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var jwt = require("jsonwebtoken");
var login_response_1 = require("../response/login.response");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    /**
     * Session Login
     * @param req
     * @param res
     */
    LoginController.prototype.login = function (req, res, next) {
        passport.authenticate('local', { session: false }, function (err, user, info) {
            var status;
            var token;
            if (err || !user) {
                status = 400;
            }
            else {
                req.login(user, { session: false }, function (err) {
                    if (err) {
                        res.send(err);
                    }
                    token = jwt.sign({ user: { _id: user._id, email: user.email, name: user.name } }, process.env.TOKEN_SECRET);
                    status = 200;
                });
            }
            var response = login_response_1.default.create(req, {
                status: status,
                user: user,
                token: token
            });
            return res.status(response.status).json(response);
        })(req, res);
    };
    LoginController.prototype.logout = function () { };
    LoginController.prototype.forgotPassword = function () { };
    return LoginController;
}());
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map