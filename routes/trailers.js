const trailersRouter = require("express").Router();
const { getTrailers, createTrailer, getTrailer } = require("../controllers/trailers");

trailersRouter.get("/", getTrailers);
trailersRouter.get("/:id", getTrailer);
trailersRouter.post("/", createTrailer);

module.exports = trailersRouter;
