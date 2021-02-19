const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
    latitude: {
        type: Float
    },
    longitude: {
        type: Float
    }
});

module.exports = locationSchema;