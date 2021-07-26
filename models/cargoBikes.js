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
  frame_size,
  length,
  info_guarantee,
  volume_box,
  electric,
  engine_power,
  battery_volt,
}) => {
  db.promise().query(
    "INSERT INTO cargo_bike (frame_size, length, info_guarantee, volume_box, electric, engine_power, battery_volt) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      frame_size,
      parseFloat(length) ? parseFloat(length) : null,
      info_guarantee,
      parseFloat(volume_box) ? parseFloat(volume_box) : null,
      electric,
      parseInt(engine_power) ? parseInt(engine_power) : null,
      parseInt(battery_volt) ? parseInt(battery_volt) : null,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

//supprime un vélo cargo:
/*const delete_ = (id) => {
  return db.promise().query("DELETE FROM cargo_bike WHERE id=?", [id]);
};*/

module.exports = { findMany, create, getOneCargoBike };
