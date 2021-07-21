const db = require("../db");

//récupère tous les acrticles:
const findMany = ({ title, limit = 10, page = 1 }) => {
  // si mot clé renseigné, retourne les articles comprenant le mot clé:
  if (title) {
    return Promise.all([
      db
        .promise()
        .query(
          `SELECT * FROM articles WHERE title LIKE ? ORDER BY created_at DESC LIMIT ${limit} OFFSET ${
            (page - 1) * limit
          }`,
          [`%${title}%`]
        ),
      db
        .promise()
        .query(
          `SELECT count(*) as totalArticle FROM articles WHERE title LIKE ? ORDER BY created_at DESC`,
          [`%${title}%`]
        ),
    ]);
  }
  //sinon retourne tous les articles
  return Promise.all([
    db
      .promise()
      .query(
        `SELECT * FROM articles ORDER BY created_at DESC LIMIT ${limit} OFFSET ${
          (page - 1) * limit
        }`
      ),
    db
      .promise()
      .query(
        `SELECT count(*) as totalArticle FROM articles ORDER BY created_at DESC`
      ),
  ]);
};

//récupère un artcile:
const getOneArticle = (id) => {
  return db.promise().query("SELECT * FROM articles WHERE id=?", [id]);
};

//crée un article:
const create = ({ title, text, photo }) => {
  return db
    .promise()
    .query(
      "INSERT INTO articles (title, text, photo, created_at) VALUES (?, ?, ?, ?)",
      [title, text, photo, new Date()]
    );
};

//MAJ un article:
const update = (id, newAttributes) => {
  return db
    .promise()
    .query("UPDATE articles SET ? WHERE id= ?", [newAttributes, id]);
};

//supprime un article:
const delete_ = (id) => {
  return db.promise().query("DELETE FROM articles WHERE id=?", [id]);
};

module.exports = {
  findMany,
  getOneArticle,
  create,
  update,
  delete_,
};
