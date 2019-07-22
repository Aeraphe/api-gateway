import { Model, Schema } from 'mongoose';
import { CompanyContract } from '../contract/company.contract';
import * as mongoose from 'mongoose';
import { CompanySchema } from './company.schema';
import { ApiServiceContract } from '../contract/api-service.contract';
import { ApiServiceTypeSchema } from './api-service-type.schema';


const ApiServiceSchema: Schema = new Schema({
    name: String,
    api:ApiServiceTypeSchema
});

export const ApiServiceModel: Model<ApiServiceContract> = mongoose.model<ApiServiceContract>(
    'api-services',
    ApiServiceSchema
);



export const AccountSchema: Schema = new Schema({
    owner: { _id: String, name: String },
    company: CompanySchema,
    service: [ApiServiceSchema ],
    createdAte: { type: Date, default: Date.now },
    trash: { type: Number, default: 0 }
});

export const AccountModel: Model<CompanyContract> = mongoose.model<CompanyContract>(
    'accounts',
    AccountSchema
);
