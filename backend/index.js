/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import UserModel from './db/users.js';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

mongoose.connect('mongodb+srv://Aans:Aans123@cluster0.0qgjt.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    AUTHENTICATION_DATABASE: null,
    // 'AUTHENTICATION_DATABASE': null,
  }
);

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
    res.send('Check Server is Running!')
})

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result)=>{
    if (err)
    {
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
})


app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})