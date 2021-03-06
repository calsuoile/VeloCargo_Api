const {
  findMany,
  getOneArticle,
  create,
  update,
  delete_,
} = require("../models/articles");

const getArticles = async (req, res) => {
  const [[articles], [count]] = await findMany(req.query);
  res.status(200).json({ data: articles, metadata: count[0] });
};

const getArticle = async (req, res) => {
  const [article] = await getOneArticle(req.params.id);
  res.status(200).json(article);
};

const createArticle = async (req, res) => {
  // if (checkAdmin(req.user, res)) {
    try {
      await create(req.body);
      res.status(201).send("Article has been created");
    } catch (err) {
      res.status(500).send("Error creating article");
    }
  // }
};

const updateArticle = async (req, res) => {
  if (checkAdmin(req.user, res)) {
    try {
      await update(req.params.id, req.body);
      res.status(200).send("Article has been updated");
    } catch (err) {
      res.status(500).send("Error updating article");
    }
  }
};

const deleteArticle = async (req, res) => {
  // if (checkAdmin(req.user, res)) {
    try {
      await delete_(req.params.id);
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting article");
    }
  // }
};

const checkAdmin = (user, res) => {
  if (user?.role === "admin") {
    return true;
  }

  res.status(401).send("Unauthorized");
  return false;
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
