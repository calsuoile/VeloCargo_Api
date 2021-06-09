const usersRouter = require("./users");

module.exports = (app) => {
  app.use("/users", usersRouter);
};