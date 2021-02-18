//  Model for data collected from user via contact form
const mongoose = require('mongoose');
const { Schema } = mongoose;
var timestamps = require('mongoose-timestamp');

const messageSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
    },
    messageText: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        enum: ['Ask a question', 'Leave a comment', 'Request a quote', 'Provide a testimonial'],
        default: 'Ask a question'
    }
});
// should auto-generate a timestamp to each model entry
userFormSchema.plugin(timestamps);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;