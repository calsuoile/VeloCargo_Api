const { findMany, create } = require("../models/cargoBikes");

const getCargoBikes = async (req, res) => {
  const [cargoBikes] = await findMany();
  res.status(200).json(cargoBikes);
};

const createCargoBike = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Cargobike has been created");
  } catch (err) {
    res.status(500).send("Error creating cargobike");
  }
};

module.exports = {
  getCargoBikes,
  createCargoBike
};
