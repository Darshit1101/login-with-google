import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { configureGlobalMiddleware } from './config/global.js';

dotenv.config();
const app = express();

// Apply global middleware configuration
configureGlobalMiddleware(app);
app.use(express.json());

app.use('/api/auth', authRoutes);

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
