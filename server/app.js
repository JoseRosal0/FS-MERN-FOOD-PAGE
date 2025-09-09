
const express = require("express");
const app = express();
const path = require("node:path")
const mongoose = require("mongoose");
require("dotenv").config();

(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("la conexion fue realizada con exito")

    } catch (error) {
        console.log(error,'catch');
    }
})();

app.use(express.json());

module .exports = app