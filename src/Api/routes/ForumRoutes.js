import { Router } from 'express';
import ForumController from '../controllers/ForumController.js';
import AuthMiddleware from '../../infrastructure/middleware/AuthMiddleware.js';

const router = Router();

router.get('/user/:id', AuthMiddleware, ForumController.getForumsByUser);
router.post('/', AuthMiddleware, ForumController.createForum);

export default router;
