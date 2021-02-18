const mongoose = require('mongoose');

const Category = require('./Category');
const locationSchema= require('./Location');
const { Schema } = mongoose;

const projectSchema = new Schema({
    projectName: {
        type: String,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    projectDate: {
        type: String
    },
    cityState: {
        type: String,
        trim: true
    },
    location: [Location],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: String
    },
    WC: {
        type: Boolean,
        default: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;