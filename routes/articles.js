const articlesRouter = require("express").Router();
const {
  getArticles,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,

} = require("../controllers/articles");

articlesRouter.get("/", getArticles);
articlesRouter.get("/:id", getArticle);
articlesRouter.post("/", createArticle);
articlesRouter.patch("/:id", updateArticle);
articlesRouter.delete("/:id", deleteArticle)

module.exports = articlesRouter;
