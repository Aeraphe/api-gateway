"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.RecordSchema = new mongoose_1.Schema({
    userId: { type: String, required: 'Usuário necessário' },
    task: {
        type: [{ id: String }],
        required: 'Favor Selecionar uma Atividade'
    },
    description: { type: String, required: 'Favor inserir uma Descrição' },
    responsible: [{ userId: String, precentage: Number, file: [] }],
    start: Date,
    finish: Date,
    categories: [{ name: String, slug: String }],
    severity: { name: String, slug: String },
    impact: { name: String, slug: String },
    createdAt: Date,
    status: [{ name: String, date: Date }],
    deployment: { type: Array }
});
exports.RecordSchema.pre('save', function (next) {
    var now = new Date();
    if (!_this.createdAt) {
        console.log('Create Date User');
        _this.createdAt = now;
    }
    next();
});
exports.Record = mongoose.model('records', exports.RecordSchema);
//# sourceMappingURL=record.schema.js.map