const express = require("express");
const cors  = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const routes = require("./routes/route")

const app = express();

// app.use(express.json());
app.use(cors())

app.use("/api", routes);

module.exports  = app;

