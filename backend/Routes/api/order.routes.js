import express from 'express';
import { authenticateUser } from '../../Middleware/auth.middleware.js';

import {
    createOrder
} from '../../Controllers/order.controller.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', authenticateUser, createOrder);

export default orderRoutes;
