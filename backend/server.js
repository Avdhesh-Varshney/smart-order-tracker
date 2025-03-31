import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(express.json());

// Routes
server.get('/', (req, res) => res.send('Server is Ready'));

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
