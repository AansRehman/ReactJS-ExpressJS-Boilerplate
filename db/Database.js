let mongoose = require('mongoose');

module.exports = mongoose.model('Email', emailSchema)

let EmailModel = require('./email')

let msg = new EmailModel({
  email: 'ada.lovelace@gmail.com'
})

let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  }
})
