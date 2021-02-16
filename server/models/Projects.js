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
    city: {
        type: String
    },
    state: {
        type: String
    },
    location: {
        type: Object
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    ]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

