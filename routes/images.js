const imagesRouter = require("express").Router();
const { getToken } = require("../controllers/images");
const { verifyToken } = require("../middleware/auth");

imagesRouter.get("/auth", verifyToken, getToken);

module.exports = imagesRouter;
