const mongoose = require("mongoose");

const connnectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfully to MongoDB");
    })
    .catch((error) => {
      console.log("Connection error ", error);
    });
};

module.exports = connnectDB;
