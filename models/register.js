const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    }
});

const Register=new mongoose.model("Register",employeeSchema);
module.exports = Register;