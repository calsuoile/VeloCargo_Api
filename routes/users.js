const usersRouter = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  loginUser,
  getProfile,
} = require("../controllers/users");
const { verifyToken } = require("../middleware/auth");

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.post("/", createUser);
usersRouter.patch("/:id", updateUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/me", verifyToken, getProfile);

module.exports = usersRouter;
