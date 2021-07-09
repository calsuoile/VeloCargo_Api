const {
  findMany,
  getOneUser,
  create,
  update,
  findByEmail,
} = require("../models/users");
const {
  hashPassword,
  validatePassword,
} = require("../services/password.services");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const [users] = await findMany();
  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const [user] = await getOneUser(req.params.id);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  try {
    await create({
      ...req.body,
      password: await hashPassword(req.body.password),
    });
    res.status(201).send("User has been created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating user");
  }
};

const updateUser = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    res.status(200).send("User has been updated");
  } catch (err) {
    res.status(500).send("Error updating user");
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

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  loginUser,
  getProfile,
};
