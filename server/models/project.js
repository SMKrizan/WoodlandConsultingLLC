const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({

    name: {
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
    location: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Project = mongoose.model('Product', productSchema);

module.exports = Project;
