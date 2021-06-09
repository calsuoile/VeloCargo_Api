const usersRouter = require("express").Router();
const {
  getUsers,
  createUser,
  loginUser,
  getProfile,
} = require("../controllers/users");
const { verifyToken } = require("../middleware/auth");

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/me", verifyToken, getProfile);

module.exports = usersRouter;
