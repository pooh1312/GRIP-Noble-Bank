const Customer = require("../models/customerModel");

exports.indexController = (req, res) => {
  Customer.find()
    .sort("name")
    .exec((err, customers) => {
      if(!err){

        res.render("index2", {
          customers,
        });
      }else{
        res.status(500);
      }
    });
};
