import { DataTypes } from 'sequelize';
import sequelize from '../../config/config_db.js';

const Delivery = sequelize.define('Delivery', {
  delivery_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  delivery_driver_name: { type: DataTypes.STRING, allowNull: false },
  delivery_customer_name: {type: DataTypes.STRING, allowNull: false},
  delivery_destination: {type: DataTypes.STRING, allowNull: false},
  delivery_ETA: { type: DataTypes.STRING, unique: true, allowNull: false },
  delivery_status: {type : DataTypes.ENUM('delivered', 'cancelled', 'in progress'), allowNull: false}
});

export default Delivery;