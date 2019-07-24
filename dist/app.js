"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app_core_routes_1 = require("./routes/app.core.routes");
var mongodb_1 = require("./shared/services/mongodb");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var auth_1 = require("./core/auth");
var helmet = require("helmet");
var logger = require("morgan");
require("reflect-metadata");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, rootPath, pathPublicFolder, publicFolder;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.app.use(logger('dev'));
                        // MongoDb 2
                        _a = this;
                        return [4 /*yield*/, mongodb_1.default.connect()];
                    case 1:
                        // MongoDb 2
                        _a.db = _b.sent();
                        // support application/json type post data
                        this.app.use(bodyParser.json());
                        //support application/x-www-form-urlencoded post data
                        this.app.use(bodyParser.urlencoded({ extended: false }));
                        rootPath = __dirname.replace('/api-gateway/app', "");
                        pathPublicFolder = path.join(rootPath + '/public');
                        publicFolder = pathPublicFolder.replace('/dist/api-gateway', '');
                        this.app.use('/public', express.static(publicFolder));
                        this.app.use(cookieParser());
                        // Request protection
                        this.app.use(helmet());
                        // Session
                        this.app.use(session({
                            secret: 'keyboard cat',
                            resave: false,
                            saveUninitialized: true,
                            cookie: { secure: true }
                        }));
                        // Passport
                        this.app.use(passport.initialize());
                        this.app.use(passport.session());
                        // Passport Strategy
                        passport.use(auth_1.TokenStrategy);
                        // Default Api Route Group
                        this.app.use('/api/v1', app_core_routes_1.default);
                        // Redirect unmatch routes
                        this.app.use(function (req, res) {
                            res.send('/public/home');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map