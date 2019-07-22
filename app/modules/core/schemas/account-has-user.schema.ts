import { Model, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { AccountHasUserContract } from '../contract/account-has-user.contract';

export const AccountHasUserSchema: Schema = new Schema({
    account_id: String,
    user_id: String,
    api: { _id: String, name: String },
    roles: [{ role: String, permissions: [] }]
});


export const AccountHasUserModel: Model<AccountHasUserContract> = mongoose.model<AccountHasUserContract>(
    'account-has-users',
    AccountHasUserSchema
);
