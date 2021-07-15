const trailersRouter = require("express").Router();
const {
  getTrailers,
  createTrailer,
  getTrailer,
  deleteTrailer,
} = require("../controllers/trailers");

trailersRouter.get("/", getTrailers);
trailersRouter.get("/:id", getTrailer);
trailersRouter.post("/", createTrailer);
trailersRouter.delete("/:id", deleteTrailer);

module.exports = trailersRouter;
