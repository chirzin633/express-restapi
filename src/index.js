import express from 'express';
import "dotenv/config";
import userRoutes from './routes/routeUsers.js';

const app = express();
const port = process.env.PORT;

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

