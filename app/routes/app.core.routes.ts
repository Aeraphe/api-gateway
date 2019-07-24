import { Router } from 'express';
import * as passport from 'passport';
import EquipamentApiRoutes from '../routes/equipment-api/equipament-api.routes';
import InventoryApiRoutes from '../routes/inventory-api/inventory-api.routes';
import { AccountRoutes } from './account-api/account-api.routes';

let router = Router();


router.use(
    '/conta',
    AccountRoutes
);

router.use(
    '/equipamento',
    passport.authenticate('jwt', { session: false }),
    EquipamentApiRoutes
);

router.use(
    '/estoque',
    passport.authenticate('jwt', { session: false }),
    InventoryApiRoutes
);

export default router;
