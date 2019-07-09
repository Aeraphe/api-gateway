"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var record_repository_1 = require("../repository/record.repository");
var record_response_1 = require("../response/record.response");
var RecordController = /** @class */ (function () {
    function RecordController() {
    }
    RecordController.prototype.create = function (req, res) {
        try {
            record_repository_1.default.create(req).subscribe(function (record) {
                var data = record_response_1.default.create(req, record, 'creste');
                res.status(data.status).json(data);
            });
        }
        catch (e) {
            console.log('Error on Create Record: ', e);
        }
    };
    return RecordController;
}());
exports.RecordController = RecordController;
exports.default = new RecordController();
//# sourceMappingURL=record.controller.js.map