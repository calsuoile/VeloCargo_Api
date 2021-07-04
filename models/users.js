const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM users");
};

const getOneUser = (id) => {
  return db.promise().query("SELECT * FROM users WHERE id= ?", id);
};

const create = ({
  firstname,
  lastname,
  phone_number,
  email,
  photo,
  password,
  city,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO users (firstname, lastname, phone_number, email, photo, created_at, password, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        firstname,
        lastname,
        phone_number,
        email,
        photo,
        new Date(),
        password,
        city,
      ]
    );
};

const update = (
  id,
  { firstname, lastname, phone_number, email, photo, password, city }
) => {
  return db
    .promise()
    .query(
      "UPDATE users SET firstname=?, lastname=?, phone_number=?, email=?, photo=?, password=?, city=? WHERE id=?",
      [firstname, lastname, phone_number, email, photo, password, city, id]
    );
};

const findByEmail = async (email) => {
  return db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports = { findMany, getOneUser, create, update, findByEmail };
