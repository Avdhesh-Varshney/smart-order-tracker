import express from 'express';
import { register } from '../../Controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post("/register", register);

export default authRoutes;
