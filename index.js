const express = require("express");
const path = require("path");
const { connectMongoDb } = require("./connect");
const {router} = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/userRouter")
const exp = require("constants");

const app = express();
const port = 8001;

connectMongoDb("mongodb://localhost:27017/url-shortener");

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views") )

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/url" , router);
app.use("/user" , userRouter)
app.use("/" , staticRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
