//import express from 'express' ;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require ('express-session');
//import cors from 'cors';
//import mongoose from 'mongoose';
//require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
  secret:'secret-key',
  resace: false,
  saveUninitialized:false
}));

const uri ='mongodb://localhost:27017/farmDB';
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const loginRouter = require('./routes/login');
const farmerRegistrationRouter = require('./routes/farmerRegistration');
//const contactUsRouter = require('./routes/contactUs');
const lessorRegistrationRouter = require('./routes/lessorRegistration');
const addvehicle = require('./routes/vehicle');

app.use('/login', loginRouter);
//app.use('/contactUs', contactUsRouter);
app.use('/farmerRegistration',farmerRegistrationRouter);
app.use('/lessorRegistration',lessorRegistrationRouter);
app.use('/AddVehicle', addvehicle);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});