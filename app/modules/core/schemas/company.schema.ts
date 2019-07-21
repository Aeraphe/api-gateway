import { Model, Schema } from 'mongoose';
import { ICompanyModel } from '../contract/company.model.interface';
import * as mongoose from 'mongoose';

const CompanyAdressSchema: Schema = new Schema({
    state: String,
    city: String,
    street: String,
    number: Number
});

const CompanyCellPhonesSchema: Schema = new Schema({
    ddd: String,
    number: String,
    category: String
});

export const CompanySchema: Schema = new Schema({
    companyId: { type: String, required: 'Não foi definido o id da Empresa' },
    name: { type: String, required: 'Favor Inserir o Nome' },
    address: [CompanyAdressSchema],
    cellphones: [CompanyCellPhonesSchema],
    createdAte: { type: Date, default: Date.now },
    trash: { type: Number, default: 0 }
});

export const Company: Model<ICompanyModel> = mongoose.model<ICompanyModel>(
    'companies',
    CompanySchema
);
