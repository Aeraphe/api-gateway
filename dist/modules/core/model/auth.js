"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_local_1 = require("passport-local");
var user_schema_1 = require("../schemas/user.schema");
var passport_jwt_1 = require("passport-jwt");
exports.LoginStrategy = new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    user_schema_1.User.findOne({ email: email, trash: 0 }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Email Inválido.' });
        }
        if (!user.checkPassword(password, user.password)) {
            return done(null, false, { message: 'Senha Inválida.' });
        }
        return done(null, user);
    });
});
exports.TokenStrategy = new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'serradacanastrariosaofrancisco'
}, function (jwt_payload, done) {
    user_schema_1.User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
});
//# sourceMappingURL=auth.js.map