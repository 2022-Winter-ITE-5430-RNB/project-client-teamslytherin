const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FAQSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  question: {
    type: String,  
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('FAQ', FAQSchema);
