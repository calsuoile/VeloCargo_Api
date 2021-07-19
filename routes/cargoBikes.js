const cargoBikesRouter = require("express").Router();
const {
  getCargoBikes,
  getCargoBike,
  createCargoBike,
  deleteCargoBike,
} = require("../controllers/cargoBikes");
const { verifyToken } = require("../middleware/auth");

cargoBikesRouter.get("/", getCargoBikes);
cargoBikesRouter.get("/:id", getCargoBike);
cargoBikesRouter.post("/", verifyToken, createCargoBike);
cargoBikesRouter.delete("/:id", verifyToken, deleteCargoBike); // also check in function

module.exports = cargoBikesRouter;
