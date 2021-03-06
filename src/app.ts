import express from 'express';
import imagesRoutes from './routes/images';

const app = express();

app.use(express.json());

app.use('/images', imagesRoutes);

export default app;
