const db = require("../db");
const queryBuilder = require("./queryBuilder");

//récupère toutes les annonces:
const findMany = (criteria) => {
  const [filter, order, limit] = queryBuilder(criteria);
  //si filtre il y a, retourne les annonces filtrées:
  if (filter) {
    return Promise.all([
      db
        .promise()
        .query(
          `SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.* FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id WHERE ${filter} ${order} ${limit}`
        ),
      db
        .promise()
        .query(
          `SELECT count(*) as totalAds FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id WHERE ${filter}`
        ),
    ]);
    //sinon retourne tous les artciles:
  } else {
    return Promise.all([
      db
        .promise()
        .query(
          `SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.* FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id ${order} ${limit}`
        ),
      db
        .promise()
        .query(
          `SELECT count(*) as totalAds FROM ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id`
        ),
    ]);
  }
};

//récupère une annonce via id:
const getOneAd = (id) => {
  return db
    .promise()
    .query(
      "SELECT ads.id AS ads_id, ads.*, CB.id AS cargo_bike_id, CB.*, ACC.id AS accessories_id, ACC.*, TRA.id AS trailer_id, TRA.*, users.id as user_id, users.* FROM ads AS ads LEFT JOIN cargo_bike AS CB ON ads.cargo_bike_id = CB.id LEFT JOIN accessories AS ACC ON ads.accessories_id = ACC.id LEFT JOIN trailer AS TRA ON ads.trailer_id = TRA.id JOIN users ON users.id = ads.user_id WHERE ads.id=?",
      [id]
    );
};

//crée une annonce:
const create = ({
  title,
  type,
  description,
  photo,
  price,
  cargobikeId,
  trailerId,
  accessoryId,
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
  userId,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO ads (title, type, created_at, description, photo, price, cargo_bike_id, trailer_id, accessories_id, country, department, brand, model, build_year, bicycode, kms, general_state, mecanic_state, esthetic_state, guarantee, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        type,
        new Date(),
        description,
        photo,
        price,
        cargobikeId,
        trailerId,
        accessoryId,
        country,
        department,
        brand,
        model,
        parseInt(build_year) ? parseInt(build_year) : null,
        bicycode,
        parseInt(kms) ? parseInt(kms) : null,
        general_state,
        mecanic_state,
        esthetic_state,
        guarantee,
        parseInt(userId),
      ]
    );
};

//supprime une annonce:
const delete_ = (id) => {
  return db.promise().query("DELETE FROM ads WHERE id=?", [id]);
};

module.exports = {
  findMany,
  create,
  getOneAd,
  delete_,
};
