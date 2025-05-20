import { Router } from 'express';
import { addRequestsController } from './addRequests.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.organizer),
  addRequestsController.createAddRequests,
);
router.patch(
  '/approve/:id',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.approvedAddRequests,
);
router.patch(
  '/reject/:id',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.rejectAddRequests,
);
router.patch(
  '/:id',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.updateAddRequests,
);
router.delete(
  '/:id',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.deleteAddRequests,
);
router.get(
  '/:id',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.getAddRequestsById,
);
router.get(
  '/',
  auth(
    USER_ROLE.organizer,
    USER_ROLE.admin,
    USER_ROLE.sub_admin,
    USER_ROLE.sub_admin,
    USER_ROLE.super_admin,
  ),
  addRequestsController.getAllAddRequests,
);

export const addRequestsRoutes = router;
