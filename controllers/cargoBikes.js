const { findMany, create, getOneCargoBike } = require("../models/cargoBikes");
const { create: createAds } = require("../models/ads");

const getCargoBikes = async (req, res) => {
  const [cargoBikes] = await findMany();
  res.status(200).json(cargoBikes);
};

const getCargoBike = async (req, res) => {
  const [cargobike] = await getOneCargoBike(req.params.id);
  res.status(200).json(cargobike);
};

const createCargoBike = async (req, res) => {
  try {
    const cargobikeId = await create(req.body);
    await createAds({
      ...req.body,
      cargobikeId: cargobikeId.id,
      userId: req.user?.id,
    });
    res.status(201).send("Cargobike has been created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating cargobike");
  }
};

/*const deleteCargoBike = async (req, res) => {
  try {
    await delete_(req.params.id, req.user.id);
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting cargobike");
  }
};*/

module.exports = {
  getCargoBikes,
  createCargoBike,
  getCargoBike,
};
