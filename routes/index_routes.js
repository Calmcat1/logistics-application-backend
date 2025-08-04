import express from 'express';
import userRoutes from '../modules/user/user_routes.js';
import orderRoutes from '../modules/order/order_routes.js';
import deliveryRoutes from '../modules/delivery/delivery_routes.js';
// import orderRoutes, deliveryRoutes

const router = express.Router();

router.use('/logistics/api/v1/user', userRoutes);
router.use('/logistics/api/v1/order', orderRoutes);
router.use('/logistics/api/v1/delivery', deliveryRoutes)
// router.use('/api/admin', adminRoutes);s

export default router;
