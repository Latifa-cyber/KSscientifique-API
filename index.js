const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (res, req) => {
  console.log(`app listning on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome");
});
