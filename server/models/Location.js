const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

module.exports = locationSchema;