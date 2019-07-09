import { AeroResponse } from '../../../core/response';
import { Request } from 'express';

export class ScheduleResponse extends AeroResponse {
    constructor() {
        super();
    }

    create(req: Request, data: any, type: string) {
        switch (type) {
            case 'create':
                return this.newSchedule(req, data);
                break;

            case 'update':
                return this.updateSchedule(req, data);
                break;
        }
    }

    private newSchedule(req: Request, data: any) {
        if (data.status != 200) {
            return {
                message: 'Não foi possível cadastrar o Cronograma',
                ...data
            };
        }
        return {
            message: 'Cronograma cadastrado com sucesso!!!',
            status: data.status,
            data: [
                {
                    ...data
                }
            ],
            url: this.route.getRoute(req)
        };
    }

    private updateSchedule(req: Request, data: any) {}
}

export default new ScheduleResponse();
