import Users from "../models/userModels.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getUsers = async(req, res) => {
    try{
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email', 'createdAt']
        });
        res.json(users);
    } catch(error){
        console.log(error);
    }
}
export const Register = async(req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    if(password !== confirmPassword) return res.status(400).json({msg: "Password dan konfirmasi password tidak cocok"});
    
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    
    try {
        const existingUser  = await Users.findAll({
            where: { email: email }
        });
        if (existingUser .length > 0) {
            return res.status(400).json({ msg: "Email sudah terdaftar" });
        }

        const newUser  = await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });

        const userId = newUser .id;
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await Users.update({refresh_token: refreshToken}, {
            where: { id: userId }
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Terjadi kesalahan saat registrasi" });
    }
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where: { email: req.body.email }
        });

        if (user.length === 0) {
            return res.status(404).json({ msg: "Email tidak ditemukan" });
        }

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) {
            return res.status(400).json({ msg: "Password salah" });
        }

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '60s'
        });
        const refreshToken = user[0].refresh_token; 

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Terjadi kesalahan saat login" });
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204); // Tidak ada token, tidak perlu logout

    const user = await Users.findAll({
        where: { refresh_token: refreshToken }
    });

    if (!user[0]) return res.sendStatus(204); // Token tidak valid

    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: { id: userId }
    });

    res.clearCookie('refreshToken'); 
    return res.sendStatus(200); 
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Error deleting user' });
    }
};
