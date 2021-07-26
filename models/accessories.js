const db = require("../db");

//récupère tous les accessoires:
const findMany = () => {
  return db.promise().query("SELECT * FROM accessories");
};

//récupère un accessoire via id:
const getOneAccessory = (id) => {
  return db.promise().query("SELECT * FROM accessories WHERE id=?", [id]);
};

//crée un accessoire:
const create = async ({
  rain_tente,
  protective_cover,
  bicycle_bag,
  seat_cushion,
  footrest_footwedge,
  crutches,
  luggage_rack,
  child_seat,
  others,
}) => {
  db.promise().query(
    "INSERT INTO accessories (rain_tente, protective_cover, bicycle_bag, seat_cushion, footrest_footwedge, crutches, luggage_rack, child_seat, others) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      rain_tente,
      protective_cover,
      bicycle_bag,
      seat_cushion,
      footrest_footwedge,
      crutches,
      luggage_rack,
      child_seat,
      others,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

//supprime un accessoire:
const delete_ = (id) => {
  return db.promise().query("DELETE FROM accessories WHERE id=?", [id]);
};

module.exports = { findMany, create, getOneAccessory, delete_ };
