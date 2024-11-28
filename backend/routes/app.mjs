import express from 'express';
import { getUsers, Register, Login } from '../controllers/users.mjs';
import { verifyToken } from '../middleware/verifyToken.mjs';

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)

export default router;