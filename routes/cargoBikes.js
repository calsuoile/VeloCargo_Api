const cargoBikesRouter = require("express").Router();
const {
  getCargoBikes,
  getCargoBike,
  createCargoBike,
  deleteCargoBike,
} = require("../controllers/cargoBikes");

cargoBikesRouter.get("/", getCargoBikes);
cargoBikesRouter.get("/:id", getCargoBike);
cargoBikesRouter.post("/", createCargoBike);
cargoBikesRouter.delete("/:id", deleteCargoBike);

module.exports = cargoBikesRouter;
