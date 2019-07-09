import { Document } from 'mongoose';
export interface IScheduleModel extends Document {
    projectId: string;
    name: String;
    start: Date;
    finis: Date;
    version: Date;
    baselines: [];
    createdAte: Date;
}
