const express = require("express");
const path = require("path");
const cookie_parser = require("cookie-parser");

const { connectMongoDb } = require("./connect");

const {router} = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/userRouter")

const {restrictToLoggedUserOnly , checkAuth} = require("./middlewares/auth")


const app = express();
const port = 8001;

connectMongoDb("mongodb://localhost:27017/url-shortener");

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views") )

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookie_parser())

app.use("/" ,checkAuth , staticRouter);
app.use("/user" , userRouter)
app.use("/url" , restrictToLoggedUserOnly ,  router); // inline middleware

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
