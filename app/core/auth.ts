import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
require('dotenv').config({ debug: process.env.DEBUG });


export const TokenStrategy = new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.TOKEN_SECRET
    }, async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
)

