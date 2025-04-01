import express from 'express';

import {
    authenticateAdmin,
    authenticateUser
} from '../../Middleware/auth.middleware.js';

import {
    createOrder,
    getAllOrders,
    getOrders
} from '../../Controllers/order.controller.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', authenticateUser, createOrder);
orderRoutes.get('/get', authenticateUser, getOrders);
orderRoutes.get('/all', authenticateAdmin, getAllOrders);

export default orderRoutes;
