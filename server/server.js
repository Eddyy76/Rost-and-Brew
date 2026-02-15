require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 1. Define PORT early
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Your working connection string
const MONGO_URI = "mongodb://iyadyehya:Adamcarmen1@ac-e6ydnw3-shard-00-00.tzs0f44.mongodb.net:27017,ac-e6ydnw3-shard-00-01.tzs0f44.mongodb.net:27017,ac-e6ydnw3-shard-00-02.tzs0f44.mongodb.net:27017/sample_mflix?ssl=true&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {
  family: 4 
})
  .then(() => {
    console.log("------------------------------------------");
    console.log("✅ SUCCESS: MongoDB Connected via Shards");
    console.log("------------------------------------------");
    
    // 2. Now use the defined PORT
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ CONNECTION ERROR:", err.message);
  });