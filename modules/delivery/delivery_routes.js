import express from 'express';
import {createDelivery, getAllDeliveries, getDeliveriesByDriverName, deleteDelivery, updateDeliveryStatus} from './delivery_controller.js';

const router = express.Router();

router.post('/add-delivery', createDelivery)
router.get('/deliveries', getAllDeliveries);
router.get('/orders/user/:name', getDeliveriesByDriverName);
router.delete('/orders/:id', deleteDelivery);
router.patch('/update-delivery-status', updateDeliveryStatus)

export default router;