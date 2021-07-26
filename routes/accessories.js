const accessoriesRouter = require("express").Router();
const {
  getAccessories,
  createAccessory,
  getAccessory,
  deleteAccessory,
} = require("../controllers/accessories");
const { verifyToken } = require("../middleware/auth");

accessoriesRouter.get("/", getAccessories);
accessoriesRouter.get("/:id", getAccessory);
accessoriesRouter.post("/", verifyToken, createAccessory);
accessoriesRouter.delete("/:id", verifyToken, deleteAccessory);

module.exports = accessoriesRouter;
