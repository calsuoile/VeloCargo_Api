const db = require("../db");

const findMany = ({title}) => {
  if (title) {
    return db
      .promise()
      .query("SELECT * FROM articles WHERE title LIKE ?", [`%${title}%`]);
  }
  return db.promise().query("SELECT * FROM articles");
};

const getOneArticle = (id) => {
  return db.promise().query("SELECT * FROM articles WHERE id=?", [id]);
};

const create = ({ title, text, photo }) => {
  return db
    .promise()
    .query(
      "INSERT INTO articles (title, text, photo, created_at) VALUES (?, ?, ?, ?)",
      [title, text, photo, new Date()]
    );
};

const update = (id, newAttributes) => {
  return db
    .promise()
    .query("UPDATE articles SET ? WHERE id= ?", [newAttributes, id]);
};

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
