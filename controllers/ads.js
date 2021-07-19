const { findMany, getOneAd, delete_ } = require("../models/ads");

const getAd = async (req, res) => {
  const [ad] = await getOneAd(req.params.id);
  res.status(200).json(ad);
};

const getAds = async (req, res) => {
  const [ads] = await findMany(req.query);
  res.status(200).json(ads);
};

const deleteAd = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting ad");
  }
};

module.exports = {
  getAds,
  getAd,
  deleteAd,
};
