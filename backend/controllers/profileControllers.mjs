import User from "../models/usermodels.mjs";
import bcrypt from "bcrypt";

// Mendapatkan data profil
export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ["id", "fullName", "username", "email", "photo"],
    });
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error });
  }
};

// Mengupdate profil
export const updateProfile = async (req, res) => {
  try {
    const { fullName, username, email } = req.body;
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });

    user.fullName = fullName || user.fullName;
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.json({ message: "Profil berhasil diperbarui", user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error });
  }
};

// Mengunggah foto profil
export const uploadPhoto = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });

    user.photo = req.file.filename; // Filename disimpan (gunakan middleware untuk file upload)
    await user.save();

    res.json({ message: "Foto profil berhasil diunggah", user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error });
  }
};

// Mengubah kata sandi
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Kata sandi saat ini salah" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ message: "Kata sandi berhasil diubah" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error });
  }
};
