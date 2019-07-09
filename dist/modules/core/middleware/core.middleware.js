"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = {
    auth: function (req, res, next) {
        console.log('Time: ', Date.now());
        next();
    }
};
//# sourceMappingURL=core.middleware.js.map