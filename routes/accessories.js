const accessoriesRouter = require("express").Router();
const {
  getAccessories,
  createAccessory,
  getAccessory,
} = require("../controllers/accessories");

accessoriesRouter.get("/", getAccessories);
accessoriesRouter.get("/:id", getAccessory);
accessoriesRouter.post("/", createAccessory);

module.exports = accessoriesRouter;
