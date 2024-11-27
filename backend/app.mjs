import express from 'express';
import morgam from 'morgan';
import cors from 'cors';
import database from './config/database.mjs';
import routes from './routes/app.mjs';

try{
    await database.authenticate();
    console.log('db connect')
} catch(error){
    console.error('unable to connect to the database:', error);
}
const app = express();
const PORT = 5000;

//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin: '*'}))
app.use(morgam('dev'))
app.use(routes)
 
app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}/`);
})

