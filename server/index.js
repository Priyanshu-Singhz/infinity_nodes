const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);

const DB =
  "mongodb+srv://nodejs_auth:test12@cluster0.bbg6azj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful with mongodb");
  })
  .catch((e) => {
    console.log("e");
  });


app.listen(PORT, "0.0.0.0", () => {
  console.log("Connection Successful");
});
