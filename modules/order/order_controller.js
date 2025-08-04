import Order from './order_model.js';

// Create a new order
export const createOrder = async (req, res) => {
  const {
    order_customer_name,
    order_customer_email,
    order_destination,
    order_date,
    order_package,
    order_status
  } = req.body;

  try {
    const newOrder = await Order.create({
      order_customer_name,
      order_customer_email,
      order_destination,
      order_date,
      order_package,
      order_status
    });

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder
    });
  } catch (err) {
    console.error('Error creating order:', err.message);
    res.status(500).json({ error: 'Failed to create order' });
  }
};



// View all orders (admin or internal use)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// View a user's orders (based on email)
export const getUserOrders = async (req, res) => {
  const { name } = req.params; // passed as /orders/user/:email
  console.log('Searching orders for name:', name);
  try {
    const orders = await Order.findAll({ where: { order_customer_name: name } });
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching user orders:', err.message);
    res.status(500).json({ error: 'Failed to fetch user orders' });
  }
};

// View recent orders (latest 10)
export const getRecentOrders = async (req, res) => {
  try {
    const recentOrders = await Order.findAll({
      order: [['createdAt', 'DESC']], // Sort by creation date descending
      limit: 10
    });
    res.status(200).json(recentOrders);
  } catch (err) {
    console.error('Error fetching recent orders:', err.message);
    res.status(500).json({ error: 'Failed to fetch recent orders' });
  }
};


// Delete a specific order (by order_id)
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Order.destroy({ where: { order_id: id } });

    if (result === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error('Error deleting order:', err.message);
    res.status(500).json({ error: 'Failed to delete order' });
  }
};


export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.order_status = order_status;
    await order.save();

    res.status(200).json({
      message: 'Order status updated successfully',
      updatedOrder: order
    });
  } catch (err) {
    console.error('Error updating order status:', err.message);
    res.status(500).json({ error: 'Failed to update order status' });
  }
};