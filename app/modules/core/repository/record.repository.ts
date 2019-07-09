import { Record } from '../schemas/record.schema';
import { Request } from 'express';
import { Observable, from } from 'rxjs';
import { IRecordModel } from '../interfaces/record.model.interface';

interface IResponse {
    status: number;
    record?: IRecordModel;
    error?: any;
}

export class RecordRepository {
    create(req: Request): Observable<IResponse> {
        const newRecord = new Record(req.body);
        return from(
            newRecord
                .save()
                .then(record => {
                    const response: IResponse = { status: 200, record };
                    return response;
                })
                .catch(error => {
                    const response: IResponse = { status: 500, error };
                    return response;
                })
        );
    }
}

export default new RecordRepository();
