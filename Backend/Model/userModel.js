const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    Tasks: {
        type: String,
        required: true
    },
    Products:{
        type: String,
        required: true
    }
});

const itemsModel = mongoose.model("items",itemsSchema);
module.exports = itemsModel;