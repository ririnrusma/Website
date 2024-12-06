import { DataTypes } from "sequelize";
import db from "../config/database.mjs";

const User = db.define("users", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING, // Menyimpan nama file foto profil
    allowNull: true,
  },
});

export default User;
