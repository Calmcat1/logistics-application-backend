import Delivery from './delivery_model.js';

// Create a new delivery
export const createDelivery = async (req, res) => {
  const {
    delivery_driver_name,
    delivery_customer_name,
    delivery_destination,
    delivery_ETA,
    delivery_status
  } = req.body;

  try {
    const newDelivery = await Delivery.create({
      delivery_driver_name,
      delivery_customer_name,
      delivery_destination,
      delivery_ETA,
      delivery_status
    });

    res.status(201).json({
      message: 'Delivery created successfully',
      delivery: newDelivery
    });
  } catch (err) {
    console.error('Error creating delivery:', err.message);
    res.status(500).json({ error: 'Failed to create delivery' });
  }
};

// Get all deliveries
export const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.findAll();
    res.status(200).json(deliveries);
  } catch (err) {
    console.error('Error fetching deliveries:', err.message);
    res.status(500).json({ error: 'Failed to fetch deliveries' });
  }
};

// View deliveries by driver name
export const getDeliveriesByDriverName = async (req, res) => {
  const { name } = req.params;
  console.log('Fetching deliveries for driver:', name);

  try {
    const deliveries = await Delivery.findAll({
      where: { delivery_driver_name: name }
    });

    res.status(200).json(deliveries);
  } catch (err) {
    console.error('Error fetching deliveries:', err.message);
    res.status(500).json({ error: 'Failed to fetch deliveries' });
  }
};

// Delete a delivery by ID
export const deleteDelivery = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Delivery.destroy({ where: { delivery_id: id } });

    if (result === 0) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    res.status(200).json({ message: 'Delivery deleted successfully' });
  } catch (err) {
    console.error('Error deleting delivery:', err.message);
    res.status(500).json({ error: 'Failed to delete delivery' });
  }
};

// Update delivery status only
export const updateDeliveryStatus = async (req, res) => {
  const { id } = req.params;
  const { delivery_status } = req.body;

  try {
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    delivery.delivery_status = delivery_status;
    await delivery.save();

    res.status(200).json({
      message: 'Delivery status updated successfully',
      delivery
    });
  } catch (err) {
    console.error('Error updating delivery status:', err.message);
    res.status(500).json({ error: 'Failed to update delivery status' });
  }
};

