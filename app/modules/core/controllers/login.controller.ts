import { Response, Request } from 'express';
import User from '../repository/user.repository';

import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import LoginResponse from '../response/login.response';

export class LoginController {
    /**
     * Session Login
     * @param req
     * @param res
     */
    public login(req: Request, res: Response, next) {
        passport.authenticate(
            'local',
            { session: false },
            (err, user, info) => {
                let status;
                let token;
                if (err || !user) {
                    status = 400;
                } else {
                    req.login(user, { session: false }, err => {
                        if (err) {
                            res.send(err);
                        }
                        token = jwt.sign(
                            { ...user },
                            'serradacanastrariosaofrancisco'
                        );
                        status = 200;
                    });
                }

                let response = LoginResponse.create(req, {
                    status,
                    user,
                    token
                });
                return res.status(response.status).json(response);
            }
        )(req, res);
    }

    public logout() {}

    public forgotPassword() {}
}
