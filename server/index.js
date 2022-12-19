const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000 ;
const app = express();
const DB = "mongodb+srv://nodejs_auth:1977Priya#@cluster0.bbg6azj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection successful")
}).catch((e)=>{
    console.log("e")
});

app.use(express.json());


app.listen(PORT,"0.0.0.0", () => {
    console.log('Connected at port ${PORT}');
});