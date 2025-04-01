import express from 'express';

import {
    authenticateAdmin
} from '../../Middleware/auth.middleware.js';

import {
    getCustomer,
    login,
    register
} from '../../Controllers/auth.controller.js';


const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get('/customer', authenticateAdmin, getCustomer);

export default authRoutes;
