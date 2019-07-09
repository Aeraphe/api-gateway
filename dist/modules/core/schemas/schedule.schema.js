"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.ScheduleSchema = new mongoose_1.Schema({
    projectId: { type: String, required: 'Selecione o Projeto' },
    name: { type: String, required: 'Defina um nome para o cronograma' },
    start: Date,
    finis: Date,
    version: Date,
    baselines: [],
    status: { type: Number, default: 1 },
    createdAte: { type: Date, default: Date.now }
});
exports.Schedule = mongoose.model('schedules', exports.ScheduleSchema);
//# sourceMappingURL=schedule.schema.js.map