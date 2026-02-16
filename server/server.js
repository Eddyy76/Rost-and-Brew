require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// 1. ALLOW ALL ORIGINS (Fixes the CORS error you saw)
app.use(cors()); 
app.use(express.json());

// 2. ROOT ROUTE (To check if server is alive)
app.get("/", (req, res) => {
  res.send("Server is awake and brewing...");
});

// 3. THE DATA ROUTE (This is what the Client calls)
app.get("/api/products", async (req, res) => {
  try {
    // This looks into your 'products' collection in MongoDB
    const products = await mongoose.connection.db.collection('products').find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching products", error: err.message });
  }
});

const MONGO_URI = process.env.MONGO_URI || "mongodb://iyadyehya:Adamcarmen1@ac-e6ydnw3-shard-00-00.tzs0f44.mongodb.net:27017,ac-e6ydnw3-shard-00-01.tzs0f44.mongodb.net:27017,ac-e6ydnw3-shard-00-02.tzs0f44.mongodb.net:27017/sample_mflix?ssl=true&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, { family: 4 })
  .then(() => {
    console.log("------------------------------------------");
    console.log("✅ SUCCESS: MongoDB Connected via Shards");
    console.log("------------------------------------------");
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ CONNECTION ERROR:", err.message);
  });