const db = require("../db");

//récupère tous les vélos cargo:
const findMany = () => {
  return db.promise().query("SELECT * FROM cargo_bike");
};

//récupère un vélo cargo:
const getOneCargoBike = (id) => {
  return db.promise().query("SELECT * FROM cargo_bike WHERE id=?", [id]);
};

//crée un vélo cargo:
const create = async ({
  country,
  department,
  brand,
  model,
  frame_size,
  build_year,
  bicycode,
  kms,
  length,
  general_state,
  mecanic_state,
  esthetic_state,
  guarantee,
  info_guarantee,
  volume_box,
  electric,
  engine_power,
  battery_volt,
}) => {
  db.promise().query(
    "INSERT INTO cargo_bike (country, department, brand, model, frame_size, build_year, bicycode, kms, length, general_state, mecanic_state, esthetic_state, guarantee, info_guarantee, volume_box, electric, engine_power, battery_volt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      country,
      department,
      brand,
      model,
      frame_size,
      build_year,
      bicycode,
      kms,
      length,
      general_state,
      mecanic_state,
      esthetic_state,
      guarantee,
      info_guarantee,
      volume_box,
      electric,
      engine_power,
      battery_volt,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

//supprime un vélo cargo:
const delete_ = (id) => {
  return db.promise().query("DELETE FROM cargo_bike WHERE id=?", [id]);
};

module.exports = { findMany, create, getOneCargoBike, delete_ };
