const mongoose = require('mongoose');
const User = require('./models/User');


// Connect to Database mongodb://127.0.0.1(localhost)/dbName .set('strictQuery', true)
mongoose
  .set('strictQuery', true)
  .connect('mongodb://127.0.0.1/restaurants')
  .then((db) => {
    console.log(`Connected to ${db.connection.name}`);
  })
  .catch(error => console.error(error))

// Create Schema and model

// (C)RUD
// Create an instance and save it to DB (save - model.Create)
const user1 = new User({ name: 'Diego', age: 26 });
user1.save()
  .then((data) => {
    console.log('User 1 created', data);
    return User.create({ name: 'Nico' })
  })
  .then(data => {
    console.log('User 2 created', data);
    return User.insertMany([{ name: 'Andrés' }, { name: "Guille", age: 25 }])
  })
  // C(R)UD
  .then(data => {
    console.log(`2 users created`, data)
    // User.find({ name: "Diego" }, 'name')
    // User.find({}, { name: 1, _id: 0 }, { sort: { age: -1 }, limit: 2 })
    return User.find({}, { name: 1, _id: 0 })
      .sort({ age: -1 })
      .limit(2)
  })
  .then(users => {
    console.log(users);
    // User.findOne({ _id: "642c63d3b363818a20434cf3" }).then(user => {
    //   console.log(user);
    // })
    return User.findById("642c63d3b363818a20434cf3")
  })
  .then(user => {
    // CR(U)D
    console.log(user);
    User.updateMany({}, { age: 21 })
    .then(info => {
      console.log(info);
    })
    // User.updateOne({ age: 21 }, { age: 24 })
    //   .then(info => {
    //     console.log(info);
    //   })
    return User.findByIdAndUpdate("642c63d3b363818a20434cf0", { age: 28 }, { new: true })
  })
  .then(user => {
    // CRU(D)
    console.log(user);
    // User.deleteMany({ age: 21 })
    // .then(info => {
    //   console.log(info);
    // })
    User.deleteOne()
    .then(info => {
        console.log(info);
      })
  })
  .catch(error => console.error(error))


// Get all elements from DB - .find(query, projections, options)
// Get one element from DB .findOne() - .findById()

// Delete element(s) - .deleteMany() - .deleteOne() - .findByIdAndRemove()
// Util .countDocuments()