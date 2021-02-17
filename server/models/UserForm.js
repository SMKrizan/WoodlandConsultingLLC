//  Model for data collected from user via contact form
// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// var timestamps = require('mongoose-timestamp');

// const UserFormSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     company: {
//         type: String,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     purpose: {
//         type: String,
//         enum: ['Ask a question', 'Leave a comment', 'Request a quote', 'Provide a testimonial'],
//         default: 'Ask a question'
//     }
// });
// // should auto-generate a timestamp to each model entry
// UserFormSchema.plugin(timestamps);

// const UserForm = mongoose.model('UserForm', UserFormSchema);

// module.exports = UserForm;