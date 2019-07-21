import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { IRecordModel } from '../contract/record.model.interface';

export const RecordSchema: Schema = new Schema({
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

RecordSchema.pre('save', next => {
    let now = new Date();
    if (!this.createdAt) {
        console.log('Create Date User');
        this.createdAt = now;
    }
    next();
});

export const Record: Model<IRecordModel> = mongoose.model<IRecordModel>(
    'records',
    RecordSchema
);
