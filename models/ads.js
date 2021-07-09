const db = require("../db");
const queryBuilder = require("./queryBuilder");

const findMany = (criteria) => {
  const [filter, order, limit] = queryBuilder(criteria);
  if (filter) {
    return db
      .promise()
      .query(
        `SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.* FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id WHERE ${filter} ${order} ${limit}`
      );
  } else {
    return db
      .promise()
      .query(
        `SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.* FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id ${order}`
      );
  }
};

const getOneAd = (id) => {
  return db
    .promise()
    .query(
      "SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.* FROM ads AS ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id WHERE ads.id=?",
      [id]
    );
};

const create = ({ title, description, photo, price, cargobikeId, trailerId, accessoryId }) => {
  return db
    .promise()
    .query(
      "INSERT INTO ads (title, created_at, description, photo, price, cargo_bike_id, trailer_id, accessories_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [title, new Date(), description, photo, price, cargobikeId, trailerId, accessoryId]
    );
};

const delete_ = (id) => {
  return db.promise().query("DELETE FROM ads WHERE id=?", [id]);
};

module.exports = {
  findMany,
  create,
  getOneAd,
  delete_,
};
