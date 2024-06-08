import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/:id', AuthMiddleware, UserController.getUser);
router.put('/:id', AuthMiddleware, UserController.updateUser);

export default router;
