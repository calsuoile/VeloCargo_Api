const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM accessories");
};

const getOneAccessory = (id) => {
  return db.promise().query("SELECT * FROM accessories WHERE id=?", [id]);
};

const create = async ({
  country,
  department,
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
    "INSERT INTO accessories (country, department, rain_tente, protective_cover, bicycle_bag, seat_cushion, footrest_footwedge, crutches, luggage_rack, child_seat, others) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      country,
      department,
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

module.exports = { findMany, create, getOneAccessory };
