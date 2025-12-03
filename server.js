require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

app.use(cors());
app.use(express.json());
app.use("/api", router);

const Port = process.env.PORT || 5000;

// Isse import karna zaroori hai
const https = require('https');

// Apna Render wala URL yahan likhein
const serverUrl = "https://Price.log.onrender.com/api/auth/products"; 

// setInterval use karein taaki ye har 14 minute mein repeat ho
setInterval(() => {
    https.get(serverUrl, (res) => {
        console.log("Ping successful to keep server awake!");
    });
}, 1 * 60 * 1000); // 14 Minutes


connectDB().then(() => {
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
  });
});
