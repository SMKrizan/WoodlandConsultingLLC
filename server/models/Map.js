//  project name, description, city, state, latitude, longtitude, category, date
const mongoose = require('mongoose');

const { Schema } = mongoose;

const mapSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    cityState: {
        type: String
    },
    longtitue: {
        type: String
    },
    latitude: {
        type: String
    },
    projectDate: {
        type: String
    }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
