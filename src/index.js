import express from 'express';
import "dotenv/config";
import userRoutes from './routes/routeUsers.js';
import logRequest from './middleware/logs.js';
import upload from './middleware/multer.js';

const app = express();
const port = process.env.PORT;

// app.use(logRequest);
app.use(express.json());

app.use('/assets', express.static('public/images'));
app.use('/users', userRoutes);

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "Upload success"
    });
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

