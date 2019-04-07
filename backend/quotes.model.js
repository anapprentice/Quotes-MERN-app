const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quotes = new Schema({
   title: {
      type: String
   },
   text: {
      type: String
   },
   author: {
      type: String
   }
});

module.exports = mongoose.model('Quotes', Quotes);