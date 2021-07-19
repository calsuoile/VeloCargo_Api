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
articlesRouter.post("/", createArticle); // restrict to admin only
articlesRouter.patch("/:id", updateArticle); // restrict to admin only
articlesRouter.delete("/:id", deleteArticle); // restrict to admin only

module.exports = articlesRouter;
