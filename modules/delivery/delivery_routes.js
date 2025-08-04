import express from 'express';
import {createDelivery, getAllDeliveries, getDeliveriesByDriverName, deleteDelivery, updateDeliveryStatus} from './delivery_controller.js';

const router = express.Router();

router.post('/add-delivery', createDelivery)
router.get('/deliveries', getAllDeliveries);
router.get('/deliveries/user/:name', getDeliveriesByDriverName);
router.delete('/deliveries/:id', deleteDelivery);
router.patch('/deliveries/:id/status', updateDeliveryStatus)

export default router;