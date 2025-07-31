import express from 'express';
import { registerUser, loginUser } from './user_controller.js';

const router = express.Router();

router.post('/user-registration', registerUser);
router.post('/user-login', loginUser);

export default router;
