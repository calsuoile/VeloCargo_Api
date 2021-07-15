const accessoriesRouter = require("express").Router();
const {
  getAccessories,
  createAccessory,
  getAccessory,
  deleteAccessory,
} = require("../controllers/accessories");

accessoriesRouter.get("/", getAccessories);
accessoriesRouter.get("/:id", getAccessory);
accessoriesRouter.post("/", createAccessory);
accessoriesRouter.delete("/:id", deleteAccessory);

module.exports = accessoriesRouter;
