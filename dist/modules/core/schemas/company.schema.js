"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var CompanyAdressSchema = new mongoose_1.Schema({
    state: String,
    city: String,
    street: String,
    number: Number
});
var CompanyCellPhonesSchema = new mongoose_1.Schema({
    ddd: String,
    number: String,
    category: String
});
exports.CompanySchema = new mongoose_1.Schema({
    companyId: { type: String, required: 'Não foi definido o id da Empresa' },
    name: { type: String, required: 'Favor Inserir o Nome' },
    address: [CompanyAdressSchema],
    cellphones: [CompanyCellPhonesSchema],
    createdAte: { type: Date, default: Date.now },
    trash: { type: Number, default: 0 }
});
exports.Company = mongoose.model('companies', exports.CompanySchema);
//# sourceMappingURL=company.schema.js.map