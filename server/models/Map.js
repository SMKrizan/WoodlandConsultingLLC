//  project name, description, city, state, latitude, longtitude, category, date
const mongoose = require('mongoose');

const { Schema } = mongoose;

const portfolioSchema = new Schema({

    project: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    date: {
        type: String
    },
    latitude: {
        type: integer 
    },
    longtitude: {
        type: Int
    },
    // location: {
    //     type: String
    // }
    category: {
        type: String
    }
});

const Map = mongoose.model('Map');

module.exports = Map;