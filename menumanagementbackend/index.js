const express = require("express");
const cors = require("cors");
const routes = require("./Router.js");
const connectDB = require("./dbConnection.js");
const path = require("path");
require('dotenv').config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

// API routes
app.use('/api', (req, res, next) => {
  console.log(`API request: ${req.method} ${req.path}`);
  next();
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../menumanagement/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../menumanagement/dist/index.html"));
  });
}
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});
// Export for Vercel serverless functions
module.exports = app;

// Only listen when not in Vercel environment
if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});