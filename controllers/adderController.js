const Customer = require("../models/customerModel");

exports.adderController = (req, res) => {
    
    console.log(req.body);

                const newuser = new Customer({
                    name:req.body.name,
                    dob:req.body.dob,
                    gender:req.body.gender,
                    adress:req.body.address,
                    email:req.body.email,
                    phone:req.body.phone,
                    currentBal:req.body.balace

                });
                newuser.save();
                res.redirect("/login");
                
                
                
        


    
}
