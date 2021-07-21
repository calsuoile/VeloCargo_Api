const db = require("../db");

//récupère tous les users:
const findMany = () => {
  return db.promise().query("SELECT * FROM users");
};

//récupère un user via id:
const getOneUser = (id) => {
  return db.promise().query("SELECT * FROM users WHERE id= ?", id);
};

//récupère tous les favoris d'un user:
const getFavorites = (id) => {
  return db
    .promise()
    .query(
      "SELECT * FROM users JOIN favorites ON users.id = favorites.user_id JOIN ads ON ads.id = favorites.ad_id WHERE users.id= ?",
      [id]
    );
};

//récupère une annonce d'un user:
const getOneUserAds = (id) => {
  return db.promise().query("SELECT * FROM ads WHERE user_id = ?", [id]);
};

//crée un une annonce favorite dans un user:
const createFav = (user_id, ad_id) => {
  return db
    .promise()
    .query("INSERT INTO favorites (user_id, ad_id) VALUES (? ,?)", [
      user_id,
      ad_id,
    ]);
};

const deleteFav = (user_id, ad_id) => {
  return db
    .promise()
    .query("DELETE FROM favorites WHERE user_id = ? and ad_id = ?", [
      user_id,
      ad_id,
    ]);
};

//créer un user:
const create = ({
  firstname,
  lastname,
  phone_number,
  email,
  password,
  city,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO users (firstname, lastname, phone_number, email, created_at, password, city, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        firstname,
        lastname,
        phone_number,
        email,
        new Date(),
        password,
        city,
        "role_client",
      ]
    );
};

//met à jour un user:
const update = (id, newAttributes) => {
  return db
    .promise()
    .query("UPDATE users SET ? WHERE id=?", [newAttributes, id]);
};

//récupère un user via email:
const findByEmail = async (email) => {
  return db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports = {
  findMany,
  getOneUser,
  create,
  update,
  findByEmail,
  getFavorites,
  createFav,
  getOneUserAds,
  deleteFav,
};
