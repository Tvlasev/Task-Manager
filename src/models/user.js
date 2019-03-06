const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate(value){
        if( !(validator.isEmail(value)) ){
          throw new Error("Email is invalid!")
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value){
        if(value.toLowerCase().includes('password')){
          throw new Error("Password cannot contain the word password!")
        }
      }
    },
    age: {
      type: Number,
      validate(value){
        if(value < 15 || value > 95){
          throw new Error('Age must be between 15 and 95')
        }
      }
    }
})

module.exports = User
