import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;
app.use('/api/user',router);


mongoose
     .connect(MONGOURL)
     .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
    })
    .catch((err)=>{
        console.log(err);
    });