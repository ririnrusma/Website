import express from 'express';
import { getUsers, isAdmin, Register, Login, Logout, deleteUser } from '../controllers/users.mjs';
import { verifyToken } from '../middleware/verifyToken.mjs';
import { refreshToken } from '../controllers/RefreshToken.mjs';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.delete('/users/:id', isAdmin, deleteUser  );

export default router;