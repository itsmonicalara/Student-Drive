const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Offer = new Schema({
    offerStartTime : {
        type: String,
        required: true
    },
    offerImage : {
        type: String,
        required: true
    },
    offerPositions : {
        type: Number,
        required: true
    },
    offerDestination : {
        type: String,
        required: true
    },
    offerCost : {
        type: Number,
        required: true
    },
    offerDescription : {
        type: String,
        required: true
    },
    offerSeconds : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Offer', Offer);


