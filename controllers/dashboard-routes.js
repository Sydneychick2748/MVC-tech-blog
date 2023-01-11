const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
//
// // get all  posts for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "post_text", "title",],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
         
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    console.log("THESE ARE OUR POSTS", posts);

    res.render("dashboard", { posts, loggedIn: true });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get one post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
           
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("edit-post", { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  this is the route to get new post
router.get("/new", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("new-post", { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
