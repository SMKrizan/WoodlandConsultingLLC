const mongoose = require('mongoose');

const { Schema } = mongoose;

const mapSchema = new Schema({
    marker: {

    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
            //  required: true
        }
    ],
    project: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
            //  required: true
        }
    ]
    // projectName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // description: {
    //     type: String
    // },
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // },
    // cityState: {
    //     type: String
    // },
    // longtitude: {
    //     type: String
    // },
    // latitude: {
    //     type: String
    // },
    // projectDate: {
    //     type: String
    // }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
