
import { Router } from 'express';
import { businessController } from './business.controller';

const router = Router();

router.post('/', businessController.createBusiness);
router.patch('/:id', businessController.updateBusiness);
router.delete('/:id', businessController.deleteBusiness);
router.get('/:id', businessController.getBusinessById);
router.get('/', businessController.getAllBusiness);

export const businessRoutes = router;