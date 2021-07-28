const articlesRouter = require("express").Router();
const {
  getArticles,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");
const { verifyToken } = require("../middleware/auth");

articlesRouter.get("/", getArticles);
articlesRouter.get("/:id", getArticle);
// articlesRouter.post("/", verifyToken, createArticle);
articlesRouter.post("/", createArticle);

articlesRouter.patch("/:id", verifyToken, updateArticle);
// articlesRouter.delete("/:id", verifyToken, deleteArticle);
articlesRouter.delete("/:id", deleteArticle);



module.exports = articlesRouter;
