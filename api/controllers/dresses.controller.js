var mongoose = require('mongoose');
var Dresses = mongoose.model('Dresses');




module.exports.dressesGetAll = function(req, res) {


 

  Dresses
    .find()
    .exec(function(err, dress) {
      console.log(err);
      console.log(dress);
      if (err) {
        console.log("Error finding dress");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found dress", dress.length);
        res
          .json(dress);
      }
    });

};