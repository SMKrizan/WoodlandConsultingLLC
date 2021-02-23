// update, delete testimonial
const mongoose = require('mongoose');

const { Schema } = mongoose;

const testimonialSchema = new Schema(
  {
    tstName: {
      type: String,
      required: true,
      trim: true
    },
    tstCompany: {
      type: String,
      trim: true
    },
    tstMessage: {
      type: String,
      required: true,
      trim: true
    },

    // tstCompany: {
    //   type: String,
    //   trim: true
    // },
    // tstMessage: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  }
  // {
  //   timestamps: true
  // }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
