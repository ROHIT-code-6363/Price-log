require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const https = require('https');

app.use(cors());
app.use(express.json());
app.use("/api", router);

// Apna Render wala URL yahan likhein
const serverUrl = "https://price.log.onrender.com/api/auth/products"; 

// setInterval use karein taaki ye har 14 minute mein repeat ho
setInterval(() => {
    https.get(serverUrl, (res) => {
        console.log("Ping successful to keep server awake!");
    });
}, 1 * 60 * 1000); // 14 Minutes

const Port = process.env.PORT || 5000;

connectDB().then(() => {
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
  });
});
