const express = require("express");
const cors = require("cors");
const routes = require("./Router.js");
const connectDB = require("./dbConnection.js"); // Updated import
const path = require("path");
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use("/api", routes); // All routes now prefixed with /api

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../menumanagement/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../menumanagement/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});