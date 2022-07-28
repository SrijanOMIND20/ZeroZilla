const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRoute = require('./routes/AgencyClients');

// Connecting to database
mongoose.connect('mongodb://localhost:27017/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{console.log('DB Connected')})
    .catch((err)=>{console.log(err)});

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"API HIT"})
});

app.use('/api',apiRoute);

app.listen(4000,()=>{console.log('Server started')});