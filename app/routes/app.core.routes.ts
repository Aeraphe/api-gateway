import { Router } from 'express';
import { UserRouters } from './core/user.routes';
import { LoginRoutes } from './core/login.routes';

import * as passport from 'passport';

import EquipamentApiRoutes from '../routes/equipment-api/equipament-api.routes';

import InventoryApiRoutes from '../routes/inventory-api/inventory-api.routes';

let router = Router();



router.use('/login', LoginRoutes);

// Define the Core routes (Protected)
router.use(
    '/core',
    router.use(
        '/users',
        UserRouters
    )
);

router.use(
    '/equipamento',
    EquipamentApiRoutes
);

router.use(
    '/estoque',
    InventoryApiRoutes
);

export default router;
