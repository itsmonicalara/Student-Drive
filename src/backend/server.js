const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const offerRoutes = express.Router();

const PORT = 4000;
const mongoose = require('mongoose');

let Offer = require('./offer.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/tec-ride', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

offerRoutes.route('/').get(function(req, res) {
    Offer.find(function(err, offers) {
        if (err) {
            console.log(err);
        } else {
            res.json(offers);
        }
    });
});

// Add an offer
offerRoutes.route('/add').post(function(req, res) {
    let offer = new Offer(req.body);
    offer.save()
        .then(offer => {
            res.status(200).json({'offer': 'Offer added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding new offer failed');
        });
});



app.use('/tec-ride', offerRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
