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
var model_1 = require("../model");
var route_path_service_1 = require("../../../shared/services/route-path.service");
var rxjs_1 = require("rxjs");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.route = route_path_service_1.routerPathService;
    }
    /**
     *Create new User
     *
     * @param {Request} req Express Request
     * @param {Response} res Rexpress Response
     * @memberof UserRepository
     * @return
     */
    UserRepository.prototype.create = function (req, res) {
        var newUser = new model_1.User(req.body);
        return rxjs_1.from(newUser
            .save()
            .then(function (user) {
            return { status: 200, user: user };
        })
            .catch(function (error) {
            return { status: 500, error: error };
        }));
    };
    /**
     * Find user by e-mail
     * @param req
     * @param res
     */
    UserRepository.prototype.findByEmail = function (email) {
        return rxjs_1.from(model_1.User.findOne({ email: email })
            .then(function (user) {
            return user;
        })
            .catch(function (error) {
            return error;
        }));
    };
    UserRepository.prototype.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.userId;
                        return [4 /*yield*/, model_1.User.findById(id, function (err, user) {
                                if (err) {
                                    return res.status(500).json({
                                        error: 'Não foi possível localizar o usuário',
                                        status: 404
                                    });
                                }
                                return res.status(200).json({
                                    message: 'Usuário encontrado com sucesso!',
                                    status: 200,
                                    data: [user],
                                    url: _this.route.getRoute(req)
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getAllUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, model_1.User.find({}, function (err, user) {
                            if (err) {
                                return res.status(500).json({
                                    error: 'Não foi possível localizar',
                                    status: 404
                                });
                            }
                            return res.status(200).json({
                                message: 'Usuário(s) encontrado(s) com sucesso!',
                                status: 200,
                                data: user,
                                url: _this.route.getRoute(req)
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
exports.default = new UserRepository();
//# sourceMappingURL=user.repository.js.map