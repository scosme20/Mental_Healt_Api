import { Router } from 'express';
import ResourceController from '../controllers/ResourceController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/', AuthMiddleware, ResourceController.getAllResources);
router.post('/', AuthMiddleware, ResourceController.createResource);

export default router;
