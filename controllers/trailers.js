const { findMany, create, getOneTrailer } = require("../models/trailers");
const { create: createAds } = require("../models/ads");

const getTrailers = async (req, res) => {
  const [trailers] = await findMany();
  res.status(200).json(trailers);
};

const getTrailer = async (req, res) => {
  const [trailer] = await getOneTrailer(req.params.id);
  res.status(200).json(trailer);
};

const createTrailer = async (req, res) => {
  try {
    const trailerId = await create(req.body);
    await createAds({ ...req.body, trailerId: trailerId.id });
    res.status(201).send("Trailer has been created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating trailer");
  }
};

module.exports = {
  getTrailers,
  getTrailer,
  createTrailer,
};
