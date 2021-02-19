const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({

    project_name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: String
    },
    cityState: {
        type: String,
        trim: true
    },
    location: [locationSchema],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    state: {
        type: String
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    ]
});

const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;

