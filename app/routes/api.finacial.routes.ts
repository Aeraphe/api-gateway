import { Router } from 'express';
import * as passport from 'passport';
import * as httpProxy from 'express-http-proxy';
import RoutePathService from '../shared/services/route-path.service';
const finacialServiceProxy = httpProxy('https://127.0.0.1:5001', {
    https: true,
    proxyReqPathResolver: function(req) {
        const url = RoutePathService.getRoute(req).split('/financeiro');
        return 'https://127.0.0.1:5001' + url[1];
    },
    proxyReqOptDecorator: function(proxyReqOpts, originalReq) {
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    }
});

let routers = Router();

// Define the Finacial Module Routes (Protected)
routers.use(
    '/financeiro',
    routers.use(
        '/centro-de-custos',
        passport.authenticate('jwt', { session: false }),
        (req, res, next) => {
            finacialServiceProxy(req, res, next);
        }
    ),
    routers.use(
        '/fluxo-de-caixa',
        passport.authenticate('jwt', { session: false }),
        (req, res, next) => {
            finacialServiceProxy(req, res, next);
        }
    ),
    routers.use(
        '/fluxo-de-caixa/destino',
        passport.authenticate('jwt', { session: false }),
        (req, res, next) => {
            finacialServiceProxy(req, res, next);
        }
    ),
    routers.use(
        '/fluxo-de-caixa/destino/distribuir',
        passport.authenticate('jwt', { session: false }),
        (req, res, next) => {
            finacialServiceProxy(req, res, next);
        }
    )
);

export default routers;
