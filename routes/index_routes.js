import express from 'express';
import userRoutes from '../modules/user/user_routes.js';
// import orderRoutes, deliveryRoutes

const router = express.Router();

router.use('/logistics/api/v1/user', userRoutes);
// router.use('/api/customer', customerRoutes);
// router.use('/api/admin', adminRoutes);

export default router;
