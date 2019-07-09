"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var schedule_schema_1 = require("../schemas/schedule.schema");
var ScheduleRepository = /** @class */ (function () {
    function ScheduleRepository() {
    }
    ScheduleRepository.prototype.create = function (req) {
        try {
            var newSchedule = new schedule_schema_1.Schedule(req.body);
            return rxjs_1.from(newSchedule
                .save()
                .then(function (schedule) {
                var response = { status: 200, schedule: schedule };
                return response;
            })
                .catch(function (error) {
                var response = { status: 500, error: error };
                return response;
            }));
        }
        catch (e) {
            console.log('Error on Create Schedule', e);
        }
    };
    return ScheduleRepository;
}());
exports.ScheduleRepository = ScheduleRepository;
exports.default = new ScheduleRepository();
//# sourceMappingURL=schedule.repository.js.map