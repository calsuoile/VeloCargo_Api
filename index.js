const express = require("express");
const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("Welcome to Express");
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});