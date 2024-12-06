import express from 'express';
import { getUsers, Register, Login } from '../controllers/users.mjs';
import { getProfile, updateProfile, uploadPhoto, changePassword } from '../controllers/profileController.mjs';
import { verifyToken } from '../middleware/verifyToken.mjs';
import { upload } from '../middleware/uploadPhoto.mjs';

const router = express.Router();

// Rute pengguna
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);

// Rute profil
router.get('/profile', verifyToken, getProfile); // Mendapatkan data profil
router.put('/profile', verifyToken, updateProfile); // Mengupdate data profil
router.post('/profile/photo', verifyToken, upload.single('photo'), uploadPhoto); // Mengunggah foto profil
router.put('/profile/password', verifyToken, changePassword); // Mengubah kata sandi

export default router;
