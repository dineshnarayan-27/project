const express = require("express");
//Object Destructing is used to access the functions in the module which makes easier to access without referencing to object explicit 

// Functions from authController are assigned to the variables of same name
const {
  registerContoller,
  loginController,
  logoutController,
} = require("../controllers/authController");

//router object
const router = express.Router();

//routes
// REGISTER
router.post("/register", registerContoller);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

module.exports = router;