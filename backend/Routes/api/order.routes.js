import express from 'express';

import {
    authenticateAdmin,
    authenticateUser
} from '../../Middleware/auth.middleware.js';

import {
    createOrder,
    getOrders,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from '../../Controllers/order.controller.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', authenticateUser, createOrder);
orderRoutes.get('/get', authenticateUser, getOrders);
orderRoutes.get('/all', authenticateAdmin, getAllOrders);
orderRoutes.get('/get/:orderId', getOrderById);
orderRoutes.put('/update/:orderId', authenticateUser, updateOrder);
orderRoutes.delete('/delete/:orderId', authenticateUser, deleteOrder);

export default orderRoutes;
