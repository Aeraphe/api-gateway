"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schedule_repository_1 = require("../repository/schedule.repository");
var schedule_response_1 = require("../response/schedule.response");
var ScheduleController = /** @class */ (function () {
    function ScheduleController() {
    }
    ScheduleController.prototype.create = function (req, res) {
        try {
            schedule_repository_1.default.create(req).subscribe(function (data) {
                var schedule = schedule_response_1.default.create(req, data, 'create');
                res.status(schedule.status).json(schedule);
            });
        }
        catch (e) {
            console.log('Error on Create Schedule', e);
        }
    };
    return ScheduleController;
}());
exports.ScheduleController = ScheduleController;
exports.default = new ScheduleController();
//# sourceMappingURL=schedule.controller.js.map