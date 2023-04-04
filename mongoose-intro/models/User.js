const { model, Schema } = require('mongoose');

// const userSchema = new Schema({
//   name: String,
//   age: Number
// })

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, max: 99, default: 0 }
})

const User = model('User', userSchema);
module.exports = User;