// Model for data collected from user via contact form
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },
        userCompany: {
            type: String,
            trim: true
        },
        userEmail: {
            type: String,
            required: true,
        },
        userMessage: {
            type: String,
            required: true
        },
        purpose: {
            type: String,
            enum: ['Ask a question', 'Leave a comment', 'Request a quote', 'Provide a testimonial'],
            default: 'Ask a question'
        },
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'MessageList'
            }
        ]
    },
    {
        timestamps: true
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// counts length of messages array
messageSchema.virtual('messageCount').get(function () {
    return this.messages.length;
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
