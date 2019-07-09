import { Router } from 'express';
import RecordController from '../../modules/core/controllers/record.controller';

export const RecordRoutes = Router();

RecordRoutes.post('/', RecordController.create);
