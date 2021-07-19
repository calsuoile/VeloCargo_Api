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
usersRouter.patch("/:id", updateUser);
// virer l'id et mettre verify token à la place
usersRouter.get("/:id/favorites", getUserFavorites);
usersRouter.get("/:id/ads", getUserAds);
// deéplcar dans ads + coler verify token + récup id ads dans params et id user dans oken
usersRouter.post("/favorites", createFavorite);
usersRouter.delete("/favorites", createFavorite);
usersRouter.post("/login", loginUser);

module.exports = usersRouter;
