const express = require("express");
const userRouter = express.Router();
const {handleUserSignup ,handleUserLogin} = require("../controllers/user");

userRouter.post("/" , handleUserSignup );

userRouter.post("/login" , handleUserLogin);

module.exports = userRouter;