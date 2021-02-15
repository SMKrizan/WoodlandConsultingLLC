//  name, company, testimonial
// update, delete testimonials

const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminFormSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  testimonial: {
    type: String,
    required: true,
    trim: true
  }
});

const AdminForm = mongoose.model('AdminForm', AdminFormSchema);

module.exports = AdminForm;
