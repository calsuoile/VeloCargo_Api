const db = require("../db");

//récupère toutes les remorques:
const findMany = () => {
  return db.promise().query("SELECT * FROM trailer");
};

//récupère une remorque:
const getOneTrailer = (id) => {
  return db.promise().query("SELECT * FROM trailer WHERE id=?", [id]);
};

//crée une remorque:
const create = async ({
  country,
  department,
  brand,
  model,
  build_year,
  bicycode,
  kms,
  general_state,
  mecanic_state,
  esthetic_state,
  guarantee,
  max_load_kg,
  max_children,
  volume_trail,
}) => {
  db.promise().query(
    "INSERT INTO trailer (country, department, brand, model, build_year, bicycode, kms, general_state, mecanic_state, esthetic_state, guarantee, max_load_kg, max_children, volume_trail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      country,
      department,
      brand,
      model,
      build_year,
      bicycode,
      parseInt(kms) ? parseInt(kms) : null,
      general_state,
      mecanic_state,
      esthetic_state,
      guarantee,
      parseInt(max_load_kg) ? parseInt(max_load_kg) : null,
      parseInt(max_children) ? parseInt(max_children) : null,
      parseFloat(volume_trail) ? parseFloat(volume_trail) : null,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

//supprime une remorque:
const delete_ = (id) => {
  return db.promise().query("DELETE FROM trailer WHERE id=?", [id]);
};

module.exports = { findMany, create, getOneTrailer, delete_ };
