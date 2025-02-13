const express = require("express");
const { connectMongoDb } = require("./connect");
const {router} = require("./routes/url")

const app = express();
const port = 8001;

connectMongoDb("mongodb://localhost:27017/url-shortener");

app.use(express.json());

app.use("/url" , router);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
