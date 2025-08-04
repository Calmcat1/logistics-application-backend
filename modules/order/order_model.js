import { DataTypes } from 'sequelize';
import sequelize from '../../config/config_db.js';

const Order = sequelize.define('Order', {
  order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  order_customer_name: { type: DataTypes.STRING, allowNull: false },
  order_customer_email: {type: DataTypes.STRING, allowNull: false},
  order_destination: { type: DataTypes.STRING, unique: true, allowNull: false },
  order_date: { type: DataTypes.STRING, allowNull: false },
  order_package: { type: DataTypes.STRING, allowNull: false},
  order_status: {type : DataTypes.ENUM('delivered', 'cancelled', 'in progress'), allowNull: false}
});

export default Order;
