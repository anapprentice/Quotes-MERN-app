const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const quotesRoutes = express.Router();
const PORT = 4000;

let Quotes = require('./quotes.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/quotes", { useNewUrlParser: true });

quotesRoutes.route('/').get(function(req, res) {
   Quotes.find(function(err, quotes){
      if(err){
         console.log(err);
      }else{
         res.json(quotes.reverse());
      }
   });
});

quotesRoutes.route('/add').post(function(req, res) {
   let quote = new Quotes(req.body);

   quote.save()
       .then(quote => {
           res.status(200).json({'quote': 'quote added successfully'});
           console.log(quote._id);
       })
       .catch(err => {
           res.status(400).send('adding new quote failed');
       });
});

quotesRoutes.route('/delete/:id').get(function(req, res) {  
   let id = req.params.id;

   Quotes.findByIdAndRemove(id, (err, quote) => {
      if (err) 
         return res.status(500).send(err);
      else
         return res.status(200).send("Todo successfully deleted");
   });
});

app.use('/quotes', quotesRoutes);

app.listen(PORT, function() {
   console.log("server running on " + PORT);
});