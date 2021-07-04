const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM ads");
};

const getOneAd = (id) => {
  return db.promise().query("SELECT * FROM ads WHERE id=?", id);
};

const create = ({ title, description, photo, price }) => {
  return db
    .promise()
    .query(
      "INSERT INTO ads (title, created_at, description, photo, price) VALUES (?, ?, ?, ?, ?)",
      [title, new Date(), description, photo, price]
    );
};

const delete_ = (id) => {
  return db.promise().query("DELETE FROM ads WHERE id=?", [id]);
};

module.exports = { findMany, create, getOneAd, delete_ };
