import { AeroResponse } from '../../../core/response';
import { Request } from 'express';

export class RecordResponse extends AeroResponse {
    constructor() {
        super();
    }

    create(req: Request, data: any, type: string) {
        switch (type) {
            case 'create':
                return this.createNewRecord(req, data);
                break;
            default:
                break;
        }
    }

    private createNewRecord(req: Request, data: any) {
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
}

export default new RecordResponse();
