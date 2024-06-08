import { Router } from 'express';
import MessageController from '../controllers/MessageController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/sender/:id', AuthMiddleware, MessageController.getMessagesBySender);
router.get('/receiver/:id', AuthMiddleware, MessageController.getMessagesByReceiver);
router.post('/', AuthMiddleware, MessageController.createMessage);

export default router;
