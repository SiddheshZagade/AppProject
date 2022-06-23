const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const Server = require('./models/server');


const { request } = require('http');
const { captureRejectionSymbol } = require('events');
mongoose.connect('mongodb://localhost:27017/server')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err=> {
        console.log("OH NO MONGO ERROR!!!")
        console.log(err)
    })

// mongoose.connect('mongodb://localhost:27017//server')

// const db = mongoose.connection;
// db.on("error",console.error.bind(console,"connection error:"))
// db.once("open",()=>{
//     console.log("Database connected");
// });

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/mainpage', async (req,res) => {
    const ser = new Server({title: 'Mendo life' , description: 'Best YT channel' });
    await ser.save();
    res.send(ser)
})

app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})