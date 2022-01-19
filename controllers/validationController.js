const Register = require("../models/register");

exports.validationController = async(req, res) => {
    try{
        const name = req.body.name;
        const password = req.body.password;

        const userinfo = await Register.findOne({username:name});
         
        if(userinfo.password===password){
            //res.send("index2");
            res.redirect("/login");
        }else{
            res.send("better lck next tym");
        }

    } catch(err){
        res.status(400).send(err);
    }
}
