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
  funny_picture,
}) => {
  db.promise().query(
    "INSERT INTO trailer (country, department, brand, model, build_year, bicycode, kms, general_state, mecanic_state, esthetic_state, guarantee, max_load_kg, max_children, volume_trail, funny_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
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
      funny_picture,
    ]
  );
  const [data] = await db.promise().query("SELECT LAST_INSERT_ID() AS id");
  return data[0];
};

module.exports = { findMany, create, getOneTrailer };
