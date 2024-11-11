const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connnectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connnectDB(process.env.MONGODB_URI);
    app.listen(port, console.log("server is listning for port 3000"));
  } catch (error) {
    console.log(error);
  }
};
start();
