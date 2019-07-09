import { Strategy } from 'passport-local';
import { User } from '../schemas/user.schema';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

export const LoginStrategy = new Strategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, done) => {
        User.findOne({ email: email,trash: 0}, function(err, user) {
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
    }
);

export const TokenStrategy = new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'serradacanastrariosaofrancisco'
    },
    function(jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
);
