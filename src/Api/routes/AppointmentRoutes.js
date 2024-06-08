import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/user/:id', AuthMiddleware, AppointmentController.getAppointmentsByUser);
router.get('/professional/:id', AuthMiddleware, AppointmentController.getAppointmentsByProfessional);
router.post('/', AuthMiddleware, AppointmentController.createAppointment);

export default router;
