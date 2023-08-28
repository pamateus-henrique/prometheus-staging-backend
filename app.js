require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


//security
const cors = require('cors');

//connectDB
const connectDB = require('./db/connect');


//routers
const productsRouter = require('./routes/products');
const metricsRouter = require('./routes/metrics');

app.use(express.json());
app.use(express.static('public'));

//error handlers
app.set('trust proxy', 1);
app.use(cors());

//routes
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/metrics', metricsRouter);

const port = 9000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is up and running on port ${port}`);
        });
    } catch(error) {
        console.log(error);
    }
}

start();