const trailersRouter = require("express").Router();
const {
  getTrailers,
  createTrailer,
  getTrailer,
  deleteTrailer,
} = require("../controllers/trailers");
const { verifyToken } = require("../middleware/auth");

trailersRouter.get("/", getTrailers);
trailersRouter.get("/:id", getTrailer);
trailersRouter.post("/", verifyToken, createTrailer);
trailersRouter.delete("/:id", verifyToken, deleteTrailer);

module.exports = trailersRouter;
