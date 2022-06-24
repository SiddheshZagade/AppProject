const mongoose = require('mongoose');
const server = require('./models/server');

const Product = require('./models/server');

mongoose.createConnection('mongodb://localhost:27017/server')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR!!!")
        console.log(err)
    })


// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price:1.99,
//     category:'fruit'

// })    

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//    console.log(e)
// })//

const serversData = [
   {
    name:'Life Mendo',
    description: 'life is mendo',
    
   },

   {
     name:'Mendo life Fanclub',
     description: 'mendo is my religon',

   },
   {
    name:'Sanaye food',
     description: 'Sanaye food lovers',
   },
   {
    name:'Organic Celery',
    description: 'Organic Sanaye food lovers',

   },
   {
    name:'Anime life',
    description:'Server for Anime lovers'
   },

]

server.insertMany(serversData)
.then(res => {
    console.log(res)
})
.catch(e => {
   console.log(e)
})