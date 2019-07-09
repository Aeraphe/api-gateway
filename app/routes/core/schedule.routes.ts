import { Router } from 'express';
import ScheduleController from '../../modules/core/controllers/schedule.controller'
export const ScheduleRoutes = Router();



ScheduleRoutes.post("/",ScheduleController.create)
