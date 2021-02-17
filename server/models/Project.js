const mongoose = require('mongoose');

const Category = require('./Category');

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
        type: String
    },
    location: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: String
    },
    WC: {
        type: Boolean
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;