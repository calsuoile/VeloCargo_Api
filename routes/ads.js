const adsRouter = require("express").Router();
const {
  getAds,
  getAd,
  deleteAd,
  createFavorite,
  deleteFavorite,
} = require("../controllers/ads");
const { verifyToken } = require("../middleware/auth");

adsRouter.get("/", getAds);
adsRouter.get("/:id", getAd);
adsRouter.delete("/:id", verifyToken, deleteAd);
adsRouter.post("/:id/favorites", verifyToken, createFavorite);
adsRouter.delete("/:id/favorites", verifyToken, deleteFavorite);

module.exports = adsRouter;
