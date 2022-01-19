const Register = require("../models/register");

exports.registerController = async(req, res) => {
    try{
        const password = req.body.password;
        const confirm_password = req.body.confirm_password;

        if(password === confirm_password){

                const employee1 = new Register({
                    username:req.body.name,
                    email:req.body.email,
                    password:password,
                    confirm_password:confirm_password
                });
                const registered = await employee1.save();
                res.render("index");
                
                
        }else{
            res.send("password doesnt match");
        }


    } catch(err){
        res.status(400).send(err);
    }
}
