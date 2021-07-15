const {
  findMany,
  create,
  getOneAccessory,
  delete_,
} = require("../models/accessories");
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
    res.status(500).send("Error creating accessory");
  }
};

const deleteAccessory = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting accessory");
  }
};

module.exports = {
  getAccessories,
  createAccessory,
  getAccessory,
  deleteAccessory,
};
