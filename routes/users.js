const usersRouter = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  createFavorite,
  getUserFavorites,
  getUserAds,
  updateUser,
  loginUser,
  getProfile,
} = require("../controllers/users");
const { verifyToken } = require("../middleware/auth");

usersRouter.get("/", getUsers);
usersRouter.get("/me", verifyToken, getProfile);
usersRouter.get("/:id", getUser);
usersRouter.post("/", createUser);
usersRouter.patch("/:id", verifyToken, updateUser);
//usersRouter.get("/:id/favorites", getUserFavorites);
// usersRouter.get("/:id/ads", getUserAds);
usersRouter.post("/login", loginUser);

module.exports = usersRouter;
