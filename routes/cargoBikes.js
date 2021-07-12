const cargoBikesRouter = require("express").Router();
const { getCargoBikes, getCargoBike, createCargoBike } = require("../controllers/cargoBikes");

cargoBikesRouter.get("/", getCargoBikes);
cargoBikesRouter.get("/:id", getCargoBike);
cargoBikesRouter.post("/", createCargoBike);

module.exports = cargoBikesRouter;
