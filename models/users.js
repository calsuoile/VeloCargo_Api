const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM users");
};

const getOneUser = (id) => {
  return db.promise().query("SELECT * FROM users WHERE id= ?", id);
};

const getFavorites = (id) => {
  return db.promise().query("SELECT * FROM users JOIN favorites ON users.id = favorites.user_id JOIN ads ON ads.id = favorites.ad_id WHERE users.id= ?", [id])
};

const getOneUserAds = (id) => {
  return db.promise().query("SELECT * FROM ads WHERE user_id = ?", [id])
};


const createFav = ({ user_id, ad_id }) => {
  console.log(user_id, ad_id);
    return db.promise().query("INSERT INTO favorites (user_id, ad_id) VALUES (? ,?)", [user_id, ad_id])
};

const create = ({
  firstname,
  lastname,
  phone_number,
  email,
  photo,
  password,
  city
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO users (firstname, lastname, phone_number, email, photo, created_at, password, city, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        firstname,
        lastname,
        phone_number,
        email,
        photo,
        new Date(),
        password,
        city,
        "role_client"
      ]
    );
};

const update = (
  id,
  newAttributes
) => {
  return db
    .promise()
    .query(
      "UPDATE users SET ? WHERE id=?",
      [newAttributes, id]
    );
};

const findByEmail = async (email) => {
  return db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
};


module.exports = { findMany, getOneUser, create, update, findByEmail, getFavorites, createFav, getOneUserAds };
