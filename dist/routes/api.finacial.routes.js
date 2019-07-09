"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport = require("passport");
var httpProxy = require("express-http-proxy");
var route_path_service_1 = require("../shared/services/route-path.service");
var finacialServiceProxy = httpProxy('https://127.0.0.1:5001', {
    https: true,
    proxyReqPathResolver: function (req) {
        var url = route_path_service_1.default.getRoute(req).split('/financeiro');
        return 'https://127.0.0.1:5001' + url[1];
    },
    proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    }
});
var routers = express_1.Router();
// Define the Finacial Module Routes (Protected)
routers.use('/financeiro', routers.use('/centro-de-custos', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    finacialServiceProxy(req, res, next);
}), routers.use('/fluxo-de-caixa', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    finacialServiceProxy(req, res, next);
}), routers.use('/fluxo-de-caixa/destino', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    finacialServiceProxy(req, res, next);
}), routers.use('/fluxo-de-caixa/destino/distribuir', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    finacialServiceProxy(req, res, next);
}));
exports.default = routers;
//# sourceMappingURL=api.finacial.routes.js.map