import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

const API_PREFIX = process.env.API_PREFIX || '/api';

app.use(cors());
app.use(express.json());

app.use(`${API_PREFIX}/auth`, authRoutes);

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
