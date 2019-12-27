const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
//???

const app = express();
const port = process.env.POST || 5000;
//what happens if there is no app.use?
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

console.log("server is running well in port 5000");