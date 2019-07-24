import { Router } from 'express';
import * as passport from 'passport';
import * as httpProxy from 'express-http-proxy';
import RoutePathService from '../../shared/services/route-path.service';

const serviceProxy = httpProxy('api-account:5006', {
    https: true,
    proxyReqPathResolver: function (req) {
        const url = RoutePathService.getRoute(req).split('/conta');
        const route = '/api/v1/account' + url[1]
        return route;
    },
    proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    }
});

export let AccountRoutes = Router();

// Define the Account Api Proxi Routes (Protected)
AccountRoutes.use(
    (req, res, next) => {
        serviceProxy(req, res, next);
    }
);



