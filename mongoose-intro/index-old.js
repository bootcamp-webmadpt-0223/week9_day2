const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');


// Connect to Database mongodb://127.0.0.1(localhost)/dbName .set('strictQuery', true)
mongoose
.set('strictQuery', true)
.connect('mongodb://127.0.0.1/restaurants')
.then((db) => {
  console.log(`Connected to ${db.connection.name}`);
})
.catch(error => console.error(error))

// Create Schema and model
const userSchema = new Schema({
  name: String,
  age: Number
})

const User = model('User', userSchema);

// (C)RUD
// Create an instance and save it to DB (save - model.Create)
User.collection.drop()
.then(() => {
  const user1 = new User({ name: 'Diego', age: 26 });
  user1.save()
  .then((data) => console.log('User 1 created', data))
  .catch(error => console.error(error))

  User.create({ name: 'Nico' })
  .then(data => console.log('User 2 created', data))
  .catch(error => console.error(error))
})
.catch(error => console.error(error))

// Insert many elements .insertMany()
User.insertMany([{ name: 'Andrés' }, { name: "Guille", age: 25 }])
.then(data => console.log(`2 users created`, data))
.catch(error => console.error(error))

// Get all elements from DB - .find(query, projections, options)
User.find({ name: "Diego" })
.then(users => {
  console.log(users);
})
.catch(error => console.error(error))

// Get one element from DB .findOne() - .findById()
// Update element(s) - .updateMany() - .updateOne() - .findByIdAndUpdate()
// Delete element(s) - .deleteMany() - .deleteOne() - .findByIdAndRemove()
// Util .countDocuments()