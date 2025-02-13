const mongoose = require("mongoose");

function connectMongoDb(url) {
  return mongoose.connect(url).then(() => console.log("Mongodb connected"));
}

module.exports = {connectMongoDb};
