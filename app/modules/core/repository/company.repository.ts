import { Company } from '../schemas/company.schema';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';
import * as mongoose from 'mongoose';

export class CompanyRepository {
    public route: RoutePathService = routerPathService;

    create(req: Request): Observable<any> {
        try {
            const newCompany = new Company(req.body);
            return from(
                newCompany
                    .save()
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    }

    update(req): Observable<any> {
        try {
            return from(
                Company.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: req.body },
                    { new: true }
                )
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }
    /**
     * Update company Address
     * @param req 
     */
    updateAddress(req): Observable<any> {
        try {
            return from(
                Company.findOneAndUpdate(
                    { _id: req.params.companyId, 'address._id': req.params.addressId },
                    { $set: req.body },
                    { new: true }
                )
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }
    /**
     * Update company Phones
     * @param req 
     */
    updatePhones(req): Observable<any> {
        try {
            return from(
                Company.findOneAndUpdate(
                    { _id: req.params.companyId, 'phones._id': req.params.phonesId },
                    { $set: req.body },
                    { new: true }
                )
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }

    get(req: Request): Observable<any> {
        try {
            const id: any = req.params.id;

            return from(
                Company.findOne({ _id: id })
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error on get company', e);
        }
    }

    async getAll(req: Request, res: Response) {
        Company.find({}, (err, company) => {
            if (err) {
                return res.status(404).json({
                    message: 'Não foi possível efetuar a operação',
                    status: 404
                });
            }
            return res.status(200).json({
                message: 'Operação realizada com sucesso!!!',
                status: 200,
                data: [company],
                url: this.route.getRoute(req)
            });
        });
    }
}

export default new CompanyRepository();
