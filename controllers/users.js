const { findMany, create, findByEmail } = require("../models/users");
const {
  hashPassword,
  validatePassword,
} = require("../services/password.services");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const [data] = await findMany();
  res.json(data);
};

const createUser = async (req, res) => {
    console.log("test");
  try {
    await create({
      ...req.body,
      password: await hashPassword(req.body.password),
    });
    res.status(200).send("ok");
  } catch (error) {
    res.status(500).send("Error");
  }
};

const loginUser = async (req, res) => {
  const [user] = await findByEmail(req.body?.email);
  if (!user) {
    res.status(401).send("Unauthorized");
  }
  if (!validatePassword(req.body?.password, user[0].password)) {
    res.status(401).send("Unauthorized");
  }

  const payload = {
    createdAt: new Date().toISOString(),
    user: user[0],
  };

  res.json({
    acces_token: jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: 3600 * 24,
    }),
  });
};

const getProfile = async (req, res) => {
    res.json(req.user);
};

module.exports = { getUsers, createUser, loginUser, getProfile };
