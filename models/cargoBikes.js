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
      parseInt(build_year) ? parseInt(build_year) : null,
      bicycode,
      parseInt(kms) ? parseInt(kms) : null,
      parseFloat(length) ? parseFloat(length) : null,
      general_state,
      mecanic_state,
      esthetic_state,
      guarantee,
      info_guarantee,
<<<<<<< HEAD
      parseFloat(volume_box) ? parseFloat(volume_box) : null,
      electric,
      parseInt(engine_power) ? parseInt(engine_power) : null,
      parseInt(battery_volt) ? parseInt(battery_volt) : null,
=======
      volume_box,
      electric,
      engine_power,
      battery_volt,
>>>>>>> origin/dev
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

module.exports = { findMany, create, getOneCargoBike };
