import express from 'express';
import cookieParser from 'cookie-parser';
import database from './config/database.mjs';
import routes from './routes/app.mjs';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const PORT = 5000;
try{
    await database.authenticate();
    console.log('db connect')
} catch(error){
    console.error('unable to connect to the database:', error);
}

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(routes);

// app.use(express.urlencoded({extended: true}))
// app.use(cors({origin: '*'}))
// app.use(morgam('dev'))
 
// app.get('/', (req, res, next) => {
//     res.send('Hello World!')
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}/`);
})

