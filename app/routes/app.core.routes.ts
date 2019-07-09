import { Request, Response, Router } from 'express';
import { UserRouters } from './core/user.routes';
import { CompanyRouters, CompanyAddressRouters } from './core/company.routes';
import { LoginRoutes } from './core/login.routes';
//import { middleware } from '../../config/index.middleware';
import { ScheduleRoutes } from './core/schedule.routes';
import { RecordRoutes } from './core/record.routes';
import * as passport from 'passport';
import { UserController } from '../modules/core/controllers/user.controller';

const userController: UserController = new UserController()

let router = Router();

// // middleware that is specific to this router
// middleware.forEach(iten => {
//     router.use(iten.action);
// });

// Wellcome Route
router.get('/', function (req: Request, res: Response) {
    userController.create
 
});



router.use('/login', LoginRoutes);

// Define the Core routes (Protected)
router.use(
    '/core',
    router.use(
        '/users',
       
        UserRouters
    ),
    router.use(
        '/companies',
        passport.authenticate('jwt', { session: false }),
        CompanyRouters
    ),
    router.use(
        '/companies/address',
        passport.authenticate('jwt', { session: false }),
        CompanyAddressRouters
    ),
    router.use(
        '/schedules',
        passport.authenticate('jwt', { session: false }),
        ScheduleRoutes
    ),
    router.use(
        '/records',
        passport.authenticate('jwt', { session: false }),
        RecordRoutes
    )
);

export default router;
