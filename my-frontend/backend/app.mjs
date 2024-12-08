import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import database from './config/database.mjs';
import userRoutes from './routes/userRoutes.mjs';
import router from './routes/app.mjs';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = 5000;

try{
    await database.authenticate();
    console.log('db connect')
} catch(error){
    console.error(error);
}

//middleware
app.use(cors({ credentials: true, origin: 'http://localhost:5173'}));
app.use(cookieParser());
app.use(express.json());

//routes
app.use('/api', userRoutes);
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}/`);
})

