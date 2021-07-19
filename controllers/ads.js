const { findMany, getOneAd, delete_ } = require("../models/ads");

const getAd = async (req, res) => {
  const [ad] = await getOneAd(req.params.id);
  res.status(200).json(ad);
};

const getAds = async (req, res) => {
  const [[ads], [count]] = await findMany(req.query);
  res.status(200).json({ data: ads, metadata: count[0] });
};

const deleteAd = async (req, res) => {
  try {
    await delete_(req.query.soldOnWebsite, req.params.id, req.user.id);
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting ad");
  }
};

module.exports = {
  getAds,
  getAd,
  deleteAd,
};
