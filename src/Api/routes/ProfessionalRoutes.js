import { Router } from 'express';
import ProfessionalController from '../controllers/ProfessionalController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/:id', AuthMiddleware, ProfessionalController.getProfessional);
router.put('/:id', AuthMiddleware, ProfessionalController.updateProfessional);

export default router;
