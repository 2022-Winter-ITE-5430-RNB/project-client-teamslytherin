const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
 name: {
    type: String,    
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  CreditCard: {
    type: String,
    require: true,    
  },
  Donation: {
      type: Date,
      default: Date.now(),
  }  
});

module.exports = mongoose.model('Donation', userSchema);