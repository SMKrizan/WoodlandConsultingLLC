<<<<<<< HEAD
//  project name, description, city, state, latitude, longtitude, category, date
=======
>>>>>>> develop
const mongoose = require('mongoose');

const { Schema } = mongoose;

<<<<<<< HEAD
const projectSchema = new Schema({

    project: {
=======
const mapSchema = new Schema({
    projectName: {
>>>>>>> develop
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
<<<<<<< HEAD
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String
    },
    date: {
        type: String
    },
    latitude: {
        type: Number
    },
    longtitude: {
        type: Number
    },
    category: {
        type: String
    },
    mapMarkers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
});

const Map = mongoose.model('Map', projectSchema);

module.exports = Map;
=======
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    cityState: {
        type: String
    },
    longtitude: {
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
>>>>>>> develop
