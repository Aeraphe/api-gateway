import { Observable, from } from 'rxjs';
import { Request } from 'express';
import { Schedule } from '../schemas/schedule.schema';
import { IScheduleModel } from '../contract/schedule.model.interface';

interface IResponse {
    status: number;
    schedule?: IScheduleModel;
    error?: any;
}

export class ScheduleRepository {
    create(req: Request): Observable<IResponse> {
        try {
            const newSchedule = new Schedule(req.body);
            return from(
                newSchedule
                    .save()
                    .then(schedule => {
                        const response: IResponse = { status: 200, schedule };
                        return response;
                    })
                    .catch(error => {
                        const response: IResponse = { status: 500, error };
                        return response;
                    })
            );
        } catch (e) {
            console.log('Error on Create Schedule', e);
        }
    }
}

export default new ScheduleRepository();
