"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var record_schema_1 = require("../schemas/record.schema");
var rxjs_1 = require("rxjs");
var RecordRepository = /** @class */ (function () {
    function RecordRepository() {
    }
    RecordRepository.prototype.create = function (req) {
        var newRecord = new record_schema_1.Record(req.body);
        return rxjs_1.from(newRecord
            .save()
            .then(function (record) {
            var response = { status: 200, record: record };
            return response;
        })
            .catch(function (error) {
            var response = { status: 500, error: error };
            return response;
        }));
    };
    return RecordRepository;
}());
exports.RecordRepository = RecordRepository;
exports.default = new RecordRepository();
//# sourceMappingURL=record.repository.js.map