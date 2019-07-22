import { Model, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiServiceTypeContract } from '../contract/api-service-type.contract';

export const ApiServiceTypeSchema: Schema = new Schema({
    name: String,
    tag: String,
    description: String,
    date: { type: Date, default: Date.now },
});


export const ApiServiceTypeModel: Model<ApiServiceTypeContract> = mongoose.model<ApiServiceTypeContract>(
    'api-service-types',
    ApiServiceTypeSchema
);
