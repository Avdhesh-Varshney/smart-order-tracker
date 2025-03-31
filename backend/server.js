import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(express.json());
server.use(cors());

// Connect to Database
connectDB();

// Routes
server.get('/', (req, res) => res.send('Server is Ready'));

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
