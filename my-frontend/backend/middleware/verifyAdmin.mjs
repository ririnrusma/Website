const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ msg: "Akses ditolak. Token tidak tersedia." });

    try {
        const verified = jwt.verify(token, 'secretKey'); // Pastikan token sesuai
        if (verified.role !== 'admin') {
            return res.status(403).json({ msg: "Akses ditolak. Anda bukan admin." });
        }
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ msg: "Token tidak valid." });
    }
};

// Gunakan middleware pada endpoint admin
router.get('/admin/users', verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan server." });
    }
});
