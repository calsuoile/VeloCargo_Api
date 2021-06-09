const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log(`Server is listening port ${serverPort}`);
});