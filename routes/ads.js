const adsRouter = require("express").Router();
const { getAds, getAd, createAd, deleteAd } = require("../controllers/ads");

adsRouter.get("/", getAds);
adsRouter.get("/:id", getAd);
adsRouter.post("/", createAd);
adsRouter.delete("/:id", deleteAd);

module.exports = adsRouter;
