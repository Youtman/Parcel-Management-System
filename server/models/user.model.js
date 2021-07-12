const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 8,
      max: 255,
    },
    role: {
      type: String,
      enum: ['admin', 'teller'],
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 1024,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
