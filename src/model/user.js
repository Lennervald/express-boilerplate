import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
  email: String,
  password: String
});

// Here I can add methods to this Schema

// Export the model
module.exports = mongoose.model('User', userSchema);
