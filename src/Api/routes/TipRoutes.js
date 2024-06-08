import { Router } from 'express';
import TipController from '../controllers/TipController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/', AuthMiddleware, TipController.getAllTips);
router.post('/', AuthMiddleware, TipController.createTip);

export default router;
