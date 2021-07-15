const { findMany, create, getOneAccessory } = require("../models/accessories");
const { create: createAds } = require("../models/ads");

const getAccessories = async (req, res) => {
  const [accessories] = await findMany();
  res.status(200).json(accessories);
};

const getAccessory = async (req, res) => {
  const [accessory] = await getOneAccessory(req.params.id);
  res.status(200).json(accessory);
};

const createAccessory = async (req, res) => {
  try {
    const accessoryId = await create(req.body);
    await createAds({ ...req.body, accessoryId: accessoryId.id });
    res.status(201).send("Accessory has been created");
  } catch (err) {
      console.log(err);
    res.status(500).send("Error creating accessory");
  }
};

module.exports = {
  getAccessories,
  createAccessory,
  getAccessory,
};
