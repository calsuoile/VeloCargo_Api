const adsRouter = require("express").Router();
const { getAds, getAd, deleteAd } = require("../controllers/ads");

adsRouter.get("/", getAds);
adsRouter.get("/:id", getAd);
adsRouter.delete("/:id", deleteAd);

module.exports = adsRouter;
