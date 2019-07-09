import { Request, Response } from 'express';
import Schedule from '../repository/schedule.repository';
import ScheduleResponse from '../response/schedule.response';

export class ScheduleController {
    create(req: Request, res: Response) {
        try {
            Schedule.create(req).subscribe(data => {
                const schedule = ScheduleResponse.create(req, data, 'create');
                res.status(schedule.status).json(schedule);
            });
        } catch (e) {
            console.log('Error on Create Schedule', e);
        }
    }
}

export default new ScheduleController();
