// update, delete testimonial
const mongoose = require('mongoose');

const { Schema } = mongoose;

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  // lastName: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  company: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  purpose: {
      type: Boolean,
      // true is Woodland, false is jessica
  }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
