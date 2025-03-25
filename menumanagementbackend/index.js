const express = require("express");
const cors = require("cors");
const routes = require("./Router.js");
const db = require("./dbConnection.js");
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
