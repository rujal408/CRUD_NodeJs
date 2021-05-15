const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/AlienDB'

const app = express()

mongoose.connect(url, { useCreateIndex: true })

const con = mongoose.connection

con.on('open', function () {
    console.log("Connected...");
})

app.use(express.json())

const alienRouter = require('./routers/aliens')

app.use('/aliens', alienRouter)

app.listen(9000, () => console.log('Server Started'))