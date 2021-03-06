// lib/app.ts
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import CoreRoutes from './routes/app.core.routes';
import MongoDb from './shared/services/mongodb';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import {  TokenStrategy } from './core/auth';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import "reflect-metadata";


export class App {
    public app: express.Application;
    public db: any;
    public mysql: any;

    constructor() {
        this.app = express();
        this.config();

    }


    private async config(): Promise<void> {
        this.app.use(logger('dev'));
        // MongoDb 2
        this.db = await MongoDb.connect();
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //Public Folder For Static Angular Files
        let rootPath = __dirname.replace('/dist', "");
        let pathPublicFolder = path.join(rootPath + '/public/local-smart/build');
        let publicFolder = pathPublicFolder.replace('/dist/api-gateway', '');
        this.app.use('/app', express.static(publicFolder));
        let pathPublicStaticFolder = path.join(rootPath + '/public/local-smart/build/static');
        this.app.use('/static', express.static(pathPublicStaticFolder));
        this.app.use(cookieParser());
        // Request protection
        this.app.use(helmet());
        // Session
        this.app.use(
            session({
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: true,
                cookie: { secure: true }
            })
        );
        // Passport
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        // Passport Strategy
        passport.use(TokenStrategy);
        // Default Api Route Group
        this.app.use('/api/v1', CoreRoutes);
        // Redirect unmatch routes
        this.app.use((req, res) => {
            res.send('/public/home');
        });
    }
}
