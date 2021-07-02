require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

const serverPort = process.env.PORT || 3030;

app.listen(serverPort, () => {
  console.log(`Server is listening port ${serverPort}`);
});