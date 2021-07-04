const cargoBikesRouter = require("express").Router();
const { getCargoBikes, createCargoBike } = require("../controllers/cargoBikes");

cargoBikesRouter.get("/", getCargoBikes);
cargoBikesRouter.post("/", createCargoBike);

module.exports = cargoBikesRouter;
