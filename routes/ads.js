const adsRouter = require("express").Router();
const { getAds, getAd, deleteAd } = require("../controllers/ads");
const { verifyToken } = require("../middleware/auth");

adsRouter.get("/", getAds);
adsRouter.get("/:id", getAd);
adsRouter.delete("/:id", verifyToken, deleteAd);

module.exports = adsRouter;
