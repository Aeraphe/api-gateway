import Record from '../repository/record.repository';
import RecordResponse from '../response/record.response';
import { Request, Response } from 'express';

export class RecordController {
    create(req: Request, res: Response) {
        try {
            Record.create(req).subscribe(record => {
                const data = RecordResponse.create(req, record, 'creste');
                res.status(data.status).json(data);
            });
        } catch (e) {
            console.log('Error on Create Record: ', e);
        }
    }
}

export default new RecordController();
