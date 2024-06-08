import { Router } from 'express';
import TestController from '../controllers/TestController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/', AuthMiddleware, TestController.getAllTests);
router.post('/', AuthMiddleware, TestController.createTest);

export default router;
