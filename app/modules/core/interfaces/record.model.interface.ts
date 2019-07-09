import { Document } from 'mongoose';
export interface IRecordModel extends Document {
    userId: string;
    task: [{ id: string }];
    description: string;
    responsible: [{ userId: string; precentage: number; file: [] }];
    start: Date;
    finish: Date;
    categories: [{ name: string; slug: string }];
    severity: { name: string; slug: string };
    impact: { name: string; slug: string };
    status: [{ name: string; date: Date }];
    createdAt: Date;
    deployment: [IRecordModel];
}
