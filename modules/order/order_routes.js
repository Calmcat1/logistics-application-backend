import express from 'express';
import { getAllOrders, getUserOrders, getRecentOrders, deleteOrder, createOrder, updateOrderStatus} from './order_controller.js';

const router = express.Router();

router.post('/add-order', createOrder)
router.get('/orders', getAllOrders);
router.get('/orders/recent', getRecentOrders)
router.get('/orders/user/:name', getUserOrders);
router.delete('/orders/:id', deleteOrder);
router.patch('/orders/:id/status', updateOrderStatus);

export default router;