import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { IScheduleModel } from '../contract/schedule.model.interface';

export const ScheduleSchema: Schema = new Schema({
    projectId: { type: String, required: 'Selecione o Projeto' },
    name: { type: String, required: 'Defina um nome para o cronograma' },
    start: Date,
    finis: Date,
    version: Date,
    baselines: [],
    status: { type: Number, default: 1 },
    createdAte: { type: Date, default: Date.now }
});

export const Schedule: Model<IScheduleModel> = mongoose.model<IScheduleModel>(
    'schedules',
    ScheduleSchema
);
