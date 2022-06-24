const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const Server = require('./models/server');


const { request } = require('http');
const { captureRejectionSymbol } = require('events');
const server = require('./models/server');
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
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true})),




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

// app.get('/',(req,res)=>{
//     res.render('home')
// })

app.post('/products', async (req, res) => {
    const newSer = new server(req.body);
    await newSer.save();
    res.redirect(`/mainpage/${newSer._id}`);
 })


 app.get('/mainpage', async (req,res) => {
    const ser = await server.find({})
    console.log(ser)
    res.render('home.ejs', {ser})
})

app.get('/mainpage/:id',async(req,res) =>{
    const { id } = req.params;
    const product = await servers.findById(id)
    console.log(product);
    res.render('models/show',{ server })
})

app.get('/mainpage/show',async(req,res) =>{
    console.log(product);
    res.render('models/home.ejs',{product})
})
// app.get('/mainpage', async (req,res) => {
//     //const ser = new Server({title: 'Mendo life' , description: 'Best YT channel' });
//     //const ser = new Server({title: 'Nire' , description: 'Nire is the best discord server' });
//     await ser.save();
//     res.send(ser)
// })

app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})