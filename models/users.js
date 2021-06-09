const db = require("../db");

const findMany = async () => {
  return db.promise().query("SELECT * FROM users");
};

const create = async ({
  firstname,
  lastname,
  phone_number,
  email,
  photo,
  created_at,
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
        created_at,
        password,
        city,
      ]
    );
};

const findByEmail = async (email) => {
    return db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports = { findMany, create, findByEmail };
