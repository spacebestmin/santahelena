const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
//???

const app = express();
const port = process.env.PORT || 5000;
//what happens if there is no app.use?
app.use(cors());//calling middleware
app.use(express.json());
//allowing us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri || process.env.MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
        console.log("MongoDB connection estabilished successfully");
})

const giftRouter = require('./routes/gifts');
const santaRouter = require('./routes/santas');

app.use('/gifts', giftRouter);
app.use('/santas', santaRouter);
//wheneven user set the url equal to one of these url, load everything
//from corresponding router

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

//after creating a server file in a directory,
//in the directory, cmd npm init -y should be done
//install dotenv and all middlewares
//express is web frame work for nodeJS
//cors : skipping policies and getting resorces from remote host
//dotenv loads environment variable from .env file in out of current file directory

