const db = require("../db");

const findMany = () => {
  return db.promise().query("SELECT * FROM cargo_bike");
};

const getOneCargoBike = (id) => {
  return db.promise().query("SELECT * FROM cargo_bike WHERE id=?", [id]);
};

const create = async ({
  type,
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
  max_front_children,
  max_back_children,
  volume_box,
  electric,
  engine_brand,
  engine_position,
  engine_torque,
  engine_power,
  battery_volt,
  battery_capacity,
  battery_power,
  battery_nb_cycle,
  speeds_back,
  speeds_plate,
  rain_cover,
  child_seat,
  protective_cover,
  safety_lock,
  other_items,
  funny_picture,
  bench_box,
}) => {
  db.promise().query(
    "INSERT INTO cargo_bike (type, country, department, brand, model, frame_size, build_year, bicycode, kms, length, general_state, mecanic_state, esthetic_state, guarantee, info_guarantee, max_front_children, max_back_children, volume_box, electric, engine_brand, engine_position, engine_torque, engine_power, battery_volt, battery_capacity, battery_power, battery_nb_cycle, speeds_back, speeds_plate, rain_cover, child_seat, protective_cover, safety_lock, other_items, funny_picture, bench_box) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      type,
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
      max_front_children,
      max_back_children,
      volume_box,
      electric,
      engine_brand,
      engine_position,
      engine_torque,
      engine_power,
      battery_volt,
      battery_capacity,
      battery_power,
      battery_nb_cycle,
      speeds_back,
      speeds_plate,
      rain_cover,
      child_seat,
      protective_cover,
      safety_lock,
      other_items,
      funny_picture,
      bench_box,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

module.exports = { findMany, create, getOneCargoBike };
