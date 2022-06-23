const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ServerSchema = new Schema({

    title: String,
    description: String,
});

module.exports = mongoose.model('Server',ServerSchema);