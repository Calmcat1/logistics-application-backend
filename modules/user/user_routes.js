import express from 'express';
import { registerUser, loginUser, getAllUsers, deleteUser} from './user_controller.js';

const router = express.Router();

router.post('/user-registration', registerUser);
router.post('/user-login', loginUser);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser)

export default router;
