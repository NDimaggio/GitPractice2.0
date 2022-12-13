const { Console } = require("console");
const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  Console.log(`Server is up and running!:${PORT}`);
});
