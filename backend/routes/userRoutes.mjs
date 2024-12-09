import express from 'express';
import { deleteUser } from '../controllers/users.mjs'; 

const router = express.Router();

router.delete('/:id', deleteUser);

export default router; 

