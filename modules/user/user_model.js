import { DataTypes } from 'sequelize';
import sequelize from '../../config/config_db.js';

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_email: { type: DataTypes.STRING, unique: true, allowNull: false },
  user_password: { type: DataTypes.STRING, allowNull: false },
  user_role: { type: DataTypes.ENUM('admin', 'driver', 'customer'), allowNull: false}
});

export default User;
