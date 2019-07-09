"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var rxjs_1 = require("rxjs");
var DbSequelize = /** @class */ (function () {
    function DbSequelize() {
        this.dbSequalize$ = new rxjs_1.BehaviorSubject(new sequelize_1.Sequelize('mysql://root:adm@localhost:3306/costumers'));
        this.db = this.dbSequalize$.asObservable();
    }
    return DbSequelize;
}());
exports.default = new DbSequelize();
//# sourceMappingURL=mysql.js.map