const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const ejs = require("ejs");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { indexController } = require("./controllers/indexController");
const {
  customerDisplayController,
} = require("./controllers/customerDisplayController");
const {
  adderController,
} = require("./controllers/adderController");
const {
  secondpageController,
} = require("./controllers/secondpageController");
const {
  loginController,
} = require("./controllers/loginController");

const {
  newuserController,
} = require("./controllers/newuserController");

const {
  registerController,
} = require("./controllers/registerController");
const {
  validationController,
} = require("./controllers/validationController");
const {
  customerAddController,
} = require("./controllers/customerAddController");
const { addFundsController } = require("./controllers/addFundsController");
const { withdrawController } = require("./controllers/withdrawController");
const {
  displayTransactionsController,
} = require("./controllers/displayTransactionsController");
const {
  transferFundsController,
} = require("./controllers/transferFundsController");
const { redirect } = require("express/lib/response");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

const connection = mongoose.connect("mongodb+srv://srivastava:1312@cluster0.q7dvn.mongodb.net/customerDB",
 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  }
);

connection
  .then((response) => {
    console.log("Database has been connected!");
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



app.get("/", loginController);

app.get("/contact", indexController);
app.get("/newu", newuserController);

app.get("/login", secondpageController);

app.get("/customers/:id", customerDisplayController);
app.get("/customers/:id/transactions", displayTransactionsController);
app.post("/register", registerController);
app.post("/login", validationController);
//app.post("/login", secondpageController);

app.post("/add", adderController);

app.post("/customers/:id/addFunds", addFundsController);
app.post("/customers/:id/withdrawFunds", withdrawController);

app.post("/customers/:id/transferFunds", transferFundsController);

app.post("/customers", customerAddController);

 //"mongodb://localhost:27017/customerDB",
 //mongodb+srv://srivastava:1312@cluster0.q7dvn.mongodb.net/customerDB